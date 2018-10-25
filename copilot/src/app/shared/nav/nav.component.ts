import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  icons = [
      {src: '../../../assets/House(Unselected).svg', clickedsrc: '../../../assets/House(Selected).svg', selected: false, link: '/copilot'},
      {src: '../../../assets/Bolt(Unselected).svg', clickedsrc: '../../../assets/Bolt(Selected).svg', selected: false, link: '/drq'},
      {src: '../../../assets/CircuitBoard(Unselected).svg', clickedsrc: '../../../assets/CircuitBoard(Selected).svg', selected: false, link: '/sensortelemetry'},
      {src: '../../../assets/Settings(Unselected).svg', clickedsrc: '../../../assets/Settings(Selected).svg', selected: false}
  ];

  selected(icon) {
    for (let icon of this.icons) {
      icon.selected = false;
    }
    icon.selected = true;
  }

}
