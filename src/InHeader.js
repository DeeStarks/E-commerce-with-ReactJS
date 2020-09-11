import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import {Nav, Navbar, Form, Button} from 'react-bootstrap';

class InHeader extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" className="fixed-top p-0 NavBar">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                    <div className="container">
                    <Navbar.Brand href="#" id="logo"><Link to="/" className="font-weight-bold text-light"><img src="/deestore.png" alt="deestore_logo" className="logo" />DeeSTORE</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link to="/" className="text-info link mx-3"><i className="fa fa-product-hunt mx-2"></i>Products</Link>
                        <Link to="/cart" className="text-info link mx-3"><i className="fa fa-shopping-cart mx-2"></i>My Cart</Link>
                        </Nav>
                        <Form inline className="border-left px-3">
                            <div id="online" className="mr-2"></div>
                            <div className="text-light">Online</div>
                            <Button className="mx-3" onClick={this.props.logout} variant="outline-danger">Log Out</Button>
                        </Form>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default InHeader;