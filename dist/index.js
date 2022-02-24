"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FingerprintButton: true
};
Object.defineProperty(exports, "FingerprintButton", {
  enumerable: true,
  get: function get() {
    return _FingerPrintButton.FingerprintButton;
  }
});

var _TestComponent = require("./components/TestComponent");

Object.keys(_TestComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TestComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TestComponent[key];
    }
  });
});

var _FingerPrintButton = require("./components/buttons/FingerPrintButton");