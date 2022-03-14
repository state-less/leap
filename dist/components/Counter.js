"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Votes = void 0;

var _material = require("@mui/material");

var _react = require("react");

var _reactSpring = require("react-spring");

var _const = require("../lib/static/const");

var _MUI = require("../lib/static/types/MUI");

var _util = require("../lib/util");

var _Icons = require("./Icons");

var _jsxRuntime = require("react/jsx-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Votes = function Votes(props) {
  var value = props.value,
      voted = props.voted,
      increase = props.increase,
      decrease = props.decrease,
      onError = props.onError;
  var n = (0, _react.useRef)(0);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      err = _useState2[0],
      setErr = _useState2[1];

  (0, _react.useEffect)(function () {
    n.current = 0;
  }, [voted]);
  var style = (0, _reactSpring.useSpring)({
    to: {
      transform: 'translateY(0px)'
    },
    from: {
      transform: 'translateY(-8px)'
    },
    config: {
      duration: _const.DUR_ANIM
    },
    immediate: voted !== 1,
    reset: true,
    loop: function loop() {
      return false;
    }
  });
  var style2 = (0, _reactSpring.useSpring)({
    to: {
      transform: 'translateY(0px)'
    },
    from: {
      transform: 'translateY(8px)'
    },
    config: {
      duration: _const.DUR_ANIM
    },
    immediate: voted !== -1,
    reset: true,
    loop: function loop() {
      return false;
    }
  });
  (0, _react.useEffect)(_util.noop, [voted]);

  var tryCall = function tryCall(fn) {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fn();

            case 3:
              _context.next = 9;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              setErr(_context.t0);
              if (typeof onError === 'function') onError(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: err ? err.message : '',
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "flex col",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.span, {
        style: style,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          disabled: increase.disabled,
          color: voted > 0 ? _MUI.MUIThemeColors.primary : _MUI.MUIThemeColors.default,
          onClick: tryCall(increase),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.UpIcon, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        color: "primary",
        children: value
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.span, {
        style: style2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          disabled: increase.disabled,
          color: voted < 0 ? _MUI.MUIThemeColors.primary : _MUI.MUIThemeColors.default,
          onClick: tryCall(decrease),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.DownIcon, {})
        })
      })]
    })
  });
};

exports.Votes = Votes;