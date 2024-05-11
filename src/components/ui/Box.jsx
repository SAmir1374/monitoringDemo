import React from "react";
import "../../styles/ui/box.css";

function Box({ title = "Top", number = "60%", colorNumber, ...props }) {
  return (
    <div className="boxWrapper">
      <h3 className="boxTitle">{title}</h3>
      <div className="boxNumber">
        <div style={{ color: `${colorNumber}` }}>{number}</div>
        <div></div>
      </div>
    </div>
  );
}

export default Box;
