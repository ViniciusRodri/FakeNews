"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 3667:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Avatar({ url , className  }) {
    return /*#__PURE__*/ _jsx("img", {
        loading: "lazy",
        className: `h-11 rounded-full cursor-pointer
     transition duration-150 transform hover:scale-110 ${className}`,
        src: url,
        alt: "profile pic"
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Avatar)));


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-8 py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "India"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex link justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "github-brands.png",
                                className: "h-5 px-1 "
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://myaccount.google.com/security-checkup",
                                children: [
                                    " ",
                                    "Github.com/cosmicwanderer7",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://about.google",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://ads.google.com",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "Advertising"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.google.com/intl/en_in/business/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "Business"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.google.com/search/howsearchworks/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "How Search Works"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center text-sm space-x-5 md:ml-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://policies.google.com/privacy?hl=en-IN&fg=1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "Privacy"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://policies.google.com/terms?hl=en-IN&fg=1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "Terms"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.google.com/preferences?hl=en-IN&fg=1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "link",
                                    children: "Settings"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 1488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./components/Avatar.js
var Avatar = __webpack_require__(3667);
;// CONCATENATED MODULE: ./components/HeaderOption.js

function HeaderOption_HeaderOption({ Icon , title , selected  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: `flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-400 
    hover:border-blue-400 pb-2 cursor-pointer ${selected && "text-blue-500 boarder-blue-400"}`,
        children: [
            /*#__PURE__*/ _jsx(Icon, {
                className: "h-5"
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "hidden sm:inline-flex",
                children: title
            })
        ]
    });
}
/* harmony default export */ const components_HeaderOption = ((/* unused pure expression or super */ null && (HeaderOption_HeaderOption)));

;// CONCATENATED MODULE: ./components/HeaderOptions.js





function HeaderOptions() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 boarer-b font-OpenSans",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex space-x-6",
                children: [
                    /*#__PURE__*/ _jsx(HeaderOption, {
                        Icon: SearchIcon,
                        title: "All",
                        selected: true
                    }),
                    /*#__PURE__*/ _jsxs("a", {
                        href: "https://www.google.co.in/imghp?hl=en&ogbl",
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx(HeaderOption, {
                                Icon: PhotographIcon,
                                title: "Images"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("a", {
                        href: "https://www.youtube.com",
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx(HeaderOption, {
                                Icon: PlayIcon,
                                title: "Videos"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("a", {
                        href: "https://news.google.com",
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx(HeaderOption, {
                                Icon: NewspaperIcon,
                                title: "News"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("a", {
                        href: "https://www.google.com/maps",
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx(HeaderOption, {
                                Icon: MapIcon,
                                title: "Maps"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("a", {
                        href: "",
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx(HeaderOption, {
                                Icon: DotsVerticalIcon,
                                title: "More"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex space-x-4",
                children: [
                    /*#__PURE__*/ _jsx("a", {
                        href: "https://www.google.com/preferences?hl=en-IN&fg=1",
                        children: /*#__PURE__*/ _jsx("p", {
                            className: "link",
                            children: "Settings"
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "link",
                        children: "Tools"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_HeaderOptions = ((/* unused pure expression or super */ null && (HeaderOptions)));

;// CONCATENATED MODULE: ./components/Header.js







function Header() {
    const router = (0,router_.useRouter)();
    const searchInputRef = (0,external_react_.useRef)(null);
    const search = (e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) {
            router.push(`/search?term=${term}`);
        } else {
            router.push(`/fail`);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 bg-[#1F2123]x",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex w-full p-6 items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/fake.png",
                    alt: "banner ",
                    height: 40,
                    width: 120,
                    onClick: ()=>router.push("/"),
                    className: "coursor-pointer "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ref: searchInputRef,
                            className: "flex-grow w-full focus:outline-none bg-transparent text-white",
                            type: "text"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.XIcon, {
                            className: "h-7 sm:mr-3 text-white cursor-pointer tarnsition duration-100 transform hover:scale-125 ",
                            onClick: ()=>[
                                    searchInputRef.current.value = ""
                                ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.MicrophoneIcon, {
                            className: "mr-3 h-6 hidden sm:inline-flex text-white border-l-2 pl-4 border-gray-300"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            onClick: search,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.SearchIcon, {
                                className: " mb-1 h-5 hidden sm:inline-flex text-white tarnsition duration-100 transform hover:scale-125 "
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;