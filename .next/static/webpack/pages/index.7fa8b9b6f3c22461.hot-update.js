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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Counter = function() {\n    var ref;\n    _s();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_REGISTRY_COUNTERS), countersData = ref1.data;\n    //   const count = ?.length\n    //   const letters = count.toString().split('')\n    console.log(countersData);\n    // console.log(\"letter count\", letters);\n    var numbers = [\n        Number(countersData === null || countersData === void 0 ? void 0 : (ref = countersData.counters) === null || ref === void 0 ? void 0 : ref.registered),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.vouchingPhase),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.removed),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.expired),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.pendingRegistration),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.pendingRemoval),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.challengedRemoval),\n        Number(countersData === null || countersData === void 0 ? void 0 : countersData.counters.challengedRegistration), \n    ];\n    var total1 = numbers.reduce(function(total, number) {\n        return total + number;\n    }, 0);\n    console.log(total1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col-2 -mt-6 flex items-center justify-center gap-4 pb-12 lg:pt-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"focus:text-primary-pink hover:text-primary-pink z-10 cursor-default rounded text-xl font-semibold tracking-wider text-gray-600 transition duration-500 ease-in-out hover:text-opacity-50\",\n            children: \"Images uploaded\"\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Counter, \"ZLbqrLjZXdZEPj3fNeVj5eQH4j4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFHaEI7QUFDaUM7O0FBRTFELElBQU1HLE9BQU8sR0FBRyxXQUFNO1FBU1hDLEdBQXNCOztJQVIvQixJQUErQkosSUFBK0IsR0FBL0JBLHdEQUFRLENBQUNFLG1FQUFxQixDQUFDLEVBQXRERyxZQUFrQixHQUFLTCxJQUErQixDQUF0REssSUFBSTtJQUVaLDJCQUEyQjtJQUMzQiwrQ0FBK0M7SUFDL0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxZQUFZLENBQUM7SUFDekIsd0NBQXdDO0lBRXhDLElBQU1JLE9BQU8sR0FBRztRQUNkQyxNQUFNLENBQUNMLFlBQVksYUFBWkEsWUFBWSxXQUFVLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsQ0FBQUEsR0FBc0IsR0FBdEJBLFlBQVksQ0FBRU0sUUFBUSxjQUF0Qk4sR0FBc0IsY0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxHQUFzQixDQUFFTyxVQUFVLENBQUM7UUFDMUNGLE1BQU0sQ0FBQ0wsWUFBWSxhQUFaQSxZQUFZLFdBQVUsR0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxZQUFZLENBQUVNLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDO1FBQzVDSCxNQUFNLENBQUNMLFlBQVksYUFBWkEsWUFBWSxXQUFVLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsWUFBWSxDQUFFTSxRQUFRLENBQUNHLE9BQU8sQ0FBQztRQUN0Q0osTUFBTSxDQUFDTCxZQUFZLGFBQVpBLFlBQVksV0FBVSxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLFlBQVksQ0FBRU0sUUFBUSxDQUFDSSxPQUFPLENBQUM7UUFDdENMLE1BQU0sQ0FBQ0wsWUFBWSxhQUFaQSxZQUFZLFdBQVUsR0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxZQUFZLENBQUVNLFFBQVEsQ0FBQ0ssbUJBQW1CLENBQUM7UUFDbEROLE1BQU0sQ0FBQ0wsWUFBWSxhQUFaQSxZQUFZLFdBQVUsR0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxZQUFZLENBQUVNLFFBQVEsQ0FBQ00sY0FBYyxDQUFDO1FBQzdDUCxNQUFNLENBQUNMLFlBQVksYUFBWkEsWUFBWSxXQUFVLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsWUFBWSxDQUFFTSxRQUFRLENBQUNPLGlCQUFpQixDQUFDO1FBQ2hEUixNQUFNLENBQUNMLFlBQVksYUFBWkEsWUFBWSxXQUFVLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsWUFBWSxDQUFFTSxRQUFRLENBQUNRLHNCQUFzQixDQUFDO0tBQ3REO0lBRUQsSUFBTUMsTUFBSyxHQUFHWCxPQUFPLENBQUNZLE1BQU0sQ0FBQyxTQUFDRCxLQUFLLEVBQUVFLE1BQU07ZUFBS0YsS0FBSyxHQUFHRSxNQUFNO0tBQUEsRUFBRSxDQUFDLENBQUM7SUFDbEVmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxNQUFLLENBQUM7SUFDbEIscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdFQUF3RTtrQkFtQnJGLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywwTEFBMEw7c0JBQUMsaUJBRTFNOzs7OztpQkFBTTs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0E5Q0twQixPQUFPOztRQUNvQkgsb0RBQVE7OztBQURuQ0csS0FBQUEsT0FBTztBQWdEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvdW50ZXIudHN4PzVmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR0VUX1JFR0lTVFJZX0NPVU5URVJTIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJ1xuXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IGNvdW50ZXJzRGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFR0lTVFJZX0NPVU5URVJTKVxuXG4gIC8vICAgY29uc3QgY291bnQgPSA/Lmxlbmd0aFxuICAvLyAgIGNvbnN0IGxldHRlcnMgPSBjb3VudC50b1N0cmluZygpLnNwbGl0KCcnKVxuICBjb25zb2xlLmxvZyhjb3VudGVyc0RhdGEpXG4gIC8vIGNvbnNvbGUubG9nKFwibGV0dGVyIGNvdW50XCIsIGxldHRlcnMpO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBbXG4gICAgTnVtYmVyKGNvdW50ZXJzRGF0YT8uY291bnRlcnM/LnJlZ2lzdGVyZWQpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzLnZvdWNoaW5nUGhhc2UpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzLnJlbW92ZWQpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzLmV4cGlyZWQpLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzLnBlbmRpbmdSZWdpc3RyYXRpb24pLFxuICAgIE51bWJlcihjb3VudGVyc0RhdGE/LmNvdW50ZXJzLnBlbmRpbmdSZW1vdmFsKSxcbiAgICBOdW1iZXIoY291bnRlcnNEYXRhPy5jb3VudGVycy5jaGFsbGVuZ2VkUmVtb3ZhbCksXG4gICAgTnVtYmVyKGNvdW50ZXJzRGF0YT8uY291bnRlcnMuY2hhbGxlbmdlZFJlZ2lzdHJhdGlvbiksXG4gIF1cblxuICBjb25zdCB0b3RhbCA9IG51bWJlcnMucmVkdWNlKCh0b3RhbCwgbnVtYmVyKSA9PiB0b3RhbCArIG51bWJlciwgMClcbiAgY29uc29sZS5sb2codG90YWwpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbC0yIC1tdC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHBiLTEyIGxnOnB0LTI0XCI+XG4gICAgICB7LyogPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ2dyaWQgZ3JpZC1mbG93LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtMicsXG4gICAgICAgICAgY291bnQgPT09IDAgJiYgJydcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2xldHRlcnMubWFwKChsLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnYW5pbWF0ZS1lbnRlcicsXG4gICAgICAgICAgICAgICdob3Zlcjp0ZXh0LXByaW1hcnktcGluayBmb2N1czp0ZXh0LXByaW1hcnktcGluayByZWxhdGl2ZSBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBiZy13aGl0ZSBwLTMgcHgtMyB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTYwMCBzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1vcGFjaXR5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTInXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAga2V5PXtpICsgJy0nICsgbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvY3VzOnRleHQtcHJpbWFyeS1waW5rIGhvdmVyOnRleHQtcHJpbWFyeS1waW5rIHotMTAgY3Vyc29yLWRlZmF1bHQgcm91bmRlZCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW9wYWNpdHktNTBcIj5cbiAgICAgICAgSW1hZ2VzIHVwbG9hZGVkXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJSZWFjdCIsIkdFVF9SRUdJU1RSWV9DT1VOVEVSUyIsIkNvdW50ZXIiLCJjb3VudGVyc0RhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm51bWJlcnMiLCJOdW1iZXIiLCJjb3VudGVycyIsInJlZ2lzdGVyZWQiLCJ2b3VjaGluZ1BoYXNlIiwicmVtb3ZlZCIsImV4cGlyZWQiLCJwZW5kaW5nUmVnaXN0cmF0aW9uIiwicGVuZGluZ1JlbW92YWwiLCJjaGFsbGVuZ2VkUmVtb3ZhbCIsImNoYWxsZW5nZWRSZWdpc3RyYXRpb24iLCJ0b3RhbCIsInJlZHVjZSIsIm51bWJlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Counter.tsx\n");

/***/ })

});