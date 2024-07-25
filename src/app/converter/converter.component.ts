import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../store/currency.reducer';
import { selectCurrency } from '../store/currency.selector';
import { Currency } from '../types/currency';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent implements OnInit, OnDestroy {
  public currencyForm: FormGroup;
  public currencies: Currency[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store<{ currency: State }>) {
    this.currencyForm = this.fb.group({
      amountFrom: 0,
      amountTo: 0,
      fromCurrency: null,
      toCurrency: null
    });
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectCurrency)
        .subscribe(data => this.currencies = data)
    );

    this.subscription.add(
      this.currencyForm.get('amountFrom')?.valueChanges.subscribe((value) => {
        const fromCurrency = this.currencyForm.get('fromCurrency')?.value;
        const toCurrency = this.currencyForm.get('toCurrency')?.value;

        if (fromCurrency !== null && toCurrency !== null) {
          this.currencyForm.get('amountTo')?.setValue(this.calculate(value, fromCurrency, undefined, toCurrency), { emitEvent: false });
        }
      })
    );

    this.subscription.add(
      this.currencyForm.get('amountTo')?.valueChanges.subscribe((value) => {
        const fromCurrency = this.currencyForm.get('fromCurrency')?.value;
        const toCurrency = this.currencyForm.get('toCurrency')?.value;

        if (fromCurrency !== null && toCurrency !== null) {
          this.currencyForm.get('amountFrom')?.setValue(this.calculate(undefined, fromCurrency, value, toCurrency), { emitEvent: false });
        }
      })
    );

    this.subscription.add(
      this.currencyForm.get('fromCurrency')?.valueChanges.subscribe((value) => {
        const amountFrom = this.currencyForm.get('amountFrom')?.value;
        const toCurrency = this.currencyForm.get('toCurrency')?.value;

        if (toCurrency !== null) {
          this.currencyForm.get('amountTo')?.setValue(this.calculate(amountFrom, value, undefined, toCurrency), { emitEvent: false });
        }
      })
    );

    this.subscription.add(
      this.currencyForm.get('toCurrency')?.valueChanges.subscribe((value) => {
        const fromCurrency = this.currencyForm.get('fromCurrency')?.value;
        const amountFrom = this.currencyForm.get('amountFrom')?.value;

        if (fromCurrency !== null) {
          this.currencyForm.get('amountTo')?.setValue(this.calculate(amountFrom, fromCurrency, undefined, value), { emitEvent: false });
        }
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calculate(amountFrom: number | undefined, fromCurrency: Currency, amountTo: number | undefined, toCurrency: Currency): number {
    if (amountTo === undefined && amountFrom !== undefined) {
      return amountFrom * fromCurrency.rate / toCurrency.rate;
    }

    return amountTo !== undefined ? amountTo * toCurrency.rate / fromCurrency.rate : 0;

  }
}
