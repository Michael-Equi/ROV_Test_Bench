# uart_thrusters_arduino

This is the core firmware and logic for the bottomside arduino microntroller. This firmware is equiped with a new packet parsing algorith and thruster control software.

### Goal

For a reliable independant microcontroller to provide additional safety features over a direct I2C to PWM converter or onboard PWM signal on the main bottomside computer.  

### Requirments and Description

* Flawless error handling
* Clean commented code
* logical layout and good code practices 

### Break down into end to end tests

* 1 hour of rigorous testing on two distinct arduinos with a mix a valid and invlaid messages
* Must be able to handle system crashes and worst case scenario events while providing good debug inforamtion

### Coding detials 

* C++, Arduino
* No classes
* Two tabs 
  * uart_thrusters_arduino.ino
  * packet_reader.ino

## Contributing and Project Ownership

* Initial owner: Michael Equi
* Current maintaner: Michael Equi
* packet_reader algorithm contributer: Michael Equi
* uart_thrusters_arduino calculateThrusterValues contributer: Michael Equi 



## Versioning

* Latest Version 
* Active

## Authors

* Michael Equi

## Helpful Resources

* NONE