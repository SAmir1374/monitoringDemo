import React from "react";
import logo from "../images/witheWistham.png";

function Logo({ src = logo, classNameWrapper, className }) {
  return (
    <div className={`logo ${classNameWrapper}`}>
      <img src={src} alt="Logo" className={`logo ${className}`} />
    </div>
  );
}

export default Logo;
