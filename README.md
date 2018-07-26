# ROV Test Bench

The goal of this project is to develop preseason software technologies based on ROS. This project will explorer development paths and verify new technologies before more permanent hardware development. Key areas of testing are cameras, vector drive, controllers, and PID algortihms. Additionally new workflows/integration tactics are to be tested and documented (Travis CI, Docker, node documentation, doxygen). This project will expire at the beginning of the 2018-2019 robotics season.   

[![Build Status](https://travis-ci.com/Michael-Equi/ROV_Test_Bench.svg?branch=master)](https://travis-ci.com/Michael-Equi/ROV_Test_Bench)

[![Coverage Status](https://coveralls.io/repos/github/Michael-Equi/ROV_Test_Bench/badge.svg?branch=master)](https://coveralls.io/github/Michael-Equi/ROV_Test_Bench?branch=master)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on the main ROV system (Master).

FOLLOW:
*  https://docs.google.com/document/d/1C32ucQTIAsE2H7u9OERmmCfyc6WzUvhrB2U6_GgZuWg/edit?usp=sharing

Initial SETUP:
* `cd ~/Desktop`
* `git clone https://github.com/Michael-Equi/ROV_Test_Bench.git`
* `cd ROV_Test_Bench/scripts`
* `./GitSetup.sh`
* `./setup.sh`
* (only on rpi w/ ubuntu Mate) `sudo apt-get install samba`
    
*Always run IDE's from terminal if on Ubuntu (just type the name of the IDE in terminal and click enter ex. clion)
Only develop with clion, webstorm, pycharm, and arduino*

### Prerequisites

What things you need to install the software and how to install them

Code Blocks IDE on rpi ubuntu mate
* `sudo apt-get install codeblocks`

I2C interface on Ubutnu Mate
* `cd /boot/config.txt`
* uncomment `dtparam=i2c_arm=off` and change to `dtparam=i2c_arm=on`
* uncomment `dtparam=i2c_arm_baudrate=100000` and change to `dtparam=i2c_arm_baudrate=400000`
* restart pi

Setup the ros_lib file for arduino serial
* If a new msg needs to be added to the file run `sudo rm -R ~/Desktop/ROV_Test_Bench/ros_workspace/sketchbook/libraries/ros_lib` and `rosrun rosserial_client make_libraries ~/Desktop/ROV_Test_Bench/ros_workspace/sketchbook/libraries` (make sure to have sourced the correct devel/setup.bash)
* Run `sudo rm -R /opt/ros/kinetic/share/rosserial_client/src/ros_lib`
* Run `sudo cp -R ~/Desktop/ROV_Test_Bench/ros_workspace/sketchbook/libraries/ros_lib /opt/ros/kinetic/share/rosserial_client/src`

For running rosserial the first time make sure to `sudo apt-get install ros-kinetic-rosserial` and install the rosserial library from the arduino library manager

Add vector_drive/thrusterPercents.h to the libraries folder in arduino

RPI Camera node setup
* https://github.com/UbiquityRobotics/raspicam_node

### Network Setup

What things you need to do so that the ROS network operates properly 

On ubuntu 16.04 go to Network Connections app and add a new ethernet connection (name the connection `ROVEthernetConnection`)
* On the topside computer have a static (manual) IP of `192.168.1.100`, netmask `24`, Gateway `92.168.1.1`, DNS server `27.0.1.1, 8.8.8.8, 192.168.1.1`
* On the bottomside computer have a static (manual) IP of `192.168.1.111`, netmask `24`, Gateway `192.168.1.1`, DNS server `127.0.1.1, 8.8.8.8, 192.168.1.1`
* Run the setupROSNetwork.sh script in the scripts folder

Once the network connection has been verified (on bottomside `ping master` / on topside `ping bottomside`)
* Run `sshSetup.sh` in the scripts folder
* Do not add any paraphrases 
* on bottomside `ssh master` / on topside `ssh bottomside`
* Make sure both work without entering a password 

#### Network Setup DEBUG
* IF you recieve `/usr/bin/ssh-copy-id: ERROR: ssh: connect to host bottomside port 22: Connection refused` go to the opposite machine from the one you recieved it on and run the following:
    * `sudo rm /etc/ssh/sshd_config`
    * `sudo apt-get purge openssh-server`
    * `sudo apt-get install openssh-server`
    * `./sshSetup.sh`
    
Other usefull links for common problems:
* https://superuser.com/questions/421004/how-to-fix-warning-about-ecdsa-host-key
* https://askubuntu.com/questions/762541/ubuntu-16-04-ssh-sign-and-send-pubkey-signing-failed-agent-refused-operation
* https://answers.ros.org/question/41446/a-is-not-in-your-ssh-known_hosts-file/

### Installing

A step by step series of examples that tell you how to get a development env running

On your Raspberry Pi 3 B make sure you are running ubuntu mate 16.04 (image here https://drive.google.com/open?id=1497jupJ2dBQqy_o_x5JBPTjY3lto7-rI)
* cat /etc/os-release
* https://www.intorobotics.com/how-to-install-ros-kinetic-on-raspberry-pi-3-running-raspbian-stretch-lite/
* http://wiki.ros.org/joy/Tutorials/ConfiguringALinuxJoystick (replace indigo with kinetic)


#UPDATES NEEDED BELOW THIS POINT


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Michael-Equi/ROV_Test_Bench/blob/development/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Michael Equi** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* README Tempalte source https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
* Inspiration
* etc
