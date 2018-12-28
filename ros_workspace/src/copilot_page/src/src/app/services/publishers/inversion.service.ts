import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InversionService {

  inversionTopic; // Object to handle inversion

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url : 'ws://master:9090'
  });

  inversionState: BehaviorSubject<any> = new BehaviorSubject('Untouched');

  initialize() {
    // @ts-ignore
    this.inversionTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/camera_select',
      messageType: 'std_msgs/UInt8'
    });

    this.inversionTopic.subscribe((msg) => { // Subscribe to inversiont topic
      this.inversionState.next(msg); // Add value to behavior subject
    })
  }

  publish(data) {
    data = Number(data);
    // @ts-ignore
    const message = new ROSLIB.Message({
      data : data
    });
    this.inversionTopic.publish(message);
  }

  getData(): Observable<any> { return this.inversionState.asObservable(); } // Returns observable with data

}
