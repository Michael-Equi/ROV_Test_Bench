#ifndef UART_H
#define UART_H

#include <termios.h> //for UART
#include <fcntl.h>   //for UART
#include <unistd.h>  //for UART
#include <string>

class uart
{

 struct termios tty;
 int flags;
 int fd; //linux file identifier

 unsigned char rxBuffer[1024]; //1024 = max receive message size
 unsigned int length;

 public:
    uart(int baud = 115200);
    virtual ~uart();

    //read all chars from the buffer
    void read_data(std::string&);

    int write_data(char*, int); //give a null reminated char array, returns -1 if an error occured

    int available(); // get size and update the rxBuffer -> prevents hanging programs

};

#endif // UART_H
