import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRowComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'luxury-progress-bar';
import { pricePipe } from './price';
import { PriceDirective } from './price.directive';

@NgModule({
  imports: [CommonModule, RouterModule, ProgressBarModule],
  declarations: [PanelRowComponent, pricePipe, PriceDirective],
  exports: [PanelRowComponent],
})
export class PanelRowModule {}
