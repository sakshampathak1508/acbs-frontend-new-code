import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate, useParams } from "react-router";

import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import axios from "../../axios";
import { Toolbar } from "../../layout/BaseLayout.styles";

import "./Search.css";
import Footer from "../../component/Footer/Footer";
import NewsTable from "./NewsTable";
import EventTable from "./EventTable";

const Search = props => {
  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const query = searchParams.get("query");

  const [searchdata, setSearchdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [type, setTypes] = useState("news");
  const navigate = useNavigate();

  const handleChange = event => {
    setTypes(event.target.value);
  };

  useEffect(() => {
    setloading(true);
    setSearchdata(null);
    axios
      .get(`api/search/?query=${query}`)
      .then(res => {
        console.log(res.data);
        setSearchdata(res.data);
        setloading(false);
      })
      .catch(e => console.log(e));
  }, [query]);

  return (
    <Box className="search">
      <Helmet>
        <meta charSet="utf-8" />
        {/* <>Search | {query}</ title> */}
      </Helmet>
      <Toolbar>
        <div
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "6%",
              alignItems: "center",
              mb: "2rem",
            }}
          >
            <h4 className="heading">Search Result</h4>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
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
          {searchdata !== null ? (
            <>
              {/* For news */}
              {type === "news" && searchdata.news.length > 0 && (
                <NewsTable data={searchdata.news} />
              )}

              {/* For Events */}
              {type === "events" && searchdata.events.length > 0 && (
                <EventTable data={searchdata.events} />
              )}
              {
                <div>
                  {((type === "news" && searchdata.news.length === 0) ||
                    (type === "events" && searchdata.events.length === 0)) && (
                    <>
                      <h4>No Search results</h4>
                      <p>
                        Your search query :{" "}
                        <span style={{ color: "#0da1ff" }}>{query}</span> did
                        not match any documents.
                      </p>

                      <br></br>
                      <h4>Suggestions</h4>
                      <ul style={{ paddingLeft: "4rem" }}>
                        <li>Make sure that all words are spelled correctly.</li>
                        <li>Try more general keywords.</li>

                        <li>Try fewer keywords..</li>
                        <li>Try different keywords.</li>
                      </ul>
                    </>
                  )}
                </div>
              }
            </>
          ) : (
            <div
              id="loader"
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <p>
                <CircularProgress />
              </p>
            </div>
          )}
        </div>
      </Toolbar>
      {searchdata !== null && <Footer />}
    </Box>
  );
};

export default Search;
