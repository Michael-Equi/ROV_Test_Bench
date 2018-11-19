import {Component, OnInit} from '@angular/core';
import { SensitivityService } from '../../../services/publishers/sensitivity.service';
import { SensitivityModel } from '../../../services/data-models/sensitivity.model';

@Component({
  selector: 'app-thruster-sensativity',
  templateUrl: './thruster-sensitivity.component.html',
  styleUrls: ['./thruster-sensitivity.component.css']
})
export class ThrusterSensitivityComponent implements OnInit {

  constructor(private sensitivityService: SensitivityService) {};

  max = 1.0;
  min = 0.0;
  step = .05;
  name = 'Thruster Sensitivity';
  sensitivity = {
    v_scale: .5,
    a_scale: .5,
    l_scale: .5,
  };

  ngOnInit() {
    this.sensitivityService.initialize();
    this.sensitivity.v_scale = .5;
    this.sensitivity.a_scale = .5;
    this.sensitivity.l_scale = .5;
  }

  update() {
    this.sensitivityService.publish(this.sensitivity);
  }
}
