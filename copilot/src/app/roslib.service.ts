import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import  '../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class RoslibService {
  ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  data;

  initialize() {
    this.ros.on('error', function(error) {
      console.log(error);
    });

    // Find out exactly when we made a connection.
    this.ros.on('connection', function() {
      console.log('Connection made!');
    });

    this.ros.on('close', function() {
      console.log('Connection closed.');
    });

    // Get Data from ROS
    const driveControlListener = new ROSLIB.Topic({
      ros : this.ros,
      name : '/drive_control/parameter_updates',
      messageType : 'dynamic_reconfigure/Config'
    });

    // Subscribe to ROS data
    driveControlListener.subscribe(function(message) {
      console.log('Recieved Message on ' + driveControlListener.name + ' : ' + message);
      this.data = message;
    });
  }

  getDriveControlData(): Observable<any> {
    return this.data;
  }
}
