#!/usr/bin/env python
import rospy
from sense_hat import SenseHat
import time
from std_msgs.msg import Int64

sense = SenseHat()

def talker():
	temp_pub = rospy.Publisher('rov/temperature', Int64, queue_size = 3) #Publisher for the different sensors: Temperature, Humidity, Pressure, 
	pressure_pub = rospy.Publisher('rov/pressure', Int64, queue_size = 3) 
	humidity_pub = rospy.Publisher('rov/humidity', Int64, queue_size = 3)

	yaw_pub = rospy.Publisher('rov/yaw', Int64, queue_size = 3) #yaw, pitch and roll
	pitch_pub = rospy.Publisher('rov/pitch', Int64, queue_size = 3)
	roll_pub = rospy.Publisher('rov/roll', Int64, queue_size = 3)

	x_direction_pub = rospy.Publisher('rov/Xacceleration', Int64, queue_size = 3)#X, y and z with speed
	y_direction_pub = rospy.Publisher('rov/Yacceleration', Int64, queue_size = 3)
	z_direction_pub = rospy.Publisher('rov/Zacceleration', Int64, queue_size = 3)

	rospy.init_node('sensor_readout')
	rate = rospy.Rate(60)
	while not rospy.is_shutdown():
		temp_pub.publish(round(sense.get_temperature()))#Actually pubish the things stated above
		pressure_pub.publish(round(sense.get_pressure()))
		humidity_pub.publish(round(sense.get_humidity()))#Temperature pressure humidity

		orientation = sense.get_orientation()#roll pitch and yaw
		yaw_pub.publish(round(orientation["yaw"]))
		pitch_pub.publish(round(orientation["pitch"]))
		roll_pub.publish(round(orientation["roll"]))

		acceleration = sense.get_accelerometer_raw()#x y and z G force, not rounded
		x_direction_pub.publish(acceleration['x'])
		y_direction_pub.publish(acceleration['y'])
		z_direction_pub.publish(acceleration['z'])
		
		rate.sleep()

if __name__ == '__main__':
	try:
		talker()
	except rospy.ROSInterruptException:
		pass
