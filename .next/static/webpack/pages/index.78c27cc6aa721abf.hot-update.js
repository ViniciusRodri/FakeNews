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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);\n    const search = (e)=>{\n        e.preventDefault();\n        const term = searchInputRef.current.value;\n        if (!term) return;\n        router.push(\"/search?term=\".concat(term));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-[url('/bg.gif')] bg-cover bg-no-repeat bg-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center h-screen \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Fake News\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"FakeNewsSearch\",\n                            content: \"Um site funcional para confiar not\\xedcias e duvidas.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col items-center justify-center flex-grow w-4/5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            src: \"/fake.png\",\n                            alt: \"logo\",\n                            height: 97,\n                            width: 397,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {\n                                    className: \"h-5 mr-3 text-white \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ref: searchInputRef,\n                                    type: \"text\",\n                                    className: \"flex-grow focus:outline-none bg-transparent text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: search,\n                                className: \"btn\",\n                                children: \"Pesquise aqui!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex link justify-center text-sm mt-7 pr-1 text-blue-700 items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"google-account-security.png\",\n                                    className: \"h-5 px-1 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-white\",\n                                    href: \"https://www.tjpr.jus.br/noticias-2-vice/-/asset_publisher/sTrhoYRKnlQe/content/o-perigo-das-fake-news/14797?inheritRedirect=false\",\n                                    children: [\n                                        \" \",\n                                        \"Tire 2 minutos para saber mais o que s\\xe3o as Fake News e porque temos que tomar cuidado.\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amarildo/Desktop/Fake News App/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"AEV146mX0Fbc4rXKci2kjxGVV1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ2E7QUFDQTtBQUNBO0FBQ1k7QUFDZ0I7QUFDdkM7QUFDQTtBQUNTO0FBRXpCLFNBQVNVLE9BQU87O0lBQzdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxpQkFBaUJKLDZDQUFNQSxDQUFDLElBQUk7SUFDbEMsTUFBTUssU0FBUyxDQUFDQyxJQUFNO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU9KLGVBQWVLLE9BQU8sQ0FBQ0MsS0FBSztRQUN6QyxJQUFJLENBQUNGLE1BQU07UUFFWEwsT0FBT1EsSUFBSSxDQUFDLGdCQUFxQixPQUFMSDtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ3JCLGtEQUFJQTs7c0NBQ0gsOERBQUNzQjtzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBUTs7Ozs7O3NDQUVWLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUd4Qiw4REFBQ0M7b0JBQUtSLFdBQVU7O3NDQUNkLDhEQUFDZCxtREFBS0E7NEJBQUN1QixLQUFJOzRCQUFZQyxLQUFJOzRCQUFPQyxRQUFROzRCQUFJQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7c0NBRWxFLDhEQUFDZDs0QkFDQ0MsV0FBVTs7OENBR1YsOERBQUNoQixnRUFBVUE7b0NBQUNnQixXQUFVOzs7Ozs7OENBQ3RCLDhEQUFDYztvQ0FDQ0MsS0FBS3hCO29DQUNMeUIsTUFBSztvQ0FDTGhCLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNpQjtnQ0FBT0MsU0FBUzFCO2dDQUFRUSxXQUFVOzBDQUFNOzs7Ozs7Ozs7OztzQ0FLM0MsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ21CO29DQUFJVixLQUFJO29DQUE4QlQsV0FBVTs7Ozs7O2dDQUFtQjs4Q0FDcEUsOERBQUNvQjtvQ0FDQ3BCLFdBQVU7b0NBQ1ZPLE1BQUs7O3dDQUVKO3dDQUFJO3dDQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZDLENBQUM7R0ExRHVCbEI7O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9BdmF0YXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IFZpZXdHcmlkSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiwgTWljcm9waG9uZUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGlmICghdGVybSkgcmV0dXJuO1xuXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/dGVybT0ke3Rlcm19YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1bdXJsKCcvYmcuZ2lmJyldIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBiZy1jZW50ZXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtc2NyZWVuIFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RmFrZSBOZXdzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cIkZha2VOZXdzU2VhcmNoXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJVbSBzaXRlIGZ1bmNpb25hbCBwYXJhIGNvbmZpYXIgbm90w61jaWFzIGUgZHV2aWRhcy5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1ncm93IHctNC81XCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9mYWtlLnBuZ1wiIGFsdD1cImxvZ29cIiBoZWlnaHQ9ezk3fSB3aWR0aD17Mzk3fSBwcmlvcml0eSAvPlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbXQtNSBob3ZlcjpzaGFkb3ctbGcgZm9jdXMtd2l0aGluOnNoYWRvdy1sZyBtYXgtdy1tZCByb3VuZGVkLWZ1bGxcbiAgICAgIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHgtNSBweS0zIGl0ZW1zLWNlbnRlciBzbTptYXgtdy14bCBsZzptYXgtdy0yeGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSBtci0zIHRleHQtd2hpdGUgXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e3NlYXJjaElucHV0UmVmfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBmb2N1czpvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMiBzcGFjZS15LTIganVzdGlmeS1jZW50ZXIgbXQtOCBzbTpzcGFjZS15LTAgc206ZmxleC1yb3cgc206c3BhY2UteC00IGZvbnQtVWJ1bnR1XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0gY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIFBlc3F1aXNlIGFxdWkhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsaW5rIGp1c3RpZnktY2VudGVyIHRleHQtc20gbXQtNyBwci0xIHRleHQtYmx1ZS03MDAgaXRlbXMtY2VudGVyIG1kOmNvbC1zcGFuLTIgbGc6Y29sLXNwYW4tMSBsZzpjb2wtc3RhcnQtMiBmb250LVVidW50dVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJnb29nbGUtYWNjb3VudC1zZWN1cml0eS5wbmdcIiBjbGFzc05hbWU9XCJoLTUgcHgtMSBcIj48L2ltZz57JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50anByLmp1cy5ici9ub3RpY2lhcy0yLXZpY2UvLS9hc3NldF9wdWJsaXNoZXIvc1RyaG9ZUktubFFlL2NvbnRlbnQvby1wZXJpZ28tZGFzLWZha2UtbmV3cy8xNDc5Nz9pbmhlcml0UmVkaXJlY3Q9ZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBUaXJlIDIgbWludXRvcyBwYXJhIHNhYmVyIG1haXMgbyBxdWUgc8OjbyBhcyBGYWtlIE5ld3MgZSBwb3JxdWVcbiAgICAgICAgICAgICAgdGVtb3MgcXVlIHRvbWFyIGN1aWRhZG8ueycgJ31cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkF2YXRhciIsIkZvb3RlciIsIkhlYWRlciIsIlZpZXdHcmlkSWNvbiIsIlNlYXJjaEljb24iLCJNaWNyb3Bob25lSWNvbiIsIkltYWdlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsInNlYXJjaElucHV0UmVmIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZm9ybSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicHJpb3JpdHkiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});