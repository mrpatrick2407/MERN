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
    const api =  false ? 0 : process.env.UI_SERVER_API_ENDPOINT;
    const response = await fetch(api, {
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1b1ef79e2814d808c5f0")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.1854e84b66dd8b0e9f2e.hot-update.js.map