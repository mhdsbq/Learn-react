import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=aaf526cbbffe70d3ce6101f41f6e08c5'

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]) // use state returns an array of initial values and function
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  console.log(exchangeRate)

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectCurrency = {fromCurrency}
        onChangeCurrency = {event => setFromCurrency(event.target.value)}
      />
      <div className="equels"> = </div>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        selectCurrency = {toCurrency}
        onChangeCurrency = {event => setToCurrency(event.target.value)}

      />
    </>
  );
}

export default App;
