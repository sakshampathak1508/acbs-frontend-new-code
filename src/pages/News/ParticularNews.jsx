import React from 'react';
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
// import KeyboardNextspaceIcon from '@mui/icons-material/KeyboardNextspace';
import Partnews from '../../assets/partnews.png'

// import { WhatsappShareButton, FacebookShareButton, TwitterShareButton } from "react-share"
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons/Facebook'
// import WhatsappIcon from '@mui/icons/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PrintIcon from '@mui/icons-material/Print';
// import TwitterIcon from '@mui/icons/Twitter';

import './ParticularNews.css'
import { Visibility } from '@mui/icons-material';

const ParticularNews = (props) => {
    return (
        <div className='particular-news-page'>
            <Header />
            <main>
                <header>
                    <section className="back-btn">
                        <p><span><KeyboardBackspaceIcon style={{ marginRight: '1rem' }} /></span> Back</p>
                    </section>
                    <section className='title'>
                        <p>Wednesday 04 January 2023, 21:35</p>
                        <h4>Tournament Information: Asian 6-Red Pool Championship 2022</h4>
                    </section>
                </header>
                <main>
                    <section className='image-section'>
                        <img src={Partnews} width={'100%'} ></img>
                    </section>

                    <section className='event-section'>
                        <section className='left'>
                            <div className="newspage_share_links" style={{ display: "flex", flexDirection: "column", width: "27%" }}>

                                <ul style={{ listStyleType: "none", width: "100%" }}>
                                    <li style={{ marginBottom: "1.2rem", fontWeight: "600" }}><Visibility/>Views: newsData.views</li>
                                    <li className="shareLinks">
                                        <PrintIcon onClick={() => window.print()} style={{ fontSize: "3rem", marginRight: "1rem" }}></PrintIcon>
                                        <MailOutlineIcon onClick={() => window.location.href = "mailto: ibsfinfo@gmail.com "} style={{ fontSize: "3rem", marginRight: "1rem" }} ></MailOutlineIcon>
                                        {/* <FacebookShareButton url={shareUrl} quote={"oo"}>  <FacebookIcon style={{ fontSize: "3rem", marginRight: "1rem" }} round={true} /></FacebookShareButton> */}
                                        <InstagramIcon onClick={() => { window.open('http://www.instagram.com', 'blank') }} style={{ cursor: "pointer", marginRight: "1rem", fontSize: "3rem" }} />
                                        {/* <TwitterShareButton url={shareUrl}> <TwitterIcon style={{ fontSize: "3rem", marginRight: "1rem" }} round={true} /> </TwitterShareButton> */}
                                        {/* <WhatsappShareButton url={shareUrl} separator=":: "> <WhatsappIcon style={{ fontSize: "3rem", marginRight: "1rem" }} round={true} /></WhatsappShareButton> */}
                                    </li>
                                </ul>

                                <hr></hr>

                                <div className="author">

                                    <Avatar style={{ width: "6rem", height: "6rem" }} alt="Remy Sharp" src={``} />

                                    <h5>newsData.writer_data.name, newsData.writer_data.position</h5>
                                </div>

                                <hr></hr>

                                <div className="news_tags">
                                    {/* {
                                        newsData && newsData.tags_name.map((data, index) =>
                                        (
                                            <>
                                                <p onClick={() => history.push(`/newsbytag/${data}`)} key={index} style={{ cursor: "pointer", width: "fit-content", fontSize: "1.3rem", padding: "0.7rem", color: "white", fontWeight: "500", wordBreak: "break-all", backgroundColor: "#0da1ff", marginRight: "0.5rem" }}>{data}</p>
                                            </>

                                        )
                                        )} */}
                                        <p>Hello world</p>

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