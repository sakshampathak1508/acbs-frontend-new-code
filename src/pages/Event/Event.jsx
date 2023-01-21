import React from 'react';
import { makeStyles } from "@mui/styles";
import Header from '../../component/header/header';
import ImageTitle from '../../component/card/ImageTitle';
import Carousel from '../../component/carousel/Carousel';
import ImageCard from "../../component/card/Image"
import TitleCard from '../../component/card/Title'
import ImageTitleDate from '../../component/card/ImageTitleDate';
import Title from '../../component/card/Title';
import CarouselWrapper from '../../component/carousel/CarouselWrapper';
import Footer from '../../component/Footer/Footer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Partnews from '../../assets/partnews.png'
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";

import './Event.css'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0px 2px",
        display: "flex",
        alignItems: "center",
        width: "auto",
    },
    input: {
        padding: "0rem",
        fontSize: "1rem",
    },
    iconButton: {
        padding: 5,
        fontSize: "1rem",
        border: "none",
        outline: "none",
    },
}));

const Event = (props) => {
    const [year, setYear] = React.useState('');
    const [eventName, setEventName] = React.useState('');
    const classes = useStyles();

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <div className='event-page'>
            <Header />
            <main>
                <header>
                    <section class="year">
                        <label>Year</label>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={year}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </section>

                    <section className='event-name'>
                        <label>Event</label>
                        <FormControl sx={{ m: 1, minWidth: 220 }}>
                            <Select
                                value={eventName}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </section>

                    <section class="search">
                        <form id="searchForm" style={{ background: '#F5F5F5' }}>
                            <IconButton
                                onClick={handleChange}
                                className={classes.iconButton} aria-label="search">
                                <img src={SearchIcon} />
                            </IconButton>
                            <input placeholder="Search" style={{ background: '#F5F5F5' }} />
                        </form>
                    </section>
                </header>

                <main>
                    <h2>World Snooker Championship 2022</h2>
                    <section className='event-content'>
                        <section className='left-container'>
                            <p>a,mds</p>
                        </section>

                        <section className='right-container'>
                            <section className='top'>
                                <div className='location'>
                                    <h4>Location</h4>
                                    <h5>Antalya, Turkey</h5>
                                    <label>Resultksldm skd s kdksdj skdmsk dskdm skdmskom sdms</label>
                                </div>

                                <div className='venue'>
                                    <h4>Venue</h4>
                                    <h5>Antalya, Turkey</h5>
                                    <label>Photographs</label>
                                </div>

                                <div className='date'>
                                    <div className='start-date'>
                                        <h4>Start Date</h4>
                                        <h5>2019-10-29</h5>
                                    </div>

                                    <div className='end-date'>
                                        <h4>End Date</h4>
                                        <h5>2019-10-29</h5>
                                    </div>
                                </div>
                            </section>

                            <section className='bottom'>
                                <div className='about'>
                                    <h4>Location</h4>
                                    <h5>Antalya, Turkey</h5>
                                    <label>Resultksldm skd s kdksdj skdmsk dskdm skdmskom sdms</label>
                                </div>

                                <div className='hotel-assoc'>
                                    <h4>HOST ASSOCIATION CONTACT</h4>
                                    <label>Antalya, Turkey msdkmd smdks dsmkd s, ds,mdskldsd s,mdk s, dsdmksmd ld</label>
                                </div>

                                <div className='hotel-assoc'>
                                    <h4>Venue</h4>
                                    <label>Antalya, Turkey msdkmd smdks dsmkd s, ds,mdskldsd s,mdk s, dsdmksmd ld</label>
                                </div>

                                <div className='hotel-assoc'>
                                    <h4>Venue</h4>
                                    <label>Antalya, Turkey msdkmd smdks dsmkd s, ds,mdskldsd s,mdk s, dsdmksmd ld</label>
                                </div>
                            </section>
                        </section>
                    </section>
                </main>

            </main>

            <Footer />
        </div>
    );
};

export default Event;