import { Component, Input, OnChanges } from '@angular/core';
import { interval } from 'rxjs';
import { apiService } from './api.service';
import { pricePipe } from './price';
@Component({
  selector: 'nx-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.sass'],
})
export class ZoomComponent implements OnChanges {
  currencies: any = 'USD,EUR,CHN,JPY,RUB,GBP,BTC,ETH,DOGE,BNB';
  @Input() destinationCoin;
  textColor = 'white';
  themeColor = '#201e2b';
  loadingPage = true;
  deviceLarge = true;
  dataCallback: any;
  urlPrefix = 'http://www.mywebsite.com/myroutes';
  columns = ['HIGHDAY', 'LOWDAY', 'MARKET'];
  pageNumber = 1;
  dataNews;
  constructor(private service: apiService) {}
  getApi() {
    this.service.news(this.destinationCoin.toUpperCase()).subscribe((res) => {
      this.dataNews = res;
    });
  }
  updateCurrency() {
    this.currencies = 'USD,EUR,CHN,JPY,RUB,GBP,BTC,ETH,DOGE,BNB';
    this.currencies = this.currencies.replaceAll(this.destinationCoin, '');
    this.currencies.replaceAll(',,', ',');
    this.currencies.replaceAll(",'", "'");
    this.currencies.replaceAll("',", "'");
  }
  ngOnChanges(): void {
    this.updateCurrency();
    this.fetch();
    this.getApi();
    var repeat = interval(50000);
    repeat.subscribe((d) => this.fetch());
  }

  fetch() {
    this.service.fetch(this.destinationCoin, 'USD').subscribe((d) => {
      this.dataCallback = d[this.destinationCoin]['USD'];
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
}
