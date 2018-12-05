import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {ThrustersStatusService} from '../services/publishers/thrusters-status.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-copilot',
    templateUrl: './copilot.component.html',
    styleUrls: ['./copilot.component.css']
})

export class CopilotComponent implements OnInit {

    // Declares variable to hold thruster status (enabled/disabled)
    thrusterStatus: boolean;
    audio = new Audio('../../assets/Party.mp3');

    constructor(private thrusterStatusService: ThrustersStatusService, public thrusterNotification: MatSnackBar) {
    }

    //  Runs on key press
    keyPress(character) {
        if (character.code = 'keyE') {
            // Changes thruster status
            this.thrusterStatus = !this.thrusterStatus;
            this.thrusterStatusService.publish(this.thrusterStatus);
            // Opens snackbar (that's the real name) that displays thruster status)
            this.thrusterNotification.open(
                this.thrusterStatus ? 'Thrusters Enabled' : 'Thrusters Disabled',
                'Exit'
            );
        } else {
            console.log(character.code);
        }
    }

    ngOnInit() {
        // Creates and subscribes too observable that listens for keypresses, runs keypress function as callback
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
        this.thrusterStatusService.initialize();
    }

    visible = false;
    partyModevisible = false;

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
