
import axios from "axios";

const API = axios.create({
  baseURL: "https://full-stack-application-red-five.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
