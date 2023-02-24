import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import carouselEx from '../../assets/carouselEx.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./ImageTitleDate.css"
import moment from 'moment'

function ImageTitleDate(props) {
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
        <div onClick={()=>history.push(`/news/${props?.id}/${props?.slug}`)} className="imageTitleDate-card_body" style={page==="main" && window.innerWidth>768? { maxWidth:'30rem' , marginRight:"1.2rem" , overflow:"hidden"}:{ overflow:"hidden"}}>

            <div className = "card_image" style={{backgroundImage:`url(${props?.image})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
            </div>
            <div className="card_container">
            <p style={{marginBottom:"0rem", overflow:'hidden', textOverflow:"ellipsis"}} >
            {/* {"props?.cf dkm dmkwedmw wmdkmwd kwk wm d lsmd msw d"} */}
            {props?.title}
            {props?.title?.length === 60 && <span>....</span>}
            </p>
            <div className='dateviews'>
                    <p className='time'>{moment(props?.timestamp).fromNow()}</p>
                    <div className='views'>
                        <VisibilityIcon fontSize="20px" />
                        <p>{props?.views}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageTitleDate;