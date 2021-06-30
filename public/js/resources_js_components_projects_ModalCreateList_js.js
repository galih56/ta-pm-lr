(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_ModalCreateList_js"],{

/***/ "./node_modules/@material-ui/lab/Alert/Alert.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/lab/Alert/Alert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Alert */ "./node_modules/@material-ui/core/Alert/Alert.js");



let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DeprecatedAlert(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The Alert component was moved from the lab to the core.', '', "You should use `import { Alert } from '@material-ui/core'`", "or `import Alert from '@material-ui/core/Alert'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref
  }, props));
}));

/***/ }),

/***/ "./resources/js/components/projects/ModalCreateList.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/projects/ModalCreateList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalCreateList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/Alert/Alert.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_lab_MobileDateRangePicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/lab/MobileDateRangePicker */ "./node_modules/@material-ui/lab/MobileDateRangePicker/MobileDateRangePicker.js");
/* harmony import */ var _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/lab/AdapterDateFns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/lab/LocalizationProvider */ "./node_modules/@material-ui/lab/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
var _excluded = ["children", "classes", "onClose"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




























var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute !important',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      variant: "h6",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__.default, {})
    })]
  }));
});
var DialogContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__.default);
var DialogActions = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__.default);
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.default)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    formControl: {
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
function ModalCreateList(props) {
  var classes = useStyles();
  var open = props.open;
  var projectId = props.projectId;
  var closeModal = props.handleClose;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useHistory)();
  var refreshData = props.refreshDetailProject;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      end = _useState6[0],
      setEnd = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([null, null]),
      _useState8 = _slicedToArray(_useState7, 2),
      dateRange = _useState8[0],
      setDateRange = _useState8[1];

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.default);

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var submitData = function submitData() {
    var body = {
      title: title,
      start: start,
      end: end,
      projects_id: projectId,
      cards: []
    };

    if (!window.navigator.onLine) {
      snackbar("You are currently offline", 'warning');
    }

    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'list/';
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, body, config).then(function (result) {
      setTitle('');
      closeModal();
      refreshData();
      global.dispatch({
        type: 'create-new-list',
        payload: result.data
      });
      snackbar("A new list successfully created", 'success');
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: snackbar,
        dispatch: global.dispatch,
        history: history
      };
      global.dispatch({
        type: 'handle-fetch-error',
        payload: payload
      });
    });
  };

  var checkIfAuthenticated = function checkIfAuthenticated() {
    if (global.state.authenticated === true) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DialogContent, {
          dividers: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
            container: true,
            spacing: 2,
            style: {
              paddingLeft: 3,
              paddingRight: 3
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__.default, {
                variant: "standard",
                label: "Title : ",
                placeholder: "example : List A",
                className: classes.textfield,
                onChange: function onChange(e) {
                  return setTitle(e.target.value);
                },
                style: {
                  width: '100%'
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              container: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_18__.default, {
                dateAdapter: _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_19__.default,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_lab_MobileDateRangePicker__WEBPACK_IMPORTED_MODULE_20__.default, {
                  required: true,
                  startText: "Planned to start at : ",
                  endText: "Planned to finish at : ",
                  value: dateRange,
                  onChange: function onChange(newValue) {
                    var start = newValue[0];
                    var end = newValue[1];
                    setDateRange(newValue);

                    if (start) {
                      start = moment__WEBPACK_IMPORTED_MODULE_5___default()(newValue[0]).format('YYYY-MM-DD HH:mm:ss');
                      setStart(start);
                    }

                    if (end) {
                      end = moment__WEBPACK_IMPORTED_MODULE_5___default()(newValue[1]).format('YYYY-MM-DD HH:mm:ss');
                      setEnd(end);
                    }
                  },
                  renderInput: function renderInput(startProps, endProps) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__.default, _objectSpread(_objectSpread({}, startProps), {}, {
                        variant: "standard",
                        required: true
                      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__.default, {
                        sx: {
                          mx: 2
                        },
                        children: " to "
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__.default, _objectSpread(_objectSpread({}, endProps), {}, {
                        variant: "standard",
                        required: true
                      }))]
                    });
                  }
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DialogActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__.default, {
            onClick: submitData,
            color: "primary",
            children: "Create"
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DialogContent, {
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_23__.default, {
          severity: "warning",
          children: "Your action requires authentication. Please sign in."
        })
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_24__.default, {
    "aria-labelledby": "Create a list",
    open: open,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DialogTitle, {
      onClose: function onClose() {
        closeModal(false);
      },
      children: " Create a new list "
    }), checkIfAuthenticated()]
  });
}

/***/ })

}]);