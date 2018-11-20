import {Component, OnInit} from '@angular/core';
import { ThrustersService } from "../services/thrusters.service";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{

    constructor(public thrusterService: ThrustersService) {}

    ngOnInit() {
        this.thrusterService.initialize();
    }

    buttonStyle = 'powerbuttonoff';
    togglework = false;
    togglesaftey = false;
    togglepneu = false;
    visible = false;
    power = false;

    openConfirm() {
        this.visible = true;
        console.log('Dialog');
    }
    close() {
        this.visible = false;
    }

    confirm() {
        this.power = !this.power;
        this.visible = false;
        console.log('Power Toggle');
    }

    LightToggle() {
        this.togglework = !this.togglework;
        console.log('Light');
    }

    SafteyToggle() {
        this.togglesaftey = !this.togglesaftey;
        console.log('Saftey');
    }

    PneumaticsToggle() {
        this.togglepneu = !this.togglepneu;
        console.log('Pneumatics');
    }



}
