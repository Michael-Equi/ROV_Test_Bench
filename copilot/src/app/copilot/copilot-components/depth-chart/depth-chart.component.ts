import {OnInit, Component, AfterViewInit} from '@angular/core';
import { Chart } from 'chart.js';
import { Ms5837Service } from '../../../services/ms5837.service';
import { Ms5837Data } from '../../../services/data-models/ms5837.model';

@Component({
  selector: 'app-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})
export class DepthChartComponent implements OnInit {
    exteriorAltitude = [0];
    seconds = [0];
    name = 'Depth Chart';
    type = 'line';
    data = {
        labels: this.seconds,
        datasets: [{
            label: 'Depth',
            data: this.exteriorAltitude,
            backgroundColor: [
                'rgba(0,188,212, .3)'
            ],
            borderColor: [
                '#00bcd4'
            ],
            borderWidth: 1
            }]
    };
    options = {
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
    constructor(private ms5837Service: Ms5837Service) {}
    ngOnInit() {
        this.ms5837Service.initialize();
        this.ms5837Service.getData().subscribe((msg: Ms5837Data) => {
            if (msg !== undefined) {
              console.log(msg);
              console.log(msg.altitudeM);
              this.exteriorAltitude.push(msg.altitudeM);
              console.log(this.exteriorAltitude);
              // console.log(msg.header.stamp.secs);
              // this.seconds.push(msg.header.stamp.secs);
            }
        });
    }
}
