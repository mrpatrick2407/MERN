"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueRow.jsx":
/*!**************************!*\
  !*** ./src/IssueRow.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function IssueRow(props) {
  const issue = props.issue;
  const closeIssue = props.closeIssue;
  const index = props.index;
  const deleteissue = props.deleteissue;
  const edit = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Edit Issue");
  const Close = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Close Issue");
  const Delete = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Delete Issue");
  function handler() {
    window.location = `#/issues/${issue.id}`;
  }
  function deleteissuefun(e) {
    e.preventDefault();
    deleteissue(index);
  }
  function closeissuefun(e) {
    e.preventDefault();
    closeIssue(index);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("tr", {
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.created.toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    onClick: handler
  }, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: edit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    style: {
      margin: '10px'
    },
    onClick: e => {
      e.preventDefault();
      window.location = `#/edit/${issue.id}`;
    },
    to: `/edit/${issue.id}`,
    size: "sm",
    className: "button btn=primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiTwotoneEdit, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: Close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    style: {
      margin: '10px'
    },
    size: "lg",
    type: "button",
    onClick: closeissuefun
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: Delete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    style: {
      margin: '10px'
    },
    variant: "danger",
    size: "sm",
    type: "button",
    onClick: deleteissuefun
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillDelete, null))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.withRouter)(IssueRow));

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7c338c35964fdc4277c")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.10c1cfe0e3c63ef71fd8.hot-update.js.map