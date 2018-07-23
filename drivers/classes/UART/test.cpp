#include "uart.h"

#include <iostream>
#include <string>
#include <unistd.h>

int main(){
    uart serialCom = uart();
    std::string data;

    while(1){
        serialCom.write_data("4327\n", 5);
        std::cout << "Wrote Hello World\n";
        if(serialCom.available() > 0){
            serialCom.read_data(data);
            std::cout << data << '\n';
        }
        usleep(1000000);
    }

    return 0;
}
