import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatesBoardModule } from '@crownex/rates-table-main';
import { StoreModule } from '@ngrx/store';
import { ProgressBarModule } from 'luxury-progress-bar';
import { map, of } from 'rxjs';
import { apiService } from './api.service';

import { CryptoComponent } from './crypto.component';

describe('CryptoComponent', () => {
  let component: CryptoComponent;
  let fixture: ComponentFixture<CryptoComponent>;
  let service: apiService;
  let returnFromService = {
    Data: {
      BTC: {},
      DOGE: {},
      SOL: {},
      ETH: {},
      XRP: {},
      ADA: {},
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RatesBoardModule,
        ProgressBarModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();
    service = TestBed.inject(apiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    jest.spyOn(service, 'coinListAll').mockReturnValue(of(returnFromService));
    component.arraySaveToken = component.saveTokens();
    expect(service.coinListAll).toBeCalled();
    fixture.detectChanges();
    component.arraySaveToken.subscribe((d) => {
      expect(d).toBe(returnFromService);
    });
    expect(component.loading).toBe(false);
  });

  /* it('should filter', () => {
    jest.spyOn(service, 'coinListAll').mockReturnValue(
      of(returnFromService).pipe(
        map((res) => res['Data']),
        map((d) => Object.keys(d))
      )
    );
    component.saveTokens();
    fixture.detectChanges();
    let t = component.filters('a');
    t.subscribe((d) => {
      expect(d).toBe(['ada']);
    });
  });*/

  it('should input char', fakeAsync(() => {
    component.getFirstChar();
    jest.spyOn(service, 'coinListAll').mockReturnValue(
      of(returnFromService).pipe(
        map((res) => res['Data']),
        map((d) => Object.keys(d))
      )
    );
    component.arraySaveToken = component.saveTokens();
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'A';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(1000);
    //console.log(component.source);
    fixture.detectChanges();
  }));
});
