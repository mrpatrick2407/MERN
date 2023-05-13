"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueAbout.jsx */ "./src/IssueAbout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function LocationProvider({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(AnimatePresence, null, children);
}
function Content() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), _routes_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(attrs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, _extends({
    key: attrs.path
  }, attrs))));
}

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueAbout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueReport'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './NotFound'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const routes = [{
  path: '/issues/:id?',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/edit/:id',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueEdit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/report',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueReport'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/about',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './IssueAbout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '*',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './NotFound'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c79ad00e46f16097b52d")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.427d1b80fe4766c21ed7.hot-update.js.map