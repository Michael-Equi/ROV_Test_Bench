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
        }
    }

    ngOnInit() {
        // Creates and subscribes too observable that listens for keypresses, runs keypress function as callback
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
        this.thrusterStatusService.initialize();
    }
}
