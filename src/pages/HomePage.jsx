import React, { useEffect } from 'react';
import Header from '../component/header/header';
import ImageTitle from '../component/card/ImageTitle';
import Carousel from '../component/carousel/Carousel';
import ImageCard from "../component/card/Image"
import TitleCard from '../component/card/Title'
import ImageTitleDate from '../component/card/ImageTitleDate';
import Title from '../component/card/Title';
import CarouselWrapper from '../component/carousel/CarouselWrapper';
import Footer from '../component/Footer/Footer';
import './Homepage.css'
import axios from '../axios';

const HomePage = (props) => {

    useEffect(()=>
    {
        axios.get('news/all/')
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    } , [])
    return (
        <>
            <Header />
            <section>
                <Carousel />

                <main>
                    <section className='attractive-news'>
                        <div className='left-outer'>
                            <div className='left-inner'>
                                <h4 className='heading'><span></span> Popular</h4>
                                <div>
                                    <TitleCard />
                                    <TitleCard />
                                </div>
                            </div>
                        </div>

                        <div className='middle'>
                            <ImageCard />
                        </div>

                        <div className='right-outer'>
                            <div className='right-inner'>
                                <h4 className='heading'>Last News</h4>
                                <div>
                                    <ImageTitle />
                                    <ImageTitle />
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className='latest-news'>
                        <h4>Latest News</h4>
                        <div className='latest-news-container'>
                            <ImageTitleDate />
                            <ImageTitleDate />
                            <ImageTitleDate />

                        </div>
                    </section>

                    <section style={{ background: "#EBEBEB" ,marginTop:'2rem' }}>
                        <CarouselWrapper />
                    </section>
                </main>
                
            </section>

            <Footer>
                <Footer/>
            </Footer>
        </>
    );
};

export default HomePage;