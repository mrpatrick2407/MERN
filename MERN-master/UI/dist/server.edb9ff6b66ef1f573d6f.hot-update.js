"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

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
    console.log("tree" + query);
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
    console.log("body" + body);
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cb1231a2ef5f0f6f90cc")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.edb9ff6b66ef1f573d6f.hot-update.js.map