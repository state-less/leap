"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarsView = exports.LikesView = exports.CounterModel = exports.Counter = void 0;

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _FavoriteBorder = _interopRequireDefault(require("@mui/icons-material/FavoriteBorder"));

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _Star = _interopRequireDefault(require("@mui/icons-material/Star"));

var _StarBorder = _interopRequireDefault(require("@mui/icons-material/StarBorder"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["View"],
    _excluded2 = ["children", "value", "voted", "increase", "icon", "Icon", "VotedIcon", "error"],
    _excluded3 = ["name", "host", "Component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * The model for counter components. Injects a value prop and increase / decrease actions.
 * @param param0
 * @returns
 */
var CounterModel = function CounterModel(_ref) {
  var View = _ref.View,
      rest = _objectWithoutProperties(_ref, _excluded);

  var props = (0, _reactClient.useProps)();
  var increase = (0, _reactClient.useAction)('increase', 'onClick');
  var decrease = (0, _reactClient.useAction)('decrease', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread(_objectSpread({}, props), rest), {}, {
    increase: increase,
    decrease: decrease
  }));
};
/** Renders a Heart icon that's filled when its value is > 0 */


exports.CounterModel = CounterModel;

var LikesView = function LikesView(props) {
  var children = props.children,
      value = props.value,
      voted = props.voted,
      increase = props.increase,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? false : _props$icon,
      _props$Icon = props.Icon,
      Icon = _props$Icon === void 0 ? _FavoriteBorder.default : _props$Icon,
      _props$VotedIcon = props.VotedIcon,
      VotedIcon = _props$VotedIcon === void 0 ? _Favorite.default : _props$VotedIcon,
      error = props.error,
      rest = _objectWithoutProperties(props, _excluded2);

  if (!icon) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: error ? error.message : value,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
      disabled: increase.disabled,
      onClick: function onClick() {
        return increase();
      },
      startIcon: voted ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VotedIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {}),
      color: error ? 'error' : voted ? 'secondary' : 'inherit'
    }, rest), {}, {
      children: children || value
    }))
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: value,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      disabled: increase.disabled,
      onClick: function onClick() {
        return increase();
      },
      color: voted ? 'primary' : 'default',
      children: voted ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VotedIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
    })
  });
};
/**
 * Renders a Star Icon that's filled when its value is > 0
 */


exports.LikesView = LikesView;

var StarsView = function StarsView(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LikesView, _objectSpread(_objectSpread({}, props), {}, {
    Icon: _StarBorder.default,
    VotedIcon: _Star.default
  }));
};
/**
 * Renders a simple Up / Down vote button as view for the counter.
 */


exports.StarsView = StarsView;

var Counter = function Counter(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'counter' : _ref2$name,
      _ref2$host = _ref2.host,
      host = _ref2$host === void 0 ? 'localhost' : _ref2$host,
      _ref2$Component = _ref2.Component,
      Component = _ref2$Component === void 0 ? StarsView : _ref2$Component,
      props = _objectWithoutProperties(_ref2, _excluded3);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    host: host,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CounterModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.Counter = Counter;