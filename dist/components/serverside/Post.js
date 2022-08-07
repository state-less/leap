"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostModel = exports.Post = void 0;

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _Icons = require("../Icons");

var _Markdown = require("../translated/Markdown");

var _Counter = require("./Counter");

var _FileSystem = require("./FileSystem");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["View"];

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

var Post = function Post(props) {
  var title = props.title,
      content = props.content,
      fileNames = props.fileName,
      deletePost = props.delete,
      id = props.id,
      loading = props.loading,
      _props$renderFile = props.renderFile,
      renderFile = _props$renderFile === void 0 ? function (fileName) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileSystem.File, {
      fileName: fileName
    });
  } : _props$renderFile;
  var deleteButton = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
    disabled: deletePost === null || deletePost === void 0 ? void 0 : deletePost.disabled,
    onClick: function onClick() {
      return deletePost();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.DeleteIcon, {})
  });
  var fileNamesArray = [fileNames].flat();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  (0, _react.useEffect)(function () {
    setTimeout(setHover, 3000, false);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {}), title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
      title: title || ''
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        xl: 8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Markdown.TranslatedMarkdown, {
            children: content
          })
        })
      }), fileNames && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        xl: 4,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardMedia, {
          onMouseEnter: function onMouseEnter() {
            return setHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return setHover(false);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MobileStepper, {
            sx: {
              width: '100%',
              marginBottom: {
                xxs: '0px',
                xs: '-48px'
              },
              display: {
                xxs: 'flex',
                xs: !hover ? 'none' : 'flex'
              }
            },
            variant: "dots",
            steps: fileNamesArray.length,
            position: "static",
            activeStep: activeStep,
            nextButton: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
              size: "small",
              onClick: function onClick() {
                setActiveStep(activeStep + 1);
              },
              disabled: activeStep === fileNamesArray.length - 1,
              children: ["Next", /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.KeyboardArrowRight, {})]
            }),
            backButton: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
              size: "small",
              onClick: function onClick() {
                return setActiveStep(activeStep - 1);
              },
              disabled: activeStep === 0,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.KeyboardArrowLeft, {}), "Back"]
            })
          }), renderFile(fileNamesArray[activeStep])]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActionArea, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardActions, {
        children: [id && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
          name: "counter-".concat(id),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Counter.CounterModel, {
            View: _Counter.StarsView
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            flexGrow: 1,
            flex: 1
          }
        }), deleteButton]
      })
    })]
  });
};

exports.Post = Post;

var PostModel = function PostModel(_ref) {
  var View = _ref.View,
      rest = _objectWithoutProperties(_ref, _excluded);

  var serverProps = (0, _reactClient.useProps)();
  var del = (0, _reactClient.useAction)('delete', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread({}, serverProps), {}, {
    delete: del
  }, rest));
};

exports.PostModel = PostModel;