import { Action, createReducer, on } from '@ngrx/store';
import { Currency } from '../types/currency';
import { setCurrency } from './currency.actions';

export interface State {
  currency: Currency[];
}

const initialState: State = {
  currency: [],
};

const currencyReducer = createReducer(
  initialState,
  on(setCurrency, ((state, { currency }) => ({ ...state, currency })
)));

export function reducer(state: State | undefined, action: Action) {
  return currencyReducer(state, action);
}
