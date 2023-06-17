import React, { useState, useContext, useEffect, useRef } from "react";

import { Box, Container, MenuItem } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "../../axios";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";

import "./AllNews.css";

const AllNews = () => {
  const [hasMore, setHasMore] = useState(true);
  const currentYear = new Date().getFullYear();
  const limitPerPage = 30;
  const [isLoading, setIsLoading] = useState();
  const [page, setPage] = useState({ value: 1 });
  const [data, setData] = useState([]);
  // REMOVE IT
  const yearRef = useRef();
  const [state, setState] = React.useState({
    year: "all",
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 0 >=
        document.documentElement.offsetHeight &&
      hasMore === true &&
      isLoading === false
    ) {
      setPage(prev => {
        return { value: prev.value + 1 };
      });
    }
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setPage(() => {
      return { value: 1 };
    });
    setState(prev => ({ ...prev, [name]: value }));
    setData([]);
  };

  useEffect(() => {
    setIsLoading(true);

    let api_url = `/news/year/?year=${state?.year}`;
    if (state?.year == "all") api_url = `/news/all/?p=${page?.value}`;

    const regex_pattern = /\/news\/all/;

    axios.get(api_url).then(res => {
      setIsLoading(false);
      console.log(res.data.results);
      if (regex_pattern.test(api_url)) {
        if (res?.data?.results?.length < limitPerPage) setHasMore(false);
        setData(prev => {
          return prev.concat(res?.data?.results);
        });
      } else {
        setData(res?.data);
      }
    }).catch;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, state]);

  return (
    <div className="newspage">
      <SEO title="ACBS | News" />
      <Container maxWidth="xl">
        <main className="main-news-page">
          <header className="header-title">
            <h4>News</h4>
            <section className="year">
              <span>Year</span>
              <FormControl
                variant="outlined"
                sx={{
                  minWidth: 130,
                  m: "0rem 1rem 0rem 1rem",
                  height: "2.7rem",
                }}
                ref={yearRef}
              >
                <Select
                  sx={{ height: "100%", textAlign: "left" }}
                  value={state.year}
                  className="input-label-select"
                  onChange={handleChange}
                  displayEmpty
                  name="year"
                >
                  <MenuItem className="input-label-option" value="all">
                    All
                  </MenuItem>
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
            </section>
          </header>
          <div className="news-cards-section">
            {data &&
              data?.map((val, index) => (
                <ImageTitleDate
                  id={val.id}
                  slug={val.slug}
                  maxWidth={"25rem"}
                  image={`${API_URL}/${val.image}`}
                  title={val.title}
                  timestamp={val.timestamp}
                  views={val.views}
                  key={index}
                  data={val}
                />
              ))}

            {isLoading ? (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              data?.length == 0 &&
              hasMore === false &&
              isLoading === false && (
                <div style={{ textAlign: "center", margin: "6rem auto" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )
            )}
          </div>
        </main>
      </Container>
      {!isLoading && <Footer></Footer>}
    </div>
  );
};

export default AllNews;
