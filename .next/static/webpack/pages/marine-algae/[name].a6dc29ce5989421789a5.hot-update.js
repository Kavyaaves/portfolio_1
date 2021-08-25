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

/***/ "./pages/marine-algae/[name].js":
/*!**************************************!*\
  !*** ./pages/marine-algae/[name].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Log */ "./components/Log.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/db */ "./utils/db.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Blog */ "./components/Blog.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\next\\portfolio_1\\pages\\marine-algae\\[name].js",
    _s = $RefreshSig$();










function marineAlgaeDetail(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-screen h-screen overflow-x-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Bakthavachalam Babu - Marine Algae"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        charSet: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://unpkg.com/popper.js@1/dist/umd/popper.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
      className: "bg-falls bg-fixed bg-cover bg-center bg-no-repeat",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-2  pt-5 max-w-4xl relative mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bg-primary relative rounded-lg p-10 w-full h-full",
          children: data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog__WEBPACK_IMPORTED_MODULE_8__.default, {
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, this) : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
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

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (marineAlgaeDetail); // export const getServerSideProps = async (context) => {
//     const data = await prisma.marine.findMany({ where: { "name": context.params.name } });
//     return {
//         props: { data: data[0] || null }
//     };
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21hcmluZS1hbGdhZS9bbmFtZV0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByaXNtYS9jbGllbnQvaW5kZXgtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmlzbWEvY2xpZW50L3J1bnRpbWUvaW5kZXgtYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJtYXJpbmVBbGdhZURldGFpbCIsImRhdGEiLCJ1c2VTdGF0ZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInByaXNtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDOztBQUU3RDtBQUNBO0FBQ0EsQ0FBQyxHQUFHLG1CQUFPLENBQUMsb0dBQXNDOzs7QUFHbEQ7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7O0FBRWhDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QjtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxRQUFRLGNBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdUJBQXVCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFtQyxTQUFTO0FBQzVDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGNBQWMsS0FBSztBQUNuQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwQkFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFyaW5lLWFsZ2FlL1tuYW1lXS5hNmRjMjljZTU5ODk0MjE3ODlhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHtcbiAgRGVjaW1hbFxufSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50L3J1bnRpbWUvaW5kZXgtYnJvd3NlcicpXG5cblxuY29uc3QgUHJpc21hID0ge31cblxuZXhwb3J0cy5QcmlzbWEgPSBQcmlzbWFcblxuLyoqXG4gKiBQcmlzbWEgQ2xpZW50IEpTIHZlcnNpb246IDIuMjkuMVxuICogUXVlcnkgRW5naW5lIHZlcnNpb246IDFiZTRjZDYwYjg5YWZhMDRiMTkyYWNiMWVmNDc3NThhMzk4MTBmM2FcbiAqL1xuUHJpc21hLnByaXNtYVZlcnNpb24gPSB7XG4gIGNsaWVudDogXCIyLjI5LjFcIixcbiAgZW5naW5lOiBcIjFiZTRjZDYwYjg5YWZhMDRiMTkyYWNiMWVmNDc3NThhMzk4MTBmM2FcIlxufVxuXG5QcmlzbWEuUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9O1xuUHJpc21hLlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRJbml0aWFsaXphdGlvbkVycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudEluaXRpYWxpemF0aW9uRXJyb3IgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5EZWNpbWFsID0gRGVjaW1hbFxuXG4vKipcbiAqIFJlLWV4cG9ydCBvZiBzcWwtdGVtcGxhdGUtdGFnXG4gKi9cblxuUHJpc21hLnNxbCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBzcWx0YWcgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuZW1wdHkgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgZW1wdHkgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuam9pbiA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBqb2luIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLnJhdyA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGByYXcgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEudmFsaWRhdG9yID0gKCkgPT4gKHZhbCkgPT4gdmFsXG5cbi8qKlxuICogRW51bXNcbiAqL1xuLy8gQmFzZWQgb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzE5MiNpc3N1ZWNvbW1lbnQtMjYxNzIwMjc1XG5mdW5jdGlvbiBtYWtlRW51bSh4KSB7IHJldHVybiB4OyB9XG5cbmV4cG9ydHMuUHJpc21hLk1hcmluZVNjYWxhckZpZWxkRW51bSA9IG1ha2VFbnVtKHtcbiAgaWQ6ICdpZCcsXG4gIG5hbWU6ICduYW1lJyxcbiAgdGl0bGU6ICd0aXRsZScsXG4gIGRlc2M6ICdkZXNjJyxcbiAgaW1nMTogJ2ltZzEnLFxuICBpbWcyOiAnaW1nMicsXG4gIGltZzM6ICdpbWczJyxcbiAgaW1nNDogJ2ltZzQnLFxuICBpbWc1OiAnaW1nNScsXG4gIHBhcmExOiAncGFyYTEnLFxuICBwYXJhMjogJ3BhcmEyJyxcbiAgcGFyYTM6ICdwYXJhMycsXG4gIHBhcmE0OiAncGFyYTQnLFxuICBwYXJhNTogJ3BhcmE1JyxcbiAgZGl2aXNpb246ICdkaXZpc2lvbicsXG4gIGNsYXNzOiAnY2xhc3MnLFxuICBvcmRlcjogJ29yZGVyJyxcbiAgZmFtaWx5OiAnZmFtaWx5JyxcbiAgYmFzaW9ueW06ICdiYXNpb255bScsXG4gIHN5bm9ueW06ICdzeW5vbnltJyxcbiAgZWNvbG9neTogJ2Vjb2xvZ3knLFxuICBkaXN0cmlidXRpb246ICdkaXN0cmlidXRpb24nLFxuICBoYWJpdGF0OiAnaGFiaXRhdCcsXG4gIG9yaWVudGF0aW9uMTogJ29yaWVudGF0aW9uMScsXG4gIG9yaWVudGF0aW9uMjogJ29yaWVudGF0aW9uMicsXG4gIG9yaWVudGF0aW9uMzogJ29yaWVudGF0aW9uMycsXG4gIG9yaWVudGF0aW9uNDogJ29yaWVudGF0aW9uNCcsXG4gIG9yaWVudGF0aW9uNTogJ29yaWVudGF0aW9uNScsXG4gIGltZzFDYXB0aW9uOiAnaW1nMUNhcHRpb24nLFxuICBpbWcyQ2FwdGlvbjogJ2ltZzJDYXB0aW9uJyxcbiAgaW1nM0NhcHRpb246ICdpbWczQ2FwdGlvbicsXG4gIGltZzRDYXB0aW9uOiAnaW1nNENhcHRpb24nLFxuICBpbWc1Q2FwdGlvbjogJ2ltZzVDYXB0aW9uJ1xufSk7XG5cbmV4cG9ydHMuUHJpc21hLkZyZXNod2F0ZXJTY2FsYXJGaWVsZEVudW0gPSBtYWtlRW51bSh7XG4gIGlkOiAnaWQnLFxuICBuYW1lOiAnbmFtZScsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBkZXNjOiAnZGVzYycsXG4gIGltZzE6ICdpbWcxJyxcbiAgaW1nMjogJ2ltZzInLFxuICBpbWczOiAnaW1nMycsXG4gIGltZzQ6ICdpbWc0JyxcbiAgaW1nNTogJ2ltZzUnLFxuICBwYXJhMTogJ3BhcmExJyxcbiAgcGFyYTI6ICdwYXJhMicsXG4gIHBhcmEzOiAncGFyYTMnLFxuICBwYXJhNDogJ3BhcmE0JyxcbiAgcGFyYTU6ICdwYXJhNScsXG4gIGRpdmlzaW9uOiAnZGl2aXNpb24nLFxuICBjbGFzczogJ2NsYXNzJyxcbiAgb3JkZXI6ICdvcmRlcicsXG4gIGZhbWlseTogJ2ZhbWlseScsXG4gIGJhc2lvbnltOiAnYmFzaW9ueW0nLFxuICBoYWJpdGF0OiAnaGFiaXRhdCcsXG4gIG9yaWVudGF0aW9uMTogJ29yaWVudGF0aW9uMScsXG4gIG9yaWVudGF0aW9uMjogJ29yaWVudGF0aW9uMicsXG4gIG9yaWVudGF0aW9uMzogJ29yaWVudGF0aW9uMycsXG4gIG9yaWVudGF0aW9uNDogJ29yaWVudGF0aW9uNCcsXG4gIG9yaWVudGF0aW9uNTogJ29yaWVudGF0aW9uNScsXG4gIGltZzFDYXB0aW9uOiAnaW1nMUNhcHRpb24nLFxuICBpbWcyQ2FwdGlvbjogJ2ltZzJDYXB0aW9uJyxcbiAgaW1nM0NhcHRpb246ICdpbWczQ2FwdGlvbicsXG4gIGltZzRDYXB0aW9uOiAnaW1nNENhcHRpb24nLFxuICBpbWc1Q2FwdGlvbjogJ2ltZzVDYXB0aW9uJ1xufSk7XG5cbmV4cG9ydHMuUHJpc21hLlNvcnRPcmRlciA9IG1ha2VFbnVtKHtcbiAgYXNjOiAnYXNjJyxcbiAgZGVzYzogJ2Rlc2MnXG59KTtcblxuXG5leHBvcnRzLlByaXNtYS5Nb2RlbE5hbWUgPSBtYWtlRW51bSh7XG4gIE1hcmluZTogJ01hcmluZScsXG4gIEZyZXNod2F0ZXI6ICdGcmVzaHdhdGVyJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBDbGllbnRcbiAqL1xuY2xhc3MgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFByaXNtYUNsaWVudCBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuICAgIClcbiAgfVxufVxuZXhwb3J0cy5QcmlzbWFDbGllbnQgPSBQcmlzbWFDbGllbnRcblxuT2JqZWN0LmFzc2lnbihleHBvcnRzLCBQcmlzbWEpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExvZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvZyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi91dGlscy9kYic7XHJcbmltcG9ydCBCbG9nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZyc7XHJcbmZ1bmN0aW9uIG1hcmluZUFsZ2FlRGV0YWlsKHsgZGF0YSB9KSB7XHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAvLyAgICAgICAgIHRvcDogMCxcclxuICAgIC8vICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICAvLyBCdXR0b24gaXMgZGlzcGxheWVkIGFmdGVyIHNjcm9sbGluZyBmb3IgNTAwIHBpeGVsc1xyXG4gICAgLy8gICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiA1MDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9O1xyXG5cclxuICAgIC8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xyXG4gICAgLy8gfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CYWt0aGF2YWNoYWxhbSBCYWJ1IC0gTWFyaW5lIEFsZ2FlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj0naHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQvY3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJTZXQ9J1VURi04J1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzcydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmVjdXJzaXZlOndnaHRANzAwJmRpc3BsYXk9c3dhcCdcclxuICAgICAgICAgICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vdW5wa2cuY29tL3BvcHBlci5qc0AxL2Rpc3QvdW1kL3BvcHBlci5taW4uanMnPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vdW5wa2cuY29tL3RpcHB5LmpzQDQnPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICB7Lyoge3NlbGVjdGVkSW1nICYmXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYWJzb2x1dGUgei0yMCB3LWZ1bGwgaC1mdWxsIHRvcC0wIGJvdHRvbS0wIGJnLXByaW1hcnlcIj5cclxuXHRcdFx0XHRcdDxNb2RhbCBzZXRTZWxlY3RlZEltZz17c2V0U2VsZWN0ZWRJbWd9IHNlbGVjdGVkSW1nPXtzZWxlY3RlZEltZ30gaW1hZ2VzPXthbGxJbWFnZXN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdH0gKi99XHJcblxyXG4gICAgICAgICAgICA8Ym9keSBjbGFzc05hbWU9J2JnLWZhbGxzIGJnLWZpeGVkIGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXQnID5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTIgIHB0LTUgbWF4LXctNHhsIHJlbGF0aXZlIG14LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1wcmltYXJ5IHJlbGF0aXZlIHJvdW5kZWQtbGcgcC0xMCB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMb2cgZGF0YT17bWFyaW5lfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgPyA8QmxvZyBkYXRhPXtkYXRhfSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgey8qIHtpc1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBmaXhlZCByaWdodC0wIGJvdHRvbS0wIHRleHQtY2VudGVyIGZsZXggcm91bmRlZC1mdWxsIHctMTYgbS0xMCBoLTE2IHRleHQtYmx1ZS03MDAgYmcteWVsbG93LTYwMCBtZDpiZy1wcmltYXJ5IG1kOnRleHQteWVsbG93LTUwMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc25hbWU9J2lubGluZS1mbGV4IG0tMTAnPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCIjRkZCRjAwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCAxNi42N2wyLjgyOSAyLjgzIDkuMTc1LTkuMzM5IDkuMTY3IDkuMzM5IDIuODI5LTIuODMtMTEuOTk2LTEyLjE3elwiIC8+PC9zdmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9ib2R5ID5cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvIGRpdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXJpbmVBbGdhZURldGFpbDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5tYXJpbmUuZmluZE1hbnkoeyB3aGVyZTogeyBcIm5hbWVcIjogY29udGV4dC5wYXJhbXMubmFtZSB9IH0pO1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczogeyBkYXRhOiBkYXRhWzBdIHx8IG51bGwgfVxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubWFyaW5lLmZpbmRNYW55KHsgd2hlcmU6IHsgXCJuYW1lXCI6IGNvbnRleHQucGFyYW1zLm5hbWUgfSB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW3sgcGFyYW1zOiB7IHBvc3RJZDogXCIxXCIgfSB9XSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxubGV0IHByaXNtYVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7IiwiY29uc3QgcHJpc21hID0gcmVxdWlyZSgnLnByaXNtYS9jbGllbnQvaW5kZXgtYnJvd3NlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gcHJpc21hXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvaW5kZXgtYnJvd3Nlci50c1xuX19tYXJrQXNNb2R1bGUoZXhwb3J0cyk7XG5fX2V4cG9ydChleHBvcnRzLCB7XG4gIERlY2ltYWw6ICgpID0+IGRlY2ltYWxfZGVmYXVsdFxufSk7XG5cbi8vIC4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWNpbWFsLmpzQDEwLjMuMS9ub2RlX21vZHVsZXMvZGVjaW1hbC5qcy9kZWNpbWFsLm1qc1xudmFyIEVYUF9MSU1JVCA9IDllMTU7XG52YXIgTUFYX0RJR0lUUyA9IDFlOTtcbnZhciBOVU1FUkFMUyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xudmFyIExOMTAgPSBcIjIuMzAyNTg1MDkyOTk0MDQ1Njg0MDE3OTkxNDU0Njg0MzY0MjA3NjAxMTAxNDg4NjI4NzcyOTc2MDMzMzI3OTAwOTY3NTcyNjA5Njc3MzUyNDgwMjM1OTk3MjA1MDg5NTk4Mjk4MzQxOTY3Nzg0MDQyMjg2MjQ4NjMzNDA5NTI1NDY1MDgyODA2NzU2NjY2Mjg3MzY5MDk4NzgxNjg5NDgyOTA3MjA4MzI1NTU0NjgwODQzNzk5ODk0ODI2MjMzMTk4NTI4MzkzNTA1MzA4OTY1Mzc3NzMyNjI4ODQ2MTYzMzY2MjIyMjg3Njk4MjE5ODg2NzQ2NTQzNjY3NDc0NDA0MjQzMjc0MzY1MTU1MDQ4OTM0MzE0OTM5MzkxNDc5NjE5NDA0NDAwMjIyMTA1MTAxNzE0MTc0ODAwMzY4ODA4NDAxMjY0NzA4MDY4NTU2Nzc0MzIxNjIyODM1NTIyMDExNDgwNDY2MzcxNTY1OTEyMTM3MzQ1MDc0Nzg1Njk0NzY4MzQ2MzYxNjc5MjEwMTgwNjQ0NTA3MDY0ODAwMDI3NzUwMjY4NDkxNjc0NjU1MDU4Njg1NjkzNTY3MzQyMDY3MDU4MTEzNjQyOTIyNDU1NDQwNTc1ODkyNTcyNDIwODI0MTMxNDY5NTY4OTAxNjc1ODk0MDI1Njc3NjMxMTM1NjkxOTI5MjAzMzM3NjU4NzE0MTY2MDIzMDEwNTcwMzA4OTYzNDU3MjA3NTQ0MDM3MDg0NzQ2OTk0MDE2ODI2OTI4MjgwODQ4MTE4NDI4OTMxNDg0ODUyNDk0ODY0NDg3MTkyNzgwOTY3NjI3MTI3NTc3NTM5NzAyNzY2ODYwNTk1MjQ5NjcxNjY3NDE4MzQ4NTcwNDQyMjUwNzE5Nzk2NTAwNDcxNDk1MTA1MDQ5MjIxNDc3NjU2NzYzNjkzODY2Mjk3Njk3OTUyMjExMDcxODI2NDU0OTczNDc3MjY2MjQyNTcwOTQyOTMyMjU4Mjc5ODUwMjU4NTUwOTc4NTI2NTM4MzIwNzYwNjcyNjMxNzE2NDMwOTUwNTk5NTA4NzgwNzUyMzcxMDMzMzEwMTE5Nzg1NzU0NzMzMTU0MTQyMTgwODQyNzU0Mzg2MzU5MTc3ODExNzA1NDMwOTgyNzQ4MjM4NTA0NTY0ODAxOTA5NTYxMDI5OTI5MTgyNDMxODIzNzUyNTM1NzcwOTc1MDUzOTU2NTE4NzY5NzUxMDM3NDk3MDg4ODY5MjE4MDIwNTE4OTMzOTUwNzIzODUzOTIwNTE0NDYzNDE5NzI2NTI4NzI4Njk2NTExMDg2MjU3MTQ5MjE5ODg0OTk3ODc0ODg3Mzc3MTM0NTY4NjIwOTE2NzA1OFwiO1xudmFyIFBJID0gXCIzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTM5OTM3NTEwNTgyMDk3NDk0NDU5MjMwNzgxNjQwNjI4NjIwODk5ODYyODAzNDgyNTM0MjExNzA2Nzk4MjE0ODA4NjUxMzI4MjMwNjY0NzA5Mzg0NDYwOTU1MDU4MjIzMTcyNTM1OTQwODEyODQ4MTExNzQ1MDI4NDEwMjcwMTkzODUyMTEwNTU1OTY0NDYyMjk0ODk1NDkzMDM4MTk2NDQyODgxMDk3NTY2NTkzMzQ0NjEyODQ3NTY0ODIzMzc4Njc4MzE2NTI3MTIwMTkwOTE0NTY0ODU2NjkyMzQ2MDM0ODYxMDQ1NDMyNjY0ODIxMzM5MzYwNzI2MDI0OTE0MTI3MzcyNDU4NzAwNjYwNjMxNTU4ODE3NDg4MTUyMDkyMDk2MjgyOTI1NDA5MTcxNTM2NDM2Nzg5MjU5MDM2MDAxMTMzMDUzMDU0ODgyMDQ2NjUyMTM4NDE0Njk1MTk0MTUxMTYwOTQzMzA1NzI3MDM2NTc1OTU5MTk1MzA5MjE4NjExNzM4MTkzMjYxMTc5MzEwNTExODU0ODA3NDQ2MjM3OTk2Mjc0OTU2NzM1MTg4NTc1MjcyNDg5MTIyNzkzODE4MzAxMTk0OTEyOTgzMzY3MzM2MjQ0MDY1NjY0MzA4NjAyMTM5NDk0NjM5NTIyNDczNzE5MDcwMjE3OTg2MDk0MzcwMjc3MDUzOTIxNzE3NjI5MzE3Njc1MjM4NDY3NDgxODQ2NzY2OTQwNTEzMjAwMDU2ODEyNzE0NTI2MzU2MDgyNzc4NTc3MTM0Mjc1Nzc4OTYwOTE3MzYzNzE3ODcyMTQ2ODQ0MDkwMTIyNDk1MzQzMDE0NjU0OTU4NTM3MTA1MDc5MjI3OTY4OTI1ODkyMzU0MjAxOTk1NjExMjEyOTAyMTk2MDg2NDAzNDQxODE1OTgxMzYyOTc3NDc3MTMwOTk2MDUxODcwNzIxMTM0OTk5OTk5ODM3Mjk3ODA0OTk1MTA1OTczMTczMjgxNjA5NjMxODU5NTAyNDQ1OTQ1NTM0NjkwODMwMjY0MjUyMjMwODI1MzM0NDY4NTAzNTI2MTkzMTE4ODE3MTAxMDAwMzEzNzgzODc1Mjg4NjU4NzUzMzIwODM4MTQyMDYxNzE3NzY2OTE0NzMwMzU5ODI1MzQ5MDQyODc1NTQ2ODczMTE1OTU2Mjg2Mzg4MjM1Mzc4NzU5Mzc1MTk1Nzc4MTg1Nzc4MDUzMjE3MTIyNjgwNjYxMzAwMTkyNzg3NjYxMTE5NTkwOTIxNjQyMDE5ODkzODA5NTI1NzIwMTA2NTQ4NTg2MzI3ODlcIjtcbnZhciBERUZBVUxUUyA9IHtcbiAgcHJlY2lzaW9uOiAyMCxcbiAgcm91bmRpbmc6IDQsXG4gIG1vZHVsbzogMSxcbiAgdG9FeHBOZWc6IC03LFxuICB0b0V4cFBvczogMjEsXG4gIG1pbkU6IC1FWFBfTElNSVQsXG4gIG1heEU6IEVYUF9MSU1JVCxcbiAgY3J5cHRvOiBmYWxzZVxufTtcbnZhciBpbmV4YWN0O1xudmFyIHF1YWRyYW50O1xudmFyIGV4dGVybmFsID0gdHJ1ZTtcbnZhciBkZWNpbWFsRXJyb3IgPSBcIltEZWNpbWFsRXJyb3JdIFwiO1xudmFyIGludmFsaWRBcmd1bWVudCA9IGRlY2ltYWxFcnJvciArIFwiSW52YWxpZCBhcmd1bWVudDogXCI7XG52YXIgcHJlY2lzaW9uTGltaXRFeGNlZWRlZCA9IGRlY2ltYWxFcnJvciArIFwiUHJlY2lzaW9uIGxpbWl0IGV4Y2VlZGVkXCI7XG52YXIgY3J5cHRvVW5hdmFpbGFibGUgPSBkZWNpbWFsRXJyb3IgKyBcImNyeXB0byB1bmF2YWlsYWJsZVwiO1xudmFyIHRhZyA9IFwiW29iamVjdCBEZWNpbWFsXVwiO1xudmFyIG1hdGhmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbWF0aHBvdyA9IE1hdGgucG93O1xudmFyIGlzQmluYXJ5ID0gL14wYihbMDFdKyhcXC5bMDFdKik/fFxcLlswMV0rKShwWystXT9cXGQrKT8kL2k7XG52YXIgaXNIZXggPSAvXjB4KFswLTlhLWZdKyhcXC5bMC05YS1mXSopP3xcXC5bMC05YS1mXSspKHBbKy1dP1xcZCspPyQvaTtcbnZhciBpc09jdGFsID0gL14wbyhbMC03XSsoXFwuWzAtN10qKT98XFwuWzAtN10rKShwWystXT9cXGQrKT8kL2k7XG52YXIgaXNEZWNpbWFsID0gL14oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/JC9pO1xudmFyIEJBU0UgPSAxZTc7XG52YXIgTE9HX0JBU0UgPSA3O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xudmFyIExOMTBfUFJFQ0lTSU9OID0gTE4xMC5sZW5ndGggLSAxO1xudmFyIFBJX1BSRUNJU0lPTiA9IFBJLmxlbmd0aCAtIDE7XG52YXIgUCA9IHt0b1N0cmluZ1RhZzogdGFnfTtcblAuYWJzb2x1dGVWYWx1ZSA9IFAuYWJzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XG4gIGlmICh4LnMgPCAwKVxuICAgIHgucyA9IDE7XG4gIHJldHVybiBmaW5hbGlzZSh4KTtcbn07XG5QLmNlaWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpLCB0aGlzLmUgKyAxLCAyKTtcbn07XG5QLmNsYW1wZWRUbyA9IFAuY2xhbXAgPSBmdW5jdGlvbihtaW4yLCBtYXgyKSB7XG4gIHZhciBrLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIG1pbjIgPSBuZXcgQ3RvcihtaW4yKTtcbiAgbWF4MiA9IG5ldyBDdG9yKG1heDIpO1xuICBpZiAoIW1pbjIucyB8fCAhbWF4Mi5zKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAobWluMi5ndChtYXgyKSlcbiAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBtYXgyKTtcbiAgayA9IHguY21wKG1pbjIpO1xuICByZXR1cm4gayA8IDAgPyBtaW4yIDogeC5jbXAobWF4MikgPiAwID8gbWF4MiA6IG5ldyBDdG9yKHgpO1xufTtcblAuY29tcGFyZWRUbyA9IFAuY21wID0gZnVuY3Rpb24oeSkge1xuICB2YXIgaSwgaiwgeGRMLCB5ZEwsIHggPSB0aGlzLCB4ZCA9IHguZCwgeWQgPSAoeSA9IG5ldyB4LmNvbnN0cnVjdG9yKHkpKS5kLCB4cyA9IHgucywgeXMgPSB5LnM7XG4gIGlmICgheGQgfHwgIXlkKSB7XG4gICAgcmV0dXJuICF4cyB8fCAheXMgPyBOYU4gOiB4cyAhPT0geXMgPyB4cyA6IHhkID09PSB5ZCA/IDAgOiAheGQgXiB4cyA8IDAgPyAxIDogLTE7XG4gIH1cbiAgaWYgKCF4ZFswXSB8fCAheWRbMF0pXG4gICAgcmV0dXJuIHhkWzBdID8geHMgOiB5ZFswXSA/IC15cyA6IDA7XG4gIGlmICh4cyAhPT0geXMpXG4gICAgcmV0dXJuIHhzO1xuICBpZiAoeC5lICE9PSB5LmUpXG4gICAgcmV0dXJuIHguZSA+IHkuZSBeIHhzIDwgMCA/IDEgOiAtMTtcbiAgeGRMID0geGQubGVuZ3RoO1xuICB5ZEwgPSB5ZC5sZW5ndGg7XG4gIGZvciAoaSA9IDAsIGogPSB4ZEwgPCB5ZEwgPyB4ZEwgOiB5ZEw7IGkgPCBqOyArK2kpIHtcbiAgICBpZiAoeGRbaV0gIT09IHlkW2ldKVxuICAgICAgcmV0dXJuIHhkW2ldID4geWRbaV0gXiB4cyA8IDAgPyAxIDogLTE7XG4gIH1cbiAgcmV0dXJuIHhkTCA9PT0geWRMID8gMCA6IHhkTCA+IHlkTCBeIHhzIDwgMCA/IDEgOiAtMTtcbn07XG5QLmNvc2luZSA9IFAuY29zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmQpXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmICgheC5kWzBdKVxuICAgIHJldHVybiBuZXcgQ3RvcigxKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoeC5lLCB4LnNkKCkpICsgTE9HX0JBU0U7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0gY29zaW5lKEN0b3IsIHRvTGVzc1RoYW5IYWxmUGkoQ3RvciwgeCkpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZShxdWFkcmFudCA9PSAyIHx8IHF1YWRyYW50ID09IDMgPyB4Lm5lZygpIDogeCwgcHIsIHJtLCB0cnVlKTtcbn07XG5QLmN1YmVSb290ID0gUC5jYnJ0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlLCBtLCBuLCByLCByZXAsIHMsIHNkLCB0LCB0MywgdDNwbHVzeCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSB8fCB4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgcyA9IHgucyAqIG1hdGhwb3coeC5zICogeCwgMSAvIDMpO1xuICBpZiAoIXMgfHwgTWF0aC5hYnMocykgPT0gMSAvIDApIHtcbiAgICBuID0gZGlnaXRzVG9TdHJpbmcoeC5kKTtcbiAgICBlID0geC5lO1xuICAgIGlmIChzID0gKGUgLSBuLmxlbmd0aCArIDEpICUgMylcbiAgICAgIG4gKz0gcyA9PSAxIHx8IHMgPT0gLTIgPyBcIjBcIiA6IFwiMDBcIjtcbiAgICBzID0gbWF0aHBvdyhuLCAxIC8gMyk7XG4gICAgZSA9IG1hdGhmbG9vcigoZSArIDEpIC8gMykgLSAoZSAlIDMgPT0gKGUgPCAwID8gLTEgOiAyKSk7XG4gICAgaWYgKHMgPT0gMSAvIDApIHtcbiAgICAgIG4gPSBcIjVlXCIgKyBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuID0gcy50b0V4cG9uZW50aWFsKCk7XG4gICAgICBuID0gbi5zbGljZSgwLCBuLmluZGV4T2YoXCJlXCIpICsgMSkgKyBlO1xuICAgIH1cbiAgICByID0gbmV3IEN0b3Iobik7XG4gICAgci5zID0geC5zO1xuICB9IGVsc2Uge1xuICAgIHIgPSBuZXcgQ3RvcihzLnRvU3RyaW5nKCkpO1xuICB9XG4gIHNkID0gKGUgPSBDdG9yLnByZWNpc2lvbikgKyAzO1xuICBmb3IgKDsgOyApIHtcbiAgICB0ID0gcjtcbiAgICB0MyA9IHQudGltZXModCkudGltZXModCk7XG4gICAgdDNwbHVzeCA9IHQzLnBsdXMoeCk7XG4gICAgciA9IGRpdmlkZSh0M3BsdXN4LnBsdXMoeCkudGltZXModCksIHQzcGx1c3gucGx1cyh0MyksIHNkICsgMiwgMSk7XG4gICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgc2QpID09PSAobiA9IGRpZ2l0c1RvU3RyaW5nKHIuZCkpLnNsaWNlKDAsIHNkKSkge1xuICAgICAgbiA9IG4uc2xpY2Uoc2QgLSAzLCBzZCArIDEpO1xuICAgICAgaWYgKG4gPT0gXCI5OTk5XCIgfHwgIXJlcCAmJiBuID09IFwiNDk5OVwiKSB7XG4gICAgICAgIGlmICghcmVwKSB7XG4gICAgICAgICAgZmluYWxpc2UodCwgZSArIDEsIDApO1xuICAgICAgICAgIGlmICh0LnRpbWVzKHQpLnRpbWVzKHQpLmVxKHgpKSB7XG4gICAgICAgICAgICByID0gdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZCArPSA0O1xuICAgICAgICByZXAgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCErbiB8fCAhK24uc2xpY2UoMSkgJiYgbi5jaGFyQXQoMCkgPT0gXCI1XCIpIHtcbiAgICAgICAgICBmaW5hbGlzZShyLCBlICsgMSwgMSk7XG4gICAgICAgICAgbSA9ICFyLnRpbWVzKHIpLnRpbWVzKHIpLmVxKHgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiBmaW5hbGlzZShyLCBlLCBDdG9yLnJvdW5kaW5nLCBtKTtcbn07XG5QLmRlY2ltYWxQbGFjZXMgPSBQLmRwID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3LCBkID0gdGhpcy5kLCBuID0gTmFOO1xuICBpZiAoZCkge1xuICAgIHcgPSBkLmxlbmd0aCAtIDE7XG4gICAgbiA9ICh3IC0gbWF0aGZsb29yKHRoaXMuZSAvIExPR19CQVNFKSkgKiBMT0dfQkFTRTtcbiAgICB3ID0gZFt3XTtcbiAgICBpZiAodylcbiAgICAgIGZvciAoOyB3ICUgMTAgPT0gMDsgdyAvPSAxMClcbiAgICAgICAgbi0tO1xuICAgIGlmIChuIDwgMClcbiAgICAgIG4gPSAwO1xuICB9XG4gIHJldHVybiBuO1xufTtcblAuZGl2aWRlZEJ5ID0gUC5kaXYgPSBmdW5jdGlvbih5KSB7XG4gIHJldHVybiBkaXZpZGUodGhpcywgbmV3IHRoaXMuY29uc3RydWN0b3IoeSkpO1xufTtcblAuZGl2aWRlZFRvSW50ZWdlckJ5ID0gUC5kaXZUb0ludCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIGZpbmFsaXNlKGRpdmlkZSh4LCBuZXcgQ3Rvcih5KSwgMCwgMSwgMSksIEN0b3IucHJlY2lzaW9uLCBDdG9yLnJvdW5kaW5nKTtcbn07XG5QLmVxdWFscyA9IFAuZXEgPSBmdW5jdGlvbih5KSB7XG4gIHJldHVybiB0aGlzLmNtcCh5KSA9PT0gMDtcbn07XG5QLmZsb29yID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSwgdGhpcy5lICsgMSwgMyk7XG59O1xuUC5ncmVhdGVyVGhhbiA9IFAuZ3QgPSBmdW5jdGlvbih5KSB7XG4gIHJldHVybiB0aGlzLmNtcCh5KSA+IDA7XG59O1xuUC5ncmVhdGVyVGhhbk9yRXF1YWxUbyA9IFAuZ3RlID0gZnVuY3Rpb24oeSkge1xuICB2YXIgayA9IHRoaXMuY21wKHkpO1xuICByZXR1cm4gayA9PSAxIHx8IGsgPT09IDA7XG59O1xuUC5oeXBlcmJvbGljQ29zaW5lID0gUC5jb3NoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBrLCBuLCBwciwgcm0sIGxlbiwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBvbmUgPSBuZXcgQ3RvcigxKTtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgucyA/IDEgLyAwIDogTmFOKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG9uZTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoeC5lLCB4LnNkKCkpICsgNDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGxlbiA9IHguZC5sZW5ndGg7XG4gIGlmIChsZW4gPCAzMikge1xuICAgIGsgPSBNYXRoLmNlaWwobGVuIC8gMyk7XG4gICAgbiA9ICgxIC8gdGlueVBvdyg0LCBrKSkudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICBrID0gMTY7XG4gICAgbiA9IFwiMi4zMjgzMDY0MzY1Mzg2OTYyODkwNjI1ZS0xMFwiO1xuICB9XG4gIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMSwgeC50aW1lcyhuKSwgbmV3IEN0b3IoMSksIHRydWUpO1xuICB2YXIgY29zaDJfeCwgaSA9IGssIGQ4ID0gbmV3IEN0b3IoOCk7XG4gIGZvciAoOyBpLS07ICkge1xuICAgIGNvc2gyX3ggPSB4LnRpbWVzKHgpO1xuICAgIHggPSBvbmUubWludXMoY29zaDJfeC50aW1lcyhkOC5taW51cyhjb3NoMl94LnRpbWVzKGQ4KSkpKTtcbiAgfVxuICByZXR1cm4gZmluYWxpc2UoeCwgQ3Rvci5wcmVjaXNpb24gPSBwciwgQ3Rvci5yb3VuZGluZyA9IHJtLCB0cnVlKTtcbn07XG5QLmh5cGVyYm9saWNTaW5lID0gUC5zaW5oID0gZnVuY3Rpb24oKSB7XG4gIHZhciBrLCBwciwgcm0sIGxlbiwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSB8fCB4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoeC5lLCB4LnNkKCkpICsgNDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGxlbiA9IHguZC5sZW5ndGg7XG4gIGlmIChsZW4gPCAzKSB7XG4gICAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAyLCB4LCB4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBrID0gMS40ICogTWF0aC5zcXJ0KGxlbik7XG4gICAgayA9IGsgPiAxNiA/IDE2IDogayB8IDA7XG4gICAgeCA9IHgudGltZXMoMSAvIHRpbnlQb3coNSwgaykpO1xuICAgIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMiwgeCwgeCwgdHJ1ZSk7XG4gICAgdmFyIHNpbmgyX3gsIGQ1ID0gbmV3IEN0b3IoNSksIGQxNiA9IG5ldyBDdG9yKDE2KSwgZDIwID0gbmV3IEN0b3IoMjApO1xuICAgIGZvciAoOyBrLS07ICkge1xuICAgICAgc2luaDJfeCA9IHgudGltZXMoeCk7XG4gICAgICB4ID0geC50aW1lcyhkNS5wbHVzKHNpbmgyX3gudGltZXMoZDE2LnRpbWVzKHNpbmgyX3gpLnBsdXMoZDIwKSkpKTtcbiAgICB9XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UoeCwgcHIsIHJtLCB0cnVlKTtcbn07XG5QLmh5cGVyYm9saWNUYW5nZW50ID0gUC50YW5oID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgucyk7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgNztcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHJldHVybiBkaXZpZGUoeC5zaW5oKCksIHguY29zaCgpLCBDdG9yLnByZWNpc2lvbiA9IHByLCBDdG9yLnJvdW5kaW5nID0gcm0pO1xufTtcblAuaW52ZXJzZUNvc2luZSA9IFAuYWNvcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGFsZlBpLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIGsgPSB4LmFicygpLmNtcCgxKSwgcHIgPSBDdG9yLnByZWNpc2lvbiwgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoayAhPT0gLTEpIHtcbiAgICByZXR1cm4gayA9PT0gMCA/IHguaXNOZWcoKSA/IGdldFBpKEN0b3IsIHByLCBybSkgOiBuZXcgQ3RvcigwKSA6IG5ldyBDdG9yKE5hTik7XG4gIH1cbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuNSk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyA2O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHguYXNpbigpO1xuICBoYWxmUGkgPSBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBoYWxmUGkubWludXMoeCk7XG59O1xuUC5pbnZlcnNlSHlwZXJib2xpY0Nvc2luZSA9IFAuYWNvc2ggPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoeC5sdGUoMSkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHguZXEoMSkgPyAwIDogTmFOKTtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heChNYXRoLmFicyh4LmUpLCB4LnNkKCkpICsgNDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHggPSB4LnRpbWVzKHgpLm1pbnVzKDEpLnNxcnQoKS5wbHVzKHgpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIHgubG4oKTtcbn07XG5QLmludmVyc2VIeXBlcmJvbGljU2luZSA9IFAuYXNpbmggPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSB8fCB4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgMiAqIE1hdGgubWF4KE1hdGguYWJzKHguZSksIHguc2QoKSkgKyA2O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgeCA9IHgudGltZXMoeCkucGx1cygxKS5zcXJ0KCkucGx1cyh4KTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LmxuKCk7XG59O1xuUC5pbnZlcnNlSHlwZXJib2xpY1RhbmdlbnQgPSBQLmF0YW5oID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHdwciwgeHNkLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoeC5lID49IDApXG4gICAgcmV0dXJuIG5ldyBDdG9yKHguYWJzKCkuZXEoMSkgPyB4LnMgLyAwIDogeC5pc1plcm8oKSA/IHggOiBOYU4pO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIHhzZCA9IHguc2QoKTtcbiAgaWYgKE1hdGgubWF4KHhzZCwgcHIpIDwgMiAqIC14LmUgLSAxKVxuICAgIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgcHIsIHJtLCB0cnVlKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgPSB4c2QgLSB4LmU7XG4gIHggPSBkaXZpZGUoeC5wbHVzKDEpLCBuZXcgQ3RvcigxKS5taW51cyh4KSwgd3ByICsgcHIsIDEpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgNDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LmxuKCk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIHgudGltZXMoMC41KTtcbn07XG5QLmludmVyc2VTaW5lID0gUC5hc2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYWxmUGksIGssIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIGsgPSB4LmFicygpLmNtcCgxKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoayAhPT0gLTEpIHtcbiAgICBpZiAoayA9PT0gMCkge1xuICAgICAgaGFsZlBpID0gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC41KTtcbiAgICAgIGhhbGZQaS5zID0geC5zO1xuICAgICAgcmV0dXJuIGhhbGZQaTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDY7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0geC5kaXYobmV3IEN0b3IoMSkubWludXMoeC50aW1lcyh4KSkuc3FydCgpLnBsdXMoMSkpLmF0YW4oKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4geC50aW1lcygyKTtcbn07XG5QLmludmVyc2VUYW5nZW50ID0gUC5hdGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpLCBqLCBrLCBuLCBweCwgdCwgciwgd3ByLCB4MiwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBwciA9IEN0b3IucHJlY2lzaW9uLCBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmICgheC5pc0Zpbml0ZSgpKSB7XG4gICAgaWYgKCF4LnMpXG4gICAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgICBpZiAocHIgKyA0IDw9IFBJX1BSRUNJU0lPTikge1xuICAgICAgciA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuNSk7XG4gICAgICByLnMgPSB4LnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeC5pc1plcm8oKSkge1xuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgfSBlbHNlIGlmICh4LmFicygpLmVxKDEpICYmIHByICsgNCA8PSBQSV9QUkVDSVNJT04pIHtcbiAgICByID0gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC4yNSk7XG4gICAgci5zID0geC5zO1xuICAgIHJldHVybiByO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gd3ByID0gcHIgKyAxMDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGsgPSBNYXRoLm1pbigyOCwgd3ByIC8gTE9HX0JBU0UgKyAyIHwgMCk7XG4gIGZvciAoaSA9IGs7IGk7IC0taSlcbiAgICB4ID0geC5kaXYoeC50aW1lcyh4KS5wbHVzKDEpLnNxcnQoKS5wbHVzKDEpKTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgaiA9IE1hdGguY2VpbCh3cHIgLyBMT0dfQkFTRSk7XG4gIG4gPSAxO1xuICB4MiA9IHgudGltZXMoeCk7XG4gIHIgPSBuZXcgQ3Rvcih4KTtcbiAgcHggPSB4O1xuICBmb3IgKDsgaSAhPT0gLTE7ICkge1xuICAgIHB4ID0gcHgudGltZXMoeDIpO1xuICAgIHQgPSByLm1pbnVzKHB4LmRpdihuICs9IDIpKTtcbiAgICBweCA9IHB4LnRpbWVzKHgyKTtcbiAgICByID0gdC5wbHVzKHB4LmRpdihuICs9IDIpKTtcbiAgICBpZiAoci5kW2pdICE9PSB2b2lkIDApXG4gICAgICBmb3IgKGkgPSBqOyByLmRbaV0gPT09IHQuZFtpXSAmJiBpLS07IClcbiAgICAgICAgO1xuICB9XG4gIGlmIChrKVxuICAgIHIgPSByLnRpbWVzKDIgPDwgayAtIDEpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiBmaW5hbGlzZShyLCBDdG9yLnByZWNpc2lvbiA9IHByLCBDdG9yLnJvdW5kaW5nID0gcm0sIHRydWUpO1xufTtcblAuaXNGaW5pdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICEhdGhpcy5kO1xufTtcblAuaXNJbnRlZ2VyID0gUC5pc0ludCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gISF0aGlzLmQgJiYgbWF0aGZsb29yKHRoaXMuZSAvIExPR19CQVNFKSA+IHRoaXMuZC5sZW5ndGggLSAyO1xufTtcblAuaXNOYU4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLnM7XG59O1xuUC5pc05lZ2F0aXZlID0gUC5pc05lZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zIDwgMDtcbn07XG5QLmlzUG9zaXRpdmUgPSBQLmlzUG9zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnMgPiAwO1xufTtcblAuaXNaZXJvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhIXRoaXMuZCAmJiB0aGlzLmRbMF0gPT09IDA7XG59O1xuUC5sZXNzVGhhbiA9IFAubHQgPSBmdW5jdGlvbih5KSB7XG4gIHJldHVybiB0aGlzLmNtcCh5KSA8IDA7XG59O1xuUC5sZXNzVGhhbk9yRXF1YWxUbyA9IFAubHRlID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPCAxO1xufTtcblAubG9nYXJpdGhtID0gUC5sb2cgPSBmdW5jdGlvbihiYXNlKSB7XG4gIHZhciBpc0Jhc2UxMCwgZCwgZGVub21pbmF0b3IsIGssIGluZiwgbnVtLCBzZCwgciwgYXJnID0gdGhpcywgQ3RvciA9IGFyZy5jb25zdHJ1Y3RvciwgcHIgPSBDdG9yLnByZWNpc2lvbiwgcm0gPSBDdG9yLnJvdW5kaW5nLCBndWFyZCA9IDU7XG4gIGlmIChiYXNlID09IG51bGwpIHtcbiAgICBiYXNlID0gbmV3IEN0b3IoMTApO1xuICAgIGlzQmFzZTEwID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBiYXNlID0gbmV3IEN0b3IoYmFzZSk7XG4gICAgZCA9IGJhc2UuZDtcbiAgICBpZiAoYmFzZS5zIDwgMCB8fCAhZCB8fCAhZFswXSB8fCBiYXNlLmVxKDEpKVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gICAgaXNCYXNlMTAgPSBiYXNlLmVxKDEwKTtcbiAgfVxuICBkID0gYXJnLmQ7XG4gIGlmIChhcmcucyA8IDAgfHwgIWQgfHwgIWRbMF0gfHwgYXJnLmVxKDEpKSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKGQgJiYgIWRbMF0gPyAtMSAvIDAgOiBhcmcucyAhPSAxID8gTmFOIDogZCA/IDAgOiAxIC8gMCk7XG4gIH1cbiAgaWYgKGlzQmFzZTEwKSB7XG4gICAgaWYgKGQubGVuZ3RoID4gMSkge1xuICAgICAgaW5mID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrID0gZFswXTsgayAlIDEwID09PSAwOyApXG4gICAgICAgIGsgLz0gMTA7XG4gICAgICBpbmYgPSBrICE9PSAxO1xuICAgIH1cbiAgfVxuICBleHRlcm5hbCA9IGZhbHNlO1xuICBzZCA9IHByICsgZ3VhcmQ7XG4gIG51bSA9IG5hdHVyYWxMb2dhcml0aG0oYXJnLCBzZCk7XG4gIGRlbm9taW5hdG9yID0gaXNCYXNlMTAgPyBnZXRMbjEwKEN0b3IsIHNkICsgMTApIDogbmF0dXJhbExvZ2FyaXRobShiYXNlLCBzZCk7XG4gIHIgPSBkaXZpZGUobnVtLCBkZW5vbWluYXRvciwgc2QsIDEpO1xuICBpZiAoY2hlY2tSb3VuZGluZ0RpZ2l0cyhyLmQsIGsgPSBwciwgcm0pKSB7XG4gICAgZG8ge1xuICAgICAgc2QgKz0gMTA7XG4gICAgICBudW0gPSBuYXR1cmFsTG9nYXJpdGhtKGFyZywgc2QpO1xuICAgICAgZGVub21pbmF0b3IgPSBpc0Jhc2UxMCA/IGdldExuMTAoQ3Rvciwgc2QgKyAxMCkgOiBuYXR1cmFsTG9nYXJpdGhtKGJhc2UsIHNkKTtcbiAgICAgIHIgPSBkaXZpZGUobnVtLCBkZW5vbWluYXRvciwgc2QsIDEpO1xuICAgICAgaWYgKCFpbmYpIHtcbiAgICAgICAgaWYgKCtkaWdpdHNUb1N0cmluZyhyLmQpLnNsaWNlKGsgKyAxLCBrICsgMTUpICsgMSA9PSAxZTE0KSB7XG4gICAgICAgICAgciA9IGZpbmFsaXNlKHIsIHByICsgMSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoY2hlY2tSb3VuZGluZ0RpZ2l0cyhyLmQsIGsgKz0gMTAsIHJtKSk7XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgcHIsIHJtKTtcbn07XG5QLm1pbnVzID0gUC5zdWIgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBkLCBlLCBpLCBqLCBrLCBsZW4sIHByLCBybSwgeGQsIHhlLCB4TFR5LCB5ZCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB5ID0gbmV3IEN0b3IoeSk7XG4gIGlmICgheC5kIHx8ICF5LmQpIHtcbiAgICBpZiAoIXgucyB8fCAheS5zKVxuICAgICAgeSA9IG5ldyBDdG9yKE5hTik7XG4gICAgZWxzZSBpZiAoeC5kKVxuICAgICAgeS5zID0gLXkucztcbiAgICBlbHNlXG4gICAgICB5ID0gbmV3IEN0b3IoeS5kIHx8IHgucyAhPT0geS5zID8geCA6IE5hTik7XG4gICAgcmV0dXJuIHk7XG4gIH1cbiAgaWYgKHgucyAhPSB5LnMpIHtcbiAgICB5LnMgPSAteS5zO1xuICAgIHJldHVybiB4LnBsdXMoeSk7XG4gIH1cbiAgeGQgPSB4LmQ7XG4gIHlkID0geS5kO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmICgheGRbMF0gfHwgIXlkWzBdKSB7XG4gICAgaWYgKHlkWzBdKVxuICAgICAgeS5zID0gLXkucztcbiAgICBlbHNlIGlmICh4ZFswXSlcbiAgICAgIHkgPSBuZXcgQ3Rvcih4KTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmV3IEN0b3Iocm0gPT09IDMgPyAtMCA6IDApO1xuICAgIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIHByLCBybSkgOiB5O1xuICB9XG4gIGUgPSBtYXRoZmxvb3IoeS5lIC8gTE9HX0JBU0UpO1xuICB4ZSA9IG1hdGhmbG9vcih4LmUgLyBMT0dfQkFTRSk7XG4gIHhkID0geGQuc2xpY2UoKTtcbiAgayA9IHhlIC0gZTtcbiAgaWYgKGspIHtcbiAgICB4TFR5ID0gayA8IDA7XG4gICAgaWYgKHhMVHkpIHtcbiAgICAgIGQgPSB4ZDtcbiAgICAgIGsgPSAtaztcbiAgICAgIGxlbiA9IHlkLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9IHlkO1xuICAgICAgZSA9IHhlO1xuICAgICAgbGVuID0geGQubGVuZ3RoO1xuICAgIH1cbiAgICBpID0gTWF0aC5tYXgoTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpLCBsZW4pICsgMjtcbiAgICBpZiAoayA+IGkpIHtcbiAgICAgIGsgPSBpO1xuICAgICAgZC5sZW5ndGggPSAxO1xuICAgIH1cbiAgICBkLnJldmVyc2UoKTtcbiAgICBmb3IgKGkgPSBrOyBpLS07IClcbiAgICAgIGQucHVzaCgwKTtcbiAgICBkLnJldmVyc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBpID0geGQubGVuZ3RoO1xuICAgIGxlbiA9IHlkLmxlbmd0aDtcbiAgICB4TFR5ID0gaSA8IGxlbjtcbiAgICBpZiAoeExUeSlcbiAgICAgIGxlbiA9IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoeGRbaV0gIT0geWRbaV0pIHtcbiAgICAgICAgeExUeSA9IHhkW2ldIDwgeWRbaV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBrID0gMDtcbiAgfVxuICBpZiAoeExUeSkge1xuICAgIGQgPSB4ZDtcbiAgICB4ZCA9IHlkO1xuICAgIHlkID0gZDtcbiAgICB5LnMgPSAteS5zO1xuICB9XG4gIGxlbiA9IHhkLmxlbmd0aDtcbiAgZm9yIChpID0geWQubGVuZ3RoIC0gbGVuOyBpID4gMDsgLS1pKVxuICAgIHhkW2xlbisrXSA9IDA7XG4gIGZvciAoaSA9IHlkLmxlbmd0aDsgaSA+IGs7ICkge1xuICAgIGlmICh4ZFstLWldIDwgeWRbaV0pIHtcbiAgICAgIGZvciAoaiA9IGk7IGogJiYgeGRbLS1qXSA9PT0gMDsgKVxuICAgICAgICB4ZFtqXSA9IEJBU0UgLSAxO1xuICAgICAgLS14ZFtqXTtcbiAgICAgIHhkW2ldICs9IEJBU0U7XG4gICAgfVxuICAgIHhkW2ldIC09IHlkW2ldO1xuICB9XG4gIGZvciAoOyB4ZFstLWxlbl0gPT09IDA7IClcbiAgICB4ZC5wb3AoKTtcbiAgZm9yICg7IHhkWzBdID09PSAwOyB4ZC5zaGlmdCgpKVxuICAgIC0tZTtcbiAgaWYgKCF4ZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3Iocm0gPT09IDMgPyAtMCA6IDApO1xuICB5LmQgPSB4ZDtcbiAgeS5lID0gZ2V0QmFzZTEwRXhwb25lbnQoeGQsIGUpO1xuICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbn07XG5QLm1vZHVsbyA9IFAubW9kID0gZnVuY3Rpb24oeSkge1xuICB2YXIgcSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB5ID0gbmV3IEN0b3IoeSk7XG4gIGlmICgheC5kIHx8ICF5LnMgfHwgeS5kICYmICF5LmRbMF0pXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmICgheS5kIHx8IHguZCAmJiAheC5kWzBdKSB7XG4gICAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBDdG9yLnByZWNpc2lvbiwgQ3Rvci5yb3VuZGluZyk7XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgaWYgKEN0b3IubW9kdWxvID09IDkpIHtcbiAgICBxID0gZGl2aWRlKHgsIHkuYWJzKCksIDAsIDMsIDEpO1xuICAgIHEucyAqPSB5LnM7XG4gIH0gZWxzZSB7XG4gICAgcSA9IGRpdmlkZSh4LCB5LCAwLCBDdG9yLm1vZHVsbywgMSk7XG4gIH1cbiAgcSA9IHEudGltZXMoeSk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHgubWludXMocSk7XG59O1xuUC5uYXR1cmFsRXhwb25lbnRpYWwgPSBQLmV4cCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmF0dXJhbEV4cG9uZW50aWFsKHRoaXMpO1xufTtcblAubmF0dXJhbExvZ2FyaXRobSA9IFAubG4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5hdHVyYWxMb2dhcml0aG0odGhpcyk7XG59O1xuUC5uZWdhdGVkID0gUC5uZWcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKTtcbiAgeC5zID0gLXgucztcbiAgcmV0dXJuIGZpbmFsaXNlKHgpO1xufTtcblAucGx1cyA9IFAuYWRkID0gZnVuY3Rpb24oeSkge1xuICB2YXIgY2FycnksIGQsIGUsIGksIGssIGxlbiwgcHIsIHJtLCB4ZCwgeWQsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeSA9IG5ldyBDdG9yKHkpO1xuICBpZiAoIXguZCB8fCAheS5kKSB7XG4gICAgaWYgKCF4LnMgfHwgIXkucylcbiAgICAgIHkgPSBuZXcgQ3RvcihOYU4pO1xuICAgIGVsc2UgaWYgKCF4LmQpXG4gICAgICB5ID0gbmV3IEN0b3IoeS5kIHx8IHgucyA9PT0geS5zID8geCA6IE5hTik7XG4gICAgcmV0dXJuIHk7XG4gIH1cbiAgaWYgKHgucyAhPSB5LnMpIHtcbiAgICB5LnMgPSAteS5zO1xuICAgIHJldHVybiB4Lm1pbnVzKHkpO1xuICB9XG4gIHhkID0geC5kO1xuICB5ZCA9IHkuZDtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoIXhkWzBdIHx8ICF5ZFswXSkge1xuICAgIGlmICgheWRbMF0pXG4gICAgICB5ID0gbmV3IEN0b3IoeCk7XG4gICAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgcHIsIHJtKSA6IHk7XG4gIH1cbiAgayA9IG1hdGhmbG9vcih4LmUgLyBMT0dfQkFTRSk7XG4gIGUgPSBtYXRoZmxvb3IoeS5lIC8gTE9HX0JBU0UpO1xuICB4ZCA9IHhkLnNsaWNlKCk7XG4gIGkgPSBrIC0gZTtcbiAgaWYgKGkpIHtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIGQgPSB4ZDtcbiAgICAgIGkgPSAtaTtcbiAgICAgIGxlbiA9IHlkLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9IHlkO1xuICAgICAgZSA9IGs7XG4gICAgICBsZW4gPSB4ZC5sZW5ndGg7XG4gICAgfVxuICAgIGsgPSBNYXRoLmNlaWwocHIgLyBMT0dfQkFTRSk7XG4gICAgbGVuID0gayA+IGxlbiA/IGsgKyAxIDogbGVuICsgMTtcbiAgICBpZiAoaSA+IGxlbikge1xuICAgICAgaSA9IGxlbjtcbiAgICAgIGQubGVuZ3RoID0gMTtcbiAgICB9XG4gICAgZC5yZXZlcnNlKCk7XG4gICAgZm9yICg7IGktLTsgKVxuICAgICAgZC5wdXNoKDApO1xuICAgIGQucmV2ZXJzZSgpO1xuICB9XG4gIGxlbiA9IHhkLmxlbmd0aDtcbiAgaSA9IHlkLmxlbmd0aDtcbiAgaWYgKGxlbiAtIGkgPCAwKSB7XG4gICAgaSA9IGxlbjtcbiAgICBkID0geWQ7XG4gICAgeWQgPSB4ZDtcbiAgICB4ZCA9IGQ7XG4gIH1cbiAgZm9yIChjYXJyeSA9IDA7IGk7ICkge1xuICAgIGNhcnJ5ID0gKHhkWy0taV0gPSB4ZFtpXSArIHlkW2ldICsgY2FycnkpIC8gQkFTRSB8IDA7XG4gICAgeGRbaV0gJT0gQkFTRTtcbiAgfVxuICBpZiAoY2FycnkpIHtcbiAgICB4ZC51bnNoaWZ0KGNhcnJ5KTtcbiAgICArK2U7XG4gIH1cbiAgZm9yIChsZW4gPSB4ZC5sZW5ndGg7IHhkWy0tbGVuXSA9PSAwOyApXG4gICAgeGQucG9wKCk7XG4gIHkuZCA9IHhkO1xuICB5LmUgPSBnZXRCYXNlMTBFeHBvbmVudCh4ZCwgZSk7XG4gIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIHByLCBybSkgOiB5O1xufTtcblAucHJlY2lzaW9uID0gUC5zZCA9IGZ1bmN0aW9uKHopIHtcbiAgdmFyIGssIHggPSB0aGlzO1xuICBpZiAoeiAhPT0gdm9pZCAwICYmIHogIT09ICEheiAmJiB6ICE9PSAxICYmIHogIT09IDApXG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgeik7XG4gIGlmICh4LmQpIHtcbiAgICBrID0gZ2V0UHJlY2lzaW9uKHguZCk7XG4gICAgaWYgKHogJiYgeC5lICsgMSA+IGspXG4gICAgICBrID0geC5lICsgMTtcbiAgfSBlbHNlIHtcbiAgICBrID0gTmFOO1xuICB9XG4gIHJldHVybiBrO1xufTtcblAucm91bmQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKHgpLCB4LmUgKyAxLCBDdG9yLnJvdW5kaW5nKTtcbn07XG5QLnNpbmUgPSBQLnNpbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIExPR19CQVNFO1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHNpbmUoQ3RvciwgdG9MZXNzVGhhbkhhbGZQaShDdG9yLCB4KSk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHF1YWRyYW50ID4gMiA/IHgubmVnKCkgOiB4LCBwciwgcm0sIHRydWUpO1xufTtcblAuc3F1YXJlUm9vdCA9IFAuc3FydCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbSwgbiwgc2QsIHIsIHJlcCwgdCwgeCA9IHRoaXMsIGQgPSB4LmQsIGUgPSB4LmUsIHMgPSB4LnMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAocyAhPT0gMSB8fCAhZCB8fCAhZFswXSkge1xuICAgIHJldHVybiBuZXcgQ3RvcighcyB8fCBzIDwgMCAmJiAoIWQgfHwgZFswXSkgPyBOYU4gOiBkID8geCA6IDEgLyAwKTtcbiAgfVxuICBleHRlcm5hbCA9IGZhbHNlO1xuICBzID0gTWF0aC5zcXJ0KCt4KTtcbiAgaWYgKHMgPT0gMCB8fCBzID09IDEgLyAwKSB7XG4gICAgbiA9IGRpZ2l0c1RvU3RyaW5nKGQpO1xuICAgIGlmICgobi5sZW5ndGggKyBlKSAlIDIgPT0gMClcbiAgICAgIG4gKz0gXCIwXCI7XG4gICAgcyA9IE1hdGguc3FydChuKTtcbiAgICBlID0gbWF0aGZsb29yKChlICsgMSkgLyAyKSAtIChlIDwgMCB8fCBlICUgMik7XG4gICAgaWYgKHMgPT0gMSAvIDApIHtcbiAgICAgIG4gPSBcIjVlXCIgKyBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuID0gcy50b0V4cG9uZW50aWFsKCk7XG4gICAgICBuID0gbi5zbGljZSgwLCBuLmluZGV4T2YoXCJlXCIpICsgMSkgKyBlO1xuICAgIH1cbiAgICByID0gbmV3IEN0b3Iobik7XG4gIH0gZWxzZSB7XG4gICAgciA9IG5ldyBDdG9yKHMudG9TdHJpbmcoKSk7XG4gIH1cbiAgc2QgPSAoZSA9IEN0b3IucHJlY2lzaW9uKSArIDM7XG4gIGZvciAoOyA7ICkge1xuICAgIHQgPSByO1xuICAgIHIgPSB0LnBsdXMoZGl2aWRlKHgsIHQsIHNkICsgMiwgMSkpLnRpbWVzKDAuNSk7XG4gICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgc2QpID09PSAobiA9IGRpZ2l0c1RvU3RyaW5nKHIuZCkpLnNsaWNlKDAsIHNkKSkge1xuICAgICAgbiA9IG4uc2xpY2Uoc2QgLSAzLCBzZCArIDEpO1xuICAgICAgaWYgKG4gPT0gXCI5OTk5XCIgfHwgIXJlcCAmJiBuID09IFwiNDk5OVwiKSB7XG4gICAgICAgIGlmICghcmVwKSB7XG4gICAgICAgICAgZmluYWxpc2UodCwgZSArIDEsIDApO1xuICAgICAgICAgIGlmICh0LnRpbWVzKHQpLmVxKHgpKSB7XG4gICAgICAgICAgICByID0gdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZCArPSA0O1xuICAgICAgICByZXAgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCErbiB8fCAhK24uc2xpY2UoMSkgJiYgbi5jaGFyQXQoMCkgPT0gXCI1XCIpIHtcbiAgICAgICAgICBmaW5hbGlzZShyLCBlICsgMSwgMSk7XG4gICAgICAgICAgbSA9ICFyLnRpbWVzKHIpLmVxKHgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiBmaW5hbGlzZShyLCBlLCBDdG9yLnJvdW5kaW5nLCBtKTtcbn07XG5QLnRhbmdlbnQgPSBQLnRhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDEwO1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHguc2luKCk7XG4gIHgucyA9IDE7XG4gIHggPSBkaXZpZGUoeCwgbmV3IEN0b3IoMSkubWludXMoeC50aW1lcyh4KSkuc3FydCgpLCBwciArIDEwLCAwKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UocXVhZHJhbnQgPT0gMiB8fCBxdWFkcmFudCA9PSA0ID8geC5uZWcoKSA6IHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC50aW1lcyA9IFAubXVsID0gZnVuY3Rpb24oeSkge1xuICB2YXIgY2FycnksIGUsIGksIGssIHIsIHJMLCB0LCB4ZEwsIHlkTCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCB4ZCA9IHguZCwgeWQgPSAoeSA9IG5ldyBDdG9yKHkpKS5kO1xuICB5LnMgKj0geC5zO1xuICBpZiAoIXhkIHx8ICF4ZFswXSB8fCAheWQgfHwgIXlkWzBdKSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKCF5LnMgfHwgeGQgJiYgIXhkWzBdICYmICF5ZCB8fCB5ZCAmJiAheWRbMF0gJiYgIXhkID8gTmFOIDogIXhkIHx8ICF5ZCA/IHkucyAvIDAgOiB5LnMgKiAwKTtcbiAgfVxuICBlID0gbWF0aGZsb29yKHguZSAvIExPR19CQVNFKSArIG1hdGhmbG9vcih5LmUgLyBMT0dfQkFTRSk7XG4gIHhkTCA9IHhkLmxlbmd0aDtcbiAgeWRMID0geWQubGVuZ3RoO1xuICBpZiAoeGRMIDwgeWRMKSB7XG4gICAgciA9IHhkO1xuICAgIHhkID0geWQ7XG4gICAgeWQgPSByO1xuICAgIHJMID0geGRMO1xuICAgIHhkTCA9IHlkTDtcbiAgICB5ZEwgPSByTDtcbiAgfVxuICByID0gW107XG4gIHJMID0geGRMICsgeWRMO1xuICBmb3IgKGkgPSByTDsgaS0tOyApXG4gICAgci5wdXNoKDApO1xuICBmb3IgKGkgPSB5ZEw7IC0taSA+PSAwOyApIHtcbiAgICBjYXJyeSA9IDA7XG4gICAgZm9yIChrID0geGRMICsgaTsgayA+IGk7ICkge1xuICAgICAgdCA9IHJba10gKyB5ZFtpXSAqIHhkW2sgLSBpIC0gMV0gKyBjYXJyeTtcbiAgICAgIHJbay0tXSA9IHQgJSBCQVNFIHwgMDtcbiAgICAgIGNhcnJ5ID0gdCAvIEJBU0UgfCAwO1xuICAgIH1cbiAgICByW2tdID0gKHJba10gKyBjYXJyeSkgJSBCQVNFIHwgMDtcbiAgfVxuICBmb3IgKDsgIXJbLS1yTF07IClcbiAgICByLnBvcCgpO1xuICBpZiAoY2FycnkpXG4gICAgKytlO1xuICBlbHNlXG4gICAgci5zaGlmdCgpO1xuICB5LmQgPSByO1xuICB5LmUgPSBnZXRCYXNlMTBFeHBvbmVudChyLCBlKTtcbiAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgQ3Rvci5wcmVjaXNpb24sIEN0b3Iucm91bmRpbmcpIDogeTtcbn07XG5QLnRvQmluYXJ5ID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHJldHVybiB0b1N0cmluZ0JpbmFyeSh0aGlzLCAyLCBzZCwgcm0pO1xufTtcblAudG9EZWNpbWFsUGxhY2VzID0gUC50b0RQID0gZnVuY3Rpb24oZHAsIHJtKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHggPSBuZXcgQ3Rvcih4KTtcbiAgaWYgKGRwID09PSB2b2lkIDApXG4gICAgcmV0dXJuIHg7XG4gIGNoZWNrSW50MzIoZHAsIDAsIE1BWF9ESUdJVFMpO1xuICBpZiAocm0gPT09IHZvaWQgMClcbiAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGVsc2VcbiAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgcmV0dXJuIGZpbmFsaXNlKHgsIGRwICsgeC5lICsgMSwgcm0pO1xufTtcblAudG9FeHBvbmVudGlhbCA9IGZ1bmN0aW9uKGRwLCBybSkge1xuICB2YXIgc3RyLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChkcCA9PT0gdm9pZCAwKSB7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tJbnQzMihkcCwgMCwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gICAgeCA9IGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBkcCArIDEsIHJtKTtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB0cnVlLCBkcCArIDEpO1xuICB9XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRvRml4ZWQgPSBmdW5jdGlvbihkcCwgcm0pIHtcbiAgdmFyIHN0ciwgeSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoZHAgPT09IHZvaWQgMCkge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrSW50MzIoZHAsIDAsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIHkgPSBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgZHAgKyB4LmUgKyAxLCBybSk7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeSwgZmFsc2UsIGRwICsgeS5lICsgMSk7XG4gIH1cbiAgcmV0dXJuIHguaXNOZWcoKSAmJiAheC5pc1plcm8oKSA/IFwiLVwiICsgc3RyIDogc3RyO1xufTtcblAudG9GcmFjdGlvbiA9IGZ1bmN0aW9uKG1heEQpIHtcbiAgdmFyIGQsIGQwLCBkMSwgZDIsIGUsIGssIG4sIG4wLCBuMSwgcHIsIHEsIHIsIHggPSB0aGlzLCB4ZCA9IHguZCwgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheGQpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBuMSA9IGQwID0gbmV3IEN0b3IoMSk7XG4gIGQxID0gbjAgPSBuZXcgQ3RvcigwKTtcbiAgZCA9IG5ldyBDdG9yKGQxKTtcbiAgZSA9IGQuZSA9IGdldFByZWNpc2lvbih4ZCkgLSB4LmUgLSAxO1xuICBrID0gZSAlIExPR19CQVNFO1xuICBkLmRbMF0gPSBtYXRocG93KDEwLCBrIDwgMCA/IExPR19CQVNFICsgayA6IGspO1xuICBpZiAobWF4RCA9PSBudWxsKSB7XG4gICAgbWF4RCA9IGUgPiAwID8gZCA6IG4xO1xuICB9IGVsc2Uge1xuICAgIG4gPSBuZXcgQ3RvcihtYXhEKTtcbiAgICBpZiAoIW4uaXNJbnQoKSB8fCBuLmx0KG4xKSlcbiAgICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIG4pO1xuICAgIG1heEQgPSBuLmd0KGQpID8gZSA+IDAgPyBkIDogbjEgOiBuO1xuICB9XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIG4gPSBuZXcgQ3RvcihkaWdpdHNUb1N0cmluZyh4ZCkpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBDdG9yLnByZWNpc2lvbiA9IGUgPSB4ZC5sZW5ndGggKiBMT0dfQkFTRSAqIDI7XG4gIGZvciAoOyA7ICkge1xuICAgIHEgPSBkaXZpZGUobiwgZCwgMCwgMSwgMSk7XG4gICAgZDIgPSBkMC5wbHVzKHEudGltZXMoZDEpKTtcbiAgICBpZiAoZDIuY21wKG1heEQpID09IDEpXG4gICAgICBicmVhaztcbiAgICBkMCA9IGQxO1xuICAgIGQxID0gZDI7XG4gICAgZDIgPSBuMTtcbiAgICBuMSA9IG4wLnBsdXMocS50aW1lcyhkMikpO1xuICAgIG4wID0gZDI7XG4gICAgZDIgPSBkO1xuICAgIGQgPSBuLm1pbnVzKHEudGltZXMoZDIpKTtcbiAgICBuID0gZDI7XG4gIH1cbiAgZDIgPSBkaXZpZGUobWF4RC5taW51cyhkMCksIGQxLCAwLCAxLCAxKTtcbiAgbjAgPSBuMC5wbHVzKGQyLnRpbWVzKG4xKSk7XG4gIGQwID0gZDAucGx1cyhkMi50aW1lcyhkMSkpO1xuICBuMC5zID0gbjEucyA9IHgucztcbiAgciA9IGRpdmlkZShuMSwgZDEsIGUsIDEpLm1pbnVzKHgpLmFicygpLmNtcChkaXZpZGUobjAsIGQwLCBlLCAxKS5taW51cyh4KS5hYnMoKSkgPCAxID8gW24xLCBkMV0gOiBbbjAsIGQwXTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gcjtcbn07XG5QLnRvSGV4YWRlY2ltYWwgPSBQLnRvSGV4ID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHJldHVybiB0b1N0cmluZ0JpbmFyeSh0aGlzLCAxNiwgc2QsIHJtKTtcbn07XG5QLnRvTmVhcmVzdCA9IGZ1bmN0aW9uKHksIHJtKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHggPSBuZXcgQ3Rvcih4KTtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIGlmICgheC5kKVxuICAgICAgcmV0dXJuIHg7XG4gICAgeSA9IG5ldyBDdG9yKDEpO1xuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgfSBlbHNlIHtcbiAgICB5ID0gbmV3IEN0b3IoeSk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApIHtcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gICAgfVxuICAgIGlmICgheC5kKVxuICAgICAgcmV0dXJuIHkucyA/IHggOiB5O1xuICAgIGlmICgheS5kKSB7XG4gICAgICBpZiAoeS5zKVxuICAgICAgICB5LnMgPSB4LnM7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG4gIH1cbiAgaWYgKHkuZFswXSkge1xuICAgIGV4dGVybmFsID0gZmFsc2U7XG4gICAgeCA9IGRpdmlkZSh4LCB5LCAwLCBybSwgMSkudGltZXMoeSk7XG4gICAgZXh0ZXJuYWwgPSB0cnVlO1xuICAgIGZpbmFsaXNlKHgpO1xuICB9IGVsc2Uge1xuICAgIHkucyA9IHgucztcbiAgICB4ID0geTtcbiAgfVxuICByZXR1cm4geDtcbn07XG5QLnRvTnVtYmVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiArdGhpcztcbn07XG5QLnRvT2N0YWwgPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgcmV0dXJuIHRvU3RyaW5nQmluYXJ5KHRoaXMsIDgsIHNkLCBybSk7XG59O1xuUC50b1Bvd2VyID0gUC5wb3cgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBlLCBrLCBwciwgciwgcm0sIHMsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgeW4gPSArKHkgPSBuZXcgQ3Rvcih5KSk7XG4gIGlmICgheC5kIHx8ICF5LmQgfHwgIXguZFswXSB8fCAheS5kWzBdKVxuICAgIHJldHVybiBuZXcgQ3RvcihtYXRocG93KCt4LCB5bikpO1xuICB4ID0gbmV3IEN0b3IoeCk7XG4gIGlmICh4LmVxKDEpKVxuICAgIHJldHVybiB4O1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmICh5LmVxKDEpKVxuICAgIHJldHVybiBmaW5hbGlzZSh4LCBwciwgcm0pO1xuICBlID0gbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgaWYgKGUgPj0geS5kLmxlbmd0aCAtIDEgJiYgKGsgPSB5biA8IDAgPyAteW4gOiB5bikgPD0gTUFYX1NBRkVfSU5URUdFUikge1xuICAgIHIgPSBpbnRQb3coQ3RvciwgeCwgaywgcHIpO1xuICAgIHJldHVybiB5LnMgPCAwID8gbmV3IEN0b3IoMSkuZGl2KHIpIDogZmluYWxpc2UociwgcHIsIHJtKTtcbiAgfVxuICBzID0geC5zO1xuICBpZiAocyA8IDApIHtcbiAgICBpZiAoZSA8IHkuZC5sZW5ndGggLSAxKVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gICAgaWYgKCh5LmRbZV0gJiAxKSA9PSAwKVxuICAgICAgcyA9IDE7XG4gICAgaWYgKHguZSA9PSAwICYmIHguZFswXSA9PSAxICYmIHguZC5sZW5ndGggPT0gMSkge1xuICAgICAgeC5zID0gcztcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfVxuICBrID0gbWF0aHBvdygreCwgeW4pO1xuICBlID0gayA9PSAwIHx8ICFpc0Zpbml0ZShrKSA/IG1hdGhmbG9vcih5biAqIChNYXRoLmxvZyhcIjAuXCIgKyBkaWdpdHNUb1N0cmluZyh4LmQpKSAvIE1hdGguTE4xMCArIHguZSArIDEpKSA6IG5ldyBDdG9yKGsgKyBcIlwiKS5lO1xuICBpZiAoZSA+IEN0b3IubWF4RSArIDEgfHwgZSA8IEN0b3IubWluRSAtIDEpXG4gICAgcmV0dXJuIG5ldyBDdG9yKGUgPiAwID8gcyAvIDAgOiAwKTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgQ3Rvci5yb3VuZGluZyA9IHgucyA9IDE7XG4gIGsgPSBNYXRoLm1pbigxMiwgKGUgKyBcIlwiKS5sZW5ndGgpO1xuICByID0gbmF0dXJhbEV4cG9uZW50aWFsKHkudGltZXMobmF0dXJhbExvZ2FyaXRobSh4LCBwciArIGspKSwgcHIpO1xuICBpZiAoci5kKSB7XG4gICAgciA9IGZpbmFsaXNlKHIsIHByICsgNSwgMSk7XG4gICAgaWYgKGNoZWNrUm91bmRpbmdEaWdpdHMoci5kLCBwciwgcm0pKSB7XG4gICAgICBlID0gcHIgKyAxMDtcbiAgICAgIHIgPSBmaW5hbGlzZShuYXR1cmFsRXhwb25lbnRpYWwoeS50aW1lcyhuYXR1cmFsTG9nYXJpdGhtKHgsIGUgKyBrKSksIGUpLCBlICsgNSwgMSk7XG4gICAgICBpZiAoK2RpZ2l0c1RvU3RyaW5nKHIuZCkuc2xpY2UocHIgKyAxLCBwciArIDE1KSArIDEgPT0gMWUxNCkge1xuICAgICAgICByID0gZmluYWxpc2UociwgcHIgKyAxLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgci5zID0gcztcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZShyLCBwciwgcm0pO1xufTtcblAudG9QcmVjaXNpb24gPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgdmFyIHN0ciwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoc2QgPT09IHZvaWQgMCkge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHguZSA8PSBDdG9yLnRvRXhwTmVnIHx8IHguZSA+PSBDdG9yLnRvRXhwUG9zKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgICB4ID0gZmluYWxpc2UobmV3IEN0b3IoeCksIHNkLCBybSk7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgc2QgPD0geC5lIHx8IHguZSA8PSBDdG9yLnRvRXhwTmVnLCBzZCk7XG4gIH1cbiAgcmV0dXJuIHguaXNOZWcoKSAmJiAheC5pc1plcm8oKSA/IFwiLVwiICsgc3RyIDogc3RyO1xufTtcblAudG9TaWduaWZpY2FudERpZ2l0cyA9IFAudG9TRCA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoc2QgPT09IHZvaWQgMCkge1xuICAgIHNkID0gQ3Rvci5wcmVjaXNpb247XG4gICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrSW50MzIoc2QsIDEsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICB9XG4gIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgc2QsIHJtKTtcbn07XG5QLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHguZSA8PSBDdG9yLnRvRXhwTmVnIHx8IHguZSA+PSBDdG9yLnRvRXhwUG9zKTtcbiAgcmV0dXJuIHguaXNOZWcoKSAmJiAheC5pc1plcm8oKSA/IFwiLVwiICsgc3RyIDogc3RyO1xufTtcblAudHJ1bmNhdGVkID0gUC50cnVuYyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmluYWxpc2UobmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyksIHRoaXMuZSArIDEsIDEpO1xufTtcblAudmFsdWVPZiA9IFAudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHguZSA8PSBDdG9yLnRvRXhwTmVnIHx8IHguZSA+PSBDdG9yLnRvRXhwUG9zKTtcbiAgcmV0dXJuIHguaXNOZWcoKSA/IFwiLVwiICsgc3RyIDogc3RyO1xufTtcbmZ1bmN0aW9uIGRpZ2l0c1RvU3RyaW5nKGQpIHtcbiAgdmFyIGksIGssIHdzLCBpbmRleE9mTGFzdFdvcmQgPSBkLmxlbmd0aCAtIDEsIHN0ciA9IFwiXCIsIHcgPSBkWzBdO1xuICBpZiAoaW5kZXhPZkxhc3RXb3JkID4gMCkge1xuICAgIHN0ciArPSB3O1xuICAgIGZvciAoaSA9IDE7IGkgPCBpbmRleE9mTGFzdFdvcmQ7IGkrKykge1xuICAgICAgd3MgPSBkW2ldICsgXCJcIjtcbiAgICAgIGsgPSBMT0dfQkFTRSAtIHdzLmxlbmd0aDtcbiAgICAgIGlmIChrKVxuICAgICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcbiAgICAgIHN0ciArPSB3cztcbiAgICB9XG4gICAgdyA9IGRbaV07XG4gICAgd3MgPSB3ICsgXCJcIjtcbiAgICBrID0gTE9HX0JBU0UgLSB3cy5sZW5ndGg7XG4gICAgaWYgKGspXG4gICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcbiAgfSBlbHNlIGlmICh3ID09PSAwKSB7XG4gICAgcmV0dXJuIFwiMFwiO1xuICB9XG4gIGZvciAoOyB3ICUgMTAgPT09IDA7IClcbiAgICB3IC89IDEwO1xuICByZXR1cm4gc3RyICsgdztcbn1cbmZ1bmN0aW9uIGNoZWNrSW50MzIoaSwgbWluMiwgbWF4Mikge1xuICBpZiAoaSAhPT0gfn5pIHx8IGkgPCBtaW4yIHx8IGkgPiBtYXgyKSB7XG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgaSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrUm91bmRpbmdEaWdpdHMoZCwgaSwgcm0sIHJlcGVhdGluZykge1xuICB2YXIgZGksIGssIHIsIHJkO1xuICBmb3IgKGsgPSBkWzBdOyBrID49IDEwOyBrIC89IDEwKVxuICAgIC0taTtcbiAgaWYgKC0taSA8IDApIHtcbiAgICBpICs9IExPR19CQVNFO1xuICAgIGRpID0gMDtcbiAgfSBlbHNlIHtcbiAgICBkaSA9IE1hdGguY2VpbCgoaSArIDEpIC8gTE9HX0JBU0UpO1xuICAgIGkgJT0gTE9HX0JBU0U7XG4gIH1cbiAgayA9IG1hdGhwb3coMTAsIExPR19CQVNFIC0gaSk7XG4gIHJkID0gZFtkaV0gJSBrIHwgMDtcbiAgaWYgKHJlcGVhdGluZyA9PSBudWxsKSB7XG4gICAgaWYgKGkgPCAzKSB7XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICByZCA9IHJkIC8gMTAwIHwgMDtcbiAgICAgIGVsc2UgaWYgKGkgPT0gMSlcbiAgICAgICAgcmQgPSByZCAvIDEwIHwgMDtcbiAgICAgIHIgPSBybSA8IDQgJiYgcmQgPT0gOTk5OTkgfHwgcm0gPiAzICYmIHJkID09IDQ5OTk5IHx8IHJkID09IDVlNCB8fCByZCA9PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gKHJtIDwgNCAmJiByZCArIDEgPT0gayB8fCBybSA+IDMgJiYgcmQgKyAxID09IGsgLyAyKSAmJiAoZFtkaSArIDFdIC8gayAvIDEwMCB8IDApID09IG1hdGhwb3coMTAsIGkgLSAyKSAtIDEgfHwgKHJkID09IGsgLyAyIHx8IHJkID09IDApICYmIChkW2RpICsgMV0gLyBrIC8gMTAwIHwgMCkgPT0gMDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGkgPCA0KSB7XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICByZCA9IHJkIC8gMWUzIHwgMDtcbiAgICAgIGVsc2UgaWYgKGkgPT0gMSlcbiAgICAgICAgcmQgPSByZCAvIDEwMCB8IDA7XG4gICAgICBlbHNlIGlmIChpID09IDIpXG4gICAgICAgIHJkID0gcmQgLyAxMCB8IDA7XG4gICAgICByID0gKHJlcGVhdGluZyB8fCBybSA8IDQpICYmIHJkID09IDk5OTkgfHwgIXJlcGVhdGluZyAmJiBybSA+IDMgJiYgcmQgPT0gNDk5OTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9ICgocmVwZWF0aW5nIHx8IHJtIDwgNCkgJiYgcmQgKyAxID09IGsgfHwgIXJlcGVhdGluZyAmJiBybSA+IDMgJiYgcmQgKyAxID09IGsgLyAyKSAmJiAoZFtkaSArIDFdIC8gayAvIDFlMyB8IDApID09IG1hdGhwb3coMTAsIGkgLSAzKSAtIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufVxuZnVuY3Rpb24gY29udmVydEJhc2Uoc3RyLCBiYXNlSW4sIGJhc2VPdXQpIHtcbiAgdmFyIGosIGFyciA9IFswXSwgYXJyTCwgaSA9IDAsIHN0ckwgPSBzdHIubGVuZ3RoO1xuICBmb3IgKDsgaSA8IHN0ckw7ICkge1xuICAgIGZvciAoYXJyTCA9IGFyci5sZW5ndGg7IGFyckwtLTsgKVxuICAgICAgYXJyW2FyckxdICo9IGJhc2VJbjtcbiAgICBhcnJbMF0gKz0gTlVNRVJBTFMuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpO1xuICAgIGZvciAoaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChhcnJbal0gPiBiYXNlT3V0IC0gMSkge1xuICAgICAgICBpZiAoYXJyW2ogKyAxXSA9PT0gdm9pZCAwKVxuICAgICAgICAgIGFycltqICsgMV0gPSAwO1xuICAgICAgICBhcnJbaiArIDFdICs9IGFycltqXSAvIGJhc2VPdXQgfCAwO1xuICAgICAgICBhcnJbal0gJT0gYmFzZU91dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG59XG5mdW5jdGlvbiBjb3NpbmUoQ3RvciwgeCkge1xuICB2YXIgaywgbGVuLCB5O1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4geDtcbiAgbGVuID0geC5kLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDMyKSB7XG4gICAgayA9IE1hdGguY2VpbChsZW4gLyAzKTtcbiAgICB5ID0gKDEgLyB0aW55UG93KDQsIGspKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIGsgPSAxNjtcbiAgICB5ID0gXCIyLjMyODMwNjQzNjUzODY5NjI4OTA2MjVlLTEwXCI7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gKz0gaztcbiAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAxLCB4LnRpbWVzKHkpLCBuZXcgQ3RvcigxKSk7XG4gIGZvciAodmFyIGkgPSBrOyBpLS07ICkge1xuICAgIHZhciBjb3MyeCA9IHgudGltZXMoeCk7XG4gICAgeCA9IGNvczJ4LnRpbWVzKGNvczJ4KS5taW51cyhjb3MyeCkudGltZXMoOCkucGx1cygxKTtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiAtPSBrO1xuICByZXR1cm4geDtcbn1cbnZhciBkaXZpZGUgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gbXVsdGlwbHlJbnRlZ2VyKHgsIGssIGJhc2UpIHtcbiAgICB2YXIgdGVtcCwgY2FycnkgPSAwLCBpID0geC5sZW5ndGg7XG4gICAgZm9yICh4ID0geC5zbGljZSgpOyBpLS07ICkge1xuICAgICAgdGVtcCA9IHhbaV0gKiBrICsgY2Fycnk7XG4gICAgICB4W2ldID0gdGVtcCAlIGJhc2UgfCAwO1xuICAgICAgY2FycnkgPSB0ZW1wIC8gYmFzZSB8IDA7XG4gICAgfVxuICAgIGlmIChjYXJyeSlcbiAgICAgIHgudW5zaGlmdChjYXJyeSk7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgZnVuY3Rpb24gY29tcGFyZShhLCBiLCBhTCwgYkwpIHtcbiAgICB2YXIgaSwgcjtcbiAgICBpZiAoYUwgIT0gYkwpIHtcbiAgICAgIHIgPSBhTCA+IGJMID8gMSA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSByID0gMDsgaSA8IGFMOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT0gYltpXSkge1xuICAgICAgICAgIHIgPSBhW2ldID4gYltpXSA/IDEgOiAtMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBhTCwgYmFzZSkge1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgYUwtLTsgKSB7XG4gICAgICBhW2FMXSAtPSBpO1xuICAgICAgaSA9IGFbYUxdIDwgYlthTF0gPyAxIDogMDtcbiAgICAgIGFbYUxdID0gaSAqIGJhc2UgKyBhW2FMXSAtIGJbYUxdO1xuICAgIH1cbiAgICBmb3IgKDsgIWFbMF0gJiYgYS5sZW5ndGggPiAxOyApXG4gICAgICBhLnNoaWZ0KCk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKHgsIHksIHByLCBybSwgZHAsIGJhc2UpIHtcbiAgICB2YXIgY21wLCBlLCBpLCBrLCBsb2dCYXNlLCBtb3JlLCBwcm9kLCBwcm9kTCwgcSwgcWQsIHJlbSwgcmVtTCwgcmVtMCwgc2QsIHQsIHhpLCB4TCwgeWQwLCB5TCwgeXosIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBzaWduMiA9IHgucyA9PSB5LnMgPyAxIDogLTEsIHhkID0geC5kLCB5ZCA9IHkuZDtcbiAgICBpZiAoIXhkIHx8ICF4ZFswXSB8fCAheWQgfHwgIXlkWzBdKSB7XG4gICAgICByZXR1cm4gbmV3IEN0b3IoIXgucyB8fCAheS5zIHx8ICh4ZCA/IHlkICYmIHhkWzBdID09IHlkWzBdIDogIXlkKSA/IE5hTiA6IHhkICYmIHhkWzBdID09IDAgfHwgIXlkID8gc2lnbjIgKiAwIDogc2lnbjIgLyAwKTtcbiAgICB9XG4gICAgaWYgKGJhc2UpIHtcbiAgICAgIGxvZ0Jhc2UgPSAxO1xuICAgICAgZSA9IHguZSAtIHkuZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9IEJBU0U7XG4gICAgICBsb2dCYXNlID0gTE9HX0JBU0U7XG4gICAgICBlID0gbWF0aGZsb29yKHguZSAvIGxvZ0Jhc2UpIC0gbWF0aGZsb29yKHkuZSAvIGxvZ0Jhc2UpO1xuICAgIH1cbiAgICB5TCA9IHlkLmxlbmd0aDtcbiAgICB4TCA9IHhkLmxlbmd0aDtcbiAgICBxID0gbmV3IEN0b3Ioc2lnbjIpO1xuICAgIHFkID0gcS5kID0gW107XG4gICAgZm9yIChpID0gMDsgeWRbaV0gPT0gKHhkW2ldIHx8IDApOyBpKyspXG4gICAgICA7XG4gICAgaWYgKHlkW2ldID4gKHhkW2ldIHx8IDApKVxuICAgICAgZS0tO1xuICAgIGlmIChwciA9PSBudWxsKSB7XG4gICAgICBzZCA9IHByID0gQ3Rvci5wcmVjaXNpb247XG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgfSBlbHNlIGlmIChkcCkge1xuICAgICAgc2QgPSBwciArICh4LmUgLSB5LmUpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2QgPSBwcjtcbiAgICB9XG4gICAgaWYgKHNkIDwgMCkge1xuICAgICAgcWQucHVzaCgxKTtcbiAgICAgIG1vcmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZCA9IHNkIC8gbG9nQmFzZSArIDIgfCAwO1xuICAgICAgaSA9IDA7XG4gICAgICBpZiAoeUwgPT0gMSkge1xuICAgICAgICBrID0gMDtcbiAgICAgICAgeWQgPSB5ZFswXTtcbiAgICAgICAgc2QrKztcbiAgICAgICAgZm9yICg7IChpIDwgeEwgfHwgaykgJiYgc2QtLTsgaSsrKSB7XG4gICAgICAgICAgdCA9IGsgKiBiYXNlICsgKHhkW2ldIHx8IDApO1xuICAgICAgICAgIHFkW2ldID0gdCAvIHlkIHwgMDtcbiAgICAgICAgICBrID0gdCAlIHlkIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBtb3JlID0gayB8fCBpIDwgeEw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrID0gYmFzZSAvICh5ZFswXSArIDEpIHwgMDtcbiAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgeWQgPSBtdWx0aXBseUludGVnZXIoeWQsIGssIGJhc2UpO1xuICAgICAgICAgIHhkID0gbXVsdGlwbHlJbnRlZ2VyKHhkLCBrLCBiYXNlKTtcbiAgICAgICAgICB5TCA9IHlkLmxlbmd0aDtcbiAgICAgICAgICB4TCA9IHhkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB4aSA9IHlMO1xuICAgICAgICByZW0gPSB4ZC5zbGljZSgwLCB5TCk7XG4gICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xuICAgICAgICBmb3IgKDsgcmVtTCA8IHlMOyApXG4gICAgICAgICAgcmVtW3JlbUwrK10gPSAwO1xuICAgICAgICB5eiA9IHlkLnNsaWNlKCk7XG4gICAgICAgIHl6LnVuc2hpZnQoMCk7XG4gICAgICAgIHlkMCA9IHlkWzBdO1xuICAgICAgICBpZiAoeWRbMV0gPj0gYmFzZSAvIDIpXG4gICAgICAgICAgKyt5ZDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBrID0gMDtcbiAgICAgICAgICBjbXAgPSBjb21wYXJlKHlkLCByZW0sIHlMLCByZW1MKTtcbiAgICAgICAgICBpZiAoY21wIDwgMCkge1xuICAgICAgICAgICAgcmVtMCA9IHJlbVswXTtcbiAgICAgICAgICAgIGlmICh5TCAhPSByZW1MKVxuICAgICAgICAgICAgICByZW0wID0gcmVtMCAqIGJhc2UgKyAocmVtWzFdIHx8IDApO1xuICAgICAgICAgICAgayA9IHJlbTAgLyB5ZDAgfCAwO1xuICAgICAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgICAgIGlmIChrID49IGJhc2UpXG4gICAgICAgICAgICAgICAgayA9IGJhc2UgLSAxO1xuICAgICAgICAgICAgICBwcm9kID0gbXVsdGlwbHlJbnRlZ2VyKHlkLCBrLCBiYXNlKTtcbiAgICAgICAgICAgICAgcHJvZEwgPSBwcm9kLmxlbmd0aDtcbiAgICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgICAgICAgIGNtcCA9IGNvbXBhcmUocHJvZCwgcmVtLCBwcm9kTCwgcmVtTCk7XG4gICAgICAgICAgICAgIGlmIChjbXAgPT0gMSkge1xuICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICBzdWJ0cmFjdChwcm9kLCB5TCA8IHByb2RMID8geXogOiB5ZCwgcHJvZEwsIGJhc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoayA9PSAwKVxuICAgICAgICAgICAgICAgIGNtcCA9IGsgPSAxO1xuICAgICAgICAgICAgICBwcm9kID0geWQuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2RMID0gcHJvZC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocHJvZEwgPCByZW1MKVxuICAgICAgICAgICAgICBwcm9kLnVuc2hpZnQoMCk7XG4gICAgICAgICAgICBzdWJ0cmFjdChyZW0sIHByb2QsIHJlbUwsIGJhc2UpO1xuICAgICAgICAgICAgaWYgKGNtcCA9PSAtMSkge1xuICAgICAgICAgICAgICByZW1MID0gcmVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgY21wID0gY29tcGFyZSh5ZCwgcmVtLCB5TCwgcmVtTCk7XG4gICAgICAgICAgICAgIGlmIChjbXAgPCAxKSB7XG4gICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgIHN1YnRyYWN0KHJlbSwgeUwgPCByZW1MID8geXogOiB5ZCwgcmVtTCwgYmFzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY21wID09PSAwKSB7XG4gICAgICAgICAgICBrKys7XG4gICAgICAgICAgICByZW0gPSBbMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHFkW2krK10gPSBrO1xuICAgICAgICAgIGlmIChjbXAgJiYgcmVtWzBdKSB7XG4gICAgICAgICAgICByZW1bcmVtTCsrXSA9IHhkW3hpXSB8fCAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW0gPSBbeGRbeGldXTtcbiAgICAgICAgICAgIHJlbUwgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKHhpKysgPCB4TCB8fCByZW1bMF0gIT09IHZvaWQgMCkgJiYgc2QtLSk7XG4gICAgICAgIG1vcmUgPSByZW1bMF0gIT09IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGlmICghcWRbMF0pXG4gICAgICAgIHFkLnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmIChsb2dCYXNlID09IDEpIHtcbiAgICAgIHEuZSA9IGU7XG4gICAgICBpbmV4YWN0ID0gbW9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMSwgayA9IHFkWzBdOyBrID49IDEwOyBrIC89IDEwKVxuICAgICAgICBpKys7XG4gICAgICBxLmUgPSBpICsgZSAqIGxvZ0Jhc2UgLSAxO1xuICAgICAgZmluYWxpc2UocSwgZHAgPyBwciArIHEuZSArIDEgOiBwciwgcm0sIG1vcmUpO1xuICAgIH1cbiAgICByZXR1cm4gcTtcbiAgfTtcbn0oKTtcbmZ1bmN0aW9uIGZpbmFsaXNlKHgsIHNkLCBybSwgaXNUcnVuY2F0ZWQpIHtcbiAgdmFyIGRpZ2l0cywgaSwgaiwgaywgcmQsIHJvdW5kVXAsIHcsIHhkLCB4ZGksIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBvdXQ6XG4gICAgaWYgKHNkICE9IG51bGwpIHtcbiAgICAgIHhkID0geC5kO1xuICAgICAgaWYgKCF4ZClcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICBmb3IgKGRpZ2l0cyA9IDEsIGsgPSB4ZFswXTsgayA+PSAxMDsgayAvPSAxMClcbiAgICAgICAgZGlnaXRzKys7XG4gICAgICBpID0gc2QgLSBkaWdpdHM7XG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSBMT0dfQkFTRTtcbiAgICAgICAgaiA9IHNkO1xuICAgICAgICB3ID0geGRbeGRpID0gMF07XG4gICAgICAgIHJkID0gdyAvIG1hdGhwb3coMTAsIGRpZ2l0cyAtIGogLSAxKSAlIDEwIHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhkaSA9IE1hdGguY2VpbCgoaSArIDEpIC8gTE9HX0JBU0UpO1xuICAgICAgICBrID0geGQubGVuZ3RoO1xuICAgICAgICBpZiAoeGRpID49IGspIHtcbiAgICAgICAgICBpZiAoaXNUcnVuY2F0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoOyBrKysgPD0geGRpOyApXG4gICAgICAgICAgICAgIHhkLnB1c2goMCk7XG4gICAgICAgICAgICB3ID0gcmQgPSAwO1xuICAgICAgICAgICAgZGlnaXRzID0gMTtcbiAgICAgICAgICAgIGkgJT0gTE9HX0JBU0U7XG4gICAgICAgICAgICBqID0gaSAtIExPR19CQVNFICsgMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWsgb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gayA9IHhkW3hkaV07XG4gICAgICAgICAgZm9yIChkaWdpdHMgPSAxOyBrID49IDEwOyBrIC89IDEwKVxuICAgICAgICAgICAgZGlnaXRzKys7XG4gICAgICAgICAgaSAlPSBMT0dfQkFTRTtcbiAgICAgICAgICBqID0gaSAtIExPR19CQVNFICsgZGlnaXRzO1xuICAgICAgICAgIHJkID0gaiA8IDAgPyAwIDogdyAvIG1hdGhwb3coMTAsIGRpZ2l0cyAtIGogLSAxKSAlIDEwIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUcnVuY2F0ZWQgPSBpc1RydW5jYXRlZCB8fCBzZCA8IDAgfHwgeGRbeGRpICsgMV0gIT09IHZvaWQgMCB8fCAoaiA8IDAgPyB3IDogdyAlIG1hdGhwb3coMTAsIGRpZ2l0cyAtIGogLSAxKSk7XG4gICAgICByb3VuZFVwID0gcm0gPCA0ID8gKHJkIHx8IGlzVHJ1bmNhdGVkKSAmJiAocm0gPT0gMCB8fCBybSA9PSAoeC5zIDwgMCA/IDMgOiAyKSkgOiByZCA+IDUgfHwgcmQgPT0gNSAmJiAocm0gPT0gNCB8fCBpc1RydW5jYXRlZCB8fCBybSA9PSA2ICYmIChpID4gMCA/IGogPiAwID8gdyAvIG1hdGhwb3coMTAsIGRpZ2l0cyAtIGopIDogMCA6IHhkW3hkaSAtIDFdKSAlIDEwICYgMSB8fCBybSA9PSAoeC5zIDwgMCA/IDggOiA3KSk7XG4gICAgICBpZiAoc2QgPCAxIHx8ICF4ZFswXSkge1xuICAgICAgICB4ZC5sZW5ndGggPSAwO1xuICAgICAgICBpZiAocm91bmRVcCkge1xuICAgICAgICAgIHNkIC09IHguZSArIDE7XG4gICAgICAgICAgeGRbMF0gPSBtYXRocG93KDEwLCAoTE9HX0JBU0UgLSBzZCAlIExPR19CQVNFKSAlIExPR19CQVNFKTtcbiAgICAgICAgICB4LmUgPSAtc2QgfHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4ZFswXSA9IHguZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9XG4gICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgIHhkLmxlbmd0aCA9IHhkaTtcbiAgICAgICAgayA9IDE7XG4gICAgICAgIHhkaS0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGQubGVuZ3RoID0geGRpICsgMTtcbiAgICAgICAgayA9IG1hdGhwb3coMTAsIExPR19CQVNFIC0gaSk7XG4gICAgICAgIHhkW3hkaV0gPSBqID4gMCA/ICh3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaikgJSBtYXRocG93KDEwLCBqKSB8IDApICogayA6IDA7XG4gICAgICB9XG4gICAgICBpZiAocm91bmRVcCkge1xuICAgICAgICBmb3IgKDsgOyApIHtcbiAgICAgICAgICBpZiAoeGRpID09IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDEsIGogPSB4ZFswXTsgaiA+PSAxMDsgaiAvPSAxMClcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaiA9IHhkWzBdICs9IGs7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBqID49IDEwOyBqIC89IDEwKVxuICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICBpZiAoaSAhPSBrKSB7XG4gICAgICAgICAgICAgIHguZSsrO1xuICAgICAgICAgICAgICBpZiAoeGRbMF0gPT0gQkFTRSlcbiAgICAgICAgICAgICAgICB4ZFswXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeGRbeGRpXSArPSBrO1xuICAgICAgICAgICAgaWYgKHhkW3hkaV0gIT0gQkFTRSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB4ZFt4ZGktLV0gPSAwO1xuICAgICAgICAgICAgayA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSB4ZC5sZW5ndGg7IHhkWy0taV0gPT09IDA7IClcbiAgICAgICAgeGQucG9wKCk7XG4gICAgfVxuICBpZiAoZXh0ZXJuYWwpIHtcbiAgICBpZiAoeC5lID4gQ3Rvci5tYXhFKSB7XG4gICAgICB4LmQgPSBudWxsO1xuICAgICAgeC5lID0gTmFOO1xuICAgIH0gZWxzZSBpZiAoeC5lIDwgQ3Rvci5taW5FKSB7XG4gICAgICB4LmUgPSAwO1xuICAgICAgeC5kID0gWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIGZpbml0ZVRvU3RyaW5nKHgsIGlzRXhwLCBzZCkge1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbm9uRmluaXRlVG9TdHJpbmcoeCk7XG4gIHZhciBrLCBlID0geC5lLCBzdHIgPSBkaWdpdHNUb1N0cmluZyh4LmQpLCBsZW4gPSBzdHIubGVuZ3RoO1xuICBpZiAoaXNFeHApIHtcbiAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGxlbikgPiAwKSB7XG4gICAgICBzdHIgPSBzdHIuY2hhckF0KDApICsgXCIuXCIgKyBzdHIuc2xpY2UoMSkgKyBnZXRaZXJvU3RyaW5nKGspO1xuICAgIH0gZWxzZSBpZiAobGVuID4gMSkge1xuICAgICAgc3RyID0gc3RyLmNoYXJBdCgwKSArIFwiLlwiICsgc3RyLnNsaWNlKDEpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyAoeC5lIDwgMCA/IFwiZVwiIDogXCJlK1wiKSArIHguZTtcbiAgfSBlbHNlIGlmIChlIDwgMCkge1xuICAgIHN0ciA9IFwiMC5cIiArIGdldFplcm9TdHJpbmcoLWUgLSAxKSArIHN0cjtcbiAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGxlbikgPiAwKVxuICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gIH0gZWxzZSBpZiAoZSA+PSBsZW4pIHtcbiAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhlICsgMSAtIGxlbik7XG4gICAgaWYgKHNkICYmIChrID0gc2QgLSBlIC0gMSkgPiAwKVxuICAgICAgc3RyID0gc3RyICsgXCIuXCIgKyBnZXRaZXJvU3RyaW5nKGspO1xuICB9IGVsc2Uge1xuICAgIGlmICgoayA9IGUgKyAxKSA8IGxlbilcbiAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBrKSArIFwiLlwiICsgc3RyLnNsaWNlKGspO1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApIHtcbiAgICAgIGlmIChlICsgMSA9PT0gbGVuKVxuICAgICAgICBzdHIgKz0gXCIuXCI7XG4gICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIGdldEJhc2UxMEV4cG9uZW50KGRpZ2l0cywgZSkge1xuICB2YXIgdyA9IGRpZ2l0c1swXTtcbiAgZm9yIChlICo9IExPR19CQVNFOyB3ID49IDEwOyB3IC89IDEwKVxuICAgIGUrKztcbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBnZXRMbjEwKEN0b3IsIHNkLCBwcikge1xuICBpZiAoc2QgPiBMTjEwX1BSRUNJU0lPTikge1xuICAgIGV4dGVybmFsID0gdHJ1ZTtcbiAgICBpZiAocHIpXG4gICAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICAgIHRocm93IEVycm9yKHByZWNpc2lvbkxpbWl0RXhjZWVkZWQpO1xuICB9XG4gIHJldHVybiBmaW5hbGlzZShuZXcgQ3RvcihMTjEwKSwgc2QsIDEsIHRydWUpO1xufVxuZnVuY3Rpb24gZ2V0UGkoQ3Rvciwgc2QsIHJtKSB7XG4gIGlmIChzZCA+IFBJX1BSRUNJU0lPTilcbiAgICB0aHJvdyBFcnJvcihwcmVjaXNpb25MaW1pdEV4Y2VlZGVkKTtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKFBJKSwgc2QsIHJtLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldFByZWNpc2lvbihkaWdpdHMpIHtcbiAgdmFyIHcgPSBkaWdpdHMubGVuZ3RoIC0gMSwgbGVuID0gdyAqIExPR19CQVNFICsgMTtcbiAgdyA9IGRpZ2l0c1t3XTtcbiAgaWYgKHcpIHtcbiAgICBmb3IgKDsgdyAlIDEwID09IDA7IHcgLz0gMTApXG4gICAgICBsZW4tLTtcbiAgICBmb3IgKHcgPSBkaWdpdHNbMF07IHcgPj0gMTA7IHcgLz0gMTApXG4gICAgICBsZW4rKztcbiAgfVxuICByZXR1cm4gbGVuO1xufVxuZnVuY3Rpb24gZ2V0WmVyb1N0cmluZyhrKSB7XG4gIHZhciB6cyA9IFwiXCI7XG4gIGZvciAoOyBrLS07IClcbiAgICB6cyArPSBcIjBcIjtcbiAgcmV0dXJuIHpzO1xufVxuZnVuY3Rpb24gaW50UG93KEN0b3IsIHgsIG4sIHByKSB7XG4gIHZhciBpc1RydW5jYXRlZCwgciA9IG5ldyBDdG9yKDEpLCBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UgKyA0KTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgZm9yICg7IDsgKSB7XG4gICAgaWYgKG4gJSAyKSB7XG4gICAgICByID0gci50aW1lcyh4KTtcbiAgICAgIGlmICh0cnVuY2F0ZShyLmQsIGspKVxuICAgICAgICBpc1RydW5jYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIG4gPSBtYXRoZmxvb3IobiAvIDIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBuID0gci5kLmxlbmd0aCAtIDE7XG4gICAgICBpZiAoaXNUcnVuY2F0ZWQgJiYgci5kW25dID09PSAwKVxuICAgICAgICArK3IuZFtuXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB4ID0geC50aW1lcyh4KTtcbiAgICB0cnVuY2F0ZSh4LmQsIGspO1xuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBpc09kZChuKSB7XG4gIHJldHVybiBuLmRbbi5kLmxlbmd0aCAtIDFdICYgMTtcbn1cbmZ1bmN0aW9uIG1heE9yTWluKEN0b3IsIGFyZ3MsIGx0Z3QpIHtcbiAgdmFyIHksIHggPSBuZXcgQ3RvcihhcmdzWzBdKSwgaSA9IDA7XG4gIGZvciAoOyArK2kgPCBhcmdzLmxlbmd0aDsgKSB7XG4gICAgeSA9IG5ldyBDdG9yKGFyZ3NbaV0pO1xuICAgIGlmICgheS5zKSB7XG4gICAgICB4ID0geTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoeFtsdGd0XSh5KSkge1xuICAgICAgeCA9IHk7XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufVxuZnVuY3Rpb24gbmF0dXJhbEV4cG9uZW50aWFsKHgsIHNkKSB7XG4gIHZhciBkZW5vbWluYXRvciwgZ3VhcmQsIGosIHBvdzIsIHN1bTIsIHQsIHdwciwgcmVwID0gMCwgaSA9IDAsIGsgPSAwLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgcm0gPSBDdG9yLnJvdW5kaW5nLCBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBpZiAoIXguZCB8fCAheC5kWzBdIHx8IHguZSA+IDE3KSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKHguZCA/ICF4LmRbMF0gPyAxIDogeC5zIDwgMCA/IDAgOiAxIC8gMCA6IHgucyA/IHgucyA8IDAgPyAwIDogeCA6IDAgLyAwKTtcbiAgfVxuICBpZiAoc2QgPT0gbnVsbCkge1xuICAgIGV4dGVybmFsID0gZmFsc2U7XG4gICAgd3ByID0gcHI7XG4gIH0gZWxzZSB7XG4gICAgd3ByID0gc2Q7XG4gIH1cbiAgdCA9IG5ldyBDdG9yKDAuMDMxMjUpO1xuICB3aGlsZSAoeC5lID4gLTIpIHtcbiAgICB4ID0geC50aW1lcyh0KTtcbiAgICBrICs9IDU7XG4gIH1cbiAgZ3VhcmQgPSBNYXRoLmxvZyhtYXRocG93KDIsIGspKSAvIE1hdGguTE4xMCAqIDIgKyA1IHwgMDtcbiAgd3ByICs9IGd1YXJkO1xuICBkZW5vbWluYXRvciA9IHBvdzIgPSBzdW0yID0gbmV3IEN0b3IoMSk7XG4gIEN0b3IucHJlY2lzaW9uID0gd3ByO1xuICBmb3IgKDsgOyApIHtcbiAgICBwb3cyID0gZmluYWxpc2UocG93Mi50aW1lcyh4KSwgd3ByLCAxKTtcbiAgICBkZW5vbWluYXRvciA9IGRlbm9taW5hdG9yLnRpbWVzKCsraSk7XG4gICAgdCA9IHN1bTIucGx1cyhkaXZpZGUocG93MiwgZGVub21pbmF0b3IsIHdwciwgMSkpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHdwcikgPT09IGRpZ2l0c1RvU3RyaW5nKHN1bTIuZCkuc2xpY2UoMCwgd3ByKSkge1xuICAgICAgaiA9IGs7XG4gICAgICB3aGlsZSAoai0tKVxuICAgICAgICBzdW0yID0gZmluYWxpc2Uoc3VtMi50aW1lcyhzdW0yKSwgd3ByLCAxKTtcbiAgICAgIGlmIChzZCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChyZXAgPCAzICYmIGNoZWNrUm91bmRpbmdEaWdpdHMoc3VtMi5kLCB3cHIgLSBndWFyZCwgcm0sIHJlcCkpIHtcbiAgICAgICAgICBDdG9yLnByZWNpc2lvbiA9IHdwciArPSAxMDtcbiAgICAgICAgICBkZW5vbWluYXRvciA9IHBvdzIgPSB0ID0gbmV3IEN0b3IoMSk7XG4gICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgcmVwKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmFsaXNlKHN1bTIsIEN0b3IucHJlY2lzaW9uID0gcHIsIHJtLCBleHRlcm5hbCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICAgICAgICByZXR1cm4gc3VtMjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VtMiA9IHQ7XG4gIH1cbn1cbmZ1bmN0aW9uIG5hdHVyYWxMb2dhcml0aG0oeSwgc2QpIHtcbiAgdmFyIGMsIGMwLCBkZW5vbWluYXRvciwgZSwgbnVtZXJhdG9yLCByZXAsIHN1bTIsIHQsIHdwciwgeDEsIHgyLCBuID0gMSwgZ3VhcmQgPSAxMCwgeCA9IHksIHhkID0geC5kLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgcm0gPSBDdG9yLnJvdW5kaW5nLCBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBpZiAoeC5zIDwgMCB8fCAheGQgfHwgIXhkWzBdIHx8ICF4LmUgJiYgeGRbMF0gPT0gMSAmJiB4ZC5sZW5ndGggPT0gMSkge1xuICAgIHJldHVybiBuZXcgQ3Rvcih4ZCAmJiAheGRbMF0gPyAtMSAvIDAgOiB4LnMgIT0gMSA/IE5hTiA6IHhkID8gMCA6IHgpO1xuICB9XG4gIGlmIChzZCA9PSBudWxsKSB7XG4gICAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgICB3cHIgPSBwcjtcbiAgfSBlbHNlIHtcbiAgICB3cHIgPSBzZDtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiA9IHdwciArPSBndWFyZDtcbiAgYyA9IGRpZ2l0c1RvU3RyaW5nKHhkKTtcbiAgYzAgPSBjLmNoYXJBdCgwKTtcbiAgaWYgKE1hdGguYWJzKGUgPSB4LmUpIDwgMTVlMTQpIHtcbiAgICB3aGlsZSAoYzAgPCA3ICYmIGMwICE9IDEgfHwgYzAgPT0gMSAmJiBjLmNoYXJBdCgxKSA+IDMpIHtcbiAgICAgIHggPSB4LnRpbWVzKHkpO1xuICAgICAgYyA9IGRpZ2l0c1RvU3RyaW5nKHguZCk7XG4gICAgICBjMCA9IGMuY2hhckF0KDApO1xuICAgICAgbisrO1xuICAgIH1cbiAgICBlID0geC5lO1xuICAgIGlmIChjMCA+IDEpIHtcbiAgICAgIHggPSBuZXcgQ3RvcihcIjAuXCIgKyBjKTtcbiAgICAgIGUrKztcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IG5ldyBDdG9yKGMwICsgXCIuXCIgKyBjLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdCA9IGdldExuMTAoQ3Rvciwgd3ByICsgMiwgcHIpLnRpbWVzKGUgKyBcIlwiKTtcbiAgICB4ID0gbmF0dXJhbExvZ2FyaXRobShuZXcgQ3RvcihjMCArIFwiLlwiICsgYy5zbGljZSgxKSksIHdwciAtIGd1YXJkKS5wbHVzKHQpO1xuICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgcmV0dXJuIHNkID09IG51bGwgPyBmaW5hbGlzZSh4LCBwciwgcm0sIGV4dGVybmFsID0gdHJ1ZSkgOiB4O1xuICB9XG4gIHgxID0geDtcbiAgc3VtMiA9IG51bWVyYXRvciA9IHggPSBkaXZpZGUoeC5taW51cygxKSwgeC5wbHVzKDEpLCB3cHIsIDEpO1xuICB4MiA9IGZpbmFsaXNlKHgudGltZXMoeCksIHdwciwgMSk7XG4gIGRlbm9taW5hdG9yID0gMztcbiAgZm9yICg7IDsgKSB7XG4gICAgbnVtZXJhdG9yID0gZmluYWxpc2UobnVtZXJhdG9yLnRpbWVzKHgyKSwgd3ByLCAxKTtcbiAgICB0ID0gc3VtMi5wbHVzKGRpdmlkZShudW1lcmF0b3IsIG5ldyBDdG9yKGRlbm9taW5hdG9yKSwgd3ByLCAxKSk7XG4gICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgd3ByKSA9PT0gZGlnaXRzVG9TdHJpbmcoc3VtMi5kKS5zbGljZSgwLCB3cHIpKSB7XG4gICAgICBzdW0yID0gc3VtMi50aW1lcygyKTtcbiAgICAgIGlmIChlICE9PSAwKVxuICAgICAgICBzdW0yID0gc3VtMi5wbHVzKGdldExuMTAoQ3Rvciwgd3ByICsgMiwgcHIpLnRpbWVzKGUgKyBcIlwiKSk7XG4gICAgICBzdW0yID0gZGl2aWRlKHN1bTIsIG5ldyBDdG9yKG4pLCB3cHIsIDEpO1xuICAgICAgaWYgKHNkID09IG51bGwpIHtcbiAgICAgICAgaWYgKGNoZWNrUm91bmRpbmdEaWdpdHMoc3VtMi5kLCB3cHIgLSBndWFyZCwgcm0sIHJlcCkpIHtcbiAgICAgICAgICBDdG9yLnByZWNpc2lvbiA9IHdwciArPSBndWFyZDtcbiAgICAgICAgICB0ID0gbnVtZXJhdG9yID0geCA9IGRpdmlkZSh4MS5taW51cygxKSwgeDEucGx1cygxKSwgd3ByLCAxKTtcbiAgICAgICAgICB4MiA9IGZpbmFsaXNlKHgudGltZXMoeCksIHdwciwgMSk7XG4gICAgICAgICAgZGVub21pbmF0b3IgPSByZXAgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmaW5hbGlzZShzdW0yLCBDdG9yLnByZWNpc2lvbiA9IHByLCBybSwgZXh0ZXJuYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgICAgICAgcmV0dXJuIHN1bTI7XG4gICAgICB9XG4gICAgfVxuICAgIHN1bTIgPSB0O1xuICAgIGRlbm9taW5hdG9yICs9IDI7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vbkZpbml0ZVRvU3RyaW5nKHgpIHtcbiAgcmV0dXJuIFN0cmluZyh4LnMgKiB4LnMgLyAwKTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGVjaW1hbCh4LCBzdHIpIHtcbiAgdmFyIGUsIGksIGxlbjtcbiAgaWYgKChlID0gc3RyLmluZGV4T2YoXCIuXCIpKSA+IC0xKVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgaWYgKChpID0gc3RyLnNlYXJjaCgvZS9pKSkgPiAwKSB7XG4gICAgaWYgKGUgPCAwKVxuICAgICAgZSA9IGk7XG4gICAgZSArPSArc3RyLnNsaWNlKGkgKyAxKTtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGkpO1xuICB9IGVsc2UgaWYgKGUgPCAwKSB7XG4gICAgZSA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgZm9yIChpID0gMDsgc3RyLmNoYXJDb2RlQXQoaSkgPT09IDQ4OyBpKyspXG4gICAgO1xuICBmb3IgKGxlbiA9IHN0ci5sZW5ndGg7IHN0ci5jaGFyQ29kZUF0KGxlbiAtIDEpID09PSA0ODsgLS1sZW4pXG4gICAgO1xuICBzdHIgPSBzdHIuc2xpY2UoaSwgbGVuKTtcbiAgaWYgKHN0cikge1xuICAgIGxlbiAtPSBpO1xuICAgIHguZSA9IGUgPSBlIC0gaSAtIDE7XG4gICAgeC5kID0gW107XG4gICAgaSA9IChlICsgMSkgJSBMT0dfQkFTRTtcbiAgICBpZiAoZSA8IDApXG4gICAgICBpICs9IExPR19CQVNFO1xuICAgIGlmIChpIDwgbGVuKSB7XG4gICAgICBpZiAoaSlcbiAgICAgICAgeC5kLnB1c2goK3N0ci5zbGljZSgwLCBpKSk7XG4gICAgICBmb3IgKGxlbiAtPSBMT0dfQkFTRTsgaSA8IGxlbjsgKVxuICAgICAgICB4LmQucHVzaCgrc3RyLnNsaWNlKGksIGkgKz0gTE9HX0JBU0UpKTtcbiAgICAgIHN0ciA9IHN0ci5zbGljZShpKTtcbiAgICAgIGkgPSBMT0dfQkFTRSAtIHN0ci5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgLT0gbGVuO1xuICAgIH1cbiAgICBmb3IgKDsgaS0tOyApXG4gICAgICBzdHIgKz0gXCIwXCI7XG4gICAgeC5kLnB1c2goK3N0cik7XG4gICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICBpZiAoeC5lID4geC5jb25zdHJ1Y3Rvci5tYXhFKSB7XG4gICAgICAgIHguZCA9IG51bGw7XG4gICAgICAgIHguZSA9IE5hTjtcbiAgICAgIH0gZWxzZSBpZiAoeC5lIDwgeC5jb25zdHJ1Y3Rvci5taW5FKSB7XG4gICAgICAgIHguZSA9IDA7XG4gICAgICAgIHguZCA9IFswXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgeC5lID0gMDtcbiAgICB4LmQgPSBbMF07XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiBwYXJzZU90aGVyKHgsIHN0cikge1xuICB2YXIgYmFzZSwgQ3RvciwgZGl2aXNvciwgaSwgaXNGbG9hdCwgbGVuLCBwLCB4ZCwgeGU7XG4gIGlmIChzdHIuaW5kZXhPZihcIl9cIikgPiAtMSkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oXFxkKV8oPz1cXGQpL2csIFwiJDFcIik7XG4gICAgaWYgKGlzRGVjaW1hbC50ZXN0KHN0cikpXG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsKHgsIHN0cik7XG4gIH0gZWxzZSBpZiAoc3RyID09PSBcIkluZmluaXR5XCIgfHwgc3RyID09PSBcIk5hTlwiKSB7XG4gICAgaWYgKCErc3RyKVxuICAgICAgeC5zID0gTmFOO1xuICAgIHguZSA9IE5hTjtcbiAgICB4LmQgPSBudWxsO1xuICAgIHJldHVybiB4O1xuICB9XG4gIGlmIChpc0hleC50ZXN0KHN0cikpIHtcbiAgICBiYXNlID0gMTY7XG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAoaXNCaW5hcnkudGVzdChzdHIpKSB7XG4gICAgYmFzZSA9IDI7XG4gIH0gZWxzZSBpZiAoaXNPY3RhbC50ZXN0KHN0cikpIHtcbiAgICBiYXNlID0gODtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBzdHIpO1xuICB9XG4gIGkgPSBzdHIuc2VhcmNoKC9wL2kpO1xuICBpZiAoaSA+IDApIHtcbiAgICBwID0gK3N0ci5zbGljZShpICsgMSk7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygyLCBpKTtcbiAgfSBlbHNlIHtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMik7XG4gIH1cbiAgaSA9IHN0ci5pbmRleE9mKFwiLlwiKTtcbiAgaXNGbG9hdCA9IGkgPj0gMDtcbiAgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChpc0Zsb2F0KSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IGxlbiAtIGk7XG4gICAgZGl2aXNvciA9IGludFBvdyhDdG9yLCBuZXcgQ3RvcihiYXNlKSwgaSwgaSAqIDIpO1xuICB9XG4gIHhkID0gY29udmVydEJhc2Uoc3RyLCBiYXNlLCBCQVNFKTtcbiAgeGUgPSB4ZC5sZW5ndGggLSAxO1xuICBmb3IgKGkgPSB4ZTsgeGRbaV0gPT09IDA7IC0taSlcbiAgICB4ZC5wb3AoKTtcbiAgaWYgKGkgPCAwKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LnMgKiAwKTtcbiAgeC5lID0gZ2V0QmFzZTEwRXhwb25lbnQoeGQsIHhlKTtcbiAgeC5kID0geGQ7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGlmIChpc0Zsb2F0KVxuICAgIHggPSBkaXZpZGUoeCwgZGl2aXNvciwgbGVuICogNCk7XG4gIGlmIChwKVxuICAgIHggPSB4LnRpbWVzKE1hdGguYWJzKHApIDwgNTQgPyBtYXRocG93KDIsIHApIDogRGVjaW1hbC5wb3coMiwgcCkpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiB4O1xufVxuZnVuY3Rpb24gc2luZShDdG9yLCB4KSB7XG4gIHZhciBrLCBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMykge1xuICAgIHJldHVybiB4LmlzWmVybygpID8geCA6IHRheWxvclNlcmllcyhDdG9yLCAyLCB4LCB4KTtcbiAgfVxuICBrID0gMS40ICogTWF0aC5zcXJ0KGxlbik7XG4gIGsgPSBrID4gMTYgPyAxNiA6IGsgfCAwO1xuICB4ID0geC50aW1lcygxIC8gdGlueVBvdyg1LCBrKSk7XG4gIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMiwgeCwgeCk7XG4gIHZhciBzaW4yX3gsIGQ1ID0gbmV3IEN0b3IoNSksIGQxNiA9IG5ldyBDdG9yKDE2KSwgZDIwID0gbmV3IEN0b3IoMjApO1xuICBmb3IgKDsgay0tOyApIHtcbiAgICBzaW4yX3ggPSB4LnRpbWVzKHgpO1xuICAgIHggPSB4LnRpbWVzKGQ1LnBsdXMoc2luMl94LnRpbWVzKGQxNi50aW1lcyhzaW4yX3gpLm1pbnVzKGQyMCkpKSk7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiB0YXlsb3JTZXJpZXMoQ3RvciwgbiwgeCwgeSwgaXNIeXBlcmJvbGljKSB7XG4gIHZhciBqLCB0LCB1LCB4MiwgaSA9IDEsIHByID0gQ3Rvci5wcmVjaXNpb24sIGsgPSBNYXRoLmNlaWwocHIgLyBMT0dfQkFTRSk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHgyID0geC50aW1lcyh4KTtcbiAgdSA9IG5ldyBDdG9yKHkpO1xuICBmb3IgKDsgOyApIHtcbiAgICB0ID0gZGl2aWRlKHUudGltZXMoeDIpLCBuZXcgQ3RvcihuKysgKiBuKyspLCBwciwgMSk7XG4gICAgdSA9IGlzSHlwZXJib2xpYyA/IHkucGx1cyh0KSA6IHkubWludXModCk7XG4gICAgeSA9IGRpdmlkZSh0LnRpbWVzKHgyKSwgbmV3IEN0b3IobisrICogbisrKSwgcHIsIDEpO1xuICAgIHQgPSB1LnBsdXMoeSk7XG4gICAgaWYgKHQuZFtrXSAhPT0gdm9pZCAwKSB7XG4gICAgICBmb3IgKGogPSBrOyB0LmRbal0gPT09IHUuZFtqXSAmJiBqLS07IClcbiAgICAgICAgO1xuICAgICAgaWYgKGogPT0gLTEpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBqID0gdTtcbiAgICB1ID0geTtcbiAgICB5ID0gdDtcbiAgICB0ID0gajtcbiAgICBpKys7XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICB0LmQubGVuZ3RoID0gayArIDE7XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gdGlueVBvdyhiLCBlKSB7XG4gIHZhciBuID0gYjtcbiAgd2hpbGUgKC0tZSlcbiAgICBuICo9IGI7XG4gIHJldHVybiBuO1xufVxuZnVuY3Rpb24gdG9MZXNzVGhhbkhhbGZQaShDdG9yLCB4KSB7XG4gIHZhciB0LCBpc05lZyA9IHgucyA8IDAsIHBpID0gZ2V0UGkoQ3RvciwgQ3Rvci5wcmVjaXNpb24sIDEpLCBoYWxmUGkgPSBwaS50aW1lcygwLjUpO1xuICB4ID0geC5hYnMoKTtcbiAgaWYgKHgubHRlKGhhbGZQaSkpIHtcbiAgICBxdWFkcmFudCA9IGlzTmVnID8gNCA6IDE7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdCA9IHguZGl2VG9JbnQocGkpO1xuICBpZiAodC5pc1plcm8oKSkge1xuICAgIHF1YWRyYW50ID0gaXNOZWcgPyAzIDogMjtcbiAgfSBlbHNlIHtcbiAgICB4ID0geC5taW51cyh0LnRpbWVzKHBpKSk7XG4gICAgaWYgKHgubHRlKGhhbGZQaSkpIHtcbiAgICAgIHF1YWRyYW50ID0gaXNPZGQodCkgPyBpc05lZyA/IDIgOiAzIDogaXNOZWcgPyA0IDogMTtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBxdWFkcmFudCA9IGlzT2RkKHQpID8gaXNOZWcgPyAxIDogNCA6IGlzTmVnID8gMyA6IDI7XG4gIH1cbiAgcmV0dXJuIHgubWludXMocGkpLmFicygpO1xufVxuZnVuY3Rpb24gdG9TdHJpbmdCaW5hcnkoeCwgYmFzZU91dCwgc2QsIHJtKSB7XG4gIHZhciBiYXNlLCBlLCBpLCBrLCBsZW4sIHJvdW5kVXAsIHN0ciwgeGQsIHksIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBpc0V4cCA9IHNkICE9PSB2b2lkIDA7XG4gIGlmIChpc0V4cCkge1xuICAgIGNoZWNrSW50MzIoc2QsIDEsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICB9IGVsc2Uge1xuICAgIHNkID0gQ3Rvci5wcmVjaXNpb247XG4gICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICB9XG4gIGlmICgheC5pc0Zpbml0ZSgpKSB7XG4gICAgc3RyID0gbm9uRmluaXRlVG9TdHJpbmcoeCk7XG4gIH0gZWxzZSB7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCk7XG4gICAgaSA9IHN0ci5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaXNFeHApIHtcbiAgICAgIGJhc2UgPSAyO1xuICAgICAgaWYgKGJhc2VPdXQgPT0gMTYpIHtcbiAgICAgICAgc2QgPSBzZCAqIDQgLSAzO1xuICAgICAgfSBlbHNlIGlmIChiYXNlT3V0ID09IDgpIHtcbiAgICAgICAgc2QgPSBzZCAqIDMgLSAyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gYmFzZU91dDtcbiAgICB9XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgeSA9IG5ldyBDdG9yKDEpO1xuICAgICAgeS5lID0gc3RyLmxlbmd0aCAtIGk7XG4gICAgICB5LmQgPSBjb252ZXJ0QmFzZShmaW5pdGVUb1N0cmluZyh5KSwgMTAsIGJhc2UpO1xuICAgICAgeS5lID0geS5kLmxlbmd0aDtcbiAgICB9XG4gICAgeGQgPSBjb252ZXJ0QmFzZShzdHIsIDEwLCBiYXNlKTtcbiAgICBlID0gbGVuID0geGQubGVuZ3RoO1xuICAgIGZvciAoOyB4ZFstLWxlbl0gPT0gMDsgKVxuICAgICAgeGQucG9wKCk7XG4gICAgaWYgKCF4ZFswXSkge1xuICAgICAgc3RyID0gaXNFeHAgPyBcIjBwKzBcIiA6IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgZS0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IG5ldyBDdG9yKHgpO1xuICAgICAgICB4LmQgPSB4ZDtcbiAgICAgICAgeC5lID0gZTtcbiAgICAgICAgeCA9IGRpdmlkZSh4LCB5LCBzZCwgcm0sIDAsIGJhc2UpO1xuICAgICAgICB4ZCA9IHguZDtcbiAgICAgICAgZSA9IHguZTtcbiAgICAgICAgcm91bmRVcCA9IGluZXhhY3Q7XG4gICAgICB9XG4gICAgICBpID0geGRbc2RdO1xuICAgICAgayA9IGJhc2UgLyAyO1xuICAgICAgcm91bmRVcCA9IHJvdW5kVXAgfHwgeGRbc2QgKyAxXSAhPT0gdm9pZCAwO1xuICAgICAgcm91bmRVcCA9IHJtIDwgNCA/IChpICE9PSB2b2lkIDAgfHwgcm91bmRVcCkgJiYgKHJtID09PSAwIHx8IHJtID09PSAoeC5zIDwgMCA/IDMgOiAyKSkgOiBpID4gayB8fCBpID09PSBrICYmIChybSA9PT0gNCB8fCByb3VuZFVwIHx8IHJtID09PSA2ICYmIHhkW3NkIC0gMV0gJiAxIHx8IHJtID09PSAoeC5zIDwgMCA/IDggOiA3KSk7XG4gICAgICB4ZC5sZW5ndGggPSBzZDtcbiAgICAgIGlmIChyb3VuZFVwKSB7XG4gICAgICAgIGZvciAoOyArK3hkWy0tc2RdID4gYmFzZSAtIDE7ICkge1xuICAgICAgICAgIHhkW3NkXSA9IDA7XG4gICAgICAgICAgaWYgKCFzZCkge1xuICAgICAgICAgICAgKytlO1xuICAgICAgICAgICAgeGQudW5zaGlmdCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGVuID0geGQubGVuZ3RoOyAheGRbbGVuIC0gMV07IC0tbGVuKVxuICAgICAgICA7XG4gICAgICBmb3IgKGkgPSAwLCBzdHIgPSBcIlwiOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHN0ciArPSBOVU1FUkFMUy5jaGFyQXQoeGRbaV0pO1xuICAgICAgaWYgKGlzRXhwKSB7XG4gICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgaWYgKGJhc2VPdXQgPT0gMTYgfHwgYmFzZU91dCA9PSA4KSB7XG4gICAgICAgICAgICBpID0gYmFzZU91dCA9PSAxNiA/IDQgOiAzO1xuICAgICAgICAgICAgZm9yICgtLWxlbjsgbGVuICUgaTsgbGVuKyspXG4gICAgICAgICAgICAgIHN0ciArPSBcIjBcIjtcbiAgICAgICAgICAgIHhkID0gY29udmVydEJhc2Uoc3RyLCBiYXNlLCBiYXNlT3V0KTtcbiAgICAgICAgICAgIGZvciAobGVuID0geGQubGVuZ3RoOyAheGRbbGVuIC0gMV07IC0tbGVuKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBmb3IgKGkgPSAxLCBzdHIgPSBcIjEuXCI7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICAgICAgc3RyICs9IE5VTUVSQUxTLmNoYXJBdCh4ZFtpXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkgKyBcIi5cIiArIHN0ci5zbGljZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gc3RyICsgKGUgPCAwID8gXCJwXCIgOiBcInArXCIpICsgZTtcbiAgICAgIH0gZWxzZSBpZiAoZSA8IDApIHtcbiAgICAgICAgZm9yICg7ICsrZTsgKVxuICAgICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xuICAgICAgICBzdHIgPSBcIjAuXCIgKyBzdHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKytlID4gbGVuKVxuICAgICAgICAgIGZvciAoZSAtPSBsZW47IGUtLTsgKVxuICAgICAgICAgICAgc3RyICs9IFwiMFwiO1xuICAgICAgICBlbHNlIGlmIChlIDwgbGVuKVxuICAgICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBlKSArIFwiLlwiICsgc3RyLnNsaWNlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdHIgPSAoYmFzZU91dCA9PSAxNiA/IFwiMHhcIiA6IGJhc2VPdXQgPT0gMiA/IFwiMGJcIiA6IGJhc2VPdXQgPT0gOCA/IFwiMG9cIiA6IFwiXCIpICsgc3RyO1xuICB9XG4gIHJldHVybiB4LnMgPCAwID8gXCItXCIgKyBzdHIgOiBzdHI7XG59XG5mdW5jdGlvbiB0cnVuY2F0ZShhcnIsIGxlbikge1xuICBpZiAoYXJyLmxlbmd0aCA+IGxlbikge1xuICAgIGFyci5sZW5ndGggPSBsZW47XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGFicyh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hYnMoKTtcbn1cbmZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYWNvcygpO1xufVxuZnVuY3Rpb24gYWNvc2goeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYWNvc2goKTtcbn1cbmZ1bmN0aW9uIGFkZCh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5wbHVzKHkpO1xufVxuZnVuY3Rpb24gYXNpbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hc2luKCk7XG59XG5mdW5jdGlvbiBhc2luaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hc2luaCgpO1xufVxuZnVuY3Rpb24gYXRhbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hdGFuKCk7XG59XG5mdW5jdGlvbiBhdGFuaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hdGFuaCgpO1xufVxuZnVuY3Rpb24gYXRhbjIoeSwgeCkge1xuICB5ID0gbmV3IHRoaXMoeSk7XG4gIHggPSBuZXcgdGhpcyh4KTtcbiAgdmFyIHIsIHByID0gdGhpcy5wcmVjaXNpb24sIHJtID0gdGhpcy5yb3VuZGluZywgd3ByID0gcHIgKyA0O1xuICBpZiAoIXkucyB8fCAheC5zKSB7XG4gICAgciA9IG5ldyB0aGlzKE5hTik7XG4gIH0gZWxzZSBpZiAoIXkuZCAmJiAheC5kKSB7XG4gICAgciA9IGdldFBpKHRoaXMsIHdwciwgMSkudGltZXMoeC5zID4gMCA/IDAuMjUgOiAwLjc1KTtcbiAgICByLnMgPSB5LnM7XG4gIH0gZWxzZSBpZiAoIXguZCB8fCB5LmlzWmVybygpKSB7XG4gICAgciA9IHgucyA8IDAgPyBnZXRQaSh0aGlzLCBwciwgcm0pIDogbmV3IHRoaXMoMCk7XG4gICAgci5zID0geS5zO1xuICB9IGVsc2UgaWYgKCF5LmQgfHwgeC5pc1plcm8oKSkge1xuICAgIHIgPSBnZXRQaSh0aGlzLCB3cHIsIDEpLnRpbWVzKDAuNSk7XG4gICAgci5zID0geS5zO1xuICB9IGVsc2UgaWYgKHgucyA8IDApIHtcbiAgICB0aGlzLnByZWNpc2lvbiA9IHdwcjtcbiAgICB0aGlzLnJvdW5kaW5nID0gMTtcbiAgICByID0gdGhpcy5hdGFuKGRpdmlkZSh5LCB4LCB3cHIsIDEpKTtcbiAgICB4ID0gZ2V0UGkodGhpcywgd3ByLCAxKTtcbiAgICB0aGlzLnByZWNpc2lvbiA9IHByO1xuICAgIHRoaXMucm91bmRpbmcgPSBybTtcbiAgICByID0geS5zIDwgMCA/IHIubWludXMoeCkgOiByLnBsdXMoeCk7XG4gIH0gZWxzZSB7XG4gICAgciA9IHRoaXMuYXRhbihkaXZpZGUoeSwgeCwgd3ByLCAxKSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBjYnJ0KHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNicnQoKTtcbn1cbmZ1bmN0aW9uIGNlaWwoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCAyKTtcbn1cbmZ1bmN0aW9uIGNsYW1wKHgsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNsYW1wKG1pbjIsIG1heDIpO1xufVxuZnVuY3Rpb24gY29uZmlnKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKVxuICAgIHRocm93IEVycm9yKGRlY2ltYWxFcnJvciArIFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICB2YXIgaSwgcCwgdiwgdXNlRGVmYXVsdHMgPSBvYmouZGVmYXVsdHMgPT09IHRydWUsIHBzID0gW1xuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgMSxcbiAgICBNQVhfRElHSVRTLFxuICAgIFwicm91bmRpbmdcIixcbiAgICAwLFxuICAgIDgsXG4gICAgXCJ0b0V4cE5lZ1wiLFxuICAgIC1FWFBfTElNSVQsXG4gICAgMCxcbiAgICBcInRvRXhwUG9zXCIsXG4gICAgMCxcbiAgICBFWFBfTElNSVQsXG4gICAgXCJtYXhFXCIsXG4gICAgMCxcbiAgICBFWFBfTElNSVQsXG4gICAgXCJtaW5FXCIsXG4gICAgLUVYUF9MSU1JVCxcbiAgICAwLFxuICAgIFwibW9kdWxvXCIsXG4gICAgMCxcbiAgICA5XG4gIF07XG4gIGZvciAoaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGlmIChwID0gcHNbaV0sIHVzZURlZmF1bHRzKVxuICAgICAgdGhpc1twXSA9IERFRkFVTFRTW3BdO1xuICAgIGlmICgodiA9IG9ialtwXSkgIT09IHZvaWQgMCkge1xuICAgICAgaWYgKG1hdGhmbG9vcih2KSA9PT0gdiAmJiB2ID49IHBzW2kgKyAxXSAmJiB2IDw9IHBzW2kgKyAyXSlcbiAgICAgICAgdGhpc1twXSA9IHY7XG4gICAgICBlbHNlXG4gICAgICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHAgKyBcIjogXCIgKyB2KTtcbiAgICB9XG4gIH1cbiAgaWYgKHAgPSBcImNyeXB0b1wiLCB1c2VEZWZhdWx0cylcbiAgICB0aGlzW3BdID0gREVGQVVMVFNbcF07XG4gIGlmICgodiA9IG9ialtwXSkgIT09IHZvaWQgMCkge1xuICAgIGlmICh2ID09PSB0cnVlIHx8IHYgPT09IGZhbHNlIHx8IHYgPT09IDAgfHwgdiA9PT0gMSkge1xuICAgICAgaWYgKHYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT0gXCJ1bmRlZmluZWRcIiAmJiBjcnlwdG8gJiYgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgfHwgY3J5cHRvLnJhbmRvbUJ5dGVzKSkge1xuICAgICAgICAgIHRoaXNbcF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IEVycm9yKGNyeXB0b1VuYXZhaWxhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1twXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBwICsgXCI6IFwiICsgdik7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gY29zKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNvcygpO1xufVxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5jb3NoKCk7XG59XG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgdmFyIGksIHAsIHBzO1xuICBmdW5jdGlvbiBEZWNpbWFsMih2KSB7XG4gICAgdmFyIGUsIGkyLCB0LCB4ID0gdGhpcztcbiAgICBpZiAoISh4IGluc3RhbmNlb2YgRGVjaW1hbDIpKVxuICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsMih2KTtcbiAgICB4LmNvbnN0cnVjdG9yID0gRGVjaW1hbDI7XG4gICAgaWYgKGlzRGVjaW1hbEluc3RhbmNlKHYpKSB7XG4gICAgICB4LnMgPSB2LnM7XG4gICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgaWYgKCF2LmQgfHwgdi5lID4gRGVjaW1hbDIubWF4RSkge1xuICAgICAgICAgIHguZSA9IE5hTjtcbiAgICAgICAgICB4LmQgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHYuZSA8IERlY2ltYWwyLm1pbkUpIHtcbiAgICAgICAgICB4LmUgPSAwO1xuICAgICAgICAgIHguZCA9IFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4LmUgPSB2LmU7XG4gICAgICAgICAgeC5kID0gdi5kLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHguZSA9IHYuZTtcbiAgICAgICAgeC5kID0gdi5kID8gdi5kLnNsaWNlKCkgOiB2LmQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHQgPSB0eXBlb2YgdjtcbiAgICBpZiAodCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKHYgPT09IDApIHtcbiAgICAgICAgeC5zID0gMSAvIHYgPCAwID8gLTEgOiAxO1xuICAgICAgICB4LmUgPSAwO1xuICAgICAgICB4LmQgPSBbMF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICB2ID0gLXY7XG4gICAgICAgIHgucyA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeC5zID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh2ID09PSB+fnYgJiYgdiA8IDFlNykge1xuICAgICAgICBmb3IgKGUgPSAwLCBpMiA9IHY7IGkyID49IDEwOyBpMiAvPSAxMClcbiAgICAgICAgICBlKys7XG4gICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgIGlmIChlID4gRGVjaW1hbDIubWF4RSkge1xuICAgICAgICAgICAgeC5lID0gTmFOO1xuICAgICAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUgPCBEZWNpbWFsMi5taW5FKSB7XG4gICAgICAgICAgICB4LmUgPSAwO1xuICAgICAgICAgICAgeC5kID0gWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4LmUgPSBlO1xuICAgICAgICAgICAgeC5kID0gW3ZdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4LmUgPSBlO1xuICAgICAgICAgIHguZCA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHYgKiAwICE9PSAwKSB7XG4gICAgICAgIGlmICghdilcbiAgICAgICAgICB4LnMgPSBOYU47XG4gICAgICAgIHguZSA9IE5hTjtcbiAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCh4LCB2LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgdik7XG4gICAgfVxuICAgIGlmICgoaTIgPSB2LmNoYXJDb2RlQXQoMCkpID09PSA0NSkge1xuICAgICAgdiA9IHYuc2xpY2UoMSk7XG4gICAgICB4LnMgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkyID09PSA0MylcbiAgICAgICAgdiA9IHYuc2xpY2UoMSk7XG4gICAgICB4LnMgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaXNEZWNpbWFsLnRlc3QodikgPyBwYXJzZURlY2ltYWwoeCwgdikgOiBwYXJzZU90aGVyKHgsIHYpO1xuICB9XG4gIERlY2ltYWwyLnByb3RvdHlwZSA9IFA7XG4gIERlY2ltYWwyLlJPVU5EX1VQID0gMDtcbiAgRGVjaW1hbDIuUk9VTkRfRE9XTiA9IDE7XG4gIERlY2ltYWwyLlJPVU5EX0NFSUwgPSAyO1xuICBEZWNpbWFsMi5ST1VORF9GTE9PUiA9IDM7XG4gIERlY2ltYWwyLlJPVU5EX0hBTEZfVVAgPSA0O1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX0RPV04gPSA1O1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX0VWRU4gPSA2O1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX0NFSUwgPSA3O1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX0ZMT09SID0gODtcbiAgRGVjaW1hbDIuRVVDTElEID0gOTtcbiAgRGVjaW1hbDIuY29uZmlnID0gRGVjaW1hbDIuc2V0ID0gY29uZmlnO1xuICBEZWNpbWFsMi5jbG9uZSA9IGNsb25lO1xuICBEZWNpbWFsMi5pc0RlY2ltYWwgPSBpc0RlY2ltYWxJbnN0YW5jZTtcbiAgRGVjaW1hbDIuYWJzID0gYWJzO1xuICBEZWNpbWFsMi5hY29zID0gYWNvcztcbiAgRGVjaW1hbDIuYWNvc2ggPSBhY29zaDtcbiAgRGVjaW1hbDIuYWRkID0gYWRkO1xuICBEZWNpbWFsMi5hc2luID0gYXNpbjtcbiAgRGVjaW1hbDIuYXNpbmggPSBhc2luaDtcbiAgRGVjaW1hbDIuYXRhbiA9IGF0YW47XG4gIERlY2ltYWwyLmF0YW5oID0gYXRhbmg7XG4gIERlY2ltYWwyLmF0YW4yID0gYXRhbjI7XG4gIERlY2ltYWwyLmNicnQgPSBjYnJ0O1xuICBEZWNpbWFsMi5jZWlsID0gY2VpbDtcbiAgRGVjaW1hbDIuY2xhbXAgPSBjbGFtcDtcbiAgRGVjaW1hbDIuY29zID0gY29zO1xuICBEZWNpbWFsMi5jb3NoID0gY29zaDtcbiAgRGVjaW1hbDIuZGl2ID0gZGl2O1xuICBEZWNpbWFsMi5leHAgPSBleHA7XG4gIERlY2ltYWwyLmZsb29yID0gZmxvb3I7XG4gIERlY2ltYWwyLmh5cG90ID0gaHlwb3Q7XG4gIERlY2ltYWwyLmxuID0gbG47XG4gIERlY2ltYWwyLmxvZyA9IGxvZztcbiAgRGVjaW1hbDIubG9nMTAgPSBsb2cxMDtcbiAgRGVjaW1hbDIubG9nMiA9IGxvZzI7XG4gIERlY2ltYWwyLm1heCA9IG1heDtcbiAgRGVjaW1hbDIubWluID0gbWluO1xuICBEZWNpbWFsMi5tb2QgPSBtb2Q7XG4gIERlY2ltYWwyLm11bCA9IG11bDtcbiAgRGVjaW1hbDIucG93ID0gcG93O1xuICBEZWNpbWFsMi5yYW5kb20gPSByYW5kb207XG4gIERlY2ltYWwyLnJvdW5kID0gcm91bmQ7XG4gIERlY2ltYWwyLnNpZ24gPSBzaWduO1xuICBEZWNpbWFsMi5zaW4gPSBzaW47XG4gIERlY2ltYWwyLnNpbmggPSBzaW5oO1xuICBEZWNpbWFsMi5zcXJ0ID0gc3FydDtcbiAgRGVjaW1hbDIuc3ViID0gc3ViO1xuICBEZWNpbWFsMi5zdW0gPSBzdW07XG4gIERlY2ltYWwyLnRhbiA9IHRhbjtcbiAgRGVjaW1hbDIudGFuaCA9IHRhbmg7XG4gIERlY2ltYWwyLnRydW5jID0gdHJ1bmM7XG4gIGlmIChvYmogPT09IHZvaWQgMClcbiAgICBvYmogPSB7fTtcbiAgaWYgKG9iaikge1xuICAgIGlmIChvYmouZGVmYXVsdHMgIT09IHRydWUpIHtcbiAgICAgIHBzID0gW1wicHJlY2lzaW9uXCIsIFwicm91bmRpbmdcIiwgXCJ0b0V4cE5lZ1wiLCBcInRvRXhwUG9zXCIsIFwibWF4RVwiLCBcIm1pbkVcIiwgXCJtb2R1bG9cIiwgXCJjcnlwdG9cIl07XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcHMubGVuZ3RoOyApXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHAgPSBwc1tpKytdKSlcbiAgICAgICAgICBvYmpbcF0gPSB0aGlzW3BdO1xuICAgIH1cbiAgfVxuICBEZWNpbWFsMi5jb25maWcob2JqKTtcbiAgcmV0dXJuIERlY2ltYWwyO1xufVxuZnVuY3Rpb24gZGl2KHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmRpdih5KTtcbn1cbmZ1bmN0aW9uIGV4cCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5leHAoKTtcbn1cbmZ1bmN0aW9uIGZsb29yKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgMyk7XG59XG5mdW5jdGlvbiBoeXBvdCgpIHtcbiAgdmFyIGksIG4sIHQgPSBuZXcgdGhpcygwKTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgZm9yIChpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICkge1xuICAgIG4gPSBuZXcgdGhpcyhhcmd1bWVudHNbaSsrXSk7XG4gICAgaWYgKCFuLmQpIHtcbiAgICAgIGlmIChuLnMpIHtcbiAgICAgICAgZXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoMSAvIDApO1xuICAgICAgfVxuICAgICAgdCA9IG47XG4gICAgfSBlbHNlIGlmICh0LmQpIHtcbiAgICAgIHQgPSB0LnBsdXMobi50aW1lcyhuKSk7XG4gICAgfVxuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHQuc3FydCgpO1xufVxuZnVuY3Rpb24gaXNEZWNpbWFsSW5zdGFuY2Uob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEZWNpbWFsIHx8IG9iaiAmJiBvYmoudG9TdHJpbmdUYWcgPT09IHRhZyB8fCBmYWxzZTtcbn1cbmZ1bmN0aW9uIGxuKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmxuKCk7XG59XG5mdW5jdGlvbiBsb2coeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG9nKHkpO1xufVxuZnVuY3Rpb24gbG9nMih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5sb2coMik7XG59XG5mdW5jdGlvbiBsb2cxMCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5sb2coMTApO1xufVxuZnVuY3Rpb24gbWF4KCkge1xuICByZXR1cm4gbWF4T3JNaW4odGhpcywgYXJndW1lbnRzLCBcImx0XCIpO1xufVxuZnVuY3Rpb24gbWluKCkge1xuICByZXR1cm4gbWF4T3JNaW4odGhpcywgYXJndW1lbnRzLCBcImd0XCIpO1xufVxuZnVuY3Rpb24gbW9kKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLm1vZCh5KTtcbn1cbmZ1bmN0aW9uIG11bCh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5tdWwoeSk7XG59XG5mdW5jdGlvbiBwb3coeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkucG93KHkpO1xufVxuZnVuY3Rpb24gcmFuZG9tKHNkKSB7XG4gIHZhciBkLCBlLCBrLCBuLCBpID0gMCwgciA9IG5ldyB0aGlzKDEpLCByZCA9IFtdO1xuICBpZiAoc2QgPT09IHZvaWQgMClcbiAgICBzZCA9IHRoaXMucHJlY2lzaW9uO1xuICBlbHNlXG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gIGsgPSBNYXRoLmNlaWwoc2QgLyBMT0dfQkFTRSk7XG4gIGlmICghdGhpcy5jcnlwdG8pIHtcbiAgICBmb3IgKDsgaSA8IGs7IClcbiAgICAgIHJkW2krK10gPSBNYXRoLnJhbmRvbSgpICogMWU3IHwgMDtcbiAgfSBlbHNlIGlmIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgZCA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KGspKTtcbiAgICBmb3IgKDsgaSA8IGs7ICkge1xuICAgICAgbiA9IGRbaV07XG4gICAgICBpZiAobiA+PSA0MjllNykge1xuICAgICAgICBkW2ldID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmRbaSsrXSA9IG4gJSAxZTc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGNyeXB0by5yYW5kb21CeXRlcykge1xuICAgIGQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoayAqPSA0KTtcbiAgICBmb3IgKDsgaSA8IGs7ICkge1xuICAgICAgbiA9IGRbaV0gKyAoZFtpICsgMV0gPDwgOCkgKyAoZFtpICsgMl0gPDwgMTYpICsgKChkW2kgKyAzXSAmIDEyNykgPDwgMjQpO1xuICAgICAgaWYgKG4gPj0gMjE0ZTcpIHtcbiAgICAgICAgY3J5cHRvLnJhbmRvbUJ5dGVzKDQpLmNvcHkoZCwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZC5wdXNoKG4gJSAxZTcpO1xuICAgICAgICBpICs9IDQ7XG4gICAgICB9XG4gICAgfVxuICAgIGkgPSBrIC8gNDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihjcnlwdG9VbmF2YWlsYWJsZSk7XG4gIH1cbiAgayA9IHJkWy0taV07XG4gIHNkICU9IExPR19CQVNFO1xuICBpZiAoayAmJiBzZCkge1xuICAgIG4gPSBtYXRocG93KDEwLCBMT0dfQkFTRSAtIHNkKTtcbiAgICByZFtpXSA9IChrIC8gbiB8IDApICogbjtcbiAgfVxuICBmb3IgKDsgcmRbaV0gPT09IDA7IGktLSlcbiAgICByZC5wb3AoKTtcbiAgaWYgKGkgPCAwKSB7XG4gICAgZSA9IDA7XG4gICAgcmQgPSBbMF07XG4gIH0gZWxzZSB7XG4gICAgZSA9IC0xO1xuICAgIGZvciAoOyByZFswXSA9PT0gMDsgZSAtPSBMT0dfQkFTRSlcbiAgICAgIHJkLnNoaWZ0KCk7XG4gICAgZm9yIChrID0gMSwgbiA9IHJkWzBdOyBuID49IDEwOyBuIC89IDEwKVxuICAgICAgaysrO1xuICAgIGlmIChrIDwgTE9HX0JBU0UpXG4gICAgICBlIC09IExPR19CQVNFIC0gaztcbiAgfVxuICByLmUgPSBlO1xuICByLmQgPSByZDtcbiAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiByb3VuZCh4KSB7XG4gIHJldHVybiBmaW5hbGlzZSh4ID0gbmV3IHRoaXMoeCksIHguZSArIDEsIHRoaXMucm91bmRpbmcpO1xufVxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHggPSBuZXcgdGhpcyh4KTtcbiAgcmV0dXJuIHguZCA/IHguZFswXSA/IHgucyA6IDAgKiB4LnMgOiB4LnMgfHwgTmFOO1xufVxuZnVuY3Rpb24gc2luKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNpbigpO1xufVxuZnVuY3Rpb24gc2luaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5zaW5oKCk7XG59XG5mdW5jdGlvbiBzcXJ0KHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNxcnQoKTtcbn1cbmZ1bmN0aW9uIHN1Yih4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5zdWIoeSk7XG59XG5mdW5jdGlvbiBzdW0oKSB7XG4gIHZhciBpID0gMCwgYXJncyA9IGFyZ3VtZW50cywgeCA9IG5ldyB0aGlzKGFyZ3NbaV0pO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBmb3IgKDsgeC5zICYmICsraSA8IGFyZ3MubGVuZ3RoOyApXG4gICAgeCA9IHgucGx1cyhhcmdzW2ldKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UoeCwgdGhpcy5wcmVjaXNpb24sIHRoaXMucm91bmRpbmcpO1xufVxuZnVuY3Rpb24gdGFuKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnRhbigpO1xufVxuZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS50YW5oKCk7XG59XG5mdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHJldHVybiBmaW5hbGlzZSh4ID0gbmV3IHRoaXMoeCksIHguZSArIDEsIDEpO1xufVxuUFtTeW1ib2wuZm9yKFwibm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b21cIildID0gUC50b1N0cmluZztcblBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9IFwiRGVjaW1hbFwiO1xudmFyIERlY2ltYWwgPSBQLmNvbnN0cnVjdG9yID0gY2xvbmUoREVGQVVMVFMpO1xuTE4xMCA9IG5ldyBEZWNpbWFsKExOMTApO1xuUEkgPSBuZXcgRGVjaW1hbChQSSk7XG52YXIgZGVjaW1hbF9kZWZhdWx0ID0gRGVjaW1hbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=