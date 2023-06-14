import React, { useState, useEffect, useRef } from "react";

import { Box, Container, MenuItem } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "../../axios";
import EventImageTitle from "../../component/card/EventImageTitle";
import Footer from "../../component/Footer/Footer";
import { SEO } from "../../helper/Seo";

import "./Event.css";

const Event = () => {
  const [state, setState] = React.useState({
    year: "all",
    category: "all",
    event: [],
    search: "",
  });
  const limitPerPage = 30;
  const yearRef = useRef();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState({ value: 1 });
  const [isLoading, setIsLoading] = useState(true);

  const currentYear = new Date().getFullYear();

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 0 >=
        document.documentElement.offsetHeight &&
      hasMore === true &&
      isLoading === false
    ) {
      // setIsLoading(true);
      setPage(prev => {
        return { value: prev.value + 1 };
      });
    }
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState(prev => ({ ...prev, [name]: value }));
    setPage(() => {
      return { value: 1 };
    });

    setState(prev => ({ ...prev, ["event"]: [] }));
  };

  useEffect(() => {
    setIsLoading(true);

    let api_url = `/events/all/?p=${page.value}`;

    if (state?.year != "all" && state?.category == "all")
      api_url = `/events/year/?year=${state?.year}`;
    else if (state?.year == "all" && state?.category != "all")
      api_url = `/events/year/?cat=${state?.category}`;
    else if (state?.year != "all" && state?.category != "all")
      api_url = `/events/year/?year=${state?.year}&cat=${state?.category}`;

    const regex_pattern = /\/events\/all/;

    axios.get(api_url).then(res => {
      setIsLoading(false);

      if (regex_pattern.test(api_url)) {
        if (res?.data?.results?.length < limitPerPage) setHasMore(false);

        setState(prev => ({
          ...prev,
          ["event"]: prev?.event?.concat(res?.data?.results),
        }));
      } else {
        setState(prev => ({
          ...prev,
          ["event"]: res?.data,
        }));
      }
    }).catch;
  }, [page]);

  return (
    <Box>
      <SEO title="ACBS | Events" />
      <Container maxWidth="xl">
        <div className="event-page">
          <header
            style={{
              display: "flex",
              gap: "2rem",
              paddingTop: "24px",
              flexWrap: "wrap",
            }}
          >
            <Box className="year">
              <span>Year</span>
              <FormControl
                variant="outlined"
                sx={{ m: 1, minWidth: 120, height: "2.7rem" }}
                ref={yearRef}
              >
                <Select
                  sx={{ height: "100%" }}
                  value={state.year}
                  className="input-label-select"
                  onChange={handleChange}
                  displayEmpty
                  name="year"
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  {[...Array(currentYear - 2009)].map((_, index) => {
                    const year = currentYear - index;
                    return (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className="category">
              <span>Category</span>
              <FormControl
                variant="outlined"
                sx={{ m: 1, minWidth: 190, height: "2.7rem" }}
              >
                <Select
                  sx={{ height: "100%" }}
                  value={state.category}
                  className="input-label-select"
                  onChange={handleChange}
                  // displayEmpty
                  name="category"
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={1}>Snokker / Billiards</MenuItem>
                  <MenuItem value={2}>Pool</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </header>
          <main>
            <section className="events">
              <h4>Events</h4>
              <div className="events-container">
                {state?.event?.map((val, index) => (
                  <EventImageTitle data={val} endPoint="event" key={index} />
                ))}
                {state?.event?.length == 0 &&
                  hasMore === false &&
                  isLoading === false && (
                    <div style={{ margin: "auto" }}>
                      <h3>Nothing Found...</h3>
                    </div>
                  )}
              </div>
            </section>
          </main>
        </div>
      </Container>
      {isLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <Footer></Footer>
      )}
    </Box>
  );
};

export default Event;
