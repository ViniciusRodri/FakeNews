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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _HeaderOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderOptions */ \"./components/HeaderOptions.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const search = (e)=>{\n        e.preventDefault();\n        const term = searchInputRef.current.value;\n        if (!term) return;\n        router.push(\"/search?term=\".concat(term));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 bg-[#1F2123]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full p-6 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/fake.png\",\n                    alt: \"banner \",\n                    height: 40,\n                    width: 120,\n                    onClick: ()=>router.push(\"/\"),\n                    className: \"coursor-pointer \"\n                }, void 0, false, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: searchInputRef,\n                            className: \"flex-grow w-full focus:outline-none bg-transparent text-white\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.XIcon, {\n                            className: \"h-7 sm:mr-3 text-white cursor-pointer tarnsition duration-100 transform hover:scale-125 \",\n                            onClick: ()=>[\n                                    searchInputRef.current.value = \"\"\n                                ]\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MicrophoneIcon, {\n                            className: \"mr-3 h-6 hidden sm:inline-flex text-white border-l-2 pl-4 border-gray-300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: search,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                                className: \" mb-1 h-5 hidden sm:inline-flex text-white tarnsition duration-100 transform hover:scale-125 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amarildo/Desktop/Fake News App/components/Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"AEV146mX0Fbc4rXKci2kjxGVV1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDUztBQUNUO0FBQzhDO0FBQy9DO0FBQ2M7QUFFNUMsU0FBU1EsU0FBUzs7SUFDaEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU1TLGlCQUFpQlIsNkNBQU1BLENBQUMsSUFBSTtJQUVsQyxNQUFNUyxTQUFTLENBQUNDLElBQU07UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0osZUFBZUssT0FBTyxDQUFDQyxLQUFLO1FBRXpDLElBQUksQ0FBQ0YsTUFBTTtRQUVYTCxPQUFPUSxJQUFJLENBQUMsZ0JBQXFCLE9BQUxIO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNJO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ25CLG1EQUFLQTtvQkFDSnFCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBRUpDLFFBQVE7b0JBQ1JDLE9BQU87b0JBQ1BDLFNBQVMsSUFBTWhCLE9BQU9RLElBQUksQ0FBQztvQkFDM0JFLFdBQVU7Ozs7Ozs4QkFHWiw4REFBQ087b0JBQUtQLFdBQVU7O3NDQUNkLDhEQUFDUTs0QkFDQ0MsS0FBS2xCOzRCQUNMUyxXQUFVOzRCQUNWVSxNQUFLOzs7Ozs7c0NBRVAsOERBQUN4QiwyREFBS0E7NEJBQ0pjLFdBQVU7NEJBQ1ZNLFNBQVMsSUFBTTtvQ0FBRWYsZUFBZUssT0FBTyxDQUFDQyxLQUFLLEdBQUc7aUNBQUk7Ozs7OztzQ0FFdEQsOERBQUNiLG9FQUFjQTs0QkFBQ2dCLFdBQVU7Ozs7OztzQ0FFMUIsOERBQUNXOzRCQUFPRCxNQUFLOzRCQUFTSixTQUFTZDtzQ0FDN0IsNEVBQUNQLGdFQUFVQTtnQ0FBQ2UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQztHQTdDU1g7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQStDVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1pY3JvcGhvbmVJY29uLCBTZWFyY2hJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBIZWFkZXJPcHRpb25zIGZyb20gJy4vSGVhZGVyT3B0aW9ucyc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNlYXJjaElucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgaWYgKCF0ZXJtKSByZXR1cm47XG5cbiAgICByb3V0ZXIucHVzaChgL3NlYXJjaD90ZXJtPSR7dGVybX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGJnLVsjMUYyMTIzXVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9mYWtlLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiYmFubmVyXG4gICAgICAgICAgXCJcbiAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3Vyc29yLXBvaW50ZXIgXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBweC01IHB5LTMgbWwtMTAgbXItNSBib3JkZXIgYm9kZXItZ3JheS0yMDAgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBtYXgtdy0zeGwgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17c2VhcmNoSW5wdXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxYSWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHNtOm1yLTMgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciB0YXJuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1IFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBbKHNlYXJjaElucHV0UmVmLmN1cnJlbnQudmFsdWUgPSAnJyldfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1pY3JvcGhvbmVJY29uIGNsYXNzTmFtZT1cIm1yLTMgaC02IGhpZGRlbiBzbTppbmxpbmUtZmxleCB0ZXh0LXdoaXRlIGJvcmRlci1sLTIgcGwtNCBib3JkZXItZ3JheS0zMDBcIiAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17c2VhcmNofT5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cIiBtYi0xIGgtNSBoaWRkZW4gc206aW5saW5lLWZsZXggdGV4dC13aGl0ZSB0YXJuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1IFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VSZWYiLCJNaWNyb3Bob25lSWNvbiIsIlNlYXJjaEljb24iLCJYSWNvbiIsIkF2YXRhciIsIkhlYWRlck9wdGlvbnMiLCJIZWFkZXIiLCJyb3V0ZXIiLCJzZWFyY2hJbnB1dFJlZiIsInNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRlcm0iLCJjdXJyZW50IiwidmFsdWUiLCJwdXNoIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiZm9ybSIsImlucHV0IiwicmVmIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});