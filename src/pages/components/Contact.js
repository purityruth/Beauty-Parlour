import React from 'react'

import { Link } from 'react-router-dom'
import Navibar from './Navibar'
import Footer from './Footer'
import './Contact.css'

function Contact() {
  return (
    <div>
    
    <Navibar />


    <div className="contact_banner_section service_banner img img-responsive">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="about_banner_content">
            <h4>Contact us</h4>
            <p className='txt'>Welcome to beauty lab, where you can relax and enjoy life.</p>
          </div>
          <ol className="breadcrumb">
            <li><Link className='alink' to={"/"} > Home </Link></li>
            <li className="active">Contact Us</li>
          </ol>
          </div>
        </div>
      </div>
      </div>

      <section className="contact_info_section ptb_90">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section_title text-center">
                        <h3 className="color_72 fw_500 pb_10">Our Location</h3>
                        <p className="pb_65">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore etc.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <div className="contact_number">
                        <h5 className="color_d5 pb_5 mb_30 pos_relative fw_500">Contact Info</h5>
                        <address>
                            <p className="address"><i className="fa fa-home"></i><span>Address:</span> 121 King St, Melbourne Vic 3000, Australia.</p>
                            <p className="phone"><i className="fa fa-phone"></i><span>Phone:</span> +254 757 133 215</p>
                            <p className="email"><i className="fa fa-envelope"></i><span>Email:</span> <a href="#">info@beautyparlour.com</a></p>
                            <p className="web"><i className="fa fa-globe"></i><span>web:</span> <a href="#">www.Beautyparlour.com</a></p>
                        </address>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="google_map_wrapper">
                        <div id="map" className="mapContact1"></div>
                        <div id="map2" className="mapContact2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/** ========================= Get In Touch Section ===========================**/}


    <section className="getin_section pt_70 pb_100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-6">
                    <div className="get_in">
                        <h5>Get In Touch</h5>
                        
                        <form action="http://themebuilder.website/themeforest/beautylab/HTML/vendor/validation.php" method="POST" className="clearfix">
                            <div className="form_group">
                                <input type="text" name="name" value="" placeholder="Your Name"  />
                                <span className="error"></span>
                            </div>

                            <div className="form_group">
                                <input type="email" name="email" value="" placeholder="Your Email" data-validation="email" />
                                <span className="error"></span>
                            </div>

                            <div className="form_group">
                                <input type="text" name="subject" value="" placeholder="Subject" data-validation="required" />
                                <span className="error"></span>
                            </div>

                            <div className="textarea_group">
                                <textarea name="message" rows="4" placeholder="Your Message" data-validation="required"></textarea>
                                <span className="error"></span>
                            </div>

                            <ul className="form_submit">
                                <li>
                                    <button type="submit" className="send_msg" name="submit">send message</button>
                                </li>
                                <li>
                                    <span className="success"></span>
                                    <span className="error"></span>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>



                <div className="col-md-4 col-sm-6">
                    <div className="consultant_wrapper">
                        <h5>Our Experts Consultant</h5>
                        <div className="single_consultant">
                            <img src="../images/consultant1.jpg" alt="consultant" />
                            <div className="content">
                                <a href="#" className="roboto">Nicky Cruse</a>
                                <p>Email: nicky@beautyparlour.com</p>
                                <p>Skype: beautyparlour.support</p>
                            </div>
                        </div>

                        <div className="single_consultant">
                            <img src="../images/consultant2.jpg" alt="consultant" />
                            <div className="content">
                                <a href="#" className="roboto">Micky Bruse</a>
                                <p>Email: nicky@beautyparlour.com</p>
                                <p>Skype: beautyparlour.support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </div>
  )
}

export default Contact