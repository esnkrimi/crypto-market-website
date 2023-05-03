import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarModule } from 'luxury-progress-bar';
import { BehaviorSubject, of } from 'rxjs';
import { apiService } from '../api.service';
import { pricePipe } from '../price';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { ZoomComponent } from '@appBase/lazy/app/zoom/zoom.component';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let service: apiService;
  let mockReturnValue = {
    DISPLAY: { BTC: { USD: { PRICE: '16.0' } } },
  };

  let mockDataNews = [
    {
      title: 'news1',
      comment: 'comment1',
    },
    {
      title: 'news2',
      comment: 'comment2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelComponent, pricePipe],
      imports: [
        HttpClientModule,
        ProgressBarModule,
        RouterModule.forRoot([
          { path: 'lazy/zoom/:id', component: ZoomComponent },
        ]),
      ],
    }).compileComponents();
    service = TestBed.inject(apiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('percent() Test', () => {
    let res = component.percent('$100', '$120');
    expect(res).toEqual((100 / 120) * 100);
  });

  it('service', () => {
    jest.spyOn(service, 'cryptoSetList').mockReturnValue(of(mockReturnValue));
    component.getApi();
    service.cryptoSetList(component.items, 'USD').subscribe((d) => {
      expect(d).toBe(mockReturnValue);
      expect(component.loading).toBe(false);
    });
  });

  it('service news', () => {
    jest.spyOn(service, 'news').mockReturnValue(of(mockDataNews));
    component.news();
    service.news().subscribe((d) => {
      expect(d).toBe(mockDataNews);
    });
  });
});
