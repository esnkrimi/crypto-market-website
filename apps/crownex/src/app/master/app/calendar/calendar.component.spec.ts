import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarModule } from 'luxury-progress-bar';
import { of } from 'rxjs';
import { apiService } from './api.service';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let http: any;
  let service: apiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      imports: [HttpClientModule, ProgressBarModule],
    }).compileComponents();
    service = TestBed.inject(apiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.loading).toBe(true);
    jest.spyOn(service, 'calendar').mockReturnValue(of('TestObservable'));
    component.getApi();
    fixture.detectChanges();
    expect(service.calendar).toBeCalled();
    expect(component.data).toBe('TestObservable');
    expect(component.loading).toBe(false);
  });
});
