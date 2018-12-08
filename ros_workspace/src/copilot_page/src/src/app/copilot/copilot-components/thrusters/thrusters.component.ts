import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-knob';

@Component({
  selector: 'app-thrusters',
  templateUrl: './thrusters.component.html',
  styleUrls: ['./thrusters.component.css']
})
export class ThrustersComponent implements OnInit {
    name = 'ROV Thrusters';

    thruster1 = 0;
    thruster2 = 0;
    thruster3 = 0;
    thruster4 = 0;
    thruster5 = 0;
    thruster6 = 0;

    ngOnInit() {
        $(".dial").knob({
            'min': 0,
            'max': 100,
            'width': '100%',
            'height': '100%',
            'lineCap': 'round',
            'readOnly': true,
            'fgColor': '#4287e0',
            'bgColor': '#204d7a'
        });
    }
    


}
