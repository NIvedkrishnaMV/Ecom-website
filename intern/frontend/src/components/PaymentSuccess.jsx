import { Button, Typography } from '@mui/material';
import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className='h-screen w-100%' >
        <div className='w-500px h-500px'>
      <Typography>Payment Successful!</Typography>
      <p>Your payment has been processed successfully.</p>
      <Button variant='contained' onClick={() => window.location.href = '/product'}>Continue Shopping</Button>
        </div>
    </div>
  );
}

export default PaymentSuccess;
