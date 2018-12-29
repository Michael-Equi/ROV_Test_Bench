#!/usr/bin/env python

import rospy
from vector_drive.msg import thrusterPercents
from uuv_gazebo_ros_plugins_msgs.msg import FloatStamped

T1, T2, T3, T4, T5, T6 = 0, 0, 0, 0, 0, 0

rospy.init_node("simulation_interface")

def updateVert(data):
    global T1, T2, T3, T4
    T1 = data.t1
    T2 = data.t2
    T3 = data.t3
    T4 = data.t4

def updateHoriz(data):
    global T5, T6
    T5 = data.t1
    T6 = data.t2


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
