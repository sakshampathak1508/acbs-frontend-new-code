import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Slider from "react-slick";

import { Visibility } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PrintIcon from "@mui/icons-material/Print";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import moment from "moment";

import Partnews from "../../assets/partnews.png";
import SearchIcon from "../../assets/searchIcon.png";
import axios from "../../axios";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/header";

import "./ParticularNews.css";

const ParticularNews = props => {
  const [state, setState] = React.useState({
    year: "",
    event: "",
    search: "",
  });
  const shareUrl = `https://ibsf.info/news/`;
  const instaUrl = "http://www.instagram.com";
  const { id } = useParams();
  const yearRef = useRef();
  const baseUrl = import.meta.env.VITE_REACT_APP_API_ENDPOINT;
  var totalSlides = 4;

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    sliderRef.current.slickPrev();
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };
  var settings = {
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true, // add this property
    // centerPadding: "50px", // add this property

    slidesToScroll: 1,
    afterChange: index => setCurrentIndex(index),
  };

  useEffect(() => {
    axios.get(`news/?id=${id}`).then(res => {
      console.log(res.data);
      setState(prev => ({ ...prev, ["event"]: res?.data }));
    });

    const currentyear = new Date().getFullYear();
    var select = yearRef?.current?.firstChild?.firstChild;

    while (select?.firstChild) {
      select.removeChild(select?.lastChild);
    }

    for (let i = currentyear; i >= 2010; i--) {
      let option = document.createElement("option");
      option.text = i.toString();
      option.value = i;
      select?.appendChild(option);
    }
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
  };

  return (
    <div className="particular-news-page">
      {/* {console.log(currentSlide)} */}
      <main className="container">
        {/* <header>
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
                </header> */}

        <header>
          <section className="title">
            <h4 style={{ textAlign: "center" }}>{state?.event?.title}</h4>
            <p style={{ textAlign: "right" }}>
              {moment(state?.event?.timestamp).format(`MMMM d, YYYY`)}
            </p>
          </section>
        </header>
        <Box component={"main"}>
          <section className="image-section">
            <img src={baseUrl + state.event.image} width={"100%"} alt="News" />
          </section>

          <section className="event-section">
            <section className="left">
              <div
                className="newspage_share_links"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="links"
                  style={{ listStyleType: "none", width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    <Visibility style={{ fontSize: "1.3rem" }} />
                    &nbsp; {state?.event?.views}
                  </div>
                  <ul
                    className="shareLinks"
                    style={{
                      display: "flex",
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      flexWrap: "wrap",
                      gap: "1rem",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <li>
                      <PrintIcon onClick={() => window.print()}></PrintIcon>
                    </li>
                    <li>
                      <MailOutlineIcon
                        onClick={() =>
                          (window.location.href = "mailto: ibsfinfo@gmail.com ")
                        }
                      />
                    </li>

                    <li>
                      <FacebookShareButton url={shareUrl} quote={"oo"}>
                        <FacebookIcon round={true} />
                      </FacebookShareButton>
                    </li>

                    <li>
                      <InstagramIcon
                        onClick={() => {
                          window.open(instaUrl, "blank");
                        }}
                      />
                    </li>
                    <li>
                      <TwitterShareButton url={shareUrl}>
                        <TwitterIcon round={true} />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <WhatsappShareButton url={shareUrl} separator=":: ">
                        <WhatsAppIcon round={true} />
                      </WhatsappShareButton>
                    </li>
                  </ul>
                </div>

                <div className="author">
                  <h4>Author</h4>
                  <Avatar
                    style={{
                      width: "6rem",
                      height: "6rem",
                      marginBottom: "1rem",
                    }}
                    alt="Remy Sharp"
                    src={baseUrl + state.event.writer_image}
                  />

                  <h6>
                    {state.event.writer_name}{" "}
                    {state.event.writer_title &&
                      `, ${state.event.writer_title}`}
                  </h6>
                </div>
              </div>
            </section>

            <section
              className="right"
              dangerouslySetInnerHTML={{ __html: state?.event?.content }}
            ></section>
          </section>
        </Box>
      </main>

      <Footer />
    </div>
  );
};

export default ParticularNews;
