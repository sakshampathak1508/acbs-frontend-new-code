import React, { useEffect, useContext, useRef } from "react";
import { useParams } from "react-router";

import AttachmentIcon from "@mui/icons-material/Attachment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SportsIcon from "@mui/icons-material/Sports";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import { styled, Link } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
// import FormControl from "@mui/material/FormControl";
// import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

import moment from "moment";

// import SearchIcon from "../../assets/searchIcon.png";
import axios from "../../axios";
import Footer from "../../component/Footer/Footer";
// import Header from "../../component/header/header";
import { StateContext } from "../../StateProvider";
import "./ParticularEvent.css";

const ParticularEvent = () => {
  const [state, setState] = React.useState({
    year: "",
    event: "",
    eventList: [],
    eventName: "",
  });
  const { id } = useParams();
  const { isLoading = true, setIsLoading } = useContext(StateContext);

  const StyledLink = styled(Link)(() => ({
    all: "unset",
    display: "flex",
    padding: "1rem",
    fontSize: "1.2rem",
    border: "1px solid var(--blue)",
    borderRadius: "4px",
    cursor: "pointer",
    margin: 0,
    "&:hover": {
      color: "var(--blue)",
      border: "1px solid var(--black)",
    },
  }));

  useEffect(() => {
    setIsLoading(true);
    axios.get(`events/?id=${id}`).then(res => {
      setIsLoading(false);
      setState(prev => ({ ...prev, ["event"]: res?.data }));
    });
  }, []);

  return (
    <>
      <div className="event-page">
        <main className="container">
          {!isLoading && (
            <main style={{ paddingTop: "2rem" }}>
              <h2>{state?.event?.name}</h2>
              <section className="event-content">
                <section
                  className="left-container"
                  dangerouslySetInnerHTML={{ __html: state?.event?.content1 }}
                ></section>

                <section className="right-container">
                  <section className="top">
                    <div className="location">
                      <h4>Location</h4>
                      <h5>{state?.event?.location}</h5>
                    </div>

                    <div className="venue">
                      <h4>Venue</h4>
                      <h5>{state?.event?.venue}</h5>
                      {/* <label>Photographs</label> */}
                    </div>

                    <div className="date">
                      <div className="start-date">
                        <h4>Start Date</h4>
                        <h5>
                          {moment(state?.event?.start_date).format(
                            "MMMM DD, YYYY"
                          )}
                        </h5>
                      </div>

                      <div className="end-date">
                        <h4>End Date</h4>
                        <h5>
                          {moment(state?.event?.end).format("MMMM DD, YYYY")}
                        </h5>
                      </div>
                    </div>
                  </section>

                  <section className="bottom">
                    <h4>Links</h4>
                    <div className="links-icon">
                      {state?.event?.groups && (
                        <StyledLink href={state?.event?.groups} target="_blank">
                          Groups &nbsp; <span>{<SportsIcon />}</span>
                        </StyledLink>
                      )}

                      {state?.event?.knockouts && (
                        <StyledLink
                          href={state?.event?.knockouts}
                          target="_blank"
                        >
                          Knockouts &nbsp; <span>{<SportsKabaddiIcon />}</span>
                        </StyledLink>
                      )}
                      {state?.event?.results && (
                        // <h5>
                        <StyledLink
                          href={state?.event?.results}
                          target="_blank"
                        >
                          Results &nbsp;<span>{<AttachmentIcon />}</span>
                        </StyledLink>
                        // </h5>
                      )}
                      {state?.event?.live && (
                        <StyledLink href={state?.event?.live} target="_blank">
                          Live&nbsp; <span>{<LiveTvIcon />}</span>
                        </StyledLink>
                      )}

                      {state?.event?.photographs && (
                        <StyledLink
                          href={state.event.photographs}
                          target="_blank"
                        >
                          Photographs &nbsp; <span>{<InsertPhotoIcon />}</span>
                        </StyledLink>
                      )}
                      {state?.event?.video && (
                        <StyledLink href={state.event.video} target="_blank">
                          Video &nbsp;<span>{<PlayCircleIcon />}</span>
                        </StyledLink>
                      )}
                    </div>
                  </section>
                </section>
              </section>
            </main>
          )}
        </main>
      </div>
      {isLoading ? (
        <div
          id="loader"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Footer></Footer>
      )}
    </>
  );
};

export default ParticularEvent;
