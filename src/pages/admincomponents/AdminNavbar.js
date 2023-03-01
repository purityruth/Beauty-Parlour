import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './AdminNavbar.css';

function AdminNavbar() {
  const [adminSideNav, setAdminSideNav] = useState(false);

  const showAdminSideNav = () => setAdminSideNav(!adminSideNav);

  return (
    <div >
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" style={{color: '#7b1fa2', fontSize: '25px'}}/></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
          <Link className='nav-link' to={"/admincomponents/AdminLanding"} style={{ color: '#000'}} > Home </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
          <Link className='nav-link' to={"/admincomponents/AdminLanding"} style={{ color: '#000'}} > Contact </Link>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" style={{color: '#7b1fa2'}} />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#f327af">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">15 Notifications</span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
  );
}

export default AdminNavbar;




{ /* 
   <div value={{ color: '#fff' }} style={{ position: 'sticky', top: 0, width: '100%' }} >
        <div className='adminNavbar '>
          <Link to='#' className='adminMenu-bars'>
          <FontAwesomeIcon icon={faBars} onClick={showAdminSideNav} />
          </Link>
        </div>
        
      </div>
<Nav className={adminSideNav ? 'adminNav-adminMenu active' : 'adminNav-adminMenu'} >
          <ul className='adminNav-adminMenu-items' onClick={showAdminSideNav}>
            <li className='adminNavbar-toggle'>
              <Link to='#' className='adminMenu-bars'>
              <FontAwesomeIcon icon={faTimes} />
              </Link>
            </li>
            {AdminSideNav.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>

*/}











/* import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEnvelope, faHeart, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons'

import { adminNav, adminNavbar, adminNavDropdown } from 'react-bootstrap';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';

function AdminadminNavbar() {
  return (
    <div >
        <adminNavbar collapseOnSelect expand="lg" style={{ backgroundColor : '#ccc'}}>
            <Container >
                <Row>
                
                </Row>
                <adminNavbar.Brand>
                <Link className='adminNav-link' to={"/"} > 
                    <span> <FontAwesomeIcon icon={faHeart}  style={{ color: '#7b1fa2', padding: '5px'}}/></span>
                    <span style={{ color: '#d81b60', fontFamily: 'cursive'}}>Beauty</span>
                    <span style={{ color: '#7b1fa2', fontFamily: 'inherit'}}>Parlour</span> 
                </Link>
                </adminNavbar.Brand>
                <adminNavbar.Toggle aria-controls="responsive-adminNavbar-adminNav" style={{ color: '#d81b60'}}/>
                <adminNavbar.Collapse id="responsive-adminNavbar-adminNav">
                    <adminNav className="me-auto"> 
                    <button className='btn'> <FontAwesomeIcon icon={faBars}  style={{ color: '#7b1fa2', paddingLeft: '55px', paddingTop: '10px'}}/> </button>
                    <FontAwesomeIcon icon={faSearch}  style={{ color: '#7b1fa2', paddingLeft: '55px', paddingRight: '15px', paddingTop: '10px'}}/>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2 " aria-label="Search" />
                    </Form>
                    </adminNav>
                    <adminNav>
                    <FontAwesomeIcon icon={faEnvelope}  style={{ color: '#7b1fa2', paddingRight: '75px', paddingLeft: '50px', paddingTop: '10px'}}/>
                    <FontAwesomeIcon icon={faBell}  style={{ color: '#7b1fa2', paddingRight: '75px', paddingLeft: '50px', paddingTop: '10px'}}/>
                    <FontAwesomeIcon icon={faPowerOff}  style={{ color: '#7b1fa2', paddingRight: '75px', paddingLeft: '50px', paddingTop: '10px'}}/>
                    </adminNav>
                </adminNavbar.Collapse>
            </Container>
        </adminNavbar>
    </div>
  );
}

export default AdminadminNavbar
*/