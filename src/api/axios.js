import axios from "axios";
import config from "~/github.config";
const { token } = config;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3.html",
    Authorization: `token ${window.atob(token)}`,
  },
  withCredentials: false, //是否携带cookie
  timeout: 10 * 1000,
});

//
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//
axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res.data;
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        // case 401:
        //   error.message = "未授权";
        //   break;

        default:
          break;
      }
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default {
  get(url, params = {}) {
    return axiosInstance.get(url, {
      params,
    });
  },
  post(url, data, config) {
    return axiosInstance.post(url, data, config);
  },
  put(url, data) {
    return axiosInstance.put(url, data);
  },
  delete(url, params = {}) {
    return axiosInstance.delete(url, {
      params,
    });
  },
};
