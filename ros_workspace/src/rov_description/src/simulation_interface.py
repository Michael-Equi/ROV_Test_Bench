#!/usr/bin/env python

import rospy
from math import sqrt
from vector_drive.msg import thrusterPercents
from uuv_gazebo_ros_plugins_msgs.msg import FloatStamped

T1, T2, T3, T4, T5, T6 = 0, 0, 0, 0, 0, 0

rospy.init_node("simulation_interface")

def map(input, inMin, inMax, outMin, outMax):
    return(((input-inMin)/(inMax-inMin))*(outMax-outMin)+outMin)

##Converts the thruster percent to an rotor angular velocity that can be sent to the basic uuv thruster controller
# The function assumes a rotor constant of 0.0031 which is the default for the RexROV
# @param inputVal The input thruster percent*10 from -1000 to 1000
# @return A propellers angular velocity that can be sent to the uuv simulator thruster manager
def toRotorAngVel(inputVal):
    thrusterCmd = map(inputVal, -1000.0, 1000.0, 1100.0, 1900.0) #Convert thruster percent to microseconds signal
    if thrusterCmd > 1450 and thrusterCmd < 1550: #if the microseconds pulse is in the deadzone
        return 0
    else:
        #cubic function that takes in microseconds and outputs thruster force - source Blue Robotics
        thrusterForce = (0.000000013299668*(thrusterCmd**3)-0.00005769384*(thrusterCmd**2)+0.0866075898*thrusterCmd-44.91965613) #Thruster Force in Newtons
        #force is calculated in the uuv simulator with the equation rotorConstant*angularVel^2
        propAngVel = sqrt(thrusterForce/0.00031*(thrusterForce/abs(thrusterForce)))*(thrusterForce/abs(thrusterForce)) #We know that thrusterForce is not going to be zero here
        return propAngVel



#change the sign of the value in oder to compensate for the negative rotor constant
#rotor constant = -0.00031
def updateVert(data):
    global T1, T2, T3, T4
    T1 = -toRotorAngVel(data.t1)
    T2 = -toRotorAngVel(data.t2)
    T3 = -toRotorAngVel(data.t3)
    T4 = -toRotorAngVel(data.t4)

def updateHoriz(data):
    global T5, T6
    T5 = -toRotorAngVel(data.t1)
    T6 = -toRotorAngVel(data.t2)


verticals = rospy.Subscriber("rov/cmd_horizontal_vdrive", thrusterPercents, updateVert)
horzontals = rospy.Subscriber("rov/cmd_vertical_vdrive", thrusterPercents, updateHoriz)

t1_pub = rospy.Publisher("rov/thrusters/1/input", FloatStamped, queue_size=1)
t2_pub = rospy.Publisher("rov/thrusters/2/input", FloatStamped, queue_size=1)
t3_pub = rospy.Publisher("rov/thrusters/3/input", FloatStamped, queue_size=1)
t4_pub = rospy.Publisher("rov/thrusters/4/input", FloatStamped, queue_size=1)
t5_pub = rospy.Publisher("rov/thrusters/5/input", FloatStamped, queue_size=1)
t6_pub = rospy.Publisher("rov/thrusters/6/input", FloatStamped, queue_size=1)

while not rospy.is_shutdown():
    t1_msg = FloatStamped()
    t1_msg.data = T1
    t1_pub.publish(t1_msg)

    t2_msg = FloatStamped()
    t2_msg.data = T2
    t2_pub.publish(t2_msg)

    t3_msg = FloatStamped()
    t3_msg.data = T3
    t3_pub.publish(t3_msg)

    t4_msg = FloatStamped()
    t4_msg.data = T4
    t4_pub.publish(t4_msg)

    t5_msg = FloatStamped()
    t5_msg.data = T5
    t5_pub.publish(t5_msg)

    t6_msg = FloatStamped()
    t6_msg.data = T6
    t6_pub.publish(t6_msg)
