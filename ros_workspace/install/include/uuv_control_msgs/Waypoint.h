// Generated by gencpp from file uuv_control_msgs/Waypoint.msg
// DO NOT EDIT!


#ifndef UUV_CONTROL_MSGS_MESSAGE_WAYPOINT_H
#define UUV_CONTROL_MSGS_MESSAGE_WAYPOINT_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>
#include <geometry_msgs/Point.h>

namespace uuv_control_msgs
{
template <class ContainerAllocator>
struct Waypoint_
{
  typedef Waypoint_<ContainerAllocator> Type;

  Waypoint_()
    : header()
    , point()
    , max_forward_speed(0.0)
    , heading_offset(0.0)
    , use_fixed_heading(false)
    , radius_of_acceptance(0.0)  {
    }
  Waypoint_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , point(_alloc)
    , max_forward_speed(0.0)
    , heading_offset(0.0)
    , use_fixed_heading(false)
    , radius_of_acceptance(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef  ::geometry_msgs::Point_<ContainerAllocator>  _point_type;
  _point_type point;

   typedef double _max_forward_speed_type;
  _max_forward_speed_type max_forward_speed;

   typedef double _heading_offset_type;
  _heading_offset_type heading_offset;

   typedef uint8_t _use_fixed_heading_type;
  _use_fixed_heading_type use_fixed_heading;

   typedef double _radius_of_acceptance_type;
  _radius_of_acceptance_type radius_of_acceptance;





  typedef boost::shared_ptr< ::uuv_control_msgs::Waypoint_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::uuv_control_msgs::Waypoint_<ContainerAllocator> const> ConstPtr;

}; // struct Waypoint_

typedef ::uuv_control_msgs::Waypoint_<std::allocator<void> > Waypoint;

typedef boost::shared_ptr< ::uuv_control_msgs::Waypoint > WaypointPtr;
typedef boost::shared_ptr< ::uuv_control_msgs::Waypoint const> WaypointConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::uuv_control_msgs::Waypoint_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace uuv_control_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': True}
// {'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'uuv_control_msgs': ['/home/michael/Desktop/ROSbasic/ros_workspace/src/uuv_simulator/uuv_control/uuv_control_msgs/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::uuv_control_msgs::Waypoint_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::uuv_control_msgs::Waypoint_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::uuv_control_msgs::Waypoint_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
{
  static const char* value()
  {
    return "0efb7fda1b5980152de94b6064a5cf35";
  }

  static const char* value(const ::uuv_control_msgs::Waypoint_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x0efb7fda1b598015ULL;
  static const uint64_t static_value2 = 0x2de94b6064a5cf35ULL;
};

template<class ContainerAllocator>
struct DataType< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uuv_control_msgs/Waypoint";
  }

  static const char* value(const ::uuv_control_msgs::Waypoint_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
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
std_msgs/Header header\n\
geometry_msgs/Point point\n\
float64 max_forward_speed\n\
float64 heading_offset\n\
bool use_fixed_heading\n\
float64 radius_of_acceptance\n\
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
MSG: geometry_msgs/Point\n\
# This contains the position of a point in free space\n\
float64 x\n\
float64 y\n\
float64 z\n\
";
  }

  static const char* value(const ::uuv_control_msgs::Waypoint_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.point);
      stream.next(m.max_forward_speed);
      stream.next(m.heading_offset);
      stream.next(m.use_fixed_heading);
      stream.next(m.radius_of_acceptance);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct Waypoint_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::uuv_control_msgs::Waypoint_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::uuv_control_msgs::Waypoint_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "point: ";
    s << std::endl;
    Printer< ::geometry_msgs::Point_<ContainerAllocator> >::stream(s, indent + "  ", v.point);
    s << indent << "max_forward_speed: ";
    Printer<double>::stream(s, indent + "  ", v.max_forward_speed);
    s << indent << "heading_offset: ";
    Printer<double>::stream(s, indent + "  ", v.heading_offset);
    s << indent << "use_fixed_heading: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.use_fixed_heading);
    s << indent << "radius_of_acceptance: ";
    Printer<double>::stream(s, indent + "  ", v.radius_of_acceptance);
  }
};

} // namespace message_operations
} // namespace ros

#endif // UUV_CONTROL_MSGS_MESSAGE_WAYPOINT_H
