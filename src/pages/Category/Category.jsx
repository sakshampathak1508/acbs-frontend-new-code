import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, FormControl, MenuItem, Select } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import image1 from "../../assets/cardEx.png";
import image2 from "../../assets/sponsor1.png";
import axios from "../../axios";
import ExecutiveCard from "../../component/card/Executive";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/header";
import { Toolbar } from "../../layout/BaseLayout.styles";
import { StateContext } from "../../StateProvider";

// import "./Executive.css";

const Category = props => {
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useContext(StateContext);

  const [type, setTypes] = useState("news");

  const handleChange = event => {
    setTypes(event.target.value);
    setData([]);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("api/executives")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, [type]);

  return (
    <div style={{ paddingTop: "1rem" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category | {type}</title>
      </Helmet>
      <Toolbar>
        <Box sx={{ width: "100%" }}>
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
                sx={{
                  minWidth: 130,
                  m: "0rem 1rem 0rem 1rem",
                  height: "2.7rem",
                }}
              >
                <Select
                  sx={{ height: "100%" }}
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value={"news"}>News</MenuItem>
                  <MenuItem value={"events"}>Events</MenuItem>
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
                  <p>
                    <CircularProgress />
                  </p>
                </div>
              ) : (
                <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )}
            </>
          )}
        </Box>
      </Toolbar>
      {!isLoading && <Footer />}
    </div>
  );
};

export default Category;
