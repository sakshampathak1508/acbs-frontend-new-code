import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = props => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="ibsf"
      options={{ height: 400 }}
    />
  );
};

export default Twitter;
