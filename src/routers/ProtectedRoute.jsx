import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";

const ProtectedRoute = ({ isPublic, isAuthorized }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!!Cookies.get("accessToken")) {
      <Navigate to="/" />;
      dispatch(logout());
    }
  }, [!!Cookies.get("accessToken")]);

  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
