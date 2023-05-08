"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./server/uiserver.js":
/*!****************************!*\
  !*** ./server/uiserver.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);





const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
dotenv__WEBPACK_IMPORTED_MODULE_4___default().config();
const port = process.env.PORT;
if (true) {
  const webpack = __webpack_require__(/*! webpack */ "webpack");
  const devMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
  const hotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
  const config = (__webpack_require__(/*! ../web.config.js */ "./web.config.js")[0]);
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}
if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
  console.log("process  " + process.env.UI_SERVER_API_ENDPOINT + process.env.UI_API_ENDPOINT);
}
if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}
app.get('/env.js', (req, res) => {
  const env = {
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT
  };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"]('src'));
app.get("/about", (req, res, next) => {
  (0,_render_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res, next);
});
app.use('/graphql', http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default()({
  target: 'http://localhost:3000'
}));
app.get('*', (req, res) => {
  const indexPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '../src', 'index.html');
  res.sendFile(indexPath);
});
app.listen(port, () => {
  console.log(`Listening onport ${port}`);
});
if (module.hot.accept) {
  module.hot.accept(/*! ./render.jsx */ "./server/render.jsx", () => { /* harmony import */ _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
 });
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89692495537bb82d9aee")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.d1c05cd804b918f8bd5e.hot-update.js.map