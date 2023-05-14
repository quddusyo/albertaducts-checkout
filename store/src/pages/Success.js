import React from 'react';
import { Button } from 'react-bootstrap';

const Success = () => {
  return (
    <div align='center'>
      <h1 className='p-3'>Thank you for your purchase!</h1>
      <Button href='/' variant='warning' className='p-3'>Back To Home</Button>
    </div>
  )
}

export default Success;