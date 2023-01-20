import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from "../../axios"
import { useNavigate } from 'react-router';
import './carousel.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Image from '../../assets/carouselEx.jpg'


function ControlledCarousel() {

    const [navbar, setNavbar] = useState();
    const history = useNavigate();


    useEffect(() => {
        axios.get("https://ibsf.info/api/news/featured/")
            .then((response) => setNavbar(response.data.data))
    }, [])


    return (
        <Carousel className="mainPage_carousel" interval={4000} indicators={false}>

            {

                // navbar && navbar.map((data, index) =>
                // (
                    <Carousel.Item key={1} style={{ height: "100%", overflow: "hidden" }}>
                        <img
                            loading='lazy'
                            className="d-block w-100"
                            src={Image}
                            style={{ height: "100%", filter: "brightness(65%)" }}
                            alt="Pre Slide"
                        />


                        <Carousel.Caption onClick={() => history.push(`/news`)} className="carousel_caption">
                            {/* <span></span> */}
                            <h3>{'Asian 6-Red Snooker Championship 2022'}</h3>
                            <div>
                                <button className='info'>
                                Tournament Info
                                </button>
                                <button className='groups'>
                                Groups & Schedule
                                </button>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                // ))
            }

        </Carousel>
    );
}

export default ControlledCarousel;