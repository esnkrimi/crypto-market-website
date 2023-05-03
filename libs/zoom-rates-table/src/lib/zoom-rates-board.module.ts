import { NgModule } from '@angular/core';
import { ZoomRatesBoardComponent } from './zoom-rates-board.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducerCurrency } from '@appBase/+state/reducer';
import { CommonModule } from '@angular/common';
import { fieldPipe } from './field.pipe';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    ////console.log('state', state);
    ////console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [ZoomRatesBoardComponent, fieldPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature('store', reducerCurrency.reducer, {
      metaReducers,
    }),
  ],
  exports: [ZoomRatesBoardComponent],
})
export class ZoomRatesBoardModule {}
