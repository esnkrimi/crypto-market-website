import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pricePipe } from './field.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [pricePipe],
})
export class ZoomRatesTableModule {}
