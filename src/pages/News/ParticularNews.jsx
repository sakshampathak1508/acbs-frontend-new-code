import React, { useEffect, useState, useRef, useContext } from "react";
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
import { Box, CircularProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Lottie from "lottie-react";
import moment from "moment";

import Partnews from "../../assets/partnews.png";
import searchAnimation from "../../assets/search.json";
import SearchIcon from "../../assets/searchIcon.png";
import axios from "../../axios";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/header";
import { API_URL } from "../../constant/api";
import { StateContext } from "../../StateProvider";

import "./ParticularNews.css";

const ParticularNews = props => {
  const [state, setState] = React.useState({
    year: "",
    event: "",
    search: "",
  });
  const { isLoading, setIsLoading } = useContext(StateContext);

  const shareUrl = `https://ibsf.info/news/`;
  const instaUrl = "http://www.instagram.com";
  const { id } = useParams();
  const yearRef = useRef();
  const baseUrl = API_URL;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`news/?id=${id}`).then(res => {
      setIsLoading(false);
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
    <>
      {!isLoading ? (
        <div className="particular-news-page">
          <main className="container">
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
                <img
                  src={baseUrl + state.event.image}
                  width={"100%"}
                  alt="News"
                />
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
                              (window.location.href =
                                "mailto: ibsfinfo@gmail.com ")
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
      ) : (
        <div
          id="loader"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            style={{ maxWidth: "650px" }}
            animationData={searchAnimation}
            loop={true}
          />
        </div>
      )}
    </>
  );
};

export default ParticularNews;
