import React from "react";
// import InstagramEmbed from "react-instagram-embed";
import { Timeline } from "react-twitter-widgets";

const Twitter = () => {
  return (
    <>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "ACBSport" }}
        options={{ height: 400 }}
      />
      {/* <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </>
  );
};

export default Twitter;
