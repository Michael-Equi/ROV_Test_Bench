import {OnInit, Component, AfterViewInit, } from '@angular/core';
import { Chart } from 'chart.js';
import { Ms5837Service } from '../../../services/subscribers/ms5837.service';
import { Ms5837Data } from '../../../services/data-models/ms5837.model';

@Component({
  selector: 'app-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})

export class DepthChartComponent implements AfterViewInit {
    rovDepth: number; // ROV Depth in Meters

    constructor(private ms5837Service: Ms5837Service) {}
    ngAfterViewInit() {
        this.ms5837Service.initialize();
        this.ms5837Service.getData().subscribe((msg: Ms5837Data) => {
            // Try catch error because first function call gets undefined value
            try {
                this.rovDepth = msg.depth;
            } catch (err) {
                console.log(err);
            }
        });
    }
}
