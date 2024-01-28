import React from "react";

import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import ExecutiveCard from "../../component/card/Executive";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./Executive.css";

const Executive = () => {
  const { data, isLoading: loading } = useAPI("/api/executives/");

  return (
    <>
      <SEO title="ACBS | Executives" />
      <Container maxWidth="lg">
        <div style={{ paddingTop: "1rem" }}>
          <Box sx={{ mb: "2rem" }}>
            <h4 className="executive-heading">EXECUTIVES</h4>
          </Box>

          {!loading && data ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {data.map((data, index) => (
                <ExecutiveCard data={data} key={index} />
              ))}
            </div>
          ) : (
            <>
              {loading ? (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <p>
                    <CircularProgress />
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: "center", margin: "6rem auto" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )}
            </>
          )}
        </div>
      </Container>

      {!loading && <Footer />}
    </>
  );
};

export default Executive;
