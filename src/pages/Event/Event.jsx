import React, { useEffect, useRef } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '../../assets/searchIcon.png'
import InputLabel from '@mui/material/InputLabel';
import IconButton from "@mui/material/IconButton";

import './Event.css'

const Event = (props) => {
    const [state, setState] = React.useState({
        year: '', eventName: '', search: ''
    });
    const yearRef = useRef();


    useEffect(() => {
        
        const currentyear = new Date().getFullYear();
        var select = yearRef.current?.firstChild?.firstChild;

        while(select.firstChild)
        {
            select.removeChild(select.lastChild);
        }
        
        for(let i = currentyear; i>=2010;i--)
        {   
        let option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        select.appendChild(option)
        }
    }, [])

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='event-page'>
            <Header />
            <main>
                <header>
                    <section className="year">
                        <label>Year</label>
                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120, height: '2.7rem' }} ref={yearRef}>
                            <Select
                                native
                                sx={{ height: '100%' }}
                                value={state.year}
                                className="input-label-select"
                                onChange={handleChange}
                                displayEmpty
                                name='year'
                            >
                                <option className="input-label-option" value="2021" >2021</option>
                            </Select>
                        </FormControl>

                    </section>

                    <section className='event-name'>
                        <label>Event</label>
                        <FormControl sx={{ m: 1, minWidth: 550, height: '2.7rem' }}>
                            <Select
                                sx={{ height: '100%' }}
                                value={state.eventName}
                                onChange={handleChange}
                                displayEmpty
                                name='eventName'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </section>

                    <section className="search">
                        <form id="searchForm" style={{ background: '#F5F5F5' }}>
                            <IconButton
                                onClick={handleChange}
                                aria-label="search">
                                <img src={SearchIcon} />
                            </IconButton>
                            <input onChange={handleChange} placeholder="Search" style={{ background: '#F5F5F5' }} value={state.search} name='search' />
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