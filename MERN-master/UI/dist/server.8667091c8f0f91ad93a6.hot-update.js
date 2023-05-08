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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _src_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _src_IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/IssueAbout.jsx */ "./src/IssueAbout.jsx");









async function render(req, res) {
  const query = `query {about}`;
  const inital = await (0,_src_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_5__.graphqlendpoint)(query);
  console.log("this is the intial value of graphqledpoint fro render.jsx" + JSON.stringify(inital));
  _src_store_js__WEBPACK_IMPORTED_MODULE_6__["default"].inital = inital;
  const ele = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: req.url,
    content: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(ele);
  console.log("this is the body" + body);
  res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("324a1a8a05369006d117")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.8667091c8f0f91ad93a6.hot-update.js.map