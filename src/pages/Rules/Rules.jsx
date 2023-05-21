import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import animationData from "../../assets/search.json";
import axios from "../../axios";
import Footer from "../../component/Footer/Footer";
import { Toolbar } from "../../layout/BaseLayout.styles";
import "./Rules.css";

const Rules = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("api/rule")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Box className="rules">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rules ACBS</title>
      </Helmet>
      <Toolbar>
        <Box sx={{ width: "100%" }}>
          <h4 className="heading">Rules</h4>
          {data !== null && data.content !== undefined ? (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                <Box
                  className="contact_responsive"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <h4 style={{ color: "var(--red)" }}>Address</h4>
                  <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </Box>
              </div>
            </div>
          ) : (
            data !== null && (
              <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                <h3>Nothing Found...</h3>
              </div>
            )
          )}
        </Box>
      </Toolbar>
      {data === null ? (
        <div
          id="loader"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            style={{ maxWidth: "650px" }}
            animationData={searchAnimation}
            loop={true}
          />
        </div>
      ) : (
        <Footer />
      )}
    </Box>
  );
};

export default Rules;
