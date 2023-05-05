"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/IssueAbout.jsx */ "./src/IssueAbout.jsx");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");






function render(req, res) {
  const ele = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {
    location: req.url,
    content: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]));
  res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_3__["default"])(body));
}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueAbout.jsx */ "./src/IssueAbout.jsx");






function LocationProvider({
  children
}) {
  return /*#__PURE__*/React.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, null, children);
}
function Content() {
  return /*#__PURE__*/React.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Switch, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/issues",
    component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    exact: true,
    path: "/report",
    component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    exact: true,
    path: "/about",
    component: _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    exact: true,
    path: "/edit/:id",
    component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
}

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


function displayFormat(date) {
  if (date instanceof Date) {
    return date.toDateString();
  } else if (date != null) {
    //(typeof date)
    return new Date(date).toDateString();
  } else {
    return '';
  }
}
function editFormat(date) {
  //(date+"skad")
  if (date instanceof Date && date != 'null') {
    return date.toISOString().substr(0, 10);
  } else {
    return '';
  }
}
function unformat(str) {
  const val = new Date(str);
  return Number.isNaN(val.getTime()) ? null : val;
}
class DateInput extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: editFormat(props.value),
      focused: false,
      valid: true
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFocus() {
    this.setState({
      focused: true
    });
  }
  onBlur(e) {
    //('onblur'+e.target.value)

    const {
      value,
      valid: oldValid
    } = this.state;
    const {
      onValidityChange,
      onChange
    } = this.props;
    const dateValue = unformat(value);
    const valid = value === '' || dateValue instanceof Date;
    //(dateValue+"dateValue")
    if (valid !== oldValid || onValidityChange) {
      //("onValidityChange")
      onValidityChange(e, valid);
    }
    this.setState({
      focused: false,
      valid: true
    });
    if (valid) {
      //("onvalid")

      onChange(e, dateValue);
    }
  }
  onChange(e) {
    //('onchange'+e.target.value)

    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  }
  render() {
    const {
      valid,
      focused,
      value
    } = this.state;
    const {
      value: origValue,
      name
    } = this.props;
    const className = !valid && !focused ? 'invalid' : null;
    let displayValue;
    if (focused || !valid) {
      //("valid if");
      displayValue = value;
    } else {
      //("else plays"+origValue);
      displayValue = displayFormat(origValue);
      //(displayValue+" displayValue")
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
      type: "text",
      size: 20,
      name: name,
      className: className,
      value: displayValue,
      placeholder: focused ? 'yyyy-mm-dd' : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }
}

/***/ }),

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


const datereg = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
class IssueDetails extends React.Component {
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Description"), /*#__PURE__*/React.createElement("h3", null, issue.description));
  }
}

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueEdit)
/* harmony export */ });
/* harmony import */ var _DateInput_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _graphqlendppoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphqlendppoint */ "./src/graphqlendppoint.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");









class IssueEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      showvalmessage: false,
      toastmessage: '',
      toasttype: "success",
      toastshowing: false,
      issue: {
        id: '',
        title: '',
        owner: '',
        created: '',
        due: '',
        description: '',
        _id: '',
        status: '',
        effort: ''
      },
      invalidfields: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handler = this.handler.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.show = this.show.bind(this);
    this.showsuccess = this.showsuccess.bind(this);
    this.showerror = this.showerror.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }
  componentDidMount() {
    this.loaddata();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loaddata();
    }
  }
  onChange(e, val) {
    const {
      name,
      value: test
    } = e.target;
    let rvalue;
    console.log("valll" + val + "testttt" + test);
    if ((name == 'due' || name == 'created') && val !== null) {
      rvalue = new Date(val).toISOString();
      console.log("rrrrvalll" + rvalue);
    }
    const value = Number.isNaN(val) ? val : test;
    console.log(value + "from parent" + name);
    if ((name == 'due' || name == 'created') && val !== null) {
      this.setState(prevState => ({
        issue: {
          ...prevState.issue,
          [name]: rvalue
        }
      }));
    } else {
      this.setState(prevState => ({
        issue: {
          ...prevState.issue,
          [name]: value
        }
      }));
    }
  }
  onValidityChange(e, valid) {
    const {
      name
    } = e.target;
    this.setState(prevState => {
      const invalidfields = {
        ...prevState.invalidfields,
        [name]: !valid
      };
      if (valid) delete invalidfields[name];
      return {
        invalidfields
      };
    });
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
  async handler(e) {
    e.preventDefault();
    this.show();
    const issue = this.state.issue;
    const query = `mutation IssueUpdate($id: Int!, $changes: Issueupdateinput!) {
      issueUpdate(id: $id, Changes: $changes) {
        id title status owner effort created due description  
        }
      }`;
    const {
      _id,
      id,
      created,
      ...changes
    } = issue;
    const data = await (0,_graphqlendppoint__WEBPACK_IMPORTED_MODULE_2__.graphqlendpoint)(query, {
      id,
      changes
    }, this.showerror);
    console.log(data.issueUpdate.title);
    if (data) {
      this.showsuccess("Updated successfully");
      console.log(data.issueUpdate.id);
      this.setState({
        issue: {
          id: id,
          created: created,
          title: data.issueUpdate.title,
          status: data.issueUpdate.status,
          description: data.issueUpdate.description,
          owner: data.issueUpdate.owner,
          effort: data.issueUpdate.effort,
          due: data.issueUpdate.due
        }
      });
    }
  }
  async loaddata() {
    const id = parseInt(this.props.match.params.id);
    const query = `query Issue($issueId: Int!) {
            issue(id: $issueId) {
            id
            title
            owner
            created
            due
            description
            _id
            status
            effort  
            }
          }`;
    let vars = {
      issueId: id
    };
    const data = await (0,_graphqlendppoint__WEBPACK_IMPORTED_MODULE_2__.graphqlendpoint)(query, vars);
    if (data) {
      const {
        issue
      } = data;
      //issue.due = issue.due ? issue.due.toDateString() : "";
      issue.created = issue.created ? issue.created.toDateString() : "";
      issue.owner = issue.owner != null ? issue.owner : "";
      issue.description = issue.description != null ? issue.description : "";
      this.setState({
        issue
      });
    } else {
      this.setState({
        issue: {}
      });
    }
  }
  show() {
    this.setState({
      showvalmessage: true
    });
  }
  render() {
    const issue = this.state.issue;
    var created = issue.created;
    const showvalmessag = this.state.showvalmessage;
    const {
      invalidfields
    } = this.state;
    const toastmessage = this.state.toastmessage;
    const toastshowing = this.state.toastshowing;
    const toasttype = this.state.toasttype;
    console.log(toastmessage + " " + toastshowing + " " + toasttype);
    console.log("parent edit" + issue.due);
    let messgae;
    console.log("cal message" + showvalmessag);
    if (Object.keys(invalidfields).length !== 0 && showvalmessag) {
      messgae = /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert, {
        onClose: () => {
          this.setState({
            showvalmessag: false
          });
        },
        variant: "danger",
        dismissible: true
      }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert.Heading, null, "Oh Snap ! Check your input again"), /*#__PURE__*/React.createElement("p", null, "Please enter the correct date"));
    }
    return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {
      onSubmit: this.handler
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
      bg: "secondary"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Title, {
      className: "mb-3 mt-3 ms-3 me-3"
    }, `Editing issue: ${issue.id}`)), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup.Text, {
      style: {
        background: 'grey',
        color: 'white'
      },
      bg: "secondary"
    }, "Created"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup.Text, {
      name: "created"
    }, issue.created)), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Owner ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/React.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "secondary",
      key: issue.id,
      name: "owner",
      value: issue.owner,
      onChange: this.onChange
    })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Status ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {
      name: "status",
      value: issue.status,
      "aria-label": "Default select example"
    }, /*#__PURE__*/React.createElement("option", {
      value: "New"
    }, "New"), /*#__PURE__*/React.createElement("option", {
      value: "Assigned"
    }, "Assigned"), /*#__PURE__*/React.createElement("option", {
      value: "Fixed"
    }, "Fixed"), /*#__PURE__*/React.createElement("option", {
      value: "Closed"
    }, "Closed"))))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Effort ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/React.createElement(_NumInput_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: issue.id,
      name: "effort",
      value: issue.effort,
      onChange: this.onChange
    })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Due ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/React.createElement(_DateInput_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onValidityChange: this.onValidityChange,
      key: issue.id,
      name: "due",
      value: issue.due,
      onChange: this.onChange
    })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Title ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/React.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: issue.id,
      name: "title",
      value: issue.title,
      onChange: this.onChange
    })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Description ")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 12
    }, /*#__PURE__*/React.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tag: "textarea",
      key: issue.id,
      rows: 3,
      name: "description",
      value: issue.description,
      onChange: this.onChange
    })))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 12,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      style: {
        width: '200px'
      },
      type: "submit"
    }, "Submit ")))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, null, messgae), /*#__PURE__*/React.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: toasttype,
      showing: toastshowing,
      onDismiss: this.dismiss
    }, toastmessage), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "mb-3 mt-3 ms-3",
      to: `/edit/${issue.id - 1}`
    }, "Prev"), " ", " | ", " ", /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "mb-3 mt-3 ms-3",
      to: `/edit/${issue.id + 1}`
    }, "Next"), " ")));
  }
}
/*
 <table>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>{issue.created}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select name="status"  value={issue.status} onChange={this.onChange}>
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Owner:</td>
              <td>
                <TextInput key={issue.id}  name="owner" value={issue.owner} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Effort:</td>
              <td>
                <Numinput key={issue.id} name="effort" value={issue.effort} onChange={this.onChange}  />
              </td>
            </tr>
            <tr>
              <td>Due:</td>
              <td>
                <DateInput onValidityChange={this.onValidityChange} key={issue.id} name="due" value={issue.due} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <TextInput
                key={issue.id}
                  size={50}
                  name="title"
                  value={issue.title}
                  onChange={this.onChange}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>Description:</td>{" "}
              <td>
                {" "}
                <TextInput
                tag="textarea"
                key={issue.id}
                  rows={8}
                  cols={50}
                  name="description"
                  value={issue.description}
                  onChange={this.onChange}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td />{" "}
              <td>
                <button type="submit">Submit</button>
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
     
*/

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);





class IssueFilter extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor({
    location: {
      search
    }
  }) {
    super();
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_1___default())(search);
    this.state = {
      status: params.get('status') || '',
      effortmin: params.get('effortmin') || '',
      effortmax: params.get('effortmax')
    };
    this.update = this.update.bind(this);
    console.log(params.get('status'));
    this.applyFilter = this.applyFilter.bind(this);
    this.resetfilter = this.resetfilter.bind(this);
    this.onChangeeffortmin = this.onChangeeffortmin.bind(this);
    this.onChangeeffortmax = this.onChangeeffortmax.bind(this);
  }
  update(e) {
    this.setState({
      status: e.target.value
    });
  }
  onChangeeffortmax(e) {
    const string = e.target.value;
    console.log(string);
    if (/^\d+$/.test(string)) {
      console.log("aoid");
      this.setState({
        effortmax: string
      });
    }
  }
  onChangeeffortmin(e) {
    const string = e.target.value;
    if (/^\d+$/.test(string)) {
      this.setState({
        effortmin: e.target.value
      });
    }
  }
  applyFilter(e) {
    const status = this.state.status;
    const {
      effortmin,
      effortmax
    } = this.state;
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_1___default())();
    if (status) params.set('status', status);
    if (effortmin) params.set('effortmin', effortmin);
    if (effortmax) params.set('effortmax', effortmax);
    console.log(params.toString());
    const search = params.toString() ? `?${params.toString()}` : '';
    const {
      history
    } = this.props;
    history.push({
      pathname: '/issues',
      search
    });
  }
  resetfilter() {
    const {
      location: {
        search
      }
    } = this.props;
    const params = new (url_search_params__WEBPACK_IMPORTED_MODULE_1___default())(search);
    const state = params.get('status');
    const effortmax = params.get('effortmax');
    const effortmin = params.get('effortmin');
    this.setState({
      status: state,
      effortmax: effortmax,
      effortmin: effortmin
    });
    console.log("done");
  }
  render() {
    const states = this.state.status;
    const effortmin = this.state.effortmin;
    const effortmax = this.state.effortmax;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      lg: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Select, {
      value: states,
      onChange: this.update
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: ""
    }, "(All)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "New"
    }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Assigned"
    }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Fixed"
    }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Closed"
    }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      lg: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, null, "Effort Between"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      onChange: this.onChangeeffortmin,
      value: effortmin,
      size: 5
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.InputGroup.Text, {
      lg: 2
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      onChange: this.onChangeeffortmax,
      value: effortmax,
      size: 5
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      lg: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      onClick: this.applyFilter
    }, "Apply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "light border border-primary",
      onClick: this.resetfilter
    }, "Reset"))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(IssueFilter));

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueList)
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











class IssueList extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor() {
    super();
    this.state = {
      issues: [],
      toastmessage: '',
      toasttype: "success",
      toastshowing: false
    };
    this.createissue = this.createissue.bind(this);
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteissue = this.deleteissue.bind(this);
    this.showsuccess = this.showsuccess.bind(this);
    this.showerror = this.showerror.bind(this);
    this.dismiss = this.dismiss.bind(this);
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
    const data = await (0,_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_6__.graphqlendpoint)(query, vars, this.showerror);
    if (data) {
      this.showsuccess("Issues loaded");
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
    }, this.showerror);
    if (data) {
      this.showsuccess("Created successfully");
      this.loadData();
    }
  }
  render() {
    const {
      match
    } = this.props;
    const toastmessage = this.state.toastmessage;
    const toastshowing = this.state.toastshowing;
    const toasttype = this.state.toasttype;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {
      bg: "light"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      createIssue: this.createissue
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Title, null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      deleteissue: this.deleteissue,
      closeIssue: this.closeIssue,
      issues: this.state.issues
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: toasttype,
      showing: toastshowing,
      onDismiss: this.dismiss
    }, toastmessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: `/issues/:id`,
      component: _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
    })));
  }
}

/***/ }),

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

function IssueReport() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Placeholder");
}

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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function IssueRow(props) {
  const issue = props.issue;
  const closeIssue = props.closeIssue;
  const index = props.index;
  const deleteissue = props.deleteissue;
  const edit = props => /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Edit Issue");
  const Close = props => /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Close Issue");
  const Delete = props => /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _extends({
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.id), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.status), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.owner), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.effort), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", {
    onClick: handler
  }, issue.title), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: edit
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
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
  }, /*#__PURE__*/React.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiTwotoneEdit, null))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: Close
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px'
    },
    size: "lg",
    type: "button",
    onClick: closeissuefun
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, null))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    placement: "top",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: Delete
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    style: {
      margin: '10px'
    },
    variant: "danger",
    size: "sm",
    type: "button",
    onClick: deleteissuefun
  }, /*#__PURE__*/React.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillDelete, null))))));
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


function IssueTable(props) {
  const closeIssue = props.closeIssue;
  const deleteissue = props.deleteissue;
  console.log('hi');
  const issueRows = props.issues.map((issue, index) => /*#__PURE__*/React.createElement(_IssueRow_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: issue.id,
    issue: issue,
    closeIssue: closeIssue,
    deleteissue: deleteissue,
    index: index
  }));
  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
    striped: true,
    bordered: true,
    hover: true,
    responsive: "sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}

/***/ }),

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

function format(n) {
  return n != null ? n.toString() : '';
}
function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}
class Numinput extends React.Component {
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
    return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Form.Control, {
      type: "text",
      value: value,
      name: this.props.name,
      onChange: this.onChange,
      onBlur: this.onBlur
    });
  }
}

/***/ }),

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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function Navi() {
  const Create = props => /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Create Issue");
  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
    bg: "light",
    expand: "md"
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
    className: "dark"
  }, "IssueTracker"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    exact: true,
    to: "/",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/issues",
    className: "nav-link"
  }, "Issues")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/report",
    className: "nav-link"
  }, "Report"))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
    style: {
      position: 'absolute',
      right: '30px'
    }
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    as: "div",
    drop: "start"
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Toggle, {
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsThreeDotsVertical, null)), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Menu, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {
    href: "#/about"
  }, "About")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("small", null, "      ", /*#__PURE__*/React.createElement("p", {
    className: "text-center"
  }, "        Full source code available at this        ", ' ', "        ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/mrpatrick2407/MERN"
  }, "          GitHub repository        "), "      "), "    ");
}
function Pages() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navi, null), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null)), /*#__PURE__*/React.createElement(Footer, null));
}

/***/ }),

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

function formatData(data) {
  return data != null ? data : "";
}
function unformatData(data) {
  return data.trim().length != 0 ? data : null;
}
class TextInput extends React.Component {
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
    return React.createElement(tag, {
      ...props,
      class: this.props.tag ? "form-control" : "",
      value,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }
}

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);

class Toast extends React.Component {
  componentDidUpdate() {
    const {
      showing,
      onDismiss
    } = this.props;
    if (showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(onDismiss, 4000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }
  render() {
    const showing = this.props.showing;
    const onDismiss = this.props.onDismiss;
    const children = this.props.children;
    const type = this.props.type;
    console.log("Working in toast" + showing + children);
    return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Collapse, {
      in: showing
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '20px;',
        left: '20px'
      }
    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Alert, {
      variant: type,
      onDismiss: onDismiss
    }, children)));
  }
}

/***/ }),

/***/ "./src/graphqlendppoint.js":
/*!*********************************!*\
  !*** ./src/graphqlendppoint.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlendpoint": () => (/* binding */ graphqlendpoint)
/* harmony export */ });
const datereg = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsondatereviver(key, value) {
  if (datereg.test(value)) {
    return new Date(value);
  }
  return value;
}
async function graphqlendpoint(query, variables = {}, showError = null) {
  try {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsondatereviver);
    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        if (showError) showError(`${error.message}:\n ${details}`);
      } else {
        showError(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    if (showError) showError(`Error in sending data to server: ${e.message}`);
  }
}

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "url-search-params":
/*!************************************!*\
  !*** external "url-search-params" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("url-search-params");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1f1ed699554f3d5aec2")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.fea5417cfce9d613508a.hot-update.js.map