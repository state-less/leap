"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Poll = require("./Poll");

Object.keys(_Poll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Poll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Poll[key];
    }
  });
});