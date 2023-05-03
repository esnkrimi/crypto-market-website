import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCurrencyComponent } from './news-currency.component';

describe('NewsCurrencyComponent', () => {
  let component: NewsCurrencyComponent;
  let fixture: ComponentFixture<NewsCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
