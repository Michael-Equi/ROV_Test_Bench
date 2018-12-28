// Generated by gencpp from file uuv_sensor_ros_plugins_msgs/PositionWithCovarianceStamped.msg
// DO NOT EDIT!


#ifndef UUV_SENSOR_ROS_PLUGINS_MSGS_MESSAGE_POSITIONWITHCOVARIANCESTAMPED_H
#define UUV_SENSOR_ROS_PLUGINS_MSGS_MESSAGE_POSITIONWITHCOVARIANCESTAMPED_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>
#include <uuv_sensor_ros_plugins_msgs/PositionWithCovariance.h>

namespace uuv_sensor_ros_plugins_msgs
{
template <class ContainerAllocator>
struct PositionWithCovarianceStamped_
{
  typedef PositionWithCovarianceStamped_<ContainerAllocator> Type;

  PositionWithCovarianceStamped_()
    : header()
    , pos()  {
    }
  PositionWithCovarianceStamped_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , pos(_alloc)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef  ::uuv_sensor_ros_plugins_msgs::PositionWithCovariance_<ContainerAllocator>  _pos_type;
  _pos_type pos;





  typedef boost::shared_ptr< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> const> ConstPtr;

}; // struct PositionWithCovarianceStamped_

typedef ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<std::allocator<void> > PositionWithCovarianceStamped;

typedef boost::shared_ptr< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped > PositionWithCovarianceStampedPtr;
typedef boost::shared_ptr< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped const> PositionWithCovarianceStampedConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace uuv_sensor_ros_plugins_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': True}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'uuv_sensor_ros_plugins_msgs': ['/home/michael/Desktop/ROSbasic/ros_workspace/src/uuv_simulator/uuv_sensor_plugins/uuv_sensor_ros_plugins_msgs/msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ef0ae60585e532ef356441a1a701f864";
  }

  static const char* value(const ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xef0ae60585e532efULL;
  static const uint64_t static_value2 = 0x356441a1a701f864ULL;
};

template<class ContainerAllocator>
struct DataType< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uuv_sensor_ros_plugins_msgs/PositionWithCovarianceStamped";
  }

  static const char* value(const ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# Copyright (c) 2016 The UUV Simulator Authors.\n\
# All rights reserved.\n\
#\n\
# Licensed under the Apache License, Version 2.0 (the \"License\");\n\
# you may not use this file except in compliance with the License.\n\
# You may obtain a copy of the License at\n\
#\n\
#     http://www.apache.org/licenses/LICENSE-2.0\n\
#\n\
# Unless required by applicable law or agreed to in writing, software\n\
# distributed under the License is distributed on an \"AS IS\" BASIS,\n\
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n\
# See the License for the specific language governing permissions and\n\
# limitations under the License.\n\
\n\
# This expresses an estimated position with a reference coordinate frame and\n\
# timestamp\n\
\n\
Header header\n\
PositionWithCovariance pos\n\
\n\
================================================================================\n\
MSG: std_msgs/Header\n\
# Standard metadata for higher-level stamped data types.\n\
# This is generally used to communicate timestamped data \n\
# in a particular coordinate frame.\n\
# \n\
# sequence ID: consecutively increasing ID \n\
uint32 seq\n\
#Two-integer timestamp that is expressed as:\n\
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n\
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n\
# time-handling sugar is provided by the client library\n\
time stamp\n\
#Frame this data is associated with\n\
# 0: no frame\n\
# 1: global frame\n\
string frame_id\n\
\n\
================================================================================\n\
MSG: uuv_sensor_ros_plugins_msgs/PositionWithCovariance\n\
# Copyright (c) 2016 The UUV Simulator Authors.\n\
# All rights reserved.\n\
#\n\
# Licensed under the Apache License, Version 2.0 (the \"License\");\n\
# you may not use this file except in compliance with the License.\n\
# You may obtain a copy of the License at\n\
#\n\
#     http://www.apache.org/licenses/LICENSE-2.0\n\
#\n\
# Unless required by applicable law or agreed to in writing, software\n\
# distributed under the License is distributed on an \"AS IS\" BASIS,\n\
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n\
# See the License for the specific language governing permissions and\n\
# limitations under the License.\n\
\n\
# This represents a position in free space with uncertainty.\n\
\n\
geometry_msgs/Point pos\n\
\n\
# Row-major representation of the 3x3 covariance matrix\n\
float64[9] covariance\n\
\n\
================================================================================\n\
MSG: geometry_msgs/Point\n\
# This contains the position of a point in free space\n\
float64 x\n\
float64 y\n\
float64 z\n\
";
  }

  static const char* value(const ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.pos);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct PositionWithCovarianceStamped_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::uuv_sensor_ros_plugins_msgs::PositionWithCovarianceStamped_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "pos: ";
    s << std::endl;
    Printer< ::uuv_sensor_ros_plugins_msgs::PositionWithCovariance_<ContainerAllocator> >::stream(s, indent + "  ", v.pos);
  }
};

} // namespace message_operations
} // namespace ros

#endif // UUV_SENSOR_ROS_PLUGINS_MSGS_MESSAGE_POSITIONWITHCOVARIANCESTAMPED_H
