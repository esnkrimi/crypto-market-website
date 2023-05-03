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
  selector: 'nx-market-chart',
  templateUrl: './market-chart.component.html',
  styleUrls: ['./market-chart.component.sass'],
})
export class MarketChartComponent implements OnChanges {
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
          for (let i = 0; i < 45; i++) {
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
          backgroundColor: ['white'],
          borderColor: ['black'],
          borderWidth: 1,
        },
      ],
    };
    this.chart = new Chart('canvas', {
      type: this.chartType,
      data: datas,
    });
    this.chart.destroy();
    this.chart = new Chart('canvas', {
      type: this.chartType,
      data: datas,
    });
  }
}
