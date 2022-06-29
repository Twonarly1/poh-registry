"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nvar ref = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.configureChains)(// [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],\n[\n    wagmi__WEBPACK_IMPORTED_MODULE_9__.chain.mainnet\n], [\n    _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.apiProvider.fallback()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.ApolloProvider, {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_9__.WagmiProvider, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n                coolMode: true,\n                chains: chains,\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.lightTheme)({\n                    accentColor: \"#FFAD33\",\n                    accentColorForeground: \"white\",\n                    borderRadius: \"small\",\n                    fontStack: \"system\"\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_11__.Toaster, {}, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"poh tools\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"icon\",\n                                href: \"/images/proofofhumanity.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-screen overflow-y-scroll bg-slate-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.Footer, {}, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUdXO0FBQ2I7QUFDbUI7QUFDTjtBQUNOO0FBQ3VCO0FBQ2Y7QUFDRDtBQU9YO0FBQ2M7QUFFN0MsSUFBNkJVLEdBSzVCLEdBTDRCQSx1RUFBZSxDQUMxQyxrRUFBa0U7QUFFbEU7SUFBQ0wsZ0RBQWE7Q0FBQyxFQUNmO0lBQUNJLHdFQUFvQixFQUFFO0NBQUMsQ0FDekIsRUFMT1EsTUFBTSxHQUFlUCxHQUs1QixDQUxPTyxNQUFNLEVBQUVDLFFBQVEsR0FBS1IsR0FLNUIsQ0FMZVEsUUFBUTtBQU14QixJQUFNLFVBQVksR0FBS1AseUVBQWlCLENBQUM7SUFDdkNTLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJILE1BQU0sRUFBTkEsTUFBTTtDQUNQLENBQUMsQ0FITUUsVUFBVTtBQUlsQixJQUFNRSxXQUFXLEdBQUdmLG1EQUFZLENBQUM7SUFDL0JnQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZELFFBQVEsRUFBUkEsUUFBUTtDQUNULENBQUM7QUFFRixTQUFTSyxLQUFLLENBQUMsS0FBaUQsRUFBRTtRQUFqREMsU0FBUyxHQUFYLEtBQWlELENBQS9DQSxTQUFTLEVBQUVDLFNBQXNCLEdBQW5DLEtBQWlELENBQXBDQSxTQUFTLENBQUlBLFNBQVM7SUFDaEQscUJBQ0UsOERBQUN2QiwyREFBYztRQUFDd0IsTUFBTSxFQUFFbEIsc0RBQVk7a0JBQ2xDLDRFQUFDRCxnREFBYTtZQUFDbUIsTUFBTSxFQUFFTCxXQUFXO3NCQUNoQyw0RUFBQ1Isc0VBQWtCO2dCQUNqQmMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RWLE1BQU0sRUFBRUEsTUFBTTtnQkFDZFcsS0FBSyxFQUFFaEIsa0VBQVUsQ0FBQztvQkFDaEJpQixXQUFXLEVBQUUsU0FBUztvQkFDdEJDLHFCQUFxQixFQUFFLE9BQU87b0JBQzlCQyxZQUFZLEVBQUUsT0FBTztvQkFDckJDLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDOztrQ0FFRiw4REFBQzdCLHFEQUFPOzs7OzRCQUFHO2tDQUNYLDhEQUFDRixrREFBSTs7MENBQ0gsOERBQUNnQyxPQUFLOzBDQUFDLFdBQVM7Ozs7O29DQUFROzBDQUN4Qiw4REFBQ0MsTUFBSTtnQ0FBQ0MsR0FBRyxFQUFDLE1BQU07Z0NBQUNDLElBQUksRUFBQyw2QkFBNkI7Ozs7O29DQUFHOzs7Ozs7NEJBQ2pEO2tDQUNQLDhEQUFDaEMsOENBQVU7a0NBQ1QsNEVBQUNpQyxLQUFHOzRCQUFDQyxTQUFTLEVBQUMseUNBQXlDOzs4Q0FDdEQsOERBQUN0QywwREFBTTs7Ozt3Q0FBRzs4Q0FDViw4REFBQ3dCLFNBQVMsb0JBQUtDLFNBQVM7Ozs7d0NBQUk7OENBQzVCLDhEQUFDWCxzREFBTTs7Ozt3Q0FBRzs7Ozs7O2dDQUNOOzs7Ozs0QkFDSzs7Ozs7O29CQUNNOzs7OztnQkFDUDs7Ozs7WUFDRCxDQUNsQjtDQUNGO0FBOUJRUyxLQUFBQSxLQUFLO0FBZ0NkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgY2hhaW4sIGNyZWF0ZUNsaWVudCwgV2FnbWlQcm92aWRlciB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IGFwb2xsb0NsaWVudCBmcm9tICcuLi9hcG9sbG8tY2xpZW50J1xuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnXG5pbXBvcnQge1xuICBhcGlQcm92aWRlcixcbiAgY29uZmlndXJlQ2hhaW5zLFxuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgbGlnaHRUaGVtZSxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxufSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0J1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICAvLyBbY2hhaW4ubWFpbm5ldCwgY2hhaW4ucG9seWdvbiwgY2hhaW4ub3B0aW1pc20sIGNoYWluLmFyYml0cnVtXSxcblxuICBbY2hhaW4ubWFpbm5ldF0sXG4gIFthcGlQcm92aWRlci5mYWxsYmFjaygpXVxuKVxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdNeSBSYWluYm93S2l0IEFwcCcsXG4gIGNoYWlucyxcbn0pXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgcGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgPFdhZ21pUHJvdmlkZXIgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXJcbiAgICAgICAgICBjb29sTW9kZT17dHJ1ZX1cbiAgICAgICAgICBjaGFpbnM9e2NoYWluc31cbiAgICAgICAgICB0aGVtZT17bGlnaHRUaGVtZSh7XG4gICAgICAgICAgICBhY2NlbnRDb2xvcjogJyNGRkFEMzMnLFxuICAgICAgICAgICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnc21hbGwnLFxuICAgICAgICAgICAgZm9udFN0YWNrOiAnc3lzdGVtJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb2FzdGVyIC8+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+cG9oIHRvb2xzPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ltYWdlcy9wcm9vZm9maHVtYW5pdHkucG5nXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIG92ZXJmbG93LXktc2Nyb2xsIGJnLXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWNvaWxSb290PlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiSGVhZCIsIkFwb2xsb1Byb3ZpZGVyIiwiVG9hc3RlciIsIlJlY29pbFJvb3QiLCJjaGFpbiIsImNyZWF0ZUNsaWVudCIsIldhZ21pUHJvdmlkZXIiLCJhcG9sbG9DbGllbnQiLCJhcGlQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImdldERlZmF1bHRXYWxsZXRzIiwibGlnaHRUaGVtZSIsIlJhaW5ib3dLaXRQcm92aWRlciIsIkZvb3RlciIsIm1haW5uZXQiLCJmYWxsYmFjayIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJjb29sTW9kZSIsInRoZW1lIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJib3JkZXJSYWRpdXMiLCJmb250U3RhY2siLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});