#!/usr/bin/env python

import rospy
from math import sqrt
import random #for noise and fake sensor error
from vector_drive.msg import thrusterPercents
from uuv_gazebo_ros_plugins_msgs.msg import FloatStamped
from std_msgs.msg import UInt8
from sensor_msgs.msg import Image

thrusterVals = [0,0,0,0,0,0] ##array for holding commands (in prop angular velocity) for individual thrusters T1, T2, ... Tn
numberOfThrusters = 6

# Start the ros node
rospy.init_node("simulation_interface")
rospy.loginfo("Simulation interface starting... ")

#advertise muxed camera topic
muxedImagePub = rospy.Publisher("rov/camera/image_raw", Image, queue_size=1)

##Maps a variable based an input and an output range
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
    global thrusterVals
    thrusterVals[0] = -toRotorAngVel(data.t1)
    thrusterVals[1] = -toRotorAngVel(data.t2)
    thrusterVals[2] = -toRotorAngVel(data.t3)
    thrusterVals[3] = -toRotorAngVel(data.t4)

def updateHoriz(data):
    global thrusterVals
    thrusterVals[4] = -toRotorAngVel(data.t1)
    thrusterVals[5] = -toRotorAngVel(data.t2)

#update the status of what camera is selected by the mux
selectedCamera = 1
def updateCameraMux(data):
    global selectedCamera
    selectedCamera = data.data
    #if selectedCamera is not a valid camera 1-4
    if not (selectedCamera > 0 and selectedCamera < 5):
        selectedCamera = 1

def updateVideoStreams(image):
    global selectedCamera, muxedImagePub
    #publish selected image
    if image.header.frame_id == "rov/camera" +  str(selectedCamera) + "_link":
        muxedImagePub.publish(image)




verticals = rospy.Subscriber("rov/cmd_horizontal_vdrive", thrusterPercents, updateVert)
horzontals = rospy.Subscriber("rov/cmd_vertical_vdrive", thrusterPercents, updateHoriz)

#Simulated camera multiplexer
cameraMux = rospy.Subscriber("/camera_select", UInt8, updateCameraMux)

#Subscribe and proccess all the images
videoStream1 = rospy.Subscriber("rov/camera1/image_raw", Image, updateVideoStreams)
videoStream2 = rospy.Subscriber("rov/camera2/image_raw", Image, updateVideoStreams)
videoStream3 = rospy.Subscriber("rov/camera3/image_raw", Image, updateVideoStreams)
videoStream4 = rospy.Subscriber("rov/camera4/image_raw", Image, updateVideoStreams)


#create a list of thruster publishers
thrusterPubs = []
for i in range(numberOfThrusters):
    thrusterName = "rov/thrusters/" + str(i+1) + "/input"
    thrusterPubs.append(rospy.Publisher(thrusterName, FloatStamped, queue_size=1))

rospy.loginfo("Created thruster publishers:  " + str(thrusterPubs))

rate = rospy.Rate(50) #50Hz update frequency
while not rospy.is_shutdown():
    #Update the thrusters by publishing the thrusterVals
    for i in range(numberOfThrusters):
        msg = FloatStamped()
        #Add noise if the thruster value is not zero
        if not thrusterVals[i] == 0:
            thrusterVals[i] += 2*random.random()-1 #random float between -1 to 1 exclusive
            msg.data = thrusterVals[i]
        else:
            msg.data = thrusterVals[i]
        thrusterPubs[i].publish(msg)

    rospy.logdebug("Thrusters values published: " + str(thrusterVals))

    rate.sleep()
