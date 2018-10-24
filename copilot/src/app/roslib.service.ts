import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})

export class RoslibService {
  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
      // Set listen URL for ROS communication
    url : 'ws://localhost:9090'
  });
  // Data variable to hold ROS data
  data: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initialize function sets everything up, called on a ngOnInit in app.component
  initialize() {
    let data = "UnTouch";
    // Listens for error from ROS and logs it
    this.ros.on('error', function(error) {
      console.log(error);
    });

    // Find out exactly when we made a connection.
    this.ros.on('connection', function() {
      console.log('Connection made!');
    });
    // Logs when connection is closed
    this.ros.on('close', function() {
      console.log('Connection closed.');
    });

    // Get Data from ROS
    // @ts-ignore
      const driveControlListener = new ROSLIB.Topic({
      ros : this.ros, // Points to ROS variable
      name : '/drive_control/parameter_updates', // Topic Name
      messageType : 'dynamic_reconfigure/Config' // Message Type
    });

    // Subscribe to ROS data
     driveControlListener.subscribe((message) => {
      console.log('Recieved Message on ' + driveControlListener.name + ' : ' + message.bools);
      this.data.next(message);
    });
  }

  getDriveControlData(): Observable<any> {
    return this.data.asObservable();
  }
}
