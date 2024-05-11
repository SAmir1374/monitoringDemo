import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import "../styles/pages/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div>
        <p>در صورت بروز هرگونه مشکل با شماره تلفن زیر تماس حاصل فرمایید</p>
      </div>
      <div className="number">
        <p>+98-123456789</p>
        <span>
          <MdPhoneIphone />
        </span>
      </div>
    </div>
  );
}

export default Contact;
