import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive'
import moment from 'moment';
import LocationOnIcon from '@mui/icons-material/Room';
import "./EventImageTitle.css"

function EventImageTitle(props) {
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
        <div onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)} className="eventimageTitle-card_body" style={page === "main" && window.innerWidth > 768 ? { maxWidth: '30rem', marginRight: "1.2rem", overflow: "hidden" } : { overflow: "hidden" }}>

            <div className="card_image" style={{ backgroundImage: `url(${props?.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            </div>
            <div className="card_container">
                <h4 style={{ marginBottom: "0rem", overflow: 'hidden'}} >
                    {props?.name}
                    {props?.name?.length >= 40 && <span>....</span>}
                </h4>

                <div className='location-date'>
                    <section className='location'>
                        <LocationOnIcon />
                        <p>{props?.location}</p>
                    </section>
                    <section className='start-end-date'>
                        <div className='start-date-fields'>
                            <label>Start Date</label>
                            <span>{moment(props?.start_date).format('MMMM d, YYYY')}</span>
                        </div>
                        <div className='end-date-fields'>
                            <label>End Date</label>
                            <span>{moment(props?.end_date).format('MMMM d, YYYY')}</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default EventImageTitle;