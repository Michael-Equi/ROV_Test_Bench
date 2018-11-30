#!/usr/bin/env python

import rospy
import time
import math
from sense_hat import SenseHat
from std_msgs.msg import Int64
from std_msgs.msg import Float64
#from geometry_msgs.msg import Quaternion
from tf.transformations import quaternion_from_euler 
from sensor_msgs.msg import Imu, Temperature, Humidity, Pressure

sense = SenseHat()

def talker():
	rospy.init_node('sensor_readout')

	temp_pub = rospy.Publisher('rov/temperature', Temperature, queue_size = 3) #Publisher for the different sensors: Temperature, Humidity, Pressure, 
	pressure_pub = rospy.Publisher('rov/pressure', Pressure, queue_size = 3) 
	humidity_pub = rospy.Publisher('rov/humidity', Humidity, queue_size = 3)

	imu_pub = rospy.Publisher("rov/imu", Imu, queue_size = 3) #Imu publisher
	xSpeed, ySpeed, zSpeed = 0

	
	rate = rospy.Rate(60)
	while not rospy.is_shutdown():
		temp_pub.publish(sense.get_temperature())#Actually pubish the things stated above
		pressure_pub.publish(sense.get_pressure())
		humidity_pub.publish(sense.get_humidity())#Temperature pressure humidity

		message = Imu() #make a new object of class IMU with name message

		acceleration = sense.get_accelerometer_raw()#x y and z G force, not rounded
		xSpeed += (acceleration['x'] * acceleration['x']) / 2
		ySpeed += (acceleration['y'] * acceleration['y']) / 2 #Integrate
		zSpeed += (acceleration['z'] * acceleration['z']) / 2
		message.linear_acceleration(xSpeed, ySpeed, zSpeed)

		orientation = sense.get_orientation()#roll pitch and yaw
		message.orientation = quaternion_from_euler(radians(orientation["yaw"]), radians(orientation["pitch"]), radians(orientation["roll"])) #converts the degrees returned by get_orientation() to radians then uses all 4 directions into a quaternion, then publishes it
		
		imu_pub.publish(message)	
		
		rate.sleep()

if __name__ == '__main__':
	try:
		talker()
	except rospy.ROSInterruptException:
		pass
