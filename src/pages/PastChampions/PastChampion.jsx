import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import axios from "../../axios";
import ImageTitle from "../../component/card/ImageTitle";
import Footer from "../../component/Footer/Footer";
import { StateContext } from "../../StateProvider";
import "./PastChampion.css";

const PastChampion = props => {
  const { isLoading, setIsLoading } = useContext(StateContext);

  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("api/allchamps")
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Helmet>
        <title>Past champions</title>
      </Helmet>

      <div className="container past-champions">
        <div style={{ marginBottom: "2rem" }}>
          <h3 className="heading">Past champions</h3>
        </div>
        {data !== null && (
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
        )}
        {data !== null && data.length === 0 && (
          <div style={{ margin: "auto", width: "fit-content" }}>
            <h3 style={{ width: "fit-content" }}>Nothing Found...</h3>
          </div>
        )}
      </div>
      {data === null ? (
        <div
          id="loader"
          style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default PastChampion;
