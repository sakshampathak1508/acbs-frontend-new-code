import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnIcon from '@mui/icons-material/Room';
import "./EventImageTitle.css"

function EventImageTitle(props) {
    const history = useNavigate();
    const page= props.page;


    useMediaQuery(
        { maxWidth: 768 }, undefined,
    );
    

    useMediaQuery(
        { minWidth: 769 }, undefined,
    );


    console.log(props?.data)
    props = props?.data
    return (
        <div onClick={()=>history.push(`/news/${props?.id}/${props?.slug}`)} className="eventimageTitle-card_body" style={page==="main" && window.innerWidth>768? { maxWidth:'30rem' , marginRight:"1.2rem" , overflow:"hidden"}:{ overflow:"hidden"}}>

            <div className = "card_image" style={{backgroundImage:`url(${props?.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            </div>
            <div className="card_container">
            <h4 style={{marginBottom:"0rem", overflow:'hidden', textOverflow:"ellipsis"}} >
            {/* {"props?.cf dkm dmkwedmw wmdkmwd kwk wm d lsmd msw d"} */}
            {props?.name}
            </h4>
            <div className='location'>
                        <LocationOnIcon style={{marginTop:'0.2rem'}} />
                        <p>{props?.location}</p>
                </div>
            </div>
        </div>
    );
}

export default EventImageTitle;