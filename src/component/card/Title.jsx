import React from "react";
import { useNavigate } from "react-router";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, useMediaQuery } from "@mui/material";

import "./Title.css";

const Title = props => {
  const history = useNavigate();
  const page = props.page;

  useMediaQuery("(min-width:600px)");

  props = props?.data;
  return (
    <Box
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="title-card_body"
      style={
        page === "main" && window.innerWidth > 768
          ? { maxWidth: "30rem", marginRight: "1.2rem", overflow: "hidden" }
          : { overflow: "hidden" }
      }
    >
      <Box className="card_container">
        <h4>Tournament Info: Asian 6-</h4>
        <p
          className="title"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {"Asian Confederation of Billiard "}
          {props?.cf.length === 60 && <span>....</span>}
        </p>
        <Box className="dateviews">
          <p className="time">2 hours ago</p>
          <Box className="views">
            <VisibilityIcon fontSize="20px" />
            <p>123</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Title;
