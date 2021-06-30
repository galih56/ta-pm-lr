(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_meetings_ModalCreateMeeting_js"],{

/***/ "./node_modules/@material-ui/lab/TimePicker/TimePicker.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/TimePicker/TimePicker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTextFieldAriaText": () => (/* binding */ getTextFieldAriaText),
/* harmony export */   "timePickerConfig": () => (/* binding */ timePickerConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _internal_svg_icons_Clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/svg-icons/Clock */ "./node_modules/@material-ui/lab/internal/svg-icons/Clock.js");
/* harmony import */ var _TimePickerToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TimePickerToolbar */ "./node_modules/@material-ui/lab/TimePicker/TimePickerToolbar.js");
/* harmony import */ var _internal_pickers_wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/pickers/wrappers/ResponsiveWrapper */ "./node_modules/@material-ui/lab/internal/pickers/wrappers/ResponsiveWrapper.js");
/* harmony import */ var _internal_pickers_text_field_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/pickers/text-field-helper */ "./node_modules/@material-ui/lab/internal/pickers/text-field-helper.js");
/* harmony import */ var _internal_pickers_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/pickers/hooks/useUtils */ "./node_modules/@material-ui/lab/internal/pickers/hooks/useUtils.js");
/* harmony import */ var _internal_pickers_time_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/pickers/time-utils */ "./node_modules/@material-ui/lab/internal/pickers/time-utils.js");
/* harmony import */ var _internal_pickers_hooks_useValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/pickers/hooks/useValidation */ "./node_modules/@material-ui/lab/internal/pickers/hooks/useValidation.js");
/* harmony import */ var _internal_pickers_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/pickers/hooks/date-helpers-hooks */ "./node_modules/@material-ui/lab/internal/pickers/hooks/date-helpers-hooks.js");
/* harmony import */ var _internal_pickers_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/pickers/Picker/makePickerWithState */ "./node_modules/@material-ui/lab/internal/pickers/Picker/makePickerWithState.js");













function getTextFieldAriaText(value, utils) {
  return value && utils.isValid(utils.date(value)) ? `Choose time, selected time is ${utils.format(utils.date(value), 'fullTime')}` : 'Choose time';
}

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_Clock__WEBPACK_IMPORTED_MODULE_4__.default, null);

function useInterceptProps(_ref) {
  let {
    ampm,
    inputFormat,
    maxTime: __maxTime,
    minTime: __minTime,
    openTo = 'hours',
    views = ['hours', 'minutes']
  } = _ref,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["ampm", "inputFormat", "maxTime", "minTime", "openTo", "views"]);

  const utils = (0,_internal_pickers_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__.useUtils)();
  const minTime = (0,_internal_pickers_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__.useParsedDate)(__minTime);
  const maxTime = (0,_internal_pickers_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__.useParsedDate)(__maxTime);
  const willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    views,
    openTo,
    minTime,
    maxTime,
    ampm: willUseAmPm,
    acceptRegex: willUseAmPm ? /[\dapAP]/gi : /\d/gi,
    mask: '__:__',
    disableMaskedInput: willUseAmPm,
    getOpenDialogAriaText: getTextFieldAriaText,
    openPickerIcon: _ref2,
    inputFormat: (0,_internal_pickers_text_field_helper__WEBPACK_IMPORTED_MODULE_7__.pick12hOr24hFormat)(inputFormat, willUseAmPm, {
      localized: utils.formats.fullTime,
      '12h': utils.formats.fullTime12h,
      '24h': utils.formats.fullTime24h
    })
  }, other);
}

const timePickerConfig = {
  useInterceptProps,
  useValidation: (0,_internal_pickers_hooks_useValidation__WEBPACK_IMPORTED_MODULE_8__.makeValidationHook)(_internal_pickers_time_utils__WEBPACK_IMPORTED_MODULE_9__.validateTime),
  DefaultToolbarComponent: _TimePickerToolbar__WEBPACK_IMPORTED_MODULE_10__.default
};

/**
 * @ignore - do not document.
 */

/* @typescript-to-proptypes-generate */
const TimePicker = (0,_internal_pickers_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_11__.makePickerWithStateAndWrapper)(_internal_pickers_wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_12__.ResponsiveWrapper, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
  name: 'MuiTimePicker'
}, timePickerConfig));
TimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(RegExp),

  /**
   * Enables keyboard listener for moving between days in calendar.
   * @default currentWrapper !== 'static'
   */
  allowKeyboardControl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * 12h/24h view for hour selection clock.
   * @default true
   */
  ampm: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * "CANCEL" Text message
   * @default "CANCEL"
   */
  cancelText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * className applied to the root component.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, it shows the clear action in the picker dialog.
   * @default false
   */
  clearable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * "CLEAR" Text message
   * @default "CLEAR"
   */
  clearText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Allows to pass configured date-io adapter directly. More info [here](https://next.material-ui-pickers.dev/guides/date-adapter-passing)
   * ```jsx
   * dateAdapter={new AdapterDateFns({ locale: ruLocale })}
   * ```
   */
  dateAdapter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default "@media (pointer: fine)"
   * @example "@media (min-width: 720px)" or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Props to be passed directly to material-ui [Dialog](https://material-ui.com/components/dialogs)
   */
  DialogProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  disableCloseOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the picker and text field are disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Accessible text that helps user to understand which time and view is selected.
   * @default (view, time) => `Select ${view}. Selected time is ${format(time, 'fullTime')}`
   */
  getClockLabelText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
   */
  getOpenDialogAriaText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  ignoreInvalidInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Format string.
   */
  inputFormat: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  InputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Custom mask. Can be used to override generate from format. (e.g. __/__/____ __:__ or __/__/____ __:__ _M)
   */
  mask: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  maxTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().any), prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(Date), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  minTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().any), prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(Date), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * "OK" button text.
   * @default "OK"
   */
  okText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Callback fired when date is accepted @DateIOType.
   */
  onAccept: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value (the selected date) changes. @DateIOType.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Control the popup or dialog open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Icon displaying for open picker button.
   */
  openPickerIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * First view to show.
   */
  openTo: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['date', 'hours', 'minutes', 'month', 'seconds', 'year']),

  /**
   * Force rendering in particular orientation.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['landscape', 'portrait']),

  /**
   * Popper props passed down to [Popper](https://material-ui.com/api/popper/) component.
   */
  PopperProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Make picker read only.
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   */
  renderInput: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * Custom formatter to be passed into Rifm component.
   */
  rifmFormatter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   */
  shouldDisableTime: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the today button will be displayed. **Note** that `showClearButton` has a higher priority.
   * @default false
   */
  showTodayButton: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * "TODAY" Text message
   * @default "TODAY"
   */
  todayText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Component that will replace default toolbar renderer.
   */
  ToolbarComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default "–"
   */
  toolbarPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Mobile picker title, displaying in the toolbar.
   * @default "SELECT DATE"
   */
  toolbarTitle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Custom component for popper [Transition](https://material-ui.com/components/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The value of the picker.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().any), prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(Date), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Array of views to show.
   */
  views: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['hours', 'minutes', 'seconds']).isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimePicker);

/***/ }),

/***/ "./node_modules/@material-ui/lab/TimePicker/TimePickerToolbar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/TimePicker/TimePickerToolbar.js ***!
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/useTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _internal_pickers_PickersToolbarText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/pickers/PickersToolbarText */ "./node_modules/@material-ui/lab/internal/pickers/PickersToolbarText.js");
/* harmony import */ var _internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/pickers/PickersToolbarButton */ "./node_modules/@material-ui/lab/internal/pickers/PickersToolbarButton.js");
/* harmony import */ var _internal_pickers_PickersToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/pickers/PickersToolbar */ "./node_modules/@material-ui/lab/internal/pickers/PickersToolbar.js");
/* harmony import */ var _internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/pickers/utils */ "./node_modules/@material-ui/lab/internal/pickers/utils.js");
/* harmony import */ var _internal_pickers_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/pickers/hooks/useUtils */ "./node_modules/@material-ui/lab/internal/pickers/hooks/useUtils.js");
/* harmony import */ var _internal_pickers_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/pickers/hooks/date-helpers-hooks */ "./node_modules/@material-ui/lab/internal/pickers/hooks/date-helpers-hooks.js");











const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)({
  separator: {
    outline: 0,
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
});
const clockTypographyVariant = 'h3';
/**
 * @ignore - internal component.
 */

const TimePickerToolbar = props => {
  const {
    ampm,
    ampmInClock,
    classes,
    date,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle = 'SELECT TIME',
    views
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["ampm", "ampmInClock", "classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);

  const utils = (0,_internal_pickers_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__.useUtils)();
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0,_internal_pickers_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__.useMeridiemMode)(date, ampm, onChange);

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const separator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarText__WEBPACK_IMPORTED_MODULE_8__.default, {
    tabIndex: -1,
    value: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbar__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(isLandscape && classes.penIconLandscape)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, (0,_internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__.arrayIncludes)(views, 'hours') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__.default, {
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: () => setOpenView('hours'),
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), (0,_internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__.arrayIncludes)(views, ['hours', 'minutes']) && separator, (0,_internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__.arrayIncludes)(views, 'minutes') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__.default, {
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: () => setOpenView('minutes'),
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), (0,_internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__.arrayIncludes)(views, ['minutes', 'seconds']) && separator, (0,_internal_pickers_utils__WEBPACK_IMPORTED_MODULE_10__.arrayIncludes)(views, 'seconds') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__.default, {
    variant: clockTypographyVariant,
    onClick: () => setOpenView('seconds'),
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--'
  })), showAmPmControl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__.default, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: () => handleMeridiemChange('am')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_pickers_PickersToolbarButton__WEBPACK_IMPORTED_MODULE_11__.default, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: () => handleMeridiemChange('pm')
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiTimePickerToolbar'
})(TimePickerToolbar));

/***/ }),

/***/ "./node_modules/@material-ui/lab/internal/svg-icons/Clock.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/lab/internal/svg-icons/Clock.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'Clock'));

/***/ }),

/***/ "./resources/js/components/meetings/ModalCreateMeeting.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/meetings/ModalCreateMeeting.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalCreateMeeting)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _widgets_UserSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../widgets/UserSearchBar */ "./resources/js/components/widgets/UserSearchBar.js");
/* harmony import */ var _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/lab/AdapterDateFns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/lab/LocalizationProvider */ "./node_modules/@material-ui/lab/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _material_ui_lab_TimePicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/lab/TimePicker */ "./node_modules/@material-ui/lab/TimePicker/TimePicker.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Alert */ "./node_modules/@material-ui/core/Alert/Alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_10__.default, {
      variant: "h6",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_11__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__.default, {})
    })]
  }));
});
var DialogContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__.default);
var DialogActions = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14__.default);
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.default)(function (theme) {
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
function ModalCreateMeeting(props) {
  var classes = useStyles();
  var open = props.open;
  var projectId = props.projectId;
  var closeModal = props.handleClose;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useHistory)();
  var refreshData = props.refreshDetailProject;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      start = _useState6[0],
      setStart = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      end = _useState8[0],
      setEnd = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      timeRangeWarning = _useState10[0],
      setTimeRangeWarning = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      members = _useState12[0],
      setMembers = _useState12[1];

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var clearState = function clearState() {
    setTitle('');
    setStart('');
    setEnd('');
    setTimeRangeWarning(false);
    setMembers([]);
    closeModal();
  };

  var submitData = function submitData() {
    if (!moment__WEBPACK_IMPORTED_MODULE_6___default()(start, 'HH:mm:ss').isBefore(moment__WEBPACK_IMPORTED_MODULE_6___default()(end, 'HH:mm:ss'))) {
      setTimeRangeWarning(true);
      return;
    } else setTimeRangeWarning(false);

    var datetime_start = moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('YYYY-MM-DD') + ' ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(start).format('HH:mm:ss');
    var datetime_end = moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('YYYY-MM-DD') + ' ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(end).format('HH:mm:ss');
    var body = {
      title: title,
      start: datetime_start,
      end: datetime_end,
      projects_id: projectId,
      members: members,
      users_id: global.state.id
    };
    if (!window.navigator.onLine) handleSnackbar("You are currently offline", 'warning');
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'meeting/';
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, body, config).then(function (result) {
      clearState();
      refreshData(); // global.dispatch({ type: 'create-new-meeting', payload: result.data });

      handleSnackbar("A new meeting successfuly created", 'success');
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
  };

  var checkIfAuthenticated = function checkIfAuthenticated() {
    if (global.state.authenticated === true) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DialogContent, {
          dividers: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
            container: true,
            spacing: 2,
            style: {
              paddingLeft: 3,
              paddingRight: 3
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_18__.default, {
                variant: "standard",
                label: "Title : ",
                placeholder: "example : Meeting X",
                className: classes.textfield,
                onChange: function onChange(e) {
                  return setTitle(e.target.value);
                },
                style: {
                  width: '100%'
                },
                required: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
              item: true,
              container: true,
              spacing: 2,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_19__.default, {
                dateAdapter: _material_ui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_20__.default,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
                  item: true,
                  lg: 6,
                  md: 6,
                  sm: 12,
                  xs: 12,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_18__.default, {
                    onChange: function onChange(value) {
                      return setDate(value.target.value);
                    },
                    style: {
                      width: '100%'
                    },
                    label: "Date",
                    type: "date",
                    InputLabelProps: {
                      shrink: true
                    },
                    variant: "standard",
                    required: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
                  item: true,
                  container: true,
                  spacing: 2,
                  lg: 6,
                  md: 6,
                  sm: 12,
                  xs: 12,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
                    item: true,
                    lg: 6,
                    md: 6,
                    sm: 6,
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_lab_TimePicker__WEBPACK_IMPORTED_MODULE_21__.default, {
                      onChange: function onChange(value) {
                        return setStart(value);
                      },
                      value: start,
                      label: "Start",
                      variant: "standard",
                      InputLabelProps: {
                        shrink: true
                      },
                      inputProps: {
                        step: 300
                      },
                      renderInput: function renderInput(params) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_18__.default, _objectSpread(_objectSpread({}, params), {}, {
                          variant: 'standard'
                        }));
                      },
                      ampm: false,
                      required: true
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
                    item: true,
                    lg: 6,
                    md: 6,
                    sm: 6,
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_lab_TimePicker__WEBPACK_IMPORTED_MODULE_21__.default, {
                      value: end,
                      label: "End",
                      variant: "standard",
                      onChange: function onChange(value) {
                        return setEnd(value);
                      },
                      InputLabelProps: {
                        shrink: true
                      },
                      inputProps: {
                        step: 300
                      },
                      renderInput: function renderInput(params) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_18__.default, _objectSpread(_objectSpread({}, params), {}, {
                          variant: 'standard'
                        }));
                      },
                      ampm: false,
                      required: true
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_17__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_UserSearchBar__WEBPACK_IMPORTED_MODULE_5__.default, {
                onChange: function onChange(value) {
                  return setMembers(value);
                },
                exceptedUsers: []
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DialogActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_22__.default, {
            type: 'submit',
            color: "primary",
            children: "Create"
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DialogContent, {
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_23__.default, {
          severity: "warning",
          children: "Your action requires authentication. Please sign in."
        })
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core___WEBPACK_IMPORTED_MODULE_24__.default, {
    "aria-labelledby": "Create a meeting",
    open: open,
    component: "form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      submitData();
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DialogTitle, {
      onClose: function onClose() {
        closeModal(false);
      },
      children: " Create a new meeting "
    }), timeRangeWarning ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_23__.default, {
      severity: "warning",
      children: "Start time must be earlier than end time"
    }) : null, checkIfAuthenticated()]
  });
}

/***/ })

}]);