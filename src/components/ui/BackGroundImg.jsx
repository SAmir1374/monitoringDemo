import React from "react";
import monitoring from "../images/monitoring.jpg";
import "../../styles/ui/backGroundImg.css";

function BackGroundImg({ children, src = monitoring, className, ...props }) {
  return (
    <div className={`${className} backGroundImage`} style={{ backgroundImage: `url(${src})` }} {...props}>
      {children}
    </div>
  );
}

export default BackGroundImg;
