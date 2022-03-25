import React from "react";
// import "./styles.css";

export default function BeerWidget(props) {
  return (
    <div
      className="fade-opacity-hover"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        width: "100px",
        margin: "4px",
        backgroundColor: props.color,
        cursor: "pointer",
        fontFamily: "monospace"
      }}
      onClick={() => props.onBeerSelected(props.title)}
      // onClick={() => console.log(`${props.title} selected`)}
    >
      {props.title}
    </div>
  );
}
