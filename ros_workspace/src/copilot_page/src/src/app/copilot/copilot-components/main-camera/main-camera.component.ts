import { Component, OnInit } from '@angular/core';
import { CameraSelectService } from '../../../services/publishers/camera-select.service';
// import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main-camera-module',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements OnInit {

    // Initializes CameraSelectService
    constructor(public cameraSelectService: CameraSelectService) {}

    // Declares name for window, arrays for cameras (should probably change to objects)
    name = 'Main Camera';
    camera1 = false;
    camera2 = false;
    camera3 = false;
    camera4 = false;
    camera5 = false;
    camera6 = false;
    camera7 = false;
    camera8 = false;
    camera9 = false;

    // Onclick passes event that contains ton of information
    cameraSwitch(value) {
        console.log("Camera " + value);
        if (value == 1) {
            this.camera1 = true;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 2) {
            this.camera1 = false;
            this.camera2 = true;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 3) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = true;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 4) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = true;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 5) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = true;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 6) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = true;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 7) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = true;
            this.camera8 = false;
            this.camera9 = false;
        } else if (value == 8) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = true;
            this.camera9 = false;
        } else if (value == 9) {
            this.camera1 = false;
            this.camera2 = false;
            this.camera3 = false;
            this.camera4 = false;
            this.camera5 = false;
            this.camera6 = false;
            this.camera7 = false;
            this.camera8 = false;
            this.camera9 = true;
        }
    }

    ngOnInit() {
        this.camera1 = true;
        // Initialize camera select service
        this.cameraSelectService.initialize();
        // Creates and subscribes too an observable that listens for key presses. Callback function runs the keypress function
        // fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
    }

}
