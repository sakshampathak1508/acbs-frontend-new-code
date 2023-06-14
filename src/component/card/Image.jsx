import React from "react";
import { useNavigate } from "react-router";

import { Box, useMediaQuery } from "@mui/material";

import carouselEx from "../../assets/carouselEx.jpg";

import "./Image.css";

const ImageCard = props => {
  const page = props.page;
  const navigate = useNavigate();
  useMediaQuery("(min-width:600px)");

  props = props?.data;
  return (
    <Box
      onClick={() => navigate(`/news/${props?.id}/${props?.slug}`)}
      className="imagecard"
      style={
        page === "main" && window.innerWidth > 768
          ? { backgroundImage: `url(${carouselEx})`, overflow: "hidden" }
          : { backgroundImage: `url(${carouselEx})`, overflow: "hidden" }
      }
    >
      <Box className="imagecardBg"></Box>
      <h4 className="title">Title here</h4>
      <Box className="Imagecard-container">
        <h4> Officially ACBS is the Pool Governing body in Asia </h4>
        <p
          style={{
            marginBottom: "0rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Date: 25dec 2001
        </p>
      </Box>
    </Box>
  );
};

export default ImageCard;
