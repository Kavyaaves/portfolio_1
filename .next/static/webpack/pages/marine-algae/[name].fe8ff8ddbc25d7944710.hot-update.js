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

/* harmony default export */ __webpack_exports__["default"] = (marineAlgaeDetail); // export const getServerSideProps = async (context) => {
//     const data = await prisma.marine.findMany({ where: { "name": context.params.name } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21hcmluZS1hbGdhZS9bbmFtZV0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByaXNtYS9jbGllbnQvaW5kZXgtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmlzbWEvY2xpZW50L3J1bnRpbWUvaW5kZXgtYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJtYXJpbmVBbGdhZURldGFpbCIsImRhdGEiLCJ1c2VTdGF0ZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInByaXNtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDOztBQUU3RDtBQUNBO0FBQ0EsQ0FBQyxHQUFHLG1CQUFPLENBQUMsb0dBQXNDOzs7QUFHbEQ7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7O0FBRWhDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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Q3pCO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1CQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQUFFO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGFBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJpbmUtYWxnYWUvW25hbWVdLmZlOGZmOGRkYmMyNWQ3OTQ0NzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3Qge1xuICBEZWNpbWFsXG59ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQvcnVudGltZS9pbmRleC1icm93c2VyJylcblxuXG5jb25zdCBQcmlzbWEgPSB7fVxuXG5leHBvcnRzLlByaXNtYSA9IFByaXNtYVxuXG4vKipcbiAqIFByaXNtYSBDbGllbnQgSlMgdmVyc2lvbjogMi4yOS4xXG4gKiBRdWVyeSBFbmdpbmUgdmVyc2lvbjogMWJlNGNkNjBiODlhZmEwNGIxOTJhY2IxZWY0Nzc1OGEzOTgxMGYzYVxuICovXG5QcmlzbWEucHJpc21hVmVyc2lvbiA9IHtcbiAgY2xpZW50OiBcIjIuMjkuMVwiLFxuICBlbmdpbmU6IFwiMWJlNGNkNjBiODlhZmEwNGIxOTJhY2IxZWY0Nzc1OGEzOTgxMGYzYVwiXG59XG5cblByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX07XG5QcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLlByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLlByaXNtYUNsaWVudEluaXRpYWxpemF0aW9uRXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50SW5pdGlhbGl6YXRpb25FcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLkRlY2ltYWwgPSBEZWNpbWFsXG5cbi8qKlxuICogUmUtZXhwb3J0IG9mIHNxbC10ZW1wbGF0ZS10YWdcbiAqL1xuXG5QcmlzbWEuc3FsID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYHNxbHRhZyBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5lbXB0eSA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBlbXB0eSBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5qb2luID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYGpvaW4gaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEucmF3ID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYHJhdyBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS52YWxpZGF0b3IgPSAoKSA9PiAodmFsKSA9PiB2YWxcblxuLyoqXG4gKiBFbnVtc1xuICovXG4vLyBCYXNlZCBvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMTkyI2lzc3VlY29tbWVudC0yNjE3MjAyNzVcbmZ1bmN0aW9uIG1ha2VFbnVtKHgpIHsgcmV0dXJuIHg7IH1cblxuZXhwb3J0cy5QcmlzbWEuTWFyaW5lU2NhbGFyRmllbGRFbnVtID0gbWFrZUVudW0oe1xuICBpZDogJ2lkJyxcbiAgbmFtZTogJ25hbWUnLFxuICB0aXRsZTogJ3RpdGxlJyxcbiAgZGVzYzogJ2Rlc2MnLFxuICBpbWcxOiAnaW1nMScsXG4gIGltZzI6ICdpbWcyJyxcbiAgaW1nMzogJ2ltZzMnLFxuICBpbWc0OiAnaW1nNCcsXG4gIGltZzU6ICdpbWc1JyxcbiAgcGFyYTE6ICdwYXJhMScsXG4gIHBhcmEyOiAncGFyYTInLFxuICBwYXJhMzogJ3BhcmEzJyxcbiAgcGFyYTQ6ICdwYXJhNCcsXG4gIHBhcmE1OiAncGFyYTUnLFxuICBkaXZpc2lvbjogJ2RpdmlzaW9uJyxcbiAgY2xhc3M6ICdjbGFzcycsXG4gIG9yZGVyOiAnb3JkZXInLFxuICBmYW1pbHk6ICdmYW1pbHknLFxuICBiYXNpb255bTogJ2Jhc2lvbnltJyxcbiAgc3lub255bTogJ3N5bm9ueW0nLFxuICBlY29sb2d5OiAnZWNvbG9neScsXG4gIGRpc3RyaWJ1dGlvbjogJ2Rpc3RyaWJ1dGlvbicsXG4gIGhhYml0YXQ6ICdoYWJpdGF0JyxcbiAgb3JpZW50YXRpb24xOiAnb3JpZW50YXRpb24xJyxcbiAgb3JpZW50YXRpb24yOiAnb3JpZW50YXRpb24yJyxcbiAgb3JpZW50YXRpb24zOiAnb3JpZW50YXRpb24zJyxcbiAgb3JpZW50YXRpb240OiAnb3JpZW50YXRpb240JyxcbiAgb3JpZW50YXRpb241OiAnb3JpZW50YXRpb241JyxcbiAgaW1nMUNhcHRpb246ICdpbWcxQ2FwdGlvbicsXG4gIGltZzJDYXB0aW9uOiAnaW1nMkNhcHRpb24nLFxuICBpbWczQ2FwdGlvbjogJ2ltZzNDYXB0aW9uJyxcbiAgaW1nNENhcHRpb246ICdpbWc0Q2FwdGlvbicsXG4gIGltZzVDYXB0aW9uOiAnaW1nNUNhcHRpb24nXG59KTtcblxuZXhwb3J0cy5QcmlzbWEuRnJlc2h3YXRlclNjYWxhckZpZWxkRW51bSA9IG1ha2VFbnVtKHtcbiAgaWQ6ICdpZCcsXG4gIG5hbWU6ICduYW1lJyxcbiAgdGl0bGU6ICd0aXRsZScsXG4gIGRlc2M6ICdkZXNjJyxcbiAgaW1nMTogJ2ltZzEnLFxuICBpbWcyOiAnaW1nMicsXG4gIGltZzM6ICdpbWczJyxcbiAgaW1nNDogJ2ltZzQnLFxuICBpbWc1OiAnaW1nNScsXG4gIHBhcmExOiAncGFyYTEnLFxuICBwYXJhMjogJ3BhcmEyJyxcbiAgcGFyYTM6ICdwYXJhMycsXG4gIHBhcmE0OiAncGFyYTQnLFxuICBwYXJhNTogJ3BhcmE1JyxcbiAgZGl2aXNpb246ICdkaXZpc2lvbicsXG4gIGNsYXNzOiAnY2xhc3MnLFxuICBvcmRlcjogJ29yZGVyJyxcbiAgZmFtaWx5OiAnZmFtaWx5JyxcbiAgYmFzaW9ueW06ICdiYXNpb255bScsXG4gIGhhYml0YXQ6ICdoYWJpdGF0JyxcbiAgb3JpZW50YXRpb24xOiAnb3JpZW50YXRpb24xJyxcbiAgb3JpZW50YXRpb24yOiAnb3JpZW50YXRpb24yJyxcbiAgb3JpZW50YXRpb24zOiAnb3JpZW50YXRpb24zJyxcbiAgb3JpZW50YXRpb240OiAnb3JpZW50YXRpb240JyxcbiAgb3JpZW50YXRpb241OiAnb3JpZW50YXRpb241JyxcbiAgaW1nMUNhcHRpb246ICdpbWcxQ2FwdGlvbicsXG4gIGltZzJDYXB0aW9uOiAnaW1nMkNhcHRpb24nLFxuICBpbWczQ2FwdGlvbjogJ2ltZzNDYXB0aW9uJyxcbiAgaW1nNENhcHRpb246ICdpbWc0Q2FwdGlvbicsXG4gIGltZzVDYXB0aW9uOiAnaW1nNUNhcHRpb24nXG59KTtcblxuZXhwb3J0cy5QcmlzbWEuU29ydE9yZGVyID0gbWFrZUVudW0oe1xuICBhc2M6ICdhc2MnLFxuICBkZXNjOiAnZGVzYydcbn0pO1xuXG5cbmV4cG9ydHMuUHJpc21hLk1vZGVsTmFtZSA9IG1ha2VFbnVtKHtcbiAgTWFyaW5lOiAnTWFyaW5lJyxcbiAgRnJlc2h3YXRlcjogJ0ZyZXNod2F0ZXInXG59KTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIENsaWVudFxuICovXG5jbGFzcyBQcmlzbWFDbGllbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgUHJpc21hQ2xpZW50IGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4gICAgKVxuICB9XG59XG5leHBvcnRzLlByaXNtYUNsaWVudCA9IFByaXNtYUNsaWVudFxuXG5PYmplY3QuYXNzaWduKGV4cG9ydHMsIFByaXNtYSlcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9nJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL3V0aWxzL2RiJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9nJztcclxuZnVuY3Rpb24gbWFyaW5lQWxnYWVEZXRhaWwoeyBkYXRhIH0pIHtcclxuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgIC8vICAgICAgICAgdG9wOiAwLFxyXG4gICAgLy8gICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEJ1dHRvbiBpcyBkaXNwbGF5ZWQgYWZ0ZXIgc2Nyb2xsaW5nIGZvciA1MDAgcGl4ZWxzXHJcbiAgICAvLyAgICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH07XHJcblxyXG4gICAgLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlVmlzaWJpbGl0eSk7XHJcbiAgICAvLyB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlbic+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJha3RoYXZhY2hhbGFtIEJhYnUgLSBNYXJpbmUgQWxnYWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdwcmVjb25uZWN0JyBocmVmPSdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhclNldD0nVVRGLTgnXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzcydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SZWN1cnNpdmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz0naHR0cHM6Ly91bnBrZy5jb20vcG9wcGVyLmpzQDEvZGlzdC91bWQvcG9wcGVyLm1pbi5qcyc+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz0naHR0cHM6Ly91bnBrZy5jb20vdGlwcHkuanNANCc+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiB7c2VsZWN0ZWRJbWcgJiZcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZSB6LTIwIHctZnVsbCBoLWZ1bGwgdG9wLTAgYm90dG9tLTAgYmctcHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0PE1vZGFsIHNldFNlbGVjdGVkSW1nPXtzZXRTZWxlY3RlZEltZ30gc2VsZWN0ZWRJbWc9e3NlbGVjdGVkSW1nfSBpbWFnZXM9e2FsbEltYWdlc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0fSAqL31cclxuXHJcbiAgICAgICAgICAgIDxib2R5IGNsYXNzTmFtZT0nYmctZmFsbHMgYmctZml4ZWQgYmctY292ZXIgYmctY2VudGVyIGJnLW5vLXJlcGVhdCcgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMiAgcHQtNSBtYXgtdy00eGwgcmVsYXRpdmUgbXgtYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXByaW1hcnkgcmVsYXRpdmUgcm91bmRlZC1sZyBwLTEwIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExvZyBkYXRhPXttYXJpbmV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSA/IDxCbG9nIGRhdGE9e2RhdGF9IC8+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2lzVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGZpeGVkIHJpZ2h0LTAgYm90dG9tLTAgdGV4dC1jZW50ZXIgZmxleCByb3VuZGVkLWZ1bGwgdy0xNiBtLTEwIGgtMTYgdGV4dC1ibHVlLTcwMCBiZy15ZWxsb3ctNjAwIG1kOmJnLXByaW1hcnkgbWQ6dGV4dC15ZWxsb3ctNTAwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzbmFtZT0naW5saW5lLWZsZXggbS0xMCc+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIiNGRkJGMDBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0wIDE2LjY3bDIuODI5IDIuODMgOS4xNzUtOS4zMzkgOS4xNjcgOS4zMzkgMi44MjktMi44My0xMS45OTYtMTIuMTd6XCIgLz48L3N2Zz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2JvZHkgPlxyXG5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC8gZGl2ID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcmluZUFsZ2FlRGV0YWlsO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLm1hcmluZS5maW5kTWFueSh7IHdoZXJlOiB7IFwibmFtZVwiOiBjb250ZXh0LnBhcmFtcy5uYW1lIH0gfSk7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiLCJjb25zdCBwcmlzbWEgPSByZXF1aXJlKCcucHJpc21hL2NsaWVudC9pbmRleC1icm93c2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBwcmlzbWFcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19tYXJrQXNNb2R1bGUgPSAodGFyZ2V0KSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwge2dldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlfSk7XG59O1xuXG4vLyBzcmMvcnVudGltZS9pbmRleC1icm93c2VyLnRzXG5fX21hcmtBc01vZHVsZShleHBvcnRzKTtcbl9fZXhwb3J0KGV4cG9ydHMsIHtcbiAgRGVjaW1hbDogKCkgPT4gZGVjaW1hbF9kZWZhdWx0XG59KTtcblxuLy8gLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlY2ltYWwuanNAMTAuMy4xL25vZGVfbW9kdWxlcy9kZWNpbWFsLmpzL2RlY2ltYWwubWpzXG52YXIgRVhQX0xJTUlUID0gOWUxNTtcbnZhciBNQVhfRElHSVRTID0gMWU5O1xudmFyIE5VTUVSQUxTID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG52YXIgTE4xMCA9IFwiMi4zMDI1ODUwOTI5OTQwNDU2ODQwMTc5OTE0NTQ2ODQzNjQyMDc2MDExMDE0ODg2Mjg3NzI5NzYwMzMzMjc5MDA5Njc1NzI2MDk2NzczNTI0ODAyMzU5OTcyMDUwODk1OTgyOTgzNDE5Njc3ODQwNDIyODYyNDg2MzM0MDk1MjU0NjUwODI4MDY3NTY2NjYyODczNjkwOTg3ODE2ODk0ODI5MDcyMDgzMjU1NTQ2ODA4NDM3OTk4OTQ4MjYyMzMxOTg1MjgzOTM1MDUzMDg5NjUzNzc3MzI2Mjg4NDYxNjMzNjYyMjIyODc2OTgyMTk4ODY3NDY1NDM2Njc0NzQ0MDQyNDMyNzQzNjUxNTUwNDg5MzQzMTQ5MzkzOTE0Nzk2MTk0MDQ0MDAyMjIxMDUxMDE3MTQxNzQ4MDAzNjg4MDg0MDEyNjQ3MDgwNjg1NTY3NzQzMjE2MjI4MzU1MjIwMTE0ODA0NjYzNzE1NjU5MTIxMzczNDUwNzQ3ODU2OTQ3NjgzNDYzNjE2NzkyMTAxODA2NDQ1MDcwNjQ4MDAwMjc3NTAyNjg0OTE2NzQ2NTUwNTg2ODU2OTM1NjczNDIwNjcwNTgxMTM2NDI5MjI0NTU0NDA1NzU4OTI1NzI0MjA4MjQxMzE0Njk1Njg5MDE2NzU4OTQwMjU2Nzc2MzExMzU2OTE5MjkyMDMzMzc2NTg3MTQxNjYwMjMwMTA1NzAzMDg5NjM0NTcyMDc1NDQwMzcwODQ3NDY5OTQwMTY4MjY5MjgyODA4NDgxMTg0Mjg5MzE0ODQ4NTI0OTQ4NjQ0ODcxOTI3ODA5Njc2MjcxMjc1Nzc1Mzk3MDI3NjY4NjA1OTUyNDk2NzE2Njc0MTgzNDg1NzA0NDIyNTA3MTk3OTY1MDA0NzE0OTUxMDUwNDkyMjE0Nzc2NTY3NjM2OTM4NjYyOTc2OTc5NTIyMTEwNzE4MjY0NTQ5NzM0NzcyNjYyNDI1NzA5NDI5MzIyNTgyNzk4NTAyNTg1NTA5Nzg1MjY1MzgzMjA3NjA2NzI2MzE3MTY0MzA5NTA1OTk1MDg3ODA3NTIzNzEwMzMzMTAxMTk3ODU3NTQ3MzMxNTQxNDIxODA4NDI3NTQzODYzNTkxNzc4MTE3MDU0MzA5ODI3NDgyMzg1MDQ1NjQ4MDE5MDk1NjEwMjk5MjkxODI0MzE4MjM3NTI1MzU3NzA5NzUwNTM5NTY1MTg3Njk3NTEwMzc0OTcwODg4NjkyMTgwMjA1MTg5MzM5NTA3MjM4NTM5MjA1MTQ0NjM0MTk3MjY1Mjg3Mjg2OTY1MTEwODYyNTcxNDkyMTk4ODQ5OTc4NzQ4ODczNzcxMzQ1Njg2MjA5MTY3MDU4XCI7XG52YXIgUEkgPSBcIjMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5Mzk5Mzc1MTA1ODIwOTc0OTQ0NTkyMzA3ODE2NDA2Mjg2MjA4OTk4NjI4MDM0ODI1MzQyMTE3MDY3OTgyMTQ4MDg2NTEzMjgyMzA2NjQ3MDkzODQ0NjA5NTUwNTgyMjMxNzI1MzU5NDA4MTI4NDgxMTE3NDUwMjg0MTAyNzAxOTM4NTIxMTA1NTU5NjQ0NjIyOTQ4OTU0OTMwMzgxOTY0NDI4ODEwOTc1NjY1OTMzNDQ2MTI4NDc1NjQ4MjMzNzg2NzgzMTY1MjcxMjAxOTA5MTQ1NjQ4NTY2OTIzNDYwMzQ4NjEwNDU0MzI2NjQ4MjEzMzkzNjA3MjYwMjQ5MTQxMjczNzI0NTg3MDA2NjA2MzE1NTg4MTc0ODgxNTIwOTIwOTYyODI5MjU0MDkxNzE1MzY0MzY3ODkyNTkwMzYwMDExMzMwNTMwNTQ4ODIwNDY2NTIxMzg0MTQ2OTUxOTQxNTExNjA5NDMzMDU3MjcwMzY1NzU5NTkxOTUzMDkyMTg2MTE3MzgxOTMyNjExNzkzMTA1MTE4NTQ4MDc0NDYyMzc5OTYyNzQ5NTY3MzUxODg1NzUyNzI0ODkxMjI3OTM4MTgzMDExOTQ5MTI5ODMzNjczMzYyNDQwNjU2NjQzMDg2MDIxMzk0OTQ2Mzk1MjI0NzM3MTkwNzAyMTc5ODYwOTQzNzAyNzcwNTM5MjE3MTc2MjkzMTc2NzUyMzg0Njc0ODE4NDY3NjY5NDA1MTMyMDAwNTY4MTI3MTQ1MjYzNTYwODI3Nzg1NzcxMzQyNzU3Nzg5NjA5MTczNjM3MTc4NzIxNDY4NDQwOTAxMjI0OTUzNDMwMTQ2NTQ5NTg1MzcxMDUwNzkyMjc5Njg5MjU4OTIzNTQyMDE5OTU2MTEyMTI5MDIxOTYwODY0MDM0NDE4MTU5ODEzNjI5Nzc0NzcxMzA5OTYwNTE4NzA3MjExMzQ5OTk5OTk4MzcyOTc4MDQ5OTUxMDU5NzMxNzMyODE2MDk2MzE4NTk1MDI0NDU5NDU1MzQ2OTA4MzAyNjQyNTIyMzA4MjUzMzQ0Njg1MDM1MjYxOTMxMTg4MTcxMDEwMDAzMTM3ODM4NzUyODg2NTg3NTMzMjA4MzgxNDIwNjE3MTc3NjY5MTQ3MzAzNTk4MjUzNDkwNDI4NzU1NDY4NzMxMTU5NTYyODYzODgyMzUzNzg3NTkzNzUxOTU3NzgxODU3NzgwNTMyMTcxMjI2ODA2NjEzMDAxOTI3ODc2NjExMTk1OTA5MjE2NDIwMTk4OTM4MDk1MjU3MjAxMDY1NDg1ODYzMjc4OVwiO1xudmFyIERFRkFVTFRTID0ge1xuICBwcmVjaXNpb246IDIwLFxuICByb3VuZGluZzogNCxcbiAgbW9kdWxvOiAxLFxuICB0b0V4cE5lZzogLTcsXG4gIHRvRXhwUG9zOiAyMSxcbiAgbWluRTogLUVYUF9MSU1JVCxcbiAgbWF4RTogRVhQX0xJTUlULFxuICBjcnlwdG86IGZhbHNlXG59O1xudmFyIGluZXhhY3Q7XG52YXIgcXVhZHJhbnQ7XG52YXIgZXh0ZXJuYWwgPSB0cnVlO1xudmFyIGRlY2ltYWxFcnJvciA9IFwiW0RlY2ltYWxFcnJvcl0gXCI7XG52YXIgaW52YWxpZEFyZ3VtZW50ID0gZGVjaW1hbEVycm9yICsgXCJJbnZhbGlkIGFyZ3VtZW50OiBcIjtcbnZhciBwcmVjaXNpb25MaW1pdEV4Y2VlZGVkID0gZGVjaW1hbEVycm9yICsgXCJQcmVjaXNpb24gbGltaXQgZXhjZWVkZWRcIjtcbnZhciBjcnlwdG9VbmF2YWlsYWJsZSA9IGRlY2ltYWxFcnJvciArIFwiY3J5cHRvIHVuYXZhaWxhYmxlXCI7XG52YXIgdGFnID0gXCJbb2JqZWN0IERlY2ltYWxdXCI7XG52YXIgbWF0aGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBtYXRocG93ID0gTWF0aC5wb3c7XG52YXIgaXNCaW5hcnkgPSAvXjBiKFswMV0rKFxcLlswMV0qKT98XFwuWzAxXSspKHBbKy1dP1xcZCspPyQvaTtcbnZhciBpc0hleCA9IC9eMHgoWzAtOWEtZl0rKFxcLlswLTlhLWZdKik/fFxcLlswLTlhLWZdKykocFsrLV0/XFxkKyk/JC9pO1xudmFyIGlzT2N0YWwgPSAvXjBvKFswLTddKyhcXC5bMC03XSopP3xcXC5bMC03XSspKHBbKy1dP1xcZCspPyQvaTtcbnZhciBpc0RlY2ltYWwgPSAvXihcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8kL2k7XG52YXIgQkFTRSA9IDFlNztcbnZhciBMT0dfQkFTRSA9IDc7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG52YXIgTE4xMF9QUkVDSVNJT04gPSBMTjEwLmxlbmd0aCAtIDE7XG52YXIgUElfUFJFQ0lTSU9OID0gUEkubGVuZ3RoIC0gMTtcbnZhciBQID0ge3RvU3RyaW5nVGFnOiB0YWd9O1xuUC5hYnNvbHV0ZVZhbHVlID0gUC5hYnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKTtcbiAgaWYgKHgucyA8IDApXG4gICAgeC5zID0gMTtcbiAgcmV0dXJuIGZpbmFsaXNlKHgpO1xufTtcblAuY2VpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmluYWxpc2UobmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyksIHRoaXMuZSArIDEsIDIpO1xufTtcblAuY2xhbXBlZFRvID0gUC5jbGFtcCA9IGZ1bmN0aW9uKG1pbjIsIG1heDIpIHtcbiAgdmFyIGssIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgbWluMiA9IG5ldyBDdG9yKG1pbjIpO1xuICBtYXgyID0gbmV3IEN0b3IobWF4Mik7XG4gIGlmICghbWluMi5zIHx8ICFtYXgyLnMpXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmIChtaW4yLmd0KG1heDIpKVxuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIG1heDIpO1xuICBrID0geC5jbXAobWluMik7XG4gIHJldHVybiBrIDwgMCA/IG1pbjIgOiB4LmNtcChtYXgyKSA+IDAgPyBtYXgyIDogbmV3IEN0b3IoeCk7XG59O1xuUC5jb21wYXJlZFRvID0gUC5jbXAgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBpLCBqLCB4ZEwsIHlkTCwgeCA9IHRoaXMsIHhkID0geC5kLCB5ZCA9ICh5ID0gbmV3IHguY29uc3RydWN0b3IoeSkpLmQsIHhzID0geC5zLCB5cyA9IHkucztcbiAgaWYgKCF4ZCB8fCAheWQpIHtcbiAgICByZXR1cm4gIXhzIHx8ICF5cyA/IE5hTiA6IHhzICE9PSB5cyA/IHhzIDogeGQgPT09IHlkID8gMCA6ICF4ZCBeIHhzIDwgMCA/IDEgOiAtMTtcbiAgfVxuICBpZiAoIXhkWzBdIHx8ICF5ZFswXSlcbiAgICByZXR1cm4geGRbMF0gPyB4cyA6IHlkWzBdID8gLXlzIDogMDtcbiAgaWYgKHhzICE9PSB5cylcbiAgICByZXR1cm4geHM7XG4gIGlmICh4LmUgIT09IHkuZSlcbiAgICByZXR1cm4geC5lID4geS5lIF4geHMgPCAwID8gMSA6IC0xO1xuICB4ZEwgPSB4ZC5sZW5ndGg7XG4gIHlkTCA9IHlkLmxlbmd0aDtcbiAgZm9yIChpID0gMCwgaiA9IHhkTCA8IHlkTCA/IHhkTCA6IHlkTDsgaSA8IGo7ICsraSkge1xuICAgIGlmICh4ZFtpXSAhPT0geWRbaV0pXG4gICAgICByZXR1cm4geGRbaV0gPiB5ZFtpXSBeIHhzIDwgMCA/IDEgOiAtMTtcbiAgfVxuICByZXR1cm4geGRMID09PSB5ZEwgPyAwIDogeGRMID4geWRMIF4geHMgPCAwID8gMSA6IC0xO1xufTtcblAuY29zaW5lID0gUC5jb3MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguZClcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKCF4LmRbMF0pXG4gICAgcmV0dXJuIG5ldyBDdG9yKDEpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heCh4LmUsIHguc2QoKSkgKyBMT0dfQkFTRTtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSBjb3NpbmUoQ3RvciwgdG9MZXNzVGhhbkhhbGZQaShDdG9yLCB4KSk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHF1YWRyYW50ID09IDIgfHwgcXVhZHJhbnQgPT0gMyA/IHgubmVnKCkgOiB4LCBwciwgcm0sIHRydWUpO1xufTtcblAuY3ViZVJvb3QgPSBQLmNicnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGUsIG0sIG4sIHIsIHJlcCwgcywgc2QsIHQsIHQzLCB0M3BsdXN4LCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpIHx8IHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBzID0geC5zICogbWF0aHBvdyh4LnMgKiB4LCAxIC8gMyk7XG4gIGlmICghcyB8fCBNYXRoLmFicyhzKSA9PSAxIC8gMCkge1xuICAgIG4gPSBkaWdpdHNUb1N0cmluZyh4LmQpO1xuICAgIGUgPSB4LmU7XG4gICAgaWYgKHMgPSAoZSAtIG4ubGVuZ3RoICsgMSkgJSAzKVxuICAgICAgbiArPSBzID09IDEgfHwgcyA9PSAtMiA/IFwiMFwiIDogXCIwMFwiO1xuICAgIHMgPSBtYXRocG93KG4sIDEgLyAzKTtcbiAgICBlID0gbWF0aGZsb29yKChlICsgMSkgLyAzKSAtIChlICUgMyA9PSAoZSA8IDAgPyAtMSA6IDIpKTtcbiAgICBpZiAocyA9PSAxIC8gMCkge1xuICAgICAgbiA9IFwiNWVcIiArIGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBzLnRvRXhwb25lbnRpYWwoKTtcbiAgICAgIG4gPSBuLnNsaWNlKDAsIG4uaW5kZXhPZihcImVcIikgKyAxKSArIGU7XG4gICAgfVxuICAgIHIgPSBuZXcgQ3RvcihuKTtcbiAgICByLnMgPSB4LnM7XG4gIH0gZWxzZSB7XG4gICAgciA9IG5ldyBDdG9yKHMudG9TdHJpbmcoKSk7XG4gIH1cbiAgc2QgPSAoZSA9IEN0b3IucHJlY2lzaW9uKSArIDM7XG4gIGZvciAoOyA7ICkge1xuICAgIHQgPSByO1xuICAgIHQzID0gdC50aW1lcyh0KS50aW1lcyh0KTtcbiAgICB0M3BsdXN4ID0gdDMucGx1cyh4KTtcbiAgICByID0gZGl2aWRlKHQzcGx1c3gucGx1cyh4KS50aW1lcyh0KSwgdDNwbHVzeC5wbHVzKHQzKSwgc2QgKyAyLCAxKTtcbiAgICBpZiAoZGlnaXRzVG9TdHJpbmcodC5kKS5zbGljZSgwLCBzZCkgPT09IChuID0gZGlnaXRzVG9TdHJpbmcoci5kKSkuc2xpY2UoMCwgc2QpKSB7XG4gICAgICBuID0gbi5zbGljZShzZCAtIDMsIHNkICsgMSk7XG4gICAgICBpZiAobiA9PSBcIjk5OTlcIiB8fCAhcmVwICYmIG4gPT0gXCI0OTk5XCIpIHtcbiAgICAgICAgaWYgKCFyZXApIHtcbiAgICAgICAgICBmaW5hbGlzZSh0LCBlICsgMSwgMCk7XG4gICAgICAgICAgaWYgKHQudGltZXModCkudGltZXModCkuZXEoeCkpIHtcbiAgICAgICAgICAgIHIgPSB0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNkICs9IDQ7XG4gICAgICAgIHJlcCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIStuIHx8ICErbi5zbGljZSgxKSAmJiBuLmNoYXJBdCgwKSA9PSBcIjVcIikge1xuICAgICAgICAgIGZpbmFsaXNlKHIsIGUgKyAxLCAxKTtcbiAgICAgICAgICBtID0gIXIudGltZXMocikudGltZXMocikuZXEoeCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIGUsIEN0b3Iucm91bmRpbmcsIG0pO1xufTtcblAuZGVjaW1hbFBsYWNlcyA9IFAuZHAgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHcsIGQgPSB0aGlzLmQsIG4gPSBOYU47XG4gIGlmIChkKSB7XG4gICAgdyA9IGQubGVuZ3RoIC0gMTtcbiAgICBuID0gKHcgLSBtYXRoZmxvb3IodGhpcy5lIC8gTE9HX0JBU0UpKSAqIExPR19CQVNFO1xuICAgIHcgPSBkW3ddO1xuICAgIGlmICh3KVxuICAgICAgZm9yICg7IHcgJSAxMCA9PSAwOyB3IC89IDEwKVxuICAgICAgICBuLS07XG4gICAgaWYgKG4gPCAwKVxuICAgICAgbiA9IDA7XG4gIH1cbiAgcmV0dXJuIG47XG59O1xuUC5kaXZpZGVkQnkgPSBQLmRpdiA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIGRpdmlkZSh0aGlzLCBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih5KSk7XG59O1xuUC5kaXZpZGVkVG9JbnRlZ2VyQnkgPSBQLmRpdlRvSW50ID0gZnVuY3Rpb24oeSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICByZXR1cm4gZmluYWxpc2UoZGl2aWRlKHgsIG5ldyBDdG9yKHkpLCAwLCAxLCAxKSwgQ3Rvci5wcmVjaXNpb24sIEN0b3Iucm91bmRpbmcpO1xufTtcblAuZXF1YWxzID0gUC5lcSA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIHRoaXMuY21wKHkpID09PSAwO1xufTtcblAuZmxvb3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpLCB0aGlzLmUgKyAxLCAzKTtcbn07XG5QLmdyZWF0ZXJUaGFuID0gUC5ndCA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIHRoaXMuY21wKHkpID4gMDtcbn07XG5QLmdyZWF0ZXJUaGFuT3JFcXVhbFRvID0gUC5ndGUgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBrID0gdGhpcy5jbXAoeSk7XG4gIHJldHVybiBrID09IDEgfHwgayA9PT0gMDtcbn07XG5QLmh5cGVyYm9saWNDb3NpbmUgPSBQLmNvc2ggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGssIG4sIHByLCBybSwgbGVuLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIG9uZSA9IG5ldyBDdG9yKDEpO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5zID8gMSAvIDAgOiBOYU4pO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gb25lO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heCh4LmUsIHguc2QoKSkgKyA0O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgbGVuID0geC5kLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDMyKSB7XG4gICAgayA9IE1hdGguY2VpbChsZW4gLyAzKTtcbiAgICBuID0gKDEgLyB0aW55UG93KDQsIGspKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIGsgPSAxNjtcbiAgICBuID0gXCIyLjMyODMwNjQzNjUzODY5NjI4OTA2MjVlLTEwXCI7XG4gIH1cbiAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAxLCB4LnRpbWVzKG4pLCBuZXcgQ3RvcigxKSwgdHJ1ZSk7XG4gIHZhciBjb3NoMl94LCBpID0gaywgZDggPSBuZXcgQ3Rvcig4KTtcbiAgZm9yICg7IGktLTsgKSB7XG4gICAgY29zaDJfeCA9IHgudGltZXMoeCk7XG4gICAgeCA9IG9uZS5taW51cyhjb3NoMl94LnRpbWVzKGQ4Lm1pbnVzKGNvc2gyX3gudGltZXMoZDgpKSkpO1xuICB9XG4gIHJldHVybiBmaW5hbGlzZSh4LCBDdG9yLnByZWNpc2lvbiA9IHByLCBDdG9yLnJvdW5kaW5nID0gcm0sIHRydWUpO1xufTtcblAuaHlwZXJib2xpY1NpbmUgPSBQLnNpbmggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGssIHByLCBybSwgbGVuLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpIHx8IHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heCh4LmUsIHguc2QoKSkgKyA0O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgbGVuID0geC5kLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDMpIHtcbiAgICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGsgPSAxLjQgKiBNYXRoLnNxcnQobGVuKTtcbiAgICBrID0gayA+IDE2ID8gMTYgOiBrIHwgMDtcbiAgICB4ID0geC50aW1lcygxIC8gdGlueVBvdyg1LCBrKSk7XG4gICAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAyLCB4LCB4LCB0cnVlKTtcbiAgICB2YXIgc2luaDJfeCwgZDUgPSBuZXcgQ3Rvcig1KSwgZDE2ID0gbmV3IEN0b3IoMTYpLCBkMjAgPSBuZXcgQ3RvcigyMCk7XG4gICAgZm9yICg7IGstLTsgKSB7XG4gICAgICBzaW5oMl94ID0geC50aW1lcyh4KTtcbiAgICAgIHggPSB4LnRpbWVzKGQ1LnBsdXMoc2luaDJfeC50aW1lcyhkMTYudGltZXMoc2luaDJfeCkucGx1cyhkMjApKSkpO1xuICAgIH1cbiAgfVxuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZSh4LCBwciwgcm0sIHRydWUpO1xufTtcblAuaHlwZXJib2xpY1RhbmdlbnQgPSBQLnRhbmggPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5zKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyA3O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgcmV0dXJuIGRpdmlkZSh4LnNpbmgoKSwgeC5jb3NoKCksIEN0b3IucHJlY2lzaW9uID0gcHIsIEN0b3Iucm91bmRpbmcgPSBybSk7XG59O1xuUC5pbnZlcnNlQ29zaW5lID0gUC5hY29zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYWxmUGksIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgayA9IHguYWJzKCkuY21wKDEpLCBwciA9IEN0b3IucHJlY2lzaW9uLCBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmIChrICE9PSAtMSkge1xuICAgIHJldHVybiBrID09PSAwID8geC5pc05lZygpID8gZ2V0UGkoQ3RvciwgcHIsIHJtKSA6IG5ldyBDdG9yKDApIDogbmV3IEN0b3IoTmFOKTtcbiAgfVxuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC41KTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDY7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0geC5hc2luKCk7XG4gIGhhbGZQaSA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuNSk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGhhbGZQaS5taW51cyh4KTtcbn07XG5QLmludmVyc2VIeXBlcmJvbGljQ29zaW5lID0gUC5hY29zaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICh4Lmx0ZSgxKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5lcSgxKSA/IDAgOiBOYU4pO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KE1hdGguYWJzKHguZSksIHguc2QoKSkgKyA0O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgeCA9IHgudGltZXMoeCkubWludXMoMSkuc3FydCgpLnBsdXMoeCk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4geC5sbigpO1xufTtcblAuaW52ZXJzZUh5cGVyYm9saWNTaW5lID0gUC5hc2luaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpIHx8IHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyAyICogTWF0aC5tYXgoTWF0aC5hYnMoeC5lKSwgeC5zZCgpKSArIDY7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICB4ID0geC50aW1lcyh4KS5wbHVzKDEpLnNxcnQoKS5wbHVzKHgpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIHgubG4oKTtcbn07XG5QLmludmVyc2VIeXBlcmJvbGljVGFuZ2VudCA9IFAuYXRhbmggPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgd3ByLCB4c2QsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmICh4LmUgPj0gMClcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5hYnMoKS5lcSgxKSA/IHgucyAvIDAgOiB4LmlzWmVybygpID8geCA6IE5hTik7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgeHNkID0geC5zZCgpO1xuICBpZiAoTWF0aC5tYXgoeHNkLCBwcikgPCAyICogLXguZSAtIDEpXG4gICAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBwciwgcm0sIHRydWUpO1xuICBDdG9yLnByZWNpc2lvbiA9IHdwciA9IHhzZCAtIHguZTtcbiAgeCA9IGRpdmlkZSh4LnBsdXMoMSksIG5ldyBDdG9yKDEpLm1pbnVzKHgpLCB3cHIgKyBwciwgMSk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyA0O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHgubG4oKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4geC50aW1lcygwLjUpO1xufTtcblAuaW52ZXJzZVNpbmUgPSBQLmFzaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhhbGZQaSwgaywgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgayA9IHguYWJzKCkuY21wKDEpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmIChrICE9PSAtMSkge1xuICAgIGlmIChrID09PSAwKSB7XG4gICAgICBoYWxmUGkgPSBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICAgICAgaGFsZlBpLnMgPSB4LnM7XG4gICAgICByZXR1cm4gaGFsZlBpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiA9IHByICsgNjtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LmRpdihuZXcgQ3RvcigxKS5taW51cyh4LnRpbWVzKHgpKS5zcXJ0KCkucGx1cygxKSkuYXRhbigpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LnRpbWVzKDIpO1xufTtcblAuaW52ZXJzZVRhbmdlbnQgPSBQLmF0YW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGksIGosIGssIG4sIHB4LCB0LCByLCB3cHIsIHgyLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHByID0gQ3Rvci5wcmVjaXNpb24sIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKCF4LmlzRmluaXRlKCkpIHtcbiAgICBpZiAoIXgucylcbiAgICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICAgIGlmIChwciArIDQgPD0gUElfUFJFQ0lTSU9OKSB7XG4gICAgICByID0gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC41KTtcbiAgICAgIHIucyA9IHgucztcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfSBlbHNlIGlmICh4LmlzWmVybygpKSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICB9IGVsc2UgaWYgKHguYWJzKCkuZXEoMSkgJiYgcHIgKyA0IDw9IFBJX1BSRUNJU0lPTikge1xuICAgIHIgPSBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjI1KTtcbiAgICByLnMgPSB4LnM7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgPSBwciArIDEwO1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgayA9IE1hdGgubWluKDI4LCB3cHIgLyBMT0dfQkFTRSArIDIgfCAwKTtcbiAgZm9yIChpID0gazsgaTsgLS1pKVxuICAgIHggPSB4LmRpdih4LnRpbWVzKHgpLnBsdXMoMSkuc3FydCgpLnBsdXMoMSkpO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBqID0gTWF0aC5jZWlsKHdwciAvIExPR19CQVNFKTtcbiAgbiA9IDE7XG4gIHgyID0geC50aW1lcyh4KTtcbiAgciA9IG5ldyBDdG9yKHgpO1xuICBweCA9IHg7XG4gIGZvciAoOyBpICE9PSAtMTsgKSB7XG4gICAgcHggPSBweC50aW1lcyh4Mik7XG4gICAgdCA9IHIubWludXMocHguZGl2KG4gKz0gMikpO1xuICAgIHB4ID0gcHgudGltZXMoeDIpO1xuICAgIHIgPSB0LnBsdXMocHguZGl2KG4gKz0gMikpO1xuICAgIGlmIChyLmRbal0gIT09IHZvaWQgMClcbiAgICAgIGZvciAoaSA9IGo7IHIuZFtpXSA9PT0gdC5kW2ldICYmIGktLTsgKVxuICAgICAgICA7XG4gIH1cbiAgaWYgKGspXG4gICAgciA9IHIudGltZXMoMiA8PCBrIC0gMSk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIEN0b3IucHJlY2lzaW9uID0gcHIsIEN0b3Iucm91bmRpbmcgPSBybSwgdHJ1ZSk7XG59O1xuUC5pc0Zpbml0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gISF0aGlzLmQ7XG59O1xuUC5pc0ludGVnZXIgPSBQLmlzSW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhIXRoaXMuZCAmJiBtYXRoZmxvb3IodGhpcy5lIC8gTE9HX0JBU0UpID4gdGhpcy5kLmxlbmd0aCAtIDI7XG59O1xuUC5pc05hTiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMucztcbn07XG5QLmlzTmVnYXRpdmUgPSBQLmlzTmVnID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnMgPCAwO1xufTtcblAuaXNQb3NpdGl2ZSA9IFAuaXNQb3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucyA+IDA7XG59O1xuUC5pc1plcm8gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICEhdGhpcy5kICYmIHRoaXMuZFswXSA9PT0gMDtcbn07XG5QLmxlc3NUaGFuID0gUC5sdCA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIHRoaXMuY21wKHkpIDwgMDtcbn07XG5QLmxlc3NUaGFuT3JFcXVhbFRvID0gUC5sdGUgPSBmdW5jdGlvbih5KSB7XG4gIHJldHVybiB0aGlzLmNtcCh5KSA8IDE7XG59O1xuUC5sb2dhcml0aG0gPSBQLmxvZyA9IGZ1bmN0aW9uKGJhc2UpIHtcbiAgdmFyIGlzQmFzZTEwLCBkLCBkZW5vbWluYXRvciwgaywgaW5mLCBudW0sIHNkLCByLCBhcmcgPSB0aGlzLCBDdG9yID0gYXJnLmNvbnN0cnVjdG9yLCBwciA9IEN0b3IucHJlY2lzaW9uLCBybSA9IEN0b3Iucm91bmRpbmcsIGd1YXJkID0gNTtcbiAgaWYgKGJhc2UgPT0gbnVsbCkge1xuICAgIGJhc2UgPSBuZXcgQ3RvcigxMCk7XG4gICAgaXNCYXNlMTAgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGJhc2UgPSBuZXcgQ3RvcihiYXNlKTtcbiAgICBkID0gYmFzZS5kO1xuICAgIGlmIChiYXNlLnMgPCAwIHx8ICFkIHx8ICFkWzBdIHx8IGJhc2UuZXEoMSkpXG4gICAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgICBpc0Jhc2UxMCA9IGJhc2UuZXEoMTApO1xuICB9XG4gIGQgPSBhcmcuZDtcbiAgaWYgKGFyZy5zIDwgMCB8fCAhZCB8fCAhZFswXSB8fCBhcmcuZXEoMSkpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoZCAmJiAhZFswXSA/IC0xIC8gMCA6IGFyZy5zICE9IDEgPyBOYU4gOiBkID8gMCA6IDEgLyAwKTtcbiAgfVxuICBpZiAoaXNCYXNlMTApIHtcbiAgICBpZiAoZC5sZW5ndGggPiAxKSB7XG4gICAgICBpbmYgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGsgPSBkWzBdOyBrICUgMTAgPT09IDA7IClcbiAgICAgICAgayAvPSAxMDtcbiAgICAgIGluZiA9IGsgIT09IDE7XG4gICAgfVxuICB9XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHNkID0gcHIgKyBndWFyZDtcbiAgbnVtID0gbmF0dXJhbExvZ2FyaXRobShhcmcsIHNkKTtcbiAgZGVub21pbmF0b3IgPSBpc0Jhc2UxMCA/IGdldExuMTAoQ3Rvciwgc2QgKyAxMCkgOiBuYXR1cmFsTG9nYXJpdGhtKGJhc2UsIHNkKTtcbiAgciA9IGRpdmlkZShudW0sIGRlbm9taW5hdG9yLCBzZCwgMSk7XG4gIGlmIChjaGVja1JvdW5kaW5nRGlnaXRzKHIuZCwgayA9IHByLCBybSkpIHtcbiAgICBkbyB7XG4gICAgICBzZCArPSAxMDtcbiAgICAgIG51bSA9IG5hdHVyYWxMb2dhcml0aG0oYXJnLCBzZCk7XG4gICAgICBkZW5vbWluYXRvciA9IGlzQmFzZTEwID8gZ2V0TG4xMChDdG9yLCBzZCArIDEwKSA6IG5hdHVyYWxMb2dhcml0aG0oYmFzZSwgc2QpO1xuICAgICAgciA9IGRpdmlkZShudW0sIGRlbm9taW5hdG9yLCBzZCwgMSk7XG4gICAgICBpZiAoIWluZikge1xuICAgICAgICBpZiAoK2RpZ2l0c1RvU3RyaW5nKHIuZCkuc2xpY2UoayArIDEsIGsgKyAxNSkgKyAxID09IDFlMTQpIHtcbiAgICAgICAgICByID0gZmluYWxpc2UociwgcHIgKyAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IHdoaWxlIChjaGVja1JvdW5kaW5nRGlnaXRzKHIuZCwgayArPSAxMCwgcm0pKTtcbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiBmaW5hbGlzZShyLCBwciwgcm0pO1xufTtcblAubWludXMgPSBQLnN1YiA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGQsIGUsIGksIGosIGssIGxlbiwgcHIsIHJtLCB4ZCwgeGUsIHhMVHksIHlkLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHkgPSBuZXcgQ3Rvcih5KTtcbiAgaWYgKCF4LmQgfHwgIXkuZCkge1xuICAgIGlmICgheC5zIHx8ICF5LnMpXG4gICAgICB5ID0gbmV3IEN0b3IoTmFOKTtcbiAgICBlbHNlIGlmICh4LmQpXG4gICAgICB5LnMgPSAteS5zO1xuICAgIGVsc2VcbiAgICAgIHkgPSBuZXcgQ3Rvcih5LmQgfHwgeC5zICE9PSB5LnMgPyB4IDogTmFOKTtcbiAgICByZXR1cm4geTtcbiAgfVxuICBpZiAoeC5zICE9IHkucykge1xuICAgIHkucyA9IC15LnM7XG4gICAgcmV0dXJuIHgucGx1cyh5KTtcbiAgfVxuICB4ZCA9IHguZDtcbiAgeWQgPSB5LmQ7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKCF4ZFswXSB8fCAheWRbMF0pIHtcbiAgICBpZiAoeWRbMF0pXG4gICAgICB5LnMgPSAteS5zO1xuICAgIGVsc2UgaWYgKHhkWzBdKVxuICAgICAgeSA9IG5ldyBDdG9yKHgpO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBuZXcgQ3RvcihybSA9PT0gMyA/IC0wIDogMCk7XG4gICAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgcHIsIHJtKSA6IHk7XG4gIH1cbiAgZSA9IG1hdGhmbG9vcih5LmUgLyBMT0dfQkFTRSk7XG4gIHhlID0gbWF0aGZsb29yKHguZSAvIExPR19CQVNFKTtcbiAgeGQgPSB4ZC5zbGljZSgpO1xuICBrID0geGUgLSBlO1xuICBpZiAoaykge1xuICAgIHhMVHkgPSBrIDwgMDtcbiAgICBpZiAoeExUeSkge1xuICAgICAgZCA9IHhkO1xuICAgICAgayA9IC1rO1xuICAgICAgbGVuID0geWQubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0geWQ7XG4gICAgICBlID0geGU7XG4gICAgICBsZW4gPSB4ZC5sZW5ndGg7XG4gICAgfVxuICAgIGkgPSBNYXRoLm1heChNYXRoLmNlaWwocHIgLyBMT0dfQkFTRSksIGxlbikgKyAyO1xuICAgIGlmIChrID4gaSkge1xuICAgICAgayA9IGk7XG4gICAgICBkLmxlbmd0aCA9IDE7XG4gICAgfVxuICAgIGQucmV2ZXJzZSgpO1xuICAgIGZvciAoaSA9IGs7IGktLTsgKVxuICAgICAgZC5wdXNoKDApO1xuICAgIGQucmV2ZXJzZSgpO1xuICB9IGVsc2Uge1xuICAgIGkgPSB4ZC5sZW5ndGg7XG4gICAgbGVuID0geWQubGVuZ3RoO1xuICAgIHhMVHkgPSBpIDwgbGVuO1xuICAgIGlmICh4TFR5KVxuICAgICAgbGVuID0gaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh4ZFtpXSAhPSB5ZFtpXSkge1xuICAgICAgICB4TFR5ID0geGRbaV0gPCB5ZFtpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGsgPSAwO1xuICB9XG4gIGlmICh4TFR5KSB7XG4gICAgZCA9IHhkO1xuICAgIHhkID0geWQ7XG4gICAgeWQgPSBkO1xuICAgIHkucyA9IC15LnM7XG4gIH1cbiAgbGVuID0geGQubGVuZ3RoO1xuICBmb3IgKGkgPSB5ZC5sZW5ndGggLSBsZW47IGkgPiAwOyAtLWkpXG4gICAgeGRbbGVuKytdID0gMDtcbiAgZm9yIChpID0geWQubGVuZ3RoOyBpID4gazsgKSB7XG4gICAgaWYgKHhkWy0taV0gPCB5ZFtpXSkge1xuICAgICAgZm9yIChqID0gaTsgaiAmJiB4ZFstLWpdID09PSAwOyApXG4gICAgICAgIHhkW2pdID0gQkFTRSAtIDE7XG4gICAgICAtLXhkW2pdO1xuICAgICAgeGRbaV0gKz0gQkFTRTtcbiAgICB9XG4gICAgeGRbaV0gLT0geWRbaV07XG4gIH1cbiAgZm9yICg7IHhkWy0tbGVuXSA9PT0gMDsgKVxuICAgIHhkLnBvcCgpO1xuICBmb3IgKDsgeGRbMF0gPT09IDA7IHhkLnNoaWZ0KCkpXG4gICAgLS1lO1xuICBpZiAoIXhkWzBdKVxuICAgIHJldHVybiBuZXcgQ3RvcihybSA9PT0gMyA/IC0wIDogMCk7XG4gIHkuZCA9IHhkO1xuICB5LmUgPSBnZXRCYXNlMTBFeHBvbmVudCh4ZCwgZSk7XG4gIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIHByLCBybSkgOiB5O1xufTtcblAubW9kdWxvID0gUC5tb2QgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBxLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHkgPSBuZXcgQ3Rvcih5KTtcbiAgaWYgKCF4LmQgfHwgIXkucyB8fCB5LmQgJiYgIXkuZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKCF5LmQgfHwgeC5kICYmICF4LmRbMF0pIHtcbiAgICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIEN0b3IucHJlY2lzaW9uLCBDdG9yLnJvdW5kaW5nKTtcbiAgfVxuICBleHRlcm5hbCA9IGZhbHNlO1xuICBpZiAoQ3Rvci5tb2R1bG8gPT0gOSkge1xuICAgIHEgPSBkaXZpZGUoeCwgeS5hYnMoKSwgMCwgMywgMSk7XG4gICAgcS5zICo9IHkucztcbiAgfSBlbHNlIHtcbiAgICBxID0gZGl2aWRlKHgsIHksIDAsIEN0b3IubW9kdWxvLCAxKTtcbiAgfVxuICBxID0gcS50aW1lcyh5KTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4geC5taW51cyhxKTtcbn07XG5QLm5hdHVyYWxFeHBvbmVudGlhbCA9IFAuZXhwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuYXR1cmFsRXhwb25lbnRpYWwodGhpcyk7XG59O1xuUC5uYXR1cmFsTG9nYXJpdGhtID0gUC5sbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmF0dXJhbExvZ2FyaXRobSh0aGlzKTtcbn07XG5QLm5lZ2F0ZWQgPSBQLm5lZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICB4LnMgPSAteC5zO1xuICByZXR1cm4gZmluYWxpc2UoeCk7XG59O1xuUC5wbHVzID0gUC5hZGQgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBjYXJyeSwgZCwgZSwgaSwgaywgbGVuLCBwciwgcm0sIHhkLCB5ZCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB5ID0gbmV3IEN0b3IoeSk7XG4gIGlmICgheC5kIHx8ICF5LmQpIHtcbiAgICBpZiAoIXgucyB8fCAheS5zKVxuICAgICAgeSA9IG5ldyBDdG9yKE5hTik7XG4gICAgZWxzZSBpZiAoIXguZClcbiAgICAgIHkgPSBuZXcgQ3Rvcih5LmQgfHwgeC5zID09PSB5LnMgPyB4IDogTmFOKTtcbiAgICByZXR1cm4geTtcbiAgfVxuICBpZiAoeC5zICE9IHkucykge1xuICAgIHkucyA9IC15LnM7XG4gICAgcmV0dXJuIHgubWludXMoeSk7XG4gIH1cbiAgeGQgPSB4LmQ7XG4gIHlkID0geS5kO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIGlmICgheGRbMF0gfHwgIXlkWzBdKSB7XG4gICAgaWYgKCF5ZFswXSlcbiAgICAgIHkgPSBuZXcgQ3Rvcih4KTtcbiAgICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbiAgfVxuICBrID0gbWF0aGZsb29yKHguZSAvIExPR19CQVNFKTtcbiAgZSA9IG1hdGhmbG9vcih5LmUgLyBMT0dfQkFTRSk7XG4gIHhkID0geGQuc2xpY2UoKTtcbiAgaSA9IGsgLSBlO1xuICBpZiAoaSkge1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgZCA9IHhkO1xuICAgICAgaSA9IC1pO1xuICAgICAgbGVuID0geWQubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0geWQ7XG4gICAgICBlID0gaztcbiAgICAgIGxlbiA9IHhkLmxlbmd0aDtcbiAgICB9XG4gICAgayA9IE1hdGguY2VpbChwciAvIExPR19CQVNFKTtcbiAgICBsZW4gPSBrID4gbGVuID8gayArIDEgOiBsZW4gKyAxO1xuICAgIGlmIChpID4gbGVuKSB7XG4gICAgICBpID0gbGVuO1xuICAgICAgZC5sZW5ndGggPSAxO1xuICAgIH1cbiAgICBkLnJldmVyc2UoKTtcbiAgICBmb3IgKDsgaS0tOyApXG4gICAgICBkLnB1c2goMCk7XG4gICAgZC5yZXZlcnNlKCk7XG4gIH1cbiAgbGVuID0geGQubGVuZ3RoO1xuICBpID0geWQubGVuZ3RoO1xuICBpZiAobGVuIC0gaSA8IDApIHtcbiAgICBpID0gbGVuO1xuICAgIGQgPSB5ZDtcbiAgICB5ZCA9IHhkO1xuICAgIHhkID0gZDtcbiAgfVxuICBmb3IgKGNhcnJ5ID0gMDsgaTsgKSB7XG4gICAgY2FycnkgPSAoeGRbLS1pXSA9IHhkW2ldICsgeWRbaV0gKyBjYXJyeSkgLyBCQVNFIHwgMDtcbiAgICB4ZFtpXSAlPSBCQVNFO1xuICB9XG4gIGlmIChjYXJyeSkge1xuICAgIHhkLnVuc2hpZnQoY2FycnkpO1xuICAgICsrZTtcbiAgfVxuICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgeGRbLS1sZW5dID09IDA7IClcbiAgICB4ZC5wb3AoKTtcbiAgeS5kID0geGQ7XG4gIHkuZSA9IGdldEJhc2UxMEV4cG9uZW50KHhkLCBlKTtcbiAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgcHIsIHJtKSA6IHk7XG59O1xuUC5wcmVjaXNpb24gPSBQLnNkID0gZnVuY3Rpb24oeikge1xuICB2YXIgaywgeCA9IHRoaXM7XG4gIGlmICh6ICE9PSB2b2lkIDAgJiYgeiAhPT0gISF6ICYmIHogIT09IDEgJiYgeiAhPT0gMClcbiAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyB6KTtcbiAgaWYgKHguZCkge1xuICAgIGsgPSBnZXRQcmVjaXNpb24oeC5kKTtcbiAgICBpZiAoeiAmJiB4LmUgKyAxID4gaylcbiAgICAgIGsgPSB4LmUgKyAxO1xuICB9IGVsc2Uge1xuICAgIGsgPSBOYU47XG4gIH1cbiAgcmV0dXJuIGs7XG59O1xuUC5yb3VuZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIHguZSArIDEsIEN0b3Iucm91bmRpbmcpO1xufTtcblAuc2luZSA9IFAuc2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoeC5lLCB4LnNkKCkpICsgTE9HX0JBU0U7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0gc2luZShDdG9yLCB0b0xlc3NUaGFuSGFsZlBpKEN0b3IsIHgpKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UocXVhZHJhbnQgPiAyID8geC5uZWcoKSA6IHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC5zcXVhcmVSb290ID0gUC5zcXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtLCBuLCBzZCwgciwgcmVwLCB0LCB4ID0gdGhpcywgZCA9IHguZCwgZSA9IHguZSwgcyA9IHgucywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChzICE9PSAxIHx8ICFkIHx8ICFkWzBdKSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKCFzIHx8IHMgPCAwICYmICghZCB8fCBkWzBdKSA/IE5hTiA6IGQgPyB4IDogMSAvIDApO1xuICB9XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHMgPSBNYXRoLnNxcnQoK3gpO1xuICBpZiAocyA9PSAwIHx8IHMgPT0gMSAvIDApIHtcbiAgICBuID0gZGlnaXRzVG9TdHJpbmcoZCk7XG4gICAgaWYgKChuLmxlbmd0aCArIGUpICUgMiA9PSAwKVxuICAgICAgbiArPSBcIjBcIjtcbiAgICBzID0gTWF0aC5zcXJ0KG4pO1xuICAgIGUgPSBtYXRoZmxvb3IoKGUgKyAxKSAvIDIpIC0gKGUgPCAwIHx8IGUgJSAyKTtcbiAgICBpZiAocyA9PSAxIC8gMCkge1xuICAgICAgbiA9IFwiNWVcIiArIGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBzLnRvRXhwb25lbnRpYWwoKTtcbiAgICAgIG4gPSBuLnNsaWNlKDAsIG4uaW5kZXhPZihcImVcIikgKyAxKSArIGU7XG4gICAgfVxuICAgIHIgPSBuZXcgQ3RvcihuKTtcbiAgfSBlbHNlIHtcbiAgICByID0gbmV3IEN0b3Iocy50b1N0cmluZygpKTtcbiAgfVxuICBzZCA9IChlID0gQ3Rvci5wcmVjaXNpb24pICsgMztcbiAgZm9yICg7IDsgKSB7XG4gICAgdCA9IHI7XG4gICAgciA9IHQucGx1cyhkaXZpZGUoeCwgdCwgc2QgKyAyLCAxKSkudGltZXMoMC41KTtcbiAgICBpZiAoZGlnaXRzVG9TdHJpbmcodC5kKS5zbGljZSgwLCBzZCkgPT09IChuID0gZGlnaXRzVG9TdHJpbmcoci5kKSkuc2xpY2UoMCwgc2QpKSB7XG4gICAgICBuID0gbi5zbGljZShzZCAtIDMsIHNkICsgMSk7XG4gICAgICBpZiAobiA9PSBcIjk5OTlcIiB8fCAhcmVwICYmIG4gPT0gXCI0OTk5XCIpIHtcbiAgICAgICAgaWYgKCFyZXApIHtcbiAgICAgICAgICBmaW5hbGlzZSh0LCBlICsgMSwgMCk7XG4gICAgICAgICAgaWYgKHQudGltZXModCkuZXEoeCkpIHtcbiAgICAgICAgICAgIHIgPSB0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNkICs9IDQ7XG4gICAgICAgIHJlcCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIStuIHx8ICErbi5zbGljZSgxKSAmJiBuLmNoYXJBdCgwKSA9PSBcIjVcIikge1xuICAgICAgICAgIGZpbmFsaXNlKHIsIGUgKyAxLCAxKTtcbiAgICAgICAgICBtID0gIXIudGltZXMocikuZXEoeCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIGUsIEN0b3Iucm91bmRpbmcsIG0pO1xufTtcblAudGFuZ2VudCA9IFAudGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgMTA7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0geC5zaW4oKTtcbiAgeC5zID0gMTtcbiAgeCA9IGRpdmlkZSh4LCBuZXcgQ3RvcigxKS5taW51cyh4LnRpbWVzKHgpKS5zcXJ0KCksIHByICsgMTAsIDApO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZShxdWFkcmFudCA9PSAyIHx8IHF1YWRyYW50ID09IDQgPyB4Lm5lZygpIDogeCwgcHIsIHJtLCB0cnVlKTtcbn07XG5QLnRpbWVzID0gUC5tdWwgPSBmdW5jdGlvbih5KSB7XG4gIHZhciBjYXJyeSwgZSwgaSwgaywgciwgckwsIHQsIHhkTCwgeWRMLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHhkID0geC5kLCB5ZCA9ICh5ID0gbmV3IEN0b3IoeSkpLmQ7XG4gIHkucyAqPSB4LnM7XG4gIGlmICgheGQgfHwgIXhkWzBdIHx8ICF5ZCB8fCAheWRbMF0pIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoIXkucyB8fCB4ZCAmJiAheGRbMF0gJiYgIXlkIHx8IHlkICYmICF5ZFswXSAmJiAheGQgPyBOYU4gOiAheGQgfHwgIXlkID8geS5zIC8gMCA6IHkucyAqIDApO1xuICB9XG4gIGUgPSBtYXRoZmxvb3IoeC5lIC8gTE9HX0JBU0UpICsgbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgeGRMID0geGQubGVuZ3RoO1xuICB5ZEwgPSB5ZC5sZW5ndGg7XG4gIGlmICh4ZEwgPCB5ZEwpIHtcbiAgICByID0geGQ7XG4gICAgeGQgPSB5ZDtcbiAgICB5ZCA9IHI7XG4gICAgckwgPSB4ZEw7XG4gICAgeGRMID0geWRMO1xuICAgIHlkTCA9IHJMO1xuICB9XG4gIHIgPSBbXTtcbiAgckwgPSB4ZEwgKyB5ZEw7XG4gIGZvciAoaSA9IHJMOyBpLS07IClcbiAgICByLnB1c2goMCk7XG4gIGZvciAoaSA9IHlkTDsgLS1pID49IDA7ICkge1xuICAgIGNhcnJ5ID0gMDtcbiAgICBmb3IgKGsgPSB4ZEwgKyBpOyBrID4gaTsgKSB7XG4gICAgICB0ID0gcltrXSArIHlkW2ldICogeGRbayAtIGkgLSAxXSArIGNhcnJ5O1xuICAgICAgcltrLS1dID0gdCAlIEJBU0UgfCAwO1xuICAgICAgY2FycnkgPSB0IC8gQkFTRSB8IDA7XG4gICAgfVxuICAgIHJba10gPSAocltrXSArIGNhcnJ5KSAlIEJBU0UgfCAwO1xuICB9XG4gIGZvciAoOyAhclstLXJMXTsgKVxuICAgIHIucG9wKCk7XG4gIGlmIChjYXJyeSlcbiAgICArK2U7XG4gIGVsc2VcbiAgICByLnNoaWZ0KCk7XG4gIHkuZCA9IHI7XG4gIHkuZSA9IGdldEJhc2UxMEV4cG9uZW50KHIsIGUpO1xuICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBDdG9yLnByZWNpc2lvbiwgQ3Rvci5yb3VuZGluZykgOiB5O1xufTtcblAudG9CaW5hcnkgPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgcmV0dXJuIHRvU3RyaW5nQmluYXJ5KHRoaXMsIDIsIHNkLCBybSk7XG59O1xuUC50b0RlY2ltYWxQbGFjZXMgPSBQLnRvRFAgPSBmdW5jdGlvbihkcCwgcm0pIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeCA9IG5ldyBDdG9yKHgpO1xuICBpZiAoZHAgPT09IHZvaWQgMClcbiAgICByZXR1cm4geDtcbiAgY2hlY2tJbnQzMihkcCwgMCwgTUFYX0RJR0lUUyk7XG4gIGlmIChybSA9PT0gdm9pZCAwKVxuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgZWxzZVxuICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICByZXR1cm4gZmluYWxpc2UoeCwgZHAgKyB4LmUgKyAxLCBybSk7XG59O1xuUC50b0V4cG9uZW50aWFsID0gZnVuY3Rpb24oZHAsIHJtKSB7XG4gIHZhciBzdHIsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGRwID09PSB2b2lkIDApIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgICB4ID0gZmluYWxpc2UobmV3IEN0b3IoeCksIGRwICsgMSwgcm0pO1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHRydWUsIGRwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHguaXNOZWcoKSAmJiAheC5pc1plcm8oKSA/IFwiLVwiICsgc3RyIDogc3RyO1xufTtcblAudG9GaXhlZCA9IGZ1bmN0aW9uKGRwLCBybSkge1xuICB2YXIgc3RyLCB5LCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChkcCA9PT0gdm9pZCAwKSB7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tJbnQzMihkcCwgMCwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gICAgeSA9IGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBkcCArIHguZSArIDEsIHJtKTtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh5LCBmYWxzZSwgZHAgKyB5LmUgKyAxKTtcbiAgfVxuICByZXR1cm4geC5pc05lZygpICYmICF4LmlzWmVybygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuUC50b0ZyYWN0aW9uID0gZnVuY3Rpb24obWF4RCkge1xuICB2YXIgZCwgZDAsIGQxLCBkMiwgZSwgaywgbiwgbjAsIG4xLCBwciwgcSwgciwgeCA9IHRoaXMsIHhkID0geC5kLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4ZClcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIG4xID0gZDAgPSBuZXcgQ3RvcigxKTtcbiAgZDEgPSBuMCA9IG5ldyBDdG9yKDApO1xuICBkID0gbmV3IEN0b3IoZDEpO1xuICBlID0gZC5lID0gZ2V0UHJlY2lzaW9uKHhkKSAtIHguZSAtIDE7XG4gIGsgPSBlICUgTE9HX0JBU0U7XG4gIGQuZFswXSA9IG1hdGhwb3coMTAsIGsgPCAwID8gTE9HX0JBU0UgKyBrIDogayk7XG4gIGlmIChtYXhEID09IG51bGwpIHtcbiAgICBtYXhEID0gZSA+IDAgPyBkIDogbjE7XG4gIH0gZWxzZSB7XG4gICAgbiA9IG5ldyBDdG9yKG1heEQpO1xuICAgIGlmICghbi5pc0ludCgpIHx8IG4ubHQobjEpKVxuICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgbik7XG4gICAgbWF4RCA9IG4uZ3QoZCkgPyBlID4gMCA/IGQgOiBuMSA6IG47XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgbiA9IG5ldyBDdG9yKGRpZ2l0c1RvU3RyaW5nKHhkKSk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIEN0b3IucHJlY2lzaW9uID0gZSA9IHhkLmxlbmd0aCAqIExPR19CQVNFICogMjtcbiAgZm9yICg7IDsgKSB7XG4gICAgcSA9IGRpdmlkZShuLCBkLCAwLCAxLCAxKTtcbiAgICBkMiA9IGQwLnBsdXMocS50aW1lcyhkMSkpO1xuICAgIGlmIChkMi5jbXAobWF4RCkgPT0gMSlcbiAgICAgIGJyZWFrO1xuICAgIGQwID0gZDE7XG4gICAgZDEgPSBkMjtcbiAgICBkMiA9IG4xO1xuICAgIG4xID0gbjAucGx1cyhxLnRpbWVzKGQyKSk7XG4gICAgbjAgPSBkMjtcbiAgICBkMiA9IGQ7XG4gICAgZCA9IG4ubWludXMocS50aW1lcyhkMikpO1xuICAgIG4gPSBkMjtcbiAgfVxuICBkMiA9IGRpdmlkZShtYXhELm1pbnVzKGQwKSwgZDEsIDAsIDEsIDEpO1xuICBuMCA9IG4wLnBsdXMoZDIudGltZXMobjEpKTtcbiAgZDAgPSBkMC5wbHVzKGQyLnRpbWVzKGQxKSk7XG4gIG4wLnMgPSBuMS5zID0geC5zO1xuICByID0gZGl2aWRlKG4xLCBkMSwgZSwgMSkubWludXMoeCkuYWJzKCkuY21wKGRpdmlkZShuMCwgZDAsIGUsIDEpLm1pbnVzKHgpLmFicygpKSA8IDEgPyBbbjEsIGQxXSA6IFtuMCwgZDBdO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiByO1xufTtcblAudG9IZXhhZGVjaW1hbCA9IFAudG9IZXggPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgcmV0dXJuIHRvU3RyaW5nQmluYXJ5KHRoaXMsIDE2LCBzZCwgcm0pO1xufTtcblAudG9OZWFyZXN0ID0gZnVuY3Rpb24oeSwgcm0pIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeCA9IG5ldyBDdG9yKHgpO1xuICBpZiAoeSA9PSBudWxsKSB7XG4gICAgaWYgKCF4LmQpXG4gICAgICByZXR1cm4geDtcbiAgICB5ID0gbmV3IEN0b3IoMSk7XG4gICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICB9IGVsc2Uge1xuICAgIHkgPSBuZXcgQ3Rvcih5KTtcbiAgICBpZiAocm0gPT09IHZvaWQgMCkge1xuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgICB9XG4gICAgaWYgKCF4LmQpXG4gICAgICByZXR1cm4geS5zID8geCA6IHk7XG4gICAgaWYgKCF5LmQpIHtcbiAgICAgIGlmICh5LnMpXG4gICAgICAgIHkucyA9IHgucztcbiAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgfVxuICBpZiAoeS5kWzBdKSB7XG4gICAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgICB4ID0gZGl2aWRlKHgsIHksIDAsIHJtLCAxKS50aW1lcyh5KTtcbiAgICBleHRlcm5hbCA9IHRydWU7XG4gICAgZmluYWxpc2UoeCk7XG4gIH0gZWxzZSB7XG4gICAgeS5zID0geC5zO1xuICAgIHggPSB5O1xuICB9XG4gIHJldHVybiB4O1xufTtcblAudG9OdW1iZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICt0aGlzO1xufTtcblAudG9PY3RhbCA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICByZXR1cm4gdG9TdHJpbmdCaW5hcnkodGhpcywgOCwgc2QsIHJtKTtcbn07XG5QLnRvUG93ZXIgPSBQLnBvdyA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGUsIGssIHByLCByLCBybSwgcywgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCB5biA9ICsoeSA9IG5ldyBDdG9yKHkpKTtcbiAgaWYgKCF4LmQgfHwgIXkuZCB8fCAheC5kWzBdIHx8ICF5LmRbMF0pXG4gICAgcmV0dXJuIG5ldyBDdG9yKG1hdGhwb3coK3gsIHluKSk7XG4gIHggPSBuZXcgQ3Rvcih4KTtcbiAgaWYgKHguZXEoMSkpXG4gICAgcmV0dXJuIHg7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKHkuZXEoMSkpXG4gICAgcmV0dXJuIGZpbmFsaXNlKHgsIHByLCBybSk7XG4gIGUgPSBtYXRoZmxvb3IoeS5lIC8gTE9HX0JBU0UpO1xuICBpZiAoZSA+PSB5LmQubGVuZ3RoIC0gMSAmJiAoayA9IHluIDwgMCA/IC15biA6IHluKSA8PSBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgciA9IGludFBvdyhDdG9yLCB4LCBrLCBwcik7XG4gICAgcmV0dXJuIHkucyA8IDAgPyBuZXcgQ3RvcigxKS5kaXYocikgOiBmaW5hbGlzZShyLCBwciwgcm0pO1xuICB9XG4gIHMgPSB4LnM7XG4gIGlmIChzIDwgMCkge1xuICAgIGlmIChlIDwgeS5kLmxlbmd0aCAtIDEpXG4gICAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgICBpZiAoKHkuZFtlXSAmIDEpID09IDApXG4gICAgICBzID0gMTtcbiAgICBpZiAoeC5lID09IDAgJiYgeC5kWzBdID09IDEgJiYgeC5kLmxlbmd0aCA9PSAxKSB7XG4gICAgICB4LnMgPSBzO1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9XG4gIGsgPSBtYXRocG93KCt4LCB5bik7XG4gIGUgPSBrID09IDAgfHwgIWlzRmluaXRlKGspID8gbWF0aGZsb29yKHluICogKE1hdGgubG9nKFwiMC5cIiArIGRpZ2l0c1RvU3RyaW5nKHguZCkpIC8gTWF0aC5MTjEwICsgeC5lICsgMSkpIDogbmV3IEN0b3IoayArIFwiXCIpLmU7XG4gIGlmIChlID4gQ3Rvci5tYXhFICsgMSB8fCBlIDwgQ3Rvci5taW5FIC0gMSlcbiAgICByZXR1cm4gbmV3IEN0b3IoZSA+IDAgPyBzIC8gMCA6IDApO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBDdG9yLnJvdW5kaW5nID0geC5zID0gMTtcbiAgayA9IE1hdGgubWluKDEyLCAoZSArIFwiXCIpLmxlbmd0aCk7XG4gIHIgPSBuYXR1cmFsRXhwb25lbnRpYWwoeS50aW1lcyhuYXR1cmFsTG9nYXJpdGhtKHgsIHByICsgaykpLCBwcik7XG4gIGlmIChyLmQpIHtcbiAgICByID0gZmluYWxpc2UociwgcHIgKyA1LCAxKTtcbiAgICBpZiAoY2hlY2tSb3VuZGluZ0RpZ2l0cyhyLmQsIHByLCBybSkpIHtcbiAgICAgIGUgPSBwciArIDEwO1xuICAgICAgciA9IGZpbmFsaXNlKG5hdHVyYWxFeHBvbmVudGlhbCh5LnRpbWVzKG5hdHVyYWxMb2dhcml0aG0oeCwgZSArIGspKSwgZSksIGUgKyA1LCAxKTtcbiAgICAgIGlmICgrZGlnaXRzVG9TdHJpbmcoci5kKS5zbGljZShwciArIDEsIHByICsgMTUpICsgMSA9PSAxZTE0KSB7XG4gICAgICAgIHIgPSBmaW5hbGlzZShyLCBwciArIDEsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByLnMgPSBzO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIHByLCBybSk7XG59O1xuUC50b1ByZWNpc2lvbiA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICB2YXIgc3RyLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChzZCA9PT0gdm9pZCAwKSB7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgeC5lIDw9IEN0b3IudG9FeHBOZWcgfHwgeC5lID49IEN0b3IudG9FeHBQb3MpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrSW50MzIoc2QsIDEsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIHggPSBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgc2QsIHJtKTtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCBzZCA8PSB4LmUgfHwgeC5lIDw9IEN0b3IudG9FeHBOZWcsIHNkKTtcbiAgfVxuICByZXR1cm4geC5pc05lZygpICYmICF4LmlzWmVybygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuUC50b1NpZ25pZmljYW50RGlnaXRzID0gUC50b1NEID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmIChzZCA9PT0gdm9pZCAwKSB7XG4gICAgc2QgPSBDdG9yLnByZWNpc2lvbjtcbiAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gIH1cbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBzZCwgcm0pO1xufTtcblAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgeC5lIDw9IEN0b3IudG9FeHBOZWcgfHwgeC5lID49IEN0b3IudG9FeHBQb3MpO1xuICByZXR1cm4geC5pc05lZygpICYmICF4LmlzWmVybygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuUC50cnVuY2F0ZWQgPSBQLnRydW5jID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSwgdGhpcy5lICsgMSwgMSk7XG59O1xuUC52YWx1ZU9mID0gUC50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgeC5lIDw9IEN0b3IudG9FeHBOZWcgfHwgeC5lID49IEN0b3IudG9FeHBQb3MpO1xuICByZXR1cm4geC5pc05lZygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuZnVuY3Rpb24gZGlnaXRzVG9TdHJpbmcoZCkge1xuICB2YXIgaSwgaywgd3MsIGluZGV4T2ZMYXN0V29yZCA9IGQubGVuZ3RoIC0gMSwgc3RyID0gXCJcIiwgdyA9IGRbMF07XG4gIGlmIChpbmRleE9mTGFzdFdvcmQgPiAwKSB7XG4gICAgc3RyICs9IHc7XG4gICAgZm9yIChpID0gMTsgaSA8IGluZGV4T2ZMYXN0V29yZDsgaSsrKSB7XG4gICAgICB3cyA9IGRbaV0gKyBcIlwiO1xuICAgICAgayA9IExPR19CQVNFIC0gd3MubGVuZ3RoO1xuICAgICAgaWYgKGspXG4gICAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xuICAgICAgc3RyICs9IHdzO1xuICAgIH1cbiAgICB3ID0gZFtpXTtcbiAgICB3cyA9IHcgKyBcIlwiO1xuICAgIGsgPSBMT0dfQkFTRSAtIHdzLmxlbmd0aDtcbiAgICBpZiAoaylcbiAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xuICB9IGVsc2UgaWYgKHcgPT09IDApIHtcbiAgICByZXR1cm4gXCIwXCI7XG4gIH1cbiAgZm9yICg7IHcgJSAxMCA9PT0gMDsgKVxuICAgIHcgLz0gMTA7XG4gIHJldHVybiBzdHIgKyB3O1xufVxuZnVuY3Rpb24gY2hlY2tJbnQzMihpLCBtaW4yLCBtYXgyKSB7XG4gIGlmIChpICE9PSB+fmkgfHwgaSA8IG1pbjIgfHwgaSA+IG1heDIpIHtcbiAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBpKTtcbiAgfVxufVxuZnVuY3Rpb24gY2hlY2tSb3VuZGluZ0RpZ2l0cyhkLCBpLCBybSwgcmVwZWF0aW5nKSB7XG4gIHZhciBkaSwgaywgciwgcmQ7XG4gIGZvciAoayA9IGRbMF07IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgLS1pO1xuICBpZiAoLS1pIDwgMCkge1xuICAgIGkgKz0gTE9HX0JBU0U7XG4gICAgZGkgPSAwO1xuICB9IGVsc2Uge1xuICAgIGRpID0gTWF0aC5jZWlsKChpICsgMSkgLyBMT0dfQkFTRSk7XG4gICAgaSAlPSBMT0dfQkFTRTtcbiAgfVxuICBrID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBpKTtcbiAgcmQgPSBkW2RpXSAlIGsgfCAwO1xuICBpZiAocmVwZWF0aW5nID09IG51bGwpIHtcbiAgICBpZiAoaSA8IDMpIHtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIHJkID0gcmQgLyAxMDAgfCAwO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKVxuICAgICAgICByZCA9IHJkIC8gMTAgfCAwO1xuICAgICAgciA9IHJtIDwgNCAmJiByZCA9PSA5OTk5OSB8fCBybSA+IDMgJiYgcmQgPT0gNDk5OTkgfHwgcmQgPT0gNWU0IHx8IHJkID09IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSAocm0gPCA0ICYmIHJkICsgMSA9PSBrIHx8IHJtID4gMyAmJiByZCArIDEgPT0gayAvIDIpICYmIChkW2RpICsgMV0gLyBrIC8gMTAwIHwgMCkgPT0gbWF0aHBvdygxMCwgaSAtIDIpIC0gMSB8fCAocmQgPT0gayAvIDIgfHwgcmQgPT0gMCkgJiYgKGRbZGkgKyAxXSAvIGsgLyAxMDAgfCAwKSA9PSAwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaSA8IDQpIHtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIHJkID0gcmQgLyAxZTMgfCAwO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKVxuICAgICAgICByZCA9IHJkIC8gMTAwIHwgMDtcbiAgICAgIGVsc2UgaWYgKGkgPT0gMilcbiAgICAgICAgcmQgPSByZCAvIDEwIHwgMDtcbiAgICAgIHIgPSAocmVwZWF0aW5nIHx8IHJtIDwgNCkgJiYgcmQgPT0gOTk5OSB8fCAhcmVwZWF0aW5nICYmIHJtID4gMyAmJiByZCA9PSA0OTk5O1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gKChyZXBlYXRpbmcgfHwgcm0gPCA0KSAmJiByZCArIDEgPT0gayB8fCAhcmVwZWF0aW5nICYmIHJtID4gMyAmJiByZCArIDEgPT0gayAvIDIpICYmIChkW2RpICsgMV0gLyBrIC8gMWUzIHwgMCkgPT0gbWF0aHBvdygxMCwgaSAtIDMpIC0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBjb252ZXJ0QmFzZShzdHIsIGJhc2VJbiwgYmFzZU91dCkge1xuICB2YXIgaiwgYXJyID0gWzBdLCBhcnJMLCBpID0gMCwgc3RyTCA9IHN0ci5sZW5ndGg7XG4gIGZvciAoOyBpIDwgc3RyTDsgKSB7XG4gICAgZm9yIChhcnJMID0gYXJyLmxlbmd0aDsgYXJyTC0tOyApXG4gICAgICBhcnJbYXJyTF0gKj0gYmFzZUluO1xuICAgIGFyclswXSArPSBOVU1FUkFMUy5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSk7XG4gICAgZm9yIChqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGFycltqXSA+IGJhc2VPdXQgLSAxKSB7XG4gICAgICAgIGlmIChhcnJbaiArIDFdID09PSB2b2lkIDApXG4gICAgICAgICAgYXJyW2ogKyAxXSA9IDA7XG4gICAgICAgIGFycltqICsgMV0gKz0gYXJyW2pdIC8gYmFzZU91dCB8IDA7XG4gICAgICAgIGFycltqXSAlPSBiYXNlT3V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyLnJldmVyc2UoKTtcbn1cbmZ1bmN0aW9uIGNvc2luZShDdG9yLCB4KSB7XG4gIHZhciBrLCBsZW4sIHk7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiB4O1xuICBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMzIpIHtcbiAgICBrID0gTWF0aC5jZWlsKGxlbiAvIDMpO1xuICAgIHkgPSAoMSAvIHRpbnlQb3coNCwgaykpLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgayA9IDE2O1xuICAgIHkgPSBcIjIuMzI4MzA2NDM2NTM4Njk2Mjg5MDYyNWUtMTBcIjtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiArPSBrO1xuICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDEsIHgudGltZXMoeSksIG5ldyBDdG9yKDEpKTtcbiAgZm9yICh2YXIgaSA9IGs7IGktLTsgKSB7XG4gICAgdmFyIGNvczJ4ID0geC50aW1lcyh4KTtcbiAgICB4ID0gY29zMngudGltZXMoY29zMngpLm1pbnVzKGNvczJ4KS50aW1lcyg4KS5wbHVzKDEpO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uIC09IGs7XG4gIHJldHVybiB4O1xufVxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBtdWx0aXBseUludGVnZXIoeCwgaywgYmFzZSkge1xuICAgIHZhciB0ZW1wLCBjYXJyeSA9IDAsIGkgPSB4Lmxlbmd0aDtcbiAgICBmb3IgKHggPSB4LnNsaWNlKCk7IGktLTsgKSB7XG4gICAgICB0ZW1wID0geFtpXSAqIGsgKyBjYXJyeTtcbiAgICAgIHhbaV0gPSB0ZW1wICUgYmFzZSB8IDA7XG4gICAgICBjYXJyeSA9IHRlbXAgLyBiYXNlIHwgMDtcbiAgICB9XG4gICAgaWYgKGNhcnJ5KVxuICAgICAgeC51bnNoaWZ0KGNhcnJ5KTtcbiAgICByZXR1cm4geDtcbiAgfVxuICBmdW5jdGlvbiBjb21wYXJlKGEsIGIsIGFMLCBiTCkge1xuICAgIHZhciBpLCByO1xuICAgIGlmIChhTCAhPSBiTCkge1xuICAgICAgciA9IGFMID4gYkwgPyAxIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IHIgPSAwOyBpIDwgYUw7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPSBiW2ldKSB7XG4gICAgICAgICAgciA9IGFbaV0gPiBiW2ldID8gMSA6IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGFMLCBiYXNlKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvciAoOyBhTC0tOyApIHtcbiAgICAgIGFbYUxdIC09IGk7XG4gICAgICBpID0gYVthTF0gPCBiW2FMXSA/IDEgOiAwO1xuICAgICAgYVthTF0gPSBpICogYmFzZSArIGFbYUxdIC0gYlthTF07XG4gICAgfVxuICAgIGZvciAoOyAhYVswXSAmJiBhLmxlbmd0aCA+IDE7IClcbiAgICAgIGEuc2hpZnQoKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oeCwgeSwgcHIsIHJtLCBkcCwgYmFzZSkge1xuICAgIHZhciBjbXAsIGUsIGksIGssIGxvZ0Jhc2UsIG1vcmUsIHByb2QsIHByb2RMLCBxLCBxZCwgcmVtLCByZW1MLCByZW0wLCBzZCwgdCwgeGksIHhMLCB5ZDAsIHlMLCB5eiwgQ3RvciA9IHguY29uc3RydWN0b3IsIHNpZ24yID0geC5zID09IHkucyA/IDEgOiAtMSwgeGQgPSB4LmQsIHlkID0geS5kO1xuICAgIGlmICgheGQgfHwgIXhkWzBdIHx8ICF5ZCB8fCAheWRbMF0pIHtcbiAgICAgIHJldHVybiBuZXcgQ3RvcigheC5zIHx8ICF5LnMgfHwgKHhkID8geWQgJiYgeGRbMF0gPT0geWRbMF0gOiAheWQpID8gTmFOIDogeGQgJiYgeGRbMF0gPT0gMCB8fCAheWQgPyBzaWduMiAqIDAgOiBzaWduMiAvIDApO1xuICAgIH1cbiAgICBpZiAoYmFzZSkge1xuICAgICAgbG9nQmFzZSA9IDE7XG4gICAgICBlID0geC5lIC0geS5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gQkFTRTtcbiAgICAgIGxvZ0Jhc2UgPSBMT0dfQkFTRTtcbiAgICAgIGUgPSBtYXRoZmxvb3IoeC5lIC8gbG9nQmFzZSkgLSBtYXRoZmxvb3IoeS5lIC8gbG9nQmFzZSk7XG4gICAgfVxuICAgIHlMID0geWQubGVuZ3RoO1xuICAgIHhMID0geGQubGVuZ3RoO1xuICAgIHEgPSBuZXcgQ3RvcihzaWduMik7XG4gICAgcWQgPSBxLmQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyB5ZFtpXSA9PSAoeGRbaV0gfHwgMCk7IGkrKylcbiAgICAgIDtcbiAgICBpZiAoeWRbaV0gPiAoeGRbaV0gfHwgMCkpXG4gICAgICBlLS07XG4gICAgaWYgKHByID09IG51bGwpIHtcbiAgICAgIHNkID0gcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICB9IGVsc2UgaWYgKGRwKSB7XG4gICAgICBzZCA9IHByICsgKHguZSAtIHkuZSkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZCA9IHByO1xuICAgIH1cbiAgICBpZiAoc2QgPCAwKSB7XG4gICAgICBxZC5wdXNoKDEpO1xuICAgICAgbW9yZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNkID0gc2QgLyBsb2dCYXNlICsgMiB8IDA7XG4gICAgICBpID0gMDtcbiAgICAgIGlmICh5TCA9PSAxKSB7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB5ZCA9IHlkWzBdO1xuICAgICAgICBzZCsrO1xuICAgICAgICBmb3IgKDsgKGkgPCB4TCB8fCBrKSAmJiBzZC0tOyBpKyspIHtcbiAgICAgICAgICB0ID0gayAqIGJhc2UgKyAoeGRbaV0gfHwgMCk7XG4gICAgICAgICAgcWRbaV0gPSB0IC8geWQgfCAwO1xuICAgICAgICAgIGsgPSB0ICUgeWQgfCAwO1xuICAgICAgICB9XG4gICAgICAgIG1vcmUgPSBrIHx8IGkgPCB4TDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGsgPSBiYXNlIC8gKHlkWzBdICsgMSkgfCAwO1xuICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICB5ZCA9IG11bHRpcGx5SW50ZWdlcih5ZCwgaywgYmFzZSk7XG4gICAgICAgICAgeGQgPSBtdWx0aXBseUludGVnZXIoeGQsIGssIGJhc2UpO1xuICAgICAgICAgIHlMID0geWQubGVuZ3RoO1xuICAgICAgICAgIHhMID0geGQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHhpID0geUw7XG4gICAgICAgIHJlbSA9IHhkLnNsaWNlKDAsIHlMKTtcbiAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgIGZvciAoOyByZW1MIDwgeUw7IClcbiAgICAgICAgICByZW1bcmVtTCsrXSA9IDA7XG4gICAgICAgIHl6ID0geWQuc2xpY2UoKTtcbiAgICAgICAgeXoudW5zaGlmdCgwKTtcbiAgICAgICAgeWQwID0geWRbMF07XG4gICAgICAgIGlmICh5ZFsxXSA+PSBiYXNlIC8gMilcbiAgICAgICAgICArK3lkMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGsgPSAwO1xuICAgICAgICAgIGNtcCA9IGNvbXBhcmUoeWQsIHJlbSwgeUwsIHJlbUwpO1xuICAgICAgICAgIGlmIChjbXAgPCAwKSB7XG4gICAgICAgICAgICByZW0wID0gcmVtWzBdO1xuICAgICAgICAgICAgaWYgKHlMICE9IHJlbUwpXG4gICAgICAgICAgICAgIHJlbTAgPSByZW0wICogYmFzZSArIChyZW1bMV0gfHwgMCk7XG4gICAgICAgICAgICBrID0gcmVtMCAvIHlkMCB8IDA7XG4gICAgICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICAgICAgaWYgKGsgPj0gYmFzZSlcbiAgICAgICAgICAgICAgICBrID0gYmFzZSAtIDE7XG4gICAgICAgICAgICAgIHByb2QgPSBtdWx0aXBseUludGVnZXIoeWQsIGssIGJhc2UpO1xuICAgICAgICAgICAgICBwcm9kTCA9IHByb2QubGVuZ3RoO1xuICAgICAgICAgICAgICByZW1MID0gcmVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgY21wID0gY29tcGFyZShwcm9kLCByZW0sIHByb2RMLCByZW1MKTtcbiAgICAgICAgICAgICAgaWYgKGNtcCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgIHN1YnRyYWN0KHByb2QsIHlMIDwgcHJvZEwgPyB5eiA6IHlkLCBwcm9kTCwgYmFzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChrID09IDApXG4gICAgICAgICAgICAgICAgY21wID0gayA9IDE7XG4gICAgICAgICAgICAgIHByb2QgPSB5ZC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZEwgPSBwcm9kLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwcm9kTCA8IHJlbUwpXG4gICAgICAgICAgICAgIHByb2QudW5zaGlmdCgwKTtcbiAgICAgICAgICAgIHN1YnRyYWN0KHJlbSwgcHJvZCwgcmVtTCwgYmFzZSk7XG4gICAgICAgICAgICBpZiAoY21wID09IC0xKSB7XG4gICAgICAgICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICBjbXAgPSBjb21wYXJlKHlkLCByZW0sIHlMLCByZW1MKTtcbiAgICAgICAgICAgICAgaWYgKGNtcCA8IDEpIHtcbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgc3VidHJhY3QocmVtLCB5TCA8IHJlbUwgPyB5eiA6IHlkLCByZW1MLCBiYXNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbXAgPT09IDApIHtcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIHJlbSA9IFswXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWRbaSsrXSA9IGs7XG4gICAgICAgICAgaWYgKGNtcCAmJiByZW1bMF0pIHtcbiAgICAgICAgICAgIHJlbVtyZW1MKytdID0geGRbeGldIHx8IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbSA9IFt4ZFt4aV1dO1xuICAgICAgICAgICAgcmVtTCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoeGkrKyA8IHhMIHx8IHJlbVswXSAhPT0gdm9pZCAwKSAmJiBzZC0tKTtcbiAgICAgICAgbW9yZSA9IHJlbVswXSAhPT0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgaWYgKCFxZFswXSlcbiAgICAgICAgcWQuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKGxvZ0Jhc2UgPT0gMSkge1xuICAgICAgcS5lID0gZTtcbiAgICAgIGluZXhhY3QgPSBtb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAxLCBrID0gcWRbMF07IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgICAgIGkrKztcbiAgICAgIHEuZSA9IGkgKyBlICogbG9nQmFzZSAtIDE7XG4gICAgICBmaW5hbGlzZShxLCBkcCA/IHByICsgcS5lICsgMSA6IHByLCBybSwgbW9yZSk7XG4gICAgfVxuICAgIHJldHVybiBxO1xuICB9O1xufSgpO1xuZnVuY3Rpb24gZmluYWxpc2UoeCwgc2QsIHJtLCBpc1RydW5jYXRlZCkge1xuICB2YXIgZGlnaXRzLCBpLCBqLCBrLCByZCwgcm91bmRVcCwgdywgeGQsIHhkaSwgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIG91dDpcbiAgICBpZiAoc2QgIT0gbnVsbCkge1xuICAgICAgeGQgPSB4LmQ7XG4gICAgICBpZiAoIXhkKVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIGZvciAoZGlnaXRzID0gMSwgayA9IHhkWzBdOyBrID49IDEwOyBrIC89IDEwKVxuICAgICAgICBkaWdpdHMrKztcbiAgICAgIGkgPSBzZCAtIGRpZ2l0cztcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IExPR19CQVNFO1xuICAgICAgICBqID0gc2Q7XG4gICAgICAgIHcgPSB4ZFt4ZGkgPSAwXTtcbiAgICAgICAgcmQgPSB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpICUgMTAgfCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGRpID0gTWF0aC5jZWlsKChpICsgMSkgLyBMT0dfQkFTRSk7XG4gICAgICAgIGsgPSB4ZC5sZW5ndGg7XG4gICAgICAgIGlmICh4ZGkgPj0gaykge1xuICAgICAgICAgIGlmIChpc1RydW5jYXRlZCkge1xuICAgICAgICAgICAgZm9yICg7IGsrKyA8PSB4ZGk7IClcbiAgICAgICAgICAgICAgeGQucHVzaCgwKTtcbiAgICAgICAgICAgIHcgPSByZCA9IDA7XG4gICAgICAgICAgICBkaWdpdHMgPSAxO1xuICAgICAgICAgICAgaSAlPSBMT0dfQkFTRTtcbiAgICAgICAgICAgIGogPSBpIC0gTE9HX0JBU0UgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhayBvdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSBrID0geGRbeGRpXTtcbiAgICAgICAgICBmb3IgKGRpZ2l0cyA9IDE7IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgICAgICAgICBkaWdpdHMrKztcbiAgICAgICAgICBpICU9IExPR19CQVNFO1xuICAgICAgICAgIGogPSBpIC0gTE9HX0JBU0UgKyBkaWdpdHM7XG4gICAgICAgICAgcmQgPSBqIDwgMCA/IDAgOiB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpICUgMTAgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1RydW5jYXRlZCA9IGlzVHJ1bmNhdGVkIHx8IHNkIDwgMCB8fCB4ZFt4ZGkgKyAxXSAhPT0gdm9pZCAwIHx8IChqIDwgMCA/IHcgOiB3ICUgbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpKTtcbiAgICAgIHJvdW5kVXAgPSBybSA8IDQgPyAocmQgfHwgaXNUcnVuY2F0ZWQpICYmIChybSA9PSAwIHx8IHJtID09ICh4LnMgPCAwID8gMyA6IDIpKSA6IHJkID4gNSB8fCByZCA9PSA1ICYmIChybSA9PSA0IHx8IGlzVHJ1bmNhdGVkIHx8IHJtID09IDYgJiYgKGkgPiAwID8gaiA+IDAgPyB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaikgOiAwIDogeGRbeGRpIC0gMV0pICUgMTAgJiAxIHx8IHJtID09ICh4LnMgPCAwID8gOCA6IDcpKTtcbiAgICAgIGlmIChzZCA8IDEgfHwgIXhkWzBdKSB7XG4gICAgICAgIHhkLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChyb3VuZFVwKSB7XG4gICAgICAgICAgc2QgLT0geC5lICsgMTtcbiAgICAgICAgICB4ZFswXSA9IG1hdGhwb3coMTAsIChMT0dfQkFTRSAtIHNkICUgTE9HX0JBU0UpICUgTE9HX0JBU0UpO1xuICAgICAgICAgIHguZSA9IC1zZCB8fCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhkWzBdID0geC5lID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cbiAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgeGQubGVuZ3RoID0geGRpO1xuICAgICAgICBrID0gMTtcbiAgICAgICAgeGRpLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZC5sZW5ndGggPSB4ZGkgKyAxO1xuICAgICAgICBrID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBpKTtcbiAgICAgICAgeGRbeGRpXSA9IGogPiAwID8gKHcgLyBtYXRocG93KDEwLCBkaWdpdHMgLSBqKSAlIG1hdGhwb3coMTAsIGopIHwgMCkgKiBrIDogMDtcbiAgICAgIH1cbiAgICAgIGlmIChyb3VuZFVwKSB7XG4gICAgICAgIGZvciAoOyA7ICkge1xuICAgICAgICAgIGlmICh4ZGkgPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMSwgaiA9IHhkWzBdOyBqID49IDEwOyBqIC89IDEwKVxuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqID0geGRbMF0gKz0gaztcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGogPj0gMTA7IGogLz0gMTApXG4gICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIGlmIChpICE9IGspIHtcbiAgICAgICAgICAgICAgeC5lKys7XG4gICAgICAgICAgICAgIGlmICh4ZFswXSA9PSBCQVNFKVxuICAgICAgICAgICAgICAgIHhkWzBdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ZFt4ZGldICs9IGs7XG4gICAgICAgICAgICBpZiAoeGRbeGRpXSAhPSBCQVNFKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHhkW3hkaS0tXSA9IDA7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IHhkLmxlbmd0aDsgeGRbLS1pXSA9PT0gMDsgKVxuICAgICAgICB4ZC5wb3AoKTtcbiAgICB9XG4gIGlmIChleHRlcm5hbCkge1xuICAgIGlmICh4LmUgPiBDdG9yLm1heEUpIHtcbiAgICAgIHguZCA9IG51bGw7XG4gICAgICB4LmUgPSBOYU47XG4gICAgfSBlbHNlIGlmICh4LmUgPCBDdG9yLm1pbkUpIHtcbiAgICAgIHguZSA9IDA7XG4gICAgICB4LmQgPSBbMF07XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufVxuZnVuY3Rpb24gZmluaXRlVG9TdHJpbmcoeCwgaXNFeHAsIHNkKSB7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBub25GaW5pdGVUb1N0cmluZyh4KTtcbiAgdmFyIGssIGUgPSB4LmUsIHN0ciA9IGRpZ2l0c1RvU3RyaW5nKHguZCksIGxlbiA9IHN0ci5sZW5ndGg7XG4gIGlmIChpc0V4cCkge1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApIHtcbiAgICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkgKyBcIi5cIiArIHN0ci5zbGljZSgxKSArIGdldFplcm9TdHJpbmcoayk7XG4gICAgfSBlbHNlIGlmIChsZW4gPiAxKSB7XG4gICAgICBzdHIgPSBzdHIuY2hhckF0KDApICsgXCIuXCIgKyBzdHIuc2xpY2UoMSk7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArICh4LmUgPCAwID8gXCJlXCIgOiBcImUrXCIpICsgeC5lO1xuICB9IGVsc2UgaWYgKGUgPCAwKSB7XG4gICAgc3RyID0gXCIwLlwiICsgZ2V0WmVyb1N0cmluZygtZSAtIDEpICsgc3RyO1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApXG4gICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcbiAgfSBlbHNlIGlmIChlID49IGxlbikge1xuICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGUgKyAxIC0gbGVuKTtcbiAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGUgLSAxKSA+IDApXG4gICAgICBzdHIgPSBzdHIgKyBcIi5cIiArIGdldFplcm9TdHJpbmcoayk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKChrID0gZSArIDEpIDwgbGVuKVxuICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGspICsgXCIuXCIgKyBzdHIuc2xpY2Uoayk7XG4gICAgaWYgKHNkICYmIChrID0gc2QgLSBsZW4pID4gMCkge1xuICAgICAgaWYgKGUgKyAxID09PSBsZW4pXG4gICAgICAgIHN0ciArPSBcIi5cIjtcbiAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gZ2V0QmFzZTEwRXhwb25lbnQoZGlnaXRzLCBlKSB7XG4gIHZhciB3ID0gZGlnaXRzWzBdO1xuICBmb3IgKGUgKj0gTE9HX0JBU0U7IHcgPj0gMTA7IHcgLz0gMTApXG4gICAgZSsrO1xuICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIGdldExuMTAoQ3Rvciwgc2QsIHByKSB7XG4gIGlmIChzZCA+IExOMTBfUFJFQ0lTSU9OKSB7XG4gICAgZXh0ZXJuYWwgPSB0cnVlO1xuICAgIGlmIChwcilcbiAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgdGhyb3cgRXJyb3IocHJlY2lzaW9uTGltaXRFeGNlZWRlZCk7XG4gIH1cbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKExOMTApLCBzZCwgMSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBnZXRQaShDdG9yLCBzZCwgcm0pIHtcbiAgaWYgKHNkID4gUElfUFJFQ0lTSU9OKVxuICAgIHRocm93IEVycm9yKHByZWNpc2lvbkxpbWl0RXhjZWVkZWQpO1xuICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoUEkpLCBzZCwgcm0sIHRydWUpO1xufVxuZnVuY3Rpb24gZ2V0UHJlY2lzaW9uKGRpZ2l0cykge1xuICB2YXIgdyA9IGRpZ2l0cy5sZW5ndGggLSAxLCBsZW4gPSB3ICogTE9HX0JBU0UgKyAxO1xuICB3ID0gZGlnaXRzW3ddO1xuICBpZiAodykge1xuICAgIGZvciAoOyB3ICUgMTAgPT0gMDsgdyAvPSAxMClcbiAgICAgIGxlbi0tO1xuICAgIGZvciAodyA9IGRpZ2l0c1swXTsgdyA+PSAxMDsgdyAvPSAxMClcbiAgICAgIGxlbisrO1xuICB9XG4gIHJldHVybiBsZW47XG59XG5mdW5jdGlvbiBnZXRaZXJvU3RyaW5nKGspIHtcbiAgdmFyIHpzID0gXCJcIjtcbiAgZm9yICg7IGstLTsgKVxuICAgIHpzICs9IFwiMFwiO1xuICByZXR1cm4genM7XG59XG5mdW5jdGlvbiBpbnRQb3coQ3RvciwgeCwgbiwgcHIpIHtcbiAgdmFyIGlzVHJ1bmNhdGVkLCByID0gbmV3IEN0b3IoMSksIGsgPSBNYXRoLmNlaWwocHIgLyBMT0dfQkFTRSArIDQpO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBmb3IgKDsgOyApIHtcbiAgICBpZiAobiAlIDIpIHtcbiAgICAgIHIgPSByLnRpbWVzKHgpO1xuICAgICAgaWYgKHRydW5jYXRlKHIuZCwgaykpXG4gICAgICAgIGlzVHJ1bmNhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbiA9IG1hdGhmbG9vcihuIC8gMik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIG4gPSByLmQubGVuZ3RoIC0gMTtcbiAgICAgIGlmIChpc1RydW5jYXRlZCAmJiByLmRbbl0gPT09IDApXG4gICAgICAgICsrci5kW25dO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHggPSB4LnRpbWVzKHgpO1xuICAgIHRydW5jYXRlKHguZCwgayk7XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGlzT2RkKG4pIHtcbiAgcmV0dXJuIG4uZFtuLmQubGVuZ3RoIC0gMV0gJiAxO1xufVxuZnVuY3Rpb24gbWF4T3JNaW4oQ3RvciwgYXJncywgbHRndCkge1xuICB2YXIgeSwgeCA9IG5ldyBDdG9yKGFyZ3NbMF0pLCBpID0gMDtcbiAgZm9yICg7ICsraSA8IGFyZ3MubGVuZ3RoOyApIHtcbiAgICB5ID0gbmV3IEN0b3IoYXJnc1tpXSk7XG4gICAgaWYgKCF5LnMpIHtcbiAgICAgIHggPSB5O1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmICh4W2x0Z3RdKHkpKSB7XG4gICAgICB4ID0geTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiBuYXR1cmFsRXhwb25lbnRpYWwoeCwgc2QpIHtcbiAgdmFyIGRlbm9taW5hdG9yLCBndWFyZCwgaiwgcG93Miwgc3VtMiwgdCwgd3ByLCByZXAgPSAwLCBpID0gMCwgayA9IDAsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBybSA9IEN0b3Iucm91bmRpbmcsIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIGlmICgheC5kIHx8ICF4LmRbMF0gfHwgeC5lID4gMTcpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5kID8gIXguZFswXSA/IDEgOiB4LnMgPCAwID8gMCA6IDEgLyAwIDogeC5zID8geC5zIDwgMCA/IDAgOiB4IDogMCAvIDApO1xuICB9XG4gIGlmIChzZCA9PSBudWxsKSB7XG4gICAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgICB3cHIgPSBwcjtcbiAgfSBlbHNlIHtcbiAgICB3cHIgPSBzZDtcbiAgfVxuICB0ID0gbmV3IEN0b3IoMC4wMzEyNSk7XG4gIHdoaWxlICh4LmUgPiAtMikge1xuICAgIHggPSB4LnRpbWVzKHQpO1xuICAgIGsgKz0gNTtcbiAgfVxuICBndWFyZCA9IE1hdGgubG9nKG1hdGhwb3coMiwgaykpIC8gTWF0aC5MTjEwICogMiArIDUgfCAwO1xuICB3cHIgKz0gZ3VhcmQ7XG4gIGRlbm9taW5hdG9yID0gcG93MiA9IHN1bTIgPSBuZXcgQ3RvcigxKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHI7XG4gIGZvciAoOyA7ICkge1xuICAgIHBvdzIgPSBmaW5hbGlzZShwb3cyLnRpbWVzKHgpLCB3cHIsIDEpO1xuICAgIGRlbm9taW5hdG9yID0gZGVub21pbmF0b3IudGltZXMoKytpKTtcbiAgICB0ID0gc3VtMi5wbHVzKGRpdmlkZShwb3cyLCBkZW5vbWluYXRvciwgd3ByLCAxKSk7XG4gICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgd3ByKSA9PT0gZGlnaXRzVG9TdHJpbmcoc3VtMi5kKS5zbGljZSgwLCB3cHIpKSB7XG4gICAgICBqID0gaztcbiAgICAgIHdoaWxlIChqLS0pXG4gICAgICAgIHN1bTIgPSBmaW5hbGlzZShzdW0yLnRpbWVzKHN1bTIpLCB3cHIsIDEpO1xuICAgICAgaWYgKHNkID09IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcCA8IDMgJiYgY2hlY2tSb3VuZGluZ0RpZ2l0cyhzdW0yLmQsIHdwciAtIGd1YXJkLCBybSwgcmVwKSkge1xuICAgICAgICAgIEN0b3IucHJlY2lzaW9uID0gd3ByICs9IDEwO1xuICAgICAgICAgIGRlbm9taW5hdG9yID0gcG93MiA9IHQgPSBuZXcgQ3RvcigxKTtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICByZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmluYWxpc2Uoc3VtMiwgQ3Rvci5wcmVjaXNpb24gPSBwciwgcm0sIGV4dGVybmFsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgICAgIHJldHVybiBzdW0yO1xuICAgICAgfVxuICAgIH1cbiAgICBzdW0yID0gdDtcbiAgfVxufVxuZnVuY3Rpb24gbmF0dXJhbExvZ2FyaXRobSh5LCBzZCkge1xuICB2YXIgYywgYzAsIGRlbm9taW5hdG9yLCBlLCBudW1lcmF0b3IsIHJlcCwgc3VtMiwgdCwgd3ByLCB4MSwgeDIsIG4gPSAxLCBndWFyZCA9IDEwLCB4ID0geSwgeGQgPSB4LmQsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBybSA9IEN0b3Iucm91bmRpbmcsIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIGlmICh4LnMgPCAwIHx8ICF4ZCB8fCAheGRbMF0gfHwgIXguZSAmJiB4ZFswXSA9PSAxICYmIHhkLmxlbmd0aCA9PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBDdG9yKHhkICYmICF4ZFswXSA/IC0xIC8gMCA6IHgucyAhPSAxID8gTmFOIDogeGQgPyAwIDogeCk7XG4gIH1cbiAgaWYgKHNkID09IG51bGwpIHtcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xuICAgIHdwciA9IHByO1xuICB9IGVsc2Uge1xuICAgIHdwciA9IHNkO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gd3ByICs9IGd1YXJkO1xuICBjID0gZGlnaXRzVG9TdHJpbmcoeGQpO1xuICBjMCA9IGMuY2hhckF0KDApO1xuICBpZiAoTWF0aC5hYnMoZSA9IHguZSkgPCAxNWUxNCkge1xuICAgIHdoaWxlIChjMCA8IDcgJiYgYzAgIT0gMSB8fCBjMCA9PSAxICYmIGMuY2hhckF0KDEpID4gMykge1xuICAgICAgeCA9IHgudGltZXMoeSk7XG4gICAgICBjID0gZGlnaXRzVG9TdHJpbmcoeC5kKTtcbiAgICAgIGMwID0gYy5jaGFyQXQoMCk7XG4gICAgICBuKys7XG4gICAgfVxuICAgIGUgPSB4LmU7XG4gICAgaWYgKGMwID4gMSkge1xuICAgICAgeCA9IG5ldyBDdG9yKFwiMC5cIiArIGMpO1xuICAgICAgZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gbmV3IEN0b3IoYzAgKyBcIi5cIiArIGMuc2xpY2UoMSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0ID0gZ2V0TG4xMChDdG9yLCB3cHIgKyAyLCBwcikudGltZXMoZSArIFwiXCIpO1xuICAgIHggPSBuYXR1cmFsTG9nYXJpdGhtKG5ldyBDdG9yKGMwICsgXCIuXCIgKyBjLnNsaWNlKDEpKSwgd3ByIC0gZ3VhcmQpLnBsdXModCk7XG4gICAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgICByZXR1cm4gc2QgPT0gbnVsbCA/IGZpbmFsaXNlKHgsIHByLCBybSwgZXh0ZXJuYWwgPSB0cnVlKSA6IHg7XG4gIH1cbiAgeDEgPSB4O1xuICBzdW0yID0gbnVtZXJhdG9yID0geCA9IGRpdmlkZSh4Lm1pbnVzKDEpLCB4LnBsdXMoMSksIHdwciwgMSk7XG4gIHgyID0gZmluYWxpc2UoeC50aW1lcyh4KSwgd3ByLCAxKTtcbiAgZGVub21pbmF0b3IgPSAzO1xuICBmb3IgKDsgOyApIHtcbiAgICBudW1lcmF0b3IgPSBmaW5hbGlzZShudW1lcmF0b3IudGltZXMoeDIpLCB3cHIsIDEpO1xuICAgIHQgPSBzdW0yLnBsdXMoZGl2aWRlKG51bWVyYXRvciwgbmV3IEN0b3IoZGVub21pbmF0b3IpLCB3cHIsIDEpKTtcbiAgICBpZiAoZGlnaXRzVG9TdHJpbmcodC5kKS5zbGljZSgwLCB3cHIpID09PSBkaWdpdHNUb1N0cmluZyhzdW0yLmQpLnNsaWNlKDAsIHdwcikpIHtcbiAgICAgIHN1bTIgPSBzdW0yLnRpbWVzKDIpO1xuICAgICAgaWYgKGUgIT09IDApXG4gICAgICAgIHN1bTIgPSBzdW0yLnBsdXMoZ2V0TG4xMChDdG9yLCB3cHIgKyAyLCBwcikudGltZXMoZSArIFwiXCIpKTtcbiAgICAgIHN1bTIgPSBkaXZpZGUoc3VtMiwgbmV3IEN0b3IobiksIHdwciwgMSk7XG4gICAgICBpZiAoc2QgPT0gbnVsbCkge1xuICAgICAgICBpZiAoY2hlY2tSb3VuZGluZ0RpZ2l0cyhzdW0yLmQsIHdwciAtIGd1YXJkLCBybSwgcmVwKSkge1xuICAgICAgICAgIEN0b3IucHJlY2lzaW9uID0gd3ByICs9IGd1YXJkO1xuICAgICAgICAgIHQgPSBudW1lcmF0b3IgPSB4ID0gZGl2aWRlKHgxLm1pbnVzKDEpLCB4MS5wbHVzKDEpLCB3cHIsIDEpO1xuICAgICAgICAgIHgyID0gZmluYWxpc2UoeC50aW1lcyh4KSwgd3ByLCAxKTtcbiAgICAgICAgICBkZW5vbWluYXRvciA9IHJlcCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmFsaXNlKHN1bTIsIEN0b3IucHJlY2lzaW9uID0gcHIsIHJtLCBleHRlcm5hbCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICAgICAgICByZXR1cm4gc3VtMjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VtMiA9IHQ7XG4gICAgZGVub21pbmF0b3IgKz0gMjtcbiAgfVxufVxuZnVuY3Rpb24gbm9uRmluaXRlVG9TdHJpbmcoeCkge1xuICByZXR1cm4gU3RyaW5nKHgucyAqIHgucyAvIDApO1xufVxuZnVuY3Rpb24gcGFyc2VEZWNpbWFsKHgsIHN0cikge1xuICB2YXIgZSwgaSwgbGVuO1xuICBpZiAoKGUgPSBzdHIuaW5kZXhPZihcIi5cIikpID4gLTEpXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICBpZiAoKGkgPSBzdHIuc2VhcmNoKC9lL2kpKSA+IDApIHtcbiAgICBpZiAoZSA8IDApXG4gICAgICBlID0gaTtcbiAgICBlICs9ICtzdHIuc2xpY2UoaSArIDEpO1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgaSk7XG4gIH0gZWxzZSBpZiAoZSA8IDApIHtcbiAgICBlID0gc3RyLmxlbmd0aDtcbiAgfVxuICBmb3IgKGkgPSAwOyBzdHIuY2hhckNvZGVBdChpKSA9PT0gNDg7IGkrKylcbiAgICA7XG4gIGZvciAobGVuID0gc3RyLmxlbmd0aDsgc3RyLmNoYXJDb2RlQXQobGVuIC0gMSkgPT09IDQ4OyAtLWxlbilcbiAgICA7XG4gIHN0ciA9IHN0ci5zbGljZShpLCBsZW4pO1xuICBpZiAoc3RyKSB7XG4gICAgbGVuIC09IGk7XG4gICAgeC5lID0gZSA9IGUgLSBpIC0gMTtcbiAgICB4LmQgPSBbXTtcbiAgICBpID0gKGUgKyAxKSAlIExPR19CQVNFO1xuICAgIGlmIChlIDwgMClcbiAgICAgIGkgKz0gTE9HX0JBU0U7XG4gICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgIGlmIChpKVxuICAgICAgICB4LmQucHVzaCgrc3RyLnNsaWNlKDAsIGkpKTtcbiAgICAgIGZvciAobGVuIC09IExPR19CQVNFOyBpIDwgbGVuOyApXG4gICAgICAgIHguZC5wdXNoKCtzdHIuc2xpY2UoaSwgaSArPSBMT0dfQkFTRSkpO1xuICAgICAgc3RyID0gc3RyLnNsaWNlKGkpO1xuICAgICAgaSA9IExPR19CQVNFIC0gc3RyLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgaSAtPSBsZW47XG4gICAgfVxuICAgIGZvciAoOyBpLS07IClcbiAgICAgIHN0ciArPSBcIjBcIjtcbiAgICB4LmQucHVzaCgrc3RyKTtcbiAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgIGlmICh4LmUgPiB4LmNvbnN0cnVjdG9yLm1heEUpIHtcbiAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgeC5lID0gTmFOO1xuICAgICAgfSBlbHNlIGlmICh4LmUgPCB4LmNvbnN0cnVjdG9yLm1pbkUpIHtcbiAgICAgICAgeC5lID0gMDtcbiAgICAgICAgeC5kID0gWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4LmUgPSAwO1xuICAgIHguZCA9IFswXTtcbiAgfVxuICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIHBhcnNlT3RoZXIoeCwgc3RyKSB7XG4gIHZhciBiYXNlLCBDdG9yLCBkaXZpc29yLCBpLCBpc0Zsb2F0LCBsZW4sIHAsIHhkLCB4ZTtcbiAgaWYgKHN0ci5pbmRleE9mKFwiX1wiKSA+IC0xKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhcXGQpXyg/PVxcZCkvZywgXCIkMVwiKTtcbiAgICBpZiAoaXNEZWNpbWFsLnRlc3Qoc3RyKSlcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwoeCwgc3RyKTtcbiAgfSBlbHNlIGlmIChzdHIgPT09IFwiSW5maW5pdHlcIiB8fCBzdHIgPT09IFwiTmFOXCIpIHtcbiAgICBpZiAoIStzdHIpXG4gICAgICB4LnMgPSBOYU47XG4gICAgeC5lID0gTmFOO1xuICAgIHguZCA9IG51bGw7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgaWYgKGlzSGV4LnRlc3Qoc3RyKSkge1xuICAgIGJhc2UgPSAxNjtcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmIChpc0JpbmFyeS50ZXN0KHN0cikpIHtcbiAgICBiYXNlID0gMjtcbiAgfSBlbHNlIGlmIChpc09jdGFsLnRlc3Qoc3RyKSkge1xuICAgIGJhc2UgPSA4O1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHN0cik7XG4gIH1cbiAgaSA9IHN0ci5zZWFyY2goL3AvaSk7XG4gIGlmIChpID4gMCkge1xuICAgIHAgPSArc3RyLnNsaWNlKGkgKyAxKTtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDIsIGkpO1xuICB9IGVsc2Uge1xuICAgIHN0ciA9IHN0ci5zbGljZSgyKTtcbiAgfVxuICBpID0gc3RyLmluZGV4T2YoXCIuXCIpO1xuICBpc0Zsb2F0ID0gaSA+PSAwO1xuICBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzRmxvYXQpIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShcIi5cIiwgXCJcIik7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gbGVuIC0gaTtcbiAgICBkaXZpc29yID0gaW50UG93KEN0b3IsIG5ldyBDdG9yKGJhc2UpLCBpLCBpICogMik7XG4gIH1cbiAgeGQgPSBjb252ZXJ0QmFzZShzdHIsIGJhc2UsIEJBU0UpO1xuICB4ZSA9IHhkLmxlbmd0aCAtIDE7XG4gIGZvciAoaSA9IHhlOyB4ZFtpXSA9PT0gMDsgLS1pKVxuICAgIHhkLnBvcCgpO1xuICBpZiAoaSA8IDApXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgucyAqIDApO1xuICB4LmUgPSBnZXRCYXNlMTBFeHBvbmVudCh4ZCwgeGUpO1xuICB4LmQgPSB4ZDtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgaWYgKGlzRmxvYXQpXG4gICAgeCA9IGRpdmlkZSh4LCBkaXZpc29yLCBsZW4gKiA0KTtcbiAgaWYgKHApXG4gICAgeCA9IHgudGltZXMoTWF0aC5hYnMocCkgPCA1NCA/IG1hdGhwb3coMiwgcCkgOiBEZWNpbWFsLnBvdygyLCBwKSk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiBzaW5lKEN0b3IsIHgpIHtcbiAgdmFyIGssIGxlbiA9IHguZC5sZW5ndGg7XG4gIGlmIChsZW4gPCAzKSB7XG4gICAgcmV0dXJuIHguaXNaZXJvKCkgPyB4IDogdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgpO1xuICB9XG4gIGsgPSAxLjQgKiBNYXRoLnNxcnQobGVuKTtcbiAgayA9IGsgPiAxNiA/IDE2IDogayB8IDA7XG4gIHggPSB4LnRpbWVzKDEgLyB0aW55UG93KDUsIGspKTtcbiAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAyLCB4LCB4KTtcbiAgdmFyIHNpbjJfeCwgZDUgPSBuZXcgQ3Rvcig1KSwgZDE2ID0gbmV3IEN0b3IoMTYpLCBkMjAgPSBuZXcgQ3RvcigyMCk7XG4gIGZvciAoOyBrLS07ICkge1xuICAgIHNpbjJfeCA9IHgudGltZXMoeCk7XG4gICAgeCA9IHgudGltZXMoZDUucGx1cyhzaW4yX3gudGltZXMoZDE2LnRpbWVzKHNpbjJfeCkubWludXMoZDIwKSkpKTtcbiAgfVxuICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIHRheWxvclNlcmllcyhDdG9yLCBuLCB4LCB5LCBpc0h5cGVyYm9saWMpIHtcbiAgdmFyIGosIHQsIHUsIHgyLCBpID0gMSwgcHIgPSBDdG9yLnByZWNpc2lvbiwgayA9IE1hdGguY2VpbChwciAvIExPR19CQVNFKTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgeDIgPSB4LnRpbWVzKHgpO1xuICB1ID0gbmV3IEN0b3IoeSk7XG4gIGZvciAoOyA7ICkge1xuICAgIHQgPSBkaXZpZGUodS50aW1lcyh4MiksIG5ldyBDdG9yKG4rKyAqIG4rKyksIHByLCAxKTtcbiAgICB1ID0gaXNIeXBlcmJvbGljID8geS5wbHVzKHQpIDogeS5taW51cyh0KTtcbiAgICB5ID0gZGl2aWRlKHQudGltZXMoeDIpLCBuZXcgQ3RvcihuKysgKiBuKyspLCBwciwgMSk7XG4gICAgdCA9IHUucGx1cyh5KTtcbiAgICBpZiAodC5kW2tdICE9PSB2b2lkIDApIHtcbiAgICAgIGZvciAoaiA9IGs7IHQuZFtqXSA9PT0gdS5kW2pdICYmIGotLTsgKVxuICAgICAgICA7XG4gICAgICBpZiAoaiA9PSAtMSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGogPSB1O1xuICAgIHUgPSB5O1xuICAgIHkgPSB0O1xuICAgIHQgPSBqO1xuICAgIGkrKztcbiAgfVxuICBleHRlcm5hbCA9IHRydWU7XG4gIHQuZC5sZW5ndGggPSBrICsgMTtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiB0aW55UG93KGIsIGUpIHtcbiAgdmFyIG4gPSBiO1xuICB3aGlsZSAoLS1lKVxuICAgIG4gKj0gYjtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiB0b0xlc3NUaGFuSGFsZlBpKEN0b3IsIHgpIHtcbiAgdmFyIHQsIGlzTmVnID0geC5zIDwgMCwgcGkgPSBnZXRQaShDdG9yLCBDdG9yLnByZWNpc2lvbiwgMSksIGhhbGZQaSA9IHBpLnRpbWVzKDAuNSk7XG4gIHggPSB4LmFicygpO1xuICBpZiAoeC5sdGUoaGFsZlBpKSkge1xuICAgIHF1YWRyYW50ID0gaXNOZWcgPyA0IDogMTtcbiAgICByZXR1cm4geDtcbiAgfVxuICB0ID0geC5kaXZUb0ludChwaSk7XG4gIGlmICh0LmlzWmVybygpKSB7XG4gICAgcXVhZHJhbnQgPSBpc05lZyA/IDMgOiAyO1xuICB9IGVsc2Uge1xuICAgIHggPSB4Lm1pbnVzKHQudGltZXMocGkpKTtcbiAgICBpZiAoeC5sdGUoaGFsZlBpKSkge1xuICAgICAgcXVhZHJhbnQgPSBpc09kZCh0KSA/IGlzTmVnID8gMiA6IDMgOiBpc05lZyA/IDQgOiAxO1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHF1YWRyYW50ID0gaXNPZGQodCkgPyBpc05lZyA/IDEgOiA0IDogaXNOZWcgPyAzIDogMjtcbiAgfVxuICByZXR1cm4geC5taW51cyhwaSkuYWJzKCk7XG59XG5mdW5jdGlvbiB0b1N0cmluZ0JpbmFyeSh4LCBiYXNlT3V0LCBzZCwgcm0pIHtcbiAgdmFyIGJhc2UsIGUsIGksIGssIGxlbiwgcm91bmRVcCwgc3RyLCB4ZCwgeSwgQ3RvciA9IHguY29uc3RydWN0b3IsIGlzRXhwID0gc2QgIT09IHZvaWQgMDtcbiAgaWYgKGlzRXhwKSB7XG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gIH0gZWxzZSB7XG4gICAgc2QgPSBDdG9yLnByZWNpc2lvbjtcbiAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIH1cbiAgaWYgKCF4LmlzRmluaXRlKCkpIHtcbiAgICBzdHIgPSBub25GaW5pdGVUb1N0cmluZyh4KTtcbiAgfSBlbHNlIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4KTtcbiAgICBpID0gc3RyLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpc0V4cCkge1xuICAgICAgYmFzZSA9IDI7XG4gICAgICBpZiAoYmFzZU91dCA9PSAxNikge1xuICAgICAgICBzZCA9IHNkICogNCAtIDM7XG4gICAgICB9IGVsc2UgaWYgKGJhc2VPdXQgPT0gOCkge1xuICAgICAgICBzZCA9IHNkICogMyAtIDI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSBiYXNlT3V0O1xuICAgIH1cbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShcIi5cIiwgXCJcIik7XG4gICAgICB5ID0gbmV3IEN0b3IoMSk7XG4gICAgICB5LmUgPSBzdHIubGVuZ3RoIC0gaTtcbiAgICAgIHkuZCA9IGNvbnZlcnRCYXNlKGZpbml0ZVRvU3RyaW5nKHkpLCAxMCwgYmFzZSk7XG4gICAgICB5LmUgPSB5LmQubGVuZ3RoO1xuICAgIH1cbiAgICB4ZCA9IGNvbnZlcnRCYXNlKHN0ciwgMTAsIGJhc2UpO1xuICAgIGUgPSBsZW4gPSB4ZC5sZW5ndGg7XG4gICAgZm9yICg7IHhkWy0tbGVuXSA9PSAwOyApXG4gICAgICB4ZC5wb3AoKTtcbiAgICBpZiAoIXhkWzBdKSB7XG4gICAgICBzdHIgPSBpc0V4cCA/IFwiMHArMFwiIDogXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBlLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gbmV3IEN0b3IoeCk7XG4gICAgICAgIHguZCA9IHhkO1xuICAgICAgICB4LmUgPSBlO1xuICAgICAgICB4ID0gZGl2aWRlKHgsIHksIHNkLCBybSwgMCwgYmFzZSk7XG4gICAgICAgIHhkID0geC5kO1xuICAgICAgICBlID0geC5lO1xuICAgICAgICByb3VuZFVwID0gaW5leGFjdDtcbiAgICAgIH1cbiAgICAgIGkgPSB4ZFtzZF07XG4gICAgICBrID0gYmFzZSAvIDI7XG4gICAgICByb3VuZFVwID0gcm91bmRVcCB8fCB4ZFtzZCArIDFdICE9PSB2b2lkIDA7XG4gICAgICByb3VuZFVwID0gcm0gPCA0ID8gKGkgIT09IHZvaWQgMCB8fCByb3VuZFVwKSAmJiAocm0gPT09IDAgfHwgcm0gPT09ICh4LnMgPCAwID8gMyA6IDIpKSA6IGkgPiBrIHx8IGkgPT09IGsgJiYgKHJtID09PSA0IHx8IHJvdW5kVXAgfHwgcm0gPT09IDYgJiYgeGRbc2QgLSAxXSAmIDEgfHwgcm0gPT09ICh4LnMgPCAwID8gOCA6IDcpKTtcbiAgICAgIHhkLmxlbmd0aCA9IHNkO1xuICAgICAgaWYgKHJvdW5kVXApIHtcbiAgICAgICAgZm9yICg7ICsreGRbLS1zZF0gPiBiYXNlIC0gMTsgKSB7XG4gICAgICAgICAgeGRbc2RdID0gMDtcbiAgICAgICAgICBpZiAoIXNkKSB7XG4gICAgICAgICAgICArK2U7XG4gICAgICAgICAgICB4ZC51bnNoaWZ0KDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZW4gPSB4ZC5sZW5ndGg7ICF4ZFtsZW4gLSAxXTsgLS1sZW4pXG4gICAgICAgIDtcbiAgICAgIGZvciAoaSA9IDAsIHN0ciA9IFwiXCI7IGkgPCBsZW47IGkrKylcbiAgICAgICAgc3RyICs9IE5VTUVSQUxTLmNoYXJBdCh4ZFtpXSk7XG4gICAgICBpZiAoaXNFeHApIHtcbiAgICAgICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgICBpZiAoYmFzZU91dCA9PSAxNiB8fCBiYXNlT3V0ID09IDgpIHtcbiAgICAgICAgICAgIGkgPSBiYXNlT3V0ID09IDE2ID8gNCA6IDM7XG4gICAgICAgICAgICBmb3IgKC0tbGVuOyBsZW4gJSBpOyBsZW4rKylcbiAgICAgICAgICAgICAgc3RyICs9IFwiMFwiO1xuICAgICAgICAgICAgeGQgPSBjb252ZXJ0QmFzZShzdHIsIGJhc2UsIGJhc2VPdXQpO1xuICAgICAgICAgICAgZm9yIChsZW4gPSB4ZC5sZW5ndGg7ICF4ZFtsZW4gLSAxXTsgLS1sZW4pXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGZvciAoaSA9IDEsIHN0ciA9IFwiMS5cIjsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAgICBzdHIgKz0gTlVNRVJBTFMuY2hhckF0KHhkW2ldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gc3RyLmNoYXJBdCgwKSArIFwiLlwiICsgc3RyLnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBzdHIgKyAoZSA8IDAgPyBcInBcIiA6IFwicCtcIikgKyBlO1xuICAgICAgfSBlbHNlIGlmIChlIDwgMCkge1xuICAgICAgICBmb3IgKDsgKytlOyApXG4gICAgICAgICAgc3RyID0gXCIwXCIgKyBzdHI7XG4gICAgICAgIHN0ciA9IFwiMC5cIiArIHN0cjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgrK2UgPiBsZW4pXG4gICAgICAgICAgZm9yIChlIC09IGxlbjsgZS0tOyApXG4gICAgICAgICAgICBzdHIgKz0gXCIwXCI7XG4gICAgICAgIGVsc2UgaWYgKGUgPCBsZW4pXG4gICAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGUpICsgXCIuXCIgKyBzdHIuc2xpY2UoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0ciA9IChiYXNlT3V0ID09IDE2ID8gXCIweFwiIDogYmFzZU91dCA9PSAyID8gXCIwYlwiIDogYmFzZU91dCA9PSA4ID8gXCIwb1wiIDogXCJcIikgKyBzdHI7XG4gIH1cbiAgcmV0dXJuIHgucyA8IDAgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn1cbmZ1bmN0aW9uIHRydW5jYXRlKGFyciwgbGVuKSB7XG4gIGlmIChhcnIubGVuZ3RoID4gbGVuKSB7XG4gICAgYXJyLmxlbmd0aCA9IGxlbjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gYWJzKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFicygpO1xufVxuZnVuY3Rpb24gYWNvcyh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hY29zKCk7XG59XG5mdW5jdGlvbiBhY29zaCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hY29zaCgpO1xufVxuZnVuY3Rpb24gYWRkKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnBsdXMoeSk7XG59XG5mdW5jdGlvbiBhc2luKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFzaW4oKTtcbn1cbmZ1bmN0aW9uIGFzaW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFzaW5oKCk7XG59XG5mdW5jdGlvbiBhdGFuKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmF0YW4oKTtcbn1cbmZ1bmN0aW9uIGF0YW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmF0YW5oKCk7XG59XG5mdW5jdGlvbiBhdGFuMih5LCB4KSB7XG4gIHkgPSBuZXcgdGhpcyh5KTtcbiAgeCA9IG5ldyB0aGlzKHgpO1xuICB2YXIgciwgcHIgPSB0aGlzLnByZWNpc2lvbiwgcm0gPSB0aGlzLnJvdW5kaW5nLCB3cHIgPSBwciArIDQ7XG4gIGlmICgheS5zIHx8ICF4LnMpIHtcbiAgICByID0gbmV3IHRoaXMoTmFOKTtcbiAgfSBlbHNlIGlmICgheS5kICYmICF4LmQpIHtcbiAgICByID0gZ2V0UGkodGhpcywgd3ByLCAxKS50aW1lcyh4LnMgPiAwID8gMC4yNSA6IDAuNzUpO1xuICAgIHIucyA9IHkucztcbiAgfSBlbHNlIGlmICgheC5kIHx8IHkuaXNaZXJvKCkpIHtcbiAgICByID0geC5zIDwgMCA/IGdldFBpKHRoaXMsIHByLCBybSkgOiBuZXcgdGhpcygwKTtcbiAgICByLnMgPSB5LnM7XG4gIH0gZWxzZSBpZiAoIXkuZCB8fCB4LmlzWmVybygpKSB7XG4gICAgciA9IGdldFBpKHRoaXMsIHdwciwgMSkudGltZXMoMC41KTtcbiAgICByLnMgPSB5LnM7XG4gIH0gZWxzZSBpZiAoeC5zIDwgMCkge1xuICAgIHRoaXMucHJlY2lzaW9uID0gd3ByO1xuICAgIHRoaXMucm91bmRpbmcgPSAxO1xuICAgIHIgPSB0aGlzLmF0YW4oZGl2aWRlKHksIHgsIHdwciwgMSkpO1xuICAgIHggPSBnZXRQaSh0aGlzLCB3cHIsIDEpO1xuICAgIHRoaXMucHJlY2lzaW9uID0gcHI7XG4gICAgdGhpcy5yb3VuZGluZyA9IHJtO1xuICAgIHIgPSB5LnMgPCAwID8gci5taW51cyh4KSA6IHIucGx1cyh4KTtcbiAgfSBlbHNlIHtcbiAgICByID0gdGhpcy5hdGFuKGRpdmlkZSh5LCB4LCB3cHIsIDEpKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGNicnQoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuY2JydCgpO1xufVxuZnVuY3Rpb24gY2VpbCh4KSB7XG4gIHJldHVybiBmaW5hbGlzZSh4ID0gbmV3IHRoaXMoeCksIHguZSArIDEsIDIpO1xufVxuZnVuY3Rpb24gY2xhbXAoeCwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuY2xhbXAobWluMiwgbWF4Mik7XG59XG5mdW5jdGlvbiBjb25maWcob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpXG4gICAgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gIHZhciBpLCBwLCB2LCB1c2VEZWZhdWx0cyA9IG9iai5kZWZhdWx0cyA9PT0gdHJ1ZSwgcHMgPSBbXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICAxLFxuICAgIE1BWF9ESUdJVFMsXG4gICAgXCJyb3VuZGluZ1wiLFxuICAgIDAsXG4gICAgOCxcbiAgICBcInRvRXhwTmVnXCIsXG4gICAgLUVYUF9MSU1JVCxcbiAgICAwLFxuICAgIFwidG9FeHBQb3NcIixcbiAgICAwLFxuICAgIEVYUF9MSU1JVCxcbiAgICBcIm1heEVcIixcbiAgICAwLFxuICAgIEVYUF9MSU1JVCxcbiAgICBcIm1pbkVcIixcbiAgICAtRVhQX0xJTUlULFxuICAgIDAsXG4gICAgXCJtb2R1bG9cIixcbiAgICAwLFxuICAgIDlcbiAgXTtcbiAgZm9yIChpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgaWYgKHAgPSBwc1tpXSwgdXNlRGVmYXVsdHMpXG4gICAgICB0aGlzW3BdID0gREVGQVVMVFNbcF07XG4gICAgaWYgKCh2ID0gb2JqW3BdKSAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAobWF0aGZsb29yKHYpID09PSB2ICYmIHYgPj0gcHNbaSArIDFdICYmIHYgPD0gcHNbaSArIDJdKVxuICAgICAgICB0aGlzW3BdID0gdjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgcCArIFwiOiBcIiArIHYpO1xuICAgIH1cbiAgfVxuICBpZiAocCA9IFwiY3J5cHRvXCIsIHVzZURlZmF1bHRzKVxuICAgIHRoaXNbcF0gPSBERUZBVUxUU1twXTtcbiAgaWYgKCh2ID0gb2JqW3BdKSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHYgPT09IHRydWUgfHwgdiA9PT0gZmFsc2UgfHwgdiA9PT0gMCB8fCB2ID09PSAxKSB7XG4gICAgICBpZiAodikge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byAhPSBcInVuZGVmaW5lZFwiICYmIGNyeXB0byAmJiAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyB8fCBjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAgICAgdGhpc1twXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoY3J5cHRvVW5hdmFpbGFibGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW3BdID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHAgKyBcIjogXCIgKyB2KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBjb3MoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuY29zKCk7XG59XG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNvc2goKTtcbn1cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICB2YXIgaSwgcCwgcHM7XG4gIGZ1bmN0aW9uIERlY2ltYWwyKHYpIHtcbiAgICB2YXIgZSwgaTIsIHQsIHggPSB0aGlzO1xuICAgIGlmICghKHggaW5zdGFuY2VvZiBEZWNpbWFsMikpXG4gICAgICByZXR1cm4gbmV3IERlY2ltYWwyKHYpO1xuICAgIHguY29uc3RydWN0b3IgPSBEZWNpbWFsMjtcbiAgICBpZiAoaXNEZWNpbWFsSW5zdGFuY2UodikpIHtcbiAgICAgIHgucyA9IHYucztcbiAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICBpZiAoIXYuZCB8fCB2LmUgPiBEZWNpbWFsMi5tYXhFKSB7XG4gICAgICAgICAgeC5lID0gTmFOO1xuICAgICAgICAgIHguZCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodi5lIDwgRGVjaW1hbDIubWluRSkge1xuICAgICAgICAgIHguZSA9IDA7XG4gICAgICAgICAgeC5kID0gWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHguZSA9IHYuZTtcbiAgICAgICAgICB4LmQgPSB2LmQuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeC5lID0gdi5lO1xuICAgICAgICB4LmQgPSB2LmQgPyB2LmQuc2xpY2UoKSA6IHYuZDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdCA9IHR5cGVvZiB2O1xuICAgIGlmICh0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAodiA9PT0gMCkge1xuICAgICAgICB4LnMgPSAxIC8gdiA8IDAgPyAtMSA6IDE7XG4gICAgICAgIHguZSA9IDA7XG4gICAgICAgIHguZCA9IFswXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHYgPCAwKSB7XG4gICAgICAgIHYgPSAtdjtcbiAgICAgICAgeC5zID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4LnMgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHYgPT09IH5+diAmJiB2IDwgMWU3KSB7XG4gICAgICAgIGZvciAoZSA9IDAsIGkyID0gdjsgaTIgPj0gMTA7IGkyIC89IDEwKVxuICAgICAgICAgIGUrKztcbiAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgaWYgKGUgPiBEZWNpbWFsMi5tYXhFKSB7XG4gICAgICAgICAgICB4LmUgPSBOYU47XG4gICAgICAgICAgICB4LmQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZSA8IERlY2ltYWwyLm1pbkUpIHtcbiAgICAgICAgICAgIHguZSA9IDA7XG4gICAgICAgICAgICB4LmQgPSBbMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHguZSA9IGU7XG4gICAgICAgICAgICB4LmQgPSBbdl07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHguZSA9IGU7XG4gICAgICAgICAgeC5kID0gW3ZdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodiAqIDAgIT09IDApIHtcbiAgICAgICAgaWYgKCF2KVxuICAgICAgICAgIHgucyA9IE5hTjtcbiAgICAgICAgeC5lID0gTmFOO1xuICAgICAgICB4LmQgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsKHgsIHYudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmICh0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyB2KTtcbiAgICB9XG4gICAgaWYgKChpMiA9IHYuY2hhckNvZGVBdCgwKSkgPT09IDQ1KSB7XG4gICAgICB2ID0gdi5zbGljZSgxKTtcbiAgICAgIHgucyA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaTIgPT09IDQzKVxuICAgICAgICB2ID0gdi5zbGljZSgxKTtcbiAgICAgIHgucyA9IDE7XG4gICAgfVxuICAgIHJldHVybiBpc0RlY2ltYWwudGVzdCh2KSA/IHBhcnNlRGVjaW1hbCh4LCB2KSA6IHBhcnNlT3RoZXIoeCwgdik7XG4gIH1cbiAgRGVjaW1hbDIucHJvdG90eXBlID0gUDtcbiAgRGVjaW1hbDIuUk9VTkRfVVAgPSAwO1xuICBEZWNpbWFsMi5ST1VORF9ET1dOID0gMTtcbiAgRGVjaW1hbDIuUk9VTkRfQ0VJTCA9IDI7XG4gIERlY2ltYWwyLlJPVU5EX0ZMT09SID0gMztcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9VUCA9IDQ7XG4gIERlY2ltYWwyLlJPVU5EX0hBTEZfRE9XTiA9IDU7XG4gIERlY2ltYWwyLlJPVU5EX0hBTEZfRVZFTiA9IDY7XG4gIERlY2ltYWwyLlJPVU5EX0hBTEZfQ0VJTCA9IDc7XG4gIERlY2ltYWwyLlJPVU5EX0hBTEZfRkxPT1IgPSA4O1xuICBEZWNpbWFsMi5FVUNMSUQgPSA5O1xuICBEZWNpbWFsMi5jb25maWcgPSBEZWNpbWFsMi5zZXQgPSBjb25maWc7XG4gIERlY2ltYWwyLmNsb25lID0gY2xvbmU7XG4gIERlY2ltYWwyLmlzRGVjaW1hbCA9IGlzRGVjaW1hbEluc3RhbmNlO1xuICBEZWNpbWFsMi5hYnMgPSBhYnM7XG4gIERlY2ltYWwyLmFjb3MgPSBhY29zO1xuICBEZWNpbWFsMi5hY29zaCA9IGFjb3NoO1xuICBEZWNpbWFsMi5hZGQgPSBhZGQ7XG4gIERlY2ltYWwyLmFzaW4gPSBhc2luO1xuICBEZWNpbWFsMi5hc2luaCA9IGFzaW5oO1xuICBEZWNpbWFsMi5hdGFuID0gYXRhbjtcbiAgRGVjaW1hbDIuYXRhbmggPSBhdGFuaDtcbiAgRGVjaW1hbDIuYXRhbjIgPSBhdGFuMjtcbiAgRGVjaW1hbDIuY2JydCA9IGNicnQ7XG4gIERlY2ltYWwyLmNlaWwgPSBjZWlsO1xuICBEZWNpbWFsMi5jbGFtcCA9IGNsYW1wO1xuICBEZWNpbWFsMi5jb3MgPSBjb3M7XG4gIERlY2ltYWwyLmNvc2ggPSBjb3NoO1xuICBEZWNpbWFsMi5kaXYgPSBkaXY7XG4gIERlY2ltYWwyLmV4cCA9IGV4cDtcbiAgRGVjaW1hbDIuZmxvb3IgPSBmbG9vcjtcbiAgRGVjaW1hbDIuaHlwb3QgPSBoeXBvdDtcbiAgRGVjaW1hbDIubG4gPSBsbjtcbiAgRGVjaW1hbDIubG9nID0gbG9nO1xuICBEZWNpbWFsMi5sb2cxMCA9IGxvZzEwO1xuICBEZWNpbWFsMi5sb2cyID0gbG9nMjtcbiAgRGVjaW1hbDIubWF4ID0gbWF4O1xuICBEZWNpbWFsMi5taW4gPSBtaW47XG4gIERlY2ltYWwyLm1vZCA9IG1vZDtcbiAgRGVjaW1hbDIubXVsID0gbXVsO1xuICBEZWNpbWFsMi5wb3cgPSBwb3c7XG4gIERlY2ltYWwyLnJhbmRvbSA9IHJhbmRvbTtcbiAgRGVjaW1hbDIucm91bmQgPSByb3VuZDtcbiAgRGVjaW1hbDIuc2lnbiA9IHNpZ247XG4gIERlY2ltYWwyLnNpbiA9IHNpbjtcbiAgRGVjaW1hbDIuc2luaCA9IHNpbmg7XG4gIERlY2ltYWwyLnNxcnQgPSBzcXJ0O1xuICBEZWNpbWFsMi5zdWIgPSBzdWI7XG4gIERlY2ltYWwyLnN1bSA9IHN1bTtcbiAgRGVjaW1hbDIudGFuID0gdGFuO1xuICBEZWNpbWFsMi50YW5oID0gdGFuaDtcbiAgRGVjaW1hbDIudHJ1bmMgPSB0cnVuYztcbiAgaWYgKG9iaiA9PT0gdm9pZCAwKVxuICAgIG9iaiA9IHt9O1xuICBpZiAob2JqKSB7XG4gICAgaWYgKG9iai5kZWZhdWx0cyAhPT0gdHJ1ZSkge1xuICAgICAgcHMgPSBbXCJwcmVjaXNpb25cIiwgXCJyb3VuZGluZ1wiLCBcInRvRXhwTmVnXCIsIFwidG9FeHBQb3NcIiwgXCJtYXhFXCIsIFwibWluRVwiLCBcIm1vZHVsb1wiLCBcImNyeXB0b1wiXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwcy5sZW5ndGg7IClcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocCA9IHBzW2krK10pKVxuICAgICAgICAgIG9ialtwXSA9IHRoaXNbcF07XG4gICAgfVxuICB9XG4gIERlY2ltYWwyLmNvbmZpZyhvYmopO1xuICByZXR1cm4gRGVjaW1hbDI7XG59XG5mdW5jdGlvbiBkaXYoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuZGl2KHkpO1xufVxuZnVuY3Rpb24gZXhwKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmV4cCgpO1xufVxuZnVuY3Rpb24gZmxvb3IoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCAzKTtcbn1cbmZ1bmN0aW9uIGh5cG90KCkge1xuICB2YXIgaSwgbiwgdCA9IG5ldyB0aGlzKDApO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKSB7XG4gICAgbiA9IG5ldyB0aGlzKGFyZ3VtZW50c1tpKytdKTtcbiAgICBpZiAoIW4uZCkge1xuICAgICAgaWYgKG4ucykge1xuICAgICAgICBleHRlcm5hbCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcygxIC8gMCk7XG4gICAgICB9XG4gICAgICB0ID0gbjtcbiAgICB9IGVsc2UgaWYgKHQuZCkge1xuICAgICAgdCA9IHQucGx1cyhuLnRpbWVzKG4pKTtcbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gdC5zcXJ0KCk7XG59XG5mdW5jdGlvbiBpc0RlY2ltYWxJbnN0YW5jZShvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERlY2ltYWwgfHwgb2JqICYmIG9iai50b1N0cmluZ1RhZyA9PT0gdGFnIHx8IGZhbHNlO1xufVxuZnVuY3Rpb24gbG4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG4oKTtcbn1cbmZ1bmN0aW9uIGxvZyh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5sb2coeSk7XG59XG5mdW5jdGlvbiBsb2cyKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmxvZygyKTtcbn1cbmZ1bmN0aW9uIGxvZzEwKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmxvZygxMCk7XG59XG5mdW5jdGlvbiBtYXgoKSB7XG4gIHJldHVybiBtYXhPck1pbih0aGlzLCBhcmd1bWVudHMsIFwibHRcIik7XG59XG5mdW5jdGlvbiBtaW4oKSB7XG4gIHJldHVybiBtYXhPck1pbih0aGlzLCBhcmd1bWVudHMsIFwiZ3RcIik7XG59XG5mdW5jdGlvbiBtb2QoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubW9kKHkpO1xufVxuZnVuY3Rpb24gbXVsKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLm11bCh5KTtcbn1cbmZ1bmN0aW9uIHBvdyh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5wb3coeSk7XG59XG5mdW5jdGlvbiByYW5kb20oc2QpIHtcbiAgdmFyIGQsIGUsIGssIG4sIGkgPSAwLCByID0gbmV3IHRoaXMoMSksIHJkID0gW107XG4gIGlmIChzZCA9PT0gdm9pZCAwKVxuICAgIHNkID0gdGhpcy5wcmVjaXNpb247XG4gIGVsc2VcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgayA9IE1hdGguY2VpbChzZCAvIExPR19CQVNFKTtcbiAgaWYgKCF0aGlzLmNyeXB0bykge1xuICAgIGZvciAoOyBpIDwgazsgKVxuICAgICAgcmRbaSsrXSA9IE1hdGgucmFuZG9tKCkgKiAxZTcgfCAwO1xuICB9IGVsc2UgaWYgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICBkID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoaykpO1xuICAgIGZvciAoOyBpIDwgazsgKSB7XG4gICAgICBuID0gZFtpXTtcbiAgICAgIGlmIChuID49IDQyOWU3KSB7XG4gICAgICAgIGRbaV0gPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZFtpKytdID0gbiAlIDFlNztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoY3J5cHRvLnJhbmRvbUJ5dGVzKSB7XG4gICAgZCA9IGNyeXB0by5yYW5kb21CeXRlcyhrICo9IDQpO1xuICAgIGZvciAoOyBpIDwgazsgKSB7XG4gICAgICBuID0gZFtpXSArIChkW2kgKyAxXSA8PCA4KSArIChkW2kgKyAyXSA8PCAxNikgKyAoKGRbaSArIDNdICYgMTI3KSA8PCAyNCk7XG4gICAgICBpZiAobiA+PSAyMTRlNykge1xuICAgICAgICBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkuY29weShkLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJkLnB1c2gobiAlIDFlNyk7XG4gICAgICAgIGkgKz0gNDtcbiAgICAgIH1cbiAgICB9XG4gICAgaSA9IGsgLyA0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKGNyeXB0b1VuYXZhaWxhYmxlKTtcbiAgfVxuICBrID0gcmRbLS1pXTtcbiAgc2QgJT0gTE9HX0JBU0U7XG4gIGlmIChrICYmIHNkKSB7XG4gICAgbiA9IG1hdGhwb3coMTAsIExPR19CQVNFIC0gc2QpO1xuICAgIHJkW2ldID0gKGsgLyBuIHwgMCkgKiBuO1xuICB9XG4gIGZvciAoOyByZFtpXSA9PT0gMDsgaS0tKVxuICAgIHJkLnBvcCgpO1xuICBpZiAoaSA8IDApIHtcbiAgICBlID0gMDtcbiAgICByZCA9IFswXTtcbiAgfSBlbHNlIHtcbiAgICBlID0gLTE7XG4gICAgZm9yICg7IHJkWzBdID09PSAwOyBlIC09IExPR19CQVNFKVxuICAgICAgcmQuc2hpZnQoKTtcbiAgICBmb3IgKGsgPSAxLCBuID0gcmRbMF07IG4gPj0gMTA7IG4gLz0gMTApXG4gICAgICBrKys7XG4gICAgaWYgKGsgPCBMT0dfQkFTRSlcbiAgICAgIGUgLT0gTE9HX0JBU0UgLSBrO1xuICB9XG4gIHIuZSA9IGU7XG4gIHIuZCA9IHJkO1xuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIHJvdW5kKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgdGhpcy5yb3VuZGluZyk7XG59XG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgeCA9IG5ldyB0aGlzKHgpO1xuICByZXR1cm4geC5kID8geC5kWzBdID8geC5zIDogMCAqIHgucyA6IHgucyB8fCBOYU47XG59XG5mdW5jdGlvbiBzaW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuc2luKCk7XG59XG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNpbmgoKTtcbn1cbmZ1bmN0aW9uIHNxcnQoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuc3FydCgpO1xufVxuZnVuY3Rpb24gc3ViKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnN1Yih5KTtcbn1cbmZ1bmN0aW9uIHN1bSgpIHtcbiAgdmFyIGkgPSAwLCBhcmdzID0gYXJndW1lbnRzLCB4ID0gbmV3IHRoaXMoYXJnc1tpXSk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGZvciAoOyB4LnMgJiYgKytpIDwgYXJncy5sZW5ndGg7IClcbiAgICB4ID0geC5wbHVzKGFyZ3NbaV0pO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiBmaW5hbGlzZSh4LCB0aGlzLnByZWNpc2lvbiwgdGhpcy5yb3VuZGluZyk7XG59XG5mdW5jdGlvbiB0YW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkudGFuKCk7XG59XG5mdW5jdGlvbiB0YW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnRhbmgoKTtcbn1cbmZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgMSk7XG59XG5QW1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKV0gPSBQLnRvU3RyaW5nO1xuUFtTeW1ib2wudG9TdHJpbmdUYWddID0gXCJEZWNpbWFsXCI7XG52YXIgRGVjaW1hbCA9IFAuY29uc3RydWN0b3IgPSBjbG9uZShERUZBVUxUUyk7XG5MTjEwID0gbmV3IERlY2ltYWwoTE4xMCk7XG5QSSA9IG5ldyBEZWNpbWFsKFBJKTtcbnZhciBkZWNpbWFsX2RlZmF1bHQgPSBEZWNpbWFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==