import { createAction } from '@ngrx/store';
import { Currency } from '../types/currency';

export const setCurrency = createAction('[Currency] Set Currency', (currency: Currency[]) => ({ currency }));
