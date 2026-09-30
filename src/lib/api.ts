import axios from "axios";

export const api = axios.create({
  baseURL: "https://gutendex.com",
  headers: {
    "Content-Type": "application/json",
  },
});
