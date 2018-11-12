import { Injectable } from '@angular/core';
import '../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class CameraSelectService {

  cameraSelectPublisher;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.ROS({
      // Set listen URL for ROS Communication
      url : 'ws://localhost:9090'
  });

  // Set variable for data
  initialize() {
    // @ts-ignore
     cameraSelectPublisher = new ROSLIB.Topic({
        ros: this.ros,
        name: '/rov/camera_select',
        messageType: 'std_msgs/UInt8'
    });
  }

  publish(data) {
    if (data <=8 && data > 0) {
        this.cameraSelectPublisher.publish(data);
    }
  }
}
