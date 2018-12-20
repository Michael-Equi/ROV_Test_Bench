import {Component, OnInit} from '@angular/core';
import { PowerService } from "../services/publishers-subscribers/power.service";
import { SolenoidService } from '../services/publishers-subscribers/solenoid.service';
import { SafetyService } from '../services/publishers-subscribers/safety.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{

    constructor(
        public thrusterService: PowerService,
        public solenoidService: SolenoidService,
        public safetyService: SafetyService) {}

    ngOnInit() {
        this.thrusterService.initialize();
        this.solenoidService.initialize();
        this.safetyService.initialize();
    }

    buttonStyle = 'powerbuttonoff';
    togglework = false;
    togglesafety = false;
    togglepneu = false;
    visible = false;
    power = false;

    openConfirm() {
        this.visible = true;
    }
    close() {
        this.visible = false;
    }

    confirm() {
        this.power = !this.power;
        this.thrusterService.publish(this.power);
        this.visible = false;
    }

    LightToggle() {
        this.togglework = !this.togglework;
    }

    SafetyToggle() {
        this.togglesafety = !this.togglesafety;
        this.safetyService.publish(this.togglesafety);
    }

    PneumaticsToggle() {
        this.togglepneu = !this.togglepneu;
        this.solenoidService.publish(this.togglepneu);
    }

}
