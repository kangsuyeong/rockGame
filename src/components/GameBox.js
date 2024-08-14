import React from "react";

const GameBox = ({ data, title, result }) => {
  if (title === "computer" && result !== "tie" && result !== "GAME START") {
    result = result === "win" ? "lose" : "win";
  }

  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img src={data?.img} className="imgSize" alt="" />
      <h1>{result}</h1>
    </div>
  );
};

export default GameBox;
