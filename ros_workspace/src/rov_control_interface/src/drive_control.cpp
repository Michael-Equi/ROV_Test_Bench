#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <sensor_msgs/Joy.h>

#include <dynamic_reconfigure/server.h>
#include <copilot_interface/copilotControlParamsConfig.h>

//Temporary
#include <std_msgs/UInt8.h> //For camera Pub
#include <std_msgs/Bool.h> //tcu relay and solenoid controller
//Added 3 temporary publishers - delete when fixed

//Location of axis in the joy message array
const int linearAxisFBIndex = 1; //forward-backward
const int linearAxisLRIndex = 0; //left-right
const int angularAxisIndex = 2;
const int verticalAxisIndex = 3;


//doubles for sensitively control (placeholders for now)
double l_scale(0.5), a_scale(0.5), v_scale(0.5);

//doubles for holding the value of the control axis
double a_axis(0), l_axisLR(0), l_axisFB(0), v_axis(0);

bool thrustEN(false); //thrusters enabled?


//inversion -> 1 Front, 2 Left, 3 Back, 4 Right
int inversion(0);

//variables for bilinear control
const double bilinearRatio(1.5);
const double bilinearThreshold(1.0 / bilinearRatio);


//subscribing to the logitech joystick and outputting control vectors
ros::Publisher vel_pub;
ros::Subscriber joy_sub;

//Temporary publishers
ros::Publisher camera_select; //Camera pub
ros::Publisher power_control; //tcu relay controller
ros::Publisher solenoid_control; //tcu solenoid controller


void bilinearCalc(double &axis){
    if((bilinearThreshold * -0.32768)<= axis && axis < (bilinearThreshold * 0.32767)){ //middle range
        axis/=bilinearRatio;

    } else if((bilinearThreshold * 0.32767) < axis && axis <= 0.32767) { //upper range
        axis = (bilinearRatio * axis) + ((bilinearRatio * -0.32767) + 0.32767);

    } else if(-0.32768 <= axis && axis < (bilinearThreshold * -0.32768)){//lower range
        axis = (bilinearRatio * axis) + ((bilinearRatio * 0.32768) - 0.32768);

    }
}


//What the node does when joy_sub receives a new publish message
void joyCallback(const sensor_msgs::Joy::ConstPtr& joy){


    //once copilot interface is created the params will be replaced with topics (inversion + sensitivity)

    //check if thrusters disabled (temporary until addition of a dynamic_reconfigure)
    if (thrustEN) {

        //joystick message
        //float32[] axes          the axes measurements from a joystick
        //int32[] buttons         the buttons measurements from a joystick

        //store axes variables and handle 4 cases of inversion
        a_axis = joy->axes[angularAxisIndex] * a_scale;
        v_axis = joy->axes[verticalAxisIndex] * v_scale;

        switch (inversion){
        case 1 : //left side is front
            l_axisFB = joy->axes[linearAxisLRIndex] * l_scale;
            l_axisLR = joy->axes[linearAxisFBIndex] * l_scale;
            break;
        case 2 : //back side is front
            l_axisLR = joy->axes[linearAxisLRIndex] * l_scale * -1;
            l_axisFB = joy->axes[linearAxisFBIndex] * l_scale * -1;
            break;
        case 3 : //right side is front
            l_axisFB = joy->axes[linearAxisLRIndex] * l_scale * -1;
            l_axisLR = joy->axes[linearAxisFBIndex] * l_scale * -1;
            break;
        default: //front side is front
            l_axisLR = joy->axes[linearAxisLRIndex] * l_scale;
            l_axisFB = joy->axes[linearAxisFBIndex] * l_scale;
            break;
        }



        //apply the bilinear ratio on all axis
        bilinearCalc(a_axis);
        bilinearCalc(l_axisLR);
        bilinearCalc(l_axisFB);
        bilinearCalc(v_axis);



    } else {

        a_axis = 0;
        l_axisLR = 0;
        l_axisFB = 0;
        v_axis = 0;

    }

    //publish the vector values -> build up command vector message
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


//For handling base copilot input
//Updates thrusters enabled sensitivity and inversion
void controlCallback(copilot_interface::copilotControlParamsConfig &config, uint32_t level) {

    thrustEN = config.thrustersEnabled;

    l_scale = config.l_scale;
    a_scale = config.a_scale;
    v_scale = config.v_scale;

    inversion = config.inversion;

    //Camera publisher
    std_msgs::UInt8 msg;
    msg.data = config.camera;
    camera_select.publish(msg);

    //tcu board publishers
    std_msgs::Bool relayMsg;
    std_msgs::Bool solMsg;
    relayMsg.data = config.power;
    solMsg.data = config.pneumatics;
    power_control.publish(relayMsg);
    solenoid_control.publish(solMsg);
}



int main(int argc, char **argv)
{
    ros::init(argc, argv, "drive_control");

    //ROS nodehandle
    ros::NodeHandle n;


    //setup publisher and subscriber
    vel_pub = n.advertise<geometry_msgs::Twist>("rov/cmd_vel", 1);
    joy_sub = n.subscribe<sensor_msgs::Joy>("joy", 2, &joyCallback);

    camera_select = n.advertise<std_msgs::UInt8>("camera_select", 3); //Camera pub
    power_control = n.advertise<std_msgs::Bool>("tcu/main_relay", 3); //Relay pub
    solenoid_control = n.advertise< std_msgs::Bool>("tcu/main_solenoid", 3); //Solenoid pub

    //setup dynamic reconfigure
    dynamic_reconfigure::Server<copilot_interface::copilotControlParamsConfig> server;
    dynamic_reconfigure::Server<copilot_interface::copilotControlParamsConfig>::CallbackType f;

    f = boost::bind(&controlCallback, _1, _2);
    server.setCallback(f);


    //Enter the event loop
    ros::spin();

    return 0;
}
