#include <string>
#include <sstream>

//Converting string to number
int stringToNumber(std::string str){
	int var;

	//Not supported right now 
	
	return -1;
}

//Converting a number to string
std::string numberToString(int num){
	std::ostringstream strout;
	std::string str;

	strout << num;
	str = strout.str();

	return str;
}

//Converting string wich repesenting a hexnumber to number
int hexstringToNumber(std::string str){
	std::stringstream  strin;
	int var;

	strin << std::hex << str;
	strin >> var;
	
	return var;
}
