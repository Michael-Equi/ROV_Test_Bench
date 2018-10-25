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
  // Initialize variables to hold ROS data
  driveControl: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  bmp280: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  bno055: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  bno055Info: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initialize function sets everything up, called on a ngOnInit in app.component
  initialize() {
    let data;
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
  }
  initializeDriveControl() {
      // Get Data from ROS Drive Control Listener Topic
      // @ts-ignore
      const driveControlListener = new ROSLIB.Topic({
          ros : this.ros, // Points to ROS variable
          name : '/drive_control/parameter_updates', // Topic Name
          messageType : 'dynamic_reconfigure/Config' // Message Type
      });

      // Subscribe to ROS data
      driveControlListener.subscribe((message) => {
          console.log('Recieved Message on ' + driveControlListener.name + ' : ' + message.bools);
          // Adds next value to pass through to observable driveControl
          this.driveControl.next(message);
      });
  }
  initializeBmp280() {
    // Get Data from ROS bmp280 Topic
    // @ts-ignore
    const bmp280Listener = new ROSLIB.Topic({
        ros: this.ros,
        name: '/rov/bmp280',
        messageType: 'bmp280/bmp280_data'
    });

    // Subscribe to bmpListener
      bmp280Listener.subscribe((message) => {
        console.log('Recieved Message on ' + bmp280Listener.name + ' : ' + message);
        console.log(message);
        this.bmp280.next(message);
      });
  }
  initializeBno055() {
    // MISSING BNO055 MSG TYPE
    // Get Data from bno055 sensor
    // Quaternion Orientation, linear acceleration, angular velocity
    // @ts-ignore
    // const bmpListener = new ROSLIB.Topic({
    //     ros: this.ros,
    //     name: '/rov/bno055',
    //     messageType: 'bmp280/bmp280_data'
    // });
    // Subscribe to bmpListener
    // bmpListener.subscribe((message) => {
    //     console.log('Recieved Message on ' + bmpListener.name + ' : ' + message);
    //     this.bmp280.next(message);
    // });
    // -------------------------------------------------
    // Initialize data from bno055 info topic
    const bno055InfoListener = new ROSLIB.Topic({
        ros: this.ros,
        name: '/rov/bno055_info',
        messageType: 'bno055/bno055_info'
    });
    // Subscribe to topic
    bno055InfoListener.subscribe((message) => {
      console.log('Recieved Message on ' + bmpInfoListener.name + ' : ' + message);
      this.bno055Info.next(message);
    });
  }
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------

  // Getters
  // Get data variable and return it as observable
  getDriveControlData(): Observable<any> { return this.driveControl.asObservable(); }
  getBmp280Data(): Observable<any> { return this.bmp280.asObservable(); }
  getBno055Info(): Observable<any> { return this.bno055Info.asObservable(); }
}
