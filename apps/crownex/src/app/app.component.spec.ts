import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HeaderModule } from 'libs/header/src/lib/header.module';
import { PanelModule } from 'libs/panel/src/lib/panel.module';
import { ProgressBarModule } from 'luxury-progress-bar';
import { newSelect, selectCurrency } from './+state/select';
import { State } from './+state/state';
import { rootRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
const sampleInitialState: any = {
  currency: [['ETH', '200', 'yellow', '$10', '$10', 'Ƀ10', 'Market', false]],
  dataSignup: {
    firstname: 'ehsan',
    lastname: 'karimi',
    email: 'esn@',
    password: '123',
    mobile: '918',
  },
  dataLogin: {
    uesername: 'usname',
    password: 'pass',
  },
  resultLogin: '1',
  resultSignup: '1',
  active: true,
  user: {
    id: 100,
    email: 'esnkr@gmail',
    address: {
      city: 'hamedan',
      street: 'rokni',
    },
  },
};
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore()],
      imports: [
        ProgressBarModule,
        HeaderModule,
        PanelModule,
        HttpClientModule,
        rootRouterModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    let result = store.overrideSelector(newSelect, sampleInitialState.currency);
    fixture.detectChanges();
    expect(component.result).toBe(sampleInitialState.currency);
  });

  it('should render div[.progress] for loading===true', () => {
    component.loading = false;
    fixture.detectChanges();
    let div = fixture.debugElement.query(By.css('.progress'));
    expect(div.nativeElement.__ngContext__).toBeFalsy();

    component.loading = true;
    fixture.detectChanges();
    div = fixture.debugElement.query(By.css('.progress'));
    expect(div.nativeElement.__ngContext__).toBeTruthy();
  });
});
