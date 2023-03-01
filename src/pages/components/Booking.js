import React from 'react'

import Navibar from './Navibar'
import Footer from './Footer'
import './Booking.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import BookForm from './BookForm'

function Booking() {
  return (
    <div>
        <Navibar />

        <div className="booking_banner_section service_banner img img-responsive">
            <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="booking_banner_content">
                                    <h4>Book A Session Now</h4>
                                    <p className='txt'>Welcome to beauty lab, where you can relax and enjoy life.</p>
                                </div>
                                <ol className="breadcrumb">
                                    <li><Link className='alink' to={"/"} > Home </Link></li>
                                    <li className="active">Booking</li>
                                </ol>
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

        <BookForm />

        <Footer />
    </div>
  )
}

export default Booking