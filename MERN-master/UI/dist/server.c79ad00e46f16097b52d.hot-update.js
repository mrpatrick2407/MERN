"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page Not Found");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAbout.jsx */ "./src/IssueAbout.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueList,jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueReport,jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/NotFound.jsx");





const routes = [{
  path: '/issues/:id?',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueList,jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/edit/:id',
  component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/report',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueReport,jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/about',
  component: _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '*',
  component: _NotFound_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b80e5adf338b833f64d")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.c79ad00e46f16097b52d.hot-update.js.map