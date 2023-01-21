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
import './ParticularNews.css'

const ParticularNews = (props) => {
    return (
        <div className='particular-news-page'>
            <Header />
            <main>
                <header>
                    <section class="back-btn">
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
                            <p>kdfodkfmkls fmds f msflsml clk skckldmcmkslcldmf ls flcsl cf s m l f l s m f l s l;c ls clslfc lslfmdk fkls cl s l k m l k m s k lsk cksklm ck;lvs  csf sl fls lf ls fmls f</p>
                        </section>

                        <section className='right'>
                            <div className='right-inner'>
                                <h4 className='heading'>Latest News</h4>
                                <div>
                                    <ImageTitle />
                                    <ImageTitle />
                                </div>
                            </div>
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
                    <p> <span>Next </span><strong>(Tournament Information: Asian...)</strong> <span><KeyboardBackspaceIcon style={{ marginRight: '1rem', transform:'rotateY(180deg)' }} /></span></p>
                    </section>

                </main>

            </main>

            <Footer />
        </div>
    );
};

export default ParticularNews;