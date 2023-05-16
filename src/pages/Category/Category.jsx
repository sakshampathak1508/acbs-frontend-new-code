import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, FormControl, MenuItem, Select } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import image1 from "../../assets/cardEx.png";
import image2 from "../../assets/sponsor1.png";
import axios from "../../axios";
import ExecutiveCard from "../../component/card/Executive";
import Header from "../../component/header/header";
import { StateContext } from "../../StateProvider";

// import "./Executive.css";

const Category = props => {
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useContext(StateContext);

  const [type, setTypes] = useState("all");

  const handleChange = event => {
    setTypes(event.target.value);
    setData([]);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("api/executives")
      .then(res => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, [type]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category | {type}</title>
      </Helmet>

      <div className="ui container" style={{ paddingTop: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "6%",
            mb: "2rem",
          }}
        >
          <h4 className="executive-heading">Categories</h4>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>Type</label>
            <FormControl
              variant="outlined"
              sx={{ minWidth: 130, m: "0rem 1rem 0rem 1rem", height: "2.7rem" }}
            >
              <Select
                sx={{ height: "100%" }}
                value={type}
                onChange={handleChange}
                // displayEmpty
                // name="year"
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"snooker"}>Snooker</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {data.length != 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {data.map((data, index) => (
              <ExecutiveCard key={index} data={data} />
            ))}
          </div>
        ) : (
          <>
            {isLoading ? (
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

export default Category;
