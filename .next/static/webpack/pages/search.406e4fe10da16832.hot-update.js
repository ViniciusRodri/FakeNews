"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PaginationButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationButtons */ \"./components/PaginationButtons.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n\n\n\nfunction SearchResults(param) {\n    let { results , isActive  } = param;\n    var _results_searchInformation, _results_searchInformation1, _results_items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#92989F] text-sm mb-5 mt-3\",\n                    children: [\n                        \"About \",\n                        (_results_searchInformation = results.searchInformation) === null || _results_searchInformation === void 0 ? void 0 : _results_searchInformation.formattedTotalResults,\n                        \" results (\",\n                        (_results_searchInformation1 = results.searchInformation) === null || _results_searchInformation1 === void 0 ? void 0 : _results_searchInformation1.formattedSearchTime,\n                        \" seconds)\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this),\n                (_results_items = results.items) === null || _results_items === void 0 ? void 0 : _results_items.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-xl mb-8 font-sans\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: result.link,\n                                        className: \" grid gap-2 text-sml font-OpenSans text-[#92989F]\",\n                                        children: [\n                                            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"flex gap-3 bg-red-700 p-2 rounded text-white text-sm\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"/atencao.png\",\n                                                        width: \"40px\",\n                                                        height: \"20px\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                                        lineNumber: 22,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \"Aten\\xe7\\xe3o!!! Leia com cuidado essa not\\xedcia e tenha certeza que \\xe9 relacionada a sua duvida, se n\\xe3o, pesquise novamente de outra forma!\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                                lineNumber: 21,\n                                                columnNumber: 19\n                                            }, this),\n                                            result.formattedUrl\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: result.link,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"truncate text-xl text-[#8AB4F8] group-hover:underline font-OpenSans\",\n                                            children: result.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"line-clamp-2 text-[#92989F] font-OpenSans\",\n                                children: result.snippet\n                            }, void 0, false, {\n                                fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, result.link, true, {\n                        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = SearchResults;\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined)\n}, void 0, false, {\n    fileName: \"/Users/amarildo/Desktop/Fake News App/components/SearchResults.js\",\n    lineNumber: 50,\n    columnNumber: 1\n}, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFvRDtBQUN0QjtBQUM5QixTQUFTRSxjQUFjLEtBQXFCLEVBQUU7UUFBdkIsRUFBRUMsUUFBTyxFQUFFQyxTQUFRLEVBQUUsR0FBckI7UUFLTkQsNEJBQ05BLDZCQUdGQTtJQVJQLHFCQUNFLDhEQUFDRTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzt3QkFBbUM7d0JBQ3ZDSCxDQUFBQSw2QkFBQUEsUUFBUUssaUJBQWlCLGNBQXpCTCx3Q0FBQUEsS0FBQUEsSUFBQUEsMkJBQTJCTSxxQkFBcUI7d0JBQUM7d0JBQ3ZETixDQUFBQSw4QkFBQUEsUUFBUUssaUJBQWlCLGNBQXpCTCx5Q0FBQUEsS0FBQUEsSUFBQUEsNEJBQTJCTyxtQkFBbUI7d0JBQUM7Ozs7Ozs7Z0JBR2pEUCxDQUFBQSxpQkFBQUEsUUFBUVEsS0FBSyxjQUFiUiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZVMsSUFBSSxDQUFDQyx1QkFDbkIsOERBQUNSO3dCQUFzQkMsV0FBVTs7MENBQy9CLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUNDQyxNQUFNRixPQUFPRyxJQUFJO3dDQUNqQlYsV0FBVTs7NENBR1QsQ0FBQ0YsMEJBQ0EsOERBQUNHO2dEQUFFRCxXQUFVOztrRUFDWCw4REFBQ1c7d0RBQUlDLEtBQUk7d0RBQWVDLE9BQU07d0RBQU9DLFFBQU87Ozs7OztvREFBUzs7Ozs7Ozs0Q0FNeERQLE9BQU9RLFlBQVk7Ozs7Ozs7a0RBRXRCLDhEQUFDUDt3Q0FBRUMsTUFBTUYsT0FBT0csSUFBSTtrREFDbEIsNEVBQUNNOzRDQUNDaEIsV0FBVTtzREFHVE8sT0FBT1UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSW5CLDhEQUFDaEI7Z0NBQUVELFdBQVU7MENBQ1ZPLE9BQU9XLE9BQU87Ozs7Ozs7dUJBM0JUWCxPQUFPRyxJQUFJOzs7Ozs4QkFnQ3ZCLDhEQUFDaEIsMERBQWlCQTs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtLQTlDU0U7Y0ErQ1QsOERBQUNHO2NBQ0MsNEVBQUNKLCtDQUFNQTs7Ozs7Ozs7OztBQUdULCtEQUFlQyxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy5qcz81MDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdpbmF0aW9uQnV0dG9ucyBmcm9tICcuL1BhZ2luYXRpb25CdXR0b25zJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7IHJlc3VsdHMsIGlzQWN0aXZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBweC0zIHNtOnBsLVs1JV0gbWQ6cGwtWzE0JV0gbGc6cGwtNTIgZm9udC1PcGVuU2Fuc1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjOTI5ODlGXSB0ZXh0LXNtIG1iLTUgbXQtM1wiPlxuICAgICAgICAgIEFib3V0IHtyZXN1bHRzLnNlYXJjaEluZm9ybWF0aW9uPy5mb3JtYXR0ZWRUb3RhbFJlc3VsdHN9IHJlc3VsdHMgKFxuICAgICAgICAgIHtyZXN1bHRzLnNlYXJjaEluZm9ybWF0aW9uPy5mb3JtYXR0ZWRTZWFyY2hUaW1lfSBzZWNvbmRzKVxuICAgICAgICA8L3A+XG5cbiAgICAgICAge3Jlc3VsdHMuaXRlbXM/Lm1hcCgocmVzdWx0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Jlc3VsdC5saW5rfSBjbGFzc05hbWU9XCJtYXgtdy14bCBtYi04IGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Jlc3VsdC5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgICAgICAgZ3JpZCBnYXAtMiB0ZXh0LXNtbCBmb250LU9wZW5TYW5zIHRleHQtWyM5Mjk4OUZdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHshaXNBY3RpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBiZy1yZWQtNzAwIHAtMiByb3VuZGVkIHRleHQtd2hpdGUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hdGVuY2FvLnBuZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICBBdGVuw6fDo28hISEgTGVpYSBjb20gY3VpZGFkbyBlc3NhIG5vdMOtY2lhIGUgdGVuaGEgY2VydGV6YSBxdWVcbiAgICAgICAgICAgICAgICAgICAgw6kgcmVsYWNpb25hZGEgYSBzdWEgZHV2aWRhLCBzZSBuw6NvLCBwZXNxdWlzZSBub3ZhbWVudGUgZGVcbiAgICAgICAgICAgICAgICAgICAgb3V0cmEgZm9ybWEhXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cmVzdWx0LmZvcm1hdHRlZFVybH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQubGlua30+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBcbiAgICAgICAgICAgdGV4dC14bCB0ZXh0LVsjOEFCNEY4XSBncm91cC1ob3Zlcjp1bmRlcmxpbmUgZm9udC1PcGVuU2Fuc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMiB0ZXh0LVsjOTI5ODlGXSBmb250LU9wZW5TYW5zXCI+XG4gICAgICAgICAgICAgIHtyZXN1bHQuc25pcHBldH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPFBhZ2luYXRpb25CdXR0b25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbjxkaXY+XG4gIDxGb290ZXIgLz5cbjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uQnV0dG9ucyIsIkZvb3RlciIsIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwiaXNBY3RpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic2VhcmNoSW5mb3JtYXRpb24iLCJmb3JtYXR0ZWRUb3RhbFJlc3VsdHMiLCJmb3JtYXR0ZWRTZWFyY2hUaW1lIiwiaXRlbXMiLCJtYXAiLCJyZXN1bHQiLCJhIiwiaHJlZiIsImxpbmsiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1hdHRlZFVybCIsImgyIiwidGl0bGUiLCJzbmlwcGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchResults.js\n"));

/***/ })

});