import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const actions = createActionGroup({
  source: 'store',
  events: {
    'fetch action': props<{ currencies: any }>(),
    'start login': props<{ userData: any }>(),
    'finish login': props<{ userData: any }>(),
    'start signup': props<{ userData: any }>(),
    'finish signup': props<{ userData: any }>(),
    'price action': props<{ data: any }>(),
  },
});
