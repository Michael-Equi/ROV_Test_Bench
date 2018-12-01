import {Component } from '@angular/core';

@Component({
  selector: 'app-thrusters',
  templateUrl: './thrusters.component.html',
  styleUrls: ['./thrusters.component.css']
})
export class ThrustersComponent {
    name = 'ROV Thrusters';
    dialtype = 'semi';
    dialappend = '%';
    dial1value = 0;
    dial2value = 0;
    dial3value = 0;
    dial4value = 0;
    dial5value = 0;
    dial6value = 0;
    dial1label = 'Thruster 1';
    dial2label = 'Thruster 2';
    dial3label = 'Thruster 3';
    dial4label = 'Thruster 4';
    dial5label = 'Thruster 5';
    dial6label = 'Thruster 6';
}
