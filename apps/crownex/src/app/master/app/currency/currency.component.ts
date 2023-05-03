import { Component, Input, OnInit } from '@angular/core';
import { apiService } from './api.service';

@Component({
  selector: 'nx-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass'],
})
export class CurrencyComponent implements OnInit {
  fields = ['FROMSYMBOL', 'PRICE', 'HIGHDAY', 'HIGHHOUR', 'LOWHOUR', 'LOWDAY'];
  headTitle = [
    'To',
    'Price',
    'Daily High',
    'Hourly High',
    'Hourly Low',
    'Daily Low',
  ];
  @Input() DEVICE_IS_PC;

  currenciesSourceSelected = 'EUR';
  currenciesDestination = [
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'RUB',
    'CHF',
    'AUD',
    'CAD',
    'CNY',
    'CNH',
    'CZK',
    'DKK',
    'HKD',
    'HUF',
    'MXN',
    'NOK',
    'NZD',
    'PLN',
    'SEK',
    'SGD',
    'TRY',
  ];
  loading = true;
  data;
  constructor(private service: apiService) {}

  ngOnInit(): void {
    if (!this.DEVICE_IS_PC) {
      this.fields = ['FROMSYMBOL', 'PRICE'];
      this.headTitle = [];
    }
    this.getApi();
  }

  getApi() {
    this.loading = true;
    this.data = [];
    // this.spliceArray();
    this.service
      .cryptoSetList(this.currenciesSourceSelected, this.currenciesDestination)
      .subscribe((data) => {
        this.data = this.convertObject2Array(
          data['DISPLAY'][this.currenciesSourceSelected]
        );
        this.data.forEach((element, index) => {
          this.data[index]['FROMSYMBOL'] = this.currenciesDestination[index];
          this.data[index]['PRICE'] = this.data[index]['PRICE'].substring(
            2,
            15
          );
        });

        this.data = this.data.filter(
          (d) =>
            d['FROMSYMBOL'] !== 'CNH' &&
            d['FROMSYMBOL'] !== this.currenciesSourceSelected
        );
        this.loading = false;
      });
  }
  spliceArray() {
    let i = 0;
    while (i < this.currenciesDestination.length) {
      if (this.currenciesDestination[i] === this.currenciesSourceSelected)
        this.currenciesDestination.splice(i, 1);
      i++;
    }
  }
  convertObject2Array(data) {
    const resultArray = Object.keys(data).map((index) => {
      let coins;
      coins = data[index];
      return coins;
    });
    return resultArray;
  }
  returnSelectedValue(e) {
    this.currenciesSourceSelected = e;
    this.getApi();
  }
}
