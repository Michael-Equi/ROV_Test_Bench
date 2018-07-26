# hardwware_interface

### Goal

Communicate with non-ROS integrated hardware such as the uart_thrusters_arduino and other pysserial devices. 

### Requirments and Description

* dedicated launch file for the entire vector drive pipeline on one machine 
* dedicated launch file(s) for the entire vector drive pipeline distributted across topside and bottomside 
* Run primarily on botomside

### tests and testing requirements

* Must be able to handle system crashes and worst case scenario events while providing good debug inforamtion 
  * 1 hour of rigorous testing with a mix a valid and invlaid messages


### Coding detials 

* Python, ROS
* No classes

## Build Intructions


## Running the Node


## Configuring the node with dynamic reconfigure


## Troubleshooting


## Node Information

Name and Remapping:
* copilot_control

Topics:

* `rov/cmd_horizontal_vdrive`:
  Subscribes `vector_drive/thrusterPercents` gives the thruster setting from -1000 to 1000 for thrusters T1,2,3,4.
  
  * `rov/cmd_vertical_vdrive`:
  Subscribes `vector_drive/thrusterPercents`gives the thruster setting from -1000 to 1000 for thrusters T5,6,7,8.

* `topic_name`:
  Publishes `message_type` info.

Services:

* `service_name`: info

Parameters/Reconfigs:

*  `parameter_name`: info

## Contributing and Project Ownership

* Initial owner: Michael Equi
* Current maintaner: Michael Equi
* pyserial contributer: Michael Equi

## Versioning

* Latest Version 
* Active

## Authors

* Michael Equi

## Helpful Resources

* NONE


