#!/usr/bin/env python

import time
import math

import BNO055

import rospy
from sensor_msgs.msg import Imu
from geometry_msgs.msg import Quaterion
from geometry_msgs.msg import Vector3
from bno055.msg import bno055_info

def publisher():
	dataPub = rospy.Publisher('rov/bno055', Imu, queue_size=3)
	infoPub = rospy.Publisher('rov/bno055_info', bno055_info, queue_size=3)
	rospy.init_node('bno055')
	rate = rospy.Rate(10) #10Hz data read

	# Setup BNO055
	# Create and configure the BNO sensor connection. 
	# Raspberry Pi configuration with I2C and RST connected to GPIO 27:
	sensor = BNO055.BNO055(rst=27)

	attempts = 0
	beginSucccess = False
	# Initialize the BNO055 and stop if something went wrong.
	while(beginSucccess != True and attempts < 10) 
		try:
			sensor.begin():
			beginSucccess = True
		except Exception as e:
			rospy.logerr('Failed to initialize BNO055! %s', e)
			attempts += 1
			time.sleep(0.25)

	if(attempts = 10):	
		rospy.logerr('Failed to initialize BNO055! Program end')
		exit(1)

	# Print system status and self test result.
	try:
		status, self_test, error = sensor.get_system_status()
	except Exception as e:
		rospy.logerr('Failed to read BNO055 system status! %s', e)

	rospy.logdebug('System status: %s', status)
	rospy.logdebug('Self test result (0x0F is normal): %s', hex(self_test))
	# Print out an error if system status is in error mode.
	if status == 0x01:
    	rospy.logerr('System error: %s', error)
   		rospy.logerr('See datasheet section 4.3.59 for the meaning.')

	# Print BNO055 software revision and other diagnostic data.
	try:
		sw, bl, accel, mag, gyro = sensor.get_revision()
	except Exception as e:
		rospy.logerr('Failed to read BNO055 meta-inforamtion! %s', e)

	rospy.loginfo('Software version:   %d', sw)
	rospy.loginfo('Bootloader version: %d', bl)
	rospy.loginfo('Accelerometer ID:   %s', hex(accel))
	rospy.loginfo('Magnetometer ID:    %s', hex(mag))
	rospy.loginfo('Gyroscope ID:       %s', hex(gyro))

	rospy.loginfo('Reading BNO055 data...')
	
	while not rospy.is_shutdown():
		# Define messages 
		msg = Imu()
		info = bno055_info()
		
		orientation = Quaterion()
		angular_vel = Vector3() 
		linear_accel =  Vector3()

		#no covarience vlaues known


		# Update data

		attempts = 0	
		while(attempts < 4)
			try:
				# Read the calibration status, 0=uncalibrated and 3=fully calibrated.
				sys, gyro, accel, mag = sensor.get_calibration_status()
				temp_c = sensor.read_temp()
			except Exception as e:
				rospy.logerr('Failed to read BNO055 calibration stat and temp! %s', e)
				attempts += 1
				time.sleep(0.01)
	
		if(attempts != 4):
			info.sysCalibration = sys
			info.accelCalibration = accel
			info.gyroCalibration = gyro
			info.magCalibration = mag
			info.tempC = temp_c

		attempts = 0	
		while(attempts < 4)
			try:
    			# Orientation as a quaternion:
				orientation = sensor.read_quaterion()

				# Gyroscope data (in degrees per second converted to radians per second):
				angular_vel = math.radians(f) for f in sensor.read_gyroscope()

				# Linear acceleration data (i.e. acceleration from movement, not gravity--
    			# returned in meters per second squared):
				linear_accel = sensor.read_linear_acceleration()
			except Exception as e:
				rospy.logerr('Failed to read BNO055 data! %s', e)
				attempts += 1
				time.sleep(0.01)	

		if(attempts != 4):
			msg.orientation = orientation
			msg.angular_velocity = angular_vel
			msg.linear_acceleration = linear_accel


		dataPub.publish(msg)
		infoPub.publish(info)

		rate.sleep()

if __name__ == '__main__':
	try:
		publisher()
	except rospy.ROSInterruptException:
		pass

# Unused functions 
# Read the Euler angles for heading, roll, pitch (all in degrees).
# heading, roll, pitch = sensor.read_euler()    
# Magnetometer data (in micro-Teslas):
# x,y,z = sensor.read_magnetometer()
# Accelerometer data (in meters per second squared):
# x,y,z = sensor.read_accelerometer()
# Gravity acceleration data (i.e. acceleration just from gravity--returned
# in meters per second squared):
# x,y,z = sensor.read_gravity()
