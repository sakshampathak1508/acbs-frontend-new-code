import React from "react";
import { useNavigate } from "react-router";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, CardActionArea, useMediaQuery } from "@mui/material";

import moment from "moment";

import "./ImageTitleDate.css";

const ImageTitleDate = ({
  id,
  slug,
  title,
  timestamp,
  views,
  image,
  maxWidth,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:769px)");

  return (
    <Box
      sx={{ marginBottom: "10px", p: 0, ...(!isMobile && { maxWidth }) }}
      onClick={() => navigate(`/news/${id}/${slug}`)}
      className="imageTitleDate-card_body"
      key={id}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <Box
          className="card_image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box className="card_container">
          <p className="title">{title}</p>
          <Box className="dateviews">
            <p className="time">{moment(timestamp).format("MMMM d, YYYY")}</p>
            <Box className="views">
              <VisibilityIcon fontSize="20px" />
              <p>{views}</p>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default ImageTitleDate;
