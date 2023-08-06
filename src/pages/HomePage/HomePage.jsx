import React from "react";
import Slider from "react-slick";

import EventIcon from "@mui/icons-material/Event";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, LinearProgress, Stack, useMediaQuery } from "@mui/material";

import useSWR from "swr";

import logo from "../../assets/acbs.png";
import axios from "../../axios";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Carousel from "../../component/carousel/Carousel";
import CarouselWrapper from "../../component/carousel/CarouselWrapper";
import EventList from "../../component/EventList/EventList";
import Footer from "../../component/Footer/Footer";
import Twitter from "../../component/Twitter/Twitter";
import Widget from "../../component/widget/widget";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:769px)");

  const fetcher = async url => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      const mergedArray = data.events.reduce((acc, curr, index) => {
        acc.push({ event: curr });
        if (data.news[index]) {
          acc.push({ news: data.news[index] });
        }
        return acc;
      }, []);

      if (data?.news?.length > data?.events?.length) {
        mergedArray.push(
          ...data.news.slice(data.events?.length).map(news => ({ news }))
        );
      }
      return mergedArray;
    } catch (error) {
      // Handle error
    }
  };

  const { data: latestNews, isLoading: loading1 } = useAPI("news/latest");
  const { data: frontEvents, isLoading: loading2 } = useAPI("events/front");
  const { data: sponsors } = useAPI("api/sponsers");
  let { data: carouselDataBefore, isLoading: loading3 } = useSWR(
    "api/featured",
    fetcher
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile
      ? 1
      : !loading1 && latestNews?.length <= 2
      ? latestNews?.length
      : 3,
  };

  return (
    <>
      <SEO title="ACBS | Asian Confederation of Billiard Sports" />
      {!loading1 && !loading2 && !loading3 ? (
        <section>
          <Carousel data={carouselDataBefore} />
          <Container maxWidth="lg">
            <div>
              <div className="middle_widgets">
                <div>
                  <Widget
                    Icon={EventIcon}
                    link="champion"
                    text="snooker - Billiards"
                  />
                  <EventList
                    data={frontEvents && frontEvents["snooker-billiards"]}
                  />
                </div>
                <div>
                  <Widget Icon={EventIcon} link="champion" text="Pool" />
                  <EventList data={frontEvents?.pool} />
                </div>
                <div>
                  <Widget Icon={TwitterIcon} link="champion" text="Tweets" />
                  <Twitter />
                </div>
              </div>
            </div>
            <section className="latest-news">
              <h4 className="heading">Latest News</h4>
              <Slider arrows={false} {...settings}>
                {latestNews?.map(data => (
                  <ImageTitleDate
                    key={data.id}
                    views={data.views}
                    id={data.id}
                    slug={data.slug}
                    title={data.title}
                    timestamp={data.timestamp}
                    image={`${API_URL}${data.image}`}
                  />
                ))}
              </Slider>
            </section>
          </Container>
          <section style={{ background: "#F4f4f4", marginTop: "3rem" }}>
            <CarouselWrapper data={sponsors} />
          </section>
          <Footer />
        </section>
      ) : (
        <Stack
          sx={{
            position: "absolute",
            translate: "-50% -50%",
            left: "50%",
            top: "50%",
          }}
          gap={2}
        >
          <img src={logo} alt="ACBS" width={70} height={70} />
          <LinearProgress sx={{ width: 70 }} />
        </Stack>
      )}
    </>
  );
};

export default HomePage;
