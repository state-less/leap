"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslatedListItemText = void 0;

var _material = require("@mui/material");

var _ = require(".");

var props = ['primary', 'secondary'];
var TranslatedListItemText = (0, _.withTranslation)(_material.ListItemText, props);
exports.TranslatedListItemText = TranslatedListItemText;