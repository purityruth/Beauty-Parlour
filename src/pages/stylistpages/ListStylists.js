import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import StylistNavibar from './StylistNavibar';
import StylistFooter from './StylistFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


function ListStylists() {
   
    const [adminStaff, setStaff] = useState([])

    useEffect(()=>{
        fetchAdminStaff() 
    },[])

    const fetchAdminStaff = async () => {
        await axios.get(`http://localhost:8000/api/adminStaff`).then(({data})=>{
            setStaff(data)
        })
    }

  return (

    <div>


        <StylistNavibar />


        <div className='container' style={{paddingTop: '150px'}}>

            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0 text-center">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Phone No</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            adminStaff.length > 0 && (
                                                adminStaff.map((row, key)=>(
                                                    <tr key={key}>
                                                        <td>{row.firstname}</td>
                                                        <td>{row.lastname}</td>
                                                        <td>{row.email}</td>
                                                        <td>{row.phoneno}</td>
                                                        <td>{row.description}</td>
                                                        
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
            </section>


            <section className="beautyLab_experts pt_90 pb_75 ptb_xs_50 ptb_xxs_50">
                <div className="container">
                    <div className="row" style={{ paddingBottom: '0px'}}>
                        <div className="col-md-12">
                        <div className="section_title mb_20 text-center">
                            <h3>Our Experts</h3>
                            <p className="color_51">Our beauticians are professional and give the best customer service based on their expertise, book an appointment with us to get the best experience !!</p>
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
                                <h6 className="name fw_700 color_ff">Ms. Rozie Sophie</h6>
                                <span className="degignation">Facial expert at Beauty Lab</span>
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
                                <h6 className="name fw_700 color_ff">Ms.Rozie Sophie</h6>
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
        </div>

        <StylistFooter />
    </div>
  )
}

export default ListStylists