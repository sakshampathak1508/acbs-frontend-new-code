import React from "react";
import { useNavigate } from "react-router";
import { Link as RouteLink } from "react-router-dom";

import { Link, MenuItem, useMediaQuery } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import Carousel from "react-bootstrap/Carousel";

import { API_URL } from "../../constant/api";
import { StyledLink } from "../styles/Styles";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.css";

const ControlledCarousel = ({ data }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const history = useNavigate();

  return (
    <Carousel className="mainPage_carousel" interval={4000} indicators={false}>
      {data &&
        data.map((val, index) => (
          <Carousel.Item
            key={index}
            style={{
              height: isMobile ? "32vh" : "calc(100vh - 64px)",
              overflow: "hidden",
            }}
          >
            <img
              loading="lazy"
              className="d-block w-100"
              src={`${API_URL}${
                val.news ? val.news.image : val.event.event_banner
              }`}
              style={{ height: "100%", filter: "brightness(85%)" }}
              alt="Pre Slide"
            />

            <Carousel.Caption
              onClick={() => history.push(`/news`)}
              className="carousel_caption"
            >
              {/* <span></span> */}
              <h3> {val.news ? val.news.title : val.event.name}</h3>
              <div className="dropdown">
                <button className="info">
                  <RouteLink
                    style={{
                      all: "reset",
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    to={
                      val.news
                        ? `/news/${val.news.id}/${val.news.slug}`
                        : `/event/${val.event.id}/${val.event.slug}`
                    }
                  >
                    {val.news ? "Read More" : "Tournament Info"}
                  </RouteLink>
                </button>

                {val.event && (
                  <button className="groups dropbtn">
                    <FormControl
                      sx={{
                        m: 0,
                        b: 0,
                        width: "100%",
                        height: "100%",
                        padding: 0,
                      }}
                    >
                      <Select
                        value="Links"
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="Links">
                          <em>Links</em>
                        </MenuItem>
                        {val.event.groups && (
                          <MenuItem
                            sx={{ fontWeight: 700 }}
                            component={StyledLink}
                            href={val.event.groups}
                            target="_blank"
                          >
                            Groups
                          </MenuItem>
                        )}
                        {val.event.knockouts && (
                          <MenuItem
                            component={StyledLink}
                            href={val.event.knockouts}
                            target="_blank"
                          >
                            Knockouts
                          </MenuItem>
                        )}

                        {val.event.results && (
                          <MenuItem
                            component={StyledLink}
                            href={val.event.results}
                            target="_blank"
                          >
                            Results
                          </MenuItem>
                        )}
                        {val.event.live && (
                          <MenuItem
                            component={StyledLink}
                            href={val.event.live}
                            target="_blank"
                          >
                            Live
                          </MenuItem>
                        )}
                        {val.event.photographs && (
                          <MenuItem
                            component={StyledLink}
                            href={val.event.photographs}
                            target="_blank"
                          >
                            Photographs
                          </MenuItem>
                        )}
                        {val.event.video && (
                          <MenuItem
                            component={StyledLink}
                            href={val.event.video}
                            target="_blank"
                          >
                            Video
                          </MenuItem>
                        )}
                      </Select>
                      {/* <FormHelperText>Without label</FormHelperText> */}
                    </FormControl>
                  </button>
                )}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default ControlledCarousel;
