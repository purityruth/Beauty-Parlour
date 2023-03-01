import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navibar from './Navibar'
import Footer from './Footer'
import './Gallery.css'

function Gallery() {
  return (
    <div>
    
      <Navibar />

      <div className="gallery_banner_section service_banner img img-responsive">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery_banner_content">
                <h4>Photo Gallery</h4>
                <p className='txt'>Welcome to beauty lab, where you can relax and enjoy life.</p>
              </div>
              <ol className="breadcrumb">
                <li><Link className='alink' to={"/"} > Home </Link></li>
                <li className="active">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
        

      {/* ===========================================
        *
                  Gallery Images

        * ============================================
      */}

      <section className="beautyLab_photo_gallery pt_90 pb_75 ptb_xs_50 ptb_xxs_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title mb_60 text-center">
                <h3>Our Photo Gallery</h3>
                <p className="color_51">Find all the photos of our beauty parlour in one place and be assured of the best services with our facilities !!</p>
              </div>
            </div>
          </div>
            {/* Row */}

          <Row>
            <ul className="feltering_menu pl_15">
              <li className="filter active" data-filter="all">All</li>
              <li className="filter" data-filter=".spa">Spa</li>
              <li className="filter" data-filter=".makeup">Makeup</li>
              <li className="filter" data-filter=".hairstyle">Hair Style</li>
              <li className="filter" data-filter=".bodyMassage">Body Massage</li>
              <li className="filter" data-filter=".iDesign">Interior Design</li>
            </ul>

            <div className="gallery_wrapper">
              
              {/* Gallery 1 */}
              <div className="col-md-3 col-sm-4  mix makeup">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg7.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig1.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 2 */}
              <div className="col-md-3 col-sm-4  mix iDesign">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg14.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig8.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 3 */}
              <div className="col-md-3 col-sm-4  mix makeup">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg3.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/beauty_galleryImg3.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 4 */}
              <div className="col-md-3 col-sm-4  mix iDesign">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg13.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig7.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 5 */}
              <div className="col-md-3 col-sm-4  mix makeup">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg5.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/beauty_galleryImg5.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 6 */}
              <div className="col-md-3 col-sm-4  mix hairstyle">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg10.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig4.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 7 */}
              <div className="col-md-3 col-sm-4  mix spa">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg1.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/beauty_galleryImg1.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

                {/* Gallery 8 */}
                <div className="col-md-3 col-sm-4  mix bodyMassage">
                    <div className="single_gallery">
                        <img src="../images/gallery/beauty_galleryImg8.jpg" alt="gallery image" className="img img-responsive" />
                        <div className="img_overlay">
                            <a href="images/gallery_big_img/gBig2.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>

              {/* Gallery 9 */}
              <div className="col-md-3 col-sm-4  mix iDesign">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg15.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig9.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 10 */}
              <div className="col-md-3 col-sm-4  mix bodyMassage">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg9.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig3.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 11 */}
              <div className="col-md-3 col-sm-4  mix hairstyle">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg12.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig6.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 12 */}
              <div className="col-md-3 col-sm-4  mix iDesign">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg16.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig10.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 13 */}
              <div className="col-md-3 col-sm-4  mix bodyMassage">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg2.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery/beauty_galleryImg2.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 14 */}
              <div className="col-md-3 col-sm-4  mix hairstyle">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg11.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/gallery_big_img/gBig5.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 15 */}
              <div className="col-md-3 col-sm-4  mix spa">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg4.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/beauty_galleryImg4.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div>

              {/* Gallery 16 */}
              <div className="col-md-3 col-sm-4  mix spa">
                <div className="single_gallery">
                  <img src="../images/gallery/beauty_galleryImg6.jpg" alt="gallery image" className="img img-responsive" />
                  <div className="img_overlay">
                    <a href="images/beauty_galleryImg6.jpg" className="venobox vbox-item" data-gall="gallery1"><i className="fa fa-search-plus"></i></a>
                  </div>
                </div>
              </div> {/* col */}
            </div> {/* Gallery Wrapper */}
          </Row> {/* Row */}
        </div>
      </section>

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
                        <p>Book a session and get up to <span className="color">25%</span> discount!</p>
                        <Link className='book_link' to={'/components/BookAppointment'}>Book A Session Now</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Gallery