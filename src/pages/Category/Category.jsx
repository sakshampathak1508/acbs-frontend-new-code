import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { useParams } from "react-router";

import { Box, Container, FormControl, MenuItem, Select } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "../../axios";
import EventImageTitle from "../../component/card/EventImageTitle";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import { API_URL } from "../../constant/api";
import { SEO } from "../../helper/Seo";

const Category = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [type, setTypes] = useState("news");
  const [page, setPage] = useState({ value: 1 });
  const limitPerPage = 1;

  const handleChange = event => {
    setTypes(event.target.value);
    setPage(() => {
      return { value: 1 };
    });
    setData([]);
  };

  window.onscroll = () => {
    console.log(
      document.documentElement.offsetHeight,
      document.documentElement.scrollTop
    );
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

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`api/category-footer/?type=${type}&cat=${category}&p=${page.value}`)
      .then(res => {
        console.log(res.data);
        if (res?.data?.length < limitPerPage) setHasMore(false);
        setData(prev => {
          return prev.concat(res?.data?.results);
        });
        setData(res.data);
        setIsLoading(false);
      }).catch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, category, page]);

  return (
    <div style={{ paddingTop: "1rem" }}>
      <SEO title={`Category | ${type}`} />

      <Container maxWidth="xl">
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
        {data.length !== 0 ? (
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
            {isLoading ? (
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
      {!isLoading && <Footer />}
    </div>
  );
};

export default Category;
