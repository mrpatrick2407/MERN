"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Numinput)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function format(n) {
  return n != null ? n.toString() : '';
}
function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}
class Numinput extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      value: format(props.value)
    };
    console.log(format(props.value));
  }
  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      const val = e.target.value;
      this.setState({
        value: val
      });
    }
  }
  onBlur(e) {
    const {
      onChange
    } = this.props;
    const value = this.state.value;
    console.log(value + "from child");
    onChange(e, unformat(value));
  }
  render() {
    const {
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Form.Control, {
      type: "text",
      value: value,
      name: this.props.name,
      onChange: this.onChange,
      onBlur: this.onBlur
    });
  }
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c8cb4945c76e5b2d3e1")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.dad2c2eb14728df55de8.hot-update.js.map