import React from "react";
import Slider from "react-slick";

import { Box } from "@mui/material";

import "./CarouselWrapper.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../constant/api";

const CarouselWrapper = ({ data }) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box className="carouselwrapper_container">
      <Slider style={{ height: "100%", overflow: "hidden" }} {...setting}>
        {data &&
          data.map((val, index) => (
            <Box
              className="slide_image"
              key={index}
              sx={{ maxWidth: "150px", cursor: "pointer", margin: "auto" }}
              onClick={() => window.open(val.url, "_blank")}
            >
              <img src={`${API_URL}/${val.image}`} alt="sponsor" />
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default CarouselWrapper;
