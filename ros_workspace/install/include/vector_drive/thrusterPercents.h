// Generated by gencpp from file vector_drive/thrusterPercents.msg
// DO NOT EDIT!


#ifndef VECTOR_DRIVE_MESSAGE_THRUSTERPERCENTS_H
#define VECTOR_DRIVE_MESSAGE_THRUSTERPERCENTS_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace vector_drive
{
template <class ContainerAllocator>
struct thrusterPercents_
{
  typedef thrusterPercents_<ContainerAllocator> Type;

  thrusterPercents_()
    : t1(0)
    , t2(0)
    , t3(0)
    , t4(0)  {
    }
  thrusterPercents_(const ContainerAllocator& _alloc)
    : t1(0)
    , t2(0)
    , t3(0)
    , t4(0)  {
  (void)_alloc;
    }



   typedef int32_t _t1_type;
  _t1_type t1;

   typedef int32_t _t2_type;
  _t2_type t2;

   typedef int32_t _t3_type;
  _t3_type t3;

   typedef int32_t _t4_type;
  _t4_type t4;





  typedef boost::shared_ptr< ::vector_drive::thrusterPercents_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::vector_drive::thrusterPercents_<ContainerAllocator> const> ConstPtr;

}; // struct thrusterPercents_

typedef ::vector_drive::thrusterPercents_<std::allocator<void> > thrusterPercents;

typedef boost::shared_ptr< ::vector_drive::thrusterPercents > thrusterPercentsPtr;
typedef boost::shared_ptr< ::vector_drive::thrusterPercents const> thrusterPercentsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::vector_drive::thrusterPercents_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::vector_drive::thrusterPercents_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace vector_drive

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'vector_drive': ['/home/michael/Desktop/ROSbasic/ros_workspace/src/vector_drive/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::vector_drive::thrusterPercents_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::vector_drive::thrusterPercents_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::vector_drive::thrusterPercents_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::vector_drive::thrusterPercents_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::vector_drive::thrusterPercents_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::vector_drive::thrusterPercents_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::vector_drive::thrusterPercents_<ContainerAllocator> >
{
  static const char* value()
  {
    return "a7d0e7700b4cbc9f7f9261f014f60680";
  }

  static const char* value(const ::vector_drive::thrusterPercents_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xa7d0e7700b4cbc9fULL;
  static const uint64_t static_value2 = 0x7f9261f014f60680ULL;
};

template<class ContainerAllocator>
struct DataType< ::vector_drive::thrusterPercents_<ContainerAllocator> >
{
  static const char* value()
  {
    return "vector_drive/thrusterPercents";
  }

  static const char* value(const ::vector_drive::thrusterPercents_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::vector_drive::thrusterPercents_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int32 t1\n\
int32 t2\n\
int32 t3\n\
int32 t4\n\
";
  }

  static const char* value(const ::vector_drive::thrusterPercents_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::vector_drive::thrusterPercents_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.t1);
      stream.next(m.t2);
      stream.next(m.t3);
      stream.next(m.t4);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct thrusterPercents_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::vector_drive::thrusterPercents_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::vector_drive::thrusterPercents_<ContainerAllocator>& v)
  {
    s << indent << "t1: ";
    Printer<int32_t>::stream(s, indent + "  ", v.t1);
    s << indent << "t2: ";
    Printer<int32_t>::stream(s, indent + "  ", v.t2);
    s << indent << "t3: ";
    Printer<int32_t>::stream(s, indent + "  ", v.t3);
    s << indent << "t4: ";
    Printer<int32_t>::stream(s, indent + "  ", v.t4);
  }
};

} // namespace message_operations
} // namespace ros

#endif // VECTOR_DRIVE_MESSAGE_THRUSTERPERCENTS_H
