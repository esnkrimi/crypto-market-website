import { Component, OnInit } from '@angular/core';
import { first, map, take } from 'rxjs';
import { apiService } from './api.service';

@Component({
  selector: 'nx-news-currency',
  templateUrl: './news-currency.component.html',
  styleUrls: ['./news-currency.component.scss'],
})
export class NewsCurrencyComponent implements OnInit {
  vars = ['datasUsd', 'datasGbp', 'datasJpy', 'datasEur'];
  datasUsd;
  datasEur;
  datasGbp;
  datasJpy;
  constructor(private service: apiService) {}

  ngOnInit(): void {
    this.datasUsd = this.fetch('BTC', 'datasUsd');
    this.datasGbp = this.fetch('ADA', 'datasGbp');
    this.datasJpy = this.fetch('ETH', 'datasJpy');
    this.datasEur = this.fetch('SOL', 'datasEur');
  }
  fetch(cat: string, varData) {
    this.service
      .news(cat)
      .pipe(map((d) => d[0]))
      .subscribe((d) => {
        this[varData] = d;
        return d;
      });
  }
}
