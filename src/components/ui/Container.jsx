import React from "react";
import '../../styles/ui/container.css'

function Container({ children, className, ...props }) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
