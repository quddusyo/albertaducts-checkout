import React from 'react';
import { Button } from 'react-bootstrap';

const Cancel = () => {
  return (
    <div align='center'>
      <h1 className='p-3'>Sorry to see you cancelled your stripe payment!</h1>
      <Button href='/' variant='warning' className='p-3'>Back To Home</Button>
    </div>
  )
}

export default Cancel;