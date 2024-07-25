import { Component, OnInit } from '@angular/core';
import { Currency } from '../types/currency';
import { Store } from '@ngrx/store';
import { State } from '../store/currency.reducer';
import { selectCurrencyForHeader } from '../store/currency.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public exchangeRates: Currency[] = [];

  constructor(private store: Store<{ currency: State }>) { }

  public ngOnInit(): void {
    this.store.select(selectCurrencyForHeader)
      .subscribe(data => this.exchangeRates = data);
  }
}
