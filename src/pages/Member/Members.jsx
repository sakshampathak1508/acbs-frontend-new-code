import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import image1 from "../../assets/cardEx.png";
import image2 from "../../assets/sponsor1.png";
import axios from "../../axios";
import MemberCard from "../../component/card/Member";
import Header from "../../component/header/header";

import "./Members.css";
import { StateContext } from "../../StateProvider";

const Members = props => {
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useContext(StateContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("api/member-countries/")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      <main className="ui container" style={{}}>
        <section className="member-heading">
          <h4>MEMBERS</h4>
        </section>

        {data.length != 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {data.map((data, index) => (
              <>
                <MemberCard data={data} />
              </>
            ))}
          </div>
        ) : (
          <>
            {isLoading ? (
              <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                {" "}
                <p>
                  <CircularProgress />
                </p>{" "}
              </div>
            ) : (
              <div id="loader" style={{ width: "100%", textAlign: "center" }}>
                {" "}
                <h3>Nothing Found...</h3>{" "}
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Members;
