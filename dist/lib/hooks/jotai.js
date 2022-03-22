"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = void 0;

var _jotai = require("jotai");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var map = {};
/**
 * Hook that returns a state persisted to the local storage.
 * Useful to store application related settings.
 * @param {*} name - The name of the setting
 * @param {*} defaultValue - The default value of the state
 * @param {*} atm - An optional atom to hold the state (you will need this if you use the same state multiple times)
 * @returns
 */

var useLocalStorage = function useLocalStorage(name, defaultValue, atm) {
  if (!_jotai.atom) throw new Error('No atom passed to useLocalStorage');

  var _useAtom = (0, _jotai.useAtom)(atm),
      _useAtom2 = _slicedToArray(_useAtom, 2),
      value = _useAtom2[0],
      setValue = _useAtom2[1];

  (0, _react.useEffect)(function () {
    var storedValue = localStorage[name];

    try {
      var parsedValue;

      try {
        parsedValue = storedValue ? JSON.parse(storedValue) : defaultValue;
      } catch (e) {
        parsedValue = null;
      }

      if (!storedValue) localStorage[name] = defaultValue;

      if (!map[name]) {
        map[name] = true;
        setValue(parsedValue);
      }
    } catch (e) {
      throw new Error(e);
    }

    return function () {
      map[name] = false;
    };
  }, []);

  var setPersistentValue = function setPersistentValue(val) {
    var string = JSON.stringify(val);
    localStorage[name] = string;
    setValue(val);
  };

  return [value, setPersistentValue, setValue];
};

exports.useLocalStorage = useLocalStorage;