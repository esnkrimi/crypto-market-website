import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { apiService } from '../../../../../libs/user/src/lib/api.service';
import { LocalService } from '@appBase/storage';
import { actions } from '@appBase/+state/actions';
import { Router } from '@angular/router';
import { notoficationService } from '../../../../../libs/user/src/lib/login/notification';

@Injectable()
export class LoginEffect {
  login: any = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.startLogin),
      switchMap((d1: any) => {
        return this.ser
          .login(d1['userData']['uesername'], d1['userData']['password'])
          .pipe(
            tap((d: any) => {
              //console.log('EFFECT', d);
              if (d[0].user_name !== 'Unauth') this.saveSession(d[0]);
            })
          )
          .pipe(map((d: any) => actions.finishLogin({ userData: d })));
        /*.pipe(
            tap((d) => {
              if (d['userData'][0]['user_name'] !== 'Unauth')
                this.router.navigate(['']);
            })
          );*/
      })
    );
  });

  signup = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.startSignup),
      switchMap((d1: any) => {
        return this.ser
          .signup(
            d1['userData']['firstname'],
            d1['userData']['lastname'],
            d1['userData']['mobile'],
            d1['userData']['email'],
            d1['userData']['password']
          )
          .pipe(
            map((d: any) => actions.finishSignup({ userData: d[0].user_id })),
            tap((d) => {
              this.ns.showConfirm$.next(true);
            })
          );
      })
    );
  });

  saveSession(data) {
    this.localstorage.saveData('userData', data.user_name);
    this.localstorage.saveData('user_id', data.user_id);
  }
  constructor(
    public ns: notoficationService,
    private actions$: Actions,
    private ser: apiService,
    private router: Router,
    private localstorage: LocalService
  ) {}
}
