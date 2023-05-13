"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var _graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphqlendppoint.js */ "./src/graphqlendppoint.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/IssueAdd.jsx");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");












class IssueList extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor() {
    super();
    this.state = {
      issues: [],
      pages: null
    };
    this.createissue = this.createissue.bind(this);
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteissue = this.deleteissue.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      }
    } = prevProps;
    const {
      location: {
        search
      }
    } = this.props;
    if (prevSearch != search) {
      this.loadData();
    }
  }
  pagelink() {}
  async loadData() {
    const {
      location: {
        search
      }
    } = this.props;
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_2___default())(search);
    const vars = {};
    if (params.get('status')) {
      vars.status = params.get('status');
    }
    if (params.get('page')) vars.page = parseInt(params.get('page'));
    if (params.get('effortmin')) {
      vars.effortmin = parseInt(params.get('effortmin'));
    }
    if (params.get('effortmax')) {
      vars.effortmax = parseInt(params.get('effortmax'));
    }
    const query = `query Issues($page: Int, $status: statustype, $effortmin: Int, $effortmax: Int) {
            issueList(page: $page, status: $status, effortmin: $effortmin, effortmax: $effortmax) {
              issuesDb {
                id
                owner
                title
                status
                created
                description
                due
                effort
              }
              pages
            }
          }`;
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(query, vars, this.props.showerror);
    if (data) {
      this.props.showsuccess("Issues loaded");
      this.setState({
        issues: data.issueList.issuesDb
      });
    }
  }
  async closeIssue(index) {
    const issues = this.state.issues;
    console.log(index);
    const mutation = `mutation IssueUpdate($id: Int!) {
            issueUpdate(id: $id, Changes: {status:Closed}) {
              id title status owner effort created due description  
              }
            }`;
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(mutation, {
      id: issues[index].id
    });
    if (data) {
      this.setState(prevState => {
        const newState = [...prevState.issues];
        newState[index] = data.issueUpdate;
        return {
          issues: newState
        };
      });
    } else {
      this.loadData();
    }
  }
  async deleteissue(index) {
    console.log("delete issue");
    console.log(index);
    const mutation = `mutation IssueDelete($id: Int!) {
            issueDelete(id: $id)
          }`;
    const {
      location: {
        pathname,
        search
      },
      history
    } = this.props;
    console.log(pathname + search);
    const {
      issues
    } = this.state;
    const {
      id
    } = issues[index];
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(mutation, {
      id
    });
    if (data) {
      this.setState(prevState => {
        const newlist = [...prevState.issues];
        if (pathname == `/issues`) {
          history.push({
            pathname: `/issues`,
            search: search
          });
        }
        newlist.splice(index, 1);
        console.log(newlist);
        return {
          issues: newlist
        };
      });
    }
  }
  async createissue(issue) {
    const query = `query issueAdd($issue:Issueinput!) {
            issueAdd(issue:$issue) {
            id
            }
        }`;
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(query, {
      issue
    }, this.props.showerror);
    if (data) {
      this.props.showsuccess("Created successfully");
      this.loadData();
    }
  }
  render() {
    const {
      match
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {
      bg: "light"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      createIssue: this.createissue
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Title, null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
      urlbase: "/issues"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      deleteissue: this.deleteissue,
      closeIssue: this.closeIssue,
      issues: this.state.issues
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: `/issues/:id`,
      component: _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
    })));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(IssueList));

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("478422345aad9d202213")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.741d63ad3517d399e887.hot-update.js.map