(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_ProjectInformations_js"],{

/***/ "./resources/js/components/projects/ProjectInformations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/projects/ProjectInformations.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_MobileDateRangePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/MobileDateRangePicker */ "./node_modules/@material-ui/lab/MobileDateRangePicker/MobileDateRangePicker.js");
/* harmony import */ var _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/AdapterDateFns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/LocalizationProvider */ "./node_modules/@material-ui/lab/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
























var ProjectInfo = function ProjectInfo(props) {
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([null, null]),
      _useState4 = _slicedToArray(_useState3, 2),
      dateRange = _useState4[0],
      setDateRange = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    id: null,
    title: '',
    description: '',
    columns: [],
    createdAt: '',
    updatedAt: '',
    start: null,
    end: null,
    actualStart: null,
    actualEnd: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      detailProject = _useState6[0],
      setDetailProject = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDetailProject(props.detailProject);
  }, [props.detailProject]);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      deleteConfirmOpen = _useState8[0],
      setDeleteConfirmOpen = _useState8[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var saveChanges = function saveChanges() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'project/' + detailProject.id;

    try {
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_3___default().patch(url, detailProject, config).then(function (result) {
        handleSnackbar("Data has been changed", 'success');
        setIsEditing(false);
      })["catch"](function (error) {
        var payload = {
          error: error,
          snackbar: handleSnackbar,
          dispatch: global.dispatch,
          history: history
        };
        global.dispatch({
          type: 'handle-fetch-error',
          payload: payload
        });
      });
    } catch (error) {
      console.log(error);
      handleSnackbar("Server Error", 'error');
    }

    if (!window.navigator.onLine) {
      handleSnackbar("You are currently offline", 'warning'); // handleStoreList(body); //Untuk offline mode
    }
  };

  var handleRemoveProject = function handleRemoveProject(projectId) {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = "".concat(process.env.REACT_APP_BACK_END_BASE_URL, "project/").concat(projectId);

    try {
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_3___default().delete(url, {}, config).then(function (result) {
        global.dispatch({
          type: 'remove-project',
          payload: projectId
        });
        handleSnackbar("Data has been deleted successfuly", 'success');
        history.push('/');
      })["catch"](function (error) {
        var payload = {
          error: error,
          snackbar: handleSnackbar,
          dispatch: global.dispatch,
          history: history
        };
        global.dispatch({
          type: 'handle-fetch-error',
          payload: payload
        });
      });
    } catch (error) {
      handleSnackbar('Failed to send request');
    }
  };

  var checkIfEditing = function checkIfEditing(isEdit) {
    if (isEdit) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 5,
          md: 5,
          sm: 5,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
            label: "Title : ",
            value: detailProject.title,
            onChange: function onChange(e) {
              setDetailProject(_objectSpread(_objectSpread({}, detailProject), {}, {
                title: e.target.value
              }));
            },
            style: {
              width: '90%'
            },
            variant: "standard"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          lg: 7,
          md: 7,
          sm: 7,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_9__.default, {
            dateAdapter: _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10__.default,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_MobileDateRangePicker__WEBPACK_IMPORTED_MODULE_11__.default, {
              required: true,
              startText: "Actual Start : ",
              endText: "Actual End : ",
              value: dateRange,
              onChange: function onChange(newValue) {
                var start = newValue[0];
                var end = newValue[1];
                setDateRange(newValue);

                if (start) {
                  start = moment__WEBPACK_IMPORTED_MODULE_4___default()(newValue[0]).format('YYYY-MM-DD');
                  setDetailProject(_objectSpread(_objectSpread({}, detailProject), {}, {
                    actualStart: start
                  }));
                }

                if (end) {
                  end = moment__WEBPACK_IMPORTED_MODULE_4___default()(newValue[1]).format('YYYY-MM-DD');
                  setDetailProject(_objectSpread(_objectSpread({}, detailProject), {}, {
                    actualEnd: end
                  }));
                }
              },
              renderInput: function renderInput(startProps, endProps) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({}, startProps), {}, {
                    variant: "standard",
                    required: true
                  })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                    sx: {
                      mx: 2
                    },
                    children: " to "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({}, endProps), {}, {
                    variant: "standard",
                    required: true
                  }))]
                });
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 12,
          md: 12,
          sm: 12,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            children: "Description : "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "standard",
            multiline: true,
            rows: 4,
            style: {
              width: '90%'
            },
            defaultValue: detailProject.description,
            onChange: function onChange(e) {
              setDetailProject(_objectSpread(_objectSpread({}, detailProject), {}, {
                description: e.target.value
              }));
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          container: true,
          xl: 8,
          md: 8,
          sm: 8,
          xs: 8,
          style: {
            padding: '1em'
          },
          justify: "flex-start",
          alignItems: "baseline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
            onClick: function onClick() {
              setIsEditing(false);
            },
            style: {
              marginRight: '1.5em'
            },
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
            variant: "contained",
            color: "primary",
            onClick: function onClick() {
              return saveChanges();
            },
            style: {
              marginRight: '3em'
            },
            children: " Save "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          container: true,
          xl: 4,
          md: 4,
          sm: 4,
          xs: 4,
          style: {
            padding: '1em'
          },
          justify: "flex-end",
          alignItems: "baseline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
            variant: "contained",
            color: "secondary",
            onClick: function onClick() {
              return setDeleteConfirmOpen(true);
            },
            children: " Delete "
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 6,
          md: 6,
          sm: 6,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "h5",
            children: detailProject.title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 6,
          md: 6,
          sm: 6,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: [detailProject.start ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "body1",
            children: ["Start : ", moment__WEBPACK_IMPORTED_MODULE_4___default()(detailProject.start).format('DD MMMM YYYY')]
          }) : null, detailProject.end ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "body1",
            children: ["End : ", moment__WEBPACK_IMPORTED_MODULE_4___default()(detailProject.end).format('DD MMMM YYYY')]
          }) : null, detailProject.actualStart ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "body1",
            children: ["Actual Start : ", moment__WEBPACK_IMPORTED_MODULE_4___default()(detailProject.actualStart).format('DD MMMM YYYY')]
          }) : null, detailProject.actualEnd ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "body1",
            children: ["Actual End : ", moment__WEBPACK_IMPORTED_MODULE_4___default()(detailProject.actualEnd).format('DD MMMM YYYY')]
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 12,
          md: 12,
          sm: 12,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__.default, {
            variant: "body1",
            children: detailProject.description
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xl: 12,
          md: 12,
          sm: 12,
          xs: 12,
          style: {
            padding: '1em'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
            onClick: function onClick() {
              setIsEditing(true);
            },
            variant: "contained",
            color: "primary",
            children: "Edit"
          })
        })]
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
      container: true,
      children: checkIfEditing(isEditing)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DeleteConfirmDialog, {
      open: deleteConfirmOpen,
      handleClose: function handleClose() {
        setDeleteConfirmOpen(false);
      },
      handleConfirm: function handleConfirm() {
        return handleRemoveProject(detailProject.id);
      }
    })]
  });
};

var DeleteConfirmDialog = function DeleteConfirmDialog(props) {
  var open = props.open;
  var handleClose = props.handleClose;
  var handleConfirm = props.handleConfirm;
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__.default, {
    open: open,
    onClose: handleClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_16__.default, {
      style: {
        cursor: 'move'
      },
      children: "Are you sure you want to delete this project?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_17__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_18__.default, {
        children: "Data will be deleted permanently"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_19__.default, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
        autoFocus: true,
        onClick: handleClose,
        color: "primary",
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
        onClick: handleConfirm,
        color: "primary",
        children: " Confirm "
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInfo);

/***/ })

}]);