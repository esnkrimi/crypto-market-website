import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EsnImgSliderComponent } from './esn-img-slider.component';
@NgModule({
  declarations: [EsnImgSliderComponent],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  exports: [EsnImgSliderComponent],
})
export class EsnImgSliderModule {}
