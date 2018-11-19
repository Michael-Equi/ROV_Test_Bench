import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThrustersStatusService {

    thrusterStatusPublisher;

        // Creates object with the ROS Library
        // @ts-ignore
        ros = new ROSLIB.Ros({
            // Set listen URL for ROS Communication
            url : 'ws://localhost:9090'
        });

        // Set variable for data
        initialize() {
            // @ts-ignore
            this.thrusterStatusPublisher = new ROSLIB.Topic({
                ros: this.ros,
                name: '/rov/thruster_status',
                messageType: 'std_msgs/Bool'
            });
        }

        publish(data) {
            // @ts-ignore
            const message = new ROSLIB.Message({
                data : data
            });
            console.log(data);
            this.thrusterStatusPublisher.publish(message);
    }

}
