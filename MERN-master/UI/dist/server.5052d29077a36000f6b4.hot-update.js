exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_withToast_jsx__WEBPACK_IMPORTED_MODULE_10__);












class IssueList extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor() {
    super();
    this.state = {
      issues: []
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
    if (params.get('effortmin')) {
      vars.effortmin = parseInt(params.get('effortmin'));
    }
    if (params.get('effortmax')) {
      vars.effortmax = parseInt(params.get('effortmax'));
    }
    const query = `query($status: statustype,$effortmin:Int,$effortmax:Int){
            issueList(status: $status,effortmax:$effortmax,effortmin:$effortmin) {
            title
              _id
              status
              owner
              id
              effort
              due
              created
            }
          }`;
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(query, vars, this.props.showerror);
    if (data) {
      this.props.showsuccess("Issues loaded");
      this.setState({
        issues: data.issueList
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Title, null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: `/issues/:id`,
      component: _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      deleteissue: this.deleteissue,
      closeIssue: this.closeIssue,
      issues: this.state.issues
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_withToast_jsx__WEBPACK_IMPORTED_MODULE_10___default()(IssueList));

/***/ }),

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Theo\\MERN\\MERN-master\\UI\\src\\withToast.jsx: Unexpected token (34:123)\n\n\u001b[0m \u001b[90m 32 |\u001b[39m             \u001b[36mreturn\u001b[39m(\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mOriginalComponent\u001b[39m showsuccess\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowsuccess} showerror\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowerror} dismiss\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdismiss} props\u001b[33m=\u001b[39m{\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mToast\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 |\u001b[39m                 type\u001b[33m=\u001b[39m{toasttype} showing\u001b[33m=\u001b[39m{toastshowing}  onDismiss\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdismiss}\u001b[33m>\u001b[39m{toastmessage}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mToast\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at JSXParserMixin.raise (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at JSXParserMixin.unexpected (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:3300:16)\n    at JSXParserMixin.parseExprAtom (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:11261:16)\n    at JSXParserMixin.parseExprAtom (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:7007:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at JSXParserMixin.parseUpdate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10855:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10831:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10669:61)\n    at JSXParserMixin.parseExprOps (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10674:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10612:21)\n    at JSXParserMixin.parseExpressionBase (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10566:23)\n    at C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10562:39\n    at JSXParserMixin.allowInAnd (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:12257:12)\n    at JSXParserMixin.parseExpression (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10562:17)\n    at JSXParserMixin.jsxParseExpressionContainer (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6867:31)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6835:21)\n    at JSXParserMixin.jsxParseAttribute (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6888:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6902:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6897:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6921:33)\n    at JSXParserMixin.jsxParseElementAt (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6933:32)\n    at JSXParserMixin.jsxParseElement (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:6990:17)\n    at JSXParserMixin.parseExprAtom (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:7002:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at JSXParserMixin.parseUpdate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10855:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10831:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10669:61)\n    at JSXParserMixin.parseExprOps (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10674:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10612:21)\n    at C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10582:39\n    at JSXParserMixin.allowInAnd (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:12257:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10582:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:11490:28)\n    at JSXParserMixin.parseExprAtom (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:11141:23)\n    at JSXParserMixin.parseExprAtom (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:7007:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at JSXParserMixin.parseUpdate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10855:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10831:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10669:61)\n    at JSXParserMixin.parseExprOps (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10674:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10612:21)\n    at JSXParserMixin.parseExpressionBase (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10566:23)\n    at C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10562:39\n    at JSXParserMixin.allowInAnd (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:12252:16)\n    at JSXParserMixin.parseExpression (C:\\Theo\\MERN\\MERN-master\\UI\\node_modules\\@babel\\parser\\lib\\index.js:10562:17)");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("620e5cfe666207a0de02")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.5052d29077a36000f6b4.hot-update.js.map