self["webpackHotUpdate_N_E"]("pages/marine-algae/[name]",{

/***/ "./node_modules/.prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/.prisma/client/index-browser.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));

const {
  Decimal
} = __webpack_require__(/*! @prisma/client/runtime/index-browser */ "./node_modules/@prisma/client/runtime/index-browser.js")


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.29.1
 * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
 */
Prisma.prismaVersion = {
  client: "2.29.1",
  engine: "1be4cd60b89afa04b192acb1ef47758a39810f3a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.MarineScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  title: 'title',
  desc: 'desc',
  img1: 'img1',
  img2: 'img2',
  img3: 'img3',
  img4: 'img4',
  img5: 'img5',
  para1: 'para1',
  para2: 'para2',
  para3: 'para3',
  para4: 'para4',
  para5: 'para5',
  division: 'division',
  class: 'class',
  order: 'order',
  family: 'family',
  basionym: 'basionym',
  synonym: 'synonym',
  ecology: 'ecology',
  distribution: 'distribution',
  habitat: 'habitat',
  orientation1: 'orientation1',
  orientation2: 'orientation2',
  orientation3: 'orientation3',
  orientation4: 'orientation4',
  orientation5: 'orientation5',
  img1Caption: 'img1Caption',
  img2Caption: 'img2Caption',
  img3Caption: 'img3Caption',
  img4Caption: 'img4Caption',
  img5Caption: 'img5Caption'
});

exports.Prisma.FreshwaterScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  title: 'title',
  desc: 'desc',
  img1: 'img1',
  img2: 'img2',
  img3: 'img3',
  img4: 'img4',
  img5: 'img5',
  para1: 'para1',
  para2: 'para2',
  para3: 'para3',
  para4: 'para4',
  para5: 'para5',
  division: 'division',
  class: 'class',
  order: 'order',
  family: 'family',
  basionym: 'basionym',
  habitat: 'habitat',
  orientation1: 'orientation1',
  orientation2: 'orientation2',
  orientation3: 'orientation3',
  orientation4: 'orientation4',
  orientation5: 'orientation5',
  img1Caption: 'img1Caption',
  img2Caption: 'img2Caption',
  img3Caption: 'img3Caption',
  img4Caption: 'img4Caption',
  img5Caption: 'img5Caption'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Marine: 'Marine',
  Freshwater: 'Freshwater'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/marine-algae/[name].js":
/*!**************************************!*\
  !*** ./pages/marine-algae/[name].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialProps": function() { return /* binding */ getInitialProps; }
/* harmony export */ });
/* harmony import */ var D_next_portfolio_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_next_portfolio_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_next_portfolio_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_next_portfolio_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Log */ "./components/Log.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/db */ "./utils/db.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Blog */ "./components/Blog.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\next\\portfolio_1\\pages\\marine-algae\\[name].js",
    _s = $RefreshSig$();










function marineAlgaeDetail(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isVisible = _useState[0],
      setIsVisible = _useState[1]; // const scrollToTop = () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: "smooth"
  //     });
  // };
  // useEffect(() => {
  //     // Button is displayed after scrolling for 500 pixels
  //     const toggleVisibility = () => {
  //         if (window.pageYOffset > 500) {
  //             setIsVisible(true);
  //         } else {
  //             setIsVisible(false);
  //         }
  //     };
  //     window.addEventListener("scroll", toggleVisibility);
  //     return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "w-screen h-screen overflow-x-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Bakthavachalam Babu - Marine Algae"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        charSet: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://unpkg.com/popper.js@1/dist/umd/popper.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://unpkg.com/tippy.js@4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("body", {
      className: "bg-falls bg-fixed bg-cover bg-center bg-no-repeat",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "p-2  pt-5 max-w-4xl relative mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "bg-primary relative rounded-lg p-10 w-full h-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Blog__WEBPACK_IMPORTED_MODULE_10__.default, {
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(marineAlgaeDetail, "QjDZesRvLCmcrZLxgN677nXnVLA=");

/* harmony default export */ __webpack_exports__["default"] = (marineAlgaeDetail);
var getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,D_next_portfolio_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_next_portfolio_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    var data;
    return D_next_portfolio_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils_db__WEBPACK_IMPORTED_MODULE_9__.default.marine.findMany({
              where: {
                "name": context.params.name
              }
            });

          case 2:
            data = _context.sent;
            return _context.abrupt("return", {
              props: {
                data: data[0] || null
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInitialProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "./node_modules/@prisma/client/index-browser.js");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var prisma;

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (prisma);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/@prisma/client/index-browser.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const prisma = __webpack_require__(/*! .prisma/client/index-browser */ "./node_modules/.prisma/client/index-browser.js")

module.exports = prisma


/***/ }),

/***/ "./node_modules/@prisma/client/runtime/index-browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@prisma/client/runtime/index-browser.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/runtime/index-browser.ts
__markAsModule(exports);
__export(exports, {
  Decimal: () => decimal_default
});

// ../../node_modules/.pnpm/decimal.js@10.3.1/node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = {toStringTag: tag};
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tYXJpbmUtYWxnYWUvW25hbWVdLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcHJpc21hL2NsaWVudC9ydW50aW1lL2luZGV4LWJyb3dzZXIuanMiXSwibmFtZXMiOlsibWFyaW5lQWxnYWVEZXRhaWwiLCJkYXRhIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicHJpc21hIiwid2hlcmUiLCJwYXJhbXMiLCJuYW1lIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBLENBQUMsR0FBRyxtQkFBTyxDQUFDLG9HQUFzQzs7O0FBR2xEOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7OztBQUdELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxpQkFBVCxPQUFxQztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUMxQkMsU0FEMEI7QUFBQSxNQUNmQyxZQURlLGlCQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksZUFBTyxFQUFDLE9BSFo7QUFJSSxZQUFJLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFTSTtBQUNJLFdBQUcsRUFBQyxZQURSO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxZQUFJLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFjSTtBQUNJLFlBQUksRUFBQywwRUFEVDtBQUVJLFdBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSixlQWtCSTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkosZUFtQkk7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBNkJJO0FBQU0sZUFBUyxFQUFDLG1EQUFoQjtBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxzQ0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxtREFBZjtBQUFBLGlDQUVJLDhEQUFDLHNEQUFEO0FBQU0sZ0JBQUksRUFBRUg7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkosZUErQ0k7QUFBQSw2QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0E3RVFELGlCOztBQStFVCwrREFBZUEsaUJBQWY7QUFFTyxJQUFNSyxlQUFlO0FBQUEsc1BBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUkMsOERBQUEsQ0FBdUI7QUFBRUMsbUJBQUssRUFBRTtBQUFFLHdCQUFRRixPQUFPLENBQUNHLE1BQVIsQ0FBZUM7QUFBekI7QUFBVCxhQUF2QixDQURROztBQUFBO0FBQ3JCVCxnQkFEcUI7QUFBQSw2Q0FFcEI7QUFDSFUsbUJBQUssRUFBRTtBQUFFVixvQkFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVc7QUFBbkI7QUFESixhQUZvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmSSxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGUDtBQUVBLElBQUlFLE1BQUo7O0FBRUEsSUFBSSxPQUErQixFQVVsQzs7QUFDRCwrREFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsZUFBZSxtQkFBTyxDQUFDLG9GQUE4Qjs7QUFFckQ7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpQkFBaUI7QUFDekI7QUFDQSxRQUFRLGFBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQSxlQUFlLFVBQVU7QUFDekI7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsVUFBVTtBQUNsQiwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUJBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsYUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEJBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmluZS1hbGdhZS9bbmFtZV0uZTc1MDQzZDA0MjVlOTg2ZTQ3NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCB7XG4gIERlY2ltYWxcbn0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudC9ydW50aW1lL2luZGV4LWJyb3dzZXInKVxuXG5cbmNvbnN0IFByaXNtYSA9IHt9XG5cbmV4cG9ydHMuUHJpc21hID0gUHJpc21hXG5cbi8qKlxuICogUHJpc21hIENsaWVudCBKUyB2ZXJzaW9uOiAyLjI5LjFcbiAqIFF1ZXJ5IEVuZ2luZSB2ZXJzaW9uOiAxYmU0Y2Q2MGI4OWFmYTA0YjE5MmFjYjFlZjQ3NzU4YTM5ODEwZjNhXG4gKi9cblByaXNtYS5wcmlzbWFWZXJzaW9uID0ge1xuICBjbGllbnQ6IFwiMi4yOS4xXCIsXG4gIGVuZ2luZTogXCIxYmU0Y2Q2MGI4OWFmYTA0YjE5MmFjYjFlZjQ3NzU4YTM5ODEwZjNhXCJcbn1cblxuUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfTtcblByaXNtYS5QcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuUHJpc21hQ2xpZW50UnVzdFBhbmljRXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50UnVzdFBhbmljRXJyb3IgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuUHJpc21hQ2xpZW50SW5pdGlhbGl6YXRpb25FcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRJbml0aWFsaXphdGlvbkVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuRGVjaW1hbCA9IERlY2ltYWxcblxuLyoqXG4gKiBSZS1leHBvcnQgb2Ygc3FsLXRlbXBsYXRlLXRhZ1xuICovXG5cblByaXNtYS5zcWwgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgc3FsdGFnIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLmVtcHR5ID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYGVtcHR5IGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLmpvaW4gPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgam9pbiBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5yYXcgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgcmF3IGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLnZhbGlkYXRvciA9ICgpID0+ICh2YWwpID0+IHZhbFxuXG4vKipcbiAqIEVudW1zXG4gKi9cbi8vIEJhc2VkIG9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMxOTIjaXNzdWVjb21tZW50LTI2MTcyMDI3NVxuZnVuY3Rpb24gbWFrZUVudW0oeCkgeyByZXR1cm4geDsgfVxuXG5leHBvcnRzLlByaXNtYS5NYXJpbmVTY2FsYXJGaWVsZEVudW0gPSBtYWtlRW51bSh7XG4gIGlkOiAnaWQnLFxuICBuYW1lOiAnbmFtZScsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBkZXNjOiAnZGVzYycsXG4gIGltZzE6ICdpbWcxJyxcbiAgaW1nMjogJ2ltZzInLFxuICBpbWczOiAnaW1nMycsXG4gIGltZzQ6ICdpbWc0JyxcbiAgaW1nNTogJ2ltZzUnLFxuICBwYXJhMTogJ3BhcmExJyxcbiAgcGFyYTI6ICdwYXJhMicsXG4gIHBhcmEzOiAncGFyYTMnLFxuICBwYXJhNDogJ3BhcmE0JyxcbiAgcGFyYTU6ICdwYXJhNScsXG4gIGRpdmlzaW9uOiAnZGl2aXNpb24nLFxuICBjbGFzczogJ2NsYXNzJyxcbiAgb3JkZXI6ICdvcmRlcicsXG4gIGZhbWlseTogJ2ZhbWlseScsXG4gIGJhc2lvbnltOiAnYmFzaW9ueW0nLFxuICBzeW5vbnltOiAnc3lub255bScsXG4gIGVjb2xvZ3k6ICdlY29sb2d5JyxcbiAgZGlzdHJpYnV0aW9uOiAnZGlzdHJpYnV0aW9uJyxcbiAgaGFiaXRhdDogJ2hhYml0YXQnLFxuICBvcmllbnRhdGlvbjE6ICdvcmllbnRhdGlvbjEnLFxuICBvcmllbnRhdGlvbjI6ICdvcmllbnRhdGlvbjInLFxuICBvcmllbnRhdGlvbjM6ICdvcmllbnRhdGlvbjMnLFxuICBvcmllbnRhdGlvbjQ6ICdvcmllbnRhdGlvbjQnLFxuICBvcmllbnRhdGlvbjU6ICdvcmllbnRhdGlvbjUnLFxuICBpbWcxQ2FwdGlvbjogJ2ltZzFDYXB0aW9uJyxcbiAgaW1nMkNhcHRpb246ICdpbWcyQ2FwdGlvbicsXG4gIGltZzNDYXB0aW9uOiAnaW1nM0NhcHRpb24nLFxuICBpbWc0Q2FwdGlvbjogJ2ltZzRDYXB0aW9uJyxcbiAgaW1nNUNhcHRpb246ICdpbWc1Q2FwdGlvbidcbn0pO1xuXG5leHBvcnRzLlByaXNtYS5GcmVzaHdhdGVyU2NhbGFyRmllbGRFbnVtID0gbWFrZUVudW0oe1xuICBpZDogJ2lkJyxcbiAgbmFtZTogJ25hbWUnLFxuICB0aXRsZTogJ3RpdGxlJyxcbiAgZGVzYzogJ2Rlc2MnLFxuICBpbWcxOiAnaW1nMScsXG4gIGltZzI6ICdpbWcyJyxcbiAgaW1nMzogJ2ltZzMnLFxuICBpbWc0OiAnaW1nNCcsXG4gIGltZzU6ICdpbWc1JyxcbiAgcGFyYTE6ICdwYXJhMScsXG4gIHBhcmEyOiAncGFyYTInLFxuICBwYXJhMzogJ3BhcmEzJyxcbiAgcGFyYTQ6ICdwYXJhNCcsXG4gIHBhcmE1OiAncGFyYTUnLFxuICBkaXZpc2lvbjogJ2RpdmlzaW9uJyxcbiAgY2xhc3M6ICdjbGFzcycsXG4gIG9yZGVyOiAnb3JkZXInLFxuICBmYW1pbHk6ICdmYW1pbHknLFxuICBiYXNpb255bTogJ2Jhc2lvbnltJyxcbiAgaGFiaXRhdDogJ2hhYml0YXQnLFxuICBvcmllbnRhdGlvbjE6ICdvcmllbnRhdGlvbjEnLFxuICBvcmllbnRhdGlvbjI6ICdvcmllbnRhdGlvbjInLFxuICBvcmllbnRhdGlvbjM6ICdvcmllbnRhdGlvbjMnLFxuICBvcmllbnRhdGlvbjQ6ICdvcmllbnRhdGlvbjQnLFxuICBvcmllbnRhdGlvbjU6ICdvcmllbnRhdGlvbjUnLFxuICBpbWcxQ2FwdGlvbjogJ2ltZzFDYXB0aW9uJyxcbiAgaW1nMkNhcHRpb246ICdpbWcyQ2FwdGlvbicsXG4gIGltZzNDYXB0aW9uOiAnaW1nM0NhcHRpb24nLFxuICBpbWc0Q2FwdGlvbjogJ2ltZzRDYXB0aW9uJyxcbiAgaW1nNUNhcHRpb246ICdpbWc1Q2FwdGlvbidcbn0pO1xuXG5leHBvcnRzLlByaXNtYS5Tb3J0T3JkZXIgPSBtYWtlRW51bSh7XG4gIGFzYzogJ2FzYycsXG4gIGRlc2M6ICdkZXNjJ1xufSk7XG5cblxuZXhwb3J0cy5QcmlzbWEuTW9kZWxOYW1lID0gbWFrZUVudW0oe1xuICBNYXJpbmU6ICdNYXJpbmUnLFxuICBGcmVzaHdhdGVyOiAnRnJlc2h3YXRlcidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgQ2xpZW50XG4gKi9cbmNsYXNzIFByaXNtYUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBQcmlzbWFDbGllbnQgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbiAgICApXG4gIH1cbn1cbmV4cG9ydHMuUHJpc21hQ2xpZW50ID0gUHJpc21hQ2xpZW50XG5cbk9iamVjdC5hc3NpZ24oZXhwb3J0cywgUHJpc21hKVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMb2cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2cnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vdXRpbHMvZGInO1xyXG5pbXBvcnQgQmxvZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2cnO1xyXG5mdW5jdGlvbiBtYXJpbmVBbGdhZURldGFpbCh7IGRhdGEgfSkge1xyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgLy8gICAgICAgICB0b3A6IDAsXHJcbiAgICAvLyAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQnV0dG9uIGlzIGRpc3BsYXllZCBhZnRlciBzY3JvbGxpbmcgZm9yIDUwMCBwaXhlbHNcclxuICAgIC8vICAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gNTAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfTtcclxuXHJcbiAgICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlVmlzaWJpbGl0eSk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcclxuICAgIC8vIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmFrdGhhdmFjaGFsYW0gQmFidSAtIE1hcmluZSBBbGdhZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9J3ByZWNvbm5lY3QnIGhyZWY9J2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgICAgICBjaGFyU2V0PSdVVEYtOCdcclxuICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQvY3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3MnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJlY3Vyc2l2ZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9wb3BwZXIuanNAMS9kaXN0L3VtZC9wb3BwZXIubWluLmpzJz48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS90aXBweS5qc0A0Jz48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgey8qIHtzZWxlY3RlZEltZyAmJlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGFic29sdXRlIHotMjAgdy1mdWxsIGgtZnVsbCB0b3AtMCBib3R0b20tMCBiZy1wcmltYXJ5XCI+XHJcblx0XHRcdFx0XHQ8TW9kYWwgc2V0U2VsZWN0ZWRJbWc9e3NldFNlbGVjdGVkSW1nfSBzZWxlY3RlZEltZz17c2VsZWN0ZWRJbWd9IGltYWdlcz17YWxsSW1hZ2VzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHR9ICovfVxyXG5cclxuICAgICAgICAgICAgPGJvZHkgY2xhc3NOYW1lPSdiZy1mYWxscyBiZy1maXhlZCBiZy1jb3ZlciBiZy1jZW50ZXIgYmctbm8tcmVwZWF0JyA+XHJcbiAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0yICBwdC01IG1heC13LTR4bCByZWxhdGl2ZSBteC1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcHJpbWFyeSByZWxhdGl2ZSByb3VuZGVkLWxnIHAtMTAgdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TG9nIGRhdGE9e21hcmluZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9nIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgey8qIHtpc1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBmaXhlZCByaWdodC0wIGJvdHRvbS0wIHRleHQtY2VudGVyIGZsZXggcm91bmRlZC1mdWxsIHctMTYgbS0xMCBoLTE2IHRleHQtYmx1ZS03MDAgYmcteWVsbG93LTYwMCBtZDpiZy1wcmltYXJ5IG1kOnRleHQteWVsbG93LTUwMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc25hbWU9J2lubGluZS1mbGV4IG0tMTAnPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCIjRkZCRjAwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCAxNi42N2wyLjgyOSAyLjgzIDkuMTc1LTkuMzM5IDkuMTY3IDkuMzM5IDIuODI5LTIuODMtMTEuOTk2LTEyLjE3elwiIC8+PC9zdmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9ib2R5ID5cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvIGRpdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXJpbmVBbGdhZURldGFpbDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5tYXJpbmUuZmluZE1hbnkoeyB3aGVyZTogeyBcIm5hbWVcIjogY29udGV4dC5wYXJhbXMubmFtZSB9IH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBkYXRhOiBkYXRhWzBdIHx8IG51bGwgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmxldCBwcmlzbWFcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuICAgICAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyIsImNvbnN0IHByaXNtYSA9IHJlcXVpcmUoJy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaXNtYVxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7Z2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWV9KTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL2luZGV4LWJyb3dzZXIudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBEZWNpbWFsOiAoKSA9PiBkZWNpbWFsX2RlZmF1bHRcbn0pO1xuXG4vLyAuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVjaW1hbC5qc0AxMC4zLjEvbm9kZV9tb2R1bGVzL2RlY2ltYWwuanMvZGVjaW1hbC5tanNcbnZhciBFWFBfTElNSVQgPSA5ZTE1O1xudmFyIE1BWF9ESUdJVFMgPSAxZTk7XG52YXIgTlVNRVJBTFMgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbnZhciBMTjEwID0gXCIyLjMwMjU4NTA5Mjk5NDA0NTY4NDAxNzk5MTQ1NDY4NDM2NDIwNzYwMTEwMTQ4ODYyODc3Mjk3NjAzMzMyNzkwMDk2NzU3MjYwOTY3NzM1MjQ4MDIzNTk5NzIwNTA4OTU5ODI5ODM0MTk2Nzc4NDA0MjI4NjI0ODYzMzQwOTUyNTQ2NTA4MjgwNjc1NjY2NjI4NzM2OTA5ODc4MTY4OTQ4MjkwNzIwODMyNTU1NDY4MDg0Mzc5OTg5NDgyNjIzMzE5ODUyODM5MzUwNTMwODk2NTM3NzczMjYyODg0NjE2MzM2NjIyMjI4NzY5ODIxOTg4Njc0NjU0MzY2NzQ3NDQwNDI0MzI3NDM2NTE1NTA0ODkzNDMxNDkzOTM5MTQ3OTYxOTQwNDQwMDIyMjEwNTEwMTcxNDE3NDgwMDM2ODgwODQwMTI2NDcwODA2ODU1Njc3NDMyMTYyMjgzNTUyMjAxMTQ4MDQ2NjM3MTU2NTkxMjEzNzM0NTA3NDc4NTY5NDc2ODM0NjM2MTY3OTIxMDE4MDY0NDUwNzA2NDgwMDAyNzc1MDI2ODQ5MTY3NDY1NTA1ODY4NTY5MzU2NzM0MjA2NzA1ODExMzY0MjkyMjQ1NTQ0MDU3NTg5MjU3MjQyMDgyNDEzMTQ2OTU2ODkwMTY3NTg5NDAyNTY3NzYzMTEzNTY5MTkyOTIwMzMzNzY1ODcxNDE2NjAyMzAxMDU3MDMwODk2MzQ1NzIwNzU0NDAzNzA4NDc0Njk5NDAxNjgyNjkyODI4MDg0ODExODQyODkzMTQ4NDg1MjQ5NDg2NDQ4NzE5Mjc4MDk2NzYyNzEyNzU3NzUzOTcwMjc2Njg2MDU5NTI0OTY3MTY2NzQxODM0ODU3MDQ0MjI1MDcxOTc5NjUwMDQ3MTQ5NTEwNTA0OTIyMTQ3NzY1Njc2MzY5Mzg2NjI5NzY5Nzk1MjIxMTA3MTgyNjQ1NDk3MzQ3NzI2NjI0MjU3MDk0MjkzMjI1ODI3OTg1MDI1ODU1MDk3ODUyNjUzODMyMDc2MDY3MjYzMTcxNjQzMDk1MDU5OTUwODc4MDc1MjM3MTAzMzMxMDExOTc4NTc1NDczMzE1NDE0MjE4MDg0Mjc1NDM4NjM1OTE3NzgxMTcwNTQzMDk4Mjc0ODIzODUwNDU2NDgwMTkwOTU2MTAyOTkyOTE4MjQzMTgyMzc1MjUzNTc3MDk3NTA1Mzk1NjUxODc2OTc1MTAzNzQ5NzA4ODg2OTIxODAyMDUxODkzMzk1MDcyMzg1MzkyMDUxNDQ2MzQxOTcyNjUyODcyODY5NjUxMTA4NjI1NzE0OTIxOTg4NDk5Nzg3NDg4NzM3NzEzNDU2ODYyMDkxNjcwNThcIjtcbnZhciBQSSA9IFwiMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjkzOTkzNzUxMDU4MjA5NzQ5NDQ1OTIzMDc4MTY0MDYyODYyMDg5OTg2MjgwMzQ4MjUzNDIxMTcwNjc5ODIxNDgwODY1MTMyODIzMDY2NDcwOTM4NDQ2MDk1NTA1ODIyMzE3MjUzNTk0MDgxMjg0ODExMTc0NTAyODQxMDI3MDE5Mzg1MjExMDU1NTk2NDQ2MjI5NDg5NTQ5MzAzODE5NjQ0Mjg4MTA5NzU2NjU5MzM0NDYxMjg0NzU2NDgyMzM3ODY3ODMxNjUyNzEyMDE5MDkxNDU2NDg1NjY5MjM0NjAzNDg2MTA0NTQzMjY2NDgyMTMzOTM2MDcyNjAyNDkxNDEyNzM3MjQ1ODcwMDY2MDYzMTU1ODgxNzQ4ODE1MjA5MjA5NjI4MjkyNTQwOTE3MTUzNjQzNjc4OTI1OTAzNjAwMTEzMzA1MzA1NDg4MjA0NjY1MjEzODQxNDY5NTE5NDE1MTE2MDk0MzMwNTcyNzAzNjU3NTk1OTE5NTMwOTIxODYxMTczODE5MzI2MTE3OTMxMDUxMTg1NDgwNzQ0NjIzNzk5NjI3NDk1NjczNTE4ODU3NTI3MjQ4OTEyMjc5MzgxODMwMTE5NDkxMjk4MzM2NzMzNjI0NDA2NTY2NDMwODYwMjEzOTQ5NDYzOTUyMjQ3MzcxOTA3MDIxNzk4NjA5NDM3MDI3NzA1MzkyMTcxNzYyOTMxNzY3NTIzODQ2NzQ4MTg0Njc2Njk0MDUxMzIwMDA1NjgxMjcxNDUyNjM1NjA4Mjc3ODU3NzEzNDI3NTc3ODk2MDkxNzM2MzcxNzg3MjE0Njg0NDA5MDEyMjQ5NTM0MzAxNDY1NDk1ODUzNzEwNTA3OTIyNzk2ODkyNTg5MjM1NDIwMTk5NTYxMTIxMjkwMjE5NjA4NjQwMzQ0MTgxNTk4MTM2Mjk3NzQ3NzEzMDk5NjA1MTg3MDcyMTEzNDk5OTk5OTgzNzI5NzgwNDk5NTEwNTk3MzE3MzI4MTYwOTYzMTg1OTUwMjQ0NTk0NTUzNDY5MDgzMDI2NDI1MjIzMDgyNTMzNDQ2ODUwMzUyNjE5MzExODgxNzEwMTAwMDMxMzc4Mzg3NTI4ODY1ODc1MzMyMDgzODE0MjA2MTcxNzc2NjkxNDczMDM1OTgyNTM0OTA0Mjg3NTU0Njg3MzExNTk1NjI4NjM4ODIzNTM3ODc1OTM3NTE5NTc3ODE4NTc3ODA1MzIxNzEyMjY4MDY2MTMwMDE5Mjc4NzY2MTExOTU5MDkyMTY0MjAxOTg5MzgwOTUyNTcyMDEwNjU0ODU4NjMyNzg5XCI7XG52YXIgREVGQVVMVFMgPSB7XG4gIHByZWNpc2lvbjogMjAsXG4gIHJvdW5kaW5nOiA0LFxuICBtb2R1bG86IDEsXG4gIHRvRXhwTmVnOiAtNyxcbiAgdG9FeHBQb3M6IDIxLFxuICBtaW5FOiAtRVhQX0xJTUlULFxuICBtYXhFOiBFWFBfTElNSVQsXG4gIGNyeXB0bzogZmFsc2Vcbn07XG52YXIgaW5leGFjdDtcbnZhciBxdWFkcmFudDtcbnZhciBleHRlcm5hbCA9IHRydWU7XG52YXIgZGVjaW1hbEVycm9yID0gXCJbRGVjaW1hbEVycm9yXSBcIjtcbnZhciBpbnZhbGlkQXJndW1lbnQgPSBkZWNpbWFsRXJyb3IgKyBcIkludmFsaWQgYXJndW1lbnQ6IFwiO1xudmFyIHByZWNpc2lvbkxpbWl0RXhjZWVkZWQgPSBkZWNpbWFsRXJyb3IgKyBcIlByZWNpc2lvbiBsaW1pdCBleGNlZWRlZFwiO1xudmFyIGNyeXB0b1VuYXZhaWxhYmxlID0gZGVjaW1hbEVycm9yICsgXCJjcnlwdG8gdW5hdmFpbGFibGVcIjtcbnZhciB0YWcgPSBcIltvYmplY3QgRGVjaW1hbF1cIjtcbnZhciBtYXRoZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIG1hdGhwb3cgPSBNYXRoLnBvdztcbnZhciBpc0JpbmFyeSA9IC9eMGIoWzAxXSsoXFwuWzAxXSopP3xcXC5bMDFdKykocFsrLV0/XFxkKyk/JC9pO1xudmFyIGlzSGV4ID0gL14weChbMC05YS1mXSsoXFwuWzAtOWEtZl0qKT98XFwuWzAtOWEtZl0rKShwWystXT9cXGQrKT8kL2k7XG52YXIgaXNPY3RhbCA9IC9eMG8oWzAtN10rKFxcLlswLTddKik/fFxcLlswLTddKykocFsrLV0/XFxkKyk/JC9pO1xudmFyIGlzRGVjaW1hbCA9IC9eKFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPyQvaTtcbnZhciBCQVNFID0gMWU3O1xudmFyIExPR19CQVNFID0gNztcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcbnZhciBMTjEwX1BSRUNJU0lPTiA9IExOMTAubGVuZ3RoIC0gMTtcbnZhciBQSV9QUkVDSVNJT04gPSBQSS5sZW5ndGggLSAxO1xudmFyIFAgPSB7dG9TdHJpbmdUYWc6IHRhZ307XG5QLmFic29sdXRlVmFsdWUgPSBQLmFicyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICBpZiAoeC5zIDwgMClcbiAgICB4LnMgPSAxO1xuICByZXR1cm4gZmluYWxpc2UoeCk7XG59O1xuUC5jZWlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSwgdGhpcy5lICsgMSwgMik7XG59O1xuUC5jbGFtcGVkVG8gPSBQLmNsYW1wID0gZnVuY3Rpb24obWluMiwgbWF4Mikge1xuICB2YXIgaywgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBtaW4yID0gbmV3IEN0b3IobWluMik7XG4gIG1heDIgPSBuZXcgQ3RvcihtYXgyKTtcbiAgaWYgKCFtaW4yLnMgfHwgIW1heDIucylcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKG1pbjIuZ3QobWF4MikpXG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgbWF4Mik7XG4gIGsgPSB4LmNtcChtaW4yKTtcbiAgcmV0dXJuIGsgPCAwID8gbWluMiA6IHguY21wKG1heDIpID4gMCA/IG1heDIgOiBuZXcgQ3Rvcih4KTtcbn07XG5QLmNvbXBhcmVkVG8gPSBQLmNtcCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGksIGosIHhkTCwgeWRMLCB4ID0gdGhpcywgeGQgPSB4LmQsIHlkID0gKHkgPSBuZXcgeC5jb25zdHJ1Y3Rvcih5KSkuZCwgeHMgPSB4LnMsIHlzID0geS5zO1xuICBpZiAoIXhkIHx8ICF5ZCkge1xuICAgIHJldHVybiAheHMgfHwgIXlzID8gTmFOIDogeHMgIT09IHlzID8geHMgOiB4ZCA9PT0geWQgPyAwIDogIXhkIF4geHMgPCAwID8gMSA6IC0xO1xuICB9XG4gIGlmICgheGRbMF0gfHwgIXlkWzBdKVxuICAgIHJldHVybiB4ZFswXSA/IHhzIDogeWRbMF0gPyAteXMgOiAwO1xuICBpZiAoeHMgIT09IHlzKVxuICAgIHJldHVybiB4cztcbiAgaWYgKHguZSAhPT0geS5lKVxuICAgIHJldHVybiB4LmUgPiB5LmUgXiB4cyA8IDAgPyAxIDogLTE7XG4gIHhkTCA9IHhkLmxlbmd0aDtcbiAgeWRMID0geWQubGVuZ3RoO1xuICBmb3IgKGkgPSAwLCBqID0geGRMIDwgeWRMID8geGRMIDogeWRMOyBpIDwgajsgKytpKSB7XG4gICAgaWYgKHhkW2ldICE9PSB5ZFtpXSlcbiAgICAgIHJldHVybiB4ZFtpXSA+IHlkW2ldIF4geHMgPCAwID8gMSA6IC0xO1xuICB9XG4gIHJldHVybiB4ZEwgPT09IHlkTCA/IDAgOiB4ZEwgPiB5ZEwgXiB4cyA8IDAgPyAxIDogLTE7XG59O1xuUC5jb3NpbmUgPSBQLmNvcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5kKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoIXguZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3IoMSk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIExPR19CQVNFO1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IGNvc2luZShDdG9yLCB0b0xlc3NUaGFuSGFsZlBpKEN0b3IsIHgpKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UocXVhZHJhbnQgPT0gMiB8fCBxdWFkcmFudCA9PSAzID8geC5uZWcoKSA6IHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC5jdWJlUm9vdCA9IFAuY2JydCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZSwgbSwgbiwgciwgcmVwLCBzLCBzZCwgdCwgdDMsIHQzcGx1c3gsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHMgPSB4LnMgKiBtYXRocG93KHgucyAqIHgsIDEgLyAzKTtcbiAgaWYgKCFzIHx8IE1hdGguYWJzKHMpID09IDEgLyAwKSB7XG4gICAgbiA9IGRpZ2l0c1RvU3RyaW5nKHguZCk7XG4gICAgZSA9IHguZTtcbiAgICBpZiAocyA9IChlIC0gbi5sZW5ndGggKyAxKSAlIDMpXG4gICAgICBuICs9IHMgPT0gMSB8fCBzID09IC0yID8gXCIwXCIgOiBcIjAwXCI7XG4gICAgcyA9IG1hdGhwb3cobiwgMSAvIDMpO1xuICAgIGUgPSBtYXRoZmxvb3IoKGUgKyAxKSAvIDMpIC0gKGUgJSAzID09IChlIDwgMCA/IC0xIDogMikpO1xuICAgIGlmIChzID09IDEgLyAwKSB7XG4gICAgICBuID0gXCI1ZVwiICsgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IHMudG9FeHBvbmVudGlhbCgpO1xuICAgICAgbiA9IG4uc2xpY2UoMCwgbi5pbmRleE9mKFwiZVwiKSArIDEpICsgZTtcbiAgICB9XG4gICAgciA9IG5ldyBDdG9yKG4pO1xuICAgIHIucyA9IHgucztcbiAgfSBlbHNlIHtcbiAgICByID0gbmV3IEN0b3Iocy50b1N0cmluZygpKTtcbiAgfVxuICBzZCA9IChlID0gQ3Rvci5wcmVjaXNpb24pICsgMztcbiAgZm9yICg7IDsgKSB7XG4gICAgdCA9IHI7XG4gICAgdDMgPSB0LnRpbWVzKHQpLnRpbWVzKHQpO1xuICAgIHQzcGx1c3ggPSB0My5wbHVzKHgpO1xuICAgIHIgPSBkaXZpZGUodDNwbHVzeC5wbHVzKHgpLnRpbWVzKHQpLCB0M3BsdXN4LnBsdXModDMpLCBzZCArIDIsIDEpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHNkKSA9PT0gKG4gPSBkaWdpdHNUb1N0cmluZyhyLmQpKS5zbGljZSgwLCBzZCkpIHtcbiAgICAgIG4gPSBuLnNsaWNlKHNkIC0gMywgc2QgKyAxKTtcbiAgICAgIGlmIChuID09IFwiOTk5OVwiIHx8ICFyZXAgJiYgbiA9PSBcIjQ5OTlcIikge1xuICAgICAgICBpZiAoIXJlcCkge1xuICAgICAgICAgIGZpbmFsaXNlKHQsIGUgKyAxLCAwKTtcbiAgICAgICAgICBpZiAodC50aW1lcyh0KS50aW1lcyh0KS5lcSh4KSkge1xuICAgICAgICAgICAgciA9IHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2QgKz0gNDtcbiAgICAgICAgcmVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghK24gfHwgIStuLnNsaWNlKDEpICYmIG4uY2hhckF0KDApID09IFwiNVwiKSB7XG4gICAgICAgICAgZmluYWxpc2UociwgZSArIDEsIDEpO1xuICAgICAgICAgIG0gPSAhci50aW1lcyhyKS50aW1lcyhyKS5lcSh4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgZSwgQ3Rvci5yb3VuZGluZywgbSk7XG59O1xuUC5kZWNpbWFsUGxhY2VzID0gUC5kcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdywgZCA9IHRoaXMuZCwgbiA9IE5hTjtcbiAgaWYgKGQpIHtcbiAgICB3ID0gZC5sZW5ndGggLSAxO1xuICAgIG4gPSAodyAtIG1hdGhmbG9vcih0aGlzLmUgLyBMT0dfQkFTRSkpICogTE9HX0JBU0U7XG4gICAgdyA9IGRbd107XG4gICAgaWYgKHcpXG4gICAgICBmb3IgKDsgdyAlIDEwID09IDA7IHcgLz0gMTApXG4gICAgICAgIG4tLTtcbiAgICBpZiAobiA8IDApXG4gICAgICBuID0gMDtcbiAgfVxuICByZXR1cm4gbjtcbn07XG5QLmRpdmlkZWRCeSA9IFAuZGl2ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gZGl2aWRlKHRoaXMsIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHkpKTtcbn07XG5QLmRpdmlkZWRUb0ludGVnZXJCeSA9IFAuZGl2VG9JbnQgPSBmdW5jdGlvbih5KSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHJldHVybiBmaW5hbGlzZShkaXZpZGUoeCwgbmV3IEN0b3IoeSksIDAsIDEsIDEpLCBDdG9yLnByZWNpc2lvbiwgQ3Rvci5yb3VuZGluZyk7XG59O1xuUC5lcXVhbHMgPSBQLmVxID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPT09IDA7XG59O1xuUC5mbG9vciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmluYWxpc2UobmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyksIHRoaXMuZSArIDEsIDMpO1xufTtcblAuZ3JlYXRlclRoYW4gPSBQLmd0ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPiAwO1xufTtcblAuZ3JlYXRlclRoYW5PckVxdWFsVG8gPSBQLmd0ZSA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGsgPSB0aGlzLmNtcCh5KTtcbiAgcmV0dXJuIGsgPT0gMSB8fCBrID09PSAwO1xufTtcblAuaHlwZXJib2xpY0Nvc2luZSA9IFAuY29zaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaywgbiwgcHIsIHJtLCBsZW4sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgb25lID0gbmV3IEN0b3IoMSk7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LnMgPyAxIC8gMCA6IE5hTik7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBvbmU7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMzIpIHtcbiAgICBrID0gTWF0aC5jZWlsKGxlbiAvIDMpO1xuICAgIG4gPSAoMSAvIHRpbnlQb3coNCwgaykpLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgayA9IDE2O1xuICAgIG4gPSBcIjIuMzI4MzA2NDM2NTM4Njk2Mjg5MDYyNWUtMTBcIjtcbiAgfVxuICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDEsIHgudGltZXMobiksIG5ldyBDdG9yKDEpLCB0cnVlKTtcbiAgdmFyIGNvc2gyX3gsIGkgPSBrLCBkOCA9IG5ldyBDdG9yKDgpO1xuICBmb3IgKDsgaS0tOyApIHtcbiAgICBjb3NoMl94ID0geC50aW1lcyh4KTtcbiAgICB4ID0gb25lLm1pbnVzKGNvc2gyX3gudGltZXMoZDgubWludXMoY29zaDJfeC50aW1lcyhkOCkpKSk7XG4gIH1cbiAgcmV0dXJuIGZpbmFsaXNlKHgsIEN0b3IucHJlY2lzaW9uID0gcHIsIEN0b3Iucm91bmRpbmcgPSBybSwgdHJ1ZSk7XG59O1xuUC5oeXBlcmJvbGljU2luZSA9IFAuc2luaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaywgcHIsIHJtLCBsZW4sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMykge1xuICAgIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMiwgeCwgeCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgayA9IDEuNCAqIE1hdGguc3FydChsZW4pO1xuICAgIGsgPSBrID4gMTYgPyAxNiA6IGsgfCAwO1xuICAgIHggPSB4LnRpbWVzKDEgLyB0aW55UG93KDUsIGspKTtcbiAgICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgsIHRydWUpO1xuICAgIHZhciBzaW5oMl94LCBkNSA9IG5ldyBDdG9yKDUpLCBkMTYgPSBuZXcgQ3RvcigxNiksIGQyMCA9IG5ldyBDdG9yKDIwKTtcbiAgICBmb3IgKDsgay0tOyApIHtcbiAgICAgIHNpbmgyX3ggPSB4LnRpbWVzKHgpO1xuICAgICAgeCA9IHgudGltZXMoZDUucGx1cyhzaW5oMl94LnRpbWVzKGQxNi50aW1lcyhzaW5oMl94KS5wbHVzKGQyMCkpKSk7XG4gICAgfVxuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC5oeXBlcmJvbGljVGFuZ2VudCA9IFAudGFuaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LnMpO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDc7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICByZXR1cm4gZGl2aWRlKHguc2luaCgpLCB4LmNvc2goKSwgQ3Rvci5wcmVjaXNpb24gPSBwciwgQ3Rvci5yb3VuZGluZyA9IHJtKTtcbn07XG5QLmludmVyc2VDb3NpbmUgPSBQLmFjb3MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhhbGZQaSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBrID0geC5hYnMoKS5jbXAoMSksIHByID0gQ3Rvci5wcmVjaXNpb24sIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKGsgIT09IC0xKSB7XG4gICAgcmV0dXJuIGsgPT09IDAgPyB4LmlzTmVnKCkgPyBnZXRQaShDdG9yLCBwciwgcm0pIDogbmV3IEN0b3IoMCkgOiBuZXcgQ3RvcihOYU4pO1xuICB9XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgNjtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LmFzaW4oKTtcbiAgaGFsZlBpID0gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC41KTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gaGFsZlBpLm1pbnVzKHgpO1xufTtcblAuaW52ZXJzZUh5cGVyYm9saWNDb3NpbmUgPSBQLmFjb3NoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHgubHRlKDEpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LmVxKDEpID8gMCA6IE5hTik7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoTWF0aC5hYnMoeC5lKSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICB4ID0geC50aW1lcyh4KS5taW51cygxKS5zcXJ0KCkucGx1cyh4KTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LmxuKCk7XG59O1xuUC5pbnZlcnNlSHlwZXJib2xpY1NpbmUgPSBQLmFzaW5oID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDIgKiBNYXRoLm1heChNYXRoLmFicyh4LmUpLCB4LnNkKCkpICsgNjtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHggPSB4LnRpbWVzKHgpLnBsdXMoMSkuc3FydCgpLnBsdXMoeCk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4geC5sbigpO1xufTtcblAuaW52ZXJzZUh5cGVyYm9saWNUYW5nZW50ID0gUC5hdGFuaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB3cHIsIHhzZCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguZSA+PSAwKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LmFicygpLmVxKDEpID8geC5zIC8gMCA6IHguaXNaZXJvKCkgPyB4IDogTmFOKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICB4c2QgPSB4LnNkKCk7XG4gIGlmIChNYXRoLm1heCh4c2QsIHByKSA8IDIgKiAteC5lIC0gMSlcbiAgICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIHByLCBybSwgdHJ1ZSk7XG4gIEN0b3IucHJlY2lzaW9uID0gd3ByID0geHNkIC0geC5lO1xuICB4ID0gZGl2aWRlKHgucGx1cygxKSwgbmV3IEN0b3IoMSkubWludXMoeCksIHdwciArIHByLCAxKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0geC5sbigpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LnRpbWVzKDAuNSk7XG59O1xuUC5pbnZlcnNlU2luZSA9IFAuYXNpbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGFsZlBpLCBrLCBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBrID0geC5hYnMoKS5jbXAoMSk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKGsgIT09IC0xKSB7XG4gICAgaWYgKGsgPT09IDApIHtcbiAgICAgIGhhbGZQaSA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuNSk7XG4gICAgICBoYWxmUGkucyA9IHgucztcbiAgICAgIHJldHVybiBoYWxmUGk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyA2O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHguZGl2KG5ldyBDdG9yKDEpLm1pbnVzKHgudGltZXMoeCkpLnNxcnQoKS5wbHVzKDEpKS5hdGFuKCk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIHgudGltZXMoMik7XG59O1xuUC5pbnZlcnNlVGFuZ2VudCA9IFAuYXRhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaSwgaiwgaywgbiwgcHgsIHQsIHIsIHdwciwgeDIsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgcHIgPSBDdG9yLnByZWNpc2lvbiwgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoIXguaXNGaW5pdGUoKSkge1xuICAgIGlmICgheC5zKVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gICAgaWYgKHByICsgNCA8PSBQSV9QUkVDSVNJT04pIHtcbiAgICAgIHIgPSBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICAgICAgci5zID0geC5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHguaXNaZXJvKCkpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIH0gZWxzZSBpZiAoeC5hYnMoKS5lcSgxKSAmJiBwciArIDQgPD0gUElfUFJFQ0lTSU9OKSB7XG4gICAgciA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuMjUpO1xuICAgIHIucyA9IHgucztcbiAgICByZXR1cm4gcjtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiA9IHdwciA9IHByICsgMTA7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBrID0gTWF0aC5taW4oMjgsIHdwciAvIExPR19CQVNFICsgMiB8IDApO1xuICBmb3IgKGkgPSBrOyBpOyAtLWkpXG4gICAgeCA9IHguZGl2KHgudGltZXMoeCkucGx1cygxKS5zcXJ0KCkucGx1cygxKSk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGogPSBNYXRoLmNlaWwod3ByIC8gTE9HX0JBU0UpO1xuICBuID0gMTtcbiAgeDIgPSB4LnRpbWVzKHgpO1xuICByID0gbmV3IEN0b3IoeCk7XG4gIHB4ID0geDtcbiAgZm9yICg7IGkgIT09IC0xOyApIHtcbiAgICBweCA9IHB4LnRpbWVzKHgyKTtcbiAgICB0ID0gci5taW51cyhweC5kaXYobiArPSAyKSk7XG4gICAgcHggPSBweC50aW1lcyh4Mik7XG4gICAgciA9IHQucGx1cyhweC5kaXYobiArPSAyKSk7XG4gICAgaWYgKHIuZFtqXSAhPT0gdm9pZCAwKVxuICAgICAgZm9yIChpID0gajsgci5kW2ldID09PSB0LmRbaV0gJiYgaS0tOyApXG4gICAgICAgIDtcbiAgfVxuICBpZiAoaylcbiAgICByID0gci50aW1lcygyIDw8IGsgLSAxKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgQ3Rvci5wcmVjaXNpb24gPSBwciwgQ3Rvci5yb3VuZGluZyA9IHJtLCB0cnVlKTtcbn07XG5QLmlzRmluaXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhIXRoaXMuZDtcbn07XG5QLmlzSW50ZWdlciA9IFAuaXNJbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICEhdGhpcy5kICYmIG1hdGhmbG9vcih0aGlzLmUgLyBMT0dfQkFTRSkgPiB0aGlzLmQubGVuZ3RoIC0gMjtcbn07XG5QLmlzTmFOID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5zO1xufTtcblAuaXNOZWdhdGl2ZSA9IFAuaXNOZWcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucyA8IDA7XG59O1xuUC5pc1Bvc2l0aXZlID0gUC5pc1BvcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zID4gMDtcbn07XG5QLmlzWmVybyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gISF0aGlzLmQgJiYgdGhpcy5kWzBdID09PSAwO1xufTtcblAubGVzc1RoYW4gPSBQLmx0ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPCAwO1xufTtcblAubGVzc1RoYW5PckVxdWFsVG8gPSBQLmx0ZSA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIHRoaXMuY21wKHkpIDwgMTtcbn07XG5QLmxvZ2FyaXRobSA9IFAubG9nID0gZnVuY3Rpb24oYmFzZSkge1xuICB2YXIgaXNCYXNlMTAsIGQsIGRlbm9taW5hdG9yLCBrLCBpbmYsIG51bSwgc2QsIHIsIGFyZyA9IHRoaXMsIEN0b3IgPSBhcmcuY29uc3RydWN0b3IsIHByID0gQ3Rvci5wcmVjaXNpb24sIHJtID0gQ3Rvci5yb3VuZGluZywgZ3VhcmQgPSA1O1xuICBpZiAoYmFzZSA9PSBudWxsKSB7XG4gICAgYmFzZSA9IG5ldyBDdG9yKDEwKTtcbiAgICBpc0Jhc2UxMCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYmFzZSA9IG5ldyBDdG9yKGJhc2UpO1xuICAgIGQgPSBiYXNlLmQ7XG4gICAgaWYgKGJhc2UucyA8IDAgfHwgIWQgfHwgIWRbMF0gfHwgYmFzZS5lcSgxKSlcbiAgICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICAgIGlzQmFzZTEwID0gYmFzZS5lcSgxMCk7XG4gIH1cbiAgZCA9IGFyZy5kO1xuICBpZiAoYXJnLnMgPCAwIHx8ICFkIHx8ICFkWzBdIHx8IGFyZy5lcSgxKSkge1xuICAgIHJldHVybiBuZXcgQ3RvcihkICYmICFkWzBdID8gLTEgLyAwIDogYXJnLnMgIT0gMSA/IE5hTiA6IGQgPyAwIDogMSAvIDApO1xuICB9XG4gIGlmIChpc0Jhc2UxMCkge1xuICAgIGlmIChkLmxlbmd0aCA+IDEpIHtcbiAgICAgIGluZiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoayA9IGRbMF07IGsgJSAxMCA9PT0gMDsgKVxuICAgICAgICBrIC89IDEwO1xuICAgICAgaW5mID0gayAhPT0gMTtcbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgc2QgPSBwciArIGd1YXJkO1xuICBudW0gPSBuYXR1cmFsTG9nYXJpdGhtKGFyZywgc2QpO1xuICBkZW5vbWluYXRvciA9IGlzQmFzZTEwID8gZ2V0TG4xMChDdG9yLCBzZCArIDEwKSA6IG5hdHVyYWxMb2dhcml0aG0oYmFzZSwgc2QpO1xuICByID0gZGl2aWRlKG51bSwgZGVub21pbmF0b3IsIHNkLCAxKTtcbiAgaWYgKGNoZWNrUm91bmRpbmdEaWdpdHMoci5kLCBrID0gcHIsIHJtKSkge1xuICAgIGRvIHtcbiAgICAgIHNkICs9IDEwO1xuICAgICAgbnVtID0gbmF0dXJhbExvZ2FyaXRobShhcmcsIHNkKTtcbiAgICAgIGRlbm9taW5hdG9yID0gaXNCYXNlMTAgPyBnZXRMbjEwKEN0b3IsIHNkICsgMTApIDogbmF0dXJhbExvZ2FyaXRobShiYXNlLCBzZCk7XG4gICAgICByID0gZGl2aWRlKG51bSwgZGVub21pbmF0b3IsIHNkLCAxKTtcbiAgICAgIGlmICghaW5mKSB7XG4gICAgICAgIGlmICgrZGlnaXRzVG9TdHJpbmcoci5kKS5zbGljZShrICsgMSwgayArIDE1KSArIDEgPT0gMWUxNCkge1xuICAgICAgICAgIHIgPSBmaW5hbGlzZShyLCBwciArIDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKGNoZWNrUm91bmRpbmdEaWdpdHMoci5kLCBrICs9IDEwLCBybSkpO1xuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIHByLCBybSk7XG59O1xuUC5taW51cyA9IFAuc3ViID0gZnVuY3Rpb24oeSkge1xuICB2YXIgZCwgZSwgaSwgaiwgaywgbGVuLCBwciwgcm0sIHhkLCB4ZSwgeExUeSwgeWQsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeSA9IG5ldyBDdG9yKHkpO1xuICBpZiAoIXguZCB8fCAheS5kKSB7XG4gICAgaWYgKCF4LnMgfHwgIXkucylcbiAgICAgIHkgPSBuZXcgQ3RvcihOYU4pO1xuICAgIGVsc2UgaWYgKHguZClcbiAgICAgIHkucyA9IC15LnM7XG4gICAgZWxzZVxuICAgICAgeSA9IG5ldyBDdG9yKHkuZCB8fCB4LnMgIT09IHkucyA/IHggOiBOYU4pO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGlmICh4LnMgIT0geS5zKSB7XG4gICAgeS5zID0gLXkucztcbiAgICByZXR1cm4geC5wbHVzKHkpO1xuICB9XG4gIHhkID0geC5kO1xuICB5ZCA9IHkuZDtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoIXhkWzBdIHx8ICF5ZFswXSkge1xuICAgIGlmICh5ZFswXSlcbiAgICAgIHkucyA9IC15LnM7XG4gICAgZWxzZSBpZiAoeGRbMF0pXG4gICAgICB5ID0gbmV3IEN0b3IoeCk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKHJtID09PSAzID8gLTAgOiAwKTtcbiAgICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbiAgfVxuICBlID0gbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgeGUgPSBtYXRoZmxvb3IoeC5lIC8gTE9HX0JBU0UpO1xuICB4ZCA9IHhkLnNsaWNlKCk7XG4gIGsgPSB4ZSAtIGU7XG4gIGlmIChrKSB7XG4gICAgeExUeSA9IGsgPCAwO1xuICAgIGlmICh4TFR5KSB7XG4gICAgICBkID0geGQ7XG4gICAgICBrID0gLWs7XG4gICAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSB5ZDtcbiAgICAgIGUgPSB4ZTtcbiAgICAgIGxlbiA9IHhkLmxlbmd0aDtcbiAgICB9XG4gICAgaSA9IE1hdGgubWF4KE1hdGguY2VpbChwciAvIExPR19CQVNFKSwgbGVuKSArIDI7XG4gICAgaWYgKGsgPiBpKSB7XG4gICAgICBrID0gaTtcbiAgICAgIGQubGVuZ3RoID0gMTtcbiAgICB9XG4gICAgZC5yZXZlcnNlKCk7XG4gICAgZm9yIChpID0gazsgaS0tOyApXG4gICAgICBkLnB1c2goMCk7XG4gICAgZC5yZXZlcnNlKCk7XG4gIH0gZWxzZSB7XG4gICAgaSA9IHhkLmxlbmd0aDtcbiAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgeExUeSA9IGkgPCBsZW47XG4gICAgaWYgKHhMVHkpXG4gICAgICBsZW4gPSBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHhkW2ldICE9IHlkW2ldKSB7XG4gICAgICAgIHhMVHkgPSB4ZFtpXSA8IHlkW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgayA9IDA7XG4gIH1cbiAgaWYgKHhMVHkpIHtcbiAgICBkID0geGQ7XG4gICAgeGQgPSB5ZDtcbiAgICB5ZCA9IGQ7XG4gICAgeS5zID0gLXkucztcbiAgfVxuICBsZW4gPSB4ZC5sZW5ndGg7XG4gIGZvciAoaSA9IHlkLmxlbmd0aCAtIGxlbjsgaSA+IDA7IC0taSlcbiAgICB4ZFtsZW4rK10gPSAwO1xuICBmb3IgKGkgPSB5ZC5sZW5ndGg7IGkgPiBrOyApIHtcbiAgICBpZiAoeGRbLS1pXSA8IHlkW2ldKSB7XG4gICAgICBmb3IgKGogPSBpOyBqICYmIHhkWy0tal0gPT09IDA7IClcbiAgICAgICAgeGRbal0gPSBCQVNFIC0gMTtcbiAgICAgIC0teGRbal07XG4gICAgICB4ZFtpXSArPSBCQVNFO1xuICAgIH1cbiAgICB4ZFtpXSAtPSB5ZFtpXTtcbiAgfVxuICBmb3IgKDsgeGRbLS1sZW5dID09PSAwOyApXG4gICAgeGQucG9wKCk7XG4gIGZvciAoOyB4ZFswXSA9PT0gMDsgeGQuc2hpZnQoKSlcbiAgICAtLWU7XG4gIGlmICgheGRbMF0pXG4gICAgcmV0dXJuIG5ldyBDdG9yKHJtID09PSAzID8gLTAgOiAwKTtcbiAgeS5kID0geGQ7XG4gIHkuZSA9IGdldEJhc2UxMEV4cG9uZW50KHhkLCBlKTtcbiAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgcHIsIHJtKSA6IHk7XG59O1xuUC5tb2R1bG8gPSBQLm1vZCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHEsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeSA9IG5ldyBDdG9yKHkpO1xuICBpZiAoIXguZCB8fCAheS5zIHx8IHkuZCAmJiAheS5kWzBdKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoIXkuZCB8fCB4LmQgJiYgIXguZFswXSkge1xuICAgIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgQ3Rvci5wcmVjaXNpb24sIEN0b3Iucm91bmRpbmcpO1xuICB9XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGlmIChDdG9yLm1vZHVsbyA9PSA5KSB7XG4gICAgcSA9IGRpdmlkZSh4LCB5LmFicygpLCAwLCAzLCAxKTtcbiAgICBxLnMgKj0geS5zO1xuICB9IGVsc2Uge1xuICAgIHEgPSBkaXZpZGUoeCwgeSwgMCwgQ3Rvci5tb2R1bG8sIDEpO1xuICB9XG4gIHEgPSBxLnRpbWVzKHkpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiB4Lm1pbnVzKHEpO1xufTtcblAubmF0dXJhbEV4cG9uZW50aWFsID0gUC5leHAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5hdHVyYWxFeHBvbmVudGlhbCh0aGlzKTtcbn07XG5QLm5hdHVyYWxMb2dhcml0aG0gPSBQLmxuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuYXR1cmFsTG9nYXJpdGhtKHRoaXMpO1xufTtcblAubmVnYXRlZCA9IFAubmVnID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XG4gIHgucyA9IC14LnM7XG4gIHJldHVybiBmaW5hbGlzZSh4KTtcbn07XG5QLnBsdXMgPSBQLmFkZCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGNhcnJ5LCBkLCBlLCBpLCBrLCBsZW4sIHByLCBybSwgeGQsIHlkLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHkgPSBuZXcgQ3Rvcih5KTtcbiAgaWYgKCF4LmQgfHwgIXkuZCkge1xuICAgIGlmICgheC5zIHx8ICF5LnMpXG4gICAgICB5ID0gbmV3IEN0b3IoTmFOKTtcbiAgICBlbHNlIGlmICgheC5kKVxuICAgICAgeSA9IG5ldyBDdG9yKHkuZCB8fCB4LnMgPT09IHkucyA/IHggOiBOYU4pO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGlmICh4LnMgIT0geS5zKSB7XG4gICAgeS5zID0gLXkucztcbiAgICByZXR1cm4geC5taW51cyh5KTtcbiAgfVxuICB4ZCA9IHguZDtcbiAgeWQgPSB5LmQ7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKCF4ZFswXSB8fCAheWRbMF0pIHtcbiAgICBpZiAoIXlkWzBdKVxuICAgICAgeSA9IG5ldyBDdG9yKHgpO1xuICAgIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIHByLCBybSkgOiB5O1xuICB9XG4gIGsgPSBtYXRoZmxvb3IoeC5lIC8gTE9HX0JBU0UpO1xuICBlID0gbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgeGQgPSB4ZC5zbGljZSgpO1xuICBpID0gayAtIGU7XG4gIGlmIChpKSB7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBkID0geGQ7XG4gICAgICBpID0gLWk7XG4gICAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSB5ZDtcbiAgICAgIGUgPSBrO1xuICAgICAgbGVuID0geGQubGVuZ3RoO1xuICAgIH1cbiAgICBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpO1xuICAgIGxlbiA9IGsgPiBsZW4gPyBrICsgMSA6IGxlbiArIDE7XG4gICAgaWYgKGkgPiBsZW4pIHtcbiAgICAgIGkgPSBsZW47XG4gICAgICBkLmxlbmd0aCA9IDE7XG4gICAgfVxuICAgIGQucmV2ZXJzZSgpO1xuICAgIGZvciAoOyBpLS07IClcbiAgICAgIGQucHVzaCgwKTtcbiAgICBkLnJldmVyc2UoKTtcbiAgfVxuICBsZW4gPSB4ZC5sZW5ndGg7XG4gIGkgPSB5ZC5sZW5ndGg7XG4gIGlmIChsZW4gLSBpIDwgMCkge1xuICAgIGkgPSBsZW47XG4gICAgZCA9IHlkO1xuICAgIHlkID0geGQ7XG4gICAgeGQgPSBkO1xuICB9XG4gIGZvciAoY2FycnkgPSAwOyBpOyApIHtcbiAgICBjYXJyeSA9ICh4ZFstLWldID0geGRbaV0gKyB5ZFtpXSArIGNhcnJ5KSAvIEJBU0UgfCAwO1xuICAgIHhkW2ldICU9IEJBU0U7XG4gIH1cbiAgaWYgKGNhcnJ5KSB7XG4gICAgeGQudW5zaGlmdChjYXJyeSk7XG4gICAgKytlO1xuICB9XG4gIGZvciAobGVuID0geGQubGVuZ3RoOyB4ZFstLWxlbl0gPT0gMDsgKVxuICAgIHhkLnBvcCgpO1xuICB5LmQgPSB4ZDtcbiAgeS5lID0gZ2V0QmFzZTEwRXhwb25lbnQoeGQsIGUpO1xuICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbn07XG5QLnByZWNpc2lvbiA9IFAuc2QgPSBmdW5jdGlvbih6KSB7XG4gIHZhciBrLCB4ID0gdGhpcztcbiAgaWYgKHogIT09IHZvaWQgMCAmJiB6ICE9PSAhIXogJiYgeiAhPT0gMSAmJiB6ICE9PSAwKVxuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHopO1xuICBpZiAoeC5kKSB7XG4gICAgayA9IGdldFByZWNpc2lvbih4LmQpO1xuICAgIGlmICh6ICYmIHguZSArIDEgPiBrKVxuICAgICAgayA9IHguZSArIDE7XG4gIH0gZWxzZSB7XG4gICAgayA9IE5hTjtcbiAgfVxuICByZXR1cm4gaztcbn07XG5QLnJvdW5kID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgeC5lICsgMSwgQ3Rvci5yb3VuZGluZyk7XG59O1xuUC5zaW5lID0gUC5zaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heCh4LmUsIHguc2QoKSkgKyBMT0dfQkFTRTtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSBzaW5lKEN0b3IsIHRvTGVzc1RoYW5IYWxmUGkoQ3RvciwgeCkpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZShxdWFkcmFudCA+IDIgPyB4Lm5lZygpIDogeCwgcHIsIHJtLCB0cnVlKTtcbn07XG5QLnNxdWFyZVJvb3QgPSBQLnNxcnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG0sIG4sIHNkLCByLCByZXAsIHQsIHggPSB0aGlzLCBkID0geC5kLCBlID0geC5lLCBzID0geC5zLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHMgIT09IDEgfHwgIWQgfHwgIWRbMF0pIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoIXMgfHwgcyA8IDAgJiYgKCFkIHx8IGRbMF0pID8gTmFOIDogZCA/IHggOiAxIC8gMCk7XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgcyA9IE1hdGguc3FydCgreCk7XG4gIGlmIChzID09IDAgfHwgcyA9PSAxIC8gMCkge1xuICAgIG4gPSBkaWdpdHNUb1N0cmluZyhkKTtcbiAgICBpZiAoKG4ubGVuZ3RoICsgZSkgJSAyID09IDApXG4gICAgICBuICs9IFwiMFwiO1xuICAgIHMgPSBNYXRoLnNxcnQobik7XG4gICAgZSA9IG1hdGhmbG9vcigoZSArIDEpIC8gMikgLSAoZSA8IDAgfHwgZSAlIDIpO1xuICAgIGlmIChzID09IDEgLyAwKSB7XG4gICAgICBuID0gXCI1ZVwiICsgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IHMudG9FeHBvbmVudGlhbCgpO1xuICAgICAgbiA9IG4uc2xpY2UoMCwgbi5pbmRleE9mKFwiZVwiKSArIDEpICsgZTtcbiAgICB9XG4gICAgciA9IG5ldyBDdG9yKG4pO1xuICB9IGVsc2Uge1xuICAgIHIgPSBuZXcgQ3RvcihzLnRvU3RyaW5nKCkpO1xuICB9XG4gIHNkID0gKGUgPSBDdG9yLnByZWNpc2lvbikgKyAzO1xuICBmb3IgKDsgOyApIHtcbiAgICB0ID0gcjtcbiAgICByID0gdC5wbHVzKGRpdmlkZSh4LCB0LCBzZCArIDIsIDEpKS50aW1lcygwLjUpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHNkKSA9PT0gKG4gPSBkaWdpdHNUb1N0cmluZyhyLmQpKS5zbGljZSgwLCBzZCkpIHtcbiAgICAgIG4gPSBuLnNsaWNlKHNkIC0gMywgc2QgKyAxKTtcbiAgICAgIGlmIChuID09IFwiOTk5OVwiIHx8ICFyZXAgJiYgbiA9PSBcIjQ5OTlcIikge1xuICAgICAgICBpZiAoIXJlcCkge1xuICAgICAgICAgIGZpbmFsaXNlKHQsIGUgKyAxLCAwKTtcbiAgICAgICAgICBpZiAodC50aW1lcyh0KS5lcSh4KSkge1xuICAgICAgICAgICAgciA9IHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2QgKz0gNDtcbiAgICAgICAgcmVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghK24gfHwgIStuLnNsaWNlKDEpICYmIG4uY2hhckF0KDApID09IFwiNVwiKSB7XG4gICAgICAgICAgZmluYWxpc2UociwgZSArIDEsIDEpO1xuICAgICAgICAgIG0gPSAhci50aW1lcyhyKS5lcSh4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgZSwgQ3Rvci5yb3VuZGluZywgbSk7XG59O1xuUC50YW5nZW50ID0gUC50YW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyAxMDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LnNpbigpO1xuICB4LnMgPSAxO1xuICB4ID0gZGl2aWRlKHgsIG5ldyBDdG9yKDEpLm1pbnVzKHgudGltZXMoeCkpLnNxcnQoKSwgcHIgKyAxMCwgMCk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHF1YWRyYW50ID09IDIgfHwgcXVhZHJhbnQgPT0gNCA/IHgubmVnKCkgOiB4LCBwciwgcm0sIHRydWUpO1xufTtcblAudGltZXMgPSBQLm11bCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGNhcnJ5LCBlLCBpLCBrLCByLCByTCwgdCwgeGRMLCB5ZEwsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgeGQgPSB4LmQsIHlkID0gKHkgPSBuZXcgQ3Rvcih5KSkuZDtcbiAgeS5zICo9IHgucztcbiAgaWYgKCF4ZCB8fCAheGRbMF0gfHwgIXlkIHx8ICF5ZFswXSkge1xuICAgIHJldHVybiBuZXcgQ3RvcigheS5zIHx8IHhkICYmICF4ZFswXSAmJiAheWQgfHwgeWQgJiYgIXlkWzBdICYmICF4ZCA/IE5hTiA6ICF4ZCB8fCAheWQgPyB5LnMgLyAwIDogeS5zICogMCk7XG4gIH1cbiAgZSA9IG1hdGhmbG9vcih4LmUgLyBMT0dfQkFTRSkgKyBtYXRoZmxvb3IoeS5lIC8gTE9HX0JBU0UpO1xuICB4ZEwgPSB4ZC5sZW5ndGg7XG4gIHlkTCA9IHlkLmxlbmd0aDtcbiAgaWYgKHhkTCA8IHlkTCkge1xuICAgIHIgPSB4ZDtcbiAgICB4ZCA9IHlkO1xuICAgIHlkID0gcjtcbiAgICByTCA9IHhkTDtcbiAgICB4ZEwgPSB5ZEw7XG4gICAgeWRMID0gckw7XG4gIH1cbiAgciA9IFtdO1xuICByTCA9IHhkTCArIHlkTDtcbiAgZm9yIChpID0gckw7IGktLTsgKVxuICAgIHIucHVzaCgwKTtcbiAgZm9yIChpID0geWRMOyAtLWkgPj0gMDsgKSB7XG4gICAgY2FycnkgPSAwO1xuICAgIGZvciAoayA9IHhkTCArIGk7IGsgPiBpOyApIHtcbiAgICAgIHQgPSByW2tdICsgeWRbaV0gKiB4ZFtrIC0gaSAtIDFdICsgY2Fycnk7XG4gICAgICByW2stLV0gPSB0ICUgQkFTRSB8IDA7XG4gICAgICBjYXJyeSA9IHQgLyBCQVNFIHwgMDtcbiAgICB9XG4gICAgcltrXSA9IChyW2tdICsgY2FycnkpICUgQkFTRSB8IDA7XG4gIH1cbiAgZm9yICg7ICFyWy0tckxdOyApXG4gICAgci5wb3AoKTtcbiAgaWYgKGNhcnJ5KVxuICAgICsrZTtcbiAgZWxzZVxuICAgIHIuc2hpZnQoKTtcbiAgeS5kID0gcjtcbiAgeS5lID0gZ2V0QmFzZTEwRXhwb25lbnQociwgZSk7XG4gIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIEN0b3IucHJlY2lzaW9uLCBDdG9yLnJvdW5kaW5nKSA6IHk7XG59O1xuUC50b0JpbmFyeSA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICByZXR1cm4gdG9TdHJpbmdCaW5hcnkodGhpcywgMiwgc2QsIHJtKTtcbn07XG5QLnRvRGVjaW1hbFBsYWNlcyA9IFAudG9EUCA9IGZ1bmN0aW9uKGRwLCBybSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB4ID0gbmV3IEN0b3IoeCk7XG4gIGlmIChkcCA9PT0gdm9pZCAwKVxuICAgIHJldHVybiB4O1xuICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcbiAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBlbHNlXG4gICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gIHJldHVybiBmaW5hbGlzZSh4LCBkcCArIHguZSArIDEsIHJtKTtcbn07XG5QLnRvRXhwb25lbnRpYWwgPSBmdW5jdGlvbihkcCwgcm0pIHtcbiAgdmFyIHN0ciwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoZHAgPT09IHZvaWQgMCkge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrSW50MzIoZHAsIDAsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIHggPSBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgZHAgKyAxLCBybSk7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgdHJ1ZSwgZHAgKyAxKTtcbiAgfVxuICByZXR1cm4geC5pc05lZygpICYmICF4LmlzWmVybygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuUC50b0ZpeGVkID0gZnVuY3Rpb24oZHAsIHJtKSB7XG4gIHZhciBzdHIsIHksIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGRwID09PSB2b2lkIDApIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4KTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgICB5ID0gZmluYWxpc2UobmV3IEN0b3IoeCksIGRwICsgeC5lICsgMSwgcm0pO1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHksIGZhbHNlLCBkcCArIHkuZSArIDEpO1xuICB9XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRvRnJhY3Rpb24gPSBmdW5jdGlvbihtYXhEKSB7XG4gIHZhciBkLCBkMCwgZDEsIGQyLCBlLCBrLCBuLCBuMCwgbjEsIHByLCBxLCByLCB4ID0gdGhpcywgeGQgPSB4LmQsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXhkKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgbjEgPSBkMCA9IG5ldyBDdG9yKDEpO1xuICBkMSA9IG4wID0gbmV3IEN0b3IoMCk7XG4gIGQgPSBuZXcgQ3RvcihkMSk7XG4gIGUgPSBkLmUgPSBnZXRQcmVjaXNpb24oeGQpIC0geC5lIC0gMTtcbiAgayA9IGUgJSBMT0dfQkFTRTtcbiAgZC5kWzBdID0gbWF0aHBvdygxMCwgayA8IDAgPyBMT0dfQkFTRSArIGsgOiBrKTtcbiAgaWYgKG1heEQgPT0gbnVsbCkge1xuICAgIG1heEQgPSBlID4gMCA/IGQgOiBuMTtcbiAgfSBlbHNlIHtcbiAgICBuID0gbmV3IEN0b3IobWF4RCk7XG4gICAgaWYgKCFuLmlzSW50KCkgfHwgbi5sdChuMSkpXG4gICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBuKTtcbiAgICBtYXhEID0gbi5ndChkKSA/IGUgPiAwID8gZCA6IG4xIDogbjtcbiAgfVxuICBleHRlcm5hbCA9IGZhbHNlO1xuICBuID0gbmV3IEN0b3IoZGlnaXRzVG9TdHJpbmcoeGQpKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgQ3Rvci5wcmVjaXNpb24gPSBlID0geGQubGVuZ3RoICogTE9HX0JBU0UgKiAyO1xuICBmb3IgKDsgOyApIHtcbiAgICBxID0gZGl2aWRlKG4sIGQsIDAsIDEsIDEpO1xuICAgIGQyID0gZDAucGx1cyhxLnRpbWVzKGQxKSk7XG4gICAgaWYgKGQyLmNtcChtYXhEKSA9PSAxKVxuICAgICAgYnJlYWs7XG4gICAgZDAgPSBkMTtcbiAgICBkMSA9IGQyO1xuICAgIGQyID0gbjE7XG4gICAgbjEgPSBuMC5wbHVzKHEudGltZXMoZDIpKTtcbiAgICBuMCA9IGQyO1xuICAgIGQyID0gZDtcbiAgICBkID0gbi5taW51cyhxLnRpbWVzKGQyKSk7XG4gICAgbiA9IGQyO1xuICB9XG4gIGQyID0gZGl2aWRlKG1heEQubWludXMoZDApLCBkMSwgMCwgMSwgMSk7XG4gIG4wID0gbjAucGx1cyhkMi50aW1lcyhuMSkpO1xuICBkMCA9IGQwLnBsdXMoZDIudGltZXMoZDEpKTtcbiAgbjAucyA9IG4xLnMgPSB4LnM7XG4gIHIgPSBkaXZpZGUobjEsIGQxLCBlLCAxKS5taW51cyh4KS5hYnMoKS5jbXAoZGl2aWRlKG4wLCBkMCwgZSwgMSkubWludXMoeCkuYWJzKCkpIDwgMSA/IFtuMSwgZDFdIDogW24wLCBkMF07XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHI7XG59O1xuUC50b0hleGFkZWNpbWFsID0gUC50b0hleCA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICByZXR1cm4gdG9TdHJpbmdCaW5hcnkodGhpcywgMTYsIHNkLCBybSk7XG59O1xuUC50b05lYXJlc3QgPSBmdW5jdGlvbih5LCBybSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB4ID0gbmV3IEN0b3IoeCk7XG4gIGlmICh5ID09IG51bGwpIHtcbiAgICBpZiAoIXguZClcbiAgICAgIHJldHVybiB4O1xuICAgIHkgPSBuZXcgQ3RvcigxKTtcbiAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIH0gZWxzZSB7XG4gICAgeSA9IG5ldyBDdG9yKHkpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKSB7XG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIH1cbiAgICBpZiAoIXguZClcbiAgICAgIHJldHVybiB5LnMgPyB4IDogeTtcbiAgICBpZiAoIXkuZCkge1xuICAgICAgaWYgKHkucylcbiAgICAgICAgeS5zID0geC5zO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuICB9XG4gIGlmICh5LmRbMF0pIHtcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xuICAgIHggPSBkaXZpZGUoeCwgeSwgMCwgcm0sIDEpLnRpbWVzKHkpO1xuICAgIGV4dGVybmFsID0gdHJ1ZTtcbiAgICBmaW5hbGlzZSh4KTtcbiAgfSBlbHNlIHtcbiAgICB5LnMgPSB4LnM7XG4gICAgeCA9IHk7XG4gIH1cbiAgcmV0dXJuIHg7XG59O1xuUC50b051bWJlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gK3RoaXM7XG59O1xuUC50b09jdGFsID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHJldHVybiB0b1N0cmluZ0JpbmFyeSh0aGlzLCA4LCBzZCwgcm0pO1xufTtcblAudG9Qb3dlciA9IFAucG93ID0gZnVuY3Rpb24oeSkge1xuICB2YXIgZSwgaywgcHIsIHIsIHJtLCBzLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHluID0gKyh5ID0gbmV3IEN0b3IoeSkpO1xuICBpZiAoIXguZCB8fCAheS5kIHx8ICF4LmRbMF0gfHwgIXkuZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3IobWF0aHBvdygreCwgeW4pKTtcbiAgeCA9IG5ldyBDdG9yKHgpO1xuICBpZiAoeC5lcSgxKSlcbiAgICByZXR1cm4geDtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoeS5lcSgxKSlcbiAgICByZXR1cm4gZmluYWxpc2UoeCwgcHIsIHJtKTtcbiAgZSA9IG1hdGhmbG9vcih5LmUgLyBMT0dfQkFTRSk7XG4gIGlmIChlID49IHkuZC5sZW5ndGggLSAxICYmIChrID0geW4gPCAwID8gLXluIDogeW4pIDw9IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICByID0gaW50UG93KEN0b3IsIHgsIGssIHByKTtcbiAgICByZXR1cm4geS5zIDwgMCA/IG5ldyBDdG9yKDEpLmRpdihyKSA6IGZpbmFsaXNlKHIsIHByLCBybSk7XG4gIH1cbiAgcyA9IHgucztcbiAgaWYgKHMgPCAwKSB7XG4gICAgaWYgKGUgPCB5LmQubGVuZ3RoIC0gMSlcbiAgICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICAgIGlmICgoeS5kW2VdICYgMSkgPT0gMClcbiAgICAgIHMgPSAxO1xuICAgIGlmICh4LmUgPT0gMCAmJiB4LmRbMF0gPT0gMSAmJiB4LmQubGVuZ3RoID09IDEpIHtcbiAgICAgIHgucyA9IHM7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gIH1cbiAgayA9IG1hdGhwb3coK3gsIHluKTtcbiAgZSA9IGsgPT0gMCB8fCAhaXNGaW5pdGUoaykgPyBtYXRoZmxvb3IoeW4gKiAoTWF0aC5sb2coXCIwLlwiICsgZGlnaXRzVG9TdHJpbmcoeC5kKSkgLyBNYXRoLkxOMTAgKyB4LmUgKyAxKSkgOiBuZXcgQ3RvcihrICsgXCJcIikuZTtcbiAgaWYgKGUgPiBDdG9yLm1heEUgKyAxIHx8IGUgPCBDdG9yLm1pbkUgLSAxKVxuICAgIHJldHVybiBuZXcgQ3RvcihlID4gMCA/IHMgLyAwIDogMCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIEN0b3Iucm91bmRpbmcgPSB4LnMgPSAxO1xuICBrID0gTWF0aC5taW4oMTIsIChlICsgXCJcIikubGVuZ3RoKTtcbiAgciA9IG5hdHVyYWxFeHBvbmVudGlhbCh5LnRpbWVzKG5hdHVyYWxMb2dhcml0aG0oeCwgcHIgKyBrKSksIHByKTtcbiAgaWYgKHIuZCkge1xuICAgIHIgPSBmaW5hbGlzZShyLCBwciArIDUsIDEpO1xuICAgIGlmIChjaGVja1JvdW5kaW5nRGlnaXRzKHIuZCwgcHIsIHJtKSkge1xuICAgICAgZSA9IHByICsgMTA7XG4gICAgICByID0gZmluYWxpc2UobmF0dXJhbEV4cG9uZW50aWFsKHkudGltZXMobmF0dXJhbExvZ2FyaXRobSh4LCBlICsgaykpLCBlKSwgZSArIDUsIDEpO1xuICAgICAgaWYgKCtkaWdpdHNUb1N0cmluZyhyLmQpLnNsaWNlKHByICsgMSwgcHIgKyAxNSkgKyAxID09IDFlMTQpIHtcbiAgICAgICAgciA9IGZpbmFsaXNlKHIsIHByICsgMSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHIucyA9IHM7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UociwgcHIsIHJtKTtcbn07XG5QLnRvUHJlY2lzaW9uID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHZhciBzdHIsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHNkID09PSB2b2lkIDApIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gICAgeCA9IGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBzZCwgcm0pO1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHNkIDw9IHguZSB8fCB4LmUgPD0gQ3Rvci50b0V4cE5lZywgc2QpO1xuICB9XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRvU2lnbmlmaWNhbnREaWdpdHMgPSBQLnRvU0QgPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHNkID09PSB2b2lkIDApIHtcbiAgICBzZCA9IEN0b3IucHJlY2lzaW9uO1xuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgfVxuICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIHNkLCBybSk7XG59O1xuUC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRydW5jYXRlZCA9IFAudHJ1bmMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpLCB0aGlzLmUgKyAxLCAxKTtcbn07XG5QLnZhbHVlT2YgPSBQLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIHJldHVybiB4LmlzTmVnKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5mdW5jdGlvbiBkaWdpdHNUb1N0cmluZyhkKSB7XG4gIHZhciBpLCBrLCB3cywgaW5kZXhPZkxhc3RXb3JkID0gZC5sZW5ndGggLSAxLCBzdHIgPSBcIlwiLCB3ID0gZFswXTtcbiAgaWYgKGluZGV4T2ZMYXN0V29yZCA+IDApIHtcbiAgICBzdHIgKz0gdztcbiAgICBmb3IgKGkgPSAxOyBpIDwgaW5kZXhPZkxhc3RXb3JkOyBpKyspIHtcbiAgICAgIHdzID0gZFtpXSArIFwiXCI7XG4gICAgICBrID0gTE9HX0JBU0UgLSB3cy5sZW5ndGg7XG4gICAgICBpZiAoaylcbiAgICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gICAgICBzdHIgKz0gd3M7XG4gICAgfVxuICAgIHcgPSBkW2ldO1xuICAgIHdzID0gdyArIFwiXCI7XG4gICAgayA9IExPR19CQVNFIC0gd3MubGVuZ3RoO1xuICAgIGlmIChrKVxuICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gIH0gZWxzZSBpZiAodyA9PT0gMCkge1xuICAgIHJldHVybiBcIjBcIjtcbiAgfVxuICBmb3IgKDsgdyAlIDEwID09PSAwOyApXG4gICAgdyAvPSAxMDtcbiAgcmV0dXJuIHN0ciArIHc7XG59XG5mdW5jdGlvbiBjaGVja0ludDMyKGksIG1pbjIsIG1heDIpIHtcbiAgaWYgKGkgIT09IH5+aSB8fCBpIDwgbWluMiB8fCBpID4gbWF4Mikge1xuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIGkpO1xuICB9XG59XG5mdW5jdGlvbiBjaGVja1JvdW5kaW5nRGlnaXRzKGQsIGksIHJtLCByZXBlYXRpbmcpIHtcbiAgdmFyIGRpLCBrLCByLCByZDtcbiAgZm9yIChrID0gZFswXTsgayA+PSAxMDsgayAvPSAxMClcbiAgICAtLWk7XG4gIGlmICgtLWkgPCAwKSB7XG4gICAgaSArPSBMT0dfQkFTRTtcbiAgICBkaSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgZGkgPSBNYXRoLmNlaWwoKGkgKyAxKSAvIExPR19CQVNFKTtcbiAgICBpICU9IExPR19CQVNFO1xuICB9XG4gIGsgPSBtYXRocG93KDEwLCBMT0dfQkFTRSAtIGkpO1xuICByZCA9IGRbZGldICUgayB8IDA7XG4gIGlmIChyZXBlYXRpbmcgPT0gbnVsbCkge1xuICAgIGlmIChpIDwgMykge1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgcmQgPSByZCAvIDEwMCB8IDA7XG4gICAgICBlbHNlIGlmIChpID09IDEpXG4gICAgICAgIHJkID0gcmQgLyAxMCB8IDA7XG4gICAgICByID0gcm0gPCA0ICYmIHJkID09IDk5OTk5IHx8IHJtID4gMyAmJiByZCA9PSA0OTk5OSB8fCByZCA9PSA1ZTQgfHwgcmQgPT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IChybSA8IDQgJiYgcmQgKyAxID09IGsgfHwgcm0gPiAzICYmIHJkICsgMSA9PSBrIC8gMikgJiYgKGRbZGkgKyAxXSAvIGsgLyAxMDAgfCAwKSA9PSBtYXRocG93KDEwLCBpIC0gMikgLSAxIHx8IChyZCA9PSBrIC8gMiB8fCByZCA9PSAwKSAmJiAoZFtkaSArIDFdIC8gayAvIDEwMCB8IDApID09IDA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpIDwgNCkge1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgcmQgPSByZCAvIDFlMyB8IDA7XG4gICAgICBlbHNlIGlmIChpID09IDEpXG4gICAgICAgIHJkID0gcmQgLyAxMDAgfCAwO1xuICAgICAgZWxzZSBpZiAoaSA9PSAyKVxuICAgICAgICByZCA9IHJkIC8gMTAgfCAwO1xuICAgICAgciA9IChyZXBlYXRpbmcgfHwgcm0gPCA0KSAmJiByZCA9PSA5OTk5IHx8ICFyZXBlYXRpbmcgJiYgcm0gPiAzICYmIHJkID09IDQ5OTk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSAoKHJlcGVhdGluZyB8fCBybSA8IDQpICYmIHJkICsgMSA9PSBrIHx8ICFyZXBlYXRpbmcgJiYgcm0gPiAzICYmIHJkICsgMSA9PSBrIC8gMikgJiYgKGRbZGkgKyAxXSAvIGsgLyAxZTMgfCAwKSA9PSBtYXRocG93KDEwLCBpIC0gMykgLSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRCYXNlKHN0ciwgYmFzZUluLCBiYXNlT3V0KSB7XG4gIHZhciBqLCBhcnIgPSBbMF0sIGFyckwsIGkgPSAwLCBzdHJMID0gc3RyLmxlbmd0aDtcbiAgZm9yICg7IGkgPCBzdHJMOyApIHtcbiAgICBmb3IgKGFyckwgPSBhcnIubGVuZ3RoOyBhcnJMLS07IClcbiAgICAgIGFyclthcnJMXSAqPSBiYXNlSW47XG4gICAgYXJyWzBdICs9IE5VTUVSQUxTLmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYXJyW2pdID4gYmFzZU91dCAtIDEpIHtcbiAgICAgICAgaWYgKGFycltqICsgMV0gPT09IHZvaWQgMClcbiAgICAgICAgICBhcnJbaiArIDFdID0gMDtcbiAgICAgICAgYXJyW2ogKyAxXSArPSBhcnJbal0gLyBiYXNlT3V0IHwgMDtcbiAgICAgICAgYXJyW2pdICU9IGJhc2VPdXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnIucmV2ZXJzZSgpO1xufVxuZnVuY3Rpb24gY29zaW5lKEN0b3IsIHgpIHtcbiAgdmFyIGssIGxlbiwgeTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIHg7XG4gIGxlbiA9IHguZC5sZW5ndGg7XG4gIGlmIChsZW4gPCAzMikge1xuICAgIGsgPSBNYXRoLmNlaWwobGVuIC8gMyk7XG4gICAgeSA9ICgxIC8gdGlueVBvdyg0LCBrKSkudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICBrID0gMTY7XG4gICAgeSA9IFwiMi4zMjgzMDY0MzY1Mzg2OTYyODkwNjI1ZS0xMFwiO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uICs9IGs7XG4gIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMSwgeC50aW1lcyh5KSwgbmV3IEN0b3IoMSkpO1xuICBmb3IgKHZhciBpID0gazsgaS0tOyApIHtcbiAgICB2YXIgY29zMnggPSB4LnRpbWVzKHgpO1xuICAgIHggPSBjb3MyeC50aW1lcyhjb3MyeCkubWludXMoY29zMngpLnRpbWVzKDgpLnBsdXMoMSk7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gLT0gaztcbiAgcmV0dXJuIHg7XG59XG52YXIgZGl2aWRlID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG11bHRpcGx5SW50ZWdlcih4LCBrLCBiYXNlKSB7XG4gICAgdmFyIHRlbXAsIGNhcnJ5ID0gMCwgaSA9IHgubGVuZ3RoO1xuICAgIGZvciAoeCA9IHguc2xpY2UoKTsgaS0tOyApIHtcbiAgICAgIHRlbXAgPSB4W2ldICogayArIGNhcnJ5O1xuICAgICAgeFtpXSA9IHRlbXAgJSBiYXNlIHwgMDtcbiAgICAgIGNhcnJ5ID0gdGVtcCAvIGJhc2UgfCAwO1xuICAgIH1cbiAgICBpZiAoY2FycnkpXG4gICAgICB4LnVuc2hpZnQoY2FycnkpO1xuICAgIHJldHVybiB4O1xuICB9XG4gIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgYUwsIGJMKSB7XG4gICAgdmFyIGksIHI7XG4gICAgaWYgKGFMICE9IGJMKSB7XG4gICAgICByID0gYUwgPiBiTCA/IDEgOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gciA9IDA7IGkgPCBhTDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9IGJbaV0pIHtcbiAgICAgICAgICByID0gYVtpXSA+IGJbaV0gPyAxIDogLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYiwgYUwsIGJhc2UpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGFMLS07ICkge1xuICAgICAgYVthTF0gLT0gaTtcbiAgICAgIGkgPSBhW2FMXSA8IGJbYUxdID8gMSA6IDA7XG4gICAgICBhW2FMXSA9IGkgKiBiYXNlICsgYVthTF0gLSBiW2FMXTtcbiAgICB9XG4gICAgZm9yICg7ICFhWzBdICYmIGEubGVuZ3RoID4gMTsgKVxuICAgICAgYS5zaGlmdCgpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbih4LCB5LCBwciwgcm0sIGRwLCBiYXNlKSB7XG4gICAgdmFyIGNtcCwgZSwgaSwgaywgbG9nQmFzZSwgbW9yZSwgcHJvZCwgcHJvZEwsIHEsIHFkLCByZW0sIHJlbUwsIHJlbTAsIHNkLCB0LCB4aSwgeEwsIHlkMCwgeUwsIHl6LCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgc2lnbjIgPSB4LnMgPT0geS5zID8gMSA6IC0xLCB4ZCA9IHguZCwgeWQgPSB5LmQ7XG4gICAgaWYgKCF4ZCB8fCAheGRbMF0gfHwgIXlkIHx8ICF5ZFswXSkge1xuICAgICAgcmV0dXJuIG5ldyBDdG9yKCF4LnMgfHwgIXkucyB8fCAoeGQgPyB5ZCAmJiB4ZFswXSA9PSB5ZFswXSA6ICF5ZCkgPyBOYU4gOiB4ZCAmJiB4ZFswXSA9PSAwIHx8ICF5ZCA/IHNpZ24yICogMCA6IHNpZ24yIC8gMCk7XG4gICAgfVxuICAgIGlmIChiYXNlKSB7XG4gICAgICBsb2dCYXNlID0gMTtcbiAgICAgIGUgPSB4LmUgLSB5LmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSBCQVNFO1xuICAgICAgbG9nQmFzZSA9IExPR19CQVNFO1xuICAgICAgZSA9IG1hdGhmbG9vcih4LmUgLyBsb2dCYXNlKSAtIG1hdGhmbG9vcih5LmUgLyBsb2dCYXNlKTtcbiAgICB9XG4gICAgeUwgPSB5ZC5sZW5ndGg7XG4gICAgeEwgPSB4ZC5sZW5ndGg7XG4gICAgcSA9IG5ldyBDdG9yKHNpZ24yKTtcbiAgICBxZCA9IHEuZCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IHlkW2ldID09ICh4ZFtpXSB8fCAwKTsgaSsrKVxuICAgICAgO1xuICAgIGlmICh5ZFtpXSA+ICh4ZFtpXSB8fCAwKSlcbiAgICAgIGUtLTtcbiAgICBpZiAocHIgPT0gbnVsbCkge1xuICAgICAgc2QgPSBwciA9IEN0b3IucHJlY2lzaW9uO1xuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIH0gZWxzZSBpZiAoZHApIHtcbiAgICAgIHNkID0gcHIgKyAoeC5lIC0geS5lKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNkID0gcHI7XG4gICAgfVxuICAgIGlmIChzZCA8IDApIHtcbiAgICAgIHFkLnB1c2goMSk7XG4gICAgICBtb3JlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2QgPSBzZCAvIGxvZ0Jhc2UgKyAyIHwgMDtcbiAgICAgIGkgPSAwO1xuICAgICAgaWYgKHlMID09IDEpIHtcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHlkID0geWRbMF07XG4gICAgICAgIHNkKys7XG4gICAgICAgIGZvciAoOyAoaSA8IHhMIHx8IGspICYmIHNkLS07IGkrKykge1xuICAgICAgICAgIHQgPSBrICogYmFzZSArICh4ZFtpXSB8fCAwKTtcbiAgICAgICAgICBxZFtpXSA9IHQgLyB5ZCB8IDA7XG4gICAgICAgICAgayA9IHQgJSB5ZCB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgbW9yZSA9IGsgfHwgaSA8IHhMO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgayA9IGJhc2UgLyAoeWRbMF0gKyAxKSB8IDA7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgIHlkID0gbXVsdGlwbHlJbnRlZ2VyKHlkLCBrLCBiYXNlKTtcbiAgICAgICAgICB4ZCA9IG11bHRpcGx5SW50ZWdlcih4ZCwgaywgYmFzZSk7XG4gICAgICAgICAgeUwgPSB5ZC5sZW5ndGg7XG4gICAgICAgICAgeEwgPSB4ZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgeGkgPSB5TDtcbiAgICAgICAgcmVtID0geGQuc2xpY2UoMCwgeUwpO1xuICAgICAgICByZW1MID0gcmVtLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IHJlbUwgPCB5TDsgKVxuICAgICAgICAgIHJlbVtyZW1MKytdID0gMDtcbiAgICAgICAgeXogPSB5ZC5zbGljZSgpO1xuICAgICAgICB5ei51bnNoaWZ0KDApO1xuICAgICAgICB5ZDAgPSB5ZFswXTtcbiAgICAgICAgaWYgKHlkWzFdID49IGJhc2UgLyAyKVxuICAgICAgICAgICsreWQwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgayA9IDA7XG4gICAgICAgICAgY21wID0gY29tcGFyZSh5ZCwgcmVtLCB5TCwgcmVtTCk7XG4gICAgICAgICAgaWYgKGNtcCA8IDApIHtcbiAgICAgICAgICAgIHJlbTAgPSByZW1bMF07XG4gICAgICAgICAgICBpZiAoeUwgIT0gcmVtTClcbiAgICAgICAgICAgICAgcmVtMCA9IHJlbTAgKiBiYXNlICsgKHJlbVsxXSB8fCAwKTtcbiAgICAgICAgICAgIGsgPSByZW0wIC8geWQwIHwgMDtcbiAgICAgICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgICAgICBpZiAoayA+PSBiYXNlKVxuICAgICAgICAgICAgICAgIGsgPSBiYXNlIC0gMTtcbiAgICAgICAgICAgICAgcHJvZCA9IG11bHRpcGx5SW50ZWdlcih5ZCwgaywgYmFzZSk7XG4gICAgICAgICAgICAgIHByb2RMID0gcHJvZC5sZW5ndGg7XG4gICAgICAgICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICBjbXAgPSBjb21wYXJlKHByb2QsIHJlbSwgcHJvZEwsIHJlbUwpO1xuICAgICAgICAgICAgICBpZiAoY21wID09IDEpIHtcbiAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgc3VidHJhY3QocHJvZCwgeUwgPCBwcm9kTCA/IHl6IDogeWQsIHByb2RMLCBiYXNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGsgPT0gMClcbiAgICAgICAgICAgICAgICBjbXAgPSBrID0gMTtcbiAgICAgICAgICAgICAgcHJvZCA9IHlkLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9kTCA9IHByb2QubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHByb2RMIDwgcmVtTClcbiAgICAgICAgICAgICAgcHJvZC51bnNoaWZ0KDApO1xuICAgICAgICAgICAgc3VidHJhY3QocmVtLCBwcm9kLCByZW1MLCBiYXNlKTtcbiAgICAgICAgICAgIGlmIChjbXAgPT0gLTEpIHtcbiAgICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgICAgICAgIGNtcCA9IGNvbXBhcmUoeWQsIHJlbSwgeUwsIHJlbUwpO1xuICAgICAgICAgICAgICBpZiAoY21wIDwgMSkge1xuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICBzdWJ0cmFjdChyZW0sIHlMIDwgcmVtTCA/IHl6IDogeWQsIHJlbUwsIGJhc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW1MID0gcmVtLmxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNtcCA9PT0gMCkge1xuICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgcmVtID0gWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxZFtpKytdID0gaztcbiAgICAgICAgICBpZiAoY21wICYmIHJlbVswXSkge1xuICAgICAgICAgICAgcmVtW3JlbUwrK10gPSB4ZFt4aV0gfHwgMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtID0gW3hkW3hpXV07XG4gICAgICAgICAgICByZW1MID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCh4aSsrIDwgeEwgfHwgcmVtWzBdICE9PSB2b2lkIDApICYmIHNkLS0pO1xuICAgICAgICBtb3JlID0gcmVtWzBdICE9PSB2b2lkIDA7XG4gICAgICB9XG4gICAgICBpZiAoIXFkWzBdKVxuICAgICAgICBxZC5zaGlmdCgpO1xuICAgIH1cbiAgICBpZiAobG9nQmFzZSA9PSAxKSB7XG4gICAgICBxLmUgPSBlO1xuICAgICAgaW5leGFjdCA9IG1vcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDEsIGsgPSBxZFswXTsgayA+PSAxMDsgayAvPSAxMClcbiAgICAgICAgaSsrO1xuICAgICAgcS5lID0gaSArIGUgKiBsb2dCYXNlIC0gMTtcbiAgICAgIGZpbmFsaXNlKHEsIGRwID8gcHIgKyBxLmUgKyAxIDogcHIsIHJtLCBtb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIHE7XG4gIH07XG59KCk7XG5mdW5jdGlvbiBmaW5hbGlzZSh4LCBzZCwgcm0sIGlzVHJ1bmNhdGVkKSB7XG4gIHZhciBkaWdpdHMsIGksIGosIGssIHJkLCByb3VuZFVwLCB3LCB4ZCwgeGRpLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgb3V0OlxuICAgIGlmIChzZCAhPSBudWxsKSB7XG4gICAgICB4ZCA9IHguZDtcbiAgICAgIGlmICgheGQpXG4gICAgICAgIHJldHVybiB4O1xuICAgICAgZm9yIChkaWdpdHMgPSAxLCBrID0geGRbMF07IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgICAgIGRpZ2l0cysrO1xuICAgICAgaSA9IHNkIC0gZGlnaXRzO1xuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gTE9HX0JBU0U7XG4gICAgICAgIGogPSBzZDtcbiAgICAgICAgdyA9IHhkW3hkaSA9IDBdO1xuICAgICAgICByZCA9IHcgLyBtYXRocG93KDEwLCBkaWdpdHMgLSBqIC0gMSkgJSAxMCB8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZGkgPSBNYXRoLmNlaWwoKGkgKyAxKSAvIExPR19CQVNFKTtcbiAgICAgICAgayA9IHhkLmxlbmd0aDtcbiAgICAgICAgaWYgKHhkaSA+PSBrKSB7XG4gICAgICAgICAgaWYgKGlzVHJ1bmNhdGVkKSB7XG4gICAgICAgICAgICBmb3IgKDsgaysrIDw9IHhkaTsgKVxuICAgICAgICAgICAgICB4ZC5wdXNoKDApO1xuICAgICAgICAgICAgdyA9IHJkID0gMDtcbiAgICAgICAgICAgIGRpZ2l0cyA9IDE7XG4gICAgICAgICAgICBpICU9IExPR19CQVNFO1xuICAgICAgICAgICAgaiA9IGkgLSBMT0dfQkFTRSArIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrIG91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdyA9IGsgPSB4ZFt4ZGldO1xuICAgICAgICAgIGZvciAoZGlnaXRzID0gMTsgayA+PSAxMDsgayAvPSAxMClcbiAgICAgICAgICAgIGRpZ2l0cysrO1xuICAgICAgICAgIGkgJT0gTE9HX0JBU0U7XG4gICAgICAgICAgaiA9IGkgLSBMT0dfQkFTRSArIGRpZ2l0cztcbiAgICAgICAgICByZCA9IGogPCAwID8gMCA6IHcgLyBtYXRocG93KDEwLCBkaWdpdHMgLSBqIC0gMSkgJSAxMCB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzVHJ1bmNhdGVkID0gaXNUcnVuY2F0ZWQgfHwgc2QgPCAwIHx8IHhkW3hkaSArIDFdICE9PSB2b2lkIDAgfHwgKGogPCAwID8gdyA6IHcgJSBtYXRocG93KDEwLCBkaWdpdHMgLSBqIC0gMSkpO1xuICAgICAgcm91bmRVcCA9IHJtIDwgNCA/IChyZCB8fCBpc1RydW5jYXRlZCkgJiYgKHJtID09IDAgfHwgcm0gPT0gKHgucyA8IDAgPyAzIDogMikpIDogcmQgPiA1IHx8IHJkID09IDUgJiYgKHJtID09IDQgfHwgaXNUcnVuY2F0ZWQgfHwgcm0gPT0gNiAmJiAoaSA+IDAgPyBqID4gMCA/IHcgLyBtYXRocG93KDEwLCBkaWdpdHMgLSBqKSA6IDAgOiB4ZFt4ZGkgLSAxXSkgJSAxMCAmIDEgfHwgcm0gPT0gKHgucyA8IDAgPyA4IDogNykpO1xuICAgICAgaWYgKHNkIDwgMSB8fCAheGRbMF0pIHtcbiAgICAgICAgeGQubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHJvdW5kVXApIHtcbiAgICAgICAgICBzZCAtPSB4LmUgKyAxO1xuICAgICAgICAgIHhkWzBdID0gbWF0aHBvdygxMCwgKExPR19CQVNFIC0gc2QgJSBMT0dfQkFTRSkgJSBMT0dfQkFTRSk7XG4gICAgICAgICAgeC5lID0gLXNkIHx8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeGRbMF0gPSB4LmUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICB4ZC5sZW5ndGggPSB4ZGk7XG4gICAgICAgIGsgPSAxO1xuICAgICAgICB4ZGktLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhkLmxlbmd0aCA9IHhkaSArIDE7XG4gICAgICAgIGsgPSBtYXRocG93KDEwLCBMT0dfQkFTRSAtIGkpO1xuICAgICAgICB4ZFt4ZGldID0gaiA+IDAgPyAodyAvIG1hdGhwb3coMTAsIGRpZ2l0cyAtIGopICUgbWF0aHBvdygxMCwgaikgfCAwKSAqIGsgOiAwO1xuICAgICAgfVxuICAgICAgaWYgKHJvdW5kVXApIHtcbiAgICAgICAgZm9yICg7IDsgKSB7XG4gICAgICAgICAgaWYgKHhkaSA9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxLCBqID0geGRbMF07IGogPj0gMTA7IGogLz0gMTApXG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGogPSB4ZFswXSArPSBrO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgaiA+PSAxMDsgaiAvPSAxMClcbiAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgaWYgKGkgIT0gaykge1xuICAgICAgICAgICAgICB4LmUrKztcbiAgICAgICAgICAgICAgaWYgKHhkWzBdID09IEJBU0UpXG4gICAgICAgICAgICAgICAgeGRbMF0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhkW3hkaV0gKz0gaztcbiAgICAgICAgICAgIGlmICh4ZFt4ZGldICE9IEJBU0UpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgeGRbeGRpLS1dID0gMDtcbiAgICAgICAgICAgIGsgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChpID0geGQubGVuZ3RoOyB4ZFstLWldID09PSAwOyApXG4gICAgICAgIHhkLnBvcCgpO1xuICAgIH1cbiAgaWYgKGV4dGVybmFsKSB7XG4gICAgaWYgKHguZSA+IEN0b3IubWF4RSkge1xuICAgICAgeC5kID0gbnVsbDtcbiAgICAgIHguZSA9IE5hTjtcbiAgICB9IGVsc2UgaWYgKHguZSA8IEN0b3IubWluRSkge1xuICAgICAgeC5lID0gMDtcbiAgICAgIHguZCA9IFswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiBmaW5pdGVUb1N0cmluZyh4LCBpc0V4cCwgc2QpIHtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5vbkZpbml0ZVRvU3RyaW5nKHgpO1xuICB2YXIgaywgZSA9IHguZSwgc3RyID0gZGlnaXRzVG9TdHJpbmcoeC5kKSwgbGVuID0gc3RyLmxlbmd0aDtcbiAgaWYgKGlzRXhwKSB7XG4gICAgaWYgKHNkICYmIChrID0gc2QgLSBsZW4pID4gMCkge1xuICAgICAgc3RyID0gc3RyLmNoYXJBdCgwKSArIFwiLlwiICsgc3RyLnNsaWNlKDEpICsgZ2V0WmVyb1N0cmluZyhrKTtcbiAgICB9IGVsc2UgaWYgKGxlbiA+IDEpIHtcbiAgICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkgKyBcIi5cIiArIHN0ci5zbGljZSgxKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgKHguZSA8IDAgPyBcImVcIiA6IFwiZStcIikgKyB4LmU7XG4gIH0gZWxzZSBpZiAoZSA8IDApIHtcbiAgICBzdHIgPSBcIjAuXCIgKyBnZXRaZXJvU3RyaW5nKC1lIC0gMSkgKyBzdHI7XG4gICAgaWYgKHNkICYmIChrID0gc2QgLSBsZW4pID4gMClcbiAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xuICB9IGVsc2UgaWYgKGUgPj0gbGVuKSB7XG4gICAgc3RyICs9IGdldFplcm9TdHJpbmcoZSArIDEgLSBsZW4pO1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gZSAtIDEpID4gMClcbiAgICAgIHN0ciA9IHN0ciArIFwiLlwiICsgZ2V0WmVyb1N0cmluZyhrKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKGsgPSBlICsgMSkgPCBsZW4pXG4gICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgaykgKyBcIi5cIiArIHN0ci5zbGljZShrKTtcbiAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGxlbikgPiAwKSB7XG4gICAgICBpZiAoZSArIDEgPT09IGxlbilcbiAgICAgICAgc3RyICs9IFwiLlwiO1xuICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBnZXRCYXNlMTBFeHBvbmVudChkaWdpdHMsIGUpIHtcbiAgdmFyIHcgPSBkaWdpdHNbMF07XG4gIGZvciAoZSAqPSBMT0dfQkFTRTsgdyA+PSAxMDsgdyAvPSAxMClcbiAgICBlKys7XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gZ2V0TG4xMChDdG9yLCBzZCwgcHIpIHtcbiAgaWYgKHNkID4gTE4xMF9QUkVDSVNJT04pIHtcbiAgICBleHRlcm5hbCA9IHRydWU7XG4gICAgaWYgKHByKVxuICAgICAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgICB0aHJvdyBFcnJvcihwcmVjaXNpb25MaW1pdEV4Y2VlZGVkKTtcbiAgfVxuICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoTE4xMCksIHNkLCAxLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldFBpKEN0b3IsIHNkLCBybSkge1xuICBpZiAoc2QgPiBQSV9QUkVDSVNJT04pXG4gICAgdGhyb3cgRXJyb3IocHJlY2lzaW9uTGltaXRFeGNlZWRlZCk7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgQ3RvcihQSSksIHNkLCBybSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBnZXRQcmVjaXNpb24oZGlnaXRzKSB7XG4gIHZhciB3ID0gZGlnaXRzLmxlbmd0aCAtIDEsIGxlbiA9IHcgKiBMT0dfQkFTRSArIDE7XG4gIHcgPSBkaWdpdHNbd107XG4gIGlmICh3KSB7XG4gICAgZm9yICg7IHcgJSAxMCA9PSAwOyB3IC89IDEwKVxuICAgICAgbGVuLS07XG4gICAgZm9yICh3ID0gZGlnaXRzWzBdOyB3ID49IDEwOyB3IC89IDEwKVxuICAgICAgbGVuKys7XG4gIH1cbiAgcmV0dXJuIGxlbjtcbn1cbmZ1bmN0aW9uIGdldFplcm9TdHJpbmcoaykge1xuICB2YXIgenMgPSBcIlwiO1xuICBmb3IgKDsgay0tOyApXG4gICAgenMgKz0gXCIwXCI7XG4gIHJldHVybiB6cztcbn1cbmZ1bmN0aW9uIGludFBvdyhDdG9yLCB4LCBuLCBwcikge1xuICB2YXIgaXNUcnVuY2F0ZWQsIHIgPSBuZXcgQ3RvcigxKSwgayA9IE1hdGguY2VpbChwciAvIExPR19CQVNFICsgNCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGZvciAoOyA7ICkge1xuICAgIGlmIChuICUgMikge1xuICAgICAgciA9IHIudGltZXMoeCk7XG4gICAgICBpZiAodHJ1bmNhdGUoci5kLCBrKSlcbiAgICAgICAgaXNUcnVuY2F0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBuID0gbWF0aGZsb29yKG4gLyAyKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgbiA9IHIuZC5sZW5ndGggLSAxO1xuICAgICAgaWYgKGlzVHJ1bmNhdGVkICYmIHIuZFtuXSA9PT0gMClcbiAgICAgICAgKytyLmRbbl07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgeCA9IHgudGltZXMoeCk7XG4gICAgdHJ1bmNhdGUoeC5kLCBrKTtcbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiByO1xufVxuZnVuY3Rpb24gaXNPZGQobikge1xuICByZXR1cm4gbi5kW24uZC5sZW5ndGggLSAxXSAmIDE7XG59XG5mdW5jdGlvbiBtYXhPck1pbihDdG9yLCBhcmdzLCBsdGd0KSB7XG4gIHZhciB5LCB4ID0gbmV3IEN0b3IoYXJnc1swXSksIGkgPSAwO1xuICBmb3IgKDsgKytpIDwgYXJncy5sZW5ndGg7ICkge1xuICAgIHkgPSBuZXcgQ3RvcihhcmdzW2ldKTtcbiAgICBpZiAoIXkucykge1xuICAgICAgeCA9IHk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKHhbbHRndF0oeSkpIHtcbiAgICAgIHggPSB5O1xuICAgIH1cbiAgfVxuICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIG5hdHVyYWxFeHBvbmVudGlhbCh4LCBzZCkge1xuICB2YXIgZGVub21pbmF0b3IsIGd1YXJkLCBqLCBwb3cyLCBzdW0yLCB0LCB3cHIsIHJlcCA9IDAsIGkgPSAwLCBrID0gMCwgQ3RvciA9IHguY29uc3RydWN0b3IsIHJtID0gQ3Rvci5yb3VuZGluZywgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgaWYgKCF4LmQgfHwgIXguZFswXSB8fCB4LmUgPiAxNykge1xuICAgIHJldHVybiBuZXcgQ3Rvcih4LmQgPyAheC5kWzBdID8gMSA6IHgucyA8IDAgPyAwIDogMSAvIDAgOiB4LnMgPyB4LnMgPCAwID8gMCA6IHggOiAwIC8gMCk7XG4gIH1cbiAgaWYgKHNkID09IG51bGwpIHtcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xuICAgIHdwciA9IHByO1xuICB9IGVsc2Uge1xuICAgIHdwciA9IHNkO1xuICB9XG4gIHQgPSBuZXcgQ3RvcigwLjAzMTI1KTtcbiAgd2hpbGUgKHguZSA+IC0yKSB7XG4gICAgeCA9IHgudGltZXModCk7XG4gICAgayArPSA1O1xuICB9XG4gIGd1YXJkID0gTWF0aC5sb2cobWF0aHBvdygyLCBrKSkgLyBNYXRoLkxOMTAgKiAyICsgNSB8IDA7XG4gIHdwciArPSBndWFyZDtcbiAgZGVub21pbmF0b3IgPSBwb3cyID0gc3VtMiA9IG5ldyBDdG9yKDEpO1xuICBDdG9yLnByZWNpc2lvbiA9IHdwcjtcbiAgZm9yICg7IDsgKSB7XG4gICAgcG93MiA9IGZpbmFsaXNlKHBvdzIudGltZXMoeCksIHdwciwgMSk7XG4gICAgZGVub21pbmF0b3IgPSBkZW5vbWluYXRvci50aW1lcygrK2kpO1xuICAgIHQgPSBzdW0yLnBsdXMoZGl2aWRlKHBvdzIsIGRlbm9taW5hdG9yLCB3cHIsIDEpKTtcbiAgICBpZiAoZGlnaXRzVG9TdHJpbmcodC5kKS5zbGljZSgwLCB3cHIpID09PSBkaWdpdHNUb1N0cmluZyhzdW0yLmQpLnNsaWNlKDAsIHdwcikpIHtcbiAgICAgIGogPSBrO1xuICAgICAgd2hpbGUgKGotLSlcbiAgICAgICAgc3VtMiA9IGZpbmFsaXNlKHN1bTIudGltZXMoc3VtMiksIHdwciwgMSk7XG4gICAgICBpZiAoc2QgPT0gbnVsbCkge1xuICAgICAgICBpZiAocmVwIDwgMyAmJiBjaGVja1JvdW5kaW5nRGlnaXRzKHN1bTIuZCwgd3ByIC0gZ3VhcmQsIHJtLCByZXApKSB7XG4gICAgICAgICAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgKz0gMTA7XG4gICAgICAgICAgZGVub21pbmF0b3IgPSBwb3cyID0gdCA9IG5ldyBDdG9yKDEpO1xuICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgIHJlcCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmaW5hbGlzZShzdW0yLCBDdG9yLnByZWNpc2lvbiA9IHByLCBybSwgZXh0ZXJuYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgICAgICAgcmV0dXJuIHN1bTI7XG4gICAgICB9XG4gICAgfVxuICAgIHN1bTIgPSB0O1xuICB9XG59XG5mdW5jdGlvbiBuYXR1cmFsTG9nYXJpdGhtKHksIHNkKSB7XG4gIHZhciBjLCBjMCwgZGVub21pbmF0b3IsIGUsIG51bWVyYXRvciwgcmVwLCBzdW0yLCB0LCB3cHIsIHgxLCB4MiwgbiA9IDEsIGd1YXJkID0gMTAsIHggPSB5LCB4ZCA9IHguZCwgQ3RvciA9IHguY29uc3RydWN0b3IsIHJtID0gQ3Rvci5yb3VuZGluZywgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgaWYgKHgucyA8IDAgfHwgIXhkIHx8ICF4ZFswXSB8fCAheC5lICYmIHhkWzBdID09IDEgJiYgeGQubGVuZ3RoID09IDEpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeGQgJiYgIXhkWzBdID8gLTEgLyAwIDogeC5zICE9IDEgPyBOYU4gOiB4ZCA/IDAgOiB4KTtcbiAgfVxuICBpZiAoc2QgPT0gbnVsbCkge1xuICAgIGV4dGVybmFsID0gZmFsc2U7XG4gICAgd3ByID0gcHI7XG4gIH0gZWxzZSB7XG4gICAgd3ByID0gc2Q7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgKz0gZ3VhcmQ7XG4gIGMgPSBkaWdpdHNUb1N0cmluZyh4ZCk7XG4gIGMwID0gYy5jaGFyQXQoMCk7XG4gIGlmIChNYXRoLmFicyhlID0geC5lKSA8IDE1ZTE0KSB7XG4gICAgd2hpbGUgKGMwIDwgNyAmJiBjMCAhPSAxIHx8IGMwID09IDEgJiYgYy5jaGFyQXQoMSkgPiAzKSB7XG4gICAgICB4ID0geC50aW1lcyh5KTtcbiAgICAgIGMgPSBkaWdpdHNUb1N0cmluZyh4LmQpO1xuICAgICAgYzAgPSBjLmNoYXJBdCgwKTtcbiAgICAgIG4rKztcbiAgICB9XG4gICAgZSA9IHguZTtcbiAgICBpZiAoYzAgPiAxKSB7XG4gICAgICB4ID0gbmV3IEN0b3IoXCIwLlwiICsgYyk7XG4gICAgICBlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBuZXcgQ3RvcihjMCArIFwiLlwiICsgYy5zbGljZSgxKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHQgPSBnZXRMbjEwKEN0b3IsIHdwciArIDIsIHByKS50aW1lcyhlICsgXCJcIik7XG4gICAgeCA9IG5hdHVyYWxMb2dhcml0aG0obmV3IEN0b3IoYzAgKyBcIi5cIiArIGMuc2xpY2UoMSkpLCB3cHIgLSBndWFyZCkucGx1cyh0KTtcbiAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICAgIHJldHVybiBzZCA9PSBudWxsID8gZmluYWxpc2UoeCwgcHIsIHJtLCBleHRlcm5hbCA9IHRydWUpIDogeDtcbiAgfVxuICB4MSA9IHg7XG4gIHN1bTIgPSBudW1lcmF0b3IgPSB4ID0gZGl2aWRlKHgubWludXMoMSksIHgucGx1cygxKSwgd3ByLCAxKTtcbiAgeDIgPSBmaW5hbGlzZSh4LnRpbWVzKHgpLCB3cHIsIDEpO1xuICBkZW5vbWluYXRvciA9IDM7XG4gIGZvciAoOyA7ICkge1xuICAgIG51bWVyYXRvciA9IGZpbmFsaXNlKG51bWVyYXRvci50aW1lcyh4MiksIHdwciwgMSk7XG4gICAgdCA9IHN1bTIucGx1cyhkaXZpZGUobnVtZXJhdG9yLCBuZXcgQ3RvcihkZW5vbWluYXRvciksIHdwciwgMSkpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHdwcikgPT09IGRpZ2l0c1RvU3RyaW5nKHN1bTIuZCkuc2xpY2UoMCwgd3ByKSkge1xuICAgICAgc3VtMiA9IHN1bTIudGltZXMoMik7XG4gICAgICBpZiAoZSAhPT0gMClcbiAgICAgICAgc3VtMiA9IHN1bTIucGx1cyhnZXRMbjEwKEN0b3IsIHdwciArIDIsIHByKS50aW1lcyhlICsgXCJcIikpO1xuICAgICAgc3VtMiA9IGRpdmlkZShzdW0yLCBuZXcgQ3RvcihuKSwgd3ByLCAxKTtcbiAgICAgIGlmIChzZCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGVja1JvdW5kaW5nRGlnaXRzKHN1bTIuZCwgd3ByIC0gZ3VhcmQsIHJtLCByZXApKSB7XG4gICAgICAgICAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgKz0gZ3VhcmQ7XG4gICAgICAgICAgdCA9IG51bWVyYXRvciA9IHggPSBkaXZpZGUoeDEubWludXMoMSksIHgxLnBsdXMoMSksIHdwciwgMSk7XG4gICAgICAgICAgeDIgPSBmaW5hbGlzZSh4LnRpbWVzKHgpLCB3cHIsIDEpO1xuICAgICAgICAgIGRlbm9taW5hdG9yID0gcmVwID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmluYWxpc2Uoc3VtMiwgQ3Rvci5wcmVjaXNpb24gPSBwciwgcm0sIGV4dGVybmFsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgICAgIHJldHVybiBzdW0yO1xuICAgICAgfVxuICAgIH1cbiAgICBzdW0yID0gdDtcbiAgICBkZW5vbWluYXRvciArPSAyO1xuICB9XG59XG5mdW5jdGlvbiBub25GaW5pdGVUb1N0cmluZyh4KSB7XG4gIHJldHVybiBTdHJpbmcoeC5zICogeC5zIC8gMCk7XG59XG5mdW5jdGlvbiBwYXJzZURlY2ltYWwoeCwgc3RyKSB7XG4gIHZhciBlLCBpLCBsZW47XG4gIGlmICgoZSA9IHN0ci5pbmRleE9mKFwiLlwiKSkgPiAtMSlcbiAgICBzdHIgPSBzdHIucmVwbGFjZShcIi5cIiwgXCJcIik7XG4gIGlmICgoaSA9IHN0ci5zZWFyY2goL2UvaSkpID4gMCkge1xuICAgIGlmIChlIDwgMClcbiAgICAgIGUgPSBpO1xuICAgIGUgKz0gK3N0ci5zbGljZShpICsgMSk7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBpKTtcbiAgfSBlbHNlIGlmIChlIDwgMCkge1xuICAgIGUgPSBzdHIubGVuZ3RoO1xuICB9XG4gIGZvciAoaSA9IDA7IHN0ci5jaGFyQ29kZUF0KGkpID09PSA0ODsgaSsrKVxuICAgIDtcbiAgZm9yIChsZW4gPSBzdHIubGVuZ3RoOyBzdHIuY2hhckNvZGVBdChsZW4gLSAxKSA9PT0gNDg7IC0tbGVuKVxuICAgIDtcbiAgc3RyID0gc3RyLnNsaWNlKGksIGxlbik7XG4gIGlmIChzdHIpIHtcbiAgICBsZW4gLT0gaTtcbiAgICB4LmUgPSBlID0gZSAtIGkgLSAxO1xuICAgIHguZCA9IFtdO1xuICAgIGkgPSAoZSArIDEpICUgTE9HX0JBU0U7XG4gICAgaWYgKGUgPCAwKVxuICAgICAgaSArPSBMT0dfQkFTRTtcbiAgICBpZiAoaSA8IGxlbikge1xuICAgICAgaWYgKGkpXG4gICAgICAgIHguZC5wdXNoKCtzdHIuc2xpY2UoMCwgaSkpO1xuICAgICAgZm9yIChsZW4gLT0gTE9HX0JBU0U7IGkgPCBsZW47IClcbiAgICAgICAgeC5kLnB1c2goK3N0ci5zbGljZShpLCBpICs9IExPR19CQVNFKSk7XG4gICAgICBzdHIgPSBzdHIuc2xpY2UoaSk7XG4gICAgICBpID0gTE9HX0JBU0UgLSBzdHIubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBpIC09IGxlbjtcbiAgICB9XG4gICAgZm9yICg7IGktLTsgKVxuICAgICAgc3RyICs9IFwiMFwiO1xuICAgIHguZC5wdXNoKCtzdHIpO1xuICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgaWYgKHguZSA+IHguY29uc3RydWN0b3IubWF4RSkge1xuICAgICAgICB4LmQgPSBudWxsO1xuICAgICAgICB4LmUgPSBOYU47XG4gICAgICB9IGVsc2UgaWYgKHguZSA8IHguY29uc3RydWN0b3IubWluRSkge1xuICAgICAgICB4LmUgPSAwO1xuICAgICAgICB4LmQgPSBbMF07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHguZSA9IDA7XG4gICAgeC5kID0gWzBdO1xuICB9XG4gIHJldHVybiB4O1xufVxuZnVuY3Rpb24gcGFyc2VPdGhlcih4LCBzdHIpIHtcbiAgdmFyIGJhc2UsIEN0b3IsIGRpdmlzb3IsIGksIGlzRmxvYXQsIGxlbiwgcCwgeGQsIHhlO1xuICBpZiAoc3RyLmluZGV4T2YoXCJfXCIpID4gLTEpIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFxcZClfKD89XFxkKS9nLCBcIiQxXCIpO1xuICAgIGlmIChpc0RlY2ltYWwudGVzdChzdHIpKVxuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCh4LCBzdHIpO1xuICB9IGVsc2UgaWYgKHN0ciA9PT0gXCJJbmZpbml0eVwiIHx8IHN0ciA9PT0gXCJOYU5cIikge1xuICAgIGlmICghK3N0cilcbiAgICAgIHgucyA9IE5hTjtcbiAgICB4LmUgPSBOYU47XG4gICAgeC5kID0gbnVsbDtcbiAgICByZXR1cm4geDtcbiAgfVxuICBpZiAoaXNIZXgudGVzdChzdHIpKSB7XG4gICAgYmFzZSA9IDE2O1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKGlzQmluYXJ5LnRlc3Qoc3RyKSkge1xuICAgIGJhc2UgPSAyO1xuICB9IGVsc2UgaWYgKGlzT2N0YWwudGVzdChzdHIpKSB7XG4gICAgYmFzZSA9IDg7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgc3RyKTtcbiAgfVxuICBpID0gc3RyLnNlYXJjaCgvcC9pKTtcbiAgaWYgKGkgPiAwKSB7XG4gICAgcCA9ICtzdHIuc2xpY2UoaSArIDEpO1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMiwgaSk7XG4gIH0gZWxzZSB7XG4gICAgc3RyID0gc3RyLnNsaWNlKDIpO1xuICB9XG4gIGkgPSBzdHIuaW5kZXhPZihcIi5cIik7XG4gIGlzRmxvYXQgPSBpID49IDA7XG4gIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNGbG9hdCkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSBsZW4gLSBpO1xuICAgIGRpdmlzb3IgPSBpbnRQb3coQ3RvciwgbmV3IEN0b3IoYmFzZSksIGksIGkgKiAyKTtcbiAgfVxuICB4ZCA9IGNvbnZlcnRCYXNlKHN0ciwgYmFzZSwgQkFTRSk7XG4gIHhlID0geGQubGVuZ3RoIC0gMTtcbiAgZm9yIChpID0geGU7IHhkW2ldID09PSAwOyAtLWkpXG4gICAgeGQucG9wKCk7XG4gIGlmIChpIDwgMClcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5zICogMCk7XG4gIHguZSA9IGdldEJhc2UxMEV4cG9uZW50KHhkLCB4ZSk7XG4gIHguZCA9IHhkO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBpZiAoaXNGbG9hdClcbiAgICB4ID0gZGl2aWRlKHgsIGRpdmlzb3IsIGxlbiAqIDQpO1xuICBpZiAocClcbiAgICB4ID0geC50aW1lcyhNYXRoLmFicyhwKSA8IDU0ID8gbWF0aHBvdygyLCBwKSA6IERlY2ltYWwucG93KDIsIHApKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIHNpbmUoQ3RvciwgeCkge1xuICB2YXIgaywgbGVuID0geC5kLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDMpIHtcbiAgICByZXR1cm4geC5pc1plcm8oKSA/IHggOiB0YXlsb3JTZXJpZXMoQ3RvciwgMiwgeCwgeCk7XG4gIH1cbiAgayA9IDEuNCAqIE1hdGguc3FydChsZW4pO1xuICBrID0gayA+IDE2ID8gMTYgOiBrIHwgMDtcbiAgeCA9IHgudGltZXMoMSAvIHRpbnlQb3coNSwgaykpO1xuICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgpO1xuICB2YXIgc2luMl94LCBkNSA9IG5ldyBDdG9yKDUpLCBkMTYgPSBuZXcgQ3RvcigxNiksIGQyMCA9IG5ldyBDdG9yKDIwKTtcbiAgZm9yICg7IGstLTsgKSB7XG4gICAgc2luMl94ID0geC50aW1lcyh4KTtcbiAgICB4ID0geC50aW1lcyhkNS5wbHVzKHNpbjJfeC50aW1lcyhkMTYudGltZXMoc2luMl94KS5taW51cyhkMjApKSkpO1xuICB9XG4gIHJldHVybiB4O1xufVxuZnVuY3Rpb24gdGF5bG9yU2VyaWVzKEN0b3IsIG4sIHgsIHksIGlzSHlwZXJib2xpYykge1xuICB2YXIgaiwgdCwgdSwgeDIsIGkgPSAxLCBwciA9IEN0b3IucHJlY2lzaW9uLCBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICB4MiA9IHgudGltZXMoeCk7XG4gIHUgPSBuZXcgQ3Rvcih5KTtcbiAgZm9yICg7IDsgKSB7XG4gICAgdCA9IGRpdmlkZSh1LnRpbWVzKHgyKSwgbmV3IEN0b3IobisrICogbisrKSwgcHIsIDEpO1xuICAgIHUgPSBpc0h5cGVyYm9saWMgPyB5LnBsdXModCkgOiB5Lm1pbnVzKHQpO1xuICAgIHkgPSBkaXZpZGUodC50aW1lcyh4MiksIG5ldyBDdG9yKG4rKyAqIG4rKyksIHByLCAxKTtcbiAgICB0ID0gdS5wbHVzKHkpO1xuICAgIGlmICh0LmRba10gIT09IHZvaWQgMCkge1xuICAgICAgZm9yIChqID0gazsgdC5kW2pdID09PSB1LmRbal0gJiYgai0tOyApXG4gICAgICAgIDtcbiAgICAgIGlmIChqID09IC0xKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaiA9IHU7XG4gICAgdSA9IHk7XG4gICAgeSA9IHQ7XG4gICAgdCA9IGo7XG4gICAgaSsrO1xuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgdC5kLmxlbmd0aCA9IGsgKyAxO1xuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIHRpbnlQb3coYiwgZSkge1xuICB2YXIgbiA9IGI7XG4gIHdoaWxlICgtLWUpXG4gICAgbiAqPSBiO1xuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIHRvTGVzc1RoYW5IYWxmUGkoQ3RvciwgeCkge1xuICB2YXIgdCwgaXNOZWcgPSB4LnMgPCAwLCBwaSA9IGdldFBpKEN0b3IsIEN0b3IucHJlY2lzaW9uLCAxKSwgaGFsZlBpID0gcGkudGltZXMoMC41KTtcbiAgeCA9IHguYWJzKCk7XG4gIGlmICh4Lmx0ZShoYWxmUGkpKSB7XG4gICAgcXVhZHJhbnQgPSBpc05lZyA/IDQgOiAxO1xuICAgIHJldHVybiB4O1xuICB9XG4gIHQgPSB4LmRpdlRvSW50KHBpKTtcbiAgaWYgKHQuaXNaZXJvKCkpIHtcbiAgICBxdWFkcmFudCA9IGlzTmVnID8gMyA6IDI7XG4gIH0gZWxzZSB7XG4gICAgeCA9IHgubWludXModC50aW1lcyhwaSkpO1xuICAgIGlmICh4Lmx0ZShoYWxmUGkpKSB7XG4gICAgICBxdWFkcmFudCA9IGlzT2RkKHQpID8gaXNOZWcgPyAyIDogMyA6IGlzTmVnID8gNCA6IDE7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgcXVhZHJhbnQgPSBpc09kZCh0KSA/IGlzTmVnID8gMSA6IDQgOiBpc05lZyA/IDMgOiAyO1xuICB9XG4gIHJldHVybiB4Lm1pbnVzKHBpKS5hYnMoKTtcbn1cbmZ1bmN0aW9uIHRvU3RyaW5nQmluYXJ5KHgsIGJhc2VPdXQsIHNkLCBybSkge1xuICB2YXIgYmFzZSwgZSwgaSwgaywgbGVuLCByb3VuZFVwLCBzdHIsIHhkLCB5LCBDdG9yID0geC5jb25zdHJ1Y3RvciwgaXNFeHAgPSBzZCAhPT0gdm9pZCAwO1xuICBpZiAoaXNFeHApIHtcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgfSBlbHNlIHtcbiAgICBzZCA9IEN0b3IucHJlY2lzaW9uO1xuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgfVxuICBpZiAoIXguaXNGaW5pdGUoKSkge1xuICAgIHN0ciA9IG5vbkZpbml0ZVRvU3RyaW5nKHgpO1xuICB9IGVsc2Uge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgpO1xuICAgIGkgPSBzdHIuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGlzRXhwKSB7XG4gICAgICBiYXNlID0gMjtcbiAgICAgIGlmIChiYXNlT3V0ID09IDE2KSB7XG4gICAgICAgIHNkID0gc2QgKiA0IC0gMztcbiAgICAgIH0gZWxzZSBpZiAoYmFzZU91dCA9PSA4KSB7XG4gICAgICAgIHNkID0gc2QgKiAzIC0gMjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9IGJhc2VPdXQ7XG4gICAgfVxuICAgIGlmIChpID49IDApIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICAgIHkgPSBuZXcgQ3RvcigxKTtcbiAgICAgIHkuZSA9IHN0ci5sZW5ndGggLSBpO1xuICAgICAgeS5kID0gY29udmVydEJhc2UoZmluaXRlVG9TdHJpbmcoeSksIDEwLCBiYXNlKTtcbiAgICAgIHkuZSA9IHkuZC5sZW5ndGg7XG4gICAgfVxuICAgIHhkID0gY29udmVydEJhc2Uoc3RyLCAxMCwgYmFzZSk7XG4gICAgZSA9IGxlbiA9IHhkLmxlbmd0aDtcbiAgICBmb3IgKDsgeGRbLS1sZW5dID09IDA7IClcbiAgICAgIHhkLnBvcCgpO1xuICAgIGlmICgheGRbMF0pIHtcbiAgICAgIHN0ciA9IGlzRXhwID8gXCIwcCswXCIgOiBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGUtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBuZXcgQ3Rvcih4KTtcbiAgICAgICAgeC5kID0geGQ7XG4gICAgICAgIHguZSA9IGU7XG4gICAgICAgIHggPSBkaXZpZGUoeCwgeSwgc2QsIHJtLCAwLCBiYXNlKTtcbiAgICAgICAgeGQgPSB4LmQ7XG4gICAgICAgIGUgPSB4LmU7XG4gICAgICAgIHJvdW5kVXAgPSBpbmV4YWN0O1xuICAgICAgfVxuICAgICAgaSA9IHhkW3NkXTtcbiAgICAgIGsgPSBiYXNlIC8gMjtcbiAgICAgIHJvdW5kVXAgPSByb3VuZFVwIHx8IHhkW3NkICsgMV0gIT09IHZvaWQgMDtcbiAgICAgIHJvdW5kVXAgPSBybSA8IDQgPyAoaSAhPT0gdm9pZCAwIHx8IHJvdW5kVXApICYmIChybSA9PT0gMCB8fCBybSA9PT0gKHgucyA8IDAgPyAzIDogMikpIDogaSA+IGsgfHwgaSA9PT0gayAmJiAocm0gPT09IDQgfHwgcm91bmRVcCB8fCBybSA9PT0gNiAmJiB4ZFtzZCAtIDFdICYgMSB8fCBybSA9PT0gKHgucyA8IDAgPyA4IDogNykpO1xuICAgICAgeGQubGVuZ3RoID0gc2Q7XG4gICAgICBpZiAocm91bmRVcCkge1xuICAgICAgICBmb3IgKDsgKyt4ZFstLXNkXSA+IGJhc2UgLSAxOyApIHtcbiAgICAgICAgICB4ZFtzZF0gPSAwO1xuICAgICAgICAgIGlmICghc2QpIHtcbiAgICAgICAgICAgICsrZTtcbiAgICAgICAgICAgIHhkLnVuc2hpZnQoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgIXhkW2xlbiAtIDFdOyAtLWxlbilcbiAgICAgICAgO1xuICAgICAgZm9yIChpID0gMCwgc3RyID0gXCJcIjsgaSA8IGxlbjsgaSsrKVxuICAgICAgICBzdHIgKz0gTlVNRVJBTFMuY2hhckF0KHhkW2ldKTtcbiAgICAgIGlmIChpc0V4cCkge1xuICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgIGlmIChiYXNlT3V0ID09IDE2IHx8IGJhc2VPdXQgPT0gOCkge1xuICAgICAgICAgICAgaSA9IGJhc2VPdXQgPT0gMTYgPyA0IDogMztcbiAgICAgICAgICAgIGZvciAoLS1sZW47IGxlbiAlIGk7IGxlbisrKVxuICAgICAgICAgICAgICBzdHIgKz0gXCIwXCI7XG4gICAgICAgICAgICB4ZCA9IGNvbnZlcnRCYXNlKHN0ciwgYmFzZSwgYmFzZU91dCk7XG4gICAgICAgICAgICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgIXhkW2xlbiAtIDFdOyAtLWxlbilcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgZm9yIChpID0gMSwgc3RyID0gXCIxLlwiOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgIHN0ciArPSBOVU1FUkFMUy5jaGFyQXQoeGRbaV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuY2hhckF0KDApICsgXCIuXCIgKyBzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0ciA9IHN0ciArIChlIDwgMCA/IFwicFwiIDogXCJwK1wiKSArIGU7XG4gICAgICB9IGVsc2UgaWYgKGUgPCAwKSB7XG4gICAgICAgIGZvciAoOyArK2U7IClcbiAgICAgICAgICBzdHIgPSBcIjBcIiArIHN0cjtcbiAgICAgICAgc3RyID0gXCIwLlwiICsgc3RyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCsrZSA+IGxlbilcbiAgICAgICAgICBmb3IgKGUgLT0gbGVuOyBlLS07IClcbiAgICAgICAgICAgIHN0ciArPSBcIjBcIjtcbiAgICAgICAgZWxzZSBpZiAoZSA8IGxlbilcbiAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgZSkgKyBcIi5cIiArIHN0ci5zbGljZShlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RyID0gKGJhc2VPdXQgPT0gMTYgPyBcIjB4XCIgOiBiYXNlT3V0ID09IDIgPyBcIjBiXCIgOiBiYXNlT3V0ID09IDggPyBcIjBvXCIgOiBcIlwiKSArIHN0cjtcbiAgfVxuICByZXR1cm4geC5zIDwgMCA/IFwiLVwiICsgc3RyIDogc3RyO1xufVxuZnVuY3Rpb24gdHJ1bmNhdGUoYXJyLCBsZW4pIHtcbiAgaWYgKGFyci5sZW5ndGggPiBsZW4pIHtcbiAgICBhcnIubGVuZ3RoID0gbGVuO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBhYnMoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYWJzKCk7XG59XG5mdW5jdGlvbiBhY29zKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFjb3MoKTtcbn1cbmZ1bmN0aW9uIGFjb3NoKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFjb3NoKCk7XG59XG5mdW5jdGlvbiBhZGQoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkucGx1cyh5KTtcbn1cbmZ1bmN0aW9uIGFzaW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXNpbigpO1xufVxuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXNpbmgoKTtcbn1cbmZ1bmN0aW9uIGF0YW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXRhbigpO1xufVxuZnVuY3Rpb24gYXRhbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXRhbmgoKTtcbn1cbmZ1bmN0aW9uIGF0YW4yKHksIHgpIHtcbiAgeSA9IG5ldyB0aGlzKHkpO1xuICB4ID0gbmV3IHRoaXMoeCk7XG4gIHZhciByLCBwciA9IHRoaXMucHJlY2lzaW9uLCBybSA9IHRoaXMucm91bmRpbmcsIHdwciA9IHByICsgNDtcbiAgaWYgKCF5LnMgfHwgIXgucykge1xuICAgIHIgPSBuZXcgdGhpcyhOYU4pO1xuICB9IGVsc2UgaWYgKCF5LmQgJiYgIXguZCkge1xuICAgIHIgPSBnZXRQaSh0aGlzLCB3cHIsIDEpLnRpbWVzKHgucyA+IDAgPyAwLjI1IDogMC43NSk7XG4gICAgci5zID0geS5zO1xuICB9IGVsc2UgaWYgKCF4LmQgfHwgeS5pc1plcm8oKSkge1xuICAgIHIgPSB4LnMgPCAwID8gZ2V0UGkodGhpcywgcHIsIHJtKSA6IG5ldyB0aGlzKDApO1xuICAgIHIucyA9IHkucztcbiAgfSBlbHNlIGlmICgheS5kIHx8IHguaXNaZXJvKCkpIHtcbiAgICByID0gZ2V0UGkodGhpcywgd3ByLCAxKS50aW1lcygwLjUpO1xuICAgIHIucyA9IHkucztcbiAgfSBlbHNlIGlmICh4LnMgPCAwKSB7XG4gICAgdGhpcy5wcmVjaXNpb24gPSB3cHI7XG4gICAgdGhpcy5yb3VuZGluZyA9IDE7XG4gICAgciA9IHRoaXMuYXRhbihkaXZpZGUoeSwgeCwgd3ByLCAxKSk7XG4gICAgeCA9IGdldFBpKHRoaXMsIHdwciwgMSk7XG4gICAgdGhpcy5wcmVjaXNpb24gPSBwcjtcbiAgICB0aGlzLnJvdW5kaW5nID0gcm07XG4gICAgciA9IHkucyA8IDAgPyByLm1pbnVzKHgpIDogci5wbHVzKHgpO1xuICB9IGVsc2Uge1xuICAgIHIgPSB0aGlzLmF0YW4oZGl2aWRlKHksIHgsIHdwciwgMSkpO1xuICB9XG4gIHJldHVybiByO1xufVxuZnVuY3Rpb24gY2JydCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5jYnJ0KCk7XG59XG5mdW5jdGlvbiBjZWlsKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgMik7XG59XG5mdW5jdGlvbiBjbGFtcCh4LCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5jbGFtcChtaW4yLCBtYXgyKTtcbn1cbmZ1bmN0aW9uIGNvbmZpZyhvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIilcbiAgICB0aHJvdyBFcnJvcihkZWNpbWFsRXJyb3IgKyBcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgdmFyIGksIHAsIHYsIHVzZURlZmF1bHRzID0gb2JqLmRlZmF1bHRzID09PSB0cnVlLCBwcyA9IFtcbiAgICBcInByZWNpc2lvblwiLFxuICAgIDEsXG4gICAgTUFYX0RJR0lUUyxcbiAgICBcInJvdW5kaW5nXCIsXG4gICAgMCxcbiAgICA4LFxuICAgIFwidG9FeHBOZWdcIixcbiAgICAtRVhQX0xJTUlULFxuICAgIDAsXG4gICAgXCJ0b0V4cFBvc1wiLFxuICAgIDAsXG4gICAgRVhQX0xJTUlULFxuICAgIFwibWF4RVwiLFxuICAgIDAsXG4gICAgRVhQX0xJTUlULFxuICAgIFwibWluRVwiLFxuICAgIC1FWFBfTElNSVQsXG4gICAgMCxcbiAgICBcIm1vZHVsb1wiLFxuICAgIDAsXG4gICAgOVxuICBdO1xuICBmb3IgKGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBpZiAocCA9IHBzW2ldLCB1c2VEZWZhdWx0cylcbiAgICAgIHRoaXNbcF0gPSBERUZBVUxUU1twXTtcbiAgICBpZiAoKHYgPSBvYmpbcF0pICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChtYXRoZmxvb3IodikgPT09IHYgJiYgdiA+PSBwc1tpICsgMV0gJiYgdiA8PSBwc1tpICsgMl0pXG4gICAgICAgIHRoaXNbcF0gPSB2O1xuICAgICAgZWxzZVxuICAgICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBwICsgXCI6IFwiICsgdik7XG4gICAgfVxuICB9XG4gIGlmIChwID0gXCJjcnlwdG9cIiwgdXNlRGVmYXVsdHMpXG4gICAgdGhpc1twXSA9IERFRkFVTFRTW3BdO1xuICBpZiAoKHYgPSBvYmpbcF0pICE9PSB2b2lkIDApIHtcbiAgICBpZiAodiA9PT0gdHJ1ZSB8fCB2ID09PSBmYWxzZSB8fCB2ID09PSAwIHx8IHYgPT09IDEpIHtcbiAgICAgIGlmICh2KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9IFwidW5kZWZpbmVkXCIgJiYgY3J5cHRvICYmIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzIHx8IGNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgICAgICB0aGlzW3BdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihjcnlwdG9VbmF2YWlsYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbcF0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgcCArIFwiOiBcIiArIHYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGNvcyh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5jb3MoKTtcbn1cbmZ1bmN0aW9uIGNvc2goeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuY29zaCgpO1xufVxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIHZhciBpLCBwLCBwcztcbiAgZnVuY3Rpb24gRGVjaW1hbDIodikge1xuICAgIHZhciBlLCBpMiwgdCwgeCA9IHRoaXM7XG4gICAgaWYgKCEoeCBpbnN0YW5jZW9mIERlY2ltYWwyKSlcbiAgICAgIHJldHVybiBuZXcgRGVjaW1hbDIodik7XG4gICAgeC5jb25zdHJ1Y3RvciA9IERlY2ltYWwyO1xuICAgIGlmIChpc0RlY2ltYWxJbnN0YW5jZSh2KSkge1xuICAgICAgeC5zID0gdi5zO1xuICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgIGlmICghdi5kIHx8IHYuZSA+IERlY2ltYWwyLm1heEUpIHtcbiAgICAgICAgICB4LmUgPSBOYU47XG4gICAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh2LmUgPCBEZWNpbWFsMi5taW5FKSB7XG4gICAgICAgICAgeC5lID0gMDtcbiAgICAgICAgICB4LmQgPSBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeC5lID0gdi5lO1xuICAgICAgICAgIHguZCA9IHYuZC5zbGljZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4LmUgPSB2LmU7XG4gICAgICAgIHguZCA9IHYuZCA/IHYuZC5zbGljZSgpIDogdi5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0ID0gdHlwZW9mIHY7XG4gICAgaWYgKHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmICh2ID09PSAwKSB7XG4gICAgICAgIHgucyA9IDEgLyB2IDwgMCA/IC0xIDogMTtcbiAgICAgICAgeC5lID0gMDtcbiAgICAgICAgeC5kID0gWzBdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodiA8IDApIHtcbiAgICAgICAgdiA9IC12O1xuICAgICAgICB4LnMgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHgucyA9IDE7XG4gICAgICB9XG4gICAgICBpZiAodiA9PT0gfn52ICYmIHYgPCAxZTcpIHtcbiAgICAgICAgZm9yIChlID0gMCwgaTIgPSB2OyBpMiA+PSAxMDsgaTIgLz0gMTApXG4gICAgICAgICAgZSsrO1xuICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICBpZiAoZSA+IERlY2ltYWwyLm1heEUpIHtcbiAgICAgICAgICAgIHguZSA9IE5hTjtcbiAgICAgICAgICAgIHguZCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChlIDwgRGVjaW1hbDIubWluRSkge1xuICAgICAgICAgICAgeC5lID0gMDtcbiAgICAgICAgICAgIHguZCA9IFswXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeC5lID0gZTtcbiAgICAgICAgICAgIHguZCA9IFt2XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeC5lID0gZTtcbiAgICAgICAgICB4LmQgPSBbdl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh2ICogMCAhPT0gMCkge1xuICAgICAgICBpZiAoIXYpXG4gICAgICAgICAgeC5zID0gTmFOO1xuICAgICAgICB4LmUgPSBOYU47XG4gICAgICAgIHguZCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwoeCwgdi50b1N0cmluZygpKTtcbiAgICB9IGVsc2UgaWYgKHQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHYpO1xuICAgIH1cbiAgICBpZiAoKGkyID0gdi5jaGFyQ29kZUF0KDApKSA9PT0gNDUpIHtcbiAgICAgIHYgPSB2LnNsaWNlKDEpO1xuICAgICAgeC5zID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpMiA9PT0gNDMpXG4gICAgICAgIHYgPSB2LnNsaWNlKDEpO1xuICAgICAgeC5zID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGVjaW1hbC50ZXN0KHYpID8gcGFyc2VEZWNpbWFsKHgsIHYpIDogcGFyc2VPdGhlcih4LCB2KTtcbiAgfVxuICBEZWNpbWFsMi5wcm90b3R5cGUgPSBQO1xuICBEZWNpbWFsMi5ST1VORF9VUCA9IDA7XG4gIERlY2ltYWwyLlJPVU5EX0RPV04gPSAxO1xuICBEZWNpbWFsMi5ST1VORF9DRUlMID0gMjtcbiAgRGVjaW1hbDIuUk9VTkRfRkxPT1IgPSAzO1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX1VQID0gNDtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9ET1dOID0gNTtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9FVkVOID0gNjtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9DRUlMID0gNztcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9GTE9PUiA9IDg7XG4gIERlY2ltYWwyLkVVQ0xJRCA9IDk7XG4gIERlY2ltYWwyLmNvbmZpZyA9IERlY2ltYWwyLnNldCA9IGNvbmZpZztcbiAgRGVjaW1hbDIuY2xvbmUgPSBjbG9uZTtcbiAgRGVjaW1hbDIuaXNEZWNpbWFsID0gaXNEZWNpbWFsSW5zdGFuY2U7XG4gIERlY2ltYWwyLmFicyA9IGFicztcbiAgRGVjaW1hbDIuYWNvcyA9IGFjb3M7XG4gIERlY2ltYWwyLmFjb3NoID0gYWNvc2g7XG4gIERlY2ltYWwyLmFkZCA9IGFkZDtcbiAgRGVjaW1hbDIuYXNpbiA9IGFzaW47XG4gIERlY2ltYWwyLmFzaW5oID0gYXNpbmg7XG4gIERlY2ltYWwyLmF0YW4gPSBhdGFuO1xuICBEZWNpbWFsMi5hdGFuaCA9IGF0YW5oO1xuICBEZWNpbWFsMi5hdGFuMiA9IGF0YW4yO1xuICBEZWNpbWFsMi5jYnJ0ID0gY2JydDtcbiAgRGVjaW1hbDIuY2VpbCA9IGNlaWw7XG4gIERlY2ltYWwyLmNsYW1wID0gY2xhbXA7XG4gIERlY2ltYWwyLmNvcyA9IGNvcztcbiAgRGVjaW1hbDIuY29zaCA9IGNvc2g7XG4gIERlY2ltYWwyLmRpdiA9IGRpdjtcbiAgRGVjaW1hbDIuZXhwID0gZXhwO1xuICBEZWNpbWFsMi5mbG9vciA9IGZsb29yO1xuICBEZWNpbWFsMi5oeXBvdCA9IGh5cG90O1xuICBEZWNpbWFsMi5sbiA9IGxuO1xuICBEZWNpbWFsMi5sb2cgPSBsb2c7XG4gIERlY2ltYWwyLmxvZzEwID0gbG9nMTA7XG4gIERlY2ltYWwyLmxvZzIgPSBsb2cyO1xuICBEZWNpbWFsMi5tYXggPSBtYXg7XG4gIERlY2ltYWwyLm1pbiA9IG1pbjtcbiAgRGVjaW1hbDIubW9kID0gbW9kO1xuICBEZWNpbWFsMi5tdWwgPSBtdWw7XG4gIERlY2ltYWwyLnBvdyA9IHBvdztcbiAgRGVjaW1hbDIucmFuZG9tID0gcmFuZG9tO1xuICBEZWNpbWFsMi5yb3VuZCA9IHJvdW5kO1xuICBEZWNpbWFsMi5zaWduID0gc2lnbjtcbiAgRGVjaW1hbDIuc2luID0gc2luO1xuICBEZWNpbWFsMi5zaW5oID0gc2luaDtcbiAgRGVjaW1hbDIuc3FydCA9IHNxcnQ7XG4gIERlY2ltYWwyLnN1YiA9IHN1YjtcbiAgRGVjaW1hbDIuc3VtID0gc3VtO1xuICBEZWNpbWFsMi50YW4gPSB0YW47XG4gIERlY2ltYWwyLnRhbmggPSB0YW5oO1xuICBEZWNpbWFsMi50cnVuYyA9IHRydW5jO1xuICBpZiAob2JqID09PSB2b2lkIDApXG4gICAgb2JqID0ge307XG4gIGlmIChvYmopIHtcbiAgICBpZiAob2JqLmRlZmF1bHRzICE9PSB0cnVlKSB7XG4gICAgICBwcyA9IFtcInByZWNpc2lvblwiLCBcInJvdW5kaW5nXCIsIFwidG9FeHBOZWdcIiwgXCJ0b0V4cFBvc1wiLCBcIm1heEVcIiwgXCJtaW5FXCIsIFwibW9kdWxvXCIsIFwiY3J5cHRvXCJdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHBzLmxlbmd0aDsgKVxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwID0gcHNbaSsrXSkpXG4gICAgICAgICAgb2JqW3BdID0gdGhpc1twXTtcbiAgICB9XG4gIH1cbiAgRGVjaW1hbDIuY29uZmlnKG9iaik7XG4gIHJldHVybiBEZWNpbWFsMjtcbn1cbmZ1bmN0aW9uIGRpdih4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5kaXYoeSk7XG59XG5mdW5jdGlvbiBleHAoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuZXhwKCk7XG59XG5mdW5jdGlvbiBmbG9vcih4KSB7XG4gIHJldHVybiBmaW5hbGlzZSh4ID0gbmV3IHRoaXMoeCksIHguZSArIDEsIDMpO1xufVxuZnVuY3Rpb24gaHlwb3QoKSB7XG4gIHZhciBpLCBuLCB0ID0gbmV3IHRoaXMoMCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyApIHtcbiAgICBuID0gbmV3IHRoaXMoYXJndW1lbnRzW2krK10pO1xuICAgIGlmICghbi5kKSB7XG4gICAgICBpZiAobi5zKSB7XG4gICAgICAgIGV4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKDEgLyAwKTtcbiAgICAgIH1cbiAgICAgIHQgPSBuO1xuICAgIH0gZWxzZSBpZiAodC5kKSB7XG4gICAgICB0ID0gdC5wbHVzKG4udGltZXMobikpO1xuICAgIH1cbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiB0LnNxcnQoKTtcbn1cbmZ1bmN0aW9uIGlzRGVjaW1hbEluc3RhbmNlKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGVjaW1hbCB8fCBvYmogJiYgb2JqLnRvU3RyaW5nVGFnID09PSB0YWcgfHwgZmFsc2U7XG59XG5mdW5jdGlvbiBsbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5sbigpO1xufVxuZnVuY3Rpb24gbG9nKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmxvZyh5KTtcbn1cbmZ1bmN0aW9uIGxvZzIoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG9nKDIpO1xufVxuZnVuY3Rpb24gbG9nMTAoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG9nKDEwKTtcbn1cbmZ1bmN0aW9uIG1heCgpIHtcbiAgcmV0dXJuIG1heE9yTWluKHRoaXMsIGFyZ3VtZW50cywgXCJsdFwiKTtcbn1cbmZ1bmN0aW9uIG1pbigpIHtcbiAgcmV0dXJuIG1heE9yTWluKHRoaXMsIGFyZ3VtZW50cywgXCJndFwiKTtcbn1cbmZ1bmN0aW9uIG1vZCh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5tb2QoeSk7XG59XG5mdW5jdGlvbiBtdWwoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubXVsKHkpO1xufVxuZnVuY3Rpb24gcG93KHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnBvdyh5KTtcbn1cbmZ1bmN0aW9uIHJhbmRvbShzZCkge1xuICB2YXIgZCwgZSwgaywgbiwgaSA9IDAsIHIgPSBuZXcgdGhpcygxKSwgcmQgPSBbXTtcbiAgaWYgKHNkID09PSB2b2lkIDApXG4gICAgc2QgPSB0aGlzLnByZWNpc2lvbjtcbiAgZWxzZVxuICAgIGNoZWNrSW50MzIoc2QsIDEsIE1BWF9ESUdJVFMpO1xuICBrID0gTWF0aC5jZWlsKHNkIC8gTE9HX0JBU0UpO1xuICBpZiAoIXRoaXMuY3J5cHRvKSB7XG4gICAgZm9yICg7IGkgPCBrOyApXG4gICAgICByZFtpKytdID0gTWF0aC5yYW5kb20oKSAqIDFlNyB8IDA7XG4gIH0gZWxzZSBpZiAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIGQgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheShrKSk7XG4gICAgZm9yICg7IGkgPCBrOyApIHtcbiAgICAgIG4gPSBkW2ldO1xuICAgICAgaWYgKG4gPj0gNDI5ZTcpIHtcbiAgICAgICAgZFtpXSA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJkW2krK10gPSBuICUgMWU3O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBkID0gY3J5cHRvLnJhbmRvbUJ5dGVzKGsgKj0gNCk7XG4gICAgZm9yICg7IGkgPCBrOyApIHtcbiAgICAgIG4gPSBkW2ldICsgKGRbaSArIDFdIDw8IDgpICsgKGRbaSArIDJdIDw8IDE2KSArICgoZFtpICsgM10gJiAxMjcpIDw8IDI0KTtcbiAgICAgIGlmIChuID49IDIxNGU3KSB7XG4gICAgICAgIGNyeXB0by5yYW5kb21CeXRlcyg0KS5jb3B5KGQsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmQucHVzaChuICUgMWU3KTtcbiAgICAgICAgaSArPSA0O1xuICAgICAgfVxuICAgIH1cbiAgICBpID0gayAvIDQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoY3J5cHRvVW5hdmFpbGFibGUpO1xuICB9XG4gIGsgPSByZFstLWldO1xuICBzZCAlPSBMT0dfQkFTRTtcbiAgaWYgKGsgJiYgc2QpIHtcbiAgICBuID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBzZCk7XG4gICAgcmRbaV0gPSAoayAvIG4gfCAwKSAqIG47XG4gIH1cbiAgZm9yICg7IHJkW2ldID09PSAwOyBpLS0pXG4gICAgcmQucG9wKCk7XG4gIGlmIChpIDwgMCkge1xuICAgIGUgPSAwO1xuICAgIHJkID0gWzBdO1xuICB9IGVsc2Uge1xuICAgIGUgPSAtMTtcbiAgICBmb3IgKDsgcmRbMF0gPT09IDA7IGUgLT0gTE9HX0JBU0UpXG4gICAgICByZC5zaGlmdCgpO1xuICAgIGZvciAoayA9IDEsIG4gPSByZFswXTsgbiA+PSAxMDsgbiAvPSAxMClcbiAgICAgIGsrKztcbiAgICBpZiAoayA8IExPR19CQVNFKVxuICAgICAgZSAtPSBMT0dfQkFTRSAtIGs7XG4gIH1cbiAgci5lID0gZTtcbiAgci5kID0gcmQ7XG4gIHJldHVybiByO1xufVxuZnVuY3Rpb24gcm91bmQoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCB0aGlzLnJvdW5kaW5nKTtcbn1cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICB4ID0gbmV3IHRoaXMoeCk7XG4gIHJldHVybiB4LmQgPyB4LmRbMF0gPyB4LnMgOiAwICogeC5zIDogeC5zIHx8IE5hTjtcbn1cbmZ1bmN0aW9uIHNpbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5zaW4oKTtcbn1cbmZ1bmN0aW9uIHNpbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuc2luaCgpO1xufVxuZnVuY3Rpb24gc3FydCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5zcXJ0KCk7XG59XG5mdW5jdGlvbiBzdWIoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuc3ViKHkpO1xufVxuZnVuY3Rpb24gc3VtKCkge1xuICB2YXIgaSA9IDAsIGFyZ3MgPSBhcmd1bWVudHMsIHggPSBuZXcgdGhpcyhhcmdzW2ldKTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgZm9yICg7IHgucyAmJiArK2kgPCBhcmdzLmxlbmd0aDsgKVxuICAgIHggPSB4LnBsdXMoYXJnc1tpXSk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHgsIHRoaXMucHJlY2lzaW9uLCB0aGlzLnJvdW5kaW5nKTtcbn1cbmZ1bmN0aW9uIHRhbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS50YW4oKTtcbn1cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkudGFuaCgpO1xufVxuZnVuY3Rpb24gdHJ1bmMoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCAxKTtcbn1cblBbU3ltYm9sLmZvcihcIm5vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tXCIpXSA9IFAudG9TdHJpbmc7XG5QW1N5bWJvbC50b1N0cmluZ1RhZ10gPSBcIkRlY2ltYWxcIjtcbnZhciBEZWNpbWFsID0gUC5jb25zdHJ1Y3RvciA9IGNsb25lKERFRkFVTFRTKTtcbkxOMTAgPSBuZXcgRGVjaW1hbChMTjEwKTtcblBJID0gbmV3IERlY2ltYWwoUEkpO1xudmFyIGRlY2ltYWxfZGVmYXVsdCA9IERlY2ltYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9