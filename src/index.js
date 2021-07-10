import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/100";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "pink";

ReactDOM.render(
  <div>
    <h1 className="heading">My Fav Pictures</h1>
    <h2 style={customStyle}>Angela's course</h2>
    <div>
      <img src={img + "?grayscale"} alt="" />
      <img src={img} alt="" />
      <img src={img + "?grayscale"} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
