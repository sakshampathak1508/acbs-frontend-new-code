// import React from "react";
// import { Timeline } from "react-twitter-widgets";

// const Twitter = () => {
//   return (
//     <>
//       <Timeline
//         dataSource={{
//           sourceType: "profile",
//           screenName: "ACBSport",
//         }}
//         options={{ height: 400, width: "auto", id: "profile:ACBSport" }}
//       />
//     </>
//   );
// };

// export default Twitter;

import React, { useEffect, useState } from 'react';
import './ImageWithLink.css'; // Import the CSS file for styling

const Twitter = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch('https://admin.acbs.qa/events/sanction/');
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []);

  if (!eventData) {
    return <p>Loading...</p>;
  }

  const {id, event_banner, link } = eventData[0];

  return (
    <div className="image-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://admin.acbs.qa${event_banner}`}  // Use the event_banner from the API response
          alt="Event Banner"
          className="hoverable-image" // Add the class for hover effect if needed
        />
      </a>
    </div>
  );
};

export default Twitter;


