#ifndef _ROS_bmp280_bmp280_data_h
#define _ROS_bmp280_bmp280_data_h

#include <stdint.h>
#include <string.h>
#include <stdlib.h>
#include "ros/msg.h"
#include "std_msgs/Header.h"

namespace bmp280
{

  class bmp280_data : public ros::Msg
  {
    public:
      typedef std_msgs::Header _header_type;
      _header_type header;
      typedef double _tempC_type;
      _tempC_type tempC;
      typedef double _pressureP_type;
      _pressureP_type pressureP;
      typedef double _pressureA_type;
      _pressureA_type pressureA;
      typedef double _altitudeM_type;
      _altitudeM_type altitudeM;

    bmp280_data():
      header(),
      tempC(0),
      pressureP(0),
      pressureA(0),
      altitudeM(0)
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
      } u_pressureP;
      u_pressureP.real = this->pressureP;
      *(outbuffer + offset + 0) = (u_pressureP.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_pressureP.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_pressureP.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_pressureP.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_pressureP.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_pressureP.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_pressureP.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_pressureP.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->pressureP);
      union {
        double real;
        uint64_t base;
      } u_pressureA;
      u_pressureA.real = this->pressureA;
      *(outbuffer + offset + 0) = (u_pressureA.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_pressureA.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_pressureA.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_pressureA.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_pressureA.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_pressureA.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_pressureA.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_pressureA.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->pressureA);
      union {
        double real;
        uint64_t base;
      } u_altitudeM;
      u_altitudeM.real = this->altitudeM;
      *(outbuffer + offset + 0) = (u_altitudeM.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_altitudeM.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_altitudeM.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_altitudeM.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_altitudeM.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_altitudeM.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_altitudeM.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_altitudeM.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->altitudeM);
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
      } u_pressureP;
      u_pressureP.base = 0;
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_pressureP.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->pressureP = u_pressureP.real;
      offset += sizeof(this->pressureP);
      union {
        double real;
        uint64_t base;
      } u_pressureA;
      u_pressureA.base = 0;
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_pressureA.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->pressureA = u_pressureA.real;
      offset += sizeof(this->pressureA);
      union {
        double real;
        uint64_t base;
      } u_altitudeM;
      u_altitudeM.base = 0;
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_altitudeM.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->altitudeM = u_altitudeM.real;
      offset += sizeof(this->altitudeM);
     return offset;
    }

    const char * getType(){ return "bmp280/bmp280_data"; };
    const char * getMD5(){ return "c5e4218ec509085711881fab8b571873"; };

  };

}
#endif