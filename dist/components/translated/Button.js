"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslatedButton = void 0;

var _material = require("@mui/material");

var _ = require(".");

var props = ['children', 'label'];
var TranslatedButton = (0, _.withTranslation)(_material.Button, props);
exports.TranslatedButton = TranslatedButton;