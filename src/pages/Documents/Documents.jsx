import React from "react";

import DownloadIcon from "@mui/icons-material/Download";
import { CircularProgress, Container, Link } from "@mui/material";

import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

import "./Documents.css";

const Documents = () => {
  const { data, isLoading } = useAPI("api/documents/");

  return (
    <>
      <SEO title="ACBS | Documents" />

      <Container maxWidth="xl">
        <div className="download">
          <h4 className="headline">Downloads </h4>

          {!isLoading && data ? (
            <section>
              <p>
                Relevant Documents related to Asian Confederation of Billiard
                Sports
              </p>

              <div>
                {data.map(row => (
                  <Link
                    sx={{
                      fontSize: "1.2rem",
                      color: "var(--red)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "var(--red)",
                        textDecoration: "underline",
                      },
                    }}
                    href={`${API_URL}${row.file}`}
                    download
                    target="_blank"
                    rel="noreferrer"
                    key={row.id}
                  >
                    <p>
                      {row.name} <DownloadIcon />
                    </p>
                  </Link>
                ))}
              </div>
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
                <div style={{ textAlign: "center", margin: "6rem auto" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
      {!isLoading && <Footer />}
    </>
  );
};

export default Documents;
