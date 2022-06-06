import React from "react";
import "../containers/App.css";
function Scroll(props) {
  return (
    <div
      className="scrollBar"
      style={{
        overflowY: "scroll",
        borderRadius: "14px",
        height: "60vh",
        margin: "15px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {props.children}
    </div>
  );
}
export default Scroll;
