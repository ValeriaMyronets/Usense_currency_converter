# Currency Converter
This Angular project is a currency converter application that allows users to convert amounts between different currencies. The application fetches real-time exchange rates from a public API and updates conversions accordingly.

## Features
Real-time Exchange Rates: The header displays the current exchange rates of USD and EUR relative to UAH.


- Each currency has its own input and select elements.
- Separate input+select for the first currency and separate input+select for the second currency.
- Input fields allow users to specify the amount of currency to convert.
- Select elements offer at least three currencies: UAH, USD, and EUR.
- Bidirectional conversion functionality:
  - Changing the value in the first currency updates the value in the second currency.
  - Changing the value in the second currency updates the value in the first currency.
  - Changing the currency in either select element updates both conversions correctly.

## Requirements
- Angular: The project is built using Angular.
- Tailwind CSS: Used for styling the components.
- Public API for Exchange Rates: The application fetches exchange rates from a public API.

## Installation
 **Start the development server:**

   ```bash
   ng serve
