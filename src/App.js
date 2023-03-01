import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


/*import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
*/

//import Test from "./pages/components/Test";

//import Slider from "./pages/components/Slider";
import Navibar from "./pages/components/Navibar";

//import Footer from "./pages/components/Footer";

import  Home from "./pages/components/Home";
import  Services from "./pages/components/Services";
import Gallery from "./pages/components/Gallery";
import Quickbook from "./pages/components/Quickbook";


import  AdminLanding from "./pages/admincomponents/AdminLanding";
import  AdminNavbar from "./pages/admincomponents/AdminNavbar";
import  AdminSideNav from "./pages/admincomponents/AdminSideNav";


import EditStaff from "./pages/adminstaff/EditStaff.component";
import ListStaff from "./pages/adminstaff/ListStaff.component";
import AddStaff from "./pages/adminstaff/AddStaff.component";
import AddCustomer from './pages/admincustomer/AddCustomer';
import EditCustomer from './pages/admincustomer/EditCustomer';
import ListCustomer from './pages/admincustomer/ListCustomer';
import LoginCustomer from './pages/admincustomer/LoginCustomer';
import BookAppointment from "./pages/appointments/BookAppointment";
import EditAppointment from "./pages/appointments/EditAppointment";
import ListAppointment from "./pages/appointments/ListAppointment";
import AddService from './pages/services/AddService';
import EditService from './pages/services/EditService';
import ListService from './pages/services/ListService';
import AddMessage from './pages/adminmessage/AddMessage';
import EditMessage from './pages/adminmessage/EditMessage';
import ListMessage from './pages/adminmessage/ListMessage';
import Register from './pages/components/Register';
import Userpage from './pages/components/Userpage';
import UserNav from './pages/components/UserNav';
import Stylists from './pages/components/Stylists';
import Contact from './pages/components/Contact';
import Attendance from './pages/components/Attendance';
import CheckIn from './pages/attendance/CheckIn';
import CheckOut from './pages/attendance/CheckOut';
import Booking from './pages/components/Booking';
import BookForm from './pages/components/BookForm';
import About from './pages/components/About';
import Test from './pages/components/Test';


import ClientHome from './pages/clientpages/ClientHome';
import ClientServices from './pages/clientpages/ClientServices';
import ClientBooking from './pages/clientpages/ClientBooking';
import ClientStylists from './pages/clientpages/ClientStylists';
import ClientSignup from './pages/clientpages/ClientSignup';
import LoginStaff from './pages/adminstaff/LoginStaff';
import LoginAdmin from './pages/admincomponents/LoginAdmin';

import StylistHome from './pages/stylistpages/StylistHome';
import StylistSignup from './pages/stylistpages/StylistSignup';
import StylistBooking from './pages/stylistpages/StylistBooking';
import ListStylists from './pages/stylistpages/ListStylists';
import AdminGallery from './pages/admincomponents/AdminGallery';
import ClientAbout from './pages/clientpages/ClientAbout';
import ClientContact from './pages/clientpages/ClientContact';
import StylistAbout from './pages/stylistpages/StylistAbout';
import StylistContact from './pages/stylistpages/StylistContact';


axios.defaults.withCredentials = true;



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/components/Services" element={<Services />} />
        <Route path="/components/Gallery" element={<Gallery />} />
        <Route path="/components/Booking" element={<Booking />} />
        <Route path="/components/About" element={<About />} />
        <Route path="/components/Contact" element={<Contact />} />
        <Route path="/components/BookForm" element={<BookForm />} />
        <Route path="/components/Userpage" element={<Userpage />} />
        <Route path="/components/Stylists" element={<Stylists />} />
        <Route path="/components/UserNav" element={<UserNav />} />
        <Route path="/components/Attendance" element={<Attendance />} />
        <Route path="/attendance/CheckOut" element={<CheckOut />} />
        <Route path="/appointments/BookAppointment" element={<BookAppointment />} />
        <Route path="/appointments/EditAppointment/:id" element={<EditAppointment />} />
        <Route path="/appointments/ListAppointment" element={<ListAppointment />} />
        <Route path="/components/Quickbook" element={<Quickbook />} />
        <Route path="/components/Test" element={<Test />} />
        <Route path="/admincomponents/AdminLanding" element={<AdminLanding />} />
        <Route path="/admincomponents/AdminGallery" element={<AdminGallery />} />
        <Route path="/admincomponents/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/adminstaff/AddStaff" element={<AddStaff />} />
        <Route path="/adminstaff/EditStaff/:id" element={<EditStaff />} />
        <Route path="/adminstaff/ListStaff" element={<ListStaff />} />
        <Route path="/adminstaff/LoginStaff" element={<LoginStaff />} />
        <Route path="/admincustomer/AddCustomer" element={<AddCustomer />} />
        <Route path="/admincustomer/EditCustomer/:id" element={<EditCustomer />} />
        <Route path="/admincustomer/ListCustomer" element={<ListCustomer />} />
        <Route path="/admincustomer/LoginCustomer" element={<LoginCustomer />} />
        <Route path="/services/AddService" element={<AddService />} />
        <Route path="/services/EditService/:id" element={<EditService />} />
        <Route path="/services/ListService" element={<ListService />} />
        <Route path="/adminmessage/AddMessage" element={<AddMessage />} />
        <Route path="/adminmessage/EditMessage/:id" element={<EditMessage />} />
        <Route path="/adminmessage/ListMessage" element={<ListMessage />} />

        <Route path="/clientpages/ClientHome" element={<ClientHome />} />
        <Route path="/clientpages/ClientServices" element={<ClientServices />} />
        <Route path="/clientpages/ClientBooking" element={<ClientBooking />} />
        <Route path="/clientpages/ClientStylists" element={<ClientStylists />} />
        <Route path="/clientpages/ClientSignup" element={<ClientSignup />} />
        <Route path="/clientpages/ClientAbout" element={<ClientAbout />} />
        <Route path="/clientpages/ClientContact" element={<ClientContact />} />


        <Route path="/stylistpages/StylistHome" element={<StylistHome />} />
        <Route path="/stylistpages/StylistSignup" element={<StylistSignup />} />
        <Route path="/stylistpages/StylistBooking" element={<StylistBooking />} />
        <Route path="/stylistpages/ListStylists" element={<ListStylists />} />
        <Route path="/stylistpages/StylistAbout" element={<StylistAbout/>} />
        <Route path="/stylistpages/StylistContact" element={<StylistContact/>} />

        
      </Routes>
     
    </Router>
  );
}

export default App;


/* <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/add-customer" element={<AddCustomer />} />
      </Routes>
      */