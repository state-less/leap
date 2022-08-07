"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _material = require("@mui/material");

var _reactI18next = require("react-i18next");

var _jsxRuntime = require("react/jsx-runtime");

var Text = function Text(props) {
  var children = props.children;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var translated = t(children);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
    children: translated
  });
};

exports.Text = Text;