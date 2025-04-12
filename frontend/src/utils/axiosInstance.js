import axios from "axios";
import { baseUrl } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      } else if (error.response.status === 403) {
        console.error("You do not have permission to access this resource.");
      } else if (error.response.status === 404) {
        console.error("Resource not found.");
      } else if (error.response.status === 500) {
        console.error("Internal server error. Please try again later.");
      } else if (error.code === "ECONNABORTED") {
        console.error("Request timed out. Please try again.");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
