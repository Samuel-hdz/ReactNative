import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create axios instance with the correct backend URL
const api = axios.create({
  baseURL: "https://6845-177-249-162-57.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include JWT token in requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
