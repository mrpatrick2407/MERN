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
/* harmony import */ var _graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphqlendppoint.js */ "./src/graphqlendppoint.js");



class IssueAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async fetch() {
    const data = (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_2__.graphqlendpoint)('query{about}');
    console.log("data" + data);
    return data;
  }
  constructor() {
    super();
    const apidata = _store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital ? _store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital : null;
    this.state = {
      data: apidata
    };
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
/******/ 	__webpack_require__.h = () => ("63142b68b4642d7a592d")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.afdec75a2603bbb63eae.hot-update.js.map