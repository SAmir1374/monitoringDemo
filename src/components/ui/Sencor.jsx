import React from "react";
import "../../styles/ui/sensor.css";

function Sencor({ icon, lable }) {
  return (
    <div className={`sensor`}>
      <span>{icon}</span>
      <p>{lable}</p>
    </div>
  );
}

export default Sencor;
