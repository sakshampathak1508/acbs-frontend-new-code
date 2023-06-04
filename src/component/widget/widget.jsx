import React from "react";

import "./widget.css";

const Widget = ({ text, Icon }) => {
  return (
    <div className="middle_widget_header">
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Icon style={{ fontSize: "1.1rem" }} /> {text}
      </h3>
    </div>
  );
};

export default Widget;
