import React from "react";
import "../../styles/ui/footer.css";

function Footer({ title = "Copyright © Vistham Company", className }) {
  return (
    <div className={`footer ${className}`}>
      <p>{title}</p>
    </div>
  );
}

export default Footer;
