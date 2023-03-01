import React from 'react'
import './Quickbook.css'

import { Button } from 'react-bootstrap'

function Quickbook() {
  return (
    <div>
        <div className="quick_booking session_booking_wrapper">
            <p className="click_btn text-capitalize"><Button type='submit'>Book a Reservation</Button> </p>
            <p className="title">Book A Session Now and take your place for best service</p>

            <form onSubmit={ Quickbook } className="clearfix">
                <input type="text" className="form-control" id="client_name" placeholder="Your Name" required />
                <input type="text" className="form-control" id="phone_number" placeholder="Phone Number" />
                <input type="email" className="form-control" id="client_Email" placeholder="Email Address" required />

                <div className="input-group date form-control" id="datetimepicker2">
                    <input type="text" readonly="readonly" className="form-control" placeholder="Date and Time" required />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>

                <select className="form-control wide mr_30" name="beauty-service" required>
                    <option selected>Service</option>
                    <option value="facial">Facials</option>
                    <option value="nailCare">Nail Care</option>
                    <option value="eyeCare">Eye Care</option>
                    <option value="waxing">Waxing</option>
                    <option value="makeup">Make-Up</option>
                </select>

                <select className="form-control wide" name="beauty-expart" required>
                    <option selected>Beauty Expart</option>
                    <option value="sokhina">Hero Alom</option>
                    <option value="jorina">Apo Biswas</option>
                    <option value="jerin">Jerin Shikdar</option>
                    <option value="jerin">Subrina Tasnim</option>
                </select>
                <Button type="submit">Make a Reservation</Button>
            </form>
        </div>
    </div>
  )
}

export default Quickbook