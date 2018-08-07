#ifndef _ROS_bno055_bno055_info_h
#define _ROS_bno055_bno055_info_h

#include <stdint.h>
#include <string.h>
#include <stdlib.h>
#include "ros/msg.h"
#include "std_msgs/Header.h"

namespace bno055
{

  class bno055_info : public ros::Msg
  {
    public:
      typedef std_msgs::Header _header_type;
      _header_type header;
      typedef double _tempC_type;
      _tempC_type tempC;
      typedef uint8_t _accelCalibration_type;
      _accelCalibration_type accelCalibration;
      typedef uint8_t _gyroCalibration_type;
      _gyroCalibration_type gyroCalibration;
      typedef uint8_t _magnoCalibration_type;
      _magnoCalibration_type magnoCalibration;
      typedef uint8_t _sysCalibration_type;
      _sysCalibration_type sysCalibration;

    bno055_info():
      header(),
      tempC(0),
      accelCalibration(0),
      gyroCalibration(0),
      magnoCalibration(0),
      sysCalibration(0)
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
      *(outbuffer + offset + 0) = (this->accelCalibration >> (8 * 0)) & 0xFF;
      offset += sizeof(this->accelCalibration);
      *(outbuffer + offset + 0) = (this->gyroCalibration >> (8 * 0)) & 0xFF;
      offset += sizeof(this->gyroCalibration);
      *(outbuffer + offset + 0) = (this->magnoCalibration >> (8 * 0)) & 0xFF;
      offset += sizeof(this->magnoCalibration);
      *(outbuffer + offset + 0) = (this->sysCalibration >> (8 * 0)) & 0xFF;
      offset += sizeof(this->sysCalibration);
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
      this->accelCalibration =  ((uint8_t) (*(inbuffer + offset)));
      offset += sizeof(this->accelCalibration);
      this->gyroCalibration =  ((uint8_t) (*(inbuffer + offset)));
      offset += sizeof(this->gyroCalibration);
      this->magnoCalibration =  ((uint8_t) (*(inbuffer + offset)));
      offset += sizeof(this->magnoCalibration);
      this->sysCalibration =  ((uint8_t) (*(inbuffer + offset)));
      offset += sizeof(this->sysCalibration);
     return offset;
    }

    const char * getType(){ return "bno055/bno055_info"; };
    const char * getMD5(){ return "c1818d2af59dc79e8470c9bf920f48a8"; };

  };

}
#endif