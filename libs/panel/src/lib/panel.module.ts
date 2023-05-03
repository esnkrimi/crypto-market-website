import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'luxury-progress-bar';
import { pricePipe } from './price';
import { PriceDirective } from './price.directive';

@NgModule({
  imports: [CommonModule, RouterModule, ProgressBarModule],
  declarations: [PanelComponent, pricePipe, PriceDirective],
  exports: [PanelComponent],
})
export class PanelModule {}
