import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalService } from '@appBase/storage';
import { actions } from '@appBase/+state/actions';
import { notoficationService } from './notification';

export const DEVICE_WIDTH_TOKEN = new InjectionToken<string>('DEVICE_WIDTH');
export const DEVICE_TYPE_TOKEN = new InjectionToken<string>('DEVICE_TYPE');
export function detecetDevice(width) {
  return width < 1025 ? false : true;
}
@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: DEVICE_WIDTH_TOKEN,
      useValue: window.screen.width,
    },
    {
      provide: DEVICE_TYPE_TOKEN,
      useFactory: detecetDevice,
      deps: [DEVICE_WIDTH_TOKEN],
    },
  ],
})
export class LoginComponent implements OnInit {
  showConfirm;
  data = {
    forgetHref: 'https://.....',
    sigunpApiHref: 'https://.....',
    loginApiHref: 'https://.....',
    signupFields: {
      firstname: true,
      lastname: true,
      email: true,
      password: true,
      mobile: true,
    },
    backgroundColor: 'white',
    textColor: 'black',
    btnClass: 'btn-primary',
  };

  constructor(
    private store: Store,
    public ns: notoficationService,
    @Inject(DEVICE_TYPE_TOKEN) public DEVICE_IS_PC: any
  ) {}

  ngOnInit(): void {
    this.ns.showConfirm$.subscribe((d) => {
      this.showConfirm = d;
    });
  }
  hideConfirm() {
    this.ns.showConfirm$.next(false);
  }

  callbackSignup(d) {
    let data = {
      firstname: d.firstname,
      lastname: d.lastname,
      mobile: d.mobile,
      email: d.email,
      password: d.password,
    };
    //console.log(data);
    this.store.dispatch(actions.startSignup({ userData: data }));
  }

  callbackLogin(d) {
    let data = {
      uesername: d.email,
      password: d.password,
    };
    console.log(data);
    this.store.dispatch(actions.startLogin({ userData: data }));
  }
}
