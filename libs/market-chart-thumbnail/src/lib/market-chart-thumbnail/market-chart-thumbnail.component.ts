import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { delay, interval } from 'rxjs';
import { apiService } from '../api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'nx-market-chart-thumbnail',
  templateUrl: './market-chart-thumbnail.component.html',
  styleUrls: ['./market-chart-thumbnail.component.sass'],
})
export class MarketChartThumbnailComponent implements OnChanges {
  @Input() params;
  testCond = false;
  chartIsLoaded = false;
  val: string;
  destinationCoin = 'USD';
  chartType: any = 'line';
  public chart: any;

  constructor(private service: apiService) {}

  ngOnChanges(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.chartIsLoaded = true;
    const dataSet = [1];
    const labels = ['1'];
    this.service
      .cryptoHiostory(this.params, this.destinationCoin)
      .pipe(delay(500))
      .subscribe((data) => {
        if (data)
          for (let i = 0; i < 10; i++) {
            labels[i] = data[i]['time'];
            labels[i] = new Date(Number(labels[i]) * 1000).toLocaleDateString(
              'en-US'
            );
            dataSet[i] = data[i]['close'];
          }
        this.drawChart(dataSet, labels);
      });
  }
  drawChart(data, label) {
    this.testCond = true;
    let datas = {
      labels: label,
      datasets: [
        {
          label: '',
          data: data,
          backgroundColor: ['black'],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        },
      ],
    };

    this.chart = new Chart(this.params, {
      type: this.chartType,
      data: datas,
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
