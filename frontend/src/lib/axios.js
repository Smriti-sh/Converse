import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8001/api",
    headers: {
        "Content-Type": "application/json",
      },
    withCredentials: true //send cookies with the request for tokens for authentiation 
});