import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTableComponent } from './news-table/news-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [NewsTableComponent],
  exports: [NewsTableComponent],
})
export class NewsThumbnailModule {}
