import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import '../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class Bno055Service {

  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://localhost:9090'
  });

  // Set variables for data
  bno055: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  bno055Info: BehaviorSubject<any> = new BehaviorSubject('Untouched');

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
      console.log('Recieved Message on ' + bno055InfoListener.name + ' : ' + message);
      this.bno055Info.next(message);
    });
  }

  getBno055Info(): Observable<any> { return this.bno055Info.asObservable(); }
}
