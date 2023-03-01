import React from 'react'

import './Slider.css'

import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <div style={{paddingTop: '90px'}}>
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="../images/slider_img/slider_img1.jpg"
                alt="First slide"
            />
            <Carousel.Caption className='from-bottom'>
                <h4>Just The Best Place For</h4>
                <h3>Beauty & Relaxation</h3>
                <h5>Welcome to beauty lab, where you can relax and enjoy life. A little peace in a crazy world goes a long way.</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/slider_img/slider_img2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='from-bottom'>
                    <h4>Just The Best Place For</h4>
                    <h3 class="color_d5 fw_700">Body Masseging</h3>
                    <h5 class="text-left">Welcome to beauty lab, where you can relax and enjoy life. A little peace in a crazy world goes a long way.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/slider_img/slider_img3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='from-bottom'>
                    <h4>Just The Best Place For</h4>
                    <h3 class="color_d5 fw_700">Hair Treatment</h3>
                    <h5 class="text-left">Welcome to beauty lab, where you can relax and enjoy life. A little peace in a crazy world goes a long way.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slider