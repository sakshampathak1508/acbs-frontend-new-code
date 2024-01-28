import React from "react";

import { Box, CircularProgress, Container } from "@mui/material";

import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./Rules.css";

const Rules = () => {
  const { data, isLoading } = useAPI("/api/rule/");

  return (
    <Box className="rules">
      <SEO title={`ACBS | Rules`} />
      <Container maxWidth="lg">
        <h4 className="heading">Rules</h4>
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
        ) : data ? (
          <Box
            className="contact_responsive"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <h4 style={{ color: "var(--red)" }}>Address</h4>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </Box>
        ) : (
          <div style={{ textAlign: "center", margin: "6rem auto" }}>
            <h3>Nothing Found...</h3>
          </div>
        )}
      </Container>
      {!isLoading && <Footer />}
    </Box>
  );
};

export default Rules;
