import React from 'react'

const SelectPayment = ({ paymentMethods, handlePaymentChange }) => {
    const paymentOptions = paymentMethods.map((method, index) => {
        return <option key={index} value={index}>{method}</option>
    })

    return (
        <select onChange={handlePaymentChange} required>
            <option></option>
            {paymentOptions}
        </select>
    )
}

export default SelectPayment