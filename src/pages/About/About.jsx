import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import axios from "../../axios";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import * as Styled from "../../layout/BaseLayout.styles";

import "./About.css";

const AboutAcbs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("api/about-us").then(res => {
      setData(res.data);
    }).catch;
  }, []);

  return (
    <>
      <SEO
        title="ACBS | About"
        description="The Asian Confederation of Billiard Sports (ACBS) is an organization that governs non-professional snooker and English billiards in the asian region.
                The Asian Billiards & Snooker Federation (ABSF), now renamed the Asian Confederation of Billiards Sports (ACBS), was officially inaugurated in 1984 with eight founding member countries, of which Malaysia was one."
      />

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
