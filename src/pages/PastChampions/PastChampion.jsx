import React from "react";

import { Box, CircularProgress, Container } from "@mui/material";

import ImageTitle from "../../component/card/ImageTitle";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";
import "./PastChampion.css";

const PastChampion = () => {
  const { data, isLoading } = useAPI("api/allchamps/");

  return (
    <>
      <SEO title="ACBS | Past Champions" />

      <Container maxWidth="xl">
        <Box className="past-champions">
          <div style={{ marginBottom: "2rem" }}>
            <h3 className="heading">Past champions</h3>
          </div>
          {!isLoading && data ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              {data.map(data => (
                <ImageTitle data={data} key={data.id} />
              ))}
            </div>
          ) : !isLoading ? (
            <div style={{ textAlign: "center", margin: "6rem auto" }}>
              <h3>Nothing Found...</h3>
            </div>
          ) : (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}
            >
              <CircularProgress />
            </div>
          )}
        </Box>
      </Container>
      {!isLoading && <Footer />}
    </>
  );
};

export default PastChampion;
