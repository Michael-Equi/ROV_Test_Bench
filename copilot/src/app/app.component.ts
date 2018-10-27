import {Component, OnInit} from '@angular/core';
import { RosService } from './services/ros.service';
import { Bno055Service } from './services/bno055.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // The constructor takes the roslibservice import statement and assigns it
  // Done before onInit
  constructor(private RosService: RosService, private Bno055Service: Bno055Service ) { }
  // OnInit initializes the Roslib service, and gets data to test connection
  ngOnInit() {
    this.RosService.initialize();
    this.Bno055Service.initializeBno055();
  }

}
