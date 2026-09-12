import axios from "axios";
import { useAuthStore } from "./store/useAuthStore";

const envBase = import.meta.env.VITE_API_BASE_URL || "/api";
const isProdHost =
  typeof window !== "undefined" &&
  !window.location.hostname.includes("localhost") &&
  !window.location.hostname.includes("127.0.0.1");
const resolvedBaseURL =
  isProdHost && envBase.includes("127.0.0.1") ? "/api" : envBase;

const api = axios.create({
  baseURL: resolvedBaseURL,
  withCredentials: true, // Bắt buộc để trình duyệt tự đính kèm HttpOnly Cookie (RefreshToken)
});

// 1. Request Interceptor: Lấy Access Token trực tiếp từ RAM (Zustand)
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json";
  return config;
});

// 2. Response Interceptor: Tự động bắt lỗi 401 và làm mới Token ngầm (Silent Refresh)
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Tránh vòng lặp vô tận nếu chính request refresh bị 401
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh") &&
      !originalRequest.url?.includes("/auth/login")
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const success = await useAuthStore.getState().checkAuth();
        if (success) {
          const newToken = useAuthStore.getState().accessToken;
          processQueue(null, newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } else {
          processQueue(error, null);
          useAuthStore.getState().clearAuth();
          return Promise.reject(error);
        }
      } catch (refreshErr) {
        processQueue(refreshErr, null);
        useAuthStore.getState().clearAuth();
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;