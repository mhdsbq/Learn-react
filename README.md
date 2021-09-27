### 1
* make a new functional componont calld calld CurrencyRow which has an input field and a dropdown select
* import it into app.js and use it to select from and to currency

### 2
* create a state using ```useState``` to store currency options
* it's use is explaned below

### 3
* load currencydata using fetch inside a useEffect hook with empty list( on mount only)
* from the loaded data, store currency options in ```currencyOptions``` state
using ```setCurencyOptions```

### 4
* pass these currency options state to currency row componont imported earlier
* to use this take in a variable calld props in the componont function

### 5 
* destructure these props inside function componont

### 6
* use the currencyOptions from props and use map function to populate each symbols as an ```<option>``` tag
* also set keys

### 7 - seting up default currencies
* we can pass a selected currency prop to do this 
* in currency row componont set value to this prop value

### 8 
* to track selected currencies, set up two more states
* a fromCurrency and a toCurrency 
### 9
* PS:FREE API ONLY SUPPORT BASE CURRENCY EUR SO TO CONVERT INR TO USD WE NEED TO CAPTURE BOTH EXCHANGE RATES WITH EUR 
* THEN CONVERTED AMOUNT = AMOUNT*(TO_RATE/FROM_RATE)

### 9
* pass another prop function, onchangecurrency 
* receave it on currency row componont as prop and use it onChange of ```<select>``` tag
* pass a function to set from currency for one componont and set to currency for the other one

## 10
* setup a state for the input field ie;amount
* 


## oops the api free version sucks, so just stoping here