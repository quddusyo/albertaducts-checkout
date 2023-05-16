import React, { useContext } from 'react';
import { Card, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ServiceCard = (props) => { // props.service is the service we are selling
  const service = props.service; // prop drilling services to ServiceCard component 
  const cart = useContext(CartContext);
  const serviceQuantity = cart.getServiceQuantity(service.id);

  const addOne = () => {
    cart.addOneToCart(service.id);
    toast('Added item to cart');
  }

  return (
    <Card>
      <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>${service.price} + GST</Card.Text>
          <Row>
            <Image src={service.img_url} rounded></Image>
          </Row>
          {serviceQuantity > 0 ? 
          <>
            <Form as={Row}>
              <Form.Label column='true' sm='6' className='mt-2'>In Cart: {serviceQuantity}</Form.Label>
              <Col sm='6' className='mt-2'>
                <Button sm='6' onClick={addOne} className='mx-2'>+</Button>
                <Button sm='6' onClick={() => cart.removeOneFromCart(service.id)} className='mx-2'>-</Button>
                  {serviceQuantity > 0 &&
                    <>
                      <Button onClick={() => cart.deleteFromCart(service.id)} className='my-2' variant='danger'>Remove</Button>
                    </>
                  }
              </Col>
            </Form>
          </>
          :
          <>
            <Button variant='primary' className='mt-2' onClick={addOne}>Add To Cart</Button>
          </>
          }
        </Card.Body>
    </Card>
  )
}

export default ServiceCard;