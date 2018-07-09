#include "ros/ros.h"
#include <geometry_msgs/Twist.h>

//custom message for holding 4 float32 thruster percents
#include "vector_drive/thrusterPercents.h"

vector_drive::thrusterPercents thrustPercents;

//Thruster values
double T1, T2, T3, T4;

void commandVectorCallback(const geometry_msgs::Twist::ConstPtr& vel)
{
    //only deals with values pertaining to horizontal vector drive
    //linear
    //vel->linear.x;
    //vel->linear.y;
    //angular
    //vel->angular.x;
}

int main(int argc, char **argv)
{

    //initialize node for horizontal vector drive
    ros::init(argc, argv, "horiz_drive");

    ros::NodeHandle n;

    //ROS publisher to send thruster percent to hardware control node for CAN transmission
    ros::Publisher pub = n.advertise<vector_drive::thrusterPercents>("rov/cmd_horizontal_vdrive", 1);

    //ROS subscriber to get vectors from the joystick control input
    ros::Subscriber sub = n.subscribe("rov/cmd_vel", 1, commandVectorCallback);


    ros::spin();

    return 0;
}


