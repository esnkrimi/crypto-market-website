import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnInit,
} from '@angular/core';
import { apiService } from './api.service';
import { debounceTime, map, switchMap, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
export const DEVICE_WIDTH_TOKEN = new InjectionToken<string>('DEVICE_WIDTH');
export const DEVICE_TYPE_TOKEN = new InjectionToken<string>('DEVICE_TYPE');
export function detecetDevice(width) {
  return width < 1025 ? false : true;
}
@Component({
  selector: 'nx-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.sass'],
})
export class CryptoComponent implements OnInit {
  firstChar = '';
  source = 'BTC,ETH,BNB,DOGE,XRP,COMP,SOL,MANA,SHIB,YFI,SOL';
  destination = 'USD';
  themeColor = '#fff';
  textColor = '#222';
  fullDataShow = true;
  urlPrefix = 'http://www.mywebsite.com/myroutes';
  columns = ['HIGHDAY', 'LOWDAY', 'SUPPLY', 'MARKET'];
  loading = true;
  deviceLarge = true;
  arraySaveToken;
  form = new FormGroup({
    inputChar: new FormControl(''),
  });
  @Input() DEVICE_IS_PC;

  constructor(private service: apiService) {}
  ngOnInit(): void {
    this.loading = true;

    this.loading = true;
    this.saveTokens();
    this.getFirstChar();
  }
  saveTokens() {
    this.arraySaveToken = this.service.coinListAll();
    this.loading = false;
    return this.arraySaveToken;
  }
  filters(char) {
    return this.arraySaveToken.pipe(
      map((d: any) => d.filter((word) => word.startsWith(char)))
    );
  }
  getFirstChar() {
    this.form.controls['inputChar'].valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((t) => {
          this.loading = true;
          return this.filters(t?.toUpperCase());
        })
      )
      .subscribe((d: any) => {
        this.source = d.join(',');
        this.loading = false;
      });
  }
}
