// import axios from 'axios';

import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor
// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     if (error.response) {
//       // Handle different HTTP status codes
//       if (error.response.status === 401) {
//         // Handle unauthorized access
//         localStorage.removeItem('token');
//         window.location.href = '/login';
//       }

//       // Convert to consistent error format
//       return Promise.reject({
//         message: error.response.data?.message || 'An error occurred',
//         status: error.response.status,
//         data: error.response.data,
//       });
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosClient;
// import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // ✅ Only run localStorage logic in browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // ✅ Return both data & meta info
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401 && typeof window !== "undefined") {
        // ✅ Clear token only in browser
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      return Promise.reject({
        message: data?.message || "An error occurred",
        status,
        data,
      });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
