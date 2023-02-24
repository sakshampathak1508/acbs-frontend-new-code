import React, { useEffect, useContext, useRef } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";
import { StateContext } from '../../StateProvider';
import './ParticularEvent.css'
import axios from '../../axios';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

const ParticularEvent = (props) => {
    const [state, setState] = React.useState({
        year: '', event: '', eventList: [], eventName: '', search: ''
    });
    const yearRef = useRef();
    const { id } = useParams();
    const { isLoading = true, setIsLoading } = useContext(StateContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`events/?id=${id}`)
            .then((res) => setState((prev) => ({ ...prev, ['event']: res?.data })))
            .then(() => setIsLoading(false))

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

    useEffect(() => {
        axios.get(`events/year/?year=${state.year}/`)
            .then((res) => {
                setState((prev) => ({ ...prev, ['eventList']: res?.data }))
            })
            .catch((error) => console.log(error))

    }, [state.year])
    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='event-page'>
            <Header />

            <main className='container'>
                <header>
                    <section className="year">
                        <label>Year</label>
                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 80, height: '2.7rem' }} ref={yearRef}>
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
                        <FormControl sx={{ m: 1, minWidth: 320, height: '2.7rem' }}>
                            <Select
                                sx={{ height: '100%' }}
                                value={state.eventName}
                                onChange={handleChange}
                                displayEmpty
                                name='eventName'
                                placeholder='Event'
                            >
                                <MenuItem disabled value="">Events</MenuItem>
                                {
                                    state?.eventList?.map((data, index) => {
                                        return (<MenuItem key={index} value={data}>{data}</MenuItem>)
                                    })
                                }
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
                            <input onChange={handleChange} placeholder="Search" style={{ background: '#F5F5F5' }} value={state?.search} name='search' />
                        </form>
                    </section>
                </header>

                {state?.event != '' ? (
                    <main>
                        <h2>{state?.event?.name}</h2>
                        <section className='event-content'>
                            <section className='left-container' dangerouslySetInnerHTML={{ __html: state?.event?.content1 }}>
                                {/* <p>a,mds</p> */}
                            </section>

                            <section className='right-container'>
                                <section className='top'>
                                    <div className='location'>
                                        <h4>Location</h4>
                                        <h5>{state?.event?.location}</h5>
                                        <label>Resultksldm skd s kdksdj skdmsk dskdm skdmskom sdms</label>
                                    </div>

                                    <div className='venue'>
                                        <h4>Venue</h4>
                                        <h5>{state?.event?.venue}</h5>
                                        <label>Photographs</label>
                                    </div>

                                    <div className='date'>
                                        <div className='start-date'>
                                            <h4>Start Date</h4>
                                            <h5>{state?.event?.start_date}</h5>
                                        </div>

                                        <div className='end-date'>
                                            <h4>End Date</h4>
                                            <h5>{state?.event?.end_date}</h5>
                                        </div>
                                    </div>
                                </section>

                                <section className='bottom'>
                                    <div className='about'>
                                        <h4>Location</h4>
                                        <h5>{state?.event?.location}</h5>
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
                    </main>)
                    : (<div id="loader" style={{ width: "100%", textAlign: "center" }}> <CircularProgress /> </div>)}
            </main>
            <Footer />
        </div>
    );
};

export default ParticularEvent;