import axios from "axios";
var instance = axios.create({
  url: "/",
  timeout: 6000,
  method: "get",
  headers: {
    "X-Requested": "XMLHttpRequest",
  },
});
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;