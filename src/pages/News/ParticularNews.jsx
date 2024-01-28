import React from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { Visibility } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PrintIcon from "@mui/icons-material/Print";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import Lottie from "lottie-react";
import moment from "moment";

import searchAnimation from "../../assets/search.json";
import Footer from "../../component/Footer/Footer";
import { StyledLink } from "../../component/styles/Styles";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./ParticularNews.css";

const ParticularNews = () => {
  const shareUrl = window.location.href;
  const twitterUrl = "https://twitter.com/ACBSport";
  const faceBookUrl = "https://www.facebook.com/acbsport/";
  const instaUrl = "https://www.instagram.com/acbsmedia/";
  const emailUrl = "";

  const subject = `ACBS | News Article`;
  const body = `Hi there! I found an interesting article on Asian Confederation of Billiard Sports(ACBS).
Check it out: ${shareUrl}`;

  const { id } = useParams();
  const baseUrl = API_URL;

  const { data, isLoading } = useAPI(`/news/?id=${id}`);

  return (
    <>
      {!isLoading ? (
        <>
          <SEO title={`News | ${data?.title}`} />
          <Container maxWidth="lg">
            <div className="particular-news-page">
              <header>
                <section className="title">
                  <h4 style={{ textAlign: "center" }}>{data?.title}</h4>
                  <p style={{ textAlign: "right" }}>
                    {moment(data?.timestamp).format(`MMMM DD, YYYY`)}
                  </p>
                </section>
              </header>
              <Box component="main">
                <section className="image-section">
                  <img src={baseUrl + data?.image} width="100%" alt="News" />
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
                          &nbsp; {data?.views}
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
                            <PrintIcon
                              onClick={() => window.print()}
                            ></PrintIcon>
                          </li>

                          <li>
                            <FacebookShareButton url={faceBookUrl} quote={"oo"}>
                              <FacebookIcon />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <WhatsappShareButton url={shareUrl} separator=":: ">
                              <WhatsAppIcon />
                            </WhatsappShareButton>
                          </li>
                          <li>
                            <TwitterShareButton url={twitterUrl}>
                              <TwitterIcon />
                            </TwitterShareButton>
                          </li>
                          <li>
                            <StyledLink href={instaUrl} target="_blank">
                              <InstagramIcon />
                            </StyledLink>
                          </li>
                          <li>
                            <StyledLink
                              href={`mailto:${emailUrl}?subject=${encodeURIComponent(
                                subject
                              )}&body=${encodeURIComponent(body)}`}
                              target="_blank"
                            >
                              <MailOutlineIcon />
                            </StyledLink>
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
                          src={baseUrl + data.writer_image}
                        />

                        <h6>
                          {data.writer_name}{" "}
                          <br />
                          {data.writer_title && ` ${data.writer_title}`}
                        </h6>
                      </div>
                    </div>
                  </section>

                  <section
                    className="right"
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  ></section>
                </section>
              </Box>
            </div>
          </Container>
        </>
      ) : (
        <div
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
            loop
          />
        </div>
      )}
      {!isLoading && <Footer />}
    </>
  );
};

export default ParticularNews;
