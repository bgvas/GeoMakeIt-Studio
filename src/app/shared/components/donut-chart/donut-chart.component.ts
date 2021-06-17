import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
}


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})

export class DonutChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() values: number[];
  @Input() titles: string[];
  @Input() size: number;
  public chartOptions: Partial<any>;


  constructor() {

  }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.values,
      labels: this.titles,
      chart: {
        type: 'donut'
      },
      title: {
        text: 'My First Angular Chart'
      },
      plotOptions: {
        pie: {
          customScale: this.size
        }
      },
      legend: {
        show: false
      }
    };
  }

}
