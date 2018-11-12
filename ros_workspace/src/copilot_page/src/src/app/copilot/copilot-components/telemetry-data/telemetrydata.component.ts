import { Component, OnInit } from '@angular/core';
import { Bmp280Service } from '../../../services/subscribers/bmp280.service';
import { Bmp280Model } from '../../../services/data-models/bmp280.model';
import { Sht31Service } from '../../../services/subscribers/sht31.service';
import { Sht31Data } from '../../../services/data-models/sht31.model';

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
  rovHumidity: number; // ROV humidity in percent?
  constructor(private bmp280Service: Bmp280Service, private sht31Service: Sht31Service) {}
  ngOnInit() {
    // Initialize Bmp280 Service
    this.bmp280Service.initialize();
    this.bmp280Service.getData().subscribe((msg: Bmp280Model) => {
      this.rovTemperature = msg.tempC;
      this.rovPressure = msg.pressureA;
      this.rovAltitude = msg.altitudeM;
    });
    this.sht31Service.initialize();
    this.sht31Service.getData().subscribe((msg: Sht31Data) => {
      this.rovHumidity = msg.humidity;
    });
  }

}
