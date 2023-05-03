import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { MarketChartModule } from 'libs/market-chart/src/lib/market-chart.module';
import { MarketInformationModule } from 'libs/market-information/src/lib/market-information.module';
import { ZoomRatesBoardModule } from 'libs/zoom-rates-table/src/lib/zoom-rates-board.module';
import { BehaviorSubject, of } from 'rxjs';
import { apiService } from './api.service';
import { PriceDirective } from './price.directive';

import { ZoomComponent } from './zoom.component';

describe('ZoomComponent', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;
  let service: apiService;
  let mockReturnValue = new BehaviorSubject<any>({
    BTC: { USD: { PRICE: 16.0 } },
  });

  let mockPercentValue = {
    CHANGE24HOUR: ['120', '', ''],
    PRICE: '100',
  };
  let directive: PriceDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoomComponent, PriceDirective],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        ZoomRatesBoardModule,
        MarketChartModule,
        MarketInformationModule,
      ],
    }).compileComponents();
    service = TestBed.inject(apiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should RENDER', () => {
    component.dataCallback = mockPercentValue;
    component.dataCallback.CHANGE24HOUR[2] = '-';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('.small')).nativeElement;
    expect(span.style.color).toBe('red');
  });

  it('should RENDER', () => {
    component.dataCallback = mockPercentValue;
    component.dataCallback.CHANGE24HOUR[2] = '+';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('.small')).nativeElement;
    expect(span.style.color).toBe('green');
  });
});
