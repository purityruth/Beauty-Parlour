import React, {useEffect, useState} from 'react'
import axios from 'axios'

import ClientNavibar from './ClientNavibar'
import ClientFooter from './ClientFooter'
import '../components/Booking.css'
import './ClientBooking.css'
import { Link } from 'react-router-dom'
import { Col, Row, Button, Alert } from 'react-bootstrap'
import BookForm from '../components/BookForm'

function ClientBooking() {

    const [appointment, setAppointment] = useState([])

    useEffect(()=>{
        fetchAppointment() 
    },[])

    const fetchAppointment = async () => {
        await axios.get(`http://localhost:8000/api/appointments`).then(({data})=>{
            
            setAppointment(data)
        })
    }


    const remove = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('phoneno');
        localStorage.removeItem('email');
        localStorage.removeItem('date');
        localStorage.removeItem('service');
        localStorage.removeItem('expert');

        <Alert variant="success">
         <Alert.Heading>Cancelling Appointment</Alert.Heading>
         <p>
            Appointment cancelled successfully!
         </p>
         <hr />
         </Alert>
    };


  return (
    <div>
        <ClientNavibar />

        <div className="list_booking_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="section_title text-center">
                                            </div>

                    </div>
                </div>
            </div>
        </div>

        

        <BookForm />



         {/*
        ===========================================
                Book Session
        ===========================================

        */}
        <section className="cta_section">
        <div className="cta_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="cta_content">
                            <p style={{width: '400px'}}>Your booked appointments are already in our records. Thank you for booking with us!! </p>
                            <Button className="book_button" onClick={remove} type="submit" style={{width: '180px'}}>
                                Cancel Appointment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


       
        <section className="history_section ptb_100 ptb_sm_70 ptb_xs_60 ptb_xxs_50">
            <div className="container">
                <Row>
                    <Col>
                        <div className="history_details">
                            <h4>Why Choose Beauty Lab</h4>
                            <span className="roboto">Book Treatments, Services Instantly</span>
                            <p className='msg'>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it. The beauty lab is a luxury beauty & spa solution. The beauty spa strives to deliver top className treatments in a relaxing environment.<br/><br/>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it.</p>
                            <div className="singature_area">
                                <img src="../images/author_sign.png" alt="author_sign" />
                                <span className="title dp_block">CEO of Beauty Lab</span>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className="col-md-5 col-md-offset-1">
                            <div className="history_img ">
                                <img src="../images/history_img.jpg" alt="history_img" className="img img-responsive" />
                            </div>
                        </div>
                    </Col>
                </Row>         
            </div>
        </section>

        <ClientFooter />
    </div>
  )
}

export default ClientBooking