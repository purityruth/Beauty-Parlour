import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClock, faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';
import './Navibar.css'

function Navibar() {
  return (
    <div className='header'>
        <div className='Row' style={{ backgroundColor : '#212121', color: '#f3f3f3'}}>
            <Row bg='dark'>
                <Col sm={8}>
                    <FontAwesomeIcon icon={faClock} style={{ color: '#d81b60'}}/> 
                    <span className="color_dd"> Opening Hour: Mon - Sat : 09:00 - 18:00</span>
                </Col>
                <Col sm={4}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#d81b60'}} />
                <span className="color_dd"><a>  info@beautyparlour.com</a></span>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#d81b60'}} />
                <span className="color_dd"><a>  0746862634</a></span>
                </Col>
            </Row>
        </div>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor : '#dceff0'}}>
            <Container>
                <Navbar.Brand>
                <Link className='nav-link' to={"/"} > 
                    <span> <FontAwesomeIcon icon={faHeart}  style={{ color: '#7b1fa2', padding: '1px'}}/></span>
                    <span style={{ color: '#d81b60', fontFamily: 'cursive'}}>Beauty</span>
                    <span style={{ color: '#7b1fa2', fontFamily: 'inherit'}}>Parlour</span> 
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{ color: '#ccc'}}>
                    <FontAwesomeIcon icon={faBars}  style={{ color: '#d81b60'}}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> 
                    <Link className='nav_link' to={"/"} > Home </Link>
                    <Link className='nav_link' to={"/components/Services"}> Services </Link>
                    <Link className='nav_link' to={"/components/Gallery"}> Gallery </Link>
                    <Link className='nav_link' to={"/components/Booking"}> Booking </Link>
                    <Link className='nav_link' to={"/components/About"}> About </Link>
                    <Link className='nav_link' to={"/components/Contact"}> Contact Us </Link>
                    {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                    <Nav className='me-auto-left'>
                    <Link className='nav_link' to={"/admincustomer/LoginCustomer"}>Login </Link>
                    <Link className='nav_link' to={"/clientpages/ClientSignup"}> SignUp </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navibar