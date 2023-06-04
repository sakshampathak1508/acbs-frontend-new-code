import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";

import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "../../axios";
import ExecutiveCard from "../../component/card/Executive";

import "./Executive.css";

const Executive = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("api/executives").then(res => {
      setData(res.data);
      setloading(false);
    }).catch;
  }, []);
  return (
    <>
      {/* <Helmet>
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
