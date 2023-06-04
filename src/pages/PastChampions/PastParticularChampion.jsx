import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Lottie from "lottie-react";

import searchAnimation from "../../assets/search.json";
import axios from "../../axios";
import { API_URL } from "../../constant/api";
import "./PastParticularChampion.css";

const PastParticularChampion = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`api/champ/?id=${id}`).then(res => {
      setData(res.data);
    }).catch;
  }, [id]);

  return (
    <>
      {data !== null ? (
        <>
          {/* <Helmet>
            <title>Past champions | {data?.name}</title>
          </Helmet> */}

          <div className="container particular-champ">
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
          </div>
          <br></br>
        </>
      ) : (
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
      )}
    </>
  );
};

export default PastParticularChampion;
