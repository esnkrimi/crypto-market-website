import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
} from '@angular/core';
import { interval, map, reduce, tap } from 'rxjs';
import { ZoomRatesBoardService } from './zoom-rates-board.service';
import { Store } from '@ngrx/store';
import { actions } from '@appBase/+state/actions';
import { selectCurrency } from '@appBase/+state/select';
import { Router } from '@angular/router';
export const DEVICE_WIDTH_TOKEN = new InjectionToken<string>('DEVICE_WIDTH');
export const DEVICE_TYPE_TOKEN = new InjectionToken<string>('DEVICE_TYPE');
export function detecetDevice(width) {
  return width < 1025 ? false : true;
}
@Component({
  selector: 'nx-zoom-rates-board',
  templateUrl: `zoom-rates-board.component.html`,
  styleUrls: ['zoom-rates-board.component.scss'],
  providers: [
    {
      provide: DEVICE_WIDTH_TOKEN,
      useValue: window.screen.width,
    },
    {
      provide: DEVICE_TYPE_TOKEN,
      useFactory: detecetDevice,
      deps: [DEVICE_WIDTH_TOKEN],
    },
  ],
})
export class ZoomRatesBoardComponent implements OnChanges {
  @Input() source;
  @Input() destination;
  @Input() themeColor;
  @Input() textColor;
  @Input() fullDataShow;
  @Input() urlPrefix;
  @Input() columns;
  selectFromNGRX;

  array: any = [[]];
  data;
  constructor(
    private router: Router,
    private service: ZoomRatesBoardService,
    private store: Store,
    @Inject(DEVICE_TYPE_TOKEN) public DEVICE_IS_PC: any
  ) {}

  ngOnChanges(): void {
    //   this.source = this.source.toUpperCase();
    //  this.destination = this.destination.toUpperCase();
    this.fetch();
    const numbers = interval(50000);
    numbers.subscribe((x) => {
      this.fetch();
    });
  }

  action(data) {
    this.store.dispatch(actions.fetchAction({ currencies: data || null }));
  }
  selectFromState() {
    this.store.select(selectCurrency).subscribe((d) => {
      this.selectFromNGRX = d;
      return d;
    });
  }
  comp(x, select) {
    for (let i = 0; i < select.length; i++) {
      if (this.data[x][this.destination])
        if (select[i][0] === x) {
          if (this.data[x][this.destination]['PRICE'] < select[i][1]) return 1;
          else if (this.data[x][this.destination]['PRICE'] > select[i][1])
            return 2;
          else return select[i][2];
        }
    }
    return 0;
  }
  fetch() {
    let subarray: any = [];
    this.selectFromState();
    const select = this.selectFromNGRX;
    this.service.fetch(this.source, this.destination).subscribe((d) => {
      this.data = d;
      let i = 0;
      this.array = [];
      for (const x in this.data) {
        this.data[x][this.destination]['PRICE'] =
          this.data[x][this.destination]['PRICE'].split(' ');
        this.data[x][this.destination]['PRICE'] =
          this.data[x][this.destination]['PRICE'][1];
        subarray[0] = x;
        subarray[1] = this.data[x][this.destination]['PRICE'];
        subarray[2] = this.data[x][this.destination]['PRICE'];
        subarray[2] = subarray[2].replaceAll(',', '');
        subarray[2] = 1 / Number(subarray[2]);
        subarray[3] = this.textColor;
        subarray[4] = this.data[x][this.destination][this.columns[0]];
        subarray[5] = this.data[x][this.destination][this.columns[1]];
        subarray[6] = this.data[x][this.destination][this.columns[2]];
        subarray[7] = this.data[x][this.destination][this.columns[3]];
        subarray[8] =
          'https://www.cryptocompare.com' +
          this.data[x][this.destination]['IMAGEURL'];
        if (select) {
          const compResult = this.comp(x, select);
          switch (compResult) {
            case 1:
              subarray[3] = 'red';
              break;
            case 2:
              subarray[3] = 'green';
              break;
            default:
              subarray[3] = compResult;
              break;
          }
        }
        this.array.push(subarray);
        i++;
        subarray = [];
      }
      this.action(this.array);
    });
  }
}
