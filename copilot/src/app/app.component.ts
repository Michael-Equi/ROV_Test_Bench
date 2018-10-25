import {Component, OnInit} from '@angular/core';
import { RosService } from './services/ros.service';
import { Ms5837Service } from './services/ms5837.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // The constructor takes the roslibservice import statement and assigns it
  // Done before onInit
  constructor(private RosService: RosService, private Ms5837Service: Ms5837Service ) { }
  // OnInit initializes the Roslib service, and gets data to test connection
  ngOnInit() {
    this.RosService.initialize();
    this.Ms5837Service.initialize();
    this.Ms5837Service.getMs5837Data().subscribe((msg) => {
      console.log(msg);
    });
  }

}
