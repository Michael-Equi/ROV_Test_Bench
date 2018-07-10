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

    bool thrustEN; //thrusters enabled?

    //inversion added here
    //inversion -> 1 Front, 2 Left, 3 Back, 4 Right
    int inversion;

    //variables for bilinear control
    const double bilinearRatio;
    const double bilinearThreshold;

    //subscribing to the logitech joystick and outputting control vectors
    ros::Publisher vel_pub;
    ros::Subscriber joy_sub;

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


        //once copilot interface is created the params will be replaced with topics (inversion + sensiitivity)

        //check if thrusters disabled (temporary until addition of a dynamic_reconfigure)
        if (n.param("thrustersEnabled", thrustEN, false) && thrustEN == true) {

            //joystick message
            //float32[] axes          the axes measurements from a joystick
            //int32[] buttons         the buttons measurements from a joystick

            //temporary implementation of scale
            n.param("linearSensitivity", l_scale, 0.75);
            n.param("rotationalSensitivity", a_scale, 0.75);
            n.param("verticalSensitivity", v_scale, 0.75);

            //store axes variables and handle 4 cases of inversion
            a_axis = joy->axes[angularAxisIndex] * a_scale;
            v_axis = joy->axes[verticalAxisIndex] * v_scale;

            n.param("inversion", inversion, 0); //get the value of the inversion param (temporary)

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

public:
    //constructor
    logitechExtreme3DJoystick(): bilinearRatio(1.5), bilinearThreshold(1.0 / bilinearRatio), inversion(0),
                                 thrustEN(false)
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