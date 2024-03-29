"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslatedAlertTitle = exports.TranslatedAlert = void 0;

var _material = require("@mui/material");

var _reactI18next = require("react-i18next");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children"],
    _excluded2 = ["children", "markdown"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TranslatedAlertTitle = function TranslatedAlertTitle(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AlertTitle, _objectSpread(_objectSpread({}, rest), {}, {
    children: t(children)
  }));
};

exports.TranslatedAlertTitle = TranslatedAlertTitle;

var TranslatedAlert = function TranslatedAlert(props) {
  var children = props.children,
      markdown = props.markdown,
      rest = _objectWithoutProperties(props, _excluded2);

  var _useTranslation2 = (0, _reactI18next.useTranslation)(),
      t = _useTranslation2.t;

  var translated = t(children);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, _objectSpread(_objectSpread({
    square: true
  }, rest), {}, {
    children: markdown ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMarkdown.default, {
      children: translated
    }) : translated
  }));
};

exports.TranslatedAlert = TranslatedAlert;