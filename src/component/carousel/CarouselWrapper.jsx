import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import "./CarouselWrapper.css"
import pox from '../../assets/cardEx.png'
import Sponsor1 from '../../assets/sponsor-1.jpg';
import Sponsor2 from '../../assets/sponsor-2.jpg';
import Sponsor3 from '../../assets/sponsor-3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CarouselWrapper = (props) => {


    const [slidesToShow, setslidesToShow] = useState(3);

    useEffect(() => {
        const width = window.innerWidth;

        width > 768 ? setslidesToShow(2) : setslidesToShow(1)

    })


    const handleMediaQueryChange = (matches) => {
        if (matches)
            setslidesToShow(1);
    }

    const handleMediaQueryChange1 = (matches) => {
        if (matches)
            setslidesToShow(2);
    }



    useMediaQuery(
        { maxWidth: 768 }, undefined, handleMediaQueryChange
    );


    useMediaQuery(
        { minWidth: 769 }, undefined, handleMediaQueryChange1
    );


    var setting = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
    }




    return (
        <div className="carouselwrapper_container">


            <Slider style={{ height: "100%", overflow: "hidden" }} {...setting}>

                <div key={1} onClick={() => window.open('data.url', '_blank')} className="slide_image" ><img src={Sponsor3} alt="img" /></div>
                <div key={1} onClick={() => window.open('data.url', '_blank')} className="slide_image" ><img src={Sponsor2} alt="img" /></div>
                <div key={1} onClick={() => window.open('data.url', '_blank')} className="slide_image" ><img src={Sponsor1} alt="img" /></div>
                <div key={1} onClick={() => window.open('data.url', '_blank')} className="slide_image" ><img src={Sponsor2} alt="img" /></div>
                {/* <div key={1} onClick={() => window.open('data.url', '_blank')} className="slide_image" ><img src={Sponsor2} width="auto" height="100%" alt="img" /></div> */}
                {

                    // props.data&&props.data.map((data , index)=>
                    // (   



                    // ))


                }


            </Slider>

        </div>
    );
};


export default CarouselWrapper;