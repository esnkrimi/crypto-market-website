import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { interval } from 'rxjs';
import { apiService } from '../api.service';

@Component({
  selector: 'nx-market-information',
  templateUrl: './market-information.component.html',
  styleUrls: ['./market-information.component.sass'],
})
export class MarketInformationComponent implements OnChanges {
  @Input() params;
  signs = new Map();
  data;
  currencies = 'USD,EUR,JPY,RUB,GBP,BTC,ETH';
  dataInfo;
  detailFields = [
    'PRICE',
    'SUPPLY',
    'CIRCULATINGSUPPLY',
    'MKTCAP',
    'VOLUMEDAY',
    'LOWDAY',
    'HIGHDAY',
  ];
  val: string = '';
  destinationCoin = 'USD';
  loadingProgress = true;

  constructor(private service: apiService) {}

  ngOnChanges(): void {
    this.getPriceTop();
    let x = interval(50000);
    x.subscribe((d) => {
      this.getPriceTop();
    });
  }

  getPriceTop() {
    this.loadingProgress = true;
    this.val = this.params;
    this.data = [];
    this.service.cryptoZoom(this.val, this.currencies).subscribe((data) => {
      this.data = data;
      if (this.data[this.val])
        this.dataInfo = this.data[this.val][this.destinationCoin];
      this.loadingProgress = false;
    });
  }
}
