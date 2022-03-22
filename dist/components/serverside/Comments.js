"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsView = exports.CommentsModel = exports.Comments = exports.CommentView = exports.CommentModel = exports.CommentMarkdown = void 0;

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _reactSpring = require("react-spring");

var _Button = require("../translated/Button");

var _Date = require("../Date");

var _Icons = require("../Icons");

var _Counter = require("../Counter");

var _Counter2 = require("./Counter");

var _Alert = require("../translated/Alert");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["View", "host"],
    _excluded2 = ["View"],
    _excluded3 = ["name", "Component", "host"];

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Comments model. Gather's props and renders a View with it.
 * @param param0
 * @returns
 */
var CommentsModel = function CommentsModel(_ref) {
  var View = _ref.View,
      host = _ref.host,
      rest = _objectWithoutProperties(_ref, _excluded);

  var props = (0, _reactClient.useProps)();
  var addComment = (0, _reactClient.useAction)('addComment', 'onClick');
  var deleteComment = (0, _reactClient.useAction)('deleteComment', 'onClick'); // return <>Props {JSON.stringify(props)}</>

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread(_objectSpread({}, props), rest), {}, {
    addComment: addComment,
    deleteComment: deleteComment,
    host: host
  }));
};

exports.CommentsModel = CommentsModel;

var CommentsView = function CommentsView(props) {
  var comments = props.comments,
      addComment = props.addComment,
      deleteComment = props.deleteComment,
      pagination = props.pagination,
      pageSize = props.pageSize,
      _props$compose = props.compose,
      compose = _props$compose === void 0 ? false : _props$compose,
      _props$host = props.host,
      host = _props$host === void 0 ? 'stateless' : _props$host,
      _props$markdown = props.markdown,
      markdown = _props$markdown === void 0 ? false : _props$markdown;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      err = _useState6[0],
      setError = _useState6[1];

  if (!comments) return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
      label: "COMMENTS_LOADING"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {})]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [err && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
      severity: "error",
      children: err.message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
      children: comments && comments.slice && comments.slice().reverse().slice(-pageSize + page * pageSize, page * pageSize).map(function (commentData) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comment, _objectSpread(_objectSpread({
          host: host,
          name: "comment-".concat(commentData.id)
        }, commentData), {}, {
          deleteComment: deleteComment
        }), commentData.id);
      })
    }), pagination && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Pagination, {
      page: page,
      count: ~~Math.ceil(~~(comments === null || comments === void 0 ? void 0 : comments.length) / pageSize),
      onChange: function onChange(e, v) {
        return setPage(v);
      }
    }), compose && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [!markdown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
          disabled: addComment.disabled,
          multiline: true,
          value: comment,
          onChange: function onChange(e) {
            return setComment(e.target.value);
          },
          fullWidth: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.TranslatedButton, {
          disabled: addComment.disabled,
          color: "primary",
          onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return addComment(comment);

                  case 3:
                    setComment('');
                    setError(null);
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    setError(_context.t0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          })),
          children: "BUTTON_COMMENT_ADD"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {})]
    })]
  });
};

exports.CommentsView = CommentsView;

var CommentMarkdown = function CommentMarkdown(props) {
  var markdown = props.markdown;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
    children: markdown
  });
};

exports.CommentMarkdown = CommentMarkdown;

var truncateName = function truncateName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (/^0x/.test(name)) return "".concat(name.slice(0, 3), "...").concat(name.slice(-3));
  if (name.length > 15) return "".concat(name.slice(0, 12), "...");
  return name;
};

var CommentView = function CommentView(props) {
  var deleteComment = props.deleteComment,
      createdAt = props.createdAt,
      _props$owner = props.owner,
      owner = _props$owner === void 0 ? null : _props$owner,
      id = props.id,
      error = props.error;
  var styles = (0, _reactSpring.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.div, {
    style: styles,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
      children: [(error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
        severity: "error",
        children: error.message
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
          name: "counter-comment-".concat(id),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Counter2.CounterModel, {
            View: _Counter.Votes
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
          style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
            sx: {
              height: 0
            },
            action: !deleteComment.disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
              disabled: deleteComment.disabled,
              onClick: function onClick() {
                return deleteComment(id);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CloseIcon, {})
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CommentMarkdown, _objectSpread({}, props)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mla"
              }), owner && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
                avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
                  alt: "react server leap profile-picture",
                  src: owner === null || owner === void 0 ? void 0 : owner.picture
                }),
                label: truncateName(owner === null || owner === void 0 ? void 0 : owner.name)
              }), createdAt && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Date.Date, {
                fromNow: true,
                format: "DD.MM HH:mm",
                children: createdAt
              })]
            })]
          })]
        })]
      })]
    })
  });
};

exports.CommentView = CommentView;

var CommentModel = function CommentModel(_ref3) {
  var View = _ref3.View,
      rest = _objectWithoutProperties(_ref3, _excluded2);

  var props = (0, _reactClient.useProps)();
  var del = (0, _reactClient.useAction)('deleteComment', 'onClick'); // return <>Props {JSON.stringify(props)}</>

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread(_objectSpread({}, props), rest), {}, {
    deleteComment: del
  }));
};

exports.CommentModel = CommentModel;

var Comment = function Comment(_ref4) {
  var name = _ref4.name,
      _ref4$Component = _ref4.Component,
      Component = _ref4$Component === void 0 ? CommentView : _ref4$Component,
      _ref4$host = _ref4.host,
      host = _ref4$host === void 0 ? 'stateless' : _ref4$host,
      rest = _objectWithoutProperties(_ref4, _excluded3);

  if (!name) throw new Error('Comment needs a property "name"');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    host: host,
    name: name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CommentModel, _objectSpread({
      View: Component
    }, rest))
  });
};

var Comments = function Comments(_ref5) {
  var _ref5$name = _ref5.name,
      name = _ref5$name === void 0 ? 'comments' : _ref5$name,
      _ref5$host = _ref5.host,
      host = _ref5$host === void 0 ? 'localhost' : _ref5$host,
      pagination = _ref5.pagination,
      _ref5$pageSize = _ref5.pageSize,
      pageSize = _ref5$pageSize === void 0 ? 3 : _ref5$pageSize,
      _ref5$compose = _ref5.compose,
      compose = _ref5$compose === void 0 ? false : _ref5$compose,
      _ref5$Component = _ref5.Component,
      Component = _ref5$Component === void 0 ? CommentsView : _ref5$Component;
  var props = {
    pagination: pagination,
    pageSize: pageSize,
    compose: compose
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    host: host,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CommentsModel, _objectSpread({
      host: host,
      View: Component
    }, props))
  });
};

exports.Comments = Comments;