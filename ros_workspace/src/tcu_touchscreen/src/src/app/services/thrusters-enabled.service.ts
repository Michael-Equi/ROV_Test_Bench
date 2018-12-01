import { Injectable } from '@angular/core';
import '../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class ThrustersEnabledService {

    // Creates object with the ROS library
    // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url : 'ws://localhost:9090'
    });
    // Initialize variables to hold ROS data
    thrusterPublisher;

    // Initialize function sets everything up, called on a ngOnInit in app.component

    initialize() {
        // Initialize ROS topic
        // @ts-ignore
        this.thrusterPublisher = new ROSLIB.Topic({
            ros : this.ros, // Points to ROS variable
            name : '/tcu/main_relay', // Topic Name
            messageType : 'std_msgs/Bool' // Message Type
        });

    }

    // publish data that's passed through
    publish(status: Boolean) {
        console.log('Thruster Service Called');
        console.log(status);
        // @ts-ignore
        const message = new ROSLIB.Message({
            data: status
        });
        this.thrusterPublisher.publish(message);
    }
}
