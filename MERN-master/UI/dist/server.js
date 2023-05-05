/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }
  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";
function dummy() {}
function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}
function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}
module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);
module.exports.setLogLevel = function (level) {
  logLevel = level;
};
module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;
  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!***********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?1000 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?1000";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
  var hotPollInterval = +__resourceQuery.slice(1) || 0;
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  var checkForUpdate = function checkForUpdate(fromUpdate) {
    if (module.hot.status() === "idle") {
      module.hot.check(true).then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log("info", "[HMR] Update applied.");
          return;
        }
        __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
        checkForUpdate(true);
      }).catch(function (err) {
        var status = module.hot.status();
        if (["abort", "fail"].indexOf(status) >= 0) {
          log("warning", "[HMR] Cannot apply update.");
          log("warning", "[HMR] " + log.formatError(err));
          log("warning", "[HMR] You need to restart the application!");
        } else {
          log("warning", "[HMR] Update failed: " + log.formatError(err));
        }
      });
    }
  };
  setInterval(checkForUpdate, hotPollInterval);
} else {}

/***/ }),

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");
/* harmony import */ var _src_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/graphqlendppoint.js */ "./src/graphqlendppoint.js");
/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store.js */ "./src/store.js");
/* harmony import */ var _src_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/IssueFilter.jsx */ "./src/IssueFilter.jsx");








async function render(req, res) {
  const query = `query {about}`;
  const inital = await (0,_src_graphqlendppoint_js__WEBPACK_IMPORTED_MODULE_5__.graphqlendpoint)(query);
  console.log("this is the intial value of graphqledpoint fro render.jsx" + JSON.stringify(inital));
  _src_store_js__WEBPACK_IMPORTED_MODULE_6__["default"].inital = inital;
  const ele = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: req.url,
    content: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(ele);
  res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
function template(body) {
  return `<html> 
    <head>
         <style> 
           a.active{
            background: #C0DBEA;
           }
           input.invalid {border-color: red;}    div.error {color: red;}
          table.bordered-table th, td {border: 5px solid cyan; padding: 4px;} table.bordered-table {border-collapse: collapse;}

            .isloggedin{ color :aqua; text-shadow: 10px 10px 50px black; } 
            .isloggedout{ visibility: hidden; } 
            .isloggedout::after{ visibility: visible; content: "Sorry to see you go :("; letter-spacing: 10px; color: black; } 
        </style> 
        <script src="https://unpkg.com/react@16/umd/react.development.js"> </script> 
        <link rel="icon" type="image/png" href="google-logo-9808.png">
        <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="/env.js"></script>
        <script src="/vendor.bundle.js"></script>
        <script src="/app.bundle.js"></script>
    </head> 
             <body> 
                <div id="con"> ${body} </div> 
                
            </body> 
</html>`;
}

/***/ }),

/***/ "./server/uiserver.js":
/*!****************************!*\
  !*** ./server/uiserver.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);





const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
dotenv__WEBPACK_IMPORTED_MODULE_4___default().config();
const port = process.env.PORT;
if (true) {
  const webpack = __webpack_require__(/*! webpack */ "webpack");
  const devMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
  const hotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
  const config = (__webpack_require__(/*! ../web.config.js */ "./web.config.js")[0]);
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}
if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
  console.log("process  " + process.env.UI_SERVER_API_ENDPOINT + process.env.UI_API_ENDPOINT);
}
if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}
app.get('/env.js', (req, res) => {
  const env = {
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT
  };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"]('src'));
app.get("/about", (req, res, next) => {
  (0,_render_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res, next);
});
app.use('/graphql', http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default()({
  target: 'http://localhost:3000'
}));
app.get('*', (req, res) => {
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_0___default().join("src/index.html"));
});
app.listen(port, () => {
  console.log(`Listening onport ${port}`);
});
if (module.hot.accept) {
  module.hot.accept(/*! ./render.jsx */ "./server/render.jsx", () => { /* harmony import */ _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
 });
}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function LocationProvider({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, null, children);
}
function Content() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/issues",
    component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    exact: true,
    path: "/report",
    component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    exact: true,
    path: "/about",
    component: _IssueAbout_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
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

"use strict";
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

/***/ "./src/IssueAbout.jsx":
/*!****************************!*\
  !*** ./src/IssueAbout.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueAbout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/store.js");


class IssueAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor() {
    super();
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center"
    }, JSON.stringify(_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, JSON.stringify(_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].inital.about)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Error"));
  }
}

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Navi() {
  const Create = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    id: "button-tooltip"
  }, props), "Create Issue");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
    bg: "light",
    expand: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
    className: "dark"
  }, "IssueTracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    exact: true,
    to: "/",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/issues",
    className: "nav-link"
  }, "Issues")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/report",
    className: "nav-link"
  }, "Report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
    style: {
      position: 'absolute',
      right: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    as: "div",
    drop: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Toggle, {
    variant: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsThreeDotsVertical, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Dropdown.Item, {
    href: "#/about"
  }, "About")))));
}
function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("small", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
    className: "text-center"
  }, "        Full source code available at this        ", ' ', "        ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: "https://github.com/mrpatrick2407/MERN"
  }, "          GitHub repository        "), "      "), "    ");
}
function Pages() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Navi, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Footer, null));
}

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Toast extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Collapse, {
      in: showing
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        position: 'absolute',
        bottom: '20px;',
        left: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Alert, {
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

"use strict";
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
    const response = await fetch('http://localhost:3000/graphql', {
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
    return e;
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./web.config.js":
/*!***********************!*\
  !*** ./web.config.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");
const nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");
const webpack = __webpack_require__(/*! webpack */ "webpack");
const browserConfig = {
  mode: 'development',
  entry: {
    app: ['./browser/App.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              ie: '11',
              edge: '112',
              safari: '10',
              firefox: '111',
              chrome: '112'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  devtool: 'source-map',
  plugins: [new webpack.DefinePlugin({
    __isBrowser__: 'true'
  })]
};
const serverConfig = {
  mode: 'development',
  entry: {
    server: ['./server/uiserver.js']
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              node: '18'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  },
  devtool: 'source-map',
  plugins: [new webpack.DefinePlugin({
    __isBrowser__: 'false'
  })]
};
module.exports = [browserConfig, serverConfig];

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "url-search-params":
/*!************************************!*\
  !*** external "url-search-params" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("url-search-params");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("server." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1fb3f1122a413fe8d6a8")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./server/uiserver.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack/hot/poll.js?1000");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map