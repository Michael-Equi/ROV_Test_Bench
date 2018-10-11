import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  icons = [
      {src: '/src/assets/House(Unselected).svg', clickedsrc: '/src/assets/House(Selected).svg', selected: false, link: '/copilot'},
      {src: '/src/assets/Bolt(Unselected).svg', clickedsrc: '/src/assets/Bolt(Selected).svg', selected: false, link: '/drq'},
      {src: '/src/assets/CircuitBoard(Unselected).svg', clickedsrc: '/src/assets/CircuitBoard(Selected).svg', selected: false},
      {src: '/src/assets/Settings(Unselected).svg', clickedsrc: '/src/assets/Settings(Selected).svg', selected: false}
  ];

  selected(icon) {
    for (let icon of this.icons) {
      icon.selected = false;
    }
    icon.selected = true;
  }

}
