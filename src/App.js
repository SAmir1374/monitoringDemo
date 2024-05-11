import React, { useEffect } from "react";
import { Routes } from "./routers";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

function App() {
  const auth = useSelector((store) => store.auth);

  return (
    <div>
      <Routes isAuthorized={!!auth.accessToken} />
    </div>
  );
}

export default App;
