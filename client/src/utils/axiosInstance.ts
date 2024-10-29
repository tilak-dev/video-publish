import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_BACKEND_URI,
  withCredentials: true,
})

export default api