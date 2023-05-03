import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { interval, map } from 'rxjs';
import { apiService } from '../api.service';
import { pricePipe } from '../price';
import {} from '../price';
@Component({
  selector: 'nx-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
})
export class PanelComponent implements OnInit {
  @Output() loaded: EventEmitter<boolean> = new EventEmitter();
  data: Object[];
  dataNews;
  newsItem: {
    title: string;
    link: string;
  } = {
    title: '',
    link: 'string',
  };
  loading = true;
  items = ['OIL,GOLD,BTC,EUR,JPY,ETH,DOGE'];
  constructor(private service: apiService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getApi();
    this.cdRef.detectChanges();

    interval(50000).subscribe((x) => {
      this.getApi();
    });

    this.news();
  }

  news() {
    let i = 1;
    this.service.news().subscribe((res) => {
      this.dataNews = res;
      this.newsItem.title = this.dataNews[0].title;
      this.newsItem.link = this.dataNews[0].url;
      interval(5000).subscribe((x) => {
        this.newsItem.title = this.dataNews[i].title;
        this.newsItem.link = this.dataNews[i].url;
        i++;
        if (i === 10) i = 0;
      });
    });
  }
  percent(val, total) {
    let pricePipe_ = new pricePipe();
    total = total.replaceAll(',', '');
    let val_ = Math.abs(Number(pricePipe_.transform(val, '')));
    let total_ = pricePipe_.transform(total, '');
    let t: any = (Number(val_) / Number(total_)) * 100;
    return t;
  }
  async getApi() {
    await this.service
      .cryptoSetList(this.items, 'USD')
      .pipe(map((data) => data['DISPLAY']))
      .subscribe((res) => {
        this.data = res;
        if (this.loading) this.loaded.emit(false);
        this.loading = false;
      });
  }
}
