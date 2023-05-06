"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueAbout.jsx":
/*!****************************!*\
  !*** ./src/IssueAbout.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueAbout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/store.js");


class IssueAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor() {
    super();
  }
  render() {
    console.log("issue about" + _store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center"
    }, JSON.stringify(_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, JSON.stringify(_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital.about)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Error"));
  }
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed5f154bd9446ad2f024")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.142545b92ceb9ddf8eda.hot-update.js.map