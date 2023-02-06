import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import carouselEx from '../../assets/carouselEx.jpg'
import "./Members.css"

function Card(props) {
    const history = useNavigate();
    const page= props.page;


    props = props?.data
    return (
        <main onClick={()=>history.push(`/news/${props?.id}/${props?.slug}`)} className='members-outer'>
            <section className = "members-image" style={{backgroundImage:`url(${carouselEx})`}}>
            </section>
            <section className="members-content">
            <h6>Bowling , Billiard & Boules Federation of I.R.Iran</h6>
            <p><strong>President:</strong> dfk dfpd f</p>
            <div className='icons'>
                <FacebookIcon/>
                <InstagramIcon/>
                <MailOutlineIcon/>
                <MailOutlineIcon/>
                <MailOutlineIcon/>
            </div>
            </section>
        </main>
    );
}

export default Card;