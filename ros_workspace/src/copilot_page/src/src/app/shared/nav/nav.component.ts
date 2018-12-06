import {Component, OnInit} from '@angular/core';
import {ThrustersStatusService} from '../../services/publishers/thrusters-status.service';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    icons = [
      {src: '../../../assets/House(Unselected).svg', clickedsrc: '../../../assets/House(Selected).svg', selected: false, link: '/copilot'},
      {src: '../../../assets/Bolt(Unselected).svg', clickedsrc: '../../../assets/Bolt(Selected).svg', selected: false, link: '/drq'},
      {src: '../../../assets/CircuitBoard(Unselected).svg', clickedsrc: '../../../assets/CircuitBoard(Selected).svg', selected: false, link: '/sensor-telemetry'},
      {src: '../../../assets/Settings(Unselected).svg', clickedsrc: '../../../assets/Settings(Selected).svg', selected: false}
    ];
    

    selected(icon) {
    for (let icon of this.icons) {
      icon.selected = false;
    }
    icon.selected = true;
    }

    visible = false;
    partyModevisible = false;
    audio = new Audio('../../../assets/Party.mp3');

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
