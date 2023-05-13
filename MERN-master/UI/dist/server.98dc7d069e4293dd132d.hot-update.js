"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueReport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphqlendppoint.js */ "./src/graphqlendppoint.js");





class IssueReport extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      stats: ''
    };
    this.loaddata = this.loaddata.bind(this);
  }
  componentDidMount() {
    this.loaddata();
  }
  componentDidUpdate() {
    if (prevProps.location.search !== this.props.location.search) {
      this.loaddata();
    }
  }
  async loaddata() {
    const vars = {};
    const {
      location: {
        search: prevsearch
      }
    } = this.props;
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_3___default())(prevsearch);
    vars.status = params.get('status');
    vars.effortmin = params.get('effortmin');
    vars.effortmax = params.get('effortmax');
    const query = `query IssueCount( $status: statustype, $effortmin: Int, $effortmax: Int) {
            issueCount( status: $status, effortmin: $effortmin, effortmax: $effortmax) {
              Assigned
              Closed
              Fixed
              New
              owner
            }
          }`;
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_4__.graphqlendpoint)(query, vars);
    if (data) {
      this.setState({
        stats: data.issueCount
      });
    } else {
      this.setState({
        stats: ''
      });
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      urlbase: "/report"
    }))));
  }
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7b3843b6a3a8aa55b86")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.98dc7d069e4293dd132d.hot-update.js.map