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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './AllNews.css'

const AllNews = (props) => {
    return (
        <div className='news-page'>
            <Header />
            <section>
                <Carousel />

                <main>

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

                        </div>
                        <Stack spacing={2}>
                            <Pagination count={4} variant="outlined" shape="rounded" sx={{margin:'auto'}}/>
                        </Stack>
                    </section>
                </main>

            </section>

            <Footer>
            </Footer>
        </div>
    );
};

export default AllNews;