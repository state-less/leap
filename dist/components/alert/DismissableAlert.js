"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DismissableAlert = void 0;

var _material = require("@mui/material");

var _jotai = require("jotai");

var _jotai2 = require("../../lib/hooks/jotai");

var _Icons = require("../Icons");

var _Alert = require("../translated/Alert");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var atoms = {};
/**
 * Renders an alert with a dismiss button. State get's saved to localStorage.
 * @param props
 * @param props.name - A unique name for the alert.
 */

var DismissableAlert = function DismissableAlert(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? 'dismissable-alert' : _props$name;
  var atm = atoms[name] || (atoms[name] = (0, _jotai.atom)(false));

  var _useLocalStorage = (0, _jotai2.useLocalStorage)("alert.hidden.".concat(name), atm, false),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      hidden = _useLocalStorage2[0],
      setHidden = _useLocalStorage2[1];

  return hidden ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, _objectSpread(_objectSpread({}, props), {}, {
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      onClick: function onClick() {
        return setHidden(true);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CloseIcon, {})
    })
  }));
};

exports.DismissableAlert = DismissableAlert;