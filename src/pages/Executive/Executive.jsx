import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import image1 from "../../assets/cardEx.png";
import image2 from "../../assets/sponsor1.png";
import axios from "../../axios";
import ExecutiveCard from "../../component/card/Executive";
import Header from "../../component/header/header";

import "./Executive.css";

const Executive = props => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("api/executives")
      .then(res => {
        setData(res.data);
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

      <div className="ui container" style={{ paddingTop: "1rem" }}>
        <Box sx={{ mb: "2rem" }}>
          <h4 className="executive-heading">EXECUTIVES</h4>
        </Box>

        {data.length != 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {data.map((data, index) => (
              <ExecutiveCard data={data} key={index} />
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
