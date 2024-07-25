import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../types/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  constructor(private http: HttpClient) {}

  public getExchangeRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }
}
