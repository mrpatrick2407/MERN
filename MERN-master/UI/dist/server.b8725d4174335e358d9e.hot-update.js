"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");
/* harmony import */ var _src_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/graphqlendppoint.js */ "./src/graphqlendppoint.js");
/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store.js */ "./src/store.js");







async function render(req, res) {
  const q = `query  {
      about
    }`;
  const inital = await (0,_src_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_5__.graphqlendpoint)(q);
  _src_store_js__WEBPACK_IMPORTED_MODULE_6__["default"].inital = inital;
  const ele = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: req.url,
    content: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(ele);
  res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body));
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bce04489b7e396fa0e0")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.b8725d4174335e358d9e.hot-update.js.map