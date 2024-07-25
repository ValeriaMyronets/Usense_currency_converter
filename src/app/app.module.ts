import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { reducer as currencyReducer } from './store/currency.reducer';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { ConverterComponent } from './converter/converter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ currency: currencyReducer }),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    ConverterComponent]
})
export class AppModule { }
