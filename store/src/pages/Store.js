import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { serviceArray } from '../serviceStore';
import ServiceCard from '../components/ServiceCard';

const Store = () => {
  return (
    <>
        <h1 align='center' className='p-3'>Welcome to our online checkout!</h1>
        <h2 align='center' className='p-3'>NOTE: Please make sure the service has been completed from our end before payment!</h2>
        <Row xs={1} md={3} className='g-4'>
            {serviceArray.map((service, idx) => (
                <Col align='center' key={idx}>
                    <ServiceCard service={service}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Store;