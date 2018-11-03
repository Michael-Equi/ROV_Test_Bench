import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'touchscreen';
  updateslider1text(val) {
    <HTMLElement>document.getElementById('slider1text').value=val;
  };
  updateslider2text(val) {
    <HTMLElement>document.getElementById('slider2text').value=val;
  };
  updatemax1text(val) {
    <HTMLElement>document.getElementById('max1text').value=val;
  };
  updatemax2text(val) {
    <HTMLElement>document.getElementById('max2text').value=val;
  };
}
