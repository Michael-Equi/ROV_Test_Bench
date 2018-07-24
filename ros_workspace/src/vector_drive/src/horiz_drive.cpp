#include <ros/ros.h>
#include <geometry_msgs/Twist.h>

//custom message for holding 4 float32 thruster percents
#include "vector_drive/thrusterPercents.h"


//pub and sub declarations
ros::Publisher pub;
ros::Subscriber sub;

//message being published
vector_drive::thrusterPercents thrustPercents; //To be filled with thrustersSet values

//template class for simple functions
template <class T>
void constrain(T &value, T min, T max){
    if(value > max){
        value = max;
    } else if(value < min){
        value = min;
    }
}

template <class T>
T abs(T value){
    if(value < 0)
        value*=-1;
    return value;
}

template <class T>
T max(T value1, T value2){
    if(value1 > value2)
        return value1;
    return value2;
}

template <class T>
T min(T value1, T value2){
    if(value1 < value2)
        return value1;
    return value2;
}

template <class T>
T map(T input, T inMin, T inMax, T outMin, T outMax){
    T output = (input - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    return output;
}


const vector_drive::thrusterPercents& vectorMath(double &linearX, double &linearY, double &angularX){

    //if values out of range flag an error
    if(abs(linearX) > 1 || abs(linearY) > 1 || abs(angularX) > 1){
        //ROS_ERROR("cmd_vel value out of range!\nEntering safe mode and disabling thrusters... ");
        ROS_ERROR_STREAM("linearX: " << linearX << "  linearY: " << linearY << "  angularX: " << angularX);
    }

    //inversion, sensitivity, bi-linear threshold are handled in logi_joystick (vectorCommand node)
    //deadzone handled by joy package

    //Motor calculations
    double T1 = linearX - linearY - angularX;
    double T2 = -linearX - linearY + angularX;
    double T3 = -linearX + linearY - angularX;
    double T4 = linearX + linearY + angularX;


//Normalize the values so that no motor outputs over 100% thrust
    double maxMotor = max(max(max(abs(T1), abs(T2)), T3), T4);
    double maxInput = max(max(abs(linearX), abs(linearY)), abs(angularX));

    if(maxMotor == 0)
        maxMotor = 1;

    T1 *= maxInput / maxMotor;
    T2 *= maxInput / maxMotor;
    T3 *= maxInput / maxMotor;
    T4 *= maxInput / maxMotor;



    ROS_DEBUG_STREAM("T1: " << thrustPercents.t1 << "  T2: " <<
                                thrustPercents.t2 << "  T3: " << thrustPercents.t3 << "  T4: " << thrustPercents.t4);

    //load thruster values into custom int32 ROS message
    thrustPercents.t1 = T1*1000;
    thrustPercents.t2 = T2*1000;
    thrustPercents.t3 = T3*1000;
    thrustPercents.t4 = T4*1000;


    return thrustPercents;

}


void commandVectorCallback(const geometry_msgs::Twist::ConstPtr& vel)
{
    //only deals with values pertaining to horizontal vector drive
    //linear
    double linearX = vel->linear.x;
    double linearY = vel->linear.y;

    //angular
    double angularX = vel->angular.x;

    vectorMath(linearX, linearY, angularX);

    //publish message
    pub.publish(thrustPercents);
}

int main(int argc, char **argv)
{

    //initialize node for horizontal vector drive
    ros::init(argc, argv, "horiz_drive");

    ros::NodeHandle n;

    //ROS publisher to send thruster percent to hardware control node for CAN transmission
    pub = n.advertise<vector_drive::thrusterPercents>("rov/cmd_horizontal_vdrive", 1);

    //ROS subscriber to get vectors from the joystick control input
    sub = n.subscribe("rov/cmd_vel", 1, commandVectorCallback);


    ros::spin();

    return 0;
}

