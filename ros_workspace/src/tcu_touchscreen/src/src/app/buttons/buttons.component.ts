import {Component, OnInit} from '@angular/core';
import { ThrustersEnabledService } from "../services/thrusters-enabled.service";
import { SolenoidService } from '../services/solenoid.service';
import { SafetyService } from '../services/safety.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{

    constructor(
        public thrusterService: ThrustersEnabledService,
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
