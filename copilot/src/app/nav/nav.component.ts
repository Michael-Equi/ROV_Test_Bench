import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor() {}

  HouseUnselected = '/src/assets/HouseUnselected.svg';
  HouseSelected = '/src/assets/HouseSelected.svg';
  house = {
    selected: true;
    src: '/src/assets/HouseUnselected.svg'
  };

  click(click) {
    console.log('Click');
    console.log(click);
    console.log(this.house.selected);
    const componentId = click.srcElement.id;
    this.house.src = '/src/assets/HouseSelected.svg';
  };

}
