import React from "react";
import { useNavigate } from "react-router";

import { Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import { API_URL } from "../../constant/api";
import { StyledLink } from "../styles/Styles";
import "./Executive.css";

const Card = props => {
  const history = useNavigate();
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
          backgroundImage: `url(${API_URL}${props.image})`,
        }}
      ></section>
      <section className="executive-content">
        <h6>{props.title}</h6>
        <h5> {props.name}</h5>
        <div className="icons">
          {props.facebook && (
            <StyledLink href={props.facebook} target="_blank">
              <FacebookIcon />
            </StyledLink>
          )}
          {props.twitter && (
            <StyledLink href={props.twitter} target="_blank">
              <Twitter />
            </StyledLink>
          )}
          {props.instagram && (
            <StyledLink href={props.instagram} target="_blank">
              <InstagramIcon />
            </StyledLink>
          )}
          {props.email && (
            <StyledLink href={"mailto:" + props.email} target="_blank">
              <MailOutlineIcon />
            </StyledLink>
          )}
        </div>
      </section>
    </Box>
  );
};

export default Card;
