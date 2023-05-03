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
    CHANGE24HOUR: '120',
    PRICE: '100',
  };
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

  it('should fetch price via service', () => {
    jest.spyOn(service, 'fetch').mockReturnValue(mockReturnValue);
    component.destinationCoin = 'BTC';
    component.fetch();
    expect(service.fetch).toHaveBeenCalled();
    expect(service.fetch).toBeCalledWith('BTC', 'USD');
    expect(component.dataCallback).toStrictEqual({ PRICE: 16 });
    mockReturnValue.next({ BTC: { USD: { PRICE: 17.0 } } });
    expect(component.dataCallback).toStrictEqual({ PRICE: 17 });
  });

  it('percent() Test', () => {
    let res = component.percent('$100', '$120');
    expect(res).toEqual((100 / 120) * 100);
  });

  it('should RENDER', () => {
    component.dataCallback = mockPercentValue;
    jest.spyOn(component, 'percent').mockReturnValue('75.0');
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.small'));
    expect(div.nativeElement.innerHTML).toContain('75.0');
  });

  it('child', () => {
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.k1'));
    //console.log(div.nativeElement.innerHTML);
  });
});
