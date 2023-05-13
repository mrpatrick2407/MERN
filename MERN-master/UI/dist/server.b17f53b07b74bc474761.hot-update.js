"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);




class IssueAdd extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false
    };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    console.log(form.owner.value + "heheh");
    const newissue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 24 * 60 * 60 * 10)
    };
    const createissue = this.props.createIssue;
    createissue(newissue);
    form.owner.value = '';
    form.title.value = '';
    this.setState({
      showmodal: false
    });
  }
  render() {
    const showmodal = this.state.showmodal;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "secondary",
      onClick: () => {
        this.setState({
          showmodal: true
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAdd, null), "Add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      size: "lg",
      show: showmodal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, null, "Create Issue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
      name: "issueAdd",
      onSubmit: e => this.handle(e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
      autoFocus: true,
      name: "owner",
      placeholder: "owner"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
      name: "title",
      placeholder: "title"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
      lg: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: this.handle,
      type: "submit",
      className: "w-100"
    }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => {
        this.setState({
          showmodal: false
        });
      },
      style: {
        width: "140px"
      },
      variant: "secondary"
    }, "Cancel"))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(IssueAdd));

/***/ }),

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

/***/ }),

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













const SECTION_SIZE = 5;
function PageLink({
  page,
  params,
  activePage,
  children
}) {
  params.set('page', page);
  if (page === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(children, {
    disabled: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    active: page === activePage,
    to: `/issues/?${params.toString()}`
  }, children);
}
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
        issues: data.issueList.issuesDb,
        pages: data.issueList.pages
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
        const deleted = newlist.splice(index, 1);
        alert(deleted);
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
    const pages = this.state.pages;
    const {
      location: {
        search
      }
    } = this.props;
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_2___default())(search);
    const page = params.get('page') ? parseInt(params.get('page')) : 1;
    let items = [];
    let prevSection = 0;
    let nextSection = 6;
    let prevpage;
    let nextpage;
    if (pages) {
      const startPage = (page - 1) / SECTION_SIZE * SECTION_SIZE + 1; //startpage will always be multiple of SECTION_SIZE

      const endPage = Math.min(startPage + SECTION_SIZE - 1, pages);
      prevSection = startPage == 1 ? 0 : startPage - SECTION_SIZE;
      nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;
      if (prevSection < 0) {
        prevSection = 1;
      }
      prevpage = `#/issues?page=${prevSection}`;
      prevpage = prevpage.toString();
      nextpage = `#/issues?page=${nextSection}`;
      nextpage = nextpage.toString();
      for (let i = startPage; i <= endPage; i++) {
        const pagelink = `#/issues?page=${i}`.toString();
        items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Item, {
          href: pagelink,
          active: i === page
        }, i));
      }
    }
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
    })), pages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Item, {
      disabled: prevSection === 0,
      href: prevpage
    }, '<')), items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Item, {
      href: nextpage
    }, '>'))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(IssueList));

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("42ba271e8f565953bc24")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.b17f53b07b74bc474761.hot-update.js.map