import React, { useState, useContext, useEffect, useRef } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";

import SearchIcon from "../../assets/searchIcon.png";
import axios from "../../axios";
import ImageTitleDate from "../../component/card/ImageTitleDate";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/header";
import { StateContext } from "../../StateProvider";
import "./AllNews.css";

const AllNews = props => {
  const [hasMore, setHasMore] = useState(true);
  const limitPerPage = 30;
  // const [isLoading, setIsLoading] = useState(false);
  const { isLoading, setIsLoading } = useContext(StateContext);
  const [page, setPage] = useState({ value: 1 });
  const [data, setData] = useState([]);
  const yearRef = useRef();
  const [state, setState] = React.useState({
    year: "all",
  });

  useEffect(() => {
    const currentyear = new Date().getFullYear();
    var select = yearRef.current?.firstChild?.firstChild;
    while (select?.firstChild) {
      select.removeChild(select.lastChild);
    }

    let option = document.createElement("option");
    option.text = "All";
    option.value = "all";
    option.key = 1;
    select.appendChild(option);

    for (let i = currentyear; i >= 2010; i--) {
      let option = document.createElement("option");
      option.text = i.toString();
      option.value = i;
      option.key = i + 1;
      select.appendChild(option);
    }
    return () => window.onscroll();
  }, []);

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

    axios
      .get(api_url)
      .then(res => {
        console.log(res.data);
        setIsLoading(false);

        if (regex_pattern.test(api_url)) {
          if (res?.data?.results?.length < limitPerPage) setHasMore(false);
          setData(prev => {
            return prev.concat(res?.data?.results);
          });
        } else {
          setData(res?.data);
        }
      })
      .catch(e => console.log(e));
  }, [page]);

  return (
    <div className="newspage">
      <main className="container main-news-page">
        <header className="header-title">
          <h4>News</h4>
          <section className="year">
            <label>Year</label>
            <FormControl
              variant="outlined"
              sx={{ minWidth: 130, m: "0rem 1rem 0rem 1rem", height: "2.7rem" }}
              ref={yearRef}
            >
              <Select
                native
                sx={{ height: "100%" }}
                value={state.year}
                className="input-label-select"
                onChange={handleChange}
                displayEmpty
                name="year"
              >
                <option className="input-label-option" value="all">
                  all
                </option>
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
                image={`${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/${
                  val.image
                }`}
                title={val.title}
                timestamp={val.timestamp}
                views={val.views}
                key={index}
                data={val}
              />
            ))}

          {data?.length == 0 && hasMore === false && isLoading === false && (
            <div style={{ margin: "auto" }}>
              <h3>Nothing Found...</h3>
            </div>
          )}
        </div>
      </main>
      {isLoading ? (
        <div
          id="loader"
          style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Footer></Footer>
      )}
    </div>
  );
};

export default AllNews;
