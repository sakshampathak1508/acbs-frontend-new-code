import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from "../../axios"
import { useNavigate } from 'react-router';
import './carousel.css'
import Image from '../../assets/carouselEx.jpg'
import Image2 from '../../assets/whitishBack.jpg'


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
                        <h3>{'Darren lifts his 6th World Masters claims Silver'}</h3>
                        <div className="dropdown">
                            <button className='info'>
                                Tournament Info
                            </button>
                            <button className='groups dropbtn'>
                                <label>+3</label>
                            </button>

                            <div className="dropdown-content">
                                <a className="" onClick={() => history.push("/aboutus")}>The IBSF</a>
                                <a className="" onClick={() => history.push("/executive_member")}>Executives</a>
                                <a className="" onClick={() => history.push("/member_countries")}>Members</a>
                                <a className="" onClick={() => history.push("/champion")}>Past Champions</a>

                            </div>

                        </div>

                    </Carousel.Caption>
                </Carousel.Item>


                // ))
            }


        </Carousel>
    );
}

export default ControlledCarousel;