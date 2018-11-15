import {AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material';
import { CameraSelectService } from '../../../services/publishers/camera-select.service';
import {fromEvent, Observable} from 'rxjs';

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
    cameras = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    selectedStatus = [true, false, false, false, false, false, false, false, false];
    colors = ['primary', 'warn', 'warn', 'warn', 'warn', 'warn', 'warn', 'warn', 'warn'];
    // Holds current camera value for publishing
    cameraValue: string;

    keyPress(character) {
        // Switch that takes input of pressed key and does things
        switch (character.key) {
            case 'Digit1':
                this.cameraValue = '1';
                console.log(this.cameraValue);
                break;
            case 'Digit2':
                this.cameraValue = '2';
                break;
            case 'Digit3':
                this.cameraValue = '3';
                break;
            case 'Digit4':
                this.cameraValue = '4';
                break;
            case 'Digit5':
                this.cameraValue = '5';
                break;
            case 'Digit6':
                this.cameraValue = '6';
                break;
            case 'Digit7':
                this.cameraValue = '7';
                break;
            case 'Digit8':
                this.cameraValue = '8';
                break;
            case 'Digit9':
                this.cameraValue = '9';
                break;
        }
        console.log(this.cameraValue);
    }

    // Onclick passes event that contains ton of information
    onClick(event) {
        console.log(event);
    }

    ngOnInit() {
        // Initialize camera select service
        this.cameraSelectService.initialize();
        // Creates and subscribes too an observable that listens for key presses. Callback function runs the keypress function
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
    }

}
