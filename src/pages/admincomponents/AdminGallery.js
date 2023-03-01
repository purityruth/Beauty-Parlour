import React from 'react'

import { Row } from 'react-bootstrap'
import '../components/Gallery.css'
import AdminNavbar from './AdminNavbar'
import AdminSideNav from './AdminSideNav'

function AdminGallery() {
  return (
    <div>

    <AdminNavbar />
    <AdminSideNav />
    
    <section className="beautyLab_photo_gallery pt_90 pb_75 ptb_xs_50 ptb_xxs_50">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title mb_60 text-center" style={{paddingBottom: '0px'}}>
                <h3>Our Photo Gallery</h3>
                <p className="color_51" >Find all the photos of our beauty parlour in one place and be assured of the best services with our facilities !!</p>
              </div>
            </div>
          </div>
            {/* Row */}

          <Row>
           
            <div className="gallery_wrapper" >
              
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
    </div>
  )
}

export default AdminGallery