"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionIcon = void 0;
Object.defineProperty(exports, "AddIcon", {
  enumerable: true,
  get: function get() {
    return _Add.default;
  }
});
exports.BudgetIcon = exports.BrightIcon = exports.BotIcon = exports.AlgorithmIcon = void 0;
Object.defineProperty(exports, "CheckIcon", {
  enumerable: true,
  get: function get() {
    return _Check.default;
  }
});
exports.ClockIcon = exports.Checked = void 0;
Object.defineProperty(exports, "CloseIcon", {
  enumerable: true,
  get: function get() {
    return _Close.default;
  }
});
exports.DebugIcon = exports.DarkIcon = exports.ConnectionIcon = void 0;
Object.defineProperty(exports, "DeleteIcon", {
  enumerable: true,
  get: function get() {
    return _Delete.default;
  }
});
exports.EmptyWallet = exports.DownIcon = void 0;
Object.defineProperty(exports, "ErrorIcon", {
  enumerable: true,
  get: function get() {
    return _Error.default;
  }
});
Object.defineProperty(exports, "FileUploadIcon", {
  enumerable: true,
  get: function get() {
    return _FileUpload.default;
  }
});
Object.defineProperty(exports, "FingerprintIcon", {
  enumerable: true,
  get: function get() {
    return _Fingerprint.default;
  }
});
exports.FuzzyIcon = void 0;
Object.defineProperty(exports, "GitHubIcon", {
  enumerable: true,
  get: function get() {
    return _GitHub.default;
  }
});
Object.defineProperty(exports, "GoogleIcon", {
  enumerable: true,
  get: function get() {
    return _Google.default;
  }
});
exports.HeartIcon = void 0;
Object.defineProperty(exports, "HourglassDisabledIcon", {
  enumerable: true,
  get: function get() {
    return _HourglassDisabled.default;
  }
});
Object.defineProperty(exports, "InfoIcon", {
  enumerable: true,
  get: function get() {
    return _Info.default;
  }
});
Object.defineProperty(exports, "InsertDriveFileIcon", {
  enumerable: true,
  get: function get() {
    return _InsertDriveFile.default;
  }
});
exports.LanguageIcon = void 0;
Object.defineProperty(exports, "MapIcon", {
  enumerable: true,
  get: function get() {
    return _Map.default;
  }
});
exports.OSIcon = exports.NotificationIcon = exports.MoreIcon = exports.MetaMaskIcon = exports.MessageIcon = exports.MarkMessageIcon = void 0;
Object.defineProperty(exports, "PaletteIcon", {
  enumerable: true,
  get: function get() {
    return _Palette.default;
  }
});
exports.ReadIcon = void 0;
Object.defineProperty(exports, "SaveIcon", {
  enumerable: true,
  get: function get() {
    return _Save.default;
  }
});
Object.defineProperty(exports, "SettingsIcon", {
  enumerable: true,
  get: function get() {
    return _Settings.default;
  }
});
exports.YubiKeyIcon = exports.UserIcon = exports.UpIcon = exports.UnreadIcon = exports.Unchecked = exports.TwitterIcon = exports.SignalIcon = void 0;

var _SettingsInputAntenna = _interopRequireDefault(require("@mui/icons-material/SettingsInputAntenna"));

var _Accessibility = _interopRequireDefault(require("@mui/icons-material/Accessibility"));

var _Settings = _interopRequireDefault(require("@mui/icons-material/Settings"));

var _SettingsInputHdmi = _interopRequireDefault(require("@mui/icons-material/SettingsInputHdmi"));

var _AccountBalanceWallet = _interopRequireDefault(require("@mui/icons-material/AccountBalanceWallet"));

var _Notifications = _interopRequireDefault(require("@mui/icons-material/Notifications"));

var _RadioButtonUnchecked = _interopRequireDefault(require("@mui/icons-material/RadioButtonUnchecked"));

var _RadioButtonChecked = _interopRequireDefault(require("@mui/icons-material/RadioButtonChecked"));

var _ArrowForward = _interopRequireDefault(require("@mui/icons-material/ArrowForward"));

var _Info = _interopRequireDefault(require("@mui/icons-material/Info"));

var _MailOutline = _interopRequireDefault(require("@mui/icons-material/MailOutline"));

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _ClearAll = _interopRequireDefault(require("@mui/icons-material/ClearAll"));

var _Check = _interopRequireDefault(require("@mui/icons-material/Check"));

var _CheckCircleOutline = _interopRequireDefault(require("@mui/icons-material/CheckCircleOutline"));

var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));

var _Palette = _interopRequireDefault(require("@mui/icons-material/Palette"));

var _Map = _interopRequireDefault(require("@mui/icons-material/Map"));

var _FileUpload = _interopRequireDefault(require("@mui/icons-material/FileUpload"));

var _InsertDriveFile = _interopRequireDefault(require("@mui/icons-material/InsertDriveFile"));

var _iconsMaterial = require("@mui/icons-material");

var _AcUnit = _interopRequireDefault(require("@mui/icons-material/AcUnit"));

var _AccountBalanceWalletOutlined = _interopRequireDefault(require("@mui/icons-material/AccountBalanceWalletOutlined"));

var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));

var _LanguageOutlined = _interopRequireDefault(require("@mui/icons-material/LanguageOutlined"));

var _MoreVert = _interopRequireDefault(require("@mui/icons-material/MoreVert"));

var _Save = _interopRequireDefault(require("@mui/icons-material/Save"));

var _FavoriteBorder = _interopRequireDefault(require("@mui/icons-material/FavoriteBorder"));

var _KeyboardArrowUp = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowUp"));

var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));

var _Google = _interopRequireDefault(require("@mui/icons-material/Google"));

var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));

var _Error = _interopRequireDefault(require("@mui/icons-material/Error"));

var _Fingerprint = _interopRequireDefault(require("@mui/icons-material/Fingerprint"));

var _HourglassDisabled = _interopRequireDefault(require("@mui/icons-material/HourglassDisabled"));

var _AccessTime = _interopRequireDefault(require("@mui/icons-material/AccessTime"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UpIcon = _KeyboardArrowUp.default;
exports.UpIcon = UpIcon;
var DownIcon = _KeyboardArrowDown.default;
exports.DownIcon = DownIcon;
var HeartIcon = _FavoriteBorder.default;
exports.HeartIcon = HeartIcon;
var SignalIcon = _SettingsInputAntenna.default;
exports.SignalIcon = SignalIcon;
var AlgorithmIcon = _SettingsInputHdmi.default;
exports.AlgorithmIcon = AlgorithmIcon;
var BotIcon = _Accessibility.default;
exports.BotIcon = BotIcon;
var BudgetIcon = _AccountBalanceWallet.default;
exports.BudgetIcon = BudgetIcon;
var NotificationIcon = _Notifications.default;
exports.NotificationIcon = NotificationIcon;
var MarkMessageIcon = _ClearAll.default;
exports.MarkMessageIcon = MarkMessageIcon;
var UnreadIcon = _RadioButtonUnchecked.default;
exports.UnreadIcon = UnreadIcon;
var ReadIcon = _RadioButtonChecked.default;
exports.ReadIcon = ReadIcon;
var ActionIcon = _ArrowForward.default;
exports.ActionIcon = ActionIcon;
var MessageIcon = _MailOutline.default;
exports.MessageIcon = MessageIcon;
var ConnectionIcon = _iconsMaterial.SettingsInputAntennaOutlined;
exports.ConnectionIcon = ConnectionIcon;
var Checked = _CheckCircleOutline.default;
exports.Checked = Checked;
var Unchecked = _iconsMaterial.CancelOutlined; // export const Unchecked = RadioButtonUncheckedIcon;

exports.Unchecked = Unchecked;
var UserIcon = _iconsMaterial.SupervisedUserCircle;
exports.UserIcon = UserIcon;
var BrightIcon = _iconsMaterial.Brightness4;
exports.BrightIcon = BrightIcon;
var DarkIcon = _iconsMaterial.Brightness4Outlined;
exports.DarkIcon = DarkIcon;
var OSIcon = _iconsMaterial.DesktopWindowsOutlined;
exports.OSIcon = OSIcon;
var DebugIcon = _iconsMaterial.LineWeightOutlined;
exports.DebugIcon = DebugIcon;
var FuzzyIcon = _AcUnit.default;
exports.FuzzyIcon = FuzzyIcon;
var EmptyWallet = _AccountBalanceWalletOutlined.default;
exports.EmptyWallet = EmptyWallet;
var TwitterIcon = _Twitter.default;
exports.TwitterIcon = TwitterIcon;
var LanguageIcon = _LanguageOutlined.default;
exports.LanguageIcon = LanguageIcon;
var MoreIcon = _MoreVert.default;
exports.MoreIcon = MoreIcon;
var ClockIcon = _AccessTime.default;
exports.ClockIcon = ClockIcon;

var YubiKeyIcon = function YubiKeyIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", _objectSpread(_objectSpread({
    alt: "react server yubikey-icon",
    width: "24px"
  }, props), {}, {
    src: "https://img.icons8.com/fluency/1024/000000/yubikey.png"
  }));
};

exports.YubiKeyIcon = YubiKeyIcon;

var MetaMaskIcon = function MetaMaskIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", _objectSpread({
    alt: "react server metamask-icon",
    height: "16px",
    src: "https://cdn-images-1.medium.com/max/1200/1*Ajditq7CoiSbj9-2OPAO8w.png"
  }, props));
};

exports.MetaMaskIcon = MetaMaskIcon;