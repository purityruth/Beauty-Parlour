import React, {useEffect, useState} from 'react'
import axios from 'axios'

import StylistNavibar from './StylistNavibar'
import StylistFooter from './StylistFooter'
import '../components/Booking.css'
import '../clientpages/ClientBooking.css'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'

function StylistBooking() {

    const [appointment, setAppointment] = useState([])

    useEffect(()=>{
        fetchAppointment() 
    },[])

    const fetchAppointment = async () => {
        await axios.get(`http://localhost:8000/api/appointments`).then(({data})=>{
            
            setAppointment(data)
        })
    }


  return (
    <div>
        <StylistNavibar />

        <div className="list_booking_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="section_title text-center">
                        <h3>Current Appointments</h3>
                        <p>Our salon provides many beauty and hair services that include hair extension, hairdressing and styling, nail art and more!!</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='booking_list' >
            <div className="container">
                <div className="row">
                        <div className="col-md-12">
                            <div className="card card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr style={{padding: '40px'}}>
                                                <th>Expert</th>
                                                <th>Date</th>
                                                <th>Service</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointment.length > 0 && (
                                                    appointment.map((row, key)=>(
                                                        <tr key={key}>
                                                            <td style={{padding: '20px'}} >{row.expert}</td>
                                                            <td style={{padding: '20px'}} >{row.date}</td>
                                                            <td style={{padding: '20px'}} >{row.service}</td>
                                                        </tr>
                                                    ))
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

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

        <StylistFooter />
    </div>
  )
}

export default StylistBooking