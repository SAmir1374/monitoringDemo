import React from "react";
import "../../styles/ui/box.css";

function ChartBox({ title = "Top", className, children, ...props }) {
  return (
    <div className={`boxWrapper ${className}`} {...props}>
      {children}
    </div>
  );
}

export default ChartBox;
