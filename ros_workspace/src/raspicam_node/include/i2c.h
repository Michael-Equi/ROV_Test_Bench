#include <cstring>
#include <ctime>
#include <fcntl.h>
#include <fstream>
#include <iostream>
#include <linux/i2c.h>
#include <linux/i2c-dev.h>
#include <linux/spi/spidev.h>
#include <sstream>
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <sys/ioctl.h>
#include <time.h>
#include <unistd.h>
#include <math.h>

//*******************************************************************
//Class for accessing GNUBLIN i2c Bus
//*******************************************************************
/**
* @class gnublin_i2c
* @~english
* @brief Class for accessing GNUBLIN i2c bus
*
* The GNUBLIN I2C bus can easily accessed with this class
* @~german 
* @brief Klasse für den zugriff auf den GNUBLIN I2C Bus
*
* Die GNUBLIN I2C Klasse gewährt einfachen Zugriff auf den I2C Bus
*/ 

#define GNUBLIN 1
#define RASPBERRY_PI 2
#define BEAGLEBONE_BLACK 3

#define OUTPUT 	"out"
#define INPUT	"in"
#define LOW	0
#define HIGH	1
#define ON	1
#define OFF	0
#define IN	1
#define OUT	0

int stringToNumber(std::string str);
std::string numberToString(int num);
int hexstringToNumber(std::string str);

class gnublin_i2c {
	bool error_flag;
	int slave_address;
	std::string devicefile;
	std::string ErrorMessage;
        int fd;
        int errorMsg(std::string message);
        int open_fd();
        void close_fd();
	void init(std::string DeviceFile, int Address);
public:
	gnublin_i2c();
	gnublin_i2c(int Address);
	gnublin_i2c(std::string DeviceFile, int Address);
	~gnublin_i2c();
	bool fail();
	int setAddress(int Address);
	int getAddress();
	const char *getErrorMessage();
	int setDevicefile(std::string filename);
	int receive(unsigned char *RxBuf, int length);
	int receive(unsigned char RegisterAddress, unsigned char *RxBuf, int length);
	int send(unsigned char *TxBuf, int length);
	int send(unsigned char RegisterAddress, unsigned char *TxBuf, int length);
	int send(unsigned char value);
};
