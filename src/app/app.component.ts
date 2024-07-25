import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';
import { State } from './store/currency.reducer';
import { Store } from '@ngrx/store';
import { setCurrency } from './store/currency.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'converter';

  constructor(private currencyService: CurrencyService, private store: Store<{currency: State}> ) {
    this.init();
  }

  public init(): void {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.store.dispatch(setCurrency(data));
    });
  }
}
