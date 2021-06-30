(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_teams_DetailTeam_js"],{

/***/ "./node_modules/@material-ui/core/AlertTitle/AlertTitle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/AlertTitle/AlertTitle.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");







const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: -2
  }
});
const AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function AlertTitle(props, ref) {
  const {
    classes,
    className
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className)
  }, other));
});
 true ? AlertTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ "./node_modules/@material-ui/core/Alert/Alert.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Alert/Alert.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/useThemeVariants/useThemeVariants.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/SuccessOutlined */ "./node_modules/@material-ui/core/internal/svg-icons/SuccessOutlined.js");
/* harmony import */ var _internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/ReportProblemOutlined */ "./node_modules/@material-ui/core/internal/svg-icons/ReportProblemOutlined.js");
/* harmony import */ var _internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ErrorOutline */ "./node_modules/@material-ui/core/internal/svg-icons/ErrorOutline.js");
/* harmony import */ var _internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/InfoOutlined */ "./node_modules/@material-ui/core/internal/svg-icons/InfoOutlined.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/core/internal/svg-icons/Close.js");
















const styles = theme => {
  const getColor = theme.palette.mode === 'light' ? _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken : _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten;
  const getBackgroundColor = theme.palette.mode === 'light' ? _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten : _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken;
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {},

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {},

    /* Styles applied to the root element if `variant="standard"`. */
    standard: {},

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: `1px solid ${theme.palette.success.main}`,
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: `1px solid ${theme.palette.info.main}`,
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: `1px solid ${theme.palette.warning.main}`,
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: `1px solid ${theme.palette.error.main}`,
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
const defaultIconMapping = {
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_6__.default, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_7__.default, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_8__.default, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9__.default, {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_10__.default, {
  fontSize: "small"
});

const Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Alert(props, ref) {
  const {
    action,
    children,
    classes,
    className,
    closeText = 'Close',
    color,
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = 'alert',
    severity = 'success',
    variant = 'standard'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);

  const themeVariantsClasses = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.default)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    closeText,
    iconMapping,
    role,
    severity,
    variant
  }), 'MuiAlert');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    role: role,
    square: true,
    elevation: 0,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[variant], classes[`${variant}${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_13__.default)(color || severity)}`], themeVariantsClasses, className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_14__.default, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
 true ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Close'
   */
  closeText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    info: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    success: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    warning: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__.default)(styles, {
  name: 'MuiAlert'
})(Alert));

/***/ }),

/***/ "./node_modules/@material-ui/core/Autocomplete/Autocomplete.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/Autocomplete/Autocomplete.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterOptions": () => (/* reexport safe */ _useAutocomplete__WEBPACK_IMPORTED_MODULE_5__.createFilterOptions),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Popper */ "./node_modules/@material-ui/core/Popper/Popper.js");
/* harmony import */ var _ListSubheader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/ListSubheader.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Chip */ "./node_modules/@material-ui/core/Chip/Chip.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/core/internal/svg-icons/Close.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useAutocomplete */ "./node_modules/@material-ui/core/useAutocomplete/useAutocomplete.js");
















const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    '&$focused $clearIndicator': {
      visibility: 'visible'
    },

    /* Avoid double tap issue on iOS */
    '@media (pointer: fine)': {
      '&:hover $clearIndicator': {
        visibility: 'visible'
      }
    }
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  },

  /* Pseudo-class applied to the root element if focused. */
  focused: {},

  /* Styles applied to the tag elements, e.g. the chips. */
  tag: {
    margin: 3,
    maxWidth: 'calc(100% - 6px)'
  },

  /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
  tagSizeSmall: {
    margin: 2,
    maxWidth: 'calc(100% - 4px)'
  },

  /* Styles applied when the popup icon is rendered. */
  hasPopupIcon: {},

  /* Styles applied when the clear icon is rendered. */
  hasClearIcon: {},

  /* Styles applied to the Input element. */
  inputRoot: {
    flexWrap: 'wrap',
    '$hasPopupIcon &, $hasClearIcon &': {
      paddingRight: 26 + 4
    },
    '$hasPopupIcon$hasClearIcon &': {
      paddingRight: 52 + 4
    },
    '& $input': {
      width: 0,
      minWidth: 30
    },
    '&[class*="MuiInput-root"]': {
      paddingBottom: 1,
      '& $input': {
        padding: 4
      },
      '& $input:first-child': {
        padding: '6px 0'
      }
    },
    '&[class*="MuiInput-root"][class*="MuiInput-sizeSmall"]': {
      '& $input': {
        padding: '2px 4px 3px'
      },
      '& $input:first-child': {
        padding: '1px 0 4px'
      }
    },
    '&[class*="MuiOutlinedInput-root"]': {
      padding: 9,
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4 + 9
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4 + 9
      },
      '& $input': {
        padding: '7.5px 4px'
      },
      '& $input:first-child': {
        paddingLeft: 6
      },
      '& $endAdornment': {
        right: 9
      }
    },
    '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-sizeSmall"]': {
      padding: 6,
      '& $input': {
        padding: '2.5px 4px'
      }
    },
    '&[class*="MuiFilledInput-root"]': {
      paddingTop: 19,
      paddingLeft: 8,
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4 + 9
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4 + 9
      },
      '& $input': {
        padding: '7px 4px'
      },
      '& $endAdornment': {
        right: 9
      }
    },
    '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-sizeSmall"]': {
      paddingBottom: 1,
      '& $input': {
        padding: '2.5px 4px'
      }
    }
  },

  /* Styles applied to the input element. */
  input: {
    flexGrow: 1,
    textOverflow: 'ellipsis',
    opacity: 0
  },

  /* Styles applied to the input element if tag focused. */
  inputFocused: {
    opacity: 1
  },

  /* Styles applied to the endAdornment element. */
  endAdornment: {
    // We use a position absolute to support wrapping tags.
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 14px)' // Center vertically

  },

  /* Styles applied to the clear indicator. */
  clearIndicator: {
    marginRight: -2,
    padding: 4,
    visibility: 'hidden'
  },

  /* Styles applied to the popup indicator. */
  popupIndicator: {
    padding: 2,
    marginRight: -2
  },

  /* Styles applied to the popup indicator if the popup is open. */
  popupIndicatorOpen: {
    transform: 'rotate(180deg)'
  },

  /* Styles applied to the popper element. */
  popper: {
    zIndex: theme.zIndex.modal
  },

  /* Styles applied to the popper element if `disablePortal={true}`. */
  popperDisablePortal: {
    position: 'absolute'
  },

  /* Styles applied to the `Paper` component. */
  paper: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body1, {
    overflow: 'auto',
    margin: '4px 0'
  }),

  /* Styles applied to the `listbox` component. */
  listbox: {
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto'
  },

  /* Styles applied to the loading wrapper. */
  loading: {
    color: theme.palette.text.secondary,
    padding: '14px 16px'
  },

  /* Styles applied to the no option wrapper. */
  noOptions: {
    color: theme.palette.text.secondary,
    padding: '14px 16px'
  },

  /* Styles applied to the option elements. */
  option: {
    minHeight: 48,
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: 6,
    boxSizing: 'border-box',
    outline: '0',
    WebkitTapHighlightColor: 'transparent',
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto'
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&[aria-disabled="true"]': {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&[data-focus="true"]': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.action.selected
        }
      },
      '&.Mui-focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  },

  /* Styles applied to the group's label elements. */
  groupLabel: {
    backgroundColor: theme.palette.background.paper,
    top: -8
  },

  /* Styles applied to the group's ul elements. */
  groupUl: {
    padding: 0,
    '& $option': {
      paddingLeft: 24
    }
  }
});

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_7__.default, {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__.default, null);

const Autocomplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Autocomplete(props, ref) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    ChipProps,
    classes,
    className,
    clearIcon = _ref,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    clearText = 'Clear',
    closeText = 'Close',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    disablePortal = false,
    filterSelectedOptions = false,
    forcePopupIcon = 'auto',
    freeSolo = false,
    fullWidth = false,
    getLimitTagsText = more => `+${more}`,
    getOptionLabel = option => {
      var _option$label;

      return (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    includeInputInList = false,
    limitTags = -1,
    ListboxComponent = 'ul',
    ListboxProps,
    loading = false,
    loadingText = 'Loading…',
    multiple = false,
    noOptionsText = 'No options',
    openOnFocus = false,
    openText = 'Open',
    PaperComponent = _Paper__WEBPACK_IMPORTED_MODULE_9__.default,
    PopperComponent = _Popper__WEBPACK_IMPORTED_MODULE_10__.default,
    popupIcon = _ref2,
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    selectOnFocus = !props.freeSolo,
    size = 'medium'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = (0,_useAutocomplete__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    componentName: 'Autocomplete'
  }));
  let startAdornment;

  if (multiple && value.length > 0) {
    const getCustomizedTagProps = params => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.tag, size === 'small' && classes.tagSizeSmall),
      disabled
    }, getTagProps(params));

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        label: getOptionLabel(option),
        size: size
      }, getCustomizedTagProps({
        index
      }), ChipProps)));
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    const more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  const defaultRenderGroup = params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    key: params.key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ListSubheader__WEBPACK_IMPORTED_MODULE_12__.default, {
    className: classes.groupLabel,
    component: "div"
  }, params.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {
    className: classes.groupUl
  }, params.children));

  const renderGroup = renderGroupProp || defaultRenderGroup;

  const defaultRenderOption = (props2, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", props2, getOptionLabel(option));

  const renderOption = renderOptionProp || defaultRenderOption;

  const renderListOption = (option, index) => {
    const optionProps = getOptionProps({
      option,
      index
    });
    return renderOption((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, optionProps, {
      className: classes.option
    }), option, {
      selected: optionProps['aria-selected'],
      inputValue
    });
  };

  const hasClearIcon = !disableClearable && !disabled && dirty;
  const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id,
    disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment,
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_13__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: classes.clearIndicator
      }), clearIcon) : null, hasPopupIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_13__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PopperComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.popper, disablePortal && classes.popperDisablePortal),
    disablePortal: disablePortal,
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ListboxComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map((option, index) => {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
 true ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   * @default false
   */
  autoSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['mouse', 'touch']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   * @default !props.freeSolo
   */
  clearOnBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Clear'
   */
  clearText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Close'
   */
  closeText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The default input value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The `Popper` content will be inside the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Used to determine if an option is selected, considering the current value(s).
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The input value.
   */
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, the component is in a loading state.
   * @default false
   */
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"remove-option"`, `"blur"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Control the popup` open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Open'
   */
  openText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Array of options.
   */
  options: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),

  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The size of the autocomplete.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete));

/***/ }),

/***/ "./node_modules/@material-ui/core/Breadcrumbs/BreadcrumbCollapsed.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/Breadcrumbs/BreadcrumbCollapsed.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/MoreHoriz */ "./node_modules/@material-ui/core/internal/svg-icons/MoreHoriz.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js");









const styles = theme => ({
  button: {
    display: 'flex',
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    borderRadius: 2,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[200]
    },
    '&:active': {
      boxShadow: theme.shadows[0],
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.emphasize)(theme.palette.grey[200], 0.12)
    }
  },
  icon: {
    width: 24,
    height: 16
  }
});
/**
 * @ignore - internal component.
 */


function BreadcrumbCollapsed(props) {
  const {
    classes
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: classes.button,
    focusRipple: true
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.icon
  })));
}

 true ? BreadcrumbCollapsed.propTypes = {
  /**
   * @ignore
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'PrivateBreadcrumbCollapsed'
})(BreadcrumbCollapsed));

/***/ }),

/***/ "./node_modules/@material-ui/core/Breadcrumbs/Breadcrumbs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/Breadcrumbs/Breadcrumbs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BreadcrumbCollapsed */ "./node_modules/@material-ui/core/Breadcrumbs/BreadcrumbCollapsed.js");









const styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ol element. */
  ol: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },

  /* Styles applied to the li element. */
  li: {},

  /* Styles applied to the separator element. */
  separator: {
    display: 'flex',
    userSelect: 'none',
    marginLeft: 8,
    marginRight: 8
  }
};

function insertSeparators(items, className, separator) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
        "aria-hidden": true,
        key: `separator-${index}`,
        className: className
      }, separator));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

const Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Breadcrumbs(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'nav',
    expandText = 'Show path',
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = '/'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);

  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const listRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  const renderItemsBeforeAndAfter = allItems => {
    const handleClickExpand = () => {
      setExpanded(true); // The clicked element received the focus but gets removed from the DOM.
      // Let's keep the focus in the component after expanding.
      // Moving it to the <ol> or <nav> does not cause any announcement in NVDA.
      // By moving it to some link/button at least we have some announcement.

      const focusable = listRef.current.querySelector('a[href],button,[tabindex]');

      if (focusable) {
        focusable.focus();
      }
    }; // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem


    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (true) {
        console.error(['Material-UI: You have provided an invalid combination of props to the Breadcrumbs.', `itemsAfterCollapse={${itemsAfterCollapse}} + itemsBeforeCollapse={${itemsBeforeCollapse}} >= maxItems={${maxItems}}`].join('\n'));
      }

      return allItems;
    }

    return [...allItems.slice(0, itemsBeforeCollapse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_6__.default, {
      "aria-label": expandText,
      key: "ellipsis",
      onClick: handleClickExpand
    }), ...allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)];
  };

  const allItems = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(child => {
    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Breadcrumbs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child);
  }).map((child, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    className: classes.li,
    key: `child-${index}`
  }, child));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    component: Component,
    color: "textSecondary",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ol", {
    className: classes.ol,
    ref: listRef
  }, insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator)));
});
 true ? Breadcrumbs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The breadcrumb children.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Show path'
   */
  expandText: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * Custom separator node.
   * @default '/'
   */
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiBreadcrumbs'
})(Breadcrumbs));

/***/ }),

/***/ "./node_modules/@material-ui/core/CardActionArea/CardActionArea.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/CardActionArea/CardActionArea.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js");







const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    textAlign: 'inherit',
    width: '100%',
    '&:hover $focusHighlight': {
      opacity: theme.palette.action.hoverOpacity,
      '@media (hover: none)': {
        opacity: 0
      }
    },
    '&$focusVisible $focusHighlight': {
      opacity: theme.palette.action.focusOpacity
    }
  },

  /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
  focusVisible: {},

  /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
  focusHighlight: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short
    })
  }
});
const CardActionArea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardActionArea(props, ref) {
  const {
    children,
    classes,
    className,
    focusVisibleClassName
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "focusVisibleClassName"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(focusVisibleClassName, classes.focusVisible),
    ref: ref
  }, other), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.focusHighlight
  }));
});
 true ? CardActionArea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiCardActionArea'
})(CardActionArea));

/***/ }),

/***/ "./node_modules/@material-ui/core/CardContent/CardContent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/CardContent/CardContent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");






const styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
const CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardContent(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other));
});
 true ? CardContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiCardContent'
})(CardContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/CardMedia/CardMedia.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/CardMedia/CardMedia.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");







const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }
};
const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardMedia(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'div',
    image,
    src,
    style
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  const composedStyle = !isMediaComponent && image ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    backgroundImage: `url("${image}")`
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 true ? CardMedia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().node), props => {
    if (!props.children && !props.image && !props.src && !props.component) {
      return new Error('Material-UI: Either `children`, `image`, `src` or `component` prop must be specified.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ "./node_modules/@material-ui/core/Card/Card.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Card/Card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");







const styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
const Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Card(props, ref) {
  const {
    classes,
    className,
    raised = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiCard'
})(Card));

/***/ }),

/***/ "./node_modules/@material-ui/core/Chip/Chip.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Chip/Chip.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/useThemeVariants/useThemeVariants.js");
/* harmony import */ var _internal_svg_icons_Cancel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/Cancel */ "./node_modules/@material-ui/core/internal/svg-icons/Cancel.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/utils/useForkRef.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/utils/unsupportedProp.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js");













const styles = theme => {
  const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  const deleteIconColor = (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&$focusVisible': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {},

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. */
    deleteIconColorPrimary: {
      color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. */
    deleteIconColorSecondary: {
      color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {}
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


const Chip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Chip(props, ref) {
  const {
    avatar: avatarProp,
    classes,
    className,
    clickable: clickableProp,
    color = 'default',
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = 'medium',
    variant = 'filled'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  const chipRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.default)(chipRef, ref);

  const handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  const handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const small = size === 'small';
  const Component = ComponentProp || (clickable || onDelete ? _ButtonBase__WEBPACK_IMPORTED_MODULE_7__.default : 'div');
  const moreProps = Component === _ButtonBase__WEBPACK_IMPORTED_MODULE_7__.default ? {
    component: 'div',
    focusVisibleClassName: classes.focusVisible,
    disableRipple: Boolean(onDelete)
  } : {};
  let deleteIcon = null;

  if (onDelete) {
    const customClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(color !== 'default' && (variant === 'outlined' ? classes[`deleteIconOutlinedColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`] : classes[`deleteIconColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(deleteIconProp) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(deleteIconProp, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_Cancel__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  let avatar = null;

  if (avatarProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(avatarProp, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes[`avatarColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`])
    });
  }

  let icon = null;

  if (iconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(iconProp, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes[`iconColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`])
    });
  }

  if (true) {
    if (avatar && icon) {
      console.error('Material-UI: The Chip component can not handle the avatar ' + 'and the icon prop at the same time. Pick one.');
    }
  }

  const themeVariantsClasses = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__.default)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    clickable,
    color,
    disabled,
    size,
    variant
  }), 'MuiChip');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[variant], themeVariantsClasses, className, color !== 'default' && [classes[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`], clickable && classes[`clickableColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`], onDelete && classes[`deletableColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(color)}`]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable, variant === 'outlined' && {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 true ? Chip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Avatar element.
   */
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_11__.default,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If false, the chip will not be clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   */
  clickable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * If `true`, the chip should be displayed in a disabled state.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Icon element.
   */
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * The content of the label.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The size of the chip.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ "./node_modules/@material-ui/core/FilledInput/FilledInput.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/FilledInput/FilledInput.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/InputBase.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");








const styles = theme => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element unless `disableUnderline={true}`. */
    underline: {
      '&:after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: `1px solid ${theme.palette.text.primary}`
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '25px 12px 8px',
      '&$sizeSmall': {
        paddingTop: 21,
        paddingBottom: 4
      },
      '&$hiddenLabel': {
        paddingTop: 16,
        paddingBottom: 17
      }
    },

    /* Styles applied to the root element if `hiddenLabel={true}`. */
    hiddenLabel: {},

    /* Styles applied to the `input` element. */
    input: {
      padding: '25px 12px 8px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
        caretColor: theme.palette.mode === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `size="small"`. */
    inputSizeSmall: {
      paddingTop: 21,
      paddingBottom: 4
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 16,
      paddingBottom: 17,
      '&$inputSizeSmall': {
        paddingTop: 8,
        paddingBottom: 9
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
const FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FilledInput(props, ref) {
  const {
    disableUnderline,
    classes,
    fullWidth = false,
    inputComponent = 'input',
    multiline = false,
    type = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.default,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
FilledInput.muiName = 'Input';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/FormControl.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/FormControl.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js");










const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 */

const FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormControl(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'primary',
    component: Component = 'div',
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    size = 'medium',
    variant = 'standard'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"]);

  const [adornedStart, setAdornedStart] = react__WEBPACK_IMPORTED_MODULE_2__.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, child => {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        const input = (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Select']) ? child.props.input : child;

        if (input && (0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isAdornedStart)(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  });
  const [filled, setFilled] = react__WEBPACK_IMPORTED_MODULE_2__.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, child => {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isFilled)(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  });
  const [focusedState, setFocused] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const focused = visuallyFocused !== undefined ? visuallyFocused : focusedState;

  if (disabled && focused) {
    setFocused(false);
  }

  let registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const registeredInput = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);

    registerEffect = () => {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple `InputBase` components inside a FormControl.', 'This creates visual inconsistencies, only use one `InputBase`.'].join('\n'));
      }

      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }

  const onFilled = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    size,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControlContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, margin !== 'none' && classes[`margin${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(margin)}`], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   * @default false
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The size of the text field.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/FormControlContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/FormControlContext.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormControl": () => (/* binding */ useFormControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * @ignore - internal component.
 */

const FormControlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormControlContext);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/formControlState.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/formControlState.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formControlState)
/* harmony export */ });
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/useFormControl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/useFormControl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFormControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__.default);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/FormHelperText/FormHelperText.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormHelperText/FormHelperText.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");








const styles = theme => ({
  /* Styles applied to the root element. */
  root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    color: theme.palette.text.secondary
  }, theme.typography.caption, {
    textAlign: 'left',
    marginTop: 3,
    margin: 0,
    '&$disabled': {
      color: theme.palette.text.disabled
    },
    '&$error': {
      color: theme.palette.error.main
    }
  }),

  /* Pseudo-class applied to the root element if `error={true}`. */
  error: {},

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    marginTop: 4
  },

  /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
  contained: {
    marginLeft: 14,
    marginRight: 14
  },

  /* Pseudo-class applied to the root element if `focused={true}`. */
  focused: {},

  /* Pseudo-class applied to the root element if `filled={true}`. */
  filled: {},

  /* Pseudo-class applied to the root element if `required={true}`. */
  required: {}
});
const FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormHelperText(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'p'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props,
    muiFormControl,
    states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.size === 'small' && classes.sizeSmall),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormLabel/FormLabel.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormLabel/FormLabel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/FormControl/useFormControl.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");









const styles = theme => ({
  /* Styles applied to the root element. */
  root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    color: theme.palette.text.secondary
  }, theme.typography.body1, {
    lineHeight: 1,
    padding: 0,
    '&$focused': {
      color: theme.palette.primary.main
    },
    '&$disabled': {
      color: theme.palette.text.disabled
    },
    '&$error': {
      color: theme.palette.error.main
    }
  }),

  /* Styles applied to the root element if the color is secondary. */
  colorSecondary: {
    '&$focused': {
      color: theme.palette.secondary.main
    }
  },

  /* Pseudo-class applied to the root element if `focused={true}`. */
  focused: {},

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if `error={true}`. */
  error: {},

  /* Pseudo-class applied to the root element if `filled={true}`. */
  filled: {},

  /* Pseudo-class applied to the root element if `required={true}`. */
  required: {},

  /* Styles applied to the asterisk element. */
  asterisk: {
    '&$error': {
      color: theme.palette.error.main
    }
  }
});
const FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormLabel(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'label'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props,
    muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(fcs.color || 'primary')}`], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    "aria-hidden": true,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/InputBase/InputBase.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputBase/InputBase.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/utils/useForkRef.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@material-ui/core/utils/useEnhancedEffect.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/TextareaAutosize/TextareaAutosize.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */












const styles = theme => {
  const light = theme.palette.mode === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: '0 !important'
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.4375em',
      // 23px
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '4px 0 5px',
      '&$sizeSmall': {
        paddingTop: 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the root element if `hiddenLabel={true}`. */
    hiddenLabel: {},

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: '4px 0 5px',
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.4375em',
      // Reset 23pxthe native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1,
        // Reset iOS opacity
        WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `size="small"`. */
    inputSizeSmall: {
      paddingTop: 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

const InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputBase(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    autoComplete,
    autoFocus,
    classes,
    className,
    defaultValue,
    disabled,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = 'input',
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    startAdornment,
    type = 'text',
    value: valueProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "startAdornment", "type", "value"]);

  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value != null);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(instance => {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `ref` prop.', 'Make sure the `ref` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  const handleInputPropsRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputPropsProp.ref, handleInputRefWarning);
  const handleInputRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputRefProp, handleInputPropsRefProp);
  const handleInputRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.default)(inputRef, handleInputRefProp);
  const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__.useFormControl)();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__.default)({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(obj => {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_8__.isFilled)(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_9__.default)(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);

  const handleFocus = event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? `Material-UI: Expected valid input target. Did you use a custom \`inputComponent\` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info.` : 0);
      }

      checkDirty({
        value: element.value
      });
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    } // Perform in the willUpdate


    if (onChange) {
      onChange(event, ...args);
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = event => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;

  if (multiline && InputComponent === 'input') {
    if (rows) {
      if (true) {
        if (minRows || maxRows) {
          console.warn('Material-UI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.');
        }
      }

      inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        type: undefined
      }, inputProps);
      InputComponent = 'textarea';
    } else {
      inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        type: undefined,
        maxRows,
        minRows
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__.default;
    }
  }

  const handleAutoFill = event => {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(fcs.color || 'primary')}`], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.hiddenLabel && classes.hiddenLabel, fcs.size === 'small' && classes.sizeSmall),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    type: type
  }, inputProps, {
    ref: handleInputRef,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.size === 'small' && classes.inputSizeSmall),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, fcs, {
    startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__.default,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.default,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  renderSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/InputBase/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/InputBase/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasValue": () => (/* binding */ hasValue),
/* harmony export */   "isFilled": () => (/* binding */ isFilled),
/* harmony export */   "isAdornedStart": () => (/* binding */ isAdornedStart)
/* harmony export */ });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/InputLabel/InputLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputLabel/InputLabel.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/FormLabel/FormLabel.js");









const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    transformOrigin: 'top left'
  },

  /* Pseudo-class applied to the root element if `focused={true}`. */
  focused: {},

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if `error={true}`. */
  error: {},

  /* Pseudo-class applied to the root element if `required={true}`. */
  required: {},

  /* Pseudo-class applied to the asterisk element. */
  asterisk: {},

  /* Styles applied to the root element if the component is a descendant of `FormControl`. */
  formControl: {
    position: 'absolute',
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: 'translate(0, 24px) scale(1)'
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    // Compensation for the `Input.inputSizeSmall` style.
    transform: 'translate(0, 21px) scale(1)'
  },

  /* Styles applied to the `input` element if `shrink={true}`. */
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.75)',
    transformOrigin: 'top left'
  },

  /* Styles applied to the `input` element unless `disableAnimation={true}`. */
  animated: {
    transition: theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    })
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    // Chrome's autofill feature gives the input field a yellow background.
    // Since the input field is behind the label in the HTML tree,
    // the input field is drawn last and hides the label with an opaque background color.
    // zIndex: 1 will raise the label above opaque background-colors of input.
    zIndex: 1,
    pointerEvents: 'none',
    transform: 'translate(12px, 20px) scale(1)',
    '&$sizeSmall': {
      transform: 'translate(12px, 17px) scale(1)'
    },
    '&$shrink': {
      transform: 'translate(12px, 10px) scale(0.75)',
      '&$sizeSmall': {
        transform: 'translate(12px, 7px) scale(0.75)'
      }
    }
  },

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    // see comment above on filled.zIndex
    zIndex: 1,
    pointerEvents: 'none',
    transform: 'translate(14px, 20px) scale(1)',
    '&$sizeSmall': {
      transform: 'translate(14px, 12px) scale(1)'
    },
    '&$shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    }
  }
});
const InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputLabel(props, ref) {
  const {
    classes,
    className,
    disableAnimation = false,
    shrink: shrinkProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  let shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props,
    muiFormControl,
    states: ['size', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormLabel__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "data-shrink": shrink,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.size === 'small' && classes.sizeSmall, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, apply disabled class.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is shrunk.
   */
  shrink: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/Input/Input.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Input/Input.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/InputBase.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");








const styles = theme => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element unless `disableUnderline={true}`. */
    underline: {
      '&:after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: `1px solid ${bottomLineColor}`
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `size="small"`. */
    inputSizeSmall: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Input(props, ref) {
  const {
    disableUnderline,
    classes,
    fullWidth = false,
    inputComponent = 'input',
    multiline = false,
    type = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.default,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
Input.muiName = 'Input';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@material-ui/core/List/ListContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");







const styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  },

  /* Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
  disableGutters: {
    right: 0
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

const ListItemSecondaryAction = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemSecondaryAction(props, ref) {
  const {
    classes,
    className
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className"]);

  const context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_5__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, context.disableGutters && classes.disableGutters),
    ref: ref
  }, other));
});
 true ? ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
} : 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction));

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelect.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/NativeSelect/NativeSelect.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/Input.js");










const styles = theme => ({
  /* Styles applied to the select component `root` class. */
  root: {},

  /* Styles applied to the select component `select` class. */
  select: {
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    // When interacting quickly, the text can end up selected.
    // Native select can't be selected either.
    userSelect: 'none',
    borderRadius: 0,
    // Reset
    minWidth: 16,
    // So it doesn't collapse.
    cursor: 'pointer',
    '&:focus': {
      // Show that it's not an text input
      backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
      borderRadius: 0 // Reset Chrome style

    },
    // Remove IE11 arrow
    '&::-ms-expand': {
      display: 'none'
    },
    '&$disabled': {
      cursor: 'default'
    },
    '&[multiple]': {
      height: 'auto'
    },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: theme.palette.background.paper
    },
    '&&': {
      paddingRight: 24
    }
  },

  /* Styles applied to the select component if `variant="filled"`. */
  filled: {
    '&&': {
      paddingRight: 32
    }
  },

  /* Styles applied to the select component if `variant="outlined"`. */
  outlined: {
    borderRadius: theme.shape.borderRadius,
    '&&': {
      paddingRight: 32
    }
  },

  /* Styles applied to the select component `selectMenu` class. */
  selectMenu: {
    height: 'auto',
    // Resets for multpile select with chips
    minHeight: '1.4375em',
    // Required for select\text-field height consistency
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  /* Pseudo-class applied to the select component `disabled` class. */
  disabled: {},

  /* Styles applied to the icon component. */
  icon: {
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input and to support wrapping tags..
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 12px)',
    // Center vertically
    pointerEvents: 'none',
    // Don't block pointer events on the select under the icon.
    color: theme.palette.action.active,
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the icon component if the popup is open. */
  iconOpen: {
    transform: 'rotate(180deg)'
  },

  /* Styles applied to the icon component if `variant="filled"`. */
  iconFilled: {
    right: 7
  },

  /* Styles applied to the icon component if `variant="outlined"`. */
  iconOutlined: {
    right: 7
  },

  /* Styles applied to the underlying native input component. */
  nativeInput: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%'
  }
});
const defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__.default, null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

const NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelect(props, ref) {
  const {
    children,
    classes,
    IconComponent = _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__.default,
    input = defaultInput,
    inputProps
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__.default)();
  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__.default)({
    props,
    muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(input, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__.default,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children,
      classes,
      IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   * @default <Input />
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The `input` value. The DOM API casts this to a string.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
NativeSelect.muiName = 'Select';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

const NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelectInput(props, ref) {
  const {
    classes,
    className,
    disabled,
    IconComponent,
    inputRef,
    variant = 'standard'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.icon, classes[`icon${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(variant)}`], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the select is disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.default,

  /**
   * @ignore
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");








const styles = theme => {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'left',
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

const NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NotchedOutline(props, ref) {
  const {
    classes,
    className,
    label,
    labelWidth: labelWidthProp,
    notched,
    style
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__.default)();
  const align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      "aria-hidden": true,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("legend", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  const labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-hidden": true,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      [`padding${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(align)}`]: 8
    }, style),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("legend", {
    className: classes.legend,
    style: {
      // IE11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The label.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The width of the label.
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/InputBase.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");









const styles = theme => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '16.5px 14px',
      '&$sizeSmall': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '16.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
        caretColor: theme.palette.mode === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `size="small"`. */
    inputSizeSmall: {
      paddingTop: 8.5,
      paddingBottom: 8.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
const OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function OutlinedInput(props, ref) {
  const {
    classes,
    fullWidth = false,
    inputComponent = 'input',
    label,
    labelWidth = 0,
    multiline = false,
    notched,
    type = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    renderSuffix: state => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NotchedOutline__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.notchedOutline,
      label: label,
      labelWidth: labelWidth,
      notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__.default,

  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the `input` label appears with a strike through.
   * @default 0
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
OutlinedInput.muiName = 'Input';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/Popper/Popper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Popper/Popper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/HTMLElementType.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/useTheme/useTheme.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/Portal/Portal.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/utils/useForkRef.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@material-ui/core/utils/useEnhancedEffect.js");












function flipPlacement(placement, theme) {
  const direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 */

const Popper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Popper(props, ref) {
  const {
    anchorEl,
    children,
    container,
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement: initialPlacement = 'bottom',
    popperOptions = defaultPopperOptions,
    popperRef: popperRefProp,
    style,
    transition = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);

  const tooltipRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const ownRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(tooltipRef, ref);
  const popperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handlePopperRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(popperRef, popperRefProp);
  const handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(handlePopperRef);
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_2__.useState(true);
  const theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.default)();
  const rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  const [placement, setPlacement] = react__WEBPACK_IMPORTED_MODULE_2__.useState(rtlPlacement);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  const handleOpen = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };

    const resolvedAnchorEl = getAnchorEl(anchorEl);

    if (true) {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }

    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_7__.createPopper)(getAnchorEl(anchorEl), tooltipRef.current, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  const handleRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_8__.default)(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  const handleEnter = () => {
    setExited(false);
  };

  const handleClose = () => {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  const handleExited = () => {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  const childProps = {
    placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_9__.default, {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition ? 'none' : null
    }, style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 true ? Popper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_10__.default)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.default, (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]), props => {
    if (props.open) {
      const resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== 'function' || resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'It should be an HTML element instance or a virtualElement ', '(https://popper.js.org/docs/v2/virtual-elements/).'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Popper render function or node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * A HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.default, (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * The `children` will be inside the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    data: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    effect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    enabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    fn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any.isRequired),
    options: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    phase: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),
    requiresIfExists: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string))
  })),

  /**
   * If `true`, the popper is visible.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    modifiers: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
    onFirstUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['absolute', 'fixed'])
  }),

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__.default,

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popper);

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/Select.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Select/Select.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/mergeClasses/mergeClasses.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/Input.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/FilledInput/FilledInput.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js");















const styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_4__.styles;

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_5__.default, null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FilledInput__WEBPACK_IMPORTED_MODULE_6__.default, null);

const Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Select(props, ref) {
  const {
    autoWidth = false,
    children,
    classes,
    displayEmpty = false,
    IconComponent = _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__.default,
    id,
    input,
    inputProps,
    label,
    labelId,
    labelWidth = 0,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProps = 'standard'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  const inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__.default : _SelectInput__WEBPACK_IMPORTED_MODULE_9__.default;
  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__.default)();
  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__.default)({
    props,
    muiFormControl,
    states: ['variant']
  });
  const variant = fcs.variant || variantProps;
  const InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_OutlinedInput__WEBPACK_IMPORTED_MODULE_12__.default, {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children,
      IconComponent,
      variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple
    }, native ? {
      id
    } : {
      autoWidth,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__.default)({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   * @default 0
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
Select.muiName = 'Select';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/SelectInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/Select/SelectInput.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/utils/useControlled.js");















function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


const SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SelectInput(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    autoFocus,
    autoWidth,
    children,
    classes,
    className,
    defaultValue,
    disabled,
    displayEmpty,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = 'standard'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  const [value, setValueState] = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_6__.default)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  });
  const inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const displayRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const [displayNode, setDisplayNode] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const {
    current: isOpenControlled
  } = react__WEBPACK_IMPORTED_MODULE_2__.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = react__WEBPACK_IMPORTED_MODULE_2__.useState();
  const [openState, setOpenState] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(ref, inputRefProp);
  const handleDisplayRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    displayRef.current = node;

    if (node) {
      setDisplayNode(node);
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    const label = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__.default)(displayRef.current).getElementById(labelId);

    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };

      label.addEventListener('click', handler);
      return () => {
        label.removeEventListener('click', handler);
      };
    }

    return undefined;
  }, [labelId]);

  const update = (open, event) => {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  const handleMouseDown = event => {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };

  const handleClose = event => {
    update(false, event);
  };

  const childrenArray = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children); // Support autofill.

  const handleChange = event => {
    const index = childrenArray.map(child => child.props.value).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = childrenArray[index];
    setValueState(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  const handleItemClick = child => event => {
    let newValue;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);

      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }

    if (child.props.onClick) {
      child.props.onClick(event);
    }

    if (value !== newValue) {
      setValueState(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(event, child);
      }
    }

    if (!multiple) {
      update(false, event);
    }
  };

  const handleKeyDown = event => {
    if (!readOnly) {
      const validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  const open = displayNode !== null && (isOpenControlled ? openProp : openState);

  const handleBlur = event => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false; // No need to display any value if the field is empty.

  if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_9__.isFilled)({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  const items = childrenArray.map(child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    let selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? `Material-UI: The \`value\` prop must be an array when using the \`Select\` component with \`multiple\`.` : 0);
      }

      selected = value.some(v => areEqualValues(v, child.props.value));

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: event => {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
      if (!foundMatch && !multiple && value !== '') {
        const values = childrenArray.map(child => child.props.value);
        console.warn([`Material-UI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ''}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values.filter(x => x != null).map(x => `\`${x}\``).join(', ') || '""'}.`].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  let menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  let tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: handleDisplayRef,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    "aria-describedby": ariaDescribedby,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, SelectDisplayProps.className, disabled && classes.disabled) // The id is required for proper a11y
    ,
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    disabled: disabled,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.icon, classes[`icon${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__.default)(variant)}`], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: `menu-${name || ''}`,
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, MenuProps.PaperProps, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * If `true`, the select is disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__.default,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Control `select` open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * @ignore
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/TextField.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/TextField/TextField.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/Input.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/FilledInput/FilledInput.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/InputLabel/InputLabel.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/FormControl/FormControl.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/FormHelperText/FormHelperText.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/Select/Select.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");














const variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_5__.default,
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_6__.default,
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_7__.default
};
const styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

const TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextField(props, ref) {
  const {
    autoComplete,
    autoFocus = false,
    children,
    classes,
    className,
    color = 'primary',
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = 'outlined'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  const InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      const displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, label, displayRequired && '\u00a0*');
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Select__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormHelperText__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The helper text content.
   */
  helperText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_12__.default,

  /**
   * The label content.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a `textarea` element is rendered.instead of an input.
   * @default false
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__.default)(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/TextareaAutosize/TextareaAutosize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/TextareaAutosize/TextareaAutosize.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/utils/useForkRef.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@material-ui/core/utils/useEnhancedEffect.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/utils/ownerWindow.js");









function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
const TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextareaAutosize(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["onChange", "maxRows", "minRows", "style", "value"]);

  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value != null);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, inputRef);
  const shadowRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const renders = react__WEBPACK_IMPORTED_MODULE_2__.useRef(0);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_2__.useState({});
  const syncHeight = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__.default)(input);
    const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

    if (computedStyle.width === '0px') {
      return;
    }

    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    const boxSizing = computedStyle['box-sizing'];
    const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    const innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }

    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    const handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_6__.default)(() => {
      renders.current = 0;
      syncHeight();
    });
    const containerWindow = (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__.default)(inputRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_7__.default)(() => {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    renders.current = 0;
  }, [value]);

  const handleChange = event => {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: minRows,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Maximum number of rows to display.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Cancel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/Cancel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Close.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/Close.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 *
 * Alias to `Clear`.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ErrorOutline.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/ErrorOutline.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/InfoOutlined.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/InfoOutlined.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/MoreHoriz.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/MoreHoriz.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ReportProblemOutlined.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/ReportProblemOutlined.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/SuccessOutlined.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/SuccessOutlined.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/core/useAutocomplete/useAutocomplete.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/useAutocomplete/useAutocomplete.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterOptions": () => (/* binding */ createFilterOptions),
/* harmony export */   "default": () => (/* binding */ useAutocomplete)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/utils/useId.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/utils/useControlled.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/utils/useEventCallback.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/utils/setRef.js");


/* eslint-disable no-constant-condition */

 // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    const filteredOptions = options.filter(option => {
      let candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE11 support.

function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

const defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

const pageSize = 5;
function useAutocomplete(props) {
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = option => {
      var _option$label;

      return (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option;
    },
    getOptionSelected = (option, value) => option === value,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.default)(idProp);
  let getOptionLabel = getOptionLabelProp;

  getOptionLabel = option => {
    const optionLabel = getOptionLabelProp(option);

    if (typeof optionLabel !== 'string') {
      if (true) {
        const erroneousReturn = optionLabel === undefined ? 'undefined' : `${typeof optionLabel} (${optionLabel})`;
        console.error(`Material-UI: The \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(option)}.`);
      }

      return String(optionLabel);
    }

    return optionLabel;
  };

  const ignoreFocus = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  const firstFocus = react__WEBPACK_IMPORTED_MODULE_1__.useRef(true);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const listboxRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const [focusedTag, setFocusedTag] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(defaultHighlighted);
  const [value, setValueState] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.default)({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.default)({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  });
  const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const resetInputValue = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)((event, newValue) => {
    let newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      const optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValueState(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    resetInputValue(null, value);
  }, [value, resetInputValue]);
  const [open, setOpenState] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.default)({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  });
  const [inputPristine, setInputPristine] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open;
  const filteredOptions = popupOpen ? filterOptions(options.filter(option => {
    if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && getOptionSelected(option, value2))) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
    getOptionLabel
  }) : [];
  const listboxAvailable = open && filteredOptions.length > 0;

  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      const missingValue = (multiple ? value : [value]).filter(value2 => !options.some(option => getOptionSelected(option, value2)));

      if (missingValue.length > 0) {
        console.warn([`Material-UI: The value provided to ${componentName} is invalid.`, `None of the options match with \`${missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0])}\`.`, 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  const focusTag = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(tagToFocus => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`); // Same logic as MenuList.js

      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const setHighlightedIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(({
    event,
    index,
    reason = 'auto'
  }) => {
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', `${id}-option-${index}`);
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    const prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
      prev.classList.remove('Mui-focusVisible');
    }

    const listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true');

    if (reason === 'keyboard') {
      option.classList.add('Mui-focusVisible');
    } // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });


    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(({
    event,
    diff,
    direction = 'next',
    reason = 'auto'
  }) => {
    if (!popupOpen) {
      return;
    }

    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      const newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const syncHighlightedIndex = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    const valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, val => getOptionSelected(currentOption, val)) !== -1) {
        return;
      }

      const itemIndex = findIndex(filteredOptions, optionItem => getOptionSelected(optionItem, valueItem));

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  filteredOptions.length, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  const handleListboxRef = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(node => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.default)(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const handleOpen = event => {
    if (open) {
      return;
    }

    setOpenState(true);
    setInputPristine(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  const handleValue = (event, newValue, reason, details) => {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValueState(newValue);
  };

  const isTouch = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);

  const selectNewValue = (event, option, reasonProp = 'select-option', origin = 'options') => {
    let reason = reasonProp;
    let newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (true) {
        const matches = newValue.filter(val => getOptionSelected(option, val));

        if (matches.length > 1) {
          console.error([`Material-UI: The \`getOptionSelected\` method of ${componentName} do not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${matches.length} matches.`].join('\n'));
        }
      }

      const itemIndex = findIndex(newValue, valueItem => getOptionSelected(option, valueItem));

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });

    if (!disableCloseOnSelect && !event.ctrlKey && !event.metaKey) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`); // Same logic as MenuList.js

      if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    let nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  const handleClear = event => {
    ignoreFocus.current = true;
    setInputValueState('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  const handleKeyDown = other => event => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }

    if (event.defaultMuiPrevented) {
      return;
    }

    if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    } // Wait until IME is settled.


    if (event.which !== 229) {
      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false; // Avoid early form validation, let the end-users continue filling the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;

        default:
      }
    }
  };

  const handleFocus = event => {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  const handleBlur = event => {
    // Ignore the event when using the scrollbar with IE11
    if (listboxRef.current !== null && listboxRef.current.parentElement.contains(document.activeElement)) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  const handleInputChange = event => {
    const newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  const handleOptionMouseOver = event => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  const handleOptionTouchStart = () => {
    isTouch.current = true;
  };

  const handleOptionClick = event => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  const handleTagDelete = index => event => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, 'remove-option', {
      option: value[index]
    });
  };

  const handlePopupIndicator = event => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  const handleMouseDown = event => {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  const handleClick = () => {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  const handleInputMouseDown = event => {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    const indexBy = new Map();
    let warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn(`Material-UI: The options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`, 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: (other = {}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      'aria-owns': listboxAvailable ? `${id}-listbox` : null,
      role: 'combobox',
      'aria-expanded': listboxAvailable
    }, other, {
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperativeley so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': listboxAvailable ? `${id}-listbox` : null,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false'
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => ({
      key: index,
      'data-tag-index': index,
      tabIndex: -1,
      onDelete: handleTagDelete(index)
    }),
    getListboxProps: () => ({
      role: 'listbox',
      id: `${id}-listbox`,
      'aria-labelledby': `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: event => {
        // Prevent blur
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some(value2 => value2 != null && getOptionSelected(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/Cancel.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Cancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Close.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Close.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/NavigateNext.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/NavigateNext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/lab/AlertTitle/AlertTitle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/AlertTitle/AlertTitle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_AlertTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AlertTitle */ "./node_modules/@material-ui/core/AlertTitle/AlertTitle.js");



let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DeprecatedAlertTitle(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The AlertTitle component was moved from the lab to the core.', '', "You should use `import { AlertTitle } from '@material-ui/core'`", "or `import AlertTitle from '@material-ui/core/AlertTitle'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_AlertTitle__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref
  }, props));
}));

/***/ }),

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

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__.default)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__.default)(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__.default)(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__.default)(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__.default)((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__.default)(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__.default)(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__.default)(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__.default)(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_2__.default)(element);

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_4__.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__.default)(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__.default)(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "write": () => (/* binding */ write),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__.default)(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr) || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__.default)(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__.default)(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "arrow": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "flip": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "hide": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "offset": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__.default)
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__.default)(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(_min, tetherMin) : _min, _offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default, _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__.default, _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__.default, _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default, _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__.default, _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__.default)((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(referenceElement);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ within)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}

/***/ }),

/***/ "./resources/js/components/teams/DetailTeam.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/teams/DetailTeam.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailTeam)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _MemberList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberList */ "./resources/js/components/teams/MemberList.js");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ "./resources/js/components/teams/ProjectList.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    root: {
      display: 'flex',
      margin: '1em'
    },
    margin: {
      margin: theme.spacing(1)
    }
  };
});
function DetailTeam(props) {
  var classes = useStyles();
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.default);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    id: '',
    name: "",
    description: '',
    users: [],
    projects: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var params = props.match.params;

  var handleEditingMode = function handleEditingMode() {
    var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return setIsEditing(bool);
  };

  var getDetailTeam = function getDetailTeam() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'team/' + params.id;
    (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_5___default().get(url, {}, config).then(function (result) {
      setData(result.data);
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: null,
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
    getDetailTeam();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__.default, {
    style: {
      padding: '1em',
      width: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__.default, {
          separator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_11__.default, {
            fontSize: "small"
          }),
          "aria-label": "teams",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link,
            color: "primary",
            to: "/teams",
            children: "Teams"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__.default, {
            color: "textPrimary",
            children: data.name
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__.default, {
          variant: "h4",
          children: data.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.default, {
          teamId: params.id,
          data: data.projects
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MemberList__WEBPACK_IMPORTED_MODULE_1__.default, {
          teamId: params.id,
          data: data.users
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/components/teams/FormAddNewMember.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/teams/FormAddNewMember.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _widgets_UserSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/UserSearchBar */ "./resources/js/components/widgets/UserSearchBar.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_8__.default, {
      variant: "h6",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_9__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__.default, {})
    })]
  }));
});
var DialogContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__.default);

var FormAddNewMember = function FormAddNewMember(_ref) {
  var _jsx2;

  var teamId = _ref.teamId,
      open = _ref.open,
      closeModal = _ref.closeModal,
      onCreate = _ref.onCreate;
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.default);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var formCreateOnSubmit = function formCreateOnSubmit() {
    var body = {
      teamId: teamId,
      users: users
    };
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "team/".concat(teamId);
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, body, config).then(function (result) {
      onCreate(result.data);
      snackbar("A new list successfully created", 'success');
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core___WEBPACK_IMPORTED_MODULE_12__.default, {
    "aria-labelledby": "Create a member",
    open: open,
    fullWidth: true,
    maxWidth: "xs",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogTitle, {
      onClose: function onClose() {
        closeModal();
      },
      children: " Add new member "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
      dividers: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          formCreateOnSubmit();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__.default, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__.default, {
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            item: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_UserSearchBar__WEBPACK_IMPORTED_MODULE_4__.default, {
              exceptedUsers: [],
              onChange: function onChange(values) {
                return setUsers(values.map(function (value) {
                  return value.id;
                }));
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__.default, (_jsx2 = {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
          }, _defineProperty(_jsx2, "lg", 12), _defineProperty(_jsx2, "item", true), _defineProperty(_jsx2, "children", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
            type: "submit",
            variant: "contained",
            color: "primary",
            children: "Add"
          })), _jsx2))]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormAddNewMember);

/***/ }),

/***/ "./resources/js/components/teams/MemberList.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/teams/MemberList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/Alert/Alert.js");
/* harmony import */ var _FormAddNewMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormAddNewMember */ "./resources/js/components/teams/FormAddNewMember.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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



















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline'
    }
  };
});

var MemberList = function MemberList(_ref) {
  var teamId = _ref.teamId,
      data = _ref.data;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openFormCreate = _useState2[0],
      setOpenFormCreate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var removeMember = function removeMember(member) {
    setRows(rows.filter(function (row) {
      if (row.id != member.id) return row;
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRows(data);
    console.log('memberlist : ', data);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      variant: "h6",
      children: "Members"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
      onClick: function onClick() {
        return setOpenFormCreate(true);
      },
      children: "Add a new member"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormAddNewMember__WEBPACK_IMPORTED_MODULE_1__.default, {
      open: openFormCreate,
      teamId: teamId,
      closeModal: function closeModal() {
        return setOpenFormCreate(false);
      },
      onCreate: function onCreate(newMember) {
        setRows([].concat(_toConsumableArray(rows), [newMember]));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.root,
      children: rows.length ? rows.map(function (member) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__.default, {
            alignItems: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__.default, {
              primary: member.name,
              secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [member.occupation ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
                  component: "span",
                  variant: "body2",
                  className: classes.inline,
                  color: "textPrimary",
                  children: [" ", member.occupation.name, "  "]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}), member.email]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_9__.default, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
                edge: "end",
                "aria-label": "Remove",
                onClick: function onClick() {
                  return removeMember(member);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__.default, {})
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__.default, {
            variant: "inset",
            component: "li"
          })]
        });
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__.default, {
        severity: "info",
        children: "Please add new member."
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberList);

/***/ }),

/***/ "./resources/js/components/teams/ProjectList.js":
/*!******************************************************!*\
  !*** ./resources/js/components/teams/ProjectList.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/Card.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/CardActionArea.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/CardMedia.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/Alert/Alert.js");
/* harmony import */ var _material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/AlertTitle */ "./node_modules/@material-ui/lab/AlertTitle/AlertTitle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var ProjectList = function ProjectList(_ref) {
  var teamId = _ref.teamId,
      data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRows(data);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      variant: "h6",
      children: "Projects"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
      container: true,
      spacing: 1,
      children: rows.length ? rows.map(function (row) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
          item: true,
          xl: 3,
          md: 3,
          sm: 6,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
            to: "/project/" + row.id,
            style: {
              textDecoration: 'none'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
              style: {
                height: '100%'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__.default, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__.default, {
                  image: row.image_url,
                  title: row.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
                    gutterBottom: true,
                    variant: "h6",
                    component: "h5",
                    align: "left",
                    style: {
                      height: '100%'
                    },
                    children: [" ", row.title, " "]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: row.description
                  })]
                })]
              })
            })
          })
        }, row.id);
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
        item: true,
        xl: 12,
        md: 12,
        sm: 12,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__.default, {
          severity: "info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_10__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
              children: "Info"
            })
          }), "This team is not working on any project."]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList); // const [openFormCreate,setOpenFormCreate]=useState(false);
// <FormAddNewProject 
// open={openFormCreate} 
// closeModal={() => setOpenFormCreate(false)} 
// onCreate={(newValue)=> setRows([...rows,newValue])}/>

/***/ }),

/***/ "./resources/js/components/widgets/UserSearchBar.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/widgets/UserSearchBar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserSearchbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Chip/Chip.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function UserSearchbar(props) {
  var detailProject = props.detailProject,
      exceptedUsers = props.exceptedUsers,
      onChange = props.onChange,
      inputLabel = props.inputLabel;
  var handleValueChanges = onChange;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  var getUsers = function getUsers() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'user';
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {}, config).then(function (result) {
      console.log('getUsers : ', result.data);
      setUsers(result.data);
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: null,
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
    if (detailProject) setUsers(detailProject.members);else getUsers();
  }, []);

  function checkExistingMember(id, arr) {
    var exists = false;

    try {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if ('user' in item) {
          if (id == item.user.id) {
            exists = true;
            break;
          }
        }

        if (id == item.id) {
          exists = true;
          break;
        }
      }
    } catch (error) {
      console.log('checkExistingMember => usersearchbar', error);
    }

    return exists;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    global.dispatch({
      type: 'check-authentication',
      payload: {
        history: history
      }
    });
    var filteredOptions = users.filter(function (option) {
      if (!checkExistingMember(option.id, exceptedUsers) && !'administrator sistem'.includes(option.name.toLowerCase())) return option;
    });
    filteredOptions = filteredOptions.map(function (option) {
      var firstLetter = option.name[0].toUpperCase();
      return _objectSpread({
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter
      }, option);
    });
    setOptions(filteredOptions);
  }, [users]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    multiple: true,
    freeSolo: true,
    options: options.sort(function (a, b) {
      return -b.firstLetter.localeCompare(a.firstLetter);
    }),
    groupBy: function groupBy(option) {
      return option.firstLetter;
    },
    getOptionLabel: function getOptionLabel(option) {
      var label = '';
      if ('role' in option && _typeof(option.role) == 'object') label = "".concat(option.name, " (").concat(option.role.name, ")");
      if ('occupation' in option && _typeof(option.occupation) == 'object') label = "".concat(option.name, " (").concat(option.occupation.name, ")");
      if (!('role' in option) && !('occupation' in option)) label = "".concat(option.name, " (").concat(option.email, ")");
      return label;
    },
    style: {
      width: '100%'
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread(_objectSpread({}, params), {}, {
        label: inputLabel ? inputLabel : "Search Users",
        variant: "standard"
      }));
    },
    onChange: function onChange(event, options) {
      return handleValueChanges(options);
    },
    renderTags: function renderTags(values, getTagProps) {
      return values.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread({
          variant: "outlined",
          label: option.name
        }, getTagProps({
          index: index
        })));
      });
    }
  });
}

/***/ })

}]);