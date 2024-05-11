import React from "react";
import "../../styles/ui/input.css";

function Input({ className, type = "text", name, id, onChange, onBlur, value, ...props }) {
  return (
    <input
      type={type}
      className={`${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
      required
    />
  );
}

export default Input;
