import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'luxury-progress-bar';

@NgModule({
  imports: [ProgressBarModule,CommonModule, RouterModule, FormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
