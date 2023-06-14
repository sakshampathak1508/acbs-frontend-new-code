import React from "react";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";
import * as Styled from "../../layout/BaseLayout.styles";

import "./About.css";
import { Box, CircularProgress, Container } from "@mui/material";

const AboutAcbs = () => {
  const { data, isLoading } = useAPI("api/about-us/");

  return (
    <>
      <SEO
        title="ACBS | About"
        description="The Asian Confederation of Billiard Sports (ACBS) is an organization that governs non-professional snooker and English billiards in the asian region.
                The Asian Billiards & Snooker Federation (ABSF), now renamed the Asian Confederation of Billiards Sports (ACBS), was officially inaugurated in 1984 with eight founding member countries, of which Malaysia was one."
      />

      <Container maxWidth="xl">
        <Box className=" about-us">
          <h4 className="heading">About ACBS</h4>

          {!isLoading ? (
            <section className="">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </section>
          ) : (
            <>
              {isLoading ? (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "2rem",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )}
            </>
          )}
        </Box>
      </Container>
      {!isLoading && <Footer />}
    </>
  );
};

export default AboutAcbs;
