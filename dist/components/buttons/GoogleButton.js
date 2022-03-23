"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGoogle = exports.googleStrategy = exports.GoogleButton = void 0;

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _reactGoogleLogin = _interopRequireWildcard(require("react-google-login"));

var _config = require("../../config");

var _util = require("../../lib/util");

var _button = require("../../types/button");

var _Icons = require("../Icons");

var _Button = require("../translated/Button");

var _Tooltip = require("../translated/Tooltip");

var _Util = require("../Util");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["clientId", "auto", "host"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var googleStrategy = function googleStrategy() {
  return {
    authenticate: function authenticate(challenge, token) {
      return {
        challenge: challenge,
        response: token.tokenId,
        strategy: 'google',
        success: true
      };
    },
    logout: _util.noop,
    id: 'google',
    strategy: 'google'
  };
};

exports.googleStrategy = googleStrategy;

var useGoogle = function useGoogle() {
  var _useAuth = (0, _reactClient.useAuth)(googleStrategy),
      authenticate = _useAuth.authenticate;

  var _useGoogleLogin = (0, _reactGoogleLogin.useGoogleLogin)({
    clientId: _config.GOOGLE_CLIENT || '',
    onSuccess: authenticate
  }),
      signIn = _useGoogleLogin.signIn;

  return {
    authenticate: signIn
  };
};

exports.useGoogle = useGoogle;

var GoogleButton = function GoogleButton(_ref) {
  var _identity$google;

  var _ref$clientId = _ref.clientId,
      clientId = _ref$clientId === void 0 ? _config.GOOGLE_CLIENT || '' : _ref$clientId,
      _ref$auto = _ref.auto,
      auto = _ref$auto === void 0 ? false : _ref$auto,
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? 'stateless' : _ref$host,
      rest = _objectWithoutProperties(_ref, _excluded);

  var rcc = (0, _reactClient.useClientContext)();
  var identity = rcc.identity;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useAuth2 = (0, _reactClient.useAuth)(googleStrategy, {
    auto: auto,
    host: host
  }),
      authenticate = _useAuth2.authenticate;

  var icon = identity !== null && identity !== void 0 && identity.google ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
    alt: "react server profile-picture",
    sx: {
      width: 24,
      height: 24
    },
    src: identity === null || identity === void 0 ? void 0 : (_identity$google = identity.google) === null || _identity$google === void 0 ? void 0 : _identity$google.picture
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.GoogleIcon, {});
  var tooltip = !(identity !== null && identity !== void 0 && identity.google) ? 'TOOLTIP_LOGIN_GOOGLE' : 'TOOLTIP_LOGGEDIN_GOOGLE';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
    title: tooltip,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Util.FullWidthSpan, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGoogleLogin.default, {
        clientId: clientId,
        render: function render(renderProps) {
          var _identity$google2;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.TranslatedButton, _objectSpread(_objectSpread({
            color: error ? _button.ButtonStatusColor.ERROR : identity !== null && identity !== void 0 && identity.google ? _button.ButtonStatusColor.AUTHENTICATED : _button.ButtonStatusColor.OK,
            variant: "contained",
            startIcon: icon,
            onClick: renderProps.onClick,
            disabled: renderProps.disabled
          }, rest), {}, {
            label: identity !== null && identity !== void 0 && identity.google ? identity === null || identity === void 0 ? void 0 : (_identity$google2 = identity.google) === null || _identity$google2 === void 0 ? void 0 : _identity$google2.given_name : 'LABEL_GOOGLE'
          }));
        },
        onSuccess: authenticate,
        onFailure: function onFailure(e) {
          return setError(e.message);
        },
        cookiePolicy: "single_host_origin",
        loginHint: "asd"
      })
    })
  });
};

exports.GoogleButton = GoogleButton;