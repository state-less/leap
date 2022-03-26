"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentityChip = exports.BookingDatePicker = exports.Booking = exports.AvailabilityPicker = exports.AppointmentsList = exports.AppointmentsCard = exports.AppointmentSwitch = exports.AppointmentCalendar = void 0;

var _material = require("@mui/material");

var _TimePicker = _interopRequireDefault(require("@mui/lab/TimePicker"));

var _react = _interopRequireWildcard(require("react"));

var _AdapterDateFns = _interopRequireDefault(require("@mui/lab/AdapterDateFns"));

var _LocalizationProvider = _interopRequireDefault(require("@mui/lab/LocalizationProvider"));

var DateFns = _interopRequireWildcard(require("date-fns"));

var _moment = _interopRequireDefault(require("moment"));

var _StaticDateRangePicker = _interopRequireDefault(require("@mui/lab/StaticDateRangePicker"));

var _PickersDay = _interopRequireDefault(require("@mui/lab/PickersDay"));

var _reactClient = require("@state-less/react-client");

var _StaticDatePicker = _interopRequireDefault(require("@mui/lab/StaticDatePicker"));

var _dxReactSchedulerMaterialUi = require("@devexpress/dx-react-scheduler-material-ui");

var _Icons = require("../Icons");

var _Tooltip = require("../translated/Tooltip");

var _Alert = require("../translated/Alert");

var _CardHeader = require("../translated/CardHeader");

var _FormControlLabel = require("../translated/FormControlLabel");

var _reactI18next = require("react-i18next");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["id"],
    _excluded2 = ["id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getHostLabel = function getHostLabel(address) {
  return (address === null || address === void 0 ? void 0 : address.name) || (address === null || address === void 0 ? void 0 : address.email);
};

var dateEquals = function dateEquals(dateA, dateB) {
  return DateFns.isEqual(new Date(dateA), new Date(dateB));
};

var hasAppointment = function hasAppointment(appointments, date) {
  if (!Array.isArray(appointments)) return false;
  return appointments.some(function (apt) {
    var startDate = apt.startDate;
    return dateEquals(startDate, date);
  });
};

var AvailabilityPicker = function AvailabilityPicker(props) {
  var _props$availableDays = props.availableDays,
      availableDays = _props$availableDays === void 0 ? [] : _props$availableDays,
      dataLoading = props.loading,
      startDate = props.startDate,
      endDate = props.endDate,
      toggleDay = props.toggleDay,
      setStartDate = props.setStartDate,
      setEndDate = props.setEndDate,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 15 : _props$duration,
      setDuration = props.setDuration,
      _props$isAdmin = props.isAdmin,
      isAdmin = _props$isAdmin === void 0 ? false : _props$isAdmin,
      flags = props.flags,
      toggleFlag = props.toggleFlag;

  var _React$useState = _react.default.useState(new Date()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(newValue) {
    console.log('TIMEPICKER', newValue);
    setValue(newValue);
  };

  var loading = !availableDays.length || dataLoading;

  if (!isAdmin) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
        severity: "error",
        children: "UNEXPECTED_NO_ADMIN"
      })
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
      severity: "info",
      children: "ALERT_SET_LATER"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_LocalizationProvider.default, {
      dateAdapter: _AdapterDateFns.default,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHeader.TranslatedCardHeader, {
        title: "TITLE_AVAILABILITY",
        subheader: "SUB_AVAILABILITY"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHeader.TranslatedCardHeader, {
        title: "TITLE_HOURS"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
          container: true,
          spacing: 1,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimePicker.default, {
              label: "From",
              value: startDate,
              onChange: function onChange(v) {
                return setStartDate(+v);
              },
              renderInput: function renderInput(params) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread(_objectSpread({}, params), {}, {
                  fullWidth: true
                }));
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimePicker.default, {
              label: "To",
              value: endDate,
              onChange: function onChange(v) {
                return setEndDate(+v);
              },
              renderInput: function renderInput(params) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread(_objectSpread({}, params), {}, {
                  fullWidth: true
                }));
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormGroup, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
            direction: "row",
            children: [Array.from({
              length: 7
            }).map(function (e, i) {
              var date = new Date();
              var date2 = DateFns.setDay(date, i, {
                weekStartsOn: 0
              });
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, {
                control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
                  onClick: function onClick() {
                    return toggleDay(i);
                  },
                  disabled: loading,
                  checked: availableDays[i]
                }, "day-".concat(loading).concat(availableDays[i])),
                label: DateFns.format(date2, 'iiii')
              }, "day-".concat(i));
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "grow"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: duration,
              onChange: function onChange(e) {
                return setDuration(e.target.value);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 5,
                children: "5m"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 10,
                children: "10m"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 15,
                children: "15m"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 30,
                children: "30m"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 45,
                children: "45m"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: 60,
                children: "60m"
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.TranslatedFormControlLabel, {
          label: "SHOW_PROMO",
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
            onClick: function onClick() {
              return toggleFlag('showDemo');
            },
            disabled: loading,
            checked: flags.showDemo
          })
        }, "showdemo"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.TranslatedFormControlLabel, {
          label: "SHOW_RECURRING",
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
            onClick: function onClick() {
              return toggleFlag('showRecurring');
            },
            disabled: loading,
            checked: flags.showRecurring
          })
        }, "showdemo")]
      })]
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {})]
  });
};

exports.AvailabilityPicker = AvailabilityPicker;

var AppointmentsCard = function AppointmentsCard(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
      title: ""
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AppointmentsList, _objectSpread({}, props))
    })]
  });
};

exports.AppointmentsCard = AppointmentsCard;

var MoreMenu = function MoreMenu(_ref) {
  var onClick = _ref.onClick,
      id = _ref.id;
  var confirm = (0, _reactClient.useAction)('confirm', 'onClick');
  var cancel = (0, _reactClient.useAction)('cancel', 'onClick');
  var del = (0, _reactClient.useAction)('delete', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Menu, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    onClose: function onClose() {
      return setAnchor(null);
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
      onClick: function onClick() {
        return confirm();
      },
      children: "Confirm"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
      onClick: function onClick() {
        return cancel();
      },
      children: "Cancel"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
      onClick: function onClick() {
        return del();
      },
      children: "Archive"
    })]
  });
};

var Appointment = function Appointment(props) {
  var _bookers$id;

  var id = props.id,
      startDate = props.startDate,
      booker = props.booker;
  var dt = new Date(startDate);
  var fromNow = (0, _moment.default)(dt).fromNow();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchor = _useState2[1];

  var _useProps = (0, _reactClient.useProps)(),
      confirmed = _useProps.confirmed,
      canceled = _useProps.canceled;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
          title: canceled ? 'TITLE_CANCELED' : confirmed ? 'TITLE_CONFIRMED' : '',
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
            sx: {
              backgroundColor: canceled ? 'error.main' : confirmed ? 'primary.main' : 'info.main'
            },
            children: canceled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ErrorIcon, {}) : confirmed ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CheckIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CloseIcon, {})
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
        primary: ((_bookers$id = bookers[id]) === null || _bookers$id === void 0 ? void 0 : _bookers$id.name) || id,
        secondary: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
          title: DateFns.format(dt, 'dd.MM.yy hh:mm'),
          placement: "top-start",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: fromNow
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemSecondaryAction, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          onClick: function onClick(e) {
            return setAnchor(e.target);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.MoreIcon, {})
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MoreMenu, {
      id: id,
      anchorEl: anchorEl
    })]
  });
};

var AppointmentsList = function AppointmentsList(_ref2) {
  var _ref2$appointments = _ref2.appointments,
      appointments = _ref2$appointments === void 0 ? [] : _ref2$appointments,
      _ref2$bookings = _ref2.bookings,
      bookings = _ref2$bookings === void 0 ? [] : _ref2$bookings,
      _ref2$bookers = _ref2.bookers,
      bookers = _ref2$bookers === void 0 ? {} : _ref2$bookers,
      flags = _ref2.flags,
      cancel = _ref2.cancel,
      confirm = _ref2.confirm,
      isAdmin = _ref2.isAdmin;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!appointments.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
      severity: "info",
      children: "ALERT_NO_DATA"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.List, {
      children: [!isAdmin && bookings && bookings.map(function (_ref3) {
        var id = _ref3.id,
            a = _objectWithoutProperties(_ref3, _excluded);

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
          name: "appointment-".concat(id),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Appointment, _objectSpread(_objectSpread({}, a), {}, {
            id: id
          }))
        });
      }), isAdmin && appointments && appointments.map(function (_ref4) {
        var id = _ref4.id,
            a = _objectWithoutProperties(_ref4, _excluded2);

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
          name: "appointment-".concat(id),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Appointment, _objectSpread(_objectSpread({}, a), {}, {
            id: id
          }))
        });
      })]
    })]
  });
};

exports.AppointmentsList = AppointmentsList;
var id = 0;

var AppointmentCalendar = function AppointmentCalendar(props) {
  var _props$appointments = props.appointments,
      appointments = _props$appointments === void 0 ? [] : _props$appointments,
      _props$bookings = props.bookings,
      bookings = _props$bookings === void 0 ? [] : _props$bookings,
      startDate = props.startDate,
      endDate = props.endDate,
      duration = props.duration;
  var start = startDate || new Date();
  var end = endDate || new Date();
  var apts = (bookings || []).map(function (_ref5) {
    var booker = _ref5.booker,
        id = _ref5.id,
        startDate = _ref5.startDate,
        endDate = _ref5.endDate;
    return {
      title: booker.name,
      id: id,
      startDate: new Date(startDate),
      endDate: DateFns.addMinutes(new Date(startDate), duration)
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_dxReactSchedulerMaterialUi.Scheduler, {
    data: apts || [],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_dxReactSchedulerMaterialUi.MonthView, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dxReactSchedulerMaterialUi.Appointments, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dxReactSchedulerMaterialUi.AppointmentTooltip, {})]
  });
};

exports.AppointmentCalendar = AppointmentCalendar;

var AppointmentSwitch = function AppointmentSwitch(props) {
  var appointments = props.appointments;

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tab = _useState4[0],
      setTab = _useState4[1];

  var Switch = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ButtonGroup, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      onClick: function onClick() {
        return setTab(0);
      },
      color: tab === 0 ? 'primary' : 'default',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CalendarViewDayIcon, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      onClick: function onClick() {
        return setTab(1);
      },
      color: tab === 1 ? 'primary' : 'default',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.CalendarMonthIcon, {})
    })]
  });
  var Comp = tab === 0 ? AppointmentsList : AppointmentCalendar;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHeader.TranslatedCardHeader, {
      title: "TITLE_APPOINTMENTS",
      action: Switch
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardMedia, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, _objectSpread({}, props))
    })]
  });
};

exports.AppointmentSwitch = AppointmentSwitch;

var BookingDatePicker = function BookingDatePicker(props) {
  var _identity$address;

  var startDate = props.startDate,
      endDate = props.endDate,
      _props$duration2 = props.duration,
      duration = _props$duration2 === void 0 ? 15 : _props$duration2,
      _props$usedDemo = props.usedDemo,
      usedDemo = _props$usedDemo === void 0 ? false : _props$usedDemo,
      _props$availableDays2 = props.availableDays,
      availableDays = _props$availableDays2 === void 0 ? [] : _props$availableDays2,
      _props$appointments2 = props.appointments,
      appointments = _props$appointments2 === void 0 ? [] : _props$appointments2,
      book = props.book,
      _props$flags = props.flags;
  _props$flags = _props$flags === void 0 ? {} : _props$flags;
  var showRecurring = _props$flags.showRecurring,
      showDemo = _props$flags.showDemo;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _React$useState3 = _react.default.useState([null, null]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _value = _slicedToArray(value, 2),
      from = _value[0],
      to = _value[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      time = _useState6[0],
      setTime = _useState6[1];

  var hoursAvailable = DateFns.differenceInHours(endDate, startDate);
  var steps = hoursAvailable * 60 / duration;
  var stepsArr = Array.from({
    length: steps
  }).map(function (e, i) {
    var dt = new Date(from);
    var dt2 = DateFns.setHours(dt, DateFns.getHours(startDate));
    var dt3 = DateFns.setMilliseconds(DateFns.setSeconds(DateFns.setMinutes(dt2, i * duration), 0), 0);
    return dt3;
  });

  var _useClientContext = (0, _reactClient.useClientContext)(),
      identity = _useClientContext.identity;

  var handleChange = function handleChange(newValue) {
    setValue(newValue);
  };

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      weekly = _useState8[0],
      setWeekly = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      useDemo = _useState10[0],
      setUseDemo = _useState10[1];

  var numT = DateFns.differenceInCalendarDays(to, from) + 1;
  var numA = Math.ceil(numT / 7);
  var bookingTitle = !(identity !== null && identity !== void 0 && identity.address) ? 'TITLE_LOGIN_REQUIRED' : 'TITLE_BOOK';
  var bookingDate = DateFns.setDate(time || new Date(), DateFns.getDate(from));
  var bookingDateTo = DateFns.setDate(time || new Date(), DateFns.getDate(to));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    children: [!(identity !== null && identity !== void 0 && identity.google) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.TranslatedAlert, {
      severity: "info",
      children: "ALERT_LOGIN_REQUIRED"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.default, {
      dateAdapter: _AdapterDateFns.default,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        container: true,
        className: "fh",
        sx: {
          overflow: 'hidden'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          md: showRecurring || showDemo ? 4 : 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardHeader, {
              title: t('APT_DURATION', {
                duration: duration
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                variant: "h6",
                children: t('APT_PARTICIPANTS')
              }), host && /*#__PURE__*/(0, _jsxRuntime.jsx)(IdentityChip, _objectSpread({}, host)), (identity === null || identity === void 0 ? void 0 : (_identity$address = identity.address) === null || _identity$address === void 0 ? void 0 : _identity$address.name) && /*#__PURE__*/(0, _jsxRuntime.jsx)(IdentityChip, _objectSpread({}, identity === null || identity === void 0 ? void 0 : identity.address)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                variant: "h6",
                children: t('APT_APPOINTMENTS', {
                  n: appointments === null || appointments === void 0 ? void 0 : appointments.length
                })
              }), !numA ? '' : Array.from({
                length: numA
              }).map(function (e, i) {
                var appointment = DateFns.addDays(bookingDate || new Date(), 7 * i);
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
                  label: DateFns.format(appointment, 'dd.MM hh:mm')
                });
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
          item: true,
          xs: 12,
          md: 6,
          container: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 12 // className="sdrp-fix"
            ,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
              children: !weekly ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_StaticDatePicker.default // className="sdp-fix"
              , {
                disablePast: true,
                displayStaticWrapperAs: "desktop",
                value: value,
                renderDay: function renderDay(date, sel, dayProps) {
                  var isPast = DateFns.isBefore(date, new Date());
                  var day = DateFns.getDay(date);
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersDay.default, _objectSpread(_objectSpread({
                    day: date
                  }, dayProps), {}, {
                    disabled: isPast || !availableDays[day]
                  }));
                },
                onChange: function onChange(newValue) {
                  setValue([newValue, newValue]);
                }
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_StaticDateRangePicker.default, {
                className: "sdrp-fix",
                calendars: 1,
                disablePast: true,
                displayStaticWrapperAs: "desktop",
                value: value,
                onChange: function onChange(newValue) {
                  setValue(newValue);
                },
                renderInput: function renderInput(startProps, endProps) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread({}, startProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                      sx: {
                        mx: 2
                      },
                      children: " to "
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread({}, endProps))]
                  });
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 12,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
              square: true,
              sx: {
                padding: 1,
                width: '100%'
              },
              elevation: 0,
              className: "fh",
              children: stepsArr.map(function (date) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
                  title: hasAppointment(appointments, date) ? 'TITLE_BOOKED' : 'TITLE_AVAILABLE',
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
                      disabled: hasAppointment(appointments, date),
                      color: dateEquals(date, time) ? 'primary' : 'default',
                      onClick: function onClick() {
                        return setTime(date);
                      },
                      label: DateFns.format(date, 'hh:mm'),
                      sx: {
                        mt: 1
                      }
                    })
                  })
                });
              })
            })
          })]
        }), (showRecurring || showDemo) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          md: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
            className: "fh",
            sx: {
              padding: 1,
              width: '100%'
            },
            children: [showDemo && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
              title: "APT_BOOK_PROMO",
              placement: "top",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.TranslatedFormControlLabel, {
                disabled: weekly,
                onChange: function onChange() {
                  return setUseDemo(!useDemo);
                },
                control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
                  defaultChecked: !usedDemo,
                  disabled: usedDemo
                }),
                label: "APT_USE_PROMO"
              })
            }), showRecurring && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
              title: useDemo ? 'APT_NA_PROMO' : 'APT_BOOK_RECURRING',
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.TranslatedFormControlLabel, {
                control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
                  disabled: showDemo && useDemo,
                  onChange: function onChange() {
                    return setWeekly(!weekly);
                  },
                  checked: weekly
                }),
                label: "APT_WEEKLY"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.TranslatedTooltip, {
        title: bookingTitle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
            disabled: !bookingDate || !to || !(identity !== null && identity !== void 0 && identity.address),
            fullWidth: true,
            variant: "contained",
            onClick: function onClick() {
              if (!from || !to || !time) throw new Error('Missing required fields');
              book({
                startDate: bookingDate,
                endDate: bookingDateTo,
                duration: duration,
                interval: 'weekly',
                booker: identity === null || identity === void 0 ? void 0 : identity.address
              });
            },
            children: "BOOK"
          })
        })
      })
    })]
  });
};

exports.BookingDatePicker = BookingDatePicker;

var BookingView = function BookingView(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: JSON.stringify(props)
  });
};

var BookingModel = function BookingModel(_ref6) {
  var Component = _ref6.Component;
  var props = (0, _reactClient.useProps)();
  var toggleDay = (0, _reactClient.useAction)('toggleDay', 'onClick');
  var toggleFlag = (0, _reactClient.useAction)('toggleFlag', 'onClick');
  var setStartDate = (0, _reactClient.useAction)('setStartDate', 'onChange');
  var setEndDate = (0, _reactClient.useAction)('setEndDate', 'onChange');
  var setDuration = (0, _reactClient.useAction)('setDuration', 'onChange');
  var book = (0, _reactClient.useAction)('book', 'onClick');
  var confirm = (0, _reactClient.useAction)('confirm', 'onClick');
  var cancel = (0, _reactClient.useAction)('cancel', 'onClick');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
    toggleDay: toggleDay,
    setStartDate: setStartDate,
    setEndDate: setEndDate,
    setDuration: setDuration,
    confirm: confirm,
    cancel: cancel,
    book: book,
    toggleFlag: toggleFlag
  }));
};

var Booking = function Booking(_ref7) {
  var _ref7$View = _ref7.View,
      View = _ref7$View === void 0 ? BookingView : _ref7$View;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactClient.ServerComponent, {
    name: "booking",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(BookingModel, {
      Component: View
    })
  });
};

exports.Booking = Booking;

var IdentityChip = function IdentityChip(props) {
  var picture = props.picture,
      email = props.email,
      name = props.name;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
    avatar: picture && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
      src: picture
    }),
    label: name || email
  });
};

exports.IdentityChip = IdentityChip;