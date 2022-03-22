"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSetting = exports.SettingsType = exports.SettingListItem = exports.ColorSetting = exports.BooleanSetting = void 0;

var _material = require("@mui/material");

var _changeCase = require("change-case");

var _clsx = _interopRequireDefault(require("clsx"));

var _materialUiColor = require("material-ui-color");

var _react = require("react");

var _jotai = require("jotai");

var _jotai2 = require("../lib/hooks/jotai");

var _atoms = _interopRequireDefault(require("../lib/static/atoms"));

var _Icons = require("./Icons");

var _ListItemText = require("./translated/ListItemText");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["type", "label", "name", "value", "option", "OptionIcon", "controlTooltip", "inputOnly", "disabled", "Icon", "tooltip"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SettingsType;
exports.SettingsType = SettingsType;

(function (SettingsType) {
  SettingsType["color"] = "color";
  SettingsType["boolean"] = "boolean";
})(SettingsType || (exports.SettingsType = SettingsType = {}));

var iconMap = {
  boolean: _Icons.SettingsIcon,
  color: _Icons.PaletteIcon
};

var debounce = function debounce(fn) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var to;
  return function () {
    clearTimeout(to);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    to = setTimeout.apply(void 0, [fn, ms].concat(args));
  };
};

var useSetting = function useSetting(key, defaultValue) {
  if (!_atoms.default[key] && process.env.NODE_ENV === 'development') console.warn("No atom found for key ".concat(key, ". State will not be shared."));
  var atm = _atoms.default[key] || (0, _jotai.atom)(defaultValue);
  var state = (0, _jotai2.useLocalStorage)(key, defaultValue, atm);
  return state;
};

exports.useSetting = useSetting;

var BooleanSetting = function BooleanSetting(props) {
  var value = props.value,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      disabled = props.disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Switch, {
    color: "secondary",
    checked: value,
    onChange: onChange,
    disabled: disabled
  });
}; // eslint-disable-next-line @typescript-eslint/no-empty-function


exports.BooleanSetting = BooleanSetting;

var noop = function noop() {};

var ColorSetting = function ColorSetting(props) {
  var value = props.value,
      _props$onChange2 = props.onChange,
      onChange = _props$onChange2 === void 0 ? noop : _props$onChange2;
  var debounced = debounce(onChange, 500);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      tmp = _useState2[0],
      setTmp = _useState2[1];

  var theme = (0, _material.useTheme)();
  (0, _react.useEffect)(function () {
    setTmp(value);
  }, [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_materialUiColor.ColorPicker, {
    disableTextfield: true,
    disablePlainColor: true,
    disableAlpha: true,
    hideTextfield: true // defaultValue="#000"
    ,
    value: tmp,
    onChange: function onChange(v) {
      debounced(v);
      setTmp(v);
    },
    palette: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
      success: theme.palette.success.main,
      warning: theme.palette.warning.main,
      error: theme.palette.error.main
    }
  });
};

exports.ColorSetting = ColorSetting;

var SettingListItem = function SettingListItem(props) {
  var type = props.type,
      label = props.label,
      name = props.name,
      value = props.value,
      option = props.option,
      OptionIcon = props.OptionIcon,
      controlTooltip = props.controlTooltip,
      inputOnly = props.inputOnly,
      disabled = props.disabled,
      _props$Icon = props.Icon,
      Icon = _props$Icon === void 0 ? iconMap[type] : _props$Icon,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? '' : _props$tooltip,
      rest = _objectWithoutProperties(props, _excluded);

  var onChange = props.onChange;

  var _useSetting = useSetting(name, value),
      _useSetting2 = _slicedToArray(_useSetting, 2),
      stored = _useSetting2[0],
      setSetting = _useSetting2[1];

  var capitalizedLabel = label || (0, _changeCase.capitalCase)(name);
  var input;
  if (!onChange) onChange = function onChange(val) {
    setSetting(val);
  };
  if (type === 'boolean') input = /*#__PURE__*/(0, _jsxRuntime.jsx)(BooleanSetting, _objectSpread(_objectSpread({
    value: stored
  }, props), {}, {
    onChange: onChange
  }));
  if (type === 'color') input = /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorSetting, _objectSpread(_objectSpread({
    value: stored
  }, props), {}, {
    onChange: onChange
  }));
  if (controlTooltip) input = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: controlTooltip,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: input
    })
  });

  if (inputOnly && input) {
    return input;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
    sx: {
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }
    },
    children: [!option && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText.TranslatedListItemText, {
        primary: capitalizedLabel
      })]
    }), OptionIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: tooltip || '',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OptionIcon, {
        className: (0, _clsx.default)({
          disabled: disabled
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
      children: input
    })]
  });
};

exports.SettingListItem = SettingListItem;