import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { newSelect, selectCurrency } from './+state/select';
export const DEVICE_WIDTH_TOKEN = new InjectionToken<string>('DEVICE_WIDTH');
export const DEVICE_TYPE_TOKEN = new InjectionToken<string>('DEVICE_TYPE');
export function detecetDevice(width) {
  return width < 1025 ? false : true;
}
@Component({
  selector: 'crownex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnInit {
  result = '909';

  constructor(
    private store: Store,
    @Inject(DEVICE_TYPE_TOKEN) public DEVICE_IS_PC: any
  ) {}
  ngOnInit(): void {
    this.result = 'INITRESULT';
    this.f();
  }
  f() {
    this.store.select(newSelect).subscribe((d) => {
      this.result = d;
      return d;
    });
  }
}
