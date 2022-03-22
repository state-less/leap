"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REACT_SERVER = exports.NODE_ENV = exports.GOOGLE_CLIENT = void 0;

/**
 * This is the main config file. Anything that can be configured externally has to be exported herebundleRenderer.
 * dotEvn is used to read environment variables. The REACT_APP prefix is required by react.
 */
var _process$env = process.env,
    REACT_APP_REACT_SERVER = _process$env.REACT_APP_REACT_SERVER,
    REACT_APP_GOOGLE_CLIENT = _process$env.REACT_APP_GOOGLE_CLIENT,
    NODE_ENV = _process$env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
var REACT_SERVER = REACT_APP_REACT_SERVER;
exports.REACT_SERVER = REACT_SERVER;
var GOOGLE_CLIENT = REACT_APP_GOOGLE_CLIENT;
exports.GOOGLE_CLIENT = GOOGLE_CLIENT;