import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";

import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "../../axios";
import MemberCard from "../../component/card/Member";
import Footer from "../../component/Footer/Footer";
import "./Members.css";
import { Toolbar } from "../../layout/BaseLayout.styles";

const Members = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("api/member-countries/").then(res => {
      setData(res.data);
    }).catch;
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Members</title>
      </Helmet> */}
      <Box>
        <Toolbar>
          <Box sx={{ width: "100%", height: "100%" }}>
            <section className="member-heading">
              <h4>MEMBERS</h4>
            </section>

            {data !== null && data.length != 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {data.map(data => (
                  <MemberCard key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <>
                {data === null ? (
                  <div
                    id="loader"
                    style={{
                      width: "100%",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    <p>
                      <CircularProgress />
                    </p>{" "}
                  </div>
                ) : (
                  <div
                    id="loader"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <h3>Nothing Found...</h3>{" "}
                  </div>
                )}
              </>
            )}
          </Box>
        </Toolbar>
        {data !== null && <Footer />}
      </Box>
    </>
  );
};

export default Members;
