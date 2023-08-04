import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import useSWRInfinite from "swr/infinite";

import EventImageTitle from "../../component/card/EventImageTitle";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import { API_URL, LIMIT_PER_PAGE } from "../../constant/api";
import { SEO } from "../../helper/Seo";

const Category = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { category } = useParams();
  const [type, setTypes] = useState("news");

  const handleChange = event => {
    setTypes(event.target.value);
    setSize(1);
  };

  const fetcher = url =>
    fetch(url)
      .then(res => {
        if (res.status != 200) {
          throw new Error();
        }
        return res.json();
      })
      .catch(e => {
        return e;
      });

  const getKey = pageIndex => {
    const api_url = `api/category-footer/?type=${type}&cat=${category}&p=${
      pageIndex + 1
    }`;
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isValidating]);

  return (
    <div style={{ paddingTop: "1rem" }}>
      <SEO title={`Category | ${type}`} />

      <Container maxWidth="lg">
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
        {data.length !== 0 && !isValidating ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {type === "event"
              ? data &&
                data.map((data, index) => (
                  <EventImageTitle data={data} endPoint="event" key={index} />
                ))
              : data &&
                data.map((data, index) => (
                  <ImageTitleDate
                    id={data.id}
                    slug={data.slug}
                    maxWidth={"25rem"}
                    image={`${API_URL}/${data.image}`}
                    title={data.title}
                    timestamp={data.timestamp}
                    views={data.views}
                    key={index}
                    data={data}
                  />
                ))}
          </div>
        ) : (
          <>
            {isValidating ? (
              <div style={{ width: "100%", textAlign: "center" }}>
                <CircularProgress />
              </div>
            ) : (
              <div style={{ textAlign: "center", margin: "6rem auto" }}>
                <h3>Nothing Found...</h3>
              </div>
            )}
          </>
        )}
      </Container>
      {!isValidating && <Footer />}
    </div>
  );
};

export default Category;
