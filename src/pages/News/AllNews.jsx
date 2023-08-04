import React, { useEffect } from "react";

import { Container, MenuItem, useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import useSWRInfinite from "swr/infinite";

import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import { API_URL, LIMIT_PER_PAGE } from "../../constant/api";
import { SEO } from "../../helper/Seo";

import "./AllNews.css";

const AllNews = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [state, setState] = React.useState({
    year: "all",
  });

  let api_url = `/news/year/?year=${state?.year}`;
  const regex_pattern = /\/news\/all/;

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setSize(1);
    setState(prev => ({ ...prev, [name]: value }));
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
    if (state?.year == "all") api_url = `/news/all/?p=${pageIndex + 1}`;

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
    <div className="newspage">
      <SEO title="ACBS | News" />
      <Container maxWidth="lg">
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
              data?.length > 0 &&
              data?.map((val, index) => (
                <ImageTitleDate
                  id={val.id}
                  slug={val.slug}
                  maxWidth={"23rem"}
                  image={`${API_URL}/${val.image}`}
                  title={val.title}
                  timestamp={val.timestamp}
                  views={val.views}
                  key={index}
                  data={val}
                />
              ))}

            {isValidating ? (
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
              data &&
              data?.length == 0 &&
              isReachingEnd === true &&
              isValidating === false && (
                <div style={{ textAlign: "center", margin: "6rem auto" }}>
                  <h3>Nothing Found...</h3>
                </div>
              )
            )}
          </div>
        </main>
      </Container>
      {!isValidating && <Footer></Footer>}
    </div>
  );
};

export default AllNews;
