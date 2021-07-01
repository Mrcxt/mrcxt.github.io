import axios from "axios";
import config from "~/cactus.config";
const { token } = config;

const request = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    // Accept: "application/vnd.github.v3.html",
    Authorization: `token ${window.atob(token)}`,
  },
  withCredentials: false, //是否携带cookie
  timeout: 10 * 1000,
});

//
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//
request.interceptors.response.use(
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
    return request.get(url, {
      params,
    });
  },
  post(url, data, config) {
    return request.post(url, data, config);
  },
  put(url, data) {
    return request.put(url, data);
  },
  delete(url, params = {}) {
    return request.delete(url, {
      params,
    });
  },
};
