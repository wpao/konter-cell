// import axios from 'axios'

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
//   timeout: 10000,
// })

// export default api

// ========
import axios from "axios";

export const api = axios.create({
  // local development
  // baseURL: "http://localhost:3001",

  // ngrok for development CRUD
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
