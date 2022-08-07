"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilesViewList = exports.FilesView = exports.FileView = exports.FileUploadView = exports.FileUploadButton = exports.FileUpload = exports.FileSystemModel = exports.FileSystem = exports.FileSelector = exports.File = void 0;

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _reactDropzone = require("react-dropzone");

var _jotai = require("jotai");

var _reactI18next = require("react-i18next");

var _Icons = require("../Icons");

var _config = require("../../config");

var _util = require("../../lib/util");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "View"],
    _excluded2 = ["name", "Component"],
    _excluded3 = ["name", "Component"],
    _excluded4 = ["name", "Component"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var chunkSize = _config.CHUNK_SIZE;

var FileSelector = function FileSelector(props) {
  var _props$files = props.files,
      files = _props$files === void 0 ? [] : _props$files,
      onSelect = props.onSelect;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  if (files === null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      disabled: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.InsertDriveFileIcon, {})
    });
  }

  var handleSelect = function handleSelect(name) {
    setSelected(name);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: open,
      onClose: function onClose() {
        return setOpen(false);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '50%'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
          sx: {
            width: '100%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
            container: true,
            spacing: 1,
            sx: {
              width: '100%'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
              item: true,
              xs: 12,
              sm: 6,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
                sx: {
                  maxHeight: '250px',
                  overflow: 'scroll'
                },
                children: files.map(function (file) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
                    selected: file === selected,
                    button: true,
                    onClick: function onClick() {
                      return handleSelect(file);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
                      primary: file
                    })
                  });
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
              item: true,
              xs: 12,
              sm: 6,
              children: selected && /*#__PURE__*/(0, _jsxRuntime.jsx)(File, {
                fileName: selected
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              onClick: function onClick() {
                onSelect(selected);
                setOpen(false);
              },
              children: t('buttons.confirm')
            })
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      onClick: function onClick() {
        return setOpen(true);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.InsertDriveFileIcon, {})
    })]
  });
};

exports.FileSelector = FileSelector;

var FilesViewList = function FilesViewList(props) {
  var _props$files2 = props.files,
      files = _props$files2 === void 0 ? [] : _props$files2,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === void 0 ? 10 : _props$pageSize,
      _onClick = props.onClick,
      active = props.active,
      onDelete = props.onDelete;

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  if (files === null) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
      children: files.map(function (name) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
          selected: name === active,
          button: true,
          onClick: function onClick() {
            return _onClick(name);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
            primary: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemSecondaryAction, {
            onClick: function onClick() {
              return onDelete(name);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.DeleteIcon, {})
          })]
        });
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Pagination, {
      page: page,
      count: Math.ceil(files.length / pageSize),
      onChange: function onChange(e, v) {
        return setPage(v);
      }
    })]
  });
};

exports.FilesViewList = FilesViewList;

var FilesView = function FilesView(props) {
  var del = props.del;

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      fileName = _useState8[0],
      setFileName = _useState8[1];

  var _useTranslation2 = (0, _reactI18next.useTranslation)(),
      t = _useTranslation2.t;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
      title: t('leap.filesystem.files.title')
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FilesViewList, _objectSpread(_objectSpread({}, props), {}, {
            onClick: function onClick(name) {
              return setFileName(name === fileName ? null : name);
            },
            onDelete: function onDelete(name) {
              return del({
                name: name
              });
            },
            active: fileName
          }))
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: 4,
        sx: {
          height: '100%'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileView, _objectSpread({
            fileName: fileName
          }, props))
        })
      })]
    })]
  });
};

exports.FilesView = FilesView;
var atoms = {};
var cache = {};

var FileView = function FileView(props) {
  var fileName = props.fileName,
      getChunk = props.getChunk;
  var uriAtom = (0, _react.useMemo)(function () {
    // eslint-disable-next-line no-return-assign
    return atoms[fileName] || (atoms[fileName] = (0, _jotai.atom)(null));
  }, [fileName]);

  var _useAtom = (0, _jotai.useAtom)(uriAtom),
      _useAtom2 = _slicedToArray(_useAtom, 2),
      dataUri = _useAtom2[0],
      setDataUri = _useAtom2[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  (0, _react.useEffect)(function () {
    if (fileName) {
      if (typeof cache[fileName] !== 'undefined' || getChunk === null) {
        return;
      }

      cache[fileName] = null;

      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var chunks, chunk, str, bytes, i, blob, uri;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                chunks = [];

              case 1:
                setLoading(true); // eslint-disable-next-line no-await-in-loop

                _context.next = 4;
                return getChunk({
                  fileName: fileName,
                  chunkSize: chunkSize
                });

              case 4:
                chunk = _context.sent;
                chunks.push(chunk);

                if (!(chunk === undefined)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", cache[fileName] = undefined);

              case 8:
                if (chunk && chunk !== null && chunkSize === chunk.length) {
                  _context.next = 1;
                  break;
                }

              case 9:
                str = chunks.join('');
                bytes = new Uint8Array(str.length);

                for (i = 0; i < str.length; i += 1) {
                  bytes[i] = str.charCodeAt(i);
                }

                blob = new Blob([bytes], {
                  type: 'image/png'
                });
                _context.next = 15;
                return (0, _util.blobToDataURL)(blob);

              case 15:
                uri = _context.sent;
                cache[fileName] = uri;
                setDataUri(uri.toString());
                setLoading(false);
                return _context.abrupt("return", undefined);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardMedia, {
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {
      variant: "indeterminate"
    }), !dataUri && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Skeleton, {
      height: 150
    }), fileName && dataUri && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: fileName,
      src: dataUri
    })]
  });
};

exports.FileView = FileView;

var FileUploadButton = function FileUploadButton(props) {
  var createItem = props.createItem,
      upload = props.upload,
      save = props.save,
      onSuccess = props.onSuccess;

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      progress = _useState12[0],
      setProgress = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      uploading = _useState14[0],
      setUploading = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      fileNames = _useState16[0],
      setFileNames = _useState16[1];

  var _useState17 = (0, _react.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      file = _useState18[0],
      setFile = _useState18[1];

  var onDrop = function onDrop(files) {
    return handleUpload({
      target: {
        files: files
      }
    });
  };

  var handleUpload = function handleUpload(e) {
    var files = e.target.files;
    /**
     * TODO: This should use files.map and Promise.all
     */
    // eslint-disable-next-line no-restricted-syntax

    var _iterator = _createForOfIteratorHelper(files),
        _step;

    try {
      var _loop = function _loop() {
        var file = _step.value;
        setFile(file);
        var reader = new FileReader();

        reader.onload = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
            var fileData, _yield$createItem, fileName, i, chunk, result;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    fileData = e.target.result;
                    _context2.next = 3;
                    return createItem({
                      size: file.size,
                      name: file.name,
                      data: fileData
                    });

                  case 3:
                    _yield$createItem = _context2.sent;
                    fileName = _yield$createItem.fileName;
                    setUploading(true);
                    i = 0;

                  case 7:
                    if (!(i <= (fileData === null || fileData === void 0 ? void 0 : fileData.toString().length))) {
                      _context2.next = 15;
                      break;
                    }

                    chunk = fileData === null || fileData === void 0 ? void 0 : fileData.slice(i, i + chunkSize);
                    _context2.next = 11;
                    return upload({
                      fileName: fileName,
                      chunk: chunk
                    });

                  case 11:
                    setProgress(Math.min(100, 100 / file.size * (i + chunkSize)));

                  case 12:
                    i += chunkSize;
                    _context2.next = 7;
                    break;

                  case 15:
                    _context2.next = 17;
                    return save({
                      fileName: fileName
                    });

                  case 17:
                    result = _context2.sent;
                    setUploading(false);
                    setFileNames(function (fileNames) {
                      return [].concat(_toConsumableArray(fileNames), [fileName]);
                    });

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }();

        reader.readAsBinaryString(file);
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  (0, _react.useEffect)(function () {
    if (fileNames.length > 0) {
      onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(fileNames);
    }
  }, [fileNames]);
  var ref = (0, _react.useRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: ref,
      id: "file-input",
      type: "file",
      style: {
        display: 'none'
      },
      onChange: handleUpload,
      multiple: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      disabled: upload === null || upload === void 0 ? void 0 : upload.disabled,
      onClick: function onClick(e) {
        var _ref$current$click, _ref$current;

        return (_ref$current$click = (_ref$current = ref.current).click) === null || _ref$current$click === void 0 ? void 0 : _ref$current$click.call(_ref$current);
      },
      children: uploading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
        value: 100 / chunkSize * progress
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.FileUploadIcon, {})
    })]
  });
};

exports.FileUploadButton = FileUploadButton;

var FileUploadView = function FileUploadView(props) {
  var createItem = props.createItem,
      upload = props.upload,
      save = props.save,
      getChunk = props.getChunk,
      onSuccess = props.onSuccess;

  var _useState19 = (0, _react.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      progress = _useState20[0],
      setProgress = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      uploading = _useState22[0],
      setUploading = _useState22[1];

  var _useState23 = (0, _react.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      fileName = _useState24[0],
      setFileName = _useState24[1];

  var _useState25 = (0, _react.useState)(null),
      _useState26 = _slicedToArray(_useState25, 2),
      file = _useState26[0],
      setFile = _useState26[1];

  var onDrop = function onDrop(files) {
    return handleUpload({
      target: {
        files: files
      }
    });
  };

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  var reset = function reset() {
    setFileName(null);
    setFile(null);
  };

  var handleUpload = function handleUpload(e) {
    console.log(e.target.files);
    var file = e.target.files[0];
    setFile(file);
    var reader = new FileReader();
    var blob = new Blob();

    reader.onload = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var fileData, _yield$createItem2, fileName, i, chunk, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fileData = e.target.result;
                console.log('FileData', file, fileData, blob);
                _context3.next = 4;
                return createItem({
                  size: file.size,
                  name: file.name,
                  data: fileData
                });

              case 4:
                _yield$createItem2 = _context3.sent;
                fileName = _yield$createItem2.fileName;
                setUploading(true);
                i = 0;

              case 8:
                if (!(i <= (fileData === null || fileData === void 0 ? void 0 : fileData.toString().length))) {
                  _context3.next = 17;
                  break;
                }

                chunk = fileData === null || fileData === void 0 ? void 0 : fileData.slice(i, i + chunkSize);
                console.log('Sending chunk', fileName, i);
                _context3.next = 13;
                return upload({
                  fileName: fileName,
                  chunk: chunk
                });

              case 13:
                setProgress(Math.min(100, 100 / file.size * (i + chunkSize)));

              case 14:
                i += chunkSize;
                _context3.next = 8;
                break;

              case 17:
                _context3.next = 19;
                return save({
                  fileName: fileName
                });

              case 19:
                result = _context3.sent;
                console.log('Saved File', result);
                setUploading(false);
                setFileName(fileName);
                onSuccess(fileName);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    reader.readAsBinaryString(file);
  };

  var ref = (0, _react.useRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
      children: [uploading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {
        variant: (file === null || file === void 0 ? void 0 : file.size) < chunkSize ? 'indeterminate' : 'determinate',
        value: progress
      }), !fileName && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActionArea, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, _objectSpread(_objectSpread({}, getRootProps()), {}, {
          sx: {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: isDragActive ? 'success.main' : 'info.main' // border: '1px solid',

          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({}, getInputProps())), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
            children: !fileName && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                children: isDragActive ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.PlusOneOutlined, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.InsertDriveFileIcon, {})
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
                inputRef: ref,
                sx: {
                  visibility: 'hidden'
                },
                type: "file",
                id: "fileupload",
                onChange: handleUpload
              })]
            })
          })]
        }))
      }), fileName && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(FileView, {
          getChunk: getChunk,
          fileName: fileName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            onClick: reset,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.DeleteIcon, {})
          })
        })]
      })]
    })
  });
};

exports.FileUploadView = FileUploadView;

var FileSystemModel = function FileSystemModel(props) {
  var children = props.children,
      View = props.View,
      rest = _objectWithoutProperties(props, _excluded);

  var serverProps = (0, _reactClient.useProps)();
  var createItem = (0, _reactClient.useAction)('create', 'onClick');
  var del = (0, _reactClient.useAction)('del', 'onClick');
  var upload = (0, _reactClient.useAction)('upload', 'onClick');
  var save = (0, _reactClient.useAction)('save', 'onClick');
  var getChunk = (0, _reactClient.useAction)('getChunk', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, _objectSpread(_objectSpread(_objectSpread({}, serverProps), rest), {}, {
    createItem: createItem,
    upload: upload,
    save: save,
    getChunk: getChunk,
    del: del,
    children: children
  }));
};

exports.FileSystemModel = FileSystemModel;

var FileSystem = function FileSystem(_ref4) {
  var _ref4$name = _ref4.name,
      name = _ref4$name === void 0 ? 'filesystem' : _ref4$name,
      _ref4$Component = _ref4.Component,
      Component = _ref4$Component === void 0 ? FilesView : _ref4$Component,
      props = _objectWithoutProperties(_ref4, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileSystemModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.FileSystem = FileSystem;

var FileUpload = function FileUpload(_ref5) {
  var _ref5$name = _ref5.name,
      name = _ref5$name === void 0 ? 'filesystem' : _ref5$name,
      _ref5$Component = _ref5.Component,
      Component = _ref5$Component === void 0 ? FileUploadView : _ref5$Component,
      props = _objectWithoutProperties(_ref5, _excluded3);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileSystemModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.FileUpload = FileUpload;

var File = function File(_ref6) {
  var _ref6$name = _ref6.name,
      name = _ref6$name === void 0 ? 'filesystem' : _ref6$name,
      _ref6$Component = _ref6.Component,
      Component = _ref6$Component === void 0 ? FileView : _ref6$Component,
      props = _objectWithoutProperties(_ref6, _excluded4);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileSystemModel, _objectSpread({
      View: Component
    }, props))
  });
};

exports.File = File;