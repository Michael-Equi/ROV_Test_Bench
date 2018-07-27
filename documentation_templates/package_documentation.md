### Rename to README.md when placed in package (Delete this sentence)

# package_name

## Description

 Pargraph on how this package fit into the overall architecture. What its nodes do and what is their general (common) purpose. Why do nodes in this package belong in this package?

## Build Instructions 

* Anything that needs special care when buidling this package and running the nodes (ex. install)
  * `sudo apt-get install ...`

## Nodes

###node_name

* Node Inforation
 * What exactly deos this Node do 
 * Where does it run
 * What are its dependencies 
 * Any other extra information that should be known about this node (dynamic reconfigs, params, etc.)

example ---------------------------------------------------------------------------------------------

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

example ---------------------------------------------------------------------------------------------

* Running the Node
 * Run on topside/bottomside
 * `rosrun ...`
 
###other_node_name (if applicable)

* Node Inforation
 * What exactly deos this Node do 
 * Where does it run
 * What are its dependencies 
 * Any other extra information that should be known about this node (dynamic reconfigs, params, etc.)

example ---------------------------------------------------------------------------------------------

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

example ---------------------------------------------------------------------------------------------

* Running the Node
 * Run on topside/bottomside
 * `rosrun ...`




## Launch Information
 
Any details about launch files and what they do goes here

## Project Ownership

* List the primary person responsible for this peice of software
* Initial owner:
* Current owner:

## Contributing 

* List contirbutors (anyone who writes stuff into this package) and role here 
* Current maintaner: 
* name contributer: 

## Helpful Resources

* Links, information, external articles that were helpful in creating anything in this package


