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
  selector: 'nx-panel-rows',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
})
export class PanelRowComponent implements OnInit {
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
  items = ['OIL,GOLD,EUR,JPY,BTC,ETH,DOGE'];
  constructor(private service: apiService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getApi();
    this.cdRef.detectChanges();

    interval(5000).subscribe((x) => {
      this.getApi();
    });
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
