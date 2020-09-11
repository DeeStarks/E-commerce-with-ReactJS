import React, { Component } from 'react';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap';

class OutHeader extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" className="fixed-top p-0 NavBar">
                    <div className="container">
                    <Navbar.Brand href="#" className="font-weight-bold text-light" id="logo"><img src="/deestore.png" alt="deestore_logo" className="logo" />DeeSTORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link onClick={this.props.login} className="text-info mx-2">Log In</Nav.Link>
                        <Nav.Link className="text-info mx-2" onClick={this.props.signup}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default OutHeader