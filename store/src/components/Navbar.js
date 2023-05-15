import React, { useContext, useState } from 'react';
import { Button, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import logo from '../logo.png';

const NavbarComponent = () => {
    const cart = useContext(CartContext);

    const [ show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((res) => {
            return res.json();
        }).then((res) => {
            if(res.url) {
                window.location.assign(res.url); // Forwarding user to Stripe
            }
        });
    }
    const serviceCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
        <Navbar expands="sm">
            <Navbar.Brand href="/"><img src={logo} align='center' className='p-3' alt='logo' /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart ({serviceCount} Items)</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closebutton="true">
                <Modal.Title>Online Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body closebutton="true">
                { serviceCount > 0 ?
                    <>
                        <p>Items in your cart:</p>
                            {cart.items.map((currentService, idx) => (
                                <CartProduct key={idx} id={currentService.id} quantity={currentService.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Checkout!
                            </Button>
                    </>
                :
                    <h1>There are no items in your cart.</h1>
                }
            </Modal.Body>
        </Modal>
    </>
  )
}

export default NavbarComponent;