import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent implements OnInit {
  domElement:any;
   chart:any;
   lineSeries:any;
  
  ngOnInit() {
    this.domElement = document.getElementById('tvchart');
    this.chart = createChart(this.domElement, { width: 400, height: 300 });
     this.lineSeries = this.chart.addLineSeries();



    this.lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 },
  ]);
  }
}
