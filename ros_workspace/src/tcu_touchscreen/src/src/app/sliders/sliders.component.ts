import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { VoltageService } from '../services/voltage.service';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent {
    value: number = 0;
    value1: number = 0;
    valuemax: number = 0;
    valuemax1: number = 0;
    options: Options = {
        floor: 0,
        ceil: 40
    }
    options2: Options = {
        floor: 0,
        ceil: 50
    };

    // rovVoltage: number; // ROV temperature in Celsius
    // rovCurrent: number; // ROV Altitude in atm (can change to pascal)
    // constructor(private VoltageService: VoltageService, private CurrentService: CurrentService) {}
    // ngOnInit() {
    //     this.VoltageService.initialize();
    //     this.VoltageService.getData().subscribe((msg: ) => {
    //         this.rovVoltage = msg.Voltage;
    //     });
    //     this.CurrentService.initialize();
    //     this.CurrentService.getData().subscribe((msg: ) => {
    //         this.rovCurrent = msg.Current;
    //     });
    // }
}
