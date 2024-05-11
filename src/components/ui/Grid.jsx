import React from "react";
import "../../styles/ui/grid.css";

function Grid({ children, className, ...props }) {
  return <div className={`grid ${className}`}>{children}</div>;
}

export default Grid;
