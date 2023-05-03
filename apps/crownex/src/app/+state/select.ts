import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { reducerCurrency } from './reducer';
import { State } from './state';

export const {
  selectCurrency,
  selectResultLogin,
  selectDataLogin,
  selectDataSignup,
  selectResultSignup,
  selectActive,
  selectStoreState,
  selectUser,
} = reducerCurrency;

export const selState = createFeatureSelector<State>('store');
export const newSelect = createSelector(selState, (res) => res.currency);
