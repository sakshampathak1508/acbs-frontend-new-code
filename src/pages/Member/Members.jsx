import React from "react";

import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import MemberCard from "../../component/card/Member";
import Footer from "../../component/Footer/Footer";
import "./Members.css";
import { SEO } from "../../helper/Seo";
import { useAPI } from "../../helper/swr";

const Members = () => {
  const { data, isLoading } = useAPI("api/member-countries/");

  return (
    <>
      <SEO title={`ACBS | Members`} />

      <Container maxWidth="xl">
        <section className="member-heading">
          <h4>MEMBERS</h4>
        </section>

        {!isLoading && data ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {data.map(data => (
              <MemberCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <>
            {isLoading ? (
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <p>
                  <CircularProgress />
                </p>
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
    </>
  );
};

export default Members;
