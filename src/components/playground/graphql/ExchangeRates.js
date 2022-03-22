import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const ExchangeRates = () => {
  const [currencyRate, setCurrencyRate] = useState("EUR");


  const EXCHANGE_RATES = gql`
    query GetExchangeRates($currency: String!) {
      rates(currency: $currency) {
        currency
        rate
      }
    }
  `;

  const { data, error, loading } = useQuery(EXCHANGE_RATES, {
    variables: {
      currency: currencyRate
    }
  });

  

  return (
    <>
      <h1>Gotcha</h1>
      <button onClick={() => setCurrencyRate("HRK")}>HRK</button>
      <button onClick={() => setCurrencyRate("USD")}>USD</button>
      <button onClick={() => setCurrencyRate("EUR")}>EUR</button>

      <table>
        <thead>
          <tr>
            <td>Currency</td>
            <td>Exchange</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.rates.map((element) => (
              <tr key={data.rates.indexOf(element)}>
                <td>{element.currency}</td>
                <td>{element.rate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ExchangeRates;
