import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function MyAlert({ title, desc, type, className }) {
  return (
    <div className={`${className}`}>
      <Alert sx={{ width: "fit-content", gap: "8px", direction: "ltr" }} severity={type}>
        <AlertTitle>{title}</AlertTitle>
        {desc}
      </Alert>
    </div>
  );
}

export default MyAlert;
