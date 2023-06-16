import axios from "axios";

const api = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
  },
});

export default api;
