import React from "react";
import { useNavigate } from "react-router";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import carouselEx from "../../assets/carouselEx.jpg";

import "./Executive.css";

const Card = props => {
  const history = useNavigate();
  // const page = props.page;

  props = props?.data;
  return (
    <Box
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="executive-outer"
    >
      <section
        className="executive-image"
        style={{ backgroundImage: `url(${carouselEx})` }}
      ></section>
      <section className="executive-content">
        <h6>President</h6>
        <h5> dfk dfpd f</h5>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <MailOutlineIcon />
        </div>
      </section>
    </Box>
  );
};

export default Card;
