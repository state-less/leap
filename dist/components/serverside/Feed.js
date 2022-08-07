"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderImage = exports.FeedView = exports.FeedModel = exports.Feed = void 0;

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _Alert = require("../translated/Alert");

var _Button = require("../translated/Button");

var _FileSystem = require("./FileSystem");

var _DismissableAlert = require("../alert/DismissableAlert");

var _Post = require("./Post");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "View"],
    _excluded2 = ["name", "Component"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var renderImage = function renderImage(src) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    src: src
  });
};

exports.renderImage = renderImage;

var FeedView = function FeedView(props) {
  var _useClientContext = (0, _reactClient.useClientContext)(),
      identity = _useClientContext.identity;

  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      createItem = props.createItem,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === void 0 ? 10 : _props$pageSize,
      renderFile = props.renderFile,
      loading = props.loading;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      content = _useState6[0],
      setContent = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      fileNames = _useState8[0],
      setFileNames = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      expanded = _useState10[0],
      setExpanded = _useState10[1];

  var fileNamesArray = [fileNames].flat().filter(Boolean);
  var titleField = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
    sx: {
      mt: +expanded
    },
    label: "title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  });
  var contentField = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
    sx: {
      mt: +expanded
    },
    fullWidth: true,
    multiline: true,
    rows: 5,
    label: "Content",
    value: content,
    onChange: function onChange(e) {
      return setContent(e.target.value);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
      children: [!items.length && !loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
        severity: "warning",
        children: "alerts.noData"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DismissableAlert.DismissableAlert, {
          name: "alerts.feed.thoughts",
          severity: "info",
          children: "alerts.feed.thoughts"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
          container: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
            item: true,
            xs: fileNamesArray.length === 1 ? 8 : 12,
            md: fileNamesArray.length === 1 ? 10 : 12,
            children: [expanded && titleField, contentField]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: fileNamesArray.length === 1 ? 4 : 12,
            md: fileNamesArray.length === 1 ? 2 : 12,
            sx: {
              height: '100%'
            },
            container: true,
            children: fileNames === null || fileNames === void 0 ? void 0 : fileNames.map(function (fileName) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: fileNamesArray.length === 1 ? 12 : 4,
                sx: {
                  ml: 1
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileSystem.File, {
                  fileName: fileName
                }, fileName)
              });
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardActions, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.TranslatedButton, {
          variant: "contained",
          disabled: !content || !identity,
          onClick: /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      e.stopPropagation();
                      _context.next = 4;
                      return createItem({
                        title: title,
                        content: content,
                        fileName: fileNames
                      });

                    case 4:
                      setTitle('');
                      setContent('');

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(),
          children: "POST"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileSystem.FileSystem, {
          Component: _FileSystem.FileUploadButton,
          onSuccess: function onSuccess(names) {
            console.log('Success.. setting filename', names);
            setFileNames(names);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          onClick: function onClick() {
            return setExpanded(!expanded);
          },
          sx: {
            transition: 'transform 200ms',
            transform: expanded ? 'rotate(180deg)' : ''
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.ExpandMore, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileSystem.FileSystem, {
          Component: _FileSystem.FileSelector,
          onSelect: function onSelect(name) {
            return setFileNames([name].flat());
          }
        })]
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {})]
    }), (items || []).slice().reverse().slice((page - 1) * pageSize, page * pageSize).map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
        name: "post-".concat(item.id),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Post.PostModel, {
          View: _Post.Post,
          title: item.title,
          content: item.content,
          fileName: item.fileName,
          renderFile: renderFile
        })
      }, item.id);
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Pagination, {
      count: Math.ceil(items.length / pageSize),
      onChange: function onChange(e, p) {
        return setPage(p);
      }
    })]
  });
};

exports.FeedView = FeedView;

var FeedModel = function FeedModel(props) {
  var children = props.children,
      _props$View = props.View,
      View = _props$View === void 0 ? FeedView : _props$View,
      rest = _objectWithoutProperties(props, _excluded);

  var serverProps = (0, _reactClient.useProps)();
  var createItem = (0, _reactClient.useAction)('createItem', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread(_objectSpread({}, serverProps), rest), {}, {
    createItem: createItem,
    children: children
  }));
};

exports.FeedModel = FeedModel;

var Feed = function Feed(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'feed' : _ref2$name,
      _ref2$Component = _ref2.Component,
      Component = _ref2$Component === void 0 ? FeedView : _ref2$Component,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FeedModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.Feed = Feed;