import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YZArXjKYdYYx3kLK30P5ERbKWB_yWB17akx7xKlPoGI",
  },
});
