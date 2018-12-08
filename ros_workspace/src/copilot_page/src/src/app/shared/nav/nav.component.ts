import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {ThrustersStatusService} from '../../services/publishers/thrusters-status.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

    icons = [
      {src: '../../../assets/House(Unselected).svg', clickedsrc: '../../../assets/House(Selected).svg', selected: false, link: '/copilot'},
      {src: '../../../assets/Bolt(Unselected).svg', clickedsrc: '../../../assets/Bolt(Selected).svg', selected: false, link: '/drq'},
      {src: '../../../assets/CircuitBoard(Unselected).svg', clickedsrc: '../../../assets/CircuitBoard(Selected).svg', selected: false, link: '/sensor-telemetry'},
      {src: '../../../assets/Settings(Unselected).svg', clickedsrc: '../../../assets/Settings(Selected).svg', selected: false}
    ];

    // Declares variable to hold thruster status (enabled/disabled)
    thrusterStatus = false;
    visible = false;
    partyModevisible = false;
    audio = new Audio('../../../assets/Party.mp3');


    constructor(private thrusterStatusService: ThrustersStatusService, public thrusterNotification: MatSnackBar) {}

    thrustersEnabled() {
        // Changes thruster status
        this.thrusterStatus = !this.thrusterStatus;
        this.thrusterStatusService.publish(this.thrusterStatus);
        // Opens snackbar (that's the real name) that displays thruster status)
        this.thrusterNotification.open(this.thrusterStatus ? 'Thrusters Enabled' : 'Thrusters Disabled', 'Exit', {
            duration: 3000,
            panelClass: ['snackbar']
        });
    }

    //  Runs on key press
    keyPress(character) {
        if (character.code === 'Space') {
            this.thrustersEnabled();
        } else {
            console.log(character.code);
        }
    }

    ngOnInit() {
        // Creates and subscribes too observable that listens for keypresses, runs keypress function as callback
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
        this.thrusterStatusService.initialize();
    }

    selected(icon) {
    for (let icon of this.icons) {
      icon.selected = false;
    }
    icon.selected = true;
    }

    openConfirm() {
        this.visible = true;
    }

    close() {
        this.visible = false;
    }

    confirm() {
        this.visible = false;
        this.audio.play();
        this.partyModevisible = true;
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.partyModevisible = false;
    }
}
