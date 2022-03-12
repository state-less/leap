"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Poll: true,
  Comments: true,
  FingerprintButton: true
};
Object.defineProperty(exports, "Comments", {
  enumerable: true,
  get: function get() {
    return _serverside.Comments;
  }
});
Object.defineProperty(exports, "FingerprintButton", {
  enumerable: true,
  get: function get() {
    return _FingerPrintButton.FingerprintButton;
  }
});
Object.defineProperty(exports, "Poll", {
  enumerable: true,
  get: function get() {
    return _serverside.Poll;
  }
});

var _serverside = require("./components/serverside");

var _FingerPrintButton = require("./components/buttons/FingerPrintButton");

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