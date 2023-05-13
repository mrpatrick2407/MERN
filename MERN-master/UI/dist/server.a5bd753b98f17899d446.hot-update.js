"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
function template(body, data) {
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
        
    </head> 
             <body> 
                <div id="con"> ${body} </div>
                <script src="/vendor.bundle.js"></script>
        <script src="/app.bundle.js"></script> 
                <script>window.__INITIAL_DATA__ = ${JSON.stringify(data)}</script>
            </body> 
</html>`;
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aec664a8143e3e2b2297")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.a5bd753b98f17899d446.hot-update.js.map