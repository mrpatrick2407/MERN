"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Navi() {
  const Create = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Create Issue");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
    bg: "light",
    expand: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
    className: "dark"
  }, "IssueTracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    exact: true,
    to: "/",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/issues",
    className: "nav-link"
  }, "Issues")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/report",
    className: "nav-link"
  }, "Report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
    style: {
      position: 'absolute',
      right: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    as: "div",
    drop: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Toggle, {
    variant: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsThreeDotsVertical, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {
    href: "#/about"
  }, "About")))));
}
function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("small", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
    className: "text-center"
  }, "        Full source code available at this        ", ' ', "        ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: "https://github.com/mrpatrick2407/MERN"
  }, "          GitHub repository        "), "      "), "    ");
}
function Pages() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Navi, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Footer, null));
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02acf79ce53a9980544a")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.4d80a5d775004e9c3627.hot-update.js.map