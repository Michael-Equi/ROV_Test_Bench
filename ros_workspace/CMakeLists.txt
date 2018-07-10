cmake_minimum_required(VERSION 3.10)
project(ros_workspace)

set(CMAKE_CXX_STANDARD 11)

include_directories(devel)
include_directories(devel/include)
include_directories(devel/include/vector_drive)

add_executable(ros_workspace
        devel/include/vector_drive/thrusterPercents.h
        src/rov_control_interface/launch/control_interface.launch
        src/rov_control_interface/src/logi_joystick.cpp
        src/rov_control_interface/CMakeLists.txt
        src/rov_control_interface/package.xml
        src/vector_drive/launch/vector_drive.launch
        src/vector_drive/msg/thrusterPercents.msg
        src/vector_drive/src/horiz_drive.cpp
        src/vector_drive/src/vert_drive.cpp
        src/vector_drive/CMakeLists.txt
        src/vector_drive/package.xml
        src/CMakeLists.txt)
