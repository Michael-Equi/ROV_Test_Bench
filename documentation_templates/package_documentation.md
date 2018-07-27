### Rename to README.md when placed in package (Delete this sentece)

# package_name

### Description

 Pargraph on how this package fit into the overall architecture. What its nodes do and what is their general (common) purpose. Why do nodes in this package belong in this package?

### Build Instructions 

* Anything that needs special care when buidling this package and running the nodes (ex. install)
  * `sudo apt-get install ...`

### Nodes

* node_name
  *


### Coding detials 

* Python, ROS
* No classes

## Build Intructions


## Running the Node


## Configuring the node with dynamic reconfigure


## Troubleshooting


## Node Information

file: hw_thruster_controller_interface.py

Name and Remapping:
* hw_thruster_controller_interface

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


