import { Injectable } from '@angular/core';
import '../../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class CameraSelectService {

  cameraSelectPublisher;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
      // Set listen URL for ROS Communication
      url : 'ws://localhost:9090'
  });

  // Set variable for data
  initialize() {
    // @ts-ignore
     this.cameraSelectPublisher = new ROSLIB.Topic({
        ros: this.ros,
        name: '/rov/camera_select',
        messageType: 'std_msgs/UInt8'
    });
  }

  publish(data) {
    const number = Number(data);
    // @ts-ignore
    const message = new ROSLIB.Message({
        data : number
    });
    // console.log(data);
    this.cameraSelectPublisher.publish(message);
  }
}
