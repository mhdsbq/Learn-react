import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency
    } = props
    return (
        <div>
            <input type="number" className="input"></input>
            <select value={selectCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
