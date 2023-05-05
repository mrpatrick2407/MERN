"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueDetails)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphqlendppoint.js */ "./src/graphqlendppoint.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


const datereg = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

class IssueDetails extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = {
      issues: []
    };
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadData();
    }
  }
  async loadData() {
    var id = parseInt(this.props.match.params.id);
    console.log(typeof id);
    const query = `query Issue($issueId: Int!) {
            issue(id: $issueId) {
            description  
            }
          }`;
    const variables = {
      issueId: id
    };
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_1__.graphqlendpoint)(query, variables);
    console.log("data" + data.issue.description);
    if (data) {
      this.setState({
        issues: data.issue
      });
    } else {
      this.setState({
        issues: []
      });
    }
  }
  render() {
    const issue = this.state.issues;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, issue.description));
  }
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("57e60fda91398bd2da41")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.d298a363de5176903ef1.hot-update.js.map