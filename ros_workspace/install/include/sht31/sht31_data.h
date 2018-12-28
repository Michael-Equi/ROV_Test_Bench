// Generated by gencpp from file sht31/sht31_data.msg
// DO NOT EDIT!


#ifndef SHT31_MESSAGE_SHT31_DATA_H
#define SHT31_MESSAGE_SHT31_DATA_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>

namespace sht31
{
template <class ContainerAllocator>
struct sht31_data_
{
  typedef sht31_data_<ContainerAllocator> Type;

  sht31_data_()
    : header()
    , tempC(0.0)
    , tempF(0.0)
    , humidity(0.0)  {
    }
  sht31_data_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , tempC(0.0)
    , tempF(0.0)
    , humidity(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef double _tempC_type;
  _tempC_type tempC;

   typedef double _tempF_type;
  _tempF_type tempF;

   typedef double _humidity_type;
  _humidity_type humidity;





  typedef boost::shared_ptr< ::sht31::sht31_data_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::sht31::sht31_data_<ContainerAllocator> const> ConstPtr;

}; // struct sht31_data_

typedef ::sht31::sht31_data_<std::allocator<void> > sht31_data;

typedef boost::shared_ptr< ::sht31::sht31_data > sht31_dataPtr;
typedef boost::shared_ptr< ::sht31::sht31_data const> sht31_dataConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::sht31::sht31_data_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::sht31::sht31_data_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace sht31

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': True}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'sht31': ['/home/michael/Desktop/ROSbasic/ros_workspace/src/sht31/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::sht31::sht31_data_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::sht31::sht31_data_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::sht31::sht31_data_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::sht31::sht31_data_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::sht31::sht31_data_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::sht31::sht31_data_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::sht31::sht31_data_<ContainerAllocator> >
{
  static const char* value()
  {
    return "e4499b266523b5e72cb5c84b02109a13";
  }

  static const char* value(const ::sht31::sht31_data_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xe4499b266523b5e7ULL;
  static const uint64_t static_value2 = 0x2cb5c84b02109a13ULL;
};

template<class ContainerAllocator>
struct DataType< ::sht31::sht31_data_<ContainerAllocator> >
{
  static const char* value()
  {
    return "sht31/sht31_data";
  }

  static const char* value(const ::sht31::sht31_data_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::sht31::sht31_data_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n\
\n\
float64 tempC\n\
float64 tempF\n\
float64 humidity\n\
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
";
  }

  static const char* value(const ::sht31::sht31_data_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::sht31::sht31_data_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.tempC);
      stream.next(m.tempF);
      stream.next(m.humidity);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct sht31_data_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::sht31::sht31_data_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::sht31::sht31_data_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "tempC: ";
    Printer<double>::stream(s, indent + "  ", v.tempC);
    s << indent << "tempF: ";
    Printer<double>::stream(s, indent + "  ", v.tempF);
    s << indent << "humidity: ";
    Printer<double>::stream(s, indent + "  ", v.humidity);
  }
};

} // namespace message_operations
} // namespace ros

#endif // SHT31_MESSAGE_SHT31_DATA_H
