import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MarketChartComponent],
  exports: [MarketChartComponent],
})
export class MarketChartModule {}
