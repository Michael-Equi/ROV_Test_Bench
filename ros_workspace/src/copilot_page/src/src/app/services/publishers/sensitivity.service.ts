import { Injectable } from '@angular/core';
import '../../../assets/roslib';
import { SensitivityModel } from '../data-models/sensitivity.model';

@Injectable({
  providedIn: 'root'
})
export class SensitivityService {

  constructor(sensitivityModel: SensitivityModel) {}

  sensitivityPublisher;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
      // Set listen URL for ROS Communication
      url : 'ws://localhost:9090'
  });

  // Set variable for data
  initialize() {
      // @ts-ignore
      this.sensitivityPublisher = new ROSLIB.Topic({
          ros: this.ros,
          name: '/rov/sensitivity',
          messageType: 'rov_control_interface/rov_sensitivity'
      });
  }

  publish(data: SensitivityModel) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        l_scale: data.l_scale,
        a_scale: data.a_scale,
        v_scale: data.v_scale
      });
      this.sensitivityPublisher.publish(message);
  }
}
