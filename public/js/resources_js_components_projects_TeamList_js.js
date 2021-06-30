(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_TeamList_js"],{

/***/ "./node_modules/@material-ui/lab/Autocomplete/Autocomplete.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/Autocomplete/Autocomplete.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Autocomplete */ "./node_modules/@material-ui/core/Autocomplete/Autocomplete.js");



let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DeprecatedAutocomplete(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The Autocomplete component was moved from the lab to the core.', '', "You should use `import { Autocomplete } from '@material-ui/core'`", "or `import Autocomplete from '@material-ui/core/Autocomplete'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref
  }, props));
}));

/***/ }),

/***/ "./resources/js/components/projects/TeamList.js":
/*!******************************************************!*\
  !*** ./resources/js/components/projects/TeamList.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/Collapse.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/Chip.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























function TeamList(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      teams = _useState2[0],
      setTeams = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      newTeams = _useState6[0],
      setNewTeams = _useState6[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var getTeams = function getTeams() {
    if (!window.navigator.onLine) {
      snackbar("You are currently offline", 'warning');
    }

    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "project/".concat(props.projectId, "/team");
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, {}, config).then(function (result) {
      setTeams(result.data);
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: snackbar,
        dispatch: global.dispatch,
        history: null
      };
      global.dispatch({
        type: 'handle-fetch-error',
        payload: payload
      });
    });
  };

  var getAllTeams = function getAllTeams() {
    if (!window.navigator.onLine) {
      snackbar("You are currently offline", 'warning');
    }

    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "team";
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, {}, config).then(function (result) {
      setOptions(result.data);
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: snackbar,
        dispatch: global.dispatch,
        history: null
      };
      global.dispatch({
        type: 'handle-fetch-error',
        payload: payload
      });
    });
  };

  var deleteTeam = function deleteTeam(selectedTeam) {
    if (!window.navigator.onLine) {
      snackbar("You are currently offline", 'warning');
    }

    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "project/".concat(props.projectId, "/team/").concat(selectedTeam.id);
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_3___default().delete(url, {}, config);
    var newTeams = teams.filter(function (team) {
      if (team.id != selectedTeam.id) return team;
    });
    setTeams(newTeams);
  };

  var addNewTeams = function addNewTeams(selectedTeams) {
    if (!window.navigator.onLine) {
      snackbar("You are currently offline", 'warning');
    }

    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "project/".concat(props.projectId, "/team");
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, {
      projectId: props.projectId,
      teams: selectedTeams
    }, config).then(function (result) {
      setTeams([].concat(_toConsumableArray(teams), _toConsumableArray(result.data)));
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: snackbar,
        dispatch: global.dispatch,
        history: null
      };
      global.dispatch({
        type: 'handle-fetch-error',
        payload: payload
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getAllTeams();
    if (props.projectId) getTeams();
  }, [props.projectId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
        variant: "h6",
        children: "Teams "
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          addNewTeams(newTeams);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_7__.default, {
          multiple: true,
          freeSolo: true,
          options: options,
          getOptionLabel: function getOptionLabel(option) {
            return option.name;
          },
          renderInput: function renderInput(params) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({}, params), {}, {
              variant: "standard",
              label: "Search by team names"
            }));
          },
          onChange: function onChange(event, options) {
            return setNewTeams(options);
          },
          renderTags: function renderTags(value, getTagProps) {
            return value.map(function (option, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
                variant: "outlined",
                label: option.name
              }, getTagProps({
                index: index
              })));
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          type: "submit",
          variant: "contained",
          color: "primary",
          style: {
            marginTop: '0.3em'
          },
          children: "Add "
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        component: "nav",
        "aria-label": "teams",
        children: teams.map(function (team) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CustomListItem, {
            team: team,
            deleteTeam: deleteTeam
          });
        })
      })
    })]
  });
}

var CustomListItem = function CustomListItem(_ref) {
  var team = _ref.team,
      deleteTeam = _ref.deleteTeam;

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__.default, {
      style: {
        backgroundColor: '#e3e3e3'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__.default, {
        primary: "".concat(team.name)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_14__.default, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__.default, {
          edge: "end",
          "aria-label": "members",
          onClick: function onClick() {
            return setOpen(!open);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_16__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__.default, {
          edge: "end",
          "aria-label": "delete",
          onClick: function onClick() {
            return deleteTeam(team);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_17__.default, {})
        })]
      })]
    }, team.id), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18__.default, {
      "in": open,
      timeout: "auto",
      unmountOnExit: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        component: "div",
        disablePadding: true,
        children: team.members.map(function (member) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__.default, {
            style: {
              paddingLeft: '0.5em'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__.default, {
              primary: member.name
            })
          });
        })
      })
    })]
  });
};

/***/ })

}]);