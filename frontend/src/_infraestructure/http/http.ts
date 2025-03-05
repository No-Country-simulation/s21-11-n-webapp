import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_API;

const http = axios.create({
  baseURL: API,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
