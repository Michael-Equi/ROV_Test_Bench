import {AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})
export class DepthChartComponent implements AfterViewInit {
    name = 'Depth Chart';
    type = 'line';
    data = {
        labels: ["5", "10", "15", "20", "25", "30", "35"],
        datasets: [{
            label: "Example Data",
            data: [65, 59, 80, 81, 56, 55, 40],
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
                        beginAtZero:true
                    }
                }]
            }
        }
    };
    ngAfterViewInit() {
    }
}
