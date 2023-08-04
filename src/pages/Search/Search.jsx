import React, { useState } from "react";
import { useLocation } from "react-router";

import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  Container,
} from "@mui/material";

import EventTable from "./EventTable";
import NewsTable from "./NewsTable";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";
import "./Search.css";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [type, setTypes] = useState("news");

  const handleChange = event => {
    setTypes(event.target.value);
  };

  const { data: searchData, isLoading } = useAPI(`api/search/?query=${query}`);

  return (
    <>
      <Box className="search">
        <SEO title="Search" description={`Search Results for ${query}`} />
        <Container maxWidth="lg">
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
              <span>Type</span>
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
          {!isLoading ? (
            <>
              {/* For news */}
              {type === "news" && searchData.news.length > 0 && (
                <NewsTable data={searchData.news} />
              )}

              {/* For Events */}
              {type === "events" && searchData.events.length > 0 && (
                <EventTable data={searchData.events} />
              )}
              {
                <Box>
                  {((type === "news" && searchData.news.length === 0) ||
                    (type === "events" && searchData.events.length === 0)) && (
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
                </Box>
              }
            </>
          ) : (
            <div
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
        </Container>
      </Box>

      {!isLoading && <Footer />}
    </>
  );
};

export default Search;
