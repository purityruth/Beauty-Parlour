import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


import './ClientServices.css'
import ClientNavibar from './ClientNavibar'

import { Row, Col, Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faHandsWash, faLeaf, faMagicWandSparkles, faMortarPestle, faRss, faSpa } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'


function ClientServices() {

  const [service, setService] = useState([])

    useEffect(()=>{
        fetchService() 
    },[])

    const fetchService = async () => {
        await axios.get(`http://localhost:8000/api/service`).then(({data})=>{
            setService(data)
        })
    }


  return (
    <div>
      <ClientNavibar />
      
      <div className="list_service_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-center">
                <h3>New Services</h3>
                <p> See the new services that are being offered in our beauty parlour everyday!!</p>
              </div>
              </div>
          </div>
        </div>
      </div>





      <div className="container list_service">
        <div className="card card-body" style={{backgroundColor: '#f5f5f5'}}>
          <div className="table-responsive">
            <table className="table table-bordered mb-0 text-center">
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  service.length > 0 && (
                    service.map((row, key)=>(
                      <tr key={key}>
                        <td style={{padding: '20px'}} >{row.servicename}</td>
                        <td style={{padding: '20px'}} >{row.description}</td>
                      </tr>
                    ))
                  )
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>



    { /* ======================================= *

              Services Offered

        * ====================================== */

    }

      <div className="service_section container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-center">
                <h3>All Day Services</h3>
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


    {
      /*
      *
      ==================================
                We Specialize in
      ==================================
      *
      */
    }
    <section className="specialize_section pt_90 pb_50">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="section_title pb_50 text-center">
                <h3>We Specialize In</h3>
                <p>We are highly specialized in offering comprehensive hair care ranging from hair color, haircut, bridal, treatments, up-dos, and foiling.</p>
                <p>They aim at offering these services using the best techniques and products making your hair look awesome.</p>
                <div className='expart_wrapper'>
                  <img src="../images/service_img.png" alt="service_img" className="img img-responsive" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>



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

export default ClientServices