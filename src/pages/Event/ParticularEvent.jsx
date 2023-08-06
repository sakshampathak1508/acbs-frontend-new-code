import React from "react";
import { useParams } from "react-router";

import AttachmentIcon from "@mui/icons-material/Attachment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SportsIcon from "@mui/icons-material/Sports";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import { styled, Link, Box, Container } from "@mui/material";

import Lottie from "lottie-react";
import moment from "moment";

import searchAnimation from "../../assets/search.json";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";
import "./ParticularEvent.css";

const ParticularEvent = () => {
  const { id } = useParams();
  const StyledLink = styled(Link)(() => ({
    all: "unset",
    display: "flex",
    padding: "0.8rem",
    fontSize: "1.1rem",
    border: "1px solid var(--blue)",
    borderRadius: "4px",
    cursor: "pointer",
    margin: 0,
    "&:hover": {
      color: "var(--blue)",
      border: "1px solid var(--black)",
    },
  }));

  const { data, isLoading } = useAPI(`events/?id=${id}`);

  return (
    <>
      {!isLoading && data && (
        <>
          <SEO title={`Event | ${data.name}`} />
          <Container maxWidth="lg">
            <Box className="event-page">
              <main>
                <h2>{data.name}</h2>
                <section className="event-content">
                  <section
                    className="left-container"
                    dangerouslySetInnerHTML={{
                      __html: data.content1 + data.content2,
                    }}
                  ></section>
                  <section className="right-container">
                    <section className="top">
                      <div className="location">
                        <h4>Location</h4>
                        <h5>{data.location}</h5>
                      </div>

                      <div className="venue">
                        <h4>Venue</h4>
                        <h5>{data.venue}</h5>
                        {/* <label>Photographs</label> */}
                      </div>

                      <div className="date">
                        <div className="start-date">
                          <h4>Start Date</h4>
                          <h5>
                            {moment(data.start_date).format("MMMM DD, YYYY")}
                          </h5>
                        </div>

                        <div className="end-date">
                          <h4>End Date</h4>
                          <h5>{moment(data.end).format("MMMM DD, YYYY")}</h5>
                        </div>
                      </div>
                    </section>

                    <section className="bottom">
                      <h4>Links</h4>
                      <div className="links-icon">
                        {data.groups && (
                          <StyledLink href={data.groups} target="_blank">
                            Groups &nbsp; <span>{<SportsIcon />}</span>
                          </StyledLink>
                        )}

                        {data.knockouts && (
                          <StyledLink href={data.knockouts} target="_blank">
                            Knockouts &nbsp;{" "}
                            <span>{<SportsKabaddiIcon />}</span>
                          </StyledLink>
                        )}
                        {data.details && (
                          <StyledLink href={data.details} target="_blank">
                            Details &nbsp;<span>{<AttachmentIcon />}</span>
                          </StyledLink>
                        )}
                        {data.live && (
                          <StyledLink href={data.live} target="_blank">
                            Live&nbsp; <span>{<LiveTvIcon />}</span>
                          </StyledLink>
                        )}

                        {data.photographs && (
                          <StyledLink href={data.photographs} target="_blank">
                            Photographs &nbsp;{" "}
                            <span>{<InsertPhotoIcon />}</span>
                          </StyledLink>
                        )}
                        {data.video && (
                          <StyledLink href={data.video} target="_blank">
                            Video &nbsp;<span>{<PlayCircleIcon />}</span>
                          </StyledLink>
                        )}
                      </div>
                    </section>
                  </section>
                </section>
              </main>
            </Box>
          </Container>
        </>
      )}
      {isLoading ? (
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
            loop={true}
          />
        </div>
      ) : (
        <Footer></Footer>
      )}
    </>
  );
};

export default ParticularEvent;
