import {OnInit, Component, AfterViewInit, } from '@angular/core';
import { Chart } from 'chart.js';
import { Ms5837Service } from '../../../services/ms5837.service';
import { Ms5837Data } from '../../../services/data-models/ms5837.model';

@Component({
  selector: 'app-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})

export class DepthChartComponent implements OnInit {
    rovDepth: number; // ROV Depth in Meters

    constructor(private ms5837Service: Ms5837Service) {}
    ngOnInit() {
        this.ms5837Service.initialize();
        this.ms5837Service.getData().subscribe((msg: Ms5837Data) => {
            this.rovDepth = msg.depth;
            // if (msg !== undefined) {
            //   // console.log(msg);
            //   // this.data.datasets[0].data.push(msg.altitudeM);
            //   // console.log(this.data.datasets[0].data);
            //   // this.data.labels.push(msg.header.stamp.secs);
            //   // console.log(this.data.labels);
            // }
        });
    }
}
