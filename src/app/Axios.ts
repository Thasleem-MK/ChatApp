import axios from "axios";

export const Axios = axios.create({
  // baseURL: "https://chatapp-2f7a.onrender.com/chatApp",
    baseURL: "http://localhost:3500/ChatApp",
});
