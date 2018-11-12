import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material';
import { CameraSelectService } from '../../../services/publishers/camera-select.service';

@Component({
  selector: 'app-main-camera-module',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements AfterViewInit, OnInit {
    @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
    @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;

    constructor(public cameraSelectService: CameraSelectService) {}

    cameraValue;

    onChange(value) {
        // console.log(value.split(' ')[1]);
        const cameraNumber = value.split(' ')[1];
        // @ts-ignore
        this.cameraSelectService.publish(cameraNumber);
    }

    name = "Main Camera";
    cameras = ['Camera 1', 'Camera 2', 'Camera 3', 'Camera 4', 'Camera 5', 'Camera 6', 'Camera 7', 'Camera 8', 'Camera 9'];
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    ngOnInit() {
        this.cameraSelectService.initialize();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.toggles.forEach(toggle => toggle.buttonToggleGroup = this.group);
        });
    }

}
