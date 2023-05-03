import { ComponentFixture, TestBed } from '@angular/core/testing';
import { apiService } from '../../../../../libs/user/src/lib/api.service';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { actions } from '@appBase/+state/actions';
import { of } from 'rxjs';
import { LoginEffect } from './effects';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { initialState } from './state';

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
const mockLoginInfo = [
  {
    user_id: '50',
    user_name: 'esn',
    user_pass: 'pass',
  },
];
const mockLogin = {
  userData: {
    uesername: 'esn@',
    password: 'pass',
  },
};
describe('AppComponent', () => {
  let store: Store;
  let service: apiService;
  let actions$: any;
  let effects: LoginEffect;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        LoginEffect,
      ],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(apiService);
    store = TestBed.inject(Store);
    effects = TestBed.inject(LoginEffect);
    jest.setTimeout(500000);
  });

  it('should call getBooks and redirect to booksLoaded action', (done) => {
    jest.spyOn(service, 'login').mockReturnValue(of(mockLoginInfo));
    actions$ = of(actions.startLogin({ userData: 'mockLogin' }));
    effects.login.subscribe((res: any) => {
      expect(service.login).toHaveBeenCalled();
      expect(res).toEqual(actions.finishLogin({ userData: mockLoginInfo }));
      done();
    });
  });
});
