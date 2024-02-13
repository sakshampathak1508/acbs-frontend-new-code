import React from "react";
import { useParams } from "react-router-dom";

import { Box, Container } from "@mui/material";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./ext_event.css";

const ExternalEvent = () => {
  const { id } = useParams();

  const { data, isLoading } = useAPI(`/events/external/?id=${id}`);

  return (
    <>
      {!isLoading && data ? (
        <>

          <Container maxWidth="lg">
            <Box className="particular-champ">
              <h2 className="title">{data.name}</h2>

              <section>
                <img
                  alt="champion"
                  src={`${API_URL}${data.image}`}
                  style={{ width: "100%", maxHeight: "35rem" }}
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

export default ExternalEvent;
