import React from "react";
import { useNavigate } from "react-router";

import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import "./Members.css";
import { API_URL } from "../../constant/api";
// import { Box } from "@mui/material";

const Card = props => {
  const history = useNavigate();
  props = props?.data;
  return (
    <Box
      key={props.id}
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="members-outer"
    >
      <section
        className="members-image"
        style={{
          backgroundImage: `url(${API_URL}${props.flag})`,
        }}
      ></section>
      <section className="members-content">
        <h6> {props.name}</h6>
        <p>
          <strong>President:</strong> {props.president}
        </p>
        <div className="icons">
          {props.email && (
            <MailOutlineIcon
              onClick={() => {
                window.open(props.email, "blank");
              }}
            />
          )}
          {props.contact_number && (
            <CallOutlinedIcon
              onClick={() => {
                window.open(props.contact_number, "blank");
              }}
            />
          )}
          {props.site && (
            <LanguageOutlinedIcon
              onClick={() => {
                window.open(props.site, "blank");
              }}
            />
          )}
        </div>
      </section>
    </Box>
  );
};

export default Card;
