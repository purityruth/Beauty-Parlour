import React from 'react'
import AdminNavbar from './AdminNavbar'
import './AdminNavbar.css';
// import AdminSideNav from './AdminSideNav'

import AddCustomer from '../admincustomer/AddCustomer'
import ListCustomer from '../admincustomer/ListCustomer'
import ListStaff from '../adminstaff/ListStaff.component'
import AddStaff from '../adminstaff/AddStaff.component'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHome, faList, faPenToSquare, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { adminNav, adminNavbar, adminNavDropdown } from 'react-bootstrap';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import AdminSideNav from './AdminSideNav';
import AdminDashboard from './AdminDashboard';

function adminLanding() {
  return (
    <div>
    
      <AdminNavbar />

      <AdminSideNav />

      <AdminDashboard />

      { /*<Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={2} className='adminTab' style={{ position: 'fixed', height: '100vh', background : '#222', Color : '#f3f3f3'}}>
            <Nav variant="pills" className="flex-column" style={{ margin : '30px'}}>
              <Nav.Item>
                <Nav.Link eventKey="first" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px'}}>
                <FontAwesomeIcon icon={faHome} style={{ color: '#7b1fa2', paddingRight : '5px'}}/>
                DashBoard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px'}} >
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: '#7b1fa2', paddingRight : '5px'}} />
                Add Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faList} style={{ color: '#7b1fa2', paddingRight : '5px'}} />
                List Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faUser} style={{ color: '#7b1fa2', paddingRight : '5px'}} />
                Add Staff
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faUserFriends} style={{ color: '#7b1fa2', paddingRight : '5px'}} />
                List Staff
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faList} style={{ color: '#7b1fa2', paddingRight: '5px'}} />
                Add Customer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faUserFriends} style={{ color: '#7b1fa2', paddingRight: '5px'}} />
                List Customer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="eighth" style={{ cursor: 'pointer', marginTop : '20px', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faCalendar} style={{ color: '#7b1fa2', paddingRight: '5px'}} />
                Appointment List
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AddCustomer />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ListStaff />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <AddCustomer />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <AddStaff />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <ListStaff />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <AddCustomer />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <ListCustomer />
              </Tab.Pane>
              <Tab.Pane eventKey="eighth">
                <ListStaff />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
  </Tab.Container>*/}
        
    </div>
  )
}

export default adminLanding