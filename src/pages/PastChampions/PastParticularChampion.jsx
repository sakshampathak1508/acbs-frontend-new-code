import React from "react";
import { useParams } from "react-router-dom";

import { Box, Container } from "@mui/material";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./PastParticularChampion.css";

const PastParticularChampion = () => {
  const { id } = useParams();

  const { data, isLoading } = useAPI(`api/champ/?id=${id}`);

  return (
    <>
      {!isLoading && data ? (
        <>
          <SEO title={`Champion | ${data.name}`} />

          <Container maxWidth="xl">
            <Box className="particular-champ">
              <h2 className="title">{data.name}</h2>

              <section>
                <img
                  alt="champion"
                  src={`${API_URL}${data.image}`}
                  style={{ width: "100%", maxHeight: "100%" }}
                />

                <br></br>
                <br></br>

                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </section>
            </Box>
          </Container>
        </>
      ) : (
        <div
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
      )}
      {!isLoading && <Footer />}
    </>
  );
};

export default PastParticularChampion;
