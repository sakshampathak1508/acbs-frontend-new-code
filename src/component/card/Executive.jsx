import React from "react";
import { useNavigate } from "react-router";

import { Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import carouselEx from "../../assets/carouselEx.jpg";

import "./Executive.css";

const Card = props => {
  const history = useNavigate();
  // const page = props.page
  props = props?.data;
  return (
    <Box
      key={props.id}
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="executive-outer"
    >
      <section
        className="executive-image"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_REACT_APP_API_ENDPOINT}${
            props.image
          })`,
        }}
      ></section>
      <section className="executive-content">
        <h6>{props.title}</h6>
        <h5> {props.name}</h5>
        <div className="icons">
          {props.facebook && (
            <FacebookIcon
              onClick={() => {
                window.open(props.facebook, "blank");
              }}
            />
          )}
          {props.instagram && (
            <InstagramIcon
              onClick={() => {
                window.open(props.instagram, "blank");
              }}
            />
          )}
          {props.email && (
            <MailOutlineIcon
              onClick={() => {
                window.open(props.email, "blank");
              }}
            />
          )}
          {props.twitter && (
            <Twitter
              onClick={() => {
                window.open(props.twitter, "blank");
              }}
            />
          )}
        </div>
      </section>
    </Box>
  );
};

export default Card;
