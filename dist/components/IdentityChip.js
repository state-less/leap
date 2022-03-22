"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebAuthnIdentityChip = exports.Web3IdentityChip = exports.IdentityPopover = exports.IdentityChip = exports.GoogleIdentityChip = exports.FingerPrintIdentityChip = void 0;

var _material = require("@mui/material");

var _clsx = _interopRequireDefault(require("clsx"));

var _reactClient = require("@state-less/react-client");

var _react = require("react");

var _react2 = require("@emotion/react");

var _reactSpring = require("react-spring");

var _Icons = require("./Icons");

var _Date = require("./Date");

var _util = require("../lib/util");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["Icon"],
    _excluded2 = ["collapse", "avatar"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MARGIN_IDENTITY_CHIP = 0.5;

var IdentityPopover = function IdentityPopover(_ref) {
  var _identity$address, _identity$address2, _identity$address3;

  var anchorEl = _ref.anchorEl,
      children = _ref.children,
      onClose = _ref.onClose;

  var _useClientContext = (0, _reactClient.useClientContext)(),
      identity = _useClientContext.identity;

  var open = Boolean(anchorEl);
  var text = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
    avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ClockIcon, {})
    }),
    label: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Date.Date, {
      variant: "h6",
      fromNow: true,
      children: ((identity === null || identity === void 0 ? void 0 : identity.exp) || 0) * 1000
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Popover, {
    id: "asd",
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
        alt: "react server profile-picture",
        src: identity === null || identity === void 0 ? void 0 : (_identity$address = identity.address) === null || _identity$address === void 0 ? void 0 : _identity$address.picture
      }),
      title: identity === null || identity === void 0 ? void 0 : (_identity$address2 = identity.address) === null || _identity$address2 === void 0 ? void 0 : _identity$address2.name,
      subheader: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [identity === null || identity === void 0 ? void 0 : (_identity$address3 = identity.address) === null || _identity$address3 === void 0 ? void 0 : _identity$address3.email, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: identity.compound.id
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
        title: "Expires",
        children: text
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: 1
        },
        children: children
      })]
    })]
  });
};

exports.IdentityPopover = IdentityPopover;

var IconAvatar = function IconAvatar(_ref2) {
  var Icon = _ref2.Icon,
      rest = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, _objectSpread(_objectSpread({}, rest), {}, {
    sx: _objectSpread({
      width: 24,
      height: 24
    }, rest.sx),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
  }));
};

var GoogleAvatar = function GoogleAvatar(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconAvatar, _objectSpread({
    Icon: _Icons.GoogleIcon
  }, props));
};

var WebAuthnAvatar = function WebAuthnAvatar(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconAvatar, _objectSpread({
    Icon: _Icons.YubiKeyIcon
  }, props));
};

var Web3Avatar = function Web3Avatar(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconAvatar, _objectSpread({
    Icon: _Icons.MetaMaskIcon
  }, props));
};

var FingerprintAvatar = function FingerprintAvatar(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconAvatar, _objectSpread({
    Icon: _Icons.FingerprintIcon
  }, props));
};

var AvatarOrChip = function AvatarOrChip(props) {
  var collapse = props.collapse,
      avatar = props.avatar,
      rest = _objectWithoutProperties(props, _excluded2);

  return !collapse ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, _objectSpread({
    avatar: avatar
  }, rest)) : avatar;
};

var GoogleIdentityChip = function GoogleIdentityChip(_ref3) {
  var _identity$address4, _identity$google, _identity$compound, _identity$compound$id, _identity$compound2, _identity$compound2$i, _identity$compound3, _identity$compound3$i, _identity$compound4, _identity$compound4$i, _identity$compound5, _identity$compound5$i, _identity$google2;

  var collapse = _ref3.collapse;
  var strat = 'google';

  var _useClientContext2 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext2.identity;

  var active = (identity === null || identity === void 0 ? void 0 : (_identity$address4 = identity.address) === null || _identity$address4 === void 0 ? void 0 : _identity$address4.strat) === strat;
  var title = collapse ? identity === null || identity === void 0 ? void 0 : (_identity$google = identity.google) === null || _identity$google === void 0 ? void 0 : _identity$google.name : "Google: ".concat(identity !== null && identity !== void 0 && (_identity$compound = identity.compound) !== null && _identity$compound !== void 0 && (_identity$compound$id = _identity$compound.identities) !== null && _identity$compound$id !== void 0 && _identity$compound$id.google ? 'linked' : 'not linked', " | ").concat(active ? 'active' : ' authenticated');
  var color = (0, _clsx.default)({
    success: active && (identity === null || identity === void 0 ? void 0 : (_identity$compound2 = identity.compound) === null || _identity$compound2 === void 0 ? void 0 : (_identity$compound2$i = _identity$compound2.identities) === null || _identity$compound2$i === void 0 ? void 0 : _identity$compound2$i.google),
    info: !active && (identity === null || identity === void 0 ? void 0 : (_identity$compound3 = identity.compound) === null || _identity$compound3 === void 0 ? void 0 : (_identity$compound3$i = _identity$compound3.identities) === null || _identity$compound3$i === void 0 ? void 0 : _identity$compound3$i.google),
    warning: active && (identity === null || identity === void 0 ? void 0 : (_identity$compound4 = identity.compound) === null || _identity$compound4 === void 0 ? void 0 : (_identity$compound4$i = _identity$compound4.identities) === null || _identity$compound4$i === void 0 ? void 0 : _identity$compound4$i.google),
    primary: active && !(identity !== null && identity !== void 0 && (_identity$compound5 = identity.compound) !== null && _identity$compound5 !== void 0 && (_identity$compound5$i = _identity$compound5.identities) !== null && _identity$compound5$i !== void 0 && _identity$compound5$i.google)
  }) || 'default';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        margin: MARGIN_IDENTITY_CHIP
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AvatarOrChip, {
        collapse: collapse,
        avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(GoogleAvatar, {
          sx: {
            bgcolor: active ? 'success.main' : 'info.main'
          }
        }),
        color: color,
        label: (_identity$google2 = identity.google) === null || _identity$google2 === void 0 ? void 0 : _identity$google2.name
      })
    })
  });
};

exports.GoogleIdentityChip = GoogleIdentityChip;

var FingerPrintIdentityChip = function FingerPrintIdentityChip(_ref4) {
  var _identity$address5, _identity$compound6, _identity$compound6$i, _identity$fingerprint;

  var collapse = _ref4.collapse;
  var strat = 'fingerprint';

  var _useClientContext3 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext3.identity;

  var active = (identity === null || identity === void 0 ? void 0 : (_identity$address5 = identity.address) === null || _identity$address5 === void 0 ? void 0 : _identity$address5.strat) === strat;
  var title = collapse ? (0, _util.truncateMid)(identity.fingerprint.visitorId || '') : "Fingerprint: ".concat(identity !== null && identity !== void 0 && (_identity$compound6 = identity.compound) !== null && _identity$compound6 !== void 0 && (_identity$compound6$i = _identity$compound6.identities) !== null && _identity$compound6$i !== void 0 && _identity$compound6$i.fingerprint ? 'linked' : 'not linked', " | ").concat(active ? 'active' : ' authenticated');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        margin: MARGIN_IDENTITY_CHIP
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AvatarOrChip, {
        collapse: collapse,
        color: active ? 'success' : 'default',
        avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(FingerprintAvatar, {
          sx: {
            bgcolor: active ? 'success.main' : 'info.main'
          }
        }),
        label: (0, _util.truncateMid)((_identity$fingerprint = identity.fingerprint) === null || _identity$fingerprint === void 0 ? void 0 : _identity$fingerprint.visitorId)
      })
    })
  });
};

exports.FingerPrintIdentityChip = FingerPrintIdentityChip;

var WebAuthnIdentityChip = function WebAuthnIdentityChip(_ref5) {
  var _identity$address6, _identity$compound7, _identity$compound7$i, _identity$factors, _identity$compound8, _identity$compound8$i, _identity$compound9, _identity$compound9$i, _identity$compound10, _identity$compound10$, _identity$compound11, _identity$compound11$;

  var collapse = _ref5.collapse;
  var strat = 'webauthn';

  var _useClientContext4 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext4.identity;

  var active = (identity === null || identity === void 0 ? void 0 : (_identity$address6 = identity.address) === null || _identity$address6 === void 0 ? void 0 : _identity$address6.strat) === strat;
  var label = (0, _util.truncateMid)((0, _util.getWebAuthnId)(identity.webauthn));
  var title = collapse ? label : "WebAuthn: ".concat(identity !== null && identity !== void 0 && (_identity$compound7 = identity.compound) !== null && _identity$compound7 !== void 0 && (_identity$compound7$i = _identity$compound7.identities) !== null && _identity$compound7$i !== void 0 && _identity$compound7$i.webauthn ? 'linked' : 'not linked', " | ").concat(active ? 'active' : ' authenticated');
  var required = identity === null || identity === void 0 ? void 0 : (_identity$factors = identity.factors) === null || _identity$factors === void 0 ? void 0 : _identity$factors.includes(strat);
  var color = (0, _clsx.default)({
    success: !required && active && (identity === null || identity === void 0 ? void 0 : (_identity$compound8 = identity.compound) === null || _identity$compound8 === void 0 ? void 0 : (_identity$compound8$i = _identity$compound8.identities) === null || _identity$compound8$i === void 0 ? void 0 : _identity$compound8$i.webauthn),
    info: !required && !active && (identity === null || identity === void 0 ? void 0 : (_identity$compound9 = identity.compound) === null || _identity$compound9 === void 0 ? void 0 : (_identity$compound9$i = _identity$compound9.identities) === null || _identity$compound9$i === void 0 ? void 0 : _identity$compound9$i.webauthn),
    warning: !required && active && (identity === null || identity === void 0 ? void 0 : (_identity$compound10 = identity.compound) === null || _identity$compound10 === void 0 ? void 0 : (_identity$compound10$ = _identity$compound10.identities) === null || _identity$compound10$ === void 0 ? void 0 : _identity$compound10$.webauthn),
    primary: !required && active && !(identity !== null && identity !== void 0 && (_identity$compound11 = identity.compound) !== null && _identity$compound11 !== void 0 && (_identity$compound11$ = _identity$compound11.identities) !== null && _identity$compound11$ !== void 0 && _identity$compound11$.webauthn),
    error: required
  }) || 'default';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        margin: MARGIN_IDENTITY_CHIP
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AvatarOrChip, {
        collapse: collapse,
        color: color,
        avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(WebAuthnAvatar, {
          sx: {
            bgcolor: active ? 'success.main' : 'info.main'
          }
        }),
        label: label
      })
    })
  });
};

exports.WebAuthnIdentityChip = WebAuthnIdentityChip;

var Web3IdentityChip = function Web3IdentityChip(_ref6) {
  var _identity$address7, _identity$compound12, _identity$compound12$, _identity$factors2;

  var collapse = _ref6.collapse;
  var strat = 'web3';

  var _useClientContext5 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext5.identity;

  var active = (identity === null || identity === void 0 ? void 0 : (_identity$address7 = identity.address) === null || _identity$address7 === void 0 ? void 0 : _identity$address7.strat) === strat;
  var web3Identity = identity === null || identity === void 0 ? void 0 : (_identity$compound12 = identity.compound) === null || _identity$compound12 === void 0 ? void 0 : (_identity$compound12$ = _identity$compound12.identities) === null || _identity$compound12$ === void 0 ? void 0 : _identity$compound12$.web3;
  var label = (0, _util.truncateMid)(identity.web3);
  var title = collapse ? label : "Web3: ".concat(web3Identity ? 'linked' : 'not linked', " | ").concat(active ? 'active' : ' authenticated');
  var required = identity === null || identity === void 0 ? void 0 : (_identity$factors2 = identity.factors) === null || _identity$factors2 === void 0 ? void 0 : _identity$factors2.includes(strat);
  var color = (0, _clsx.default)({
    success: !required && !active && web3Identity,
    warning: !required && active && web3Identity,
    primary: !required && active && !web3Identity,
    error: required
  }) || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
    title: title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        margin: MARGIN_IDENTITY_CHIP
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AvatarOrChip, {
        collapse: collapse,
        color: color,
        avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(Web3Avatar, {
          sx: {
            bgcolor: active ? 'success.main' : 'warning.main'
          }
        }),
        label: label
      })
    })
  });
};

exports.Web3IdentityChip = Web3IdentityChip;
var stratIdentityChips = {
  google: GoogleIdentityChip,
  fingerprint: FingerPrintIdentityChip,
  webauthn: WebAuthnIdentityChip,
  web3: Web3IdentityChip
};

var IdentityChip = function IdentityChip(props) {
  var _identity$compound13, _identity$compound14;

  var _props$collapse = props.collapse,
      _collapse = _props$collapse === void 0 ? false : _props$collapse,
      _props$showCompound = props.showCompound,
      showCompound = _props$showCompound === void 0 ? false : _props$showCompound;

  var _useClientContext6 = (0, _reactClient.useClientContext)(),
      identity = _useClientContext6.identity;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchor = _useState2[0],
      setAnchor = _useState2[1];

  var theme = (0, _react2.useTheme)();
  var style = (0, _reactSpring.useSpring)({
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    }
  });
  var collapse = anchor ? false : _collapse;
  if (!identity) return null;
  var chips = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "flex",
    children: [['fingerprint', 'google', 'webauthn', 'web3'].map(function (strat) {
      var _identity$address8;

      var active = (identity === null || identity === void 0 ? void 0 : (_identity$address8 = identity.address) === null || _identity$address8 === void 0 ? void 0 : _identity$address8.strat) === strat;
      if (!identity || !identity[strat]) return null;

      if (stratIdentityChips[strat]) {
        var IDChip = stratIdentityChips[strat];
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpring.animated.span, {
          style: style,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(IDChip, {
            collapse: collapse
          })
        });
      }

      return null;
    }).filter(Boolean), ((identity === null || identity === void 0 ? void 0 : identity.factors) || []).map(function (factor) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
        title: "Missing 2FA step.",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            margin: MARGIN_IDENTITY_CHIP
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
            color: "error",
            avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ErrorIcon, {})
            }),
            label: factor
          })
        })
      });
    })]
  });
  var compound = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: "Registered Account",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          margin: MARGIN_IDENTITY_CHIP
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AvatarOrChip, {
          collapse: _collapse,
          onClick: function onClick(e) {
            return setAnchor(e.target);
          },
          avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
            alt: "react server profile-picture",
            onClick: function onClick(e) {
              return setAnchor(e.target);
            },
            sx: {
              width: 24,
              height: 24,
              cursor: 'pointer'
            },
            src: identity === null || identity === void 0 ? void 0 : (_identity$compound13 = identity.compound) === null || _identity$compound13 === void 0 ? void 0 : _identity$compound13.picture
          }),
          label: identity === null || identity === void 0 ? void 0 : (_identity$compound14 = identity.compound) === null || _identity$compound14 === void 0 ? void 0 : _identity$compound14.name
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(IdentityPopover, {
      anchorEl: anchor,
      onClose: function onClose() {
        return setAnchor(null);
      },
      children: chips
    })]
  });
  if (identity !== null && identity !== void 0 && identity.compound && showCompound) return compound;
  if (!showCompound && identity !== null && identity !== void 0 && identity.compound) return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "flex",
    children: [compound, !anchor && chips]
  });
  return chips;
};

exports.IdentityChip = IdentityChip;