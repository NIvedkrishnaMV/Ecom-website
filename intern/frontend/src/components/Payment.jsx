import React, { useState } from 'react'
import './payment.css'
import { Button, TextField } from '@mui/material'

const Payment = () => {
  return (
    <div>
      <div className="payment-form">
      <h2>Payment Details</h2>
      <form>
        <div >
          <TextField type="text" label='Card Number' margin='normal' InputProps={{ style: { borderRadius: 50 } }} id="cardNumber" placeholder="example-1234 5678 9012 3456" />
        </div>
        <div >
          <TextField type="text" label='Name On Card' margin='normal' InputProps={{ style: { borderRadius: 50 } }} id="cardName" placeholder="example-John Doe" />
        </div>
        <div >
          <TextField type="text" label='Expiry Date' margin='normal' InputProps={{ style: { borderRadius: 50 } }} id="expiryDate" placeholder="example-MM/YY" />
        </div>
        <div >
          <TextField type="text" label='CVV' id="cvv" margin='normal' InputProps={{ style: { borderRadius: 50 } }} placeholder="example-123" />
        </div>
        <Button variant='contained' margin='normal' href='/pay' type="submit">Submit Payment</Button>
      </form>
    </div>
    </div>
  )


}

export default Payment
