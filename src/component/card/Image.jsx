import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import carouselEx from '../../assets/cardEx.png'
import "./Image.css"

function ImageCard(props) {
    const history = useNavigate();
    const page= props.page;


    useMediaQuery(
        { maxWidth: 768 }, undefined,
    );
    

    useMediaQuery(
        { minWidth: 769 }, undefined,
    );


    props = props?.data
    return (
        <div onClick={()=>history.push(`/news/${props?.id}/${props?.slug}`)} className="imagecard" style={page==="main" && window.innerWidth>768? {backgroundImage:`url(${carouselEx})`, maxWidth:'30rem' , marginRight:"1.2rem" , overflow:"hidden"}:{backgroundImage:`url(${carouselEx})`, overflow:"hidden"}}>

            <div className="imagecardBg">

            </div>
            <h4 className = "title">
                Title here
            </h4>
            <div className="Imagecard-container">
            <h4> Officially ACBS is the Pool Governing body in Asia </h4>
            <p style={{marginBottom:"0rem", overflow:"hidden", textOverflow:"ellipsis"}} >
                Date: 25dec 2001
            </p>
            </div>
        </div>
    );
}

export default ImageCard;