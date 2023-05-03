import { createFeature, createReducer, on } from '@ngrx/store';
import { actions } from './actions';
import { initialState } from './state';

export const reducerCurrency = createFeature({
  name: 'store',
  reducer: createReducer(
    initialState,
    on(actions.fetchAction, (state, action) => ({
      ...state,
      currency: action.currencies,
    })),
    on(actions.startLogin, (state, action) => ({
      ...state,
      dataLogin: action.userData,
    })),
    on(actions.finishLogin, (state, action) => ({
      ...state,
      resultLogin: action.userData, //
    })),
    on(actions.startSignup, (state, action) => ({
      ...state,
      dataSignup: action.userData,
    })),
    on(actions.finishSignup, (state, action) => ({
      ...state,
      resultSignup: action.userData, //
    })),
    on(actions.priceAction, (state, action) => ({
      ...state,
      price: action.data, //
    }))
  ),
});
