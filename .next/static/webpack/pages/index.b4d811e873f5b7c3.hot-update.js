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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Counter = function() {\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_REGISTRY_COUNTERS), countersData = ref.data;\n    var data = countersData === null || countersData === void 0 ? void 0 : countersData.pohcounter;\n    console.log(data);\n    //   const count = ?.length\n    //   const letters = count.toString().split('')\n    console.log(countersData === null || countersData === void 0 ? void 0 : countersData.pohcounter);\n    // console.log(\"letter count\", letters);\n    var total1 = numbers.reduce(function(total, number) {\n        return total + number;\n    }, 0);\n    console.log(\"total:\", numbers);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col-2 -mt-6 flex items-center justify-center gap-4 pb-12 lg:pt-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"focus:text-primary-pink hover:text-primary-pink z-10 cursor-default rounded text-xl font-semibold tracking-wider text-gray-600 transition duration-500 ease-in-out hover:text-opacity-50\",\n            children: \"Images uploaded\"\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/components/Counter.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Counter, \"ZLbqrLjZXdZEPj3fNeVj5eQH4j4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFHaEI7QUFDaUM7O0FBRTFELElBQU1HLE9BQU8sR0FBRyxXQUFNOztJQUNwQixJQUErQkgsR0FBK0IsR0FBL0JBLHdEQUFRLENBQUNFLG1FQUFxQixDQUFDLEVBQXRERSxZQUFrQixHQUFLSixHQUErQixDQUF0REksSUFBSTtJQUNaLElBQU1BLElBQUksR0FBR0MsWUFBWSxhQUFaQSxZQUFZLFdBQVksR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxZQUFZLENBQUVDLFVBQVU7SUFDckNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7SUFDakIsMkJBQTJCO0lBQzNCLCtDQUErQztJQUMvQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNILFlBQVksYUFBWkEsWUFBWSxXQUFZLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsWUFBWSxDQUFFQyxVQUFVLENBQUM7SUFDckMsd0NBQXdDO0lBRXhDLElBQU1HLE1BQUssR0FBR0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsU0FBQ0YsS0FBSyxFQUFFRyxNQUFNO2VBQUtILEtBQUssR0FBR0csTUFBTTtLQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVFLE9BQU8sQ0FBQztJQUM5QixxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsd0VBQXdFO2tCQW1CckYsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDBMQUEwTDtzQkFBQyxpQkFFMU07Ozs7O2lCQUFNOzs7OzthQUNGLENBQ1A7Q0FDRjtHQXBDS1gsT0FBTzs7UUFDb0JILG9EQUFROzs7QUFEbkNHLEtBQUFBLE9BQU87QUFzQ2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGVyLnRzeD81Zjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdFVF9SRUdJU1RSWV9DT1VOVEVSUyB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcydcblxuY29uc3QgQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBjb3VudGVyc0RhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRUdJU1RSWV9DT1VOVEVSUylcbiAgY29uc3QgZGF0YSA9IGNvdW50ZXJzRGF0YT8ucG9oY291bnRlclxuICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyAgIGNvbnN0IGNvdW50ID0gPy5sZW5ndGhcbiAgLy8gICBjb25zdCBsZXR0ZXJzID0gY291bnQudG9TdHJpbmcoKS5zcGxpdCgnJylcbiAgY29uc29sZS5sb2coY291bnRlcnNEYXRhPy5wb2hjb3VudGVyKVxuICAvLyBjb25zb2xlLmxvZyhcImxldHRlciBjb3VudFwiLCBsZXR0ZXJzKTtcblxuICBjb25zdCB0b3RhbCA9IG51bWJlcnMucmVkdWNlKCh0b3RhbCwgbnVtYmVyKSA9PiB0b3RhbCArIG51bWJlciwgMClcbiAgY29uc29sZS5sb2coJ3RvdGFsOicsIG51bWJlcnMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbC0yIC1tdC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHBiLTEyIGxnOnB0LTI0XCI+XG4gICAgICB7LyogPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgJ2dyaWQgZ3JpZC1mbG93LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtMicsXG4gICAgICAgICAgY291bnQgPT09IDAgJiYgJydcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2xldHRlcnMubWFwKChsLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnYW5pbWF0ZS1lbnRlcicsXG4gICAgICAgICAgICAgICdob3Zlcjp0ZXh0LXByaW1hcnktcGluayBmb2N1czp0ZXh0LXByaW1hcnktcGluayByZWxhdGl2ZSBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBiZy13aGl0ZSBwLTMgcHgtMyB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTYwMCBzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1vcGFjaXR5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTInXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAga2V5PXtpICsgJy0nICsgbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvY3VzOnRleHQtcHJpbWFyeS1waW5rIGhvdmVyOnRleHQtcHJpbWFyeS1waW5rIHotMTAgY3Vyc29yLWRlZmF1bHQgcm91bmRlZCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW9wYWNpdHktNTBcIj5cbiAgICAgICAgSW1hZ2VzIHVwbG9hZGVkXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJSZWFjdCIsIkdFVF9SRUdJU1RSWV9DT1VOVEVSUyIsIkNvdW50ZXIiLCJkYXRhIiwiY291bnRlcnNEYXRhIiwicG9oY291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbCIsIm51bWJlcnMiLCJyZWR1Y2UiLCJudW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Counter.tsx\n");

/***/ })

});