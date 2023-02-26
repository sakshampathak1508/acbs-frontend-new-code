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
    const [page, setPage] = useState({value:0});
    const [data, setData] = useState([])
    const yearRef = useRef();
    const [state, setState] = React.useState({
        year: 'all'
    });



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
            setPage((prev) => {return {value:prev.value + 1}});
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setPage(()=>
        {return {value:1};});
        setState((prev) => ({ ...prev, [name]: value }));
        setData([])
    };


    useEffect(() => {
        axios.get(`/news/all/?year=${state?.year}/${page?.value}/`)
            .then((res) => {
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
        <div className='newspage'>
            <Header />

            <main className='container main-news-page'>
                        <header className='header-title'>
                            <h4>News</h4>
                            <section className="year">
                                <label>Year</label>
                                <FormControl variant="outlined" sx={{ minWidth: 130 , m:'0rem 1rem 0rem 1rem', height: '2.7rem' }} ref={yearRef}>
                                    <Select
                                        native
                                        sx={{ height: '100%' }}
                                        value={state.year}
                                        className="input-label-select"
                                        onChange={handleChange}
                                        displayEmpty
                                        name='year'
                                    >
                                        <option className="input-label-option" value="2021" >all</option>
                                    </Select>
                                </FormControl>
                            </section>
                        </header>
                        <div className='news-cards-section'>
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