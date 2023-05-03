import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { pricePipe } from './table/field.pipe';
import { FieldDirective } from './table/field.directive';

@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [TableComponent, pricePipe, FieldDirective],
  exports: [TableComponent],
})
export class TableModule {}
