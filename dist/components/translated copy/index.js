"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = void 0;

var _reactI18next = require("react-i18next");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withTranslation = function withTranslation(Comp) {
  var translateProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function (props) {
    var _useTranslation = (0, _reactI18next.useTranslation)(),
        t = _useTranslation.t;

    var newProps = translateProps.reduce(function (acc, prop) {
      var val = props[prop];
      acc[prop] = t(val);
      return acc;
    }, _objectSpread({}, props));
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, _objectSpread({}, newProps));
  };
};

exports.withTranslation = withTranslation;