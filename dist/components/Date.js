"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Date = void 0;

var _material = require("@mui/material");

var _moment = _interopRequireDefault(require("moment"));

var _Tooltip = require("./translated/Tooltip");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "format", "fromNow"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 *
 * @param props
 * @returns
 */
var Date = function Date(props) {
  var children = props.children,
      format = props.format,
      fromNow = props.fromNow,
      rest = _objectWithoutProperties(props, _excluded);

  var date = (0, _moment.default)(children);
  var str = date.format(format);
  if (fromNow) str = date.fromNow();
  var title = '';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
    title: title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, _objectSpread(_objectSpread({
      variant: "caption"
    }, rest), {}, {
      children: str
    }))
  });
};

exports.Date = Date;