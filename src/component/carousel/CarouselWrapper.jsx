import React , {useEffect  , useState} from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import "./CarouselWrapper.css"
import pox from '../../assets/cardEx.png'
import Sponsor1 from '../../assets/sponsor1.png';
import Sponsor2 from '../../assets/sponsor2.png';
import Sponsor3 from '../../assets/sponsor3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const CarouselWrapper = (props) => {


    const [slidesToShow , setslidesToShow] = useState(3);
    
    useEffect(()=>
    {
        const width = window.innerWidth;

        width>768? setslidesToShow(3):setslidesToShow(1)
        
    })

    
    const handleMediaQueryChange = (matches) => {
        if(matches)
        setslidesToShow(1);
      }

      const handleMediaQueryChange1 = (matches) => {
        if(matches)
        setslidesToShow(3);
      }

    

    useMediaQuery(
        { maxWidth: 768 }, undefined,  handleMediaQueryChange
    );
    

     useMediaQuery(
        { minWidth: 769 }, undefined,  handleMediaQueryChange1
    );


    var setting={
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay:true,
    }
    

    

    return (
        <div className="carouselwrapper_container">
            

<Slider style={{  height:"100%"  , overflow:"hidden"}} {...setting}>

<div key={1} onClick={()=>window.open('data.url' , '_blank')} className="slide_image" ><img src={Sponsor3} width="auto" height="100%" alt="img" /></div>
<div key={1} onClick={()=>window.open('data.url' , '_blank')} className="slide_image" ><img src={Sponsor2} width="auto" height="100%" alt="img" /></div>
<div key={1} onClick={()=>window.open('data.url' , '_blank')} className="slide_image" ><img src={Sponsor1} width="auto" height="100%" alt="img" /></div>
<div key={1} onClick={()=>window.open('data.url' , '_blank')} className="slide_image" ><img src={Sponsor2} width="auto" height="100%" alt="img" /></div>
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