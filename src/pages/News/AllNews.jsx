import React, { useState, useContext, useEffect, useRef } from 'react';
import Header from '../../component/header/header';
import ImageTitleDate from '../../component/card/ImageTitleDate';
import Footer from '../../component/Footer/Footer';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from '../../axios';
import SearchIcon from '../../assets/searchIcon.png'
import IconButton from "@mui/material/IconButton";
import CircularProgress from '@mui/material/CircularProgress';
import { StateContext } from '../../StateProvider';
import './AllNews.css'

const AllNews = (props) => {
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    // const { isLoading, setIsLoading } = useContext(StateContext);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([])
    const yearRef = useRef();
    const [state, setState] = React.useState({
        year: '', search: ''
    });



    useEffect(() => {
        const currentyear = new Date().getFullYear();
        var select = yearRef.current?.firstChild?.firstChild;
        while (select?.firstChild) {
            select.removeChild(select.lastChild);
        }

        for (let i = currentyear; i >= 2010; i--) {
            let option = document.createElement("option");
            option.text = i.toString();
            option.value = i;
            option.key=i+1;
            select.appendChild(option)
        }


        return () => window.onscroll()
    }, [])

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && isLoading == true) {
            setIsLoading(false)
            setPage((prev) => prev + 1);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState((prev) => ({ ...prev, [name]: value }));
    };


    useEffect(() => {

        
        console.log("__PAFE" , page)
        // setData([]);
        // setBottom(false)
        axios.get(`/events/all/?year=2022/${page}/`)
            .then((res) => {
                console.log(res?.data?.results)
                if (res?.data?.results?.length === 0)
                    setHasMore(false)

                setIsLoading(true)
                setData((prev) => {
                    return (prev.concat(res?.data?.results))
                })
            })
            .catch((e) => console.log(e));

    }, [page])

    return (
        <div className='news-page'>
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
                            {
                                data && data?.map((val, index) =>
                                (
                                        <ImageTitleDate key={index} data={val} />
                                ))
                            }

                            {
                                data?.length == 0 && hasMore == false && <div style={{ margin: "auto" }}><h3>Nothing Found...</h3></div>
                            }

                        </div>
                    </section>
                </section>
            </main>
            {
                isLoading | hasMore ? (<div id="loader" style={{ width: "100%", textAlign: "center" }}> <CircularProgress /> </div>)
                    :
                    <Footer>
                    </Footer>
            }
        </div >
    );
};

export default AllNews;