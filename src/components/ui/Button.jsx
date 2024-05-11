import React from "react";
import "../../styles/ui/button.css";

function Button({ children, disabled, className, onClick, ...props }) {
  return (
    <button className={`${className} btn`} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
