import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'nx-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.sass'],
})
export class NewsTableComponent implements OnChanges {
  @Input() data: any;
  @Input() headTitle: any;
  @Input() DEVICE_IS_PC;
  @Input() id: any;
  @Input() pageNumber = 1;
  @Input() fields: any;
  @Output() pageNumberOutput = new EventEmitter<number>();
  fieldsWidth;
  length;
  constructor(private route: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.length = this.DEVICE_IS_PC ? 500 : 100;
    this.fieldsWidth = Math.floor(100 / this.fields.length) + '%';
    this.pageNumberOutput.emit(this.pageNumber);
    if (this.id === 'crypto') this.data = this.data.filter((d) => d['LOWDAY']);
  }

  counter(i: number) {
    return new Array(i);
  }
  sort(field: any) {
    this.data.sort(function (a, b) {
      return a[field] - b[field];
    });
  }
  focus(val: any) {
    switch (this.id) {
      case 'currency':
        this.route.navigate(['lazy/zoom/', val['FROMSYMBOL']]);
        break;
      case 'crypto':
        this.route.navigate(['lazy/zoom/', val['FROMSYMBOL']]);
        break;
      case 'calendar':
        window.open(val['SourceURL']);
        break;
      case 'news':
        window.open(val['url']);
        break;
    }
  }
}
