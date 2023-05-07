import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import "./widget.css";
// import { IoIosArrowForward } from "react-icons/io";

const Widget = ({ text, Icon, link }) => {
  const navigate = useNavigate();
  return (
    <div className="middle_widget_header">
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Icon style={{ fontSize: "1.1rem" }} /> {text}
      </h3>
      {/* {text === "FUTURE CHAMPIONSHIPS" && ( */}
      {/* <Typography
        sx={{
          fontSize: "0.4rem",
          display: "flex",
          gap: "3px",
          alignItems: "center",
          cursor: "pointer",
        }}
        component="p"
        // style={{ cursor: "pointer" }}
        onClick={() => navigate(`/${link}`)}
      >
        View All <ArrowForwardIosIcon sx={{ mb: "2px", fontSize: "0.75rem" }} />
      </Typography> */}
      {/* } */}
    </div>
  );
};

export default Widget;
