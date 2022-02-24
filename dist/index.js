"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestComponent = require("./components/TestComponent");

Object.keys(_TestComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TestComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TestComponent[key];
    }
  });
});

var _FingerPrintButton = require("./components/buttons/FingerPrintButton");

Object.keys(_FingerPrintButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FingerPrintButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FingerPrintButton[key];
    }
  });
});