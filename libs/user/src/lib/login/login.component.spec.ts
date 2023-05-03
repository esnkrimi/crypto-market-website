import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockState, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { initialState } from '@appBase/+state/state';
import { EsnSignupLoginModule } from '../../../../loginSignup/src/lib/esn-signup-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { notoficationService } from './notification';
import { actions } from '@appBase/+state/actions';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let ns: notoficationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        EsnSignupLoginModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('Should Run Dispatch On Calling callbackLogin', () => {
    jest.spyOn(store, 'dispatch').mockReturnValue();
    component.callbackLogin('any');
    expect(store.dispatch).toBeCalled();
  });

  it('Should Run Dispatch On Calling callbackSignup', () => {
    jest.spyOn(store, 'dispatch').mockReturnValue();
    component.callbackSignup('any');
    expect(store.dispatch).toBeCalled();
  });

  it('Should Run Dispatch On With Mock Parameter On callbackLogin', () => {
    let d = {
      email: 'esnkrimi@gmail.com',
      password: '123',
    };
    let data = {
      uesername: 'esnkrimi@gmail.com',
      password: '123',
    };
    jest.spyOn(store, 'dispatch');
    component.callbackLogin(d);
    expect(store.dispatch).toBeCalledWith(
      actions.startLogin({ userData: data })
    );
  });

  it('Should Run Dispatch On With Mock Parameter On callbackSignup', () => {
    let d = {
      firstname: 'ehsan',
      lastname: 'karimi',
      mobile: '09188108019',
      email: 'esnkrimi@gmail.com',
      password: '123',
    };
    jest.spyOn(store, 'dispatch');
    component.callbackSignup(d);
    expect(store.dispatch).toBeCalledWith(actions.startSignup({ userData: d }));
  });
});
