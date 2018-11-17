#!/usr/bin/env python

import rospy
from sense_hat import SenseHat
import time
from std_msgs.msg import String

sense = SenseHat()


def talker():
	temp_pub = rospy.Publisher('rov/temperature', int, queue_size = 3) #Publisher for the different sensors: Temperature, Humidity, Pressure, 
	pressure_pub = rospy.Publisher('rov/pressure', int, queue_size = 3) #yaw, pitch and roll
	humidity_pub = rospy.Publisher('rov/humidity', int, queue_size = 3)

	yaw_pub = rospy.Publisher('rov/yaw', int, queue_size = 3)
	pitch_pub = rospy.Publisher('rov/pitch', int, queue_size = 3)
	roll_pub = rospy.Publisher('rov/roll', int, queue_size = 3)

	rospy.init_node('sensors_readout')
	rate = rospy.Rate(60)
	while not rospy.is_shutdown():
		temp_pub.publish(round(sense.get_temperature()))#Actually pubish the things stated above
		pressure_pub.publish(round(sense.get_pressure()))
		humidity_pub.publish(round(sense.get_humidity()))

		orientation = sense.get_orientation()
		yaw_pub.publish(round(orientation["yaw"]))
		pitch_pub.publish(round(orientation["pitch"]))
		roll_pub.publish(round(orientation["roll"]))
		rate.sleep()

if __name__ == '__main__':
	try:
		talker()
	except rospy.ROSInterruptException:
		pass
