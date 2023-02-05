import React, { useState, useEffect, useRef } from 'react';
import Header from '../../component/header/header';
import ImageTitle from '../../component/card/ImageTitle';
import Carousel from '../../component/carousel/Carousel';
import ImageCard from "../../component/card/Image"
import TitleCard from '../../component/card/Title'
import ImageTitleDate from '../../component/card/ImageTitleDate';
import Footer from '../../component/Footer/Footer';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";
import './AllNews.css'

const AllNews = (props) => {
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const yearRef = useRef();
    const [state, setState] = React.useState({
        year: '', search: ''
    });

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
        if (page == 3)
            setHasMore(false)

    }, [page])

    return (
        <div className='news-page'>
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

                <section>
                    <section className='latest-news'>
                        <h4>Latest News</h4>
                        <div className='latest-news-container'>
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
                </section>
            </main>
            {
                hasMore ? (<p>Loading</p>)
                    :
                    <Footer>
                    </Footer>
            }
        </div >
    );
};

export default AllNews;