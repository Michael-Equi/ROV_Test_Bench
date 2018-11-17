import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

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
}
