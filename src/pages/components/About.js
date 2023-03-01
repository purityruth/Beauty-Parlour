import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './About.css'
import Navibar from './Navibar'
import Footer from './Footer'

function About() {
  return (
    <div>

        <Navibar />

        <div className="about_banner_section service_banner img img-responsive">
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="about_banner_content">
                    <h4>Know about us</h4>
                    <p className='txt'>Welcome to beauty lab, where you can relax and enjoy life.</p>
                </div>
                <ol className="breadcrumb">
                    <li><Link className='alink' to={"/"} > Home </Link></li>
                    <li className="active">About</li>
                </ol>
                </div>
            </div>
            </div>
        </div>

        {/*
        
            ******************** Section 2 ************************
        
        */}

        <section className="history_section ptb_100 ptb_sm_70 ptb_xs_60 ptb_xxs_50">
            <div className="container">
                <Row>
                    <Col>
                        <div className="history_details">
                            <h4>About our Beauty Parlour</h4>
                            <span className="roboto">Book Treatments, Services Instantly</span>
                            <p className='msg'>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it. The beauty lab is a luxury beauty & spa solution. The beauty spa strives to deliver top className treatments in a relaxing environment.<br/><br/>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it.</p>
                            <p className='msg'>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it. The beauty lab is a luxury beauty & spa solution. The beauty spa strives to deliver top className treatments in a relaxing environment.<br/><br/>Beauty is the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when looking at it.</p>
                            <div className="singature_area">
                                <img src="../images/author_sign.png" alt="author_sign" />
                                <span className="title dp_block">CEO of Beauty Lab</span>

                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className="col-md-5 col-md-offset-1">
                            <div className="about_img ">
                                <img src="../images/spa_treatments.jpg" alt="about_img" className="img img-responsive" />
                            </div>
                        </div>
                    </Col>
                </Row>         
            </div>
        </section>

        {/* 
        
            ************************ Facts Section *****************************
        */}

        <section className="facts_section pos_relative">
            <div className="beautyLab_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="facts_wrapper clearfix">
                            <div className="single_fact">
                                <h1><span className="counter">2</span>k</h1>
                                <p>Body Massage</p>
                            </div>
                            <div className="single_fact">
                                <h1><span className="counter">25</span>k</h1>
                                <p>Hair Care & Style</p>
                            </div>
                            <div className="single_fact">
                                <h1><span className="counter">8</span>k</h1>
                                <p>Spa Facial</p>
                            </div>
                            <div className="single_fact">
                                <h1><span className="counter">252</span>k</h1>
                                <p>Skin Spa Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* 
        
            ************************* Our Experts ********************
        */}

        <section className="beautyLab_experts pt_90 pb_75 ptb_xs_50 ptb_xxs_50">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="section_title mb_60 text-center">
                        <h3>Our Experts</h3>
                        <p className="color_51">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore etc</p>
                    </div>
                    </div>
                </div>
                {/* Row */}

                <div className="row">
                    <div className="about_wrapper">
                </div>
                
                {/** Expert 1 **/}
                <div className="col-md-4 col-sm-6">
                    <div className="single_gallery">
                        <img src="../images/experts1.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Sumaiya Afrin</h6>
                            <span className="degignation">Founder at Beauty Lab</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/** Expert 2 **/}
                <div className="col-md-4 col-sm-6">
                <div className='mix'>
                    <div className="single_gallery">
                        <img src="../images/experts2.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Ms. Jerin Sheikh</h6>
                            <span className="degignation">Advisor at Beauty Lab</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>

                {/** Expert 3 **/}
                    <div className="col-md-4 col-sm-6">
                        <div className='mix'>
                    <div className="single_gallery">
                        <img src="../images/experts7.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Ms. Jerin Sheikh</h6>
                            <span className="degignation">Advisor at Beauty Lab</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>

                {/** Expert 4 **/}
                <div className="col-md-4 col-sm-6">
                    <div className="single_gallery">
                        <img src="../images/experts4.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Ms. Jorina Khan</h6>
                            <span className="degignation">Cosmetic Guru</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                    
                    </div>
                </div>

                {/** Expert 5 **/}
                <div className="col-md-4 col-sm-6">
                    <div className="single_gallery">
                        <img src="../images/experts6.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Kaniz Fatema</h6>
                            <span className="degignation">Hair expert</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/** Expert 6 **/}
                <div className="col-md-4 col-sm-6">
                    <div className="single_gallery">
                        <img src="../images/experts5.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Mehnaz Tabassum</h6>
                            <span className="degignation">Spa Expert</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                    
                    </div>
                </div>

                {/** Expert 7 **/}
                <div className="col-md-4 col-sm-6">
                    <div className="single_gallery">
                        <img src="../images/experts3.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <h6 className="name fw_700 color_ff">Josna shikdar</h6>
                            <span className="degignation">Body Massage Expert</span>
                            <p className="color_ff ptb_20">Most designers set their type arbitrarily, either by pulling values out of the sky or by ...</p>
                            <a href="#" title="See Full Bio" className="bio color_ff text-capitalize">Full Bio <i className="fa fa-long-arrow-right"></i></a>

                            <div className="social_contact">
                                <span><a href="#" title="E-Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon' /></a></span>
                                <span><a href="#" title="Phone" target="_blank"><FontAwesomeIcon icon={faMessage} className='icon' /></a></span>
                                <span><a href="#" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></span>
                                <span><a href="#" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a></span>
                            </div>
                        </div>
                    
                    </div>
                </div>
                </div> {/* Gallery Wrapper */}
                {/* Row */}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default About