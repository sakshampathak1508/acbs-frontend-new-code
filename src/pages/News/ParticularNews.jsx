import React , {useEffect, useRef} from 'react';
import Header from '../../component/header/header';
import ImageTitleDate from '../../component/card/ImageTitleDate';
import Footer from '../../component/Footer/Footer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Partnews from '../../assets/partnews.png'
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PrintIcon from '@mui/icons-material/Print';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '../../assets/searchIcon.png'
import './ParticularNews.css'
import IconButton from "@mui/material/IconButton";
import { Visibility } from '@mui/icons-material';

const ParticularNews = (props) => {
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
        <div className='particular-news-page'>
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

                <header>
                    <section className="back-btn">
                        <p><span><KeyboardBackspaceIcon style={{ marginRight: '1rem' }} /></span> Back</p>
                    </section>
                    <section className='title'>
                        <h4>Tournament Information: Asian 6-Red Pool Championship 2022</h4>
                        <p>Wednesday 04 January 2023, 21:35</p>
                    </section>
                </header>
                <main>
                    <section className='image-section'>
                        <img src={Partnews} width={'100%'} ></img>
                    </section>

                    <section className='event-section'>
                        <section className='left'>
                            <div className="newspage_share_links" style={{ display: "flex", flexDirection: "column" }}>

                                <ul style={{ listStyleType: "none", width: "100%" }}>
                                    <li style={{ marginBottom: "1rem", fontWeight: "600" }}> <Visibility /> Views newsData.views</li>
                                    <li className="shareLinks">
                                        <PrintIcon onClick={() => window.print()} ></PrintIcon>
                                        <MailOutlineIcon onClick={() => window.location.href = "mailto: ibsfinfo@gmail.com "}  ></MailOutlineIcon>
                                        {/* <FacebookShareButton url={shareUrl} quote={"oo"}>  <FacebookIcon  round={true} /></FacebookShareButton> */}
                                        <InstagramIcon onClick={() => { window.open('http://www.instagram.com', 'blank') }} style={{ cursor: "pointer", marginRight: "1rem" }} />
                                        {/* <TwitterShareButton url={shareUrl}> <TwitterIcon  round={true} /> </TwitterShareButton> */}
                                        {/* <WhatsappShareButton url={shareUrl} separator=":: "> <WhatsappIcon  round={true} /></WhatsappShareButton> */}
                                    </li>
                                </ul>

                                <div className="author">
                                    <h4>Author</h4>
                                    <Avatar style={{ width: "6rem", height: "6rem", marginBottom: '1rem' }} alt="Remy Sharp" src={``} />

                                    <h6>newsData.writer_data.name, newsData.wr iter_data .position</h6>
                                </div>

                                <div className="news_tags">
                                    {/* {
                                        newsData && newsData.tags_name.map((data, index) =>
                                        (
                                            <>
                                                <p onClick={() => history.push(`/newsbytag/${data}`)} key={index} style={{ cursor: "pointer", width: "fit-content", fontSize: "1.3rem", padding: "0.7rem", color: "white", fontWeight: "500", wordBreak: "break-all", backgroundColor: "#0da1ff", marginRight: "0.5rem" }}>{data}</p>
                                            </>

                                        )
                                        )} */}
                                    <p>Tags</p>

                                </div>



                            </div>
                        </section>

                        <section className='right'>
                            <p>kdfodkfmkls fmds f msflsml clk skckldmcmkslcldmf ls flcsl cf s m l f l s m f l s l;c ls clslfc lslfmdk fkls cl s l k m l k m s k lsk cksklm ck;lvs  csf sl fls lf ls fmls f</p>
                        </section>
                    </section>

                    <section className='you-might-like-news'>
                        <h4>YOU MIGHT ALSO LIKE</h4>
                        <div className='latest-news-container'>
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />

                        </div>
                    </section>

                    <section className='bottom-back-next-button'>
                        <p><span><KeyboardBackspaceIcon style={{ marginRight: '1rem' }} /></span> <span>Back</span></p>
                        <p> <span>Next </span><span><KeyboardBackspaceIcon style={{ marginRight: '1rem', transform: 'rotateY(180deg)' }} /></span></p>
                    </section>

                </main>

            </main>

            <Footer />
        </div>
    );
};

export default ParticularNews;