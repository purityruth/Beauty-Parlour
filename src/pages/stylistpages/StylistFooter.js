import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faGlobe, faHeart, faHome, faPhone, faRss } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Row, Col, Container } from 'react-bootstrap'

function StylistFooter() {
  return (
    <div style={{ backgroundColor: '#212121', color: '#757575', paddingTop: '30px'}}>
        <Container>
            <Row>
                <Col sm>
                <div class="single_widget contact_widget">
                    <Link className='nav-link' to={"/"} > <span> <FontAwesomeIcon icon={faHeart}  style={{ color: '#7b1fa2', padding: '1px'}}/></span> <span style={{ color: '#d81b60', fontFamily: 'cursive'}}>Beauty</span><span style={{ color: '#7b1fa2', fontFamily: 'inherit'}}>Parlour</span> </Link>
                    <p>The beauty parlour is a luxury beauty &amp; spa solution.</p>
                    <p> The beauty spa strives to deliver top class.</p>
                    <address>
                            <p class="address"><FontAwesomeIcon icon={faHome}  style={{ color: '#fff' }}/><span style={{ color: '#fff' }}> Address:</span> Moi Avenue, Nairobi, Kenya.</p>
                            <p class="phone"><FontAwesomeIcon icon={faPhone} style={{ color: '#fff' }}/><span style={{ color: '#fff' }}>  Phone:</span> +254746862634</p>
                            <p class="email"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#fff' }}/><span style={{ color: '#fff' }}>  Email:</span> <a href="#" style={{ color: '#d81b60' }}>info@beautyparlour.com</a></p>
                            <p class="web"><FontAwesomeIcon icon={faGlobe} style={{ color: '#fff' }}/><span style={{ color: '#fff' }}>  Web:</span> <a href="#" style={{ color: '#d81b60' }}>www.beautyparlour.com</a></p>
                    </address>
                </div>
                </Col>
                <Col sm>
                <div class="single_widget contact_widget" style={{paddingTop: '3px'}}>
                    <h5 style={{color:'#fff'}}>Our Pages</h5>
                    <p><Link to={"/"} style={{color:'#666', textDecoration: 'none' }}> Home </Link></p>
                    <p><Link to={"/components/Services"} style={{color:'#666', textDecoration: 'none' }}> Services </Link></p>
                    <p><Link to={"/components/Gallery"} style={{color:'#666', textDecoration: 'none' }}> Gallery </Link></p>
                    <p><Link to={"/components/About"} style={{color:'#666', textDecoration: 'none' }}> About Us </Link></p>
                    <p><Link to={"/admincustomer/LoginCustomer"} style={{color:'#666', textDecoration: 'none' }}>Login </Link></p>
                    <p><Link to={"/components/Services"} style={{color:'#666', textDecoration: 'none' }}> Sign Up </Link></p>
                    
                </div>
                </Col>
                
                <Col sm>
                    <div>
                        <h5 style={{ color: '#fff' }}>NewsLetter</h5>
                        <div style={{margin: '10px', paddingTop: '50px'}}>
                        <h6>Follow Us</h6>
                        <span> <FontAwesomeIcon icon={faFacebook}  style={{ color: '#fff', padding: '5px'}}/>  </span>
                        <span><FontAwesomeIcon icon={faTwitter}  style={{ color: '#fff' , padding: '5px'}}/>  </span>
                        <span><FontAwesomeIcon icon={faInstagram}  style={{ color: '#fff', padding: '5px'}}/>  </span>
                        <span><FontAwesomeIcon icon={faRss}  style={{ color: '#fff', padding: '5px'}}/> </span>
                        </div>
                           
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
        <Row style={{ paddingBottom: '15px'}}>
            <Col md={{ span: 8, offset: 4 }}> © 2022 All rights reserved. <FontAwesomeIcon icon={faHeart}  style={{ color: '#d81b60', paddingBottom: '0px'}}/> </Col>
        </Row>
        </Container>
    </div>
  )
}

export default StylistFooter