import React from "react";
import { Timeline } from "react-twitter-widgets";

const Twitter = () => {
  return (
    <>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "ACBSport",
        }}
        options={{ height: 400, id: "profile:ACBSport" }}
      />
    </>
  );
};

export default Twitter;
