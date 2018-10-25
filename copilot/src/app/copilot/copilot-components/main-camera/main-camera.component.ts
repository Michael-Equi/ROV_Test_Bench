import { Component } from '@angular/core';

@Component({
  selector: 'app-main-camera-module',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent {

  name = "Main Camera";
  cameras = ['Camera 1', 'Camera 2', 'Camera 3', 'Camera 4', 'Camera 5', 'Camera 6', 'Camera 7', 'Camera 8', 'Camera 9'];

}
