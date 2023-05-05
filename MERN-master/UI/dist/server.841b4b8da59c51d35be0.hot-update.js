"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueTable)
/* harmony export */ });
/* harmony import */ var _IssueRow_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueRow.jsx */ "./src/IssueRow.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function IssueTable(props) {
  const closeIssue = props.closeIssue;
  const deleteissue = props.deleteissue;
  console.log('hi');
  const issueRows = props.issues.map((issue, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_IssueRow_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: issue.id,
    issue: issue,
    closeIssue: closeIssue,
    deleteissue: deleteissue,
    index: index
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
    striped: true,
    bordered: true,
    hover: true,
    responsive: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, issueRows));
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dad2c2eb14728df55de8")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.841b4b8da59c51d35be0.hot-update.js.map