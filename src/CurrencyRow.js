import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        defaultCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props

    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={defaultCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map( option => 
                    <option value={option} key={option}>{option}</option>
                )}
            </select>
        </div>
    )
}
