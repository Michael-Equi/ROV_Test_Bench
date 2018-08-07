#ifndef _ROS_sht31_sht31_data_h
#define _ROS_sht31_sht31_data_h

#include <stdint.h>
#include <string.h>
#include <stdlib.h>
#include "ros/msg.h"
#include "std_msgs/Header.h"

namespace sht31
{

  class sht31_data : public ros::Msg
  {
    public:
      typedef std_msgs::Header _header_type;
      _header_type header;
      typedef double _tempC_type;
      _tempC_type tempC;
      typedef double _tempF_type;
      _tempF_type tempF;
      typedef double _humidity_type;
      _humidity_type humidity;

    sht31_data():
      header(),
      tempC(0),
      tempF(0),
      humidity(0)
    {
    }

    virtual int serialize(unsigned char *outbuffer) const
    {
      int offset = 0;
      offset += this->header.serialize(outbuffer + offset);
      union {
        double real;
        uint64_t base;
      } u_tempC;
      u_tempC.real = this->tempC;
      *(outbuffer + offset + 0) = (u_tempC.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_tempC.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_tempC.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_tempC.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_tempC.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_tempC.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_tempC.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_tempC.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->tempC);
      union {
        double real;
        uint64_t base;
      } u_tempF;
      u_tempF.real = this->tempF;
      *(outbuffer + offset + 0) = (u_tempF.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_tempF.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_tempF.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_tempF.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_tempF.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_tempF.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_tempF.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_tempF.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->tempF);
      union {
        double real;
        uint64_t base;
      } u_humidity;
      u_humidity.real = this->humidity;
      *(outbuffer + offset + 0) = (u_humidity.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_humidity.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_humidity.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_humidity.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_humidity.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_humidity.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_humidity.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_humidity.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->humidity);
      return offset;
    }

    virtual int deserialize(unsigned char *inbuffer)
    {
      int offset = 0;
      offset += this->header.deserialize(inbuffer + offset);
      union {
        double real;
        uint64_t base;
      } u_tempC;
      u_tempC.base = 0;
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_tempC.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->tempC = u_tempC.real;
      offset += sizeof(this->tempC);
      union {
        double real;
        uint64_t base;
      } u_tempF;
      u_tempF.base = 0;
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_tempF.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->tempF = u_tempF.real;
      offset += sizeof(this->tempF);
      union {
        double real;
        uint64_t base;
      } u_humidity;
      u_humidity.base = 0;
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_humidity.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->humidity = u_humidity.real;
      offset += sizeof(this->humidity);
     return offset;
    }

    const char * getType(){ return "sht31/sht31_data"; };
    const char * getMD5(){ return "e4499b266523b5e72cb5c84b02109a13"; };

  };

}
#endif