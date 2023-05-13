import React, { useState } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';

const NavbarComponent = () => {
    const [ show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Navbar expands="sm">
            <Navbar.Brand href="/">AlbertaDucts Checkout</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Online Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body closeButton>
                <h1>This is the mobal body!</h1>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default NavbarComponent;