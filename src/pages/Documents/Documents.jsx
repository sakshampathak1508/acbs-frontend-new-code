import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import axios from "../../axios";
import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { Toolbar } from "../../layout/BaseLayout.styles";

import "./Documents.css";

const Documents = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("api/documents")
      .then(response => {
        setData(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Downloads</title>
      </Helmet>

      <Toolbar>
        <div className="download">
          <h4 className="headline">Downloads </h4>

          {data !== null && data.length != 0 ? (
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
                  <h3>Nothing Found...</h3>
                </div>
              )}
            </>
          )}
        </div>
      </Toolbar>
      {data !== null && <Footer />}
    </>
  );
};

export default Documents;
