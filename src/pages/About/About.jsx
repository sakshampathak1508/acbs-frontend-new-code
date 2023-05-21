import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, FormControl, MenuItem, Select, Toolbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Lottie from "lottie-react";

import image1 from "../../assets/cardEx.png";
import searchAnimation from "../../assets/search.json";
import image2 from "../../assets/sponsor1.png";
import axios from "../../axios";
import ExecutiveCard from "../../component/card/Executive";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/header";
import * as Styled from "../../layout/BaseLayout.styles";
import { StateContext } from "../../StateProvider";

import "./About.css";

const AboutAcbs = props => {
  const [data, setData] = useState(null);
  const [type, setTypes] = useState("news");

  const handleChange = event => {
    setTypes(event.target.value);
    setData([]);
  };

  useEffect(() => {
    axios
      .get("api/about-us")
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category | {type}</title>
      </Helmet>
      <Styled.Toolbar>
        <div
          className=" about-us"
          style={{ width: "100%", paddingTop: "1rem" }}
        >
          <h4 className="heading">About ACBS</h4>

          {data !== null && Object.entries(data).length !== 0 ? (
            <section className="">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </section>
          ) : (
            <>
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
                <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                  <h3>Nothing Found...</h3>{" "}
                </div>
              )}
            </>
          )}
        </div>
      </Styled.Toolbar>
      {data !== null && <Footer />}
    </>
  );
};

export default AboutAcbs;
