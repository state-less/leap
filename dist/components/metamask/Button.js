"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaMaskButton = exports.InstallMetaMaskButton = void 0;

var _react = require("react");

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _iconsMaterial = require("@mui/icons-material");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _util = require("../../lib/util");

var _Icons = require("../Icons");

var _Util = require("../Util");

var _button = require("../../types/button");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "host"],
    _excluded2 = ["title"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MetaMaskButton = function MetaMaskButton(_ref) {
  var _headers$Authorizatio;

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? null : _ref$host,
      rest = _objectWithoutProperties(_ref, _excluded);

  var rcc = (0, _reactClient.useClientContext)();
  var open = rcc.open,
      verify = rcc.verify,
      activateInjected = rcc.activateInjected,
      account = rcc.account,
      active = rcc.active,
      error = rcc.error,
      headers = rcc.headers,
      identity = rcc.identity;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      awaitVerify = _useState2[0],
      setAwaitVerify = _useState2[1];

  var token = (headers === null || headers === void 0 ? void 0 : (_headers$Authorizatio = headers.Authorization) === null || _headers$Authorizatio === void 0 ? void 0 : _headers$Authorizatio.split(' ')[1]) || '';

  var decoded = _jsonwebtoken.default.decode(token);

  var _ref2 = decoded || {},
      address = _ref2.address;

  var color = identity !== null && identity !== void 0 && identity.web3 ? !open ? _button.ButtonStatusColor.ERROR : _button.ButtonStatusColor.OK : error ? _button.ButtonStatusColor.ERROR : _button.ButtonStatusColor.INFO;
  var serverState = identity !== null && identity !== void 0 && identity.web3 ? 'Authenticated' : 'Unauthenticated';
  var clientState = account ? 'Connected' : 'Not connected.';
  var tooltip = error || (!open ? 'Service unavailable.' : "".concat(serverState, " / ").concat(clientState));
  var icon = identity ? !open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.ErrorOutlineOutlined, {}) : !account ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.PowerIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.AccountBalanceWalletIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.ErrorOutlined, {});

  var _useAuth = (0, _reactClient.useAuth)(_reactClient.web3Strategy, {
    host: host
  }),
      authenticate = _useAuth.authenticate,
      logout = _useAuth.logout;

  var onClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res, _res, _res2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(address && !account)) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return activateInjected();

            case 3:
              res = _context.sent;
              _context.next = 30;
              break;

            case 6:
              if (account) {
                _context.next = 13;
                break;
              }

              _context.next = 9;
              return activateInjected();

            case 9:
              _res = _context.sent;
              setAwaitVerify(true);
              _context.next = 30;
              break;

            case 13:
              if (open) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return verify(account, 'Oh no! The backend service is unavailable. Anyway. You can still use the blockchain part of this application');

            case 16:
              _context.next = 30;
              break;

            case 18:
              if (!(account && open)) {
                _context.next = 23;
                break;
              }

              _context.next = 21;
              return authenticate();

            case 21:
              _context.next = 30;
              break;

            case 23:
              if (!(account && address && open)) {
                _context.next = 30;
                break;
              }

              _context.next = 26;
              return verify(account, 'Please sign this message to logout.');

            case 26:
              _res2 = _context.sent;

              if (!_res2) {
                _context.next = 30;
                break;
              }

              _context.next = 30;
              return logout();

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onClick() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (awaitVerify && account) {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return authenticate();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }, [awaitVerify]);

  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: error.message,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Util.FullWidthSpan, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(InstallMetaMaskButton, _objectSpread({
          title: "Install",
          variant: "contained"
        }, rest))
      })
    });
  }

  var label = active ? (0, _util.truncate)(account) : 'Metamask';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: tooltip,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
        disabled: !open,
        variant: "contained",
        onClick: onClick,
        color: color
      }, rest), {}, {
        startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.MetaMaskIcon, {}),
        children: label
      }))
    })
  });
};

exports.MetaMaskButton = MetaMaskButton;

var InstallMetaMaskButton = function InstallMetaMaskButton(_ref5) {
  var title = _ref5.title,
      rest = _objectWithoutProperties(_ref5, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
    target: "_blank",
    href: "https://metamask.io/",
    startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.MetaMaskIcon, {})
  }, rest), {}, {
    children: title
  }));
};

exports.InstallMetaMaskButton = InstallMetaMaskButton;