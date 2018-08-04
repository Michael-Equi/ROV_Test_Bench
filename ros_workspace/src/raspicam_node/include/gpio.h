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


/**
* @class gnublin_gpio
* @~english
* @brief Class for accessing GNUBLIN GPIO-Ports
*
* With the gnublin_gpio API you can controll the GPIO-Ports of the GNUBLIN Board
* @~german 
* @brief Klasse für den zugriff auf die GPIO Pins
*
* Mit der gnublin_gpio API lassen sich die GPIO-Ports auf dem GNUBLIN einfach aus dem eigenem Programm heraus ansteuern.  
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

class gnublin_gpio {
	public:
		gnublin_gpio();
		bool fail();
		int pinMode(int pin, std::string direction); //Defines GPIO<pin> as INPUT or OUTPUT
		int digitalWrite(int pin, int value); //Writes value on GPIO
		int digitalRead(int pin); //Reads value from GPIO<pin>
		int unexport(int pin);
		const char *getErrorMessage();
	private:
		bool error_flag;
		std::string ErrorMessage;
};
