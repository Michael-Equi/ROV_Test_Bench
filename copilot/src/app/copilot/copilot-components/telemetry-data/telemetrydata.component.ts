import { Component, OnInit } from '@angular/core';
import { Bmp280Service } from '../../../services/bmp280.service';
import { Bmp280Model } from '../../../services/data-models/bmp280.model';

@Component({
  selector: 'app-telemetrydata',
  templateUrl: './telemetrydata.component.html',
  styleUrls: ['./telemetrydata.component.css']
})
export class TelemetrydataComponent implements OnInit {
  name = 'ROV Telemetry Data';
  rovTemperature: number; // ROV temperature in Celsius
  rovPressure: number; // ROV Altitude in atm (can change to pascal)
  rovAltitude: number; // ROV Altitude in Meters
  constructor(private bmp280Service: Bmp280Service) {};
  ngOnInit() {
    // Initialize Bmp280 Service
    this.bmp280Service.initialize();
    this.bmp280Service.getData().subscribe((msg: Bmp280Model) => {
      this.rovTemperature = msg.tempC;
      this.rovPressure = msg.pressureA;
      this.rovAltitude = msg.altitudeM;
    });
  }

}
