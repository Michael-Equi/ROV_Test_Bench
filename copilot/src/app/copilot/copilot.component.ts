import { Component } from '@angular/core';
import {RoslibService} from '../roslib.service'; [ RoslibService ];
import { DriveControlData } from '../shared/drivecontroldata.model';

@Component({
  selector: 'app-copilot',
  templateUrl: './copilot.component.html',
  styleUrls: ['./copilot.component.css']
})

export class CopilotComponent {
  data: DriveControlData;
  text: any;
  constructor(private roslibservice: RoslibService) {};
  click() {
    console.log("Clicked");
    this.roslibservice.getDriveControlData().subscribe(msg => {
      this.data = msg;
    });
  }
}
