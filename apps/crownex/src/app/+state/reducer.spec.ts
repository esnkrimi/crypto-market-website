import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { actions } from './actions';
import { reducerCurrency } from './reducer';
import { initialState, State } from './state';

describe('CalendarComponent', () => {
  let sampleInitialState: any = {
    currency: [['SOL', '200', 'yellow', '$10', '$10', 'Ƀ10', 'Market', false]],
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should return', () => {
    let act$: Action = { type: 'unknown' };
    let state = reducerCurrency.reducer(sampleInitialState, act$);
    //console.log(state);
    // expect(state.currency).toEqual(initialState);
  });

  it('should load one currency into state.currency after Fetch Action', () => {
    let act$ = actions.fetchAction({ currencies: sampleInitialState.currency });
    let state = reducerCurrency.reducer(initialState, act$);
    //console.log(state.currency);
    expect(state.currency).toBe(sampleInitialState.currency);
  });
});
