import React from "react";
import "../../styles/ui/loader.css";

function Loader({ label = "loading", className }) {
  return (
    <div className={`${className}`}>
      <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-text">{label}</div>
      </div>
    </div>
  );
}

export default Loader;
