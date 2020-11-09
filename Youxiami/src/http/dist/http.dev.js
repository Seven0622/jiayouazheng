"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// axios的配置文件
// 全局设置axios配置
_axios["default"].defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; // 添加请求拦截器

_axios["default"].interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
}); // 添加响应拦截器


_axios["default"].interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}); // 定义一个get函数


function fetch(url, params) {
  return new Promise(function (resolve, reject) {
    _axios["default"].get(url, params).then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      reject(error);
    });
  });
}

var _default = {
  mockdata: function mockdata(url, params) {
    return fetch(url, params);
  }
};
exports["default"] = _default;