import React from "react";
import { useNavigate } from "react-router";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import carouselEx from "../../assets/carouselEx.jpg";

import "./Members.css";
// import { Box } from "@mui/material";

const Card = props => {
  const history = useNavigate();
  // const page = props.page;

  props = props?.data;
  return (
    <Box
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="members-outer"
    >
      <section
        className="members-image"
        style={{ backgroundImage: `url(${carouselEx})` }}
      ></section>
      <section className="members-content">
        <h6>Bowling , Billiard & Boules Federation of I.R.Iran</h6>
        <p>
          <strong>President:</strong> dfk dfpd f
        </p>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <MailOutlineIcon />
          <MailOutlineIcon />
          <MailOutlineIcon />
        </div>
      </section>
    </Box>
  );
};

export default Card;
