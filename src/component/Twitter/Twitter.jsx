import React from "react";
import { Timeline } from "react-twitter-widgets";

const Twitter = () => {
  return (
    <>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "ibsf" }}
        options={{ height: 400 }}
      />
    </>
  );
};

export default Twitter;
