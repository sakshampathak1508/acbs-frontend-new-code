import React from "react";
import { useNavigate } from "react-router";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, useMediaQuery } from "@mui/material";

import moment from "moment";

// import carouselEx from "../../assets/carouselEx.jpg";

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
  console.log(id, slug);
  // const page = props.page;
  // const baseUrl = "https://sakshampathak.pythonanywhere.com/";
  const isMobile = useMediaQuery("(max-width:769px)");
  // console.log(props.width, `${props.width}`);
  // props = props?.data;
  return (
    <Box
      sx={{ marginBottom: "10px", p: 0, ...(!isMobile && { maxWidth }) }}
      onClick={() => navigate(`/news/${id}/${slug}`)}
      className="imageTitleDate-card_body"
      key={id}
    >
      <Box
        className="card_image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box className="card_container">
        <p
          style={{
            marginBottom: "0rem",
            textAlign: "start",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {/* {"props?.cf dkm dmkwedmw wmdkmwd kwk wm d lsmd msw d"} */}
          {title}
          {title?.length === 60 && <span>....</span>}
        </p>
        <Box className="dateviews">
          <p className="time">{moment(timestamp).format("MMMM d, YYYY")}</p>
          <Box className="views">
            <VisibilityIcon fontSize="20px" />
            <p>{views}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageTitleDate;
