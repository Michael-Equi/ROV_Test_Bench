import {Component, OnInit} from '@angular/core';
import { RoslibService } from './roslib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // The constructor takes the roslibservice import statement and assigns it
  // Done before onInit
  constructor(private roslibservice: RoslibService) { }
  // OnInit initializes the Roslib service, and gets data to test connection
  ngOnInit() {
    this.roslibservice.initialize();
  }

}
