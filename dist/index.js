"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Poll: true,
  Comments: true,
  Counter: true,
  FingerprintButton: true,
  GoogleButton: true,
  LoginMenuButton: true,
  LogoutButton: true,
  WebAuthnButton: true
};
Object.defineProperty(exports, "Comments", {
  enumerable: true,
  get: function get() {
    return _serverside.Comments;
  }
});
Object.defineProperty(exports, "Counter", {
  enumerable: true,
  get: function get() {
    return _serverside.Counter;
  }
});
Object.defineProperty(exports, "FingerprintButton", {
  enumerable: true,
  get: function get() {
    return _buttons.FingerprintButton;
  }
});
Object.defineProperty(exports, "GoogleButton", {
  enumerable: true,
  get: function get() {
    return _buttons.GoogleButton;
  }
});
Object.defineProperty(exports, "LoginMenuButton", {
  enumerable: true,
  get: function get() {
    return _buttons.LoginMenuButton;
  }
});
Object.defineProperty(exports, "LogoutButton", {
  enumerable: true,
  get: function get() {
    return _buttons.LogoutButton;
  }
});
Object.defineProperty(exports, "Poll", {
  enumerable: true,
  get: function get() {
    return _serverside.Poll;
  }
});
Object.defineProperty(exports, "WebAuthnButton", {
  enumerable: true,
  get: function get() {
    return _buttons.WebAuthnButton;
  }
});

var _serverside = require("./components/serverside");

var _buttons = require("./components/buttons");

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