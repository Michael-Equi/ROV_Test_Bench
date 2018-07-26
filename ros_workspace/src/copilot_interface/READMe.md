# copilot_interface

### Goal

Take in copilot input data using the dynamic reconfigure interface 

### Requirments and Description

* dedicated launch file for joy and control_interface 
* Follow phase 0 arhcitecture design 
* Run on topside computer

### tests and testing requirements

* Must be able to handle system crashes and worst case scenario events while providing good debug inforamtion 
  * 1 hour of rigorous testing with a mix a valid and invlaid messages


### Coding detials 

* C++, ROS
* No classes

## Build Intructions


## Running the Node


## Configuring the node with dynamic reconfigure


## Troubleshooting


## Node Information

Name and Remapping:
* copilot_control

Topics:

* `topic_name`:
  Subscribes `message_type` info.

* `topic_name`:
  Publishes `message_type` info.

Services:

* `service_name`: info

Parameters/Reconfigs:

*  `parameter_name`: info

*  `config.l_scale`: linear sensitivity scale
*  `config.a_scale`: angular sensitivity scale
*  `config.v_scale`: vertical sensitivity scale
*  `config.thrustersEnabled`: thrusters enabled button


## Contributing and Project Ownership

* Initial owner: Michael Equi
* Current maintaner: Michael Equi
* dynamic_reconfigure contributer: Michael Equi

## Versioning

* Latest Version 
* Active

## Authors

* Michael Equi

## Helpful Resources

* NONE




