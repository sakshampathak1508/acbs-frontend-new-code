import React from "react";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";

import { API_URL } from "../../constant/api";
import { StyledLink } from "../styles/Styles";
import "./Members.css";

const Card = props => {
  props = props?.data;

  return (
    <Box key={props.id} className="members-outer">
      <section
        className="members-image"
        style={{
          backgroundImage: `url(${API_URL}${props.flag})`,
        }}
      ></section>
      <section className="members-content">
        <h6> {props?.name}</h6>
        {props?.person1 && (
          <span>
            <strong>{props.position1}:</strong> {props.person1}
          </span>
        )}
        {props?.person2 && (
          <span>
            <strong>{props.position2}:</strong> {props.person2}
          </span>
        )}

        <div className="icons">
          {props.email && (
            <StyledLink href={"mailto:" + props.email} target="_blank">
              <MailOutlineIcon />
            </StyledLink>
          )}
          {props.contact_number && (
            <StyledLink href={"tel:" + props.contact_number} target="_blank">
              <CallOutlinedIcon />
            </StyledLink>
          )}
          {props.site && (
            <StyledLink href={props.site} target="_blank">
              <LanguageOutlinedIcon />
            </StyledLink>
          )}
        </div>
      </section>
    </Box>
  );
};

export default Card;
