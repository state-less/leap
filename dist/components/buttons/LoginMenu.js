"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginOrIdenty = exports.LoginMenuButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _IdentityChip = require("../IdentityChip");

var _Button = require("../metamask/Button");

var _FingerPrint = require("./FingerPrint");

var _Google = require("./Google");

var _LogoutButton = require("./LogoutButton");

var _WebAuthn = require("./WebAuthn");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoginMenuButton = function LoginMenuButton(props) {
  var _useClientContext = (0, _reactClient.useClientContext)(),
      identity = _useClientContext.identity;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Menu, {
      open: open,
      className: "flex column",
      anchorEl: anchorEl,
      onClick: handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FingerPrint.FingerprintButton, {
          fullWidth: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Google.GoogleButton, {
          fullWidth: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.MetaMaskButton, {
          fullWidth: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WebAuthn.WebAuthnButton, {
          fullWidth: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LogoutButton.LogoutButton, {
          fullWidth: true
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
      color: identity !== null && identity !== void 0 && identity.address ? 'success' : 'inherit',
      onClick: handleClick
    }, props), {}, {
      children: "Login"
    }))]
  });
};

exports.LoginMenuButton = LoginMenuButton;

var LoginOrIdenty = function LoginOrIdenty(_ref) {
  var collapse = _ref.collapse,
      showCompound = _ref.showCompound;

  var _useClientContext2 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext2.identity;

  if (identity !== null && identity !== void 0 && identity.address) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IdentityChip.IdentityChip, {
      collapse: collapse,
      showCompound: showCompound
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LoginMenuButton, {});
};

exports.LoginOrIdenty = LoginOrIdenty;