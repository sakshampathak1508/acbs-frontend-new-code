import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import carouselEx from '../../assets/carouselEx.jpg'
import "./ImageTitle.css"

function Card(props) {
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
        <div onClick={()=>history.push(`/news/${props?.id}/${props?.slug}`)} className="imageTitle-card_body" style={page==="main" && window.innerWidth>768? { maxWidth:'30rem' , marginRight:"1.2rem" , overflow:"hidden"}:{ overflow:"hidden"}}>

            <div className = "card_image" style={{backgroundImage:`url(${carouselEx})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            </div>
            <div className="card_container">
            <p style={{marginBottom:"0rem", overflow:'hidden', textOverflow:"ellipsis"}} >
            {"props?.cf ldpd dsd d,d skdmam dlakmd saml dka da dakd slad "}
            {props?.cf.length === 60 && <span>....</span>}
            </p>
            </div>
        </div>
    );
}

export default Card;