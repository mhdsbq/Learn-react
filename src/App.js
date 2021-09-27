import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=aaf526cbbffe70d3ce6101f41f6e08c5'// Go on steal it 👤💰


function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  const [fromExchangeRate, setFromExchangeRate] = useState()
  const [ToExchangeRate, setToExchangeRate] = useState()

  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let fromAmount,toAmount
  if(amountInFromCurrency && ToExchangeRate && fromExchangeRate){// TODO:refacter.  ?.why this rates are fetched multipple times
    fromAmount = amount
    toAmount = (ToExchangeRate/fromExchangeRate)*amount
  }else if(ToExchangeRate && fromExchangeRate){ // TODO:refacter
    toAmount = amount
    fromAmount = (fromExchangeRate/ToExchangeRate)*amount
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const keys = [...Object.keys(data.rates)]
        setCurrencyOptions(keys)
        // seting default currency options
        setFromCurrency('USD')
        setToCurrency('INR')
        
        setFromExchangeRate(data.rates['USD'])
        setToExchangeRate(data.rates['INR'])
      })
  }, []) // runs only once ie; on mount

  useEffect(() => {
    if(!fromCurrency || !toCurrency) return
    fetch(`${BASE_URL}&symbols=${fromCurrency},${toCurrency}`)
    .then(res => res.json())
    .then(data => {
      setFromExchangeRate(data.rates[fromCurrency])
      setToExchangeRate(data.rates[toCurrency])
    })
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(event) {
    setAmountInFromCurrency(true)
    setAmount(event.target.value)
  }
  function handleToAmountChange(event) {
    setAmountInFromCurrency(false)
    setAmount(event.target.value)
  }

  return (
    <>
      <h1>Forx Crypto Converter</h1>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        defaultCurrency = {fromCurrency}
        onChangeCurrency = {event => setFromCurrency(event.target.value)}
        amount = {fromAmount} 
        onChangeAmount = {handleFromAmountChange}
      />
      <span className="equels"> = </span>
      <CurrencyRow 
        currencyOptions = {currencyOptions}
        defaultCurrency = {toCurrency}
        onChangeCurrency = {event => setToCurrency(event.target.value)}
        amount = {toAmount}
        onChangeAmount = {handleToAmountChange}
      />
    </>
  );
}

export default App;
