"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function withToast(OriginalComponent) {
  return class ToastWrapper extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
      super(props);
      this.state = {
        toastmessage: '',
        toasttype: "success",
        toastshowing: false
      };
      this.showsuccess = this.showsuccess.bind(this);
      this.showerror = this.showerror.bind(this);
      this.dismiss = this.dismiss.bind(this);
    }
    showsuccess(mess) {
      this.setState({
        toastmessage: mess,
        toasttype: "success",
        toastshowing: true
      });
      console.log("Debugging Toast" + this.state.toastshowing);
    }
    showerror(mess) {
      this.setState({
        toastmessage: mess,
        toasttype: "danger",
        toastshowing: true
      });
    }
    dismiss() {
      this.setState({
        toastshowing: false
      });
    }
    render() {
      const toastmessage = this.state.toastmessage;
      const toasttype = this.state.toasttype;
      const toastshowing = this.state.toastshowing;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OriginalComponent, _extends({
        showsuccess: this.showsuccess,
        showerror: this.showerror,
        dismiss: this.dismiss
      }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: toasttype,
        showing: toastshowing,
        onDismiss: this.dismiss
      }, toastmessage));
    }
  };
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6c313e122b826462b84")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.72b78d0883d048f7e89b.hot-update.js.map