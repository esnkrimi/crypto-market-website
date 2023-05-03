import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rootRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from '../../../../libs/panel/src/lib/panel.module';
import { reducerCurrency } from './+state/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'luxury-progress-bar';
import { MasterModule } from './master/master.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    //console.log('state', state);
    //console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [AppComponent],
  imports: [
    PanelModule,
    CommonModule,
    MasterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProgressBarModule,
    FormsModule,
    rootRouterModule,
    StoreModule.forRoot(
      { currency: reducerCurrency.reducer },
      { metaReducers }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
