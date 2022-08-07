"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateMid = exports.noop = exports.getWebAuthnId = exports.blobToDataURL = void 0;

// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

exports.noop = noop;

var getWebAuthnId = function getWebAuthnId(address) {
  if (address.keyId) return address.keyId;
  if (address.credID) return address.credID;
};
/**
 * Truncates the middle of a string.
 * @param str - The string to truncate
 * @param n - The number of characters to preserver
 * @returns
 */


exports.getWebAuthnId = getWebAuthnId;

var truncateMid = function truncateMid(str) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return "".concat(str.slice(0, n), "...").concat(str.slice(-n));
};

exports.truncateMid = truncateMid;

var blobToDataURL = function blobToDataURL(blob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      resolve(e.target.result);
    };

    fileReader.onerror = reject;
    fileReader.readAsDataURL(blob);
  });
};

exports.blobToDataURL = blobToDataURL;