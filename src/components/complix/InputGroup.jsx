import React from "react";
import Input from "../ui/Input";
import "../../styles/complix/inputGroup.css";

function InputGroup({
  label,
  labelClassName,
  onChange,
  onBlur,
  icon,
  inputName,
  inputValue,
  inputType,
  inputClassName,
  inputPlaceholder,
  helperText,
  ...props
}) {
  return (
    <div>
      <div className="input-group">
        <span>{icon}</span>
        <Input
          type={inputType}
          name={inputName}
          onChange={onChange}
          onBlur={onBlur}
          value={inputValue}
          placeholder={inputPlaceholder}
          className={`${inputClassName}`}
          {...props}
        />
        <label className={`${labelClassName}`}>{label}</label>
      </div>
      <div className={`${helperText ? "helperText" : "opacity"}`}>{helperText ? helperText : "helper"}</div>
    </div>
  );
}

export default InputGroup;
