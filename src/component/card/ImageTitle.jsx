import React from "react";
import { useNavigate } from "react-router";

import { Box, CardActionArea } from "@mui/material";

import { API_URL } from "../../constant/api";

import "./ImageTitle.css";

const ImageTitle = props => {
  const navigate = useNavigate();
  const page = props.page;

  props = props?.data;
  return (
    <Box
      onClick={() => navigate(`/past-champion/${props?.id}/${props?.slug}`)}
      className="imageTitle-card_body"
      style={
        page === "main" && window.innerWidth > 768
          ? { maxWidth: "30rem", marginRight: "1.2rem", overflow: "hidden" }
          : { overflow: "hidden" }
      }
    >
      <CardActionArea sx={{ height: "100%" }}>
        <Box
          className="card_image"
          style={{
            backgroundImage: `url(${API_URL}${props.image})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box className="card_container">
          <h4 className="title">{props.name}</h4>
          <p>{props.caption}</p>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default ImageTitle;
