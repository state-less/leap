"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebAuthnButton = void 0;

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _clsx = _interopRequireDefault(require("clsx"));

var _util = require("../../lib/util");

var _Icons = require("../Icons");

var _Tooltip = require("../translated/Tooltip");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "auto", "host"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WebAuthnButton = function WebAuthnButton(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$auto = _ref.auto,
      auto = _ref$auto === void 0 ? false : _ref$auto,
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? 'stateless' : _ref$host,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _ref2 = (0, _reactClient.useClientContext)(),
      identity = _ref2.identity;

  var _useAuth = (0, _reactClient.useAuth)(_reactClient.webAuthnStrategy, {
    auto: auto,
    host: host
  }),
      authenticate = _useAuth.authenticate;

  var color = (0, _clsx.default)({
    success: identity === null || identity === void 0 ? void 0 : identity.webauthn,
    primary: !(identity !== null && identity !== void 0 && identity.webauthn)
  });
  var text = !(identity !== null && identity !== void 0 && identity.webauthn) ? 'WebAuthn' : (0, _util.truncateMid)((0, _util.getWebAuthnId)(identity.webauthn));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
    title: identity !== null && identity !== void 0 && identity.webauthn ? 'Switch (activate)' : 'Login',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.YubiKeyIcon, {}),
      color: color,
      variant: "contained",
      onClick: function onClick() {
        return authenticate();
      }
    }, rest), {}, {
      children: text
    }))
  });
};

exports.WebAuthnButton = WebAuthnButton;