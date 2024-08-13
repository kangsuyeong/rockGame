import React from "react";

const GameBox = ({ data, title, result }) => {
  if (title === "computer" && result !== "tie" && result != "") {
    result = result === "win" ? "lose" : "win";
  }
  return (
    <div className="box">
      <h1>{title}</h1>
      <img src={data?.img} className="imgSize" />
      <h1>{result}</h1>
    </div>
  );
};

export default GameBox;
