import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./currency.reducer";

export const selectCurrencyState = createFeatureSelector<State>('currency');

export const selectCurrencyForHeader = createSelector(
  selectCurrencyState,
  (state: State) => state.currency.filter(currency => currency.cc === 'USD' || currency.cc === 'EUR')
);

export const selectCurrency = createSelector(
  selectCurrencyState,
  (state: State) => state.currency
);
