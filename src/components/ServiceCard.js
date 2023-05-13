import React, { useContext } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';


const ServiceCard = (props) => { // props.service is the service we are selling
  const service = props.service; // prop drilling services to ProductCard component 
  const cart = useContext(CartContext);
  const serviceQuantity = cart.getServiceQuantity(service.id);
  const totalCost = cart.getTotalCost();

  return (
    <Card>
        <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>${service.price} + GST</Card.Text>
            {serviceQuantity > 0 ? 
            <>
              <Form as={Row}>
                <Form.Label column='true' sm='6'>In Cart: {serviceQuantity}</Form.Label>
                <Col sm='6'>
                  <Button sm='6' onClick={() => cart.addOneToCart(service.id)} className='mx-2'>+</Button>
                  <Button sm='6' onClick={() => cart.removeOneFromCart(service.id)} className='mx-2'>-</Button>
                    {serviceQuantity > 0 &&
                      <>
                        <Button sm='6' onClick={() => cart.deleteFromCart(service.id)} className='mx-2 my-2 btn btn-danger'>Remove</Button>
                      </>
                    }
                </Col>
              </Form>
            </>
            :
            <>
              <Button variant='primary' onClick={()=>cart.addOneToCart(service.id)}>Add To Cart</Button>
            </>
            }
        </Card.Body>
    </Card>
  )
}

export default ServiceCard;