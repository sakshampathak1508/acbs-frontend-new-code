import React from "react";
// import { useMediaQuery } from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router";

import { Box } from "@mui/material";

import carouselEx from "../../assets/carouselEx.jpg";
import "./ImageTitle.css";

const Card = props => {
  const history = useNavigate();
  const page = props.page;

  props = props?.data;
  return (
    <Box
      onClick={() => history.push(`/news/${props?.id}/${props?.slug}`)}
      className="imageTitle-card_body"
      style={
        page === "main" && window.innerWidth > 768
          ? { maxWidth: "30rem", marginRight: "1.2rem", overflow: "hidden" }
          : { overflow: "hidden" }
      }
    >
      <Box
        className="card_image"
        style={{
          backgroundImage: `url(${carouselEx})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box className="card_container">
        <p
          style={{
            marginBottom: "0rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {"props?.cf ldpd dsd d,d skdmam dlakmd saml dka da dakd slad "}
        </p>
      </Box>
    </Box>
  );
};

export default Card;
