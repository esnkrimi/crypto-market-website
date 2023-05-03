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

import { PanelComponent } from './panel/panel.component';
import { ProgressBarModule } from 'luxury-progress-bar';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let service: apiService;

  let mockPercentValue = [
    {
      USD: {
        CHANGE24HOUR: ['120', '', ''],
        PRICE: '100',
      },
    },
  ];
  let directive: PriceDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelComponent, PriceDirective],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        ProgressBarModule,
        ZoomRatesBoardModule,
        MarketChartModule,
        MarketInformationModule,
      ],
    }).compileComponents();
    service = TestBed.inject(apiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should RENDER', () => {
    component.data = mockPercentValue;
    component.data['USD'].CHANGE24HOUR[2] = '-';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('.directive')).nativeElement;
    expect(span.style.color).toBe('red');
  });

  it('should RENDER', () => {
    component.data = mockPercentValue;
    component.data['USD'].CHANGE24HOUR[2] = '+';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('.directive')).nativeElement;
    expect(span.style.color).toBe('green');
  });
});
