import axios from "axios";

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const API = axios.create({
  baseURL: "https://api.example.com",
});

export default API;
