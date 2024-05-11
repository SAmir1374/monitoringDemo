import axios from "axios";
import store from "../redux/store";

const Myrequest = axios.create({
  baseURL: "https://vistham.ir/api",
});

let accessToken = localStorage.getItem("accessToken");

store.subscribe(() => {
  accessToken = store.getState().auth.accessToken;
});

Myrequest.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default Myrequest;
