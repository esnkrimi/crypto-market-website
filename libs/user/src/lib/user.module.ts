import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducerCurrency } from '@appBase/+state/reducer';
import { EsnSignupLoginModule } from '../../../loginSignup/src/lib/esn-signup-login.module';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from '@appBase/+state/effects';
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    //console.log('state', state);
    //console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  imports: [
    CommonModule,
    EsnSignupLoginModule,
    StoreModule.forFeature('store', reducerCurrency.reducer),
    EffectsModule.forRoot([LoginEffect]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class UserModule {}
