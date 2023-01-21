import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import carouselEx from '../../assets/carouselEx.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./Title.css"

function Title(props) {
    const history = useNavigate();
    const page = props.page;


    useMediaQuery(
        { maxWidth: 768 }, undefined,
    );


    useMediaQuery(
        { minWidth: 769 }, undefined,
    );


    props = props?.data
    return (
        <div onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)} className="title-card_body" style={page === "main" && window.innerWidth > 768 ? { maxWidth: '30rem', marginRight: "1.2rem", overflow: "hidden" } : { overflow: "hidden" }}>

            <div className="card_container">
                <h4>Tournament Info: Asian 6-</h4>
                <p className='title' style={{ overflow: 'hidden', textOverflow: "ellipsis" }} >
                    {"Asian Confederation of Billiard "}
                    {props?.cf.length === 60 && <span>....</span>}
                </p>
                <div className='dateviews'>
                    <p className='time'>2 hours ago</p>
                    <div className='views'>
                        <VisibilityIcon fontSize="20px" />
                        <p>123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;