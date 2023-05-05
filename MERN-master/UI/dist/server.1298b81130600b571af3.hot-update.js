"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function formatData(data) {
  return data != null ? data : "";
}
function unformatData(data) {
  return data.trim().length != 0 ? data : null;
}
class TextInput extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: formatData(props.value)
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onBlur(e) {
    const {
      onChange
    } = this.props;
    const {
      value
    } = this.state;
    if (value != null || value.length != 0) {
      console.log({
        value
      });
      onChange(e, value);
    }
  }
  onChange(e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  }
  render() {
    const {
      value
    } = this.state;
    const {
      tag = react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Form.Control,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(tag, {
      ...props,
      class: this.props.tag ? "form-control" : "",
      value,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce87ee86d0282658f15b")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.1298b81130600b571af3.hot-update.js.map