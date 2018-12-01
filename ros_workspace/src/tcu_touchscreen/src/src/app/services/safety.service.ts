import { Injectable } from '@angular/core';
import '../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class SafetyService {
    // Creates object with the ROS library
    // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url : 'ws://localhost:9090'
    });
    // Initialize variables to hold ROS data
    safetyPublisher;

    // Initialize function sets everything up, called on a ngOnInit in app.component

    initialize() {
        // Initialize ROS topic
        // @ts-ignore
        this.safetyPublisher = new ROSLIB.Topic({
            ros : this.ros, // Points to ROS variable
            name : '/rov/safety_mode', // Topic Name
            messageType : 'std_msgs/Bool' // Message Type
        });

    }

    // publish data that's passed through
    publish(status: Boolean) {
        // @ts-ignore
        const message = new ROSLIB.Message({
            data: status
        });
        this.safetyPublisher.publish(message);
    }
}
