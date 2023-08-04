import React, { useEffect, useRef } from "react";

import { Box, Container, MenuItem, useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import useSWRInfinite from "swr/infinite";

import EventImageTitle from "../../component/card/EventImageTitle";
import Footer from "../../component/Footer/Footer";
import { API_URL, LIMIT_PER_PAGE } from "../../constant/api";
import { SEO } from "../../helper/Seo";

import "./Event.css";

const Event = () => {
  const [state, setState] = React.useState({
    year: "all",
    category: "all",
    event: [],
    search: "",
  });
  const yearRef = useRef();

  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width:900px)");

  let api_url = `/events/year/?year=${state?.year}`;
  const regex_pattern = /\/events\/all/;

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setSize(1);
    setState(prev => ({ ...prev, [name]: value, event: [] }));
  };

  const fetcher = url =>
    fetch(url)
      .then(res => {
        if (res.status != 200) {
          throw new Error();
        }
        return res.json();
      })
      .then(res => {
        if (regex_pattern.test(api_url)) return res.results;
        else return res;
      })
      .catch(e => {
        return e;
      });

  const getKey = pageIndex => {
    if (state?.year == "all" && state?.category == "all")
      api_url = `/events/all/?p=${pageIndex + 1}`;
    else if (state?.year == "all" && state?.category != "all")
      api_url = `/events/year/?cat=${state?.category}`;
    else if (state?.year != "all" && state?.category != "all")
      api_url = `/events/year/?year=${state?.year}&cat=${state?.category}`;

    return API_URL + api_url;
  };

  let {
    data: fetchData,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(getKey, fetcher);

  let data = fetchData ? [...fetchData] : [];
  const isReachingEnd =
    (data && data[data?.length - 1] instanceof Error) ||
    (data && data[data?.length - 1]?.length < LIMIT_PER_PAGE);
  while (data && data[data?.length - 1] instanceof Error) data.pop();

  data?.flat();

  data = data ? [].concat(...data) : [];

  const handleScroll = () => {
    if (
      document.documentElement.clientHeight +
        document.documentElement.scrollTop +
        (isMobile ? 1200 : 700) >=
        document.documentElement.scrollHeight &&
      isReachingEnd === false &&
      isValidating === false
    ) {
      setSize(size + 1);
    }
  };

  useEffect(() => {
    if (regex_pattern.test(api_url)) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isValidating]);

  return (
    <Box>
      <SEO title="ACBS | Events" />
      <Container maxWidth="lg">
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
                {data?.map((val, index) => (
                  <EventImageTitle data={val} endPoint="event" key={index} />
                ))}
                {data?.length == 0 &&
                  isReachingEnd === true &&
                  isValidating === false && (
                    <div style={{ textAlign: "center", margin: "6rem auto" }}>
                      <h3>Nothing Found...</h3>
                    </div>
                  )}
              </div>
            </section>
          </main>
        </div>
      </Container>
      {isValidating ? (
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
