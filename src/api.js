import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7539a2083cc4f7d9dc5e72dc2d0091e4",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
