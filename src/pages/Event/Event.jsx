import React, { useState, useEffect, useRef } from 'react';
import Header from '../../component/header/header';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EventImageTitle from '../../component/card/EventImageTitle';
import Footer from '../../component/Footer/Footer';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";
import axios from '../../axios';
import CircularProgress from '@mui/material/CircularProgress';
import './Event.css'

const Event = (props) => {
    const [state, setState] = React.useState({
        year: '', event: [], search: ''
    });
    const yearRef = useRef();
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState({ value: 0 });
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const currentyear = new Date().getFullYear();
        var select = yearRef.current?.firstChild?.firstChild;
        while (select?.firstChild) {
            select.removeChild(select.lastChild);
        }

        let option = document.createElement("option");
        option.text = 'All';
        option.value = 'all';
        option.key = 1;
        select.appendChild(option)

        for (let i = currentyear; i >= 2010; i--) {
            let option = document.createElement("option");
            option.text = i.toString();
            option.value = i;
            option.key = i + 1;
            select.appendChild(option)
        }


        return () => window.onscroll()
    }, [])

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && isLoading == true) {
            setIsLoading(false)
            setPage((prev) => { return { 'value': prev.value + 1 } });
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState((prev) => ({ ...prev, [name]: value }));
        setPage(() => { return { value: 1 } });

        setState((prev) => ({ ...prev, ['event']: [] }));
    };

    useEffect(() => {
        axios.get(`/events/all/?year=${state?.year}/${page?.value}/`)
            .then((res) => {
                console.log(res?.data)
                if (res?.data?.results?.length === 0)
                    setHasMore(false)
                setIsLoading(true)
                setState((prev) => ({ ...prev, ['event']: prev?.event?.concat(res?.data?.results) }))
            })
            .catch((e) => console.log(e));

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
                            </Select>
                        </FormControl>

                    </section>
                </header>
                <main>
                    <section className='events'>
                        <h4>Events</h4>
                        <div className='events-container'>
                            {
                                state?.event?.map((val, index) =>
                                (
                                    <EventImageTitle data={val} key={index} />
                                ))
                            }
                            {
                                state?.event?.length == 0 && hasMore == false && <div style={{ margin: "auto" }}><h3>Nothing Found...</h3></div>
                            }

                        </div>
                    </section>
                </main>

            </main>

            {
                isLoading | hasMore ? (<div id="loader" style={{ width: "100%", textAlign: "center" }}> <CircularProgress /> </div>)
                    :
                    <Footer>
                    </Footer>
            }
        </div>
    );
};

export default Event;