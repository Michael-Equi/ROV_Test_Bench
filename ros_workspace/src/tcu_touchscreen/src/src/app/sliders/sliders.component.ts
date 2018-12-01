import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { VoltageService } from '../services/voltage.service';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
    voltage: number;
    current: number;
    voltageMax: number;
    currentMax: number;
    options: Options = {
        floor: 0,
        ceil: 40
    };
    options2: Options = {
        floor: 0,
        ceil: 50
    };

    rovVoltage: number; // ROV temperature in Celsius
    rovCurrent: number; // ROV Altitude in atm (can change to pascal)
    maxVoltage: number;
    maxCurrent: number;
    constructor(private VoltageService: VoltageService, private CurrentService: CurrentService) {}

    ngOnInit() {
        this.VoltageService.initialize();
        this.VoltageService.getData().subscribe((msg: number) => {
            this.rovVoltage = msg;
            if (this.rovVoltage > this.maxVoltage) { this.maxVoltage = this.rovVoltage }
        });
        this.CurrentService.initialize();
        this.CurrentService.getData().subscribe((msg: number) => {
            this.rovCurrent = msg;
            if (this.rovCurrent > this.maxCurrent) { this.maxCurrent = this.rovCurrent }
        });
    }
}
