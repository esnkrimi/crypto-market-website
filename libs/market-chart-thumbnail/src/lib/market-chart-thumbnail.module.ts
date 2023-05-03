import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketChartThumbnailComponent } from './market-chart-thumbnail/market-chart-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MarketChartThumbnailComponent],
  exports: [MarketChartThumbnailComponent],
})
export class MarketChartThumbnailModule {}
