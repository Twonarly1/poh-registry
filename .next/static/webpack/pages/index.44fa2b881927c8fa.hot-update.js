"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Counter.tsx":
/*!********************************!*\
  !*** ./components/Counter.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Counter = function() {\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;\n    _s();\n    var ref9 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_REGISTRY_COUNTERS), countersData = ref9.data;\n    //   const count = ?.length\n    //   const letters = count.toString().split('')\n    console.log(countersData === null || countersData === void 0 ? void 0 : (ref = countersData.pohcounter) === null || ref === void 0 ? void 0 : ref.registered);\n    // console.log(\"letter count\", letters);\n    var numbers = [\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref1 = countersData.counters) === null || ref1 === void 0 ? void 0 : ref1.registered),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref2 = countersData.counters) === null || ref2 === void 0 ? void 0 : ref2.vouchingPhase),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref3 = countersData.counters) === null || ref3 === void 0 ? void 0 : ref3.removed),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref4 = countersData.counters) === null || ref4 === void 0 ? void 0 : ref4.expired),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref5 = countersData.counters) === null || ref5 === void 0 ? void 0 : ref5.pendingRegistration),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref6 = countersData.counters) === null || ref6 === void 0 ? void 0 : ref6.pendingRemoval),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref7 = countersData.counters) === null || ref7 === void 0 ? void 0 : ref7.challengedRemoval),\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref8 = countersData.counters) === null || ref8 === void 0 ? void 0 : ref8.challengedRegistration), \n    ];\n    var total1 = numbers.reduce(function(total, number) {\n        return total + number;\n    }, 0);\n    console.log(\"total:\", total1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col-2 -mt-6 flex items-center justify-center gap-4 pb-12 lg:pt-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"focus:text-primary-pink hover:text-primary-pink z-10 cursor-default rounded text-xl font-semibold tracking-wider text-gray-600 transition duration-500 ease-in-out hover:text-opacity-50\",\n            children: \"Images uploaded\"\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Counter, \"ZLbqrLjZXdZEPj3fNeVj5eQH4j4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxJQUFzQixDQUFFZSxzQkFBc0IsQ0FBQztLQUN2RDtJQUVELElBQU1DLE1BQUssR0FBR1YsT0FBTyxDQUFDVyxNQUFNLENBQUMsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNO2VBQUtGLEtBQUssR0FBR0UsTUFBTTtLQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFaEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFYSxNQUFLLENBQUM7SUFDNUIscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdFQUF3RTtrQkFtQnJGLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywwTEFBMEw7c0JBQUMsaUJBRTFNOzs7OztpQkFBTTs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0E5Q0tyQixPQUFPOztRQUNvQkgsb0RBQVE7OztBQURuQ0csS0FBQUEsT0FBTztBQWdEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvdW50ZXIudHN4PzVmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR0VUX1JFR0lTVFJZX0NPVU5URVJTIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJ1xuXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IGNvdW50ZXJzRGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFR0lTVFJZX0NPVU5URVJTKVxuXG4gIC8vICAgY29uc3QgY291bnQgPSA/Lmxlbmd0aFxuICAvLyAgIGNvbnN0IGxldHRlcnMgPSBjb3VudC50b1N0cmluZygpLnNwbGl0KCcnKVxuICBjb25zb2xlLmxvZyhjb3VudGVyc0RhdGE/LnBvaGNvdW50ZXI/LnJlZ2lzdGVyZWQpXG4gIC8vIGNvbnNvbGUubG9nKFwibGV0dGVyIGNvdW50XCIsIGxldHRlcnMpO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBbXG4gICAgTnVtYmVyKGNvdW50ZXJzRGF0YT8uY291bnRlcnM/LnJlZ2lzdGVyZWQpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzPy52b3VjaGluZ1BoYXNlKSxcbiAgICBOdW1iZXIoY291bnRlcnNEYXRhPy5jb3VudGVycz8ucmVtb3ZlZCksXG4gICAgTnVtYmVyKGNvdW50ZXJzRGF0YT8uY291bnRlcnM/LmV4cGlyZWQpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzPy5wZW5kaW5nUmVnaXN0cmF0aW9uKSxcbiAgICBOdW1iZXIoY291bnRlcnNEYXRhPy5jb3VudGVycz8ucGVuZGluZ1JlbW92YWwpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzPy5jaGFsbGVuZ2VkUmVtb3ZhbCksXG4gICAgTnVtYmVyKGNvdW50ZXJzRGF0YT8uY291bnRlcnM/LmNoYWxsZW5nZWRSZWdpc3RyYXRpb24pLFxuICBdXG5cbiAgY29uc3QgdG90YWwgPSBudW1iZXJzLnJlZHVjZSgodG90YWwsIG51bWJlcikgPT4gdG90YWwgKyBudW1iZXIsIDApXG4gIGNvbnNvbGUubG9nKCd0b3RhbDonLCB0b3RhbClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sLTIgLW10LTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgcGItMTIgbGc6cHQtMjRcIj5cbiAgICAgIHsvKiA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAnZ3JpZCBncmlkLWZsb3ctY29sIGp1c3RpZnktY2VudGVyIGdhcC0yJyxcbiAgICAgICAgICBjb3VudCA9PT0gMCAmJiAnJ1xuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bGV0dGVycy5tYXAoKGwsIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICdhbmltYXRlLWVudGVyJyxcbiAgICAgICAgICAgICAgJ2hvdmVyOnRleHQtcHJpbWFyeS1waW5rIGZvY3VzOnRleHQtcHJpbWFyeS1waW5rIHJlbGF0aXZlIGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJnLXdoaXRlIHAtMyBweC0zIHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwIHNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW9wYWNpdHktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMidcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBrZXk9e2kgKyAnLScgKyBsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9jdXM6dGV4dC1wcmltYXJ5LXBpbmsgaG92ZXI6dGV4dC1wcmltYXJ5LXBpbmsgei0xMCBjdXJzb3ItZGVmYXVsdCByb3VuZGVkIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtb3BhY2l0eS01MFwiPlxuICAgICAgICBJbWFnZXMgdXBsb2FkZWRcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIlJlYWN0IiwiR0VUX1JFR0lTVFJZX0NPVU5URVJTIiwiQ291bnRlciIsImNvdW50ZXJzRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9oY291bnRlciIsInJlZ2lzdGVyZWQiLCJudW1iZXJzIiwiTnVtYmVyIiwiY291bnRlcnMiLCJ2b3VjaGluZ1BoYXNlIiwicmVtb3ZlZCIsImV4cGlyZWQiLCJwZW5kaW5nUmVnaXN0cmF0aW9uIiwicGVuZGluZ1JlbW92YWwiLCJjaGFsbGVuZ2VkUmVtb3ZhbCIsImNoYWxsZW5nZWRSZWdpc3RyYXRpb24iLCJ0b3RhbCIsInJlZHVjZSIsIm51bWJlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Counter.tsx\n");

/***/ })

});