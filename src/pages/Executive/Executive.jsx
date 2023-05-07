import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";

import image1 from "../../assets/cardEx.png";
import image2 from "../../assets/sponsor1.png";
import ExecutiveCard from "../../component/card/Executive";
import Header from "../../component/header/header";

import "./Executive.css";

const Executive = props => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ibsf.info/api/executives/")
      .then(res => {
        setData(res.data.data);
        setloading(false);
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Executives</title>
                
            </Helmet> */}

      <Header active="aboutus" />
      <div className="ui container" style={{ margin: "auto" }}>
        <div style={{ width: "max-content" }}>
          <h1 className="executive-heading">EXECUTIVES</h1>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <ExecutiveCard data={{ image: image1 }} />
          <ExecutiveCard data={{ image: image2 }} />
          <ExecutiveCard data={{ image: image1 }} />
          <ExecutiveCard data={{ image: image1 }} />
          <ExecutiveCard data={{ image: image2 }} />
        </div>

        {data.length != 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.map((data, index) => (
              <>
                <ExecutiveCard data={data} />
              </>
            ))}
          </div>
        ) : (
          <>
            {loading ? (
              <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                {" "}
                <p>
                  <CircularProgress />
                </p>{" "}
              </div>
            ) : (
              <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                {" "}
                <h3>Nothing Found...</h3>{" "}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Executive;
