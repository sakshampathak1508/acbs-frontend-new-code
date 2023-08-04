import React from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import { Box, CircularProgress, Container } from "@mui/material";

import Footer from "../../component/Footer/Footer";
import { StyledLink } from "../../component/styles/Styles";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./Contact.css";
const Contact = () => {
  const { data, isLoading } = useAPI("api/contact/");

  return (
    <Box className="contact-us">
      <SEO title={`ACBS | Contact Us`} />
      <Container maxWidth="lg">
        <h4 className="heading">Contact ACBS</h4>
        {!isLoading && (
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
                <div dangerouslySetInnerHTML={{ __html: data?.address }}></div>
              </Box>

              <div
                className="contact_responsive"
                style={
                  data?.bank_details.length === 0
                    ? { display: "none" }
                    : { display: "flex", flexDirection: "column" }
                }
              >
                <h4 style={{ color: "var(--red)" }}>Bank Details</h4>
                <p>{data.bank_details}</p>
              </div>
            </div>
            <hr></hr>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "650px",
                gap: "0.5rem",
              }}
            >
              {data.name1 && (
                <Box className="name-email-person">
                  <h4 className="item">
                    <PersonIcon /> {data.name1}
                  </h4>
                  <Box className="item item2">
                    <MailOutlineIcon />
                    <StyledLink href={"mailto:" + data.email1}>
                      <h4 className="text">{data.email1}</h4>
                    </StyledLink>
                  </Box>
                </Box>
              )}
              {data.name2 && (
                <Box className="name-email-person">
                  <h4 className="item">
                    <PersonIcon />
                    {data.name2}
                  </h4>
                  <Box className="item item2">
                    <MailOutlineIcon />
                    <StyledLink href={"mailto:" + data.email2}>
                      <h4 className="text">{data.email2}</h4>
                    </StyledLink>
                  </Box>
                </Box>
              )}
              {data.name3 && (
                <Box className="name-email-person">
                  <h4 className="item">
                    <PersonIcon />
                    {data.name3}
                  </h4>
                  <Box className="item item2">
                    <MailOutlineIcon />
                    <StyledLink href={"mailto:" + data.email3}>
                      <h4 className="text">{data.email3}</h4>
                    </StyledLink>
                  </Box>
                </Box>
              )}
              {data.name4 && (
                <Box className="name-email-person">
                  <h4 className="item">
                    <PersonIcon />
                    {data.name4}
                  </h4>
                  <Box className="item item2">
                    <MailOutlineIcon />
                    <StyledLink href={"mailto:" + data.email4}>
                      <h4 className="text">{data.email4}</h4>;
                    </StyledLink>
                  </Box>
                </Box>
              )}
            </div>
            <br></br>
            <br></br>
          </div>
        )}
      </Container>
      {isLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <Footer />
      )}
    </Box>
  );
};

export default Contact;
