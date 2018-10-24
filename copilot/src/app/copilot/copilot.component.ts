import { Component } from '@angular/core';
import {RoslibService} from '../roslib.service'; [ RoslibService ]

@Component({
  selector: 'app-copilot',
  templateUrl: './copilot.component.html',
  styleUrls: ['./copilot.component.css']
})

export class CopilotComponent {
  constructor(private roslibservice: RoslibService) {};
  click() {
    console.log("Clicked");
  }
}
