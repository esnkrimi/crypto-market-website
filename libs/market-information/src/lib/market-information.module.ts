import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketInformationComponent } from '../lib/market-information/market-information.component';
import { HttpClientModule } from '@angular/common/http';
import { fieldSignPipe } from './market-information/field.pipe';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MarketInformationComponent, fieldSignPipe],
  exports: [MarketInformationComponent],
})
export class MarketInformationModule {}
