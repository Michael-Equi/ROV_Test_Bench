#include "uart.h"

#include <termios.h> //for UART
#include <fcntl.h>   //for UART
#include <unistd.h>  //for UART write/read
#include <iostream>
#include <cstdlib> // for std::exit
#include <string>

uart::uart(int baud)
{
    /*http://linuc.die.net/man/3/tcgetattr*/

    flags = O_RDWR | O_NOCTTY | O_NONBLOCK; //set flag to read/write non-blocking mode with no controlling terminal

    fd = open("/dev/ttyACM0", flags);
    tcgetattr(fd, &tty);

    tty.c_cflag = (uart::tty.c_cflag & ~CSIZE) | CS8;

     //set baudrate
    switch(baud){
        case 9600:
            tty.c_cflag |= B9600;
            break;
        case 19200:
            tty.c_cflag |= B19200;
            break;
        case 38400:
            tty.c_cflag |= B38400;
            break;
        case 57600:
            tty.c_cflag |= B57600;
            break;
        case 115200:
            tty.c_cflag |= B115200;
            break;
        default:
            std::cout << "ERROR Invlaid baudrate!\n";
            std::exit(1);
    }

    //set read and write cflag
    tty.c_cflag |= CREAD; //Enable reciver
    tty.c_cflag |= PARENB; //Enable even parity
    tty.c_cflag &= ~CSTOPB; //No duplicate stop bits (protocol only uses one stop bit)

    //control modes lflag
    //Canonical mode -> makes input available at EOL
    tty.c_lflag |= ICANON;

    //input iflag

    //output oflag

    //commit the serial port settings
    if(tcsetattr(fd, TCSANOW, &tty) != 0){
        std::cout << "ERROR Can not set " << uart::fd << " to correct settings\n";
        std::exit(2);
    }

}

uart::~uart()
{
    close(fd);
}


int uart::write_data(char* data, int dataSize){
    if(write(fd, data, dataSize) != 0){
        return -1;
    }
    return 0;
}

void uart::read_data(std::string &buffer){
    if(buffer.capacity() < length){
        buffer.reserve(length + 5);
        std::cout << "Buffer capacity increased to " << length + 5 << '\n';
    }

    int i(0);
    while(rxBuffer[i] != '/0'){
        buffer[i] = rxBuffer[i];
        std::cout << rxBuffer[i];
        ++i;
    }
    std::cout << "Read complete\n";
    rxBuffer[0] = '\0'; // clear the buffer
}

int uart::available(){
    length = read(fd, &rxBuffer, 1023);
    return length;
}
