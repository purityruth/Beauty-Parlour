import React from 'react'

import { Link } from 'react-router-dom'


function AdminSideNav() {
  return (
    <div>
      <aside className="main-sidebar sidebar-primary elevation-4" style={{backgroundColor: '#001', color: '#d81b60'}}>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image pt-1">
              <img src="../images/service_img/service_img1.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link className='nav-link pt-0' to={"/admincomponents/AdminLanding"} style={{color: '#d81b60'}}>
              Parlour Admin
              </Link>
            </div>
          </div>
          <nav className="mt-2" style={{lineHeight: '50px'}}>
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <Link className='nav-link' to={"/admincomponents/AdminLanding"}>
                  <i className="nav-icon fas fa-tachometer-alt" style={{color: '#7b1fa2'}}/>
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" style={{color: '#7b1fa2'}} />
                  <p>
                    Services
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className='nav-link' to={"/services/ListService"}>
                      <i className="nav-icon fas fa-users" style={{color: '#d81b60'}} />
                      <p>List of Services</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/services/AddService"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Add a Service</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/services/EditService"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Edit Services</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" style={{color: '#7b1fa2'}} />
                  <p>
                    Staff
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className='nav-link' to={"/adminstaff/ListStaff"}>
                      <i className="nav-icon fas fa-users" style={{color: '#d81b60'}} />
                      <p>List of Staff Members</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/adminstaff/AddStaff"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Add a Staff Member</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/adminstaff/EditStaff"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Edit Staff</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" style={{color: '#7b1fa2'}} />
                  <p>
                    Customers
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className='nav-link' to={"/admincustomer/ListCustomer"}>
                      <i className="nav-icon fas fa-users" style={{color: '#d81b60'}} />
                      <p>List of Customers</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/admincustomer/AddCustomer"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Add a Customer</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/admincustomer/EditCustomer"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Edit Customers</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" style={{color: '#7b1fa2'}} />
                  <p>
                    Appointments
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className='nav-link' to={"/appointments/ListAppointment"}>
                      <i className="nav-icon fas fa-users" style={{color: '#d81b60'}} />
                      <p>List of Appointments</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/appointments/BookAppointment"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Book Appointment</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/appointments/EditAppointment"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Edit Appointment</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-envelope" style={{color: '#7b1fa2'}} />
                  <p>
                    Mailbox
                    <i className="right fas fa-angle-left" style={{color: '#7b1fa2'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link className='nav-link' to={"/adminmessage/ListMessage"}>
                      <i className="nav-icon fas fa-users" style={{color: '#d81b60'}} />
                      <p>List of Messages</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to={"/adminmessage/AddMessage"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Add Message</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link disabled' to={"/adminmessage/EditMessage"}>
                      <i className="nav-icon fas fa-edit" style={{color: '#d81b60'}} />
                      <p>Edit Message</p>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" style={{color: '#7b1fa2'}}/>
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={"/admincomponents/AdminGallery"}>
                <i className="nav-icon fas fa-image" style={{color: '#7b1fa2'}} />
                  <p>
                    Gallery
                  </p>
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default AdminSideNav















/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const AdminSideNav = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'adminNav-text'
  }
];


*/















/* import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft, faArrowRight, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'


import adminMenuItem from "./adminMenuItem";

/**
 * @author
 * @function SideadminMenu
 **/

/* added more adminMenuItems for testing
export const adminMenuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: <FontAwesomeIcon icon={faHeart} />,
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subadminMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subadminMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const AdminSideadminNav = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubadminMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubadminMenu = () => {
    document.querySelectorAll(".sub-adminMenu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of adminMenuItem
    Now no need to use expand state variable in adminMenuItem component
  *
  useEffect(() => {
    let adminMenuItems = document.querySelectorAll(".adminMenu-item");
    adminMenuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubadminMenu();
        adminMenuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-adminMenu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <p>logo</p>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-adminMenu-btn">
          {inactive ? (
            <FontAwesomeIcon icon={faArrowRight}  style={{ color: '#7b1fa2'}} className='bi bi-speedometer2' />
          ) : (
            <FontAwesomeIcon icon={faArrowLeft}  style={{ color: '#7b1fa2'}}/>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
        <FontAwesomeIcon icon={faSearch}  style={{ color: '#7b1fa2'}}/>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-adminMenu">
        <ul>
          {adminMenuItems.map((adminMenuItem, index) => (
            <adminMenuItem
              key={index}
              name={adminMenuItem.name}
              exact={adminMenuItem.exact}
              to={adminMenuItem.to}
              subadminMenus={adminMenuItem.subadminMenus || []}
              iconClassName={adminMenuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="adminMenu-item">
              <div className="adminMenu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <adminMenuItem
            name={"Content"}
            subadminMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="adminMenu-item">
              <div className="adminMenu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> *}
        </ul>
      </div>

      <div className="side-adminMenu-footer">
        <div className="avatar">
          <p>I'm User</p>
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSideadminNav;













/*import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'

function AdminSideadminNav() {
  return (
    <div className='side-adminMenu'>
        <div className='top-section'>
            <div className='logo'>
                <span> <FontAwesomeIcon icon={faHeart}  style={{ color: '#7b1fa2'}}/></span>
                <span style={{ color: '#d81b60', fontFamily: 'cursive'}}>B</span>
                <span style={{ color: '#7b1fa2', fontFamily: 'inherit'}}>P</span> 
            </div>
            <div className='toggle-adminMenu-btn'>
            <Link className='adminNav-link' to={"/"} >  <button className="btn"><FontAwesomeIcon icon={faArrowLeft}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
            </div>
        </div>

        <div className='search-controller'>
        <button className='search-btn'><FontAwesomeIcon icon={faSearch}  style={{ color: '#7b1fa2'}}/></button>
        <input type="text" placeholder="Search" />
        
        </div>
    
    </div>
  )
}

export default AdminSideadminNav



















/*import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faHome, faList, faPenToSquare, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { adminNav, adminNavbar, adminNavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';

function adminNavibar() {
  return (
    <div >
        <adminNavbar collapseOnSelect expand="lg" style={{ backgroundColor : '#ccc'}}>
            <Container >
                <adminNav.Toggle aria-controls="responsive-adminNavbar-adminNav" style={{ color: '#d81b60'}}/>
                <adminNav.Collapse id="responsive-adminNavbar-adminNav">
                    <adminNav className="me-auto"> 
                    <ul>
                        <li><Link className='adminNav-link' to={"/admincomponents/Dashboard"} > DashBoard <button className="btn"><FontAwesomeIcon icon={faHome}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/adminservices/AddService"} > Add Service <button className="btn"><FontAwesomeIcon icon={faPenToSquare}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/adminservices/ListService"} > List Service <button className="btn"><FontAwesomeIcon icon={faList}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/admincustomer/AddCustomer"} > Add Customer <button className="btn"><FontAwesomeIcon icon={faUser}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/admincustomer/ListCustomer"} > List Customer <button className="btn"><FontAwesomeIcon icon={faUserFriends}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/adminstaff/AddStaff"} > Add Beautician <button className="btn"><FontAwesomeIcon icon={faPenToSquare}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/adminstaff/ListStaff"} > List Beautician <button className="btn"><FontAwesomeIcon icon={faUserFriends}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                        <li><Link className='adminNav-link' to={"/adminbooking/ListBooking"} > Appointment List <button className="btn"><FontAwesomeIcon icon={faCalendar}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link></li>
                    </ul>
                    <Link className='adminNav-link' to={"/"} > Home </Link>
                    <Link className='adminNav-link' to={"/components/Services"}> Services </Link>
                    </adminNav>
                    <adminNav>
                    <Link className='adminNav-link' to={"/components/Services"}>Login </Link>
                    <Link className='adminNav-link' to={"/components/Services"}> Register </Link>
                    </adminNav>
                </adminNav.Collapse>
            </Container>
        </adminNavbar>
    </div>
  );
}

export default adminNavibar

/*import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHome, faList, faPenToSquare, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { adminNav, Container, Row, Col } from 'react-bootstrap';

function AdminSideadminNav() {
  return (
    <div>
    <Container className='AdminSideNav-fixed position-fixed'>
        <Row>
        <Col sm={3} >
            <adminNav defaultActiveKey="/admincomponents/Dashboard" className="flex-column">
                <Link className='adminNav-link' to={"/admincomponents/Dashboard"} > DashBoard <button className="btn"><FontAwesomeIcon icon={faHome}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/adminservices/AddService"} > Add Service <button className="btn"><FontAwesomeIcon icon={faPenToSquare}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/adminservices/ListService"} > List Service <button className="btn"><FontAwesomeIcon icon={faList}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/admincustomer/AddCustomer"} > Add Customer <button className="btn"><FontAwesomeIcon icon={faUser}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/admincustomer/ListCustomer"} > List Customer <button className="btn"><FontAwesomeIcon icon={faUserFriends}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/adminstaff/AddStaff"} > Add Beautician <button className="btn"><FontAwesomeIcon icon={faPenToSquare}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/adminstaff/ListStaff"} > List Beautician <button className="btn"><FontAwesomeIcon icon={faUserFriends}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
                <Link className='adminNav-link' to={"/adminbooking/ListBooking"} > Appointment List <button className="btn"><FontAwesomeIcon icon={faCalendar}  style={{ color: '#7b1fa2', padding: '5px'}} /></button></Link>
            </adminNav>
        </Col>

        </Row>
    </Container>
    </div>
  )
}

export default AdminSideadminNav

*/