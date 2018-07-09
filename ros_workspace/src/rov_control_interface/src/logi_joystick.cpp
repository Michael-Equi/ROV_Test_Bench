#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <sensor_msgs/Joy.h>

//Location of axis in the joy message array
const int linearAxisFBIndex = 1; //forward-backward
const int linearAxisLRIndex = 0; //left-right
const int angularAxisIndex = 2;
const int verticalAxisIndex = 3;

//list buttons




class logitechExtreme3DJoystick
{

    //private member variables
    ros::NodeHandle n;

    //doubles for sensitively control (placeholders for now)
    double l_scale, a_scale, v_scale;

    //doubles for holding the value of the control axis
    double a_axis, l_axisLR, l_axisFB, v_axis;

    bool thrustEN; //thrusters enabled

    //inversion added here
    //inversion -> 1 Front, 2 Left, 3 Back, 4 Right
    int inversion;

    //subscribing to the logitech joystick and outputting control vectors
    ros::Publisher vel_pub;
    ros::Subscriber joy_sub;


    //What the node does when joy_sub receives a new publish message
    void joyCallback(const sensor_msgs::Joy::ConstPtr& joy){

        //check if thrusters disabled
        if (n.param("thrustersEnabled", thrustEN, false) && thrustEN == true){

            //joystick message
            //float32[] axes          the axes measurements from a joystick
            //int32[] buttons         the buttons measurements from a joystick

            //temporary implementation of scale
            l_scale = 1;
            a_scale = 1;
            v_scale = 1;

            a_axis = joy->axes[angularAxisIndex]*a_scale;
            l_axisLR = joy->axes[linearAxisLRIndex]*l_scale;
            l_axisFB = joy->axes[linearAxisFBIndex]*l_scale;
            v_axis = joy->axes[verticalAxisIndex]*v_scale;

        } else {

            a_axis = 0;
            l_axisLR = 0;
            l_axisFB = 0;
            v_axis = 0;

        }

        //publish the vector values
        geometry_msgs::Twist commandVectors;

        commandVectors.linear.x = l_axisLR;
        commandVectors.linear.y = l_axisFB;
        commandVectors.linear.z = v_axis; //linear z is for vertical strength

        commandVectors.angular.x = a_axis;

        //other angular axis for roll and pitch have phase 2 implementation
        commandVectors.angular.y = 0;
        commandVectors.angular.z = 0;

        vel_pub.publish(commandVectors);

    }

public:
    //constructor
    logitechExtreme3DJoystick()
    {
        vel_pub = n.advertise<geometry_msgs::Twist>("rov/cmd_vel", 1);
        joy_sub = n.subscribe<sensor_msgs::Joy>("joy", 2, &logitechExtreme3DJoystick::joyCallback, this);

        //Not implemented -> msg type most likely going to change
        //copilotControl_sub = n.subscribe<sensor_msgs::Joy>("joy", 2, &logitechExtreme3DJoystick::joyCallback, this);
    }

};


int main(int argc, char **argv)
{
    ros::init(argc, argv, "joystick");

    //declare a new object of type logitechExtreme3DJoystick
    logitechExtreme3DJoystick logi_joystick;

    //Enter the event loop
    ros::spin();

    return 0;
}