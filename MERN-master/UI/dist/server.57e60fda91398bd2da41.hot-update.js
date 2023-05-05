"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

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










class IssueEdit extends (react__WEBPACK_IMPORTED_MODULE_6___default().Component) {
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
      messgae = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert, {
        onClose: () => {
          this.setState({
            showvalmessag: false
          });
        },
        variant: "danger",
        dismissible: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert.Heading, null, "Oh Snap ! Check your input again"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, "Please enter the correct date"));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {
      onSubmit: this.handler
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {
      bg: "secondary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Title, {
      className: "mb-3 mt-3 ms-3 me-3"
    }, `Editing issue: ${issue.id}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup.Text, {
      style: {
        background: 'grey',
        color: 'white'
      },
      bg: "secondary"
    }, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup.Text, {
      name: "created"
    }, issue.created)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Owner ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "secondary",
      key: issue.id,
      name: "owner",
      value: issue.owner,
      onChange: this.onChange
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Status ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {
      name: "status",
      value: issue.status,
      "aria-label": "Default select example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("option", {
      value: "New"
    }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("option", {
      value: "Assigned"
    }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("option", {
      value: "Fixed"
    }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("option", {
      value: "Closed"
    }, "Closed"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Effort ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_NumInput_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: issue.id,
      name: "effort",
      value: issue.effort,
      onChange: this.onChange
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Due ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DateInput_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onValidityChange: this.onValidityChange,
      key: issue.id,
      name: "due",
      value: issue.due,
      onChange: this.onChange
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Title ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: issue.id,
      name: "title",
      value: issue.title,
      onChange: this.onChange
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Description ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 6,
      sm: 9,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tag: "textarea",
      key: issue.id,
      rows: 3,
      name: "description",
      value: issue.description,
      onChange: this.onChange
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3 mt-3 ms-5 me-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      lg: 12,
      sm: 3,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      style: {
        width: '200px'
      },
      type: "submit"
    }, "Submit ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, null, messgae), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: toasttype,
      showing: toastshowing,
      onDismiss: this.dismiss
    }, toastmessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "mb-3 mt-3 ms-3",
      to: `/edit/${issue.id - 1}`
    }, "Prev"), " ", " | ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fc7d099c03540e1bf468")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.57e60fda91398bd2da41.hot-update.js.map