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

    thrusterStatus: boolean;

    constructor(private thrusterStatusService: ThrustersStatusService, public thrusterNotification: MatSnackBar) {
    }

    keyPress(character) {
        if (character.code = 'keyE') {
            this.thrusterStatus = !this.thrusterStatus;
            this.thrusterStatusService.publish(this.thrusterStatus);
            this.thrusterNotification.open(
                this.thrusterStatus ? 'Thrusters Enabled' : 'Thrusters Disabled',
                'Exit'
            );
        }
    }

    ngOnInit() {
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
        this.thrusterStatusService.initialize();
    }
}
