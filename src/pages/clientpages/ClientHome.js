import React from 'react'


import ClientNavibar from './ClientNavibar'
import Slider from '../components/Slider'
import Footer from './ClientFooter'
import BookForm from '../components/BookForm'
import '../components/Home.css'

import { Row, Col, Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faCalendarAlt, faClock, faComputerMouse, faHandsWash, faLeaf, faMagicWandSparkles, faMortarPestle, faRss, faSchool, faSpa, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function ClientHome() {
  return (
    <div>
        <ClientNavibar />
        <Slider />


        {/** ============================
        
                Welcome Section
        
        * ============================== **/}

        <section className="welcom_section pos_relative pt_90 pb_70">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section_title text-center">
                  <h3>Welcome To Beauty Lab</h3>
                  <p>The beauty lab is a luxury beauty & spa solution. The beauty spa strives to deliver top className treatments in a relaxing environment.</p>
                </div>
              </div>
            </div>

            <Row>
              <div className="col-md-7">
                <div className="welcome_feature_wrapper clearfix">
                  <Col md-3>
                    <div className="single_feature pull-left ptb_35">
                    <FontAwesomeIcon icon={faUserDoctor } className="i" />
                      <div className="feature_content pl_40 pr_40">
                        <h6>Expert Doctors</h6>
                        <div className="divider"></div>
                        <p className="pt_15">As you might have guessed, most designers choose this unit arbitrarily. </p>
                      </div>
                    </div>

                    <div className="single_feature pull-left ptb_35">
                    <FontAwesomeIcon icon={faComputerMouse } className="i" />
                      <div className="feature_content pl_40 pr_40">
                        <h6>Latest Technology</h6>
                        <div className="divider"></div>
                        <p className="pt_15">As you might have guessed, most designers choose this unit arbitrarily. </p>
                      </div>
                    </div>
                  </Col>

                  <Col md-3>
                    <div className="single_feature pull-left ptb_35">
                      <FontAwesomeIcon icon={faSchool } className="i" />
                      <div className="feature_content pl_40 pr_40">
                        <h6>Certified Institute</h6>
                        <div className="divider"></div>
                        <p className="pt_15">As you might have guessed, most designers choose this unit arbitrarily. </p>
                      </div>
                    </div>

                    <div className="single_feature">
                      <FontAwesomeIcon icon={faCalendarAlt } className="i" />
                      <div className="feature_content pl_40 pr_40">
                        <h6>Online Appointment</h6>
                        <div className="divider"></div>
                        <p className="pt_15">As you might have guessed, most designers choose this unit arbitrarily. </p>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>

              <div className="col-md-4">
                <div className="welcome_carousel_wrapper pos_relative">
                  <div id="carousel_img">
                    <img src="../images/welcome_carousel2.jpg" className="img img-responsive" alt="welcome_carousel_img" />
                  </div>

                  <div id="carousel_text">
                    <p>
                      Instead of relying on arbitrary selection, wouldn’t it be nice if there were a way to determine the perfect typography.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </section>


        { /* ======================================= *

              Services Offered

          * ====================================== */

          }

          <div className="service_section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section_title text-center">
                    <h3>Our Services</h3>
                    <p>Our salon provides many beauty and hair services that include hair extension, hairdressing and styling, nail art and more!!</p>
                  </div>
                  </div>
              </div>
                </div>

                <div className="row">
                  <div className="service_wrapper">
                </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="single_service">
                        <div className="img"><img src="../images/service_img/service_img1.jpg" alt="service_img" className="img img-responsive" /></div>
                        <div className="img_over_content text-center">
                          <span><FontAwesomeIcon className='i' icon={faSpa} /></span>
                          <div className="divider"></div>
                          <a href="#" className="fw_500 color_33 mtb_15">Beauty Treatment</a>
                          <p>The power of golden ratio typography cannot be understated. </p>
                        </div>
                      </div>
                    </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="single_service">
                                <div className="img"><img src="../images/service_img/service_img2.jpg" alt="service_img" className="img img-responsive" /></div>
                                <div className="img_over_content text-center">
                                <FontAwesomeIcon className='i' icon={faLeaf} />
                                    <div className="divider"></div>
                                    <a href="#" className="fw_500 color_33 mtb_15">Spa Process</a>
                                    <p>The power of golden ratio typography cannot be understated. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="single_service">
                                <div className="img"><img src="../images/service_img/service_img3.jpg" alt="service_img" className="img img-responsive" /></div>
                                <div className="img_over_content text-center">
                                <FontAwesomeIcon className='i' icon={faMortarPestle} />
                                    <div className="divider"></div>
                                    <a href="#" className="fw_500 color_33 mtb_15">Body Massage</a>
                                    <p>The power of golden ratio typography cannot be understated. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="single_service">
                                <div className="img"><img src="../images/service_img/service_img4.jpg" alt="service_img" className="img img-responsive" /></div>
                                <div className="img_over_content text-center">
                                <FontAwesomeIcon className='i' icon={faBurn} />
                                    <div className="divider"></div>
                                    <a href="#" className="fw_500 color_33 mtb_15">Hair Treatment</a>
                                    <p>The power of golden ratio typography cannot be understated. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="single_service">
                                <div className="img"><img src="../images/service_img/service_img5.jpg" alt="service_img" className="img img-responsive" /></div>
                                <div className="img_over_content text-center">
                                <FontAwesomeIcon className='i' icon={faHandsWash} />
                                    <div className="divider"></div>
                                    <a href="#" className="fw_500 color_33 mtb_15">Manicure & Pedicure</a>
                                    <p>The power of golden ratio typography cannot be understated. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="single_service">
                                <div className="img"><img src="../images/service_img/service_img6.jpg" alt="service_img" className="img img-responsive" /></div>
                                <div className="img_over_content text-center">
                                  <FontAwesomeIcon className='i' icon={faMagicWandSparkles} />
                                    <div className="divider"></div>
                                    <a href="#" className="fw_500 color_33 mtb_15">Body Waxing</a>
                                    <p>The power of golden ratio typography cannot be understated. </p>
                                </div>
                            </div>
                        </div>
            </div>
          </div>


          {
            /*
            *
            ==================================
                    Support Section
            ==================================
            *
            */
          }
          <section className="quick_support_section">
            <div className="cta_overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className='support_col'>
                    <h6 className="color_72 pb_5 text-capitalize">Our Contacts</h6>
                    <p>(+254 746 862 634)</p>
                    <p>(+254 723 557 900)</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className='support_col'>
                    <h6 className="color_72 pb_5 text-capitalize">We Are Open</h6>
                    <p>Mon - Fri : 09:00 - 18:00</p>
                    <p>Sat - Sun : 11:00 - 16:00</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className='support_col'>
                    <h6 className="color_72 pb_10 text-capitalize">Follow Us</h6>
                    <p> </p>
                    <span> </span>
                    <span> <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebook}  style={{ color: '#d81b60', padding: '5px', fontSize: '30px'}}/> </a> </span>
                    <span> <a href="www.twitter.com"><FontAwesomeIcon icon={faTwitter}  style={{ color: '#d81b60' , padding: '5px', fontSize: '30px'}}/> </a> </span>
                    <span> <a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram}  style={{ color: '#d81b60', padding: '5px', fontSize: '30px'}}/> </a> </span>
                    <span> <a href="www.rss.com"><FontAwesomeIcon icon={faRss}  style={{ color: '#d81b60', padding: '5px', fontSize: '30px'}}/> </a> </span>
                    
                  </div>
                </div>
              </div>
            </div>
        </section>


        <BookForm />


        {
          /*
          *
          =====================================
                      Testimonials
          =====================================
          *
          */
        }
        <section className="testimonial_section ptb_90">
          <div className="testimonial_overlay">
            <div className="container">
              <div className="row">
                <div className="section_title">
                      <h3 className="color_ff fw_500 pb_10">Testimonials</h3>
                  </div>
                  <Carousel variant="light" >
                    <Carousel.Item>
                      {/*Testimony 1 */}
                      <div className="single_testimonial text-center">
                          <a href="#"><img src="../images/author3.jpg" alt="author" /></a>
                          <p className="testimoinal_txt color_ff pt_25">I just wanted to thank you for providing a great celebration party for me. Your staff did an excellent job and the Makeup was superb. Everyone was impressed.Thanks again!</p>
                          <div className="author color_ff"><a href="#">Thomas Jefferson</a><span>CEO of TF</span></div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      {/*Testimony 2 */}
                      <div className="single_testimonial text-center">
                          <a href="#"><img src="../images/author1.jpg" alt="author" /></a>
                          <p className="testimoinal_txt color_ff pt_25">I just wanted to thank you for providing a great celebration party for me. Your staff did an excellent job and the Makeup was superb. Everyone was impressed.Thanks again!</p>
                          <div className="author color_ff"><a href="#">Thomas Jefferson</a><span>CEO of TF</span></div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      {/*Testimony 3 */}
                      <div className="single_testimonial text-center">
                        <a href="#"><img src="../images/author2.jpg" alt="author" /></a>
                        <p className="testimoinal_txt color_ff pt_25">I just wanted to thank you for providing a great celebration party for me. Your staff did an excellent job and the Makeup was superb. Everyone was impressed.Thanks again!</p>
                        <div className="author color_ff"><a href="#">Thomas Jefferson</a><span>CEO of TF</span></div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
              </div>
            </div>
          </div>
        </section>


        <Footer />
    </div>
  )
}

export default ClientHome