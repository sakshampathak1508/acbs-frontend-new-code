import React from "react";
import { useNavigate } from "react-router";

import LocationOnIcon from "@mui/icons-material/Room";
import { Box, Typography, useMediaQuery } from "@mui/material";

import moment from "moment";

import "./EventImageTitle.css";
const EventImageTitle = props => {
  const navigate = useNavigate();
  const page = props.page;

  useMediaQuery("(min-width:600px)");
  const endPoint = props.endPoint;
  props = props?.data;
  return (
    <Box
      onClick={() => navigate(`/${endPoint}/${props?.id}/${props?.slug}`)}
      className="eventimageTitle-card_body"
      style={
        page === "main" && window.innerWidth > 768
          ? { maxWidth: "30rem", marginRight: "1.2rem", overflow: "hidden" }
          : { overflow: "hidden" }
      }
    >
      <Box
        className="card_image"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_REACT_APP_API_ENDPOINT}${
            props?.event_banner
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box className="card_container">
        <h4 style={{ marginBottom: "0rem", overflow: "hidden" }}>
          {props?.name}
          {props?.name?.length >= 40 && <span>....</span>}
        </h4>

        <Box className="location-date">
          <section className="location">
            <LocationOnIcon />
            <p>{props?.location}</p>
          </section>
          <section className="start-end-date">
            <Box className="start-date-fields">
              <Typography variant="label">Start Date</Typography>
              <span>{moment(props?.start_date).format("MMMM DD, YYYY")}</span>
            </Box>
            <Box className="end-date-fields">
              <Typography variant="label">End Date</Typography>
              <span>{moment(props?.end_date).format("MMMM DD, YYYY")}</span>
            </Box>
          </section>
        </Box>
      </Box>
    </Box>
  );
};

export default EventImageTitle;
