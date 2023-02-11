import React, { useState, useEffect, useRef } from 'react';
import Header from '../../component/header/header';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ImageTitleDate from '../../component/card/ImageTitleDate';
import Footer from '../../component/Footer/Footer';

import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";

import './Event.css'

const Event = (props) => {
    const [state, setState] = React.useState({
        year: '', eventName: '', search: ''
    });
    const yearRef = useRef();
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);


    useEffect(() => {

        const currentyear = new Date().getFullYear();
        var select = yearRef.current?.firstChild?.firstChild;

        while (select.firstChild) {
            select.removeChild(select.lastChild);
        }

        for (let i = currentyear; i >= 2010; i--) {
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

    useEffect(() => {
        window.onscroll = () => {
            console.log(window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight, page)
            if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
                console.log("here")
                setPage((prev) => prev + 1);

                // loadItems();
            }
        };
        return () => (window.onscroll = null);
    }, [hasMore]);

    useEffect(() => {
        if (page == 3)
            setHasMore(false)

    }, [page])


    return (
        <div className='event-page'>
            <Header />
            <main className='container'>

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
                    <section className='events'>
                        <h4>Events</h4>
                        <div className='events-container'>
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />

                        </div>
                    </section>
                </main>

            </main>

            {hasMore ? (<p>Loading</p>)
                :
                <Footer>
                </Footer>
            }
        </div>
    );
};

export default Event;