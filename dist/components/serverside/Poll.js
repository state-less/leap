"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollView = exports.PollModel = exports.PollItem = exports.Poll = void 0;

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _FavoriteBorder = _interopRequireDefault(require("@mui/icons-material/FavoriteBorder"));

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _system = require("@mui/system");

var _reactSpring = require("react-spring");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["View"],
    _excluded2 = ["name", "host", "Component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PollModel = function PollModel(_ref) {
  var View = _ref.View,
      rest = _objectWithoutProperties(_ref, _excluded);

  var props = (0, _reactClient.useProps)();
  var vote = (0, _reactClient.useAction)('vote', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread({}, props), {}, {
    vote: vote
  }, rest));
};

exports.PollModel = PollModel;

var PollView = function PollView(props) {
  var values = props.values,
      votes = props.votes,
      error = props.error,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? !values : _props$loading;
  var sum = (votes || []).reduce(function (a, b) {
    return a + ~~b;
  }, 0);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, _objectSpread(_objectSpread({}, props), {}, {
    children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
      severity: "error",
      children: error.message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
      dense: true,
      children: values && values.map(function (option, i) {
        var prc = 100 / sum * (votes || [])[i];
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PollItem, _objectSpread({
            option: option,
            index: i,
            prc: prc
          }, props), "poll-item-".concat(option))
        });
      })
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {})]
  }));
};

exports.PollView = PollView;

var PollItem = function PollItem(props) {
  var votes = props.votes,
      option = props.option,
      prc = props.prc,
      voted = props.voted,
      vote = props.vote,
      index = props.index,
      _props$animated = props.animated,
      animated = _props$animated === void 0 ? true : _props$animated;
  var theme = (0, _material.useTheme)();
  var style = (0, _reactSpring.useSpring)({
    from: {
      width: 'calc(0% - 16px)'
    },
    to: {
      width: "calc(".concat(~~prc, "% - 16px)")
    }
  });
  var buttons = (0, _reactSpring.useTransition)(voted === index, {
    initial: {
      transform: 'scale(1)'
    },
    from: {
      transform: 'scale(2)'
    },
    enter: {
      transform: 'scale(1)'
    },
    immediate: index !== voted,
    enabled: animated
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
    dense: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        width: 'calc(100% - 16px)',
        position: 'absolute',
        right: 8,
        opacity: 0.3,
        backgroundColor: theme.palette.primary.light,
        marginLeft: -8,
        height: 'calc(100% - 4px)' // zIndex: -1,

      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.div, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
        marginLeft: -8,
        opacity: 0.8,
        height: 'calc(100% - 4px)' // zIndex: -1,

      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        onClick: function onClick() {
          return vote(index);
        },
        children: buttons(function (props, item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.span, {
            style: _objectSpread(_objectSpread({}, props), {}, {
              height: 24
            }),
            children: item ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Favorite.default, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_FavoriteBorder.default, {})
          });
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
      sx: {
        zIndex: 0
      },
      primary: option,
      secondary: (votes || [])[index]
    })]
  });
};
/**
 * A component that let's users vote on a set of options.
 * @param name - The name of the Poll component as defined on the server.
 * @param Component - The component that renders the poll.
 */


exports.PollItem = PollItem;

var Poll = function Poll(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'poll' : _ref2$name,
      _ref2$host = _ref2.host,
      host = _ref2$host === void 0 ? null : _ref2$host,
      _ref2$Component = _ref2.Component,
      Component = _ref2$Component === void 0 ? PollView : _ref2$Component,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    host: host,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PollModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.Poll = Poll;