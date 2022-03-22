"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutButton = void 0;

var _reactClient = require("@state-less/react-client");

var _util = require("../../lib/util");

var _Tooltip = require("../Tooltip");

var _Button = require("../translated/Button");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["host", "auto"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noopStrat = function noopStrat() {
  return {
    logout: _util.noop
  };
};

var LogoutButton = function LogoutButton(_ref) {
  var _ref$host = _ref.host,
      host = _ref$host === void 0 ? 'stateless' : _ref$host,
      _ref$auto = _ref.auto,
      auto = _ref$auto === void 0 ? false : _ref$auto,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useClientContext = (0, _reactClient.useClientContext)(),
      identity = _useClientContext.identity;

  var _useAuth = (0, _reactClient.useAuth)(noopStrat, {
    host: host,
    auto: auto
  }),
      logout = _useAuth.logout;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.ConfigurableTooltip, {
    title: "TOOLTIP_NOT_LOGGED_IN",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.TranslatedButton, _objectSpread(_objectSpread({
      disabled: !identity,
      variant: "contained",
      color: "secondary",
      onClick: logout
    }, rest), {}, {
      children: "LOGOUT"
    }))
  });
};

exports.LogoutButton = LogoutButton;