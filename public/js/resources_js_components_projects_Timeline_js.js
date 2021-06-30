(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_Timeline_js"],{

/***/ "./node_modules/@material-ui/core/TableBody/TableBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableBody/TableBody.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/Table/Tablelvl2Context.js");







const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-row-group'
  }
};
const tablelvl2 = {
  variant: 'body'
};
const defaultComponent = 'tbody';
const TableBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableBody(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 true ? TableBody.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally `TableRow`.
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTableBody'
})(TableBody));

/***/ }),

/***/ "./node_modules/@material-ui/core/TableCell/TableCell.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableCell/TableCell.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/@material-ui/core/Table/TableContext.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/Table/Tablelvl2Context.js");










const styles = theme => ({
  /* Styles applied to the root element. */
  root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body2, {
    display: 'table-cell',
    verticalAlign: 'inherit',
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: `1px solid
    ${theme.palette.mode === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.divider, 1), 0.68)}`,
    textAlign: 'left',
    padding: 16
  }),

  /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
  head: {
    color: theme.palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  },

  /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
  body: {
    color: theme.palette.text.primary
  },

  /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
  footer: {
    color: theme.palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12)
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: '6px 16px',
    '&$paddingCheckbox': {
      width: 24,
      // prevent the checkbox column from growing
      padding: '0 12px 0 16px',
      '& > *': {
        padding: 0
      }
    }
  },

  /* Styles applied to the root element if `padding="checkbox"`. */
  paddingCheckbox: {
    width: 48,
    // prevent the checkbox column from growing
    padding: '0 0 0 4px'
  },

  /* Styles applied to the root element if `padding="none"`. */
  paddingNone: {
    padding: 0
  },

  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {
    textAlign: 'left'
  },

  /* Styles applied to the root element if `align="center"`. */
  alignCenter: {
    textAlign: 'center'
  },

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {
    textAlign: 'right',
    flexDirection: 'row-reverse'
  },

  /* Styles applied to the root element if `align="justify"`. */
  alignJustify: {
    textAlign: 'justify'
  },

  /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
  stickyHeader: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  }
});
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

const TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableCell(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    component,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  const table = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_6__.default);
  const tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_7__.default);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let role;
  let Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  let scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  const padding = paddingProp || (table && table.padding ? table.padding : 'default');
  const size = sizeProp || (table && table.size ? table.size : 'medium');
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[variant], className, align !== 'inherit' && classes[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(align)}`], padding !== 'default' && classes[`padding${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(padding)}`], size !== 'medium' && classes[`size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(size)}`], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 true ? TableCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The table cell contents.
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
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['checkbox', 'default', 'none']),

  /**
   * Set scope attribute.
   */
  scope: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Set aria-sort direction.
   */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['asc', 'desc', false]),

  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['body', 'footer', 'head'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ "./node_modules/@material-ui/core/TableContainer/TableContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableContainer/TableContainer.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");






const styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    overflowX: 'auto'
  }
};
const TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableContainer(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className)
  }, other));
});
 true ? TableContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The table itself, normally `<Table />`.
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
  name: 'MuiTableContainer'
})(TableContainer));

/***/ }),

/***/ "./node_modules/@material-ui/core/TableHead/TableHead.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableHead/TableHead.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/Table/Tablelvl2Context.js");







const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-header-group'
  }
};
const tablelvl2 = {
  variant: 'head'
};
const defaultComponent = 'thead';
const TableHead = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableHead(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 true ? TableHead.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally `TableRow`.
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTableHead'
})(TableHead));

/***/ }),

/***/ "./node_modules/@material-ui/core/TableRow/TableRow.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableRow/TableRow.js ***!
  \*************************************************************/
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
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/Table/Tablelvl2Context.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");








const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    '&$hover:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&$selected, &$selected:hover': {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
    }
  },

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},

  /* Pseudo-class applied to the root element if `hover={true}`. */
  hover: {},

  /* Styles applied to the root element if table variant="head". */
  head: {},

  /* Styles applied to the root element if table variant="footer". */
  footer: {}
});
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

const TableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableRow(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent,
    hover = false,
    selected = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component", "hover", "selected"]);

  const tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, tablelvl2 && {
      'head': classes.head,
      'footer': classes.footer
    }[tablelvl2.variant], hover && classes.hover, selected && classes.selected),
    role: Component === defaultComponent ? null : 'row'
  }, other));
});
 true ? TableRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Should be valid <tr> children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiTableRow'
})(TableRow));

/***/ }),

/***/ "./node_modules/@material-ui/core/Table/Table.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Table/Table.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _TableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableContext */ "./node_modules/@material-ui/core/Table/TableContext.js");







const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    '& caption': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body2, {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'left',
      captionSide: 'bottom'
    })
  },

  /* Styles applied to the root element if `stickyHeader={true}`. */
  stickyHeader: {
    borderCollapse: 'separate'
  }
});
const defaultComponent = 'table';
const Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Table(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent,
    padding = 'default',
    size = 'medium',
    stickyHeader = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "padding", "size", "stickyHeader"]);

  const table = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TableContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    role: Component === defaultComponent ? null : 'table',
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, stickyHeader && classes.stickyHeader)
  }, other)));
});
 true ? Table.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the table, normally `TableHead` and `TableBody`.
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
   * Allows TableCells to inherit padding of the Table.
   * @default 'default'
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['checkbox', 'default', 'none']),

  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTable'
})(Table));

/***/ }),

/***/ "./node_modules/@material-ui/core/Table/TableContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/Table/TableContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * @ignore - internal component.
 */

const TableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  TableContext.displayName = 'TableContext';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/Table/Tablelvl2Context.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/Table/Tablelvl2Context.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * @ignore - internal component.
 */

const Tablelvl2Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tablelvl2Context);

/***/ }),

/***/ "./node_modules/@material-ui/icons/KeyboardArrowDown.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/icons/KeyboardArrowDown.js ***!
  \**************************************************************/
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
  d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), 'KeyboardArrowDown');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/KeyboardArrowUp.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/KeyboardArrowUp.js ***!
  \************************************************************/
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
  d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

exports.default = _default;

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

/***/ "./node_modules/@material-ui/utils/esm/visuallyHidden.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/visuallyHidden.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visuallyHidden);

/***/ }),

/***/ "./resources/js/components/projects/Timeline.js":
/*!******************************************************!*\
  !*** ./resources/js/components/projects/Timeline.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnhancedTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/Collapse.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/visuallyHidden.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/Checkbox.js");
/* harmony import */ var _widgets_StatusChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/StatusChip */ "./resources/js/components/widgets/StatusChip.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _widgets_board_EditLaneForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../widgets/board/EditLaneForm */ "./resources/js/components/widgets/board/EditLaneForm.js");
/* harmony import */ var _tasks_modalDetailTask_ModalDetailTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tasks/modalDetailTask/ModalDetailTask */ "./resources/js/components/tasks/modalDetailTask/ModalDetailTask.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
var _clickedTaskInitialSt;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























var headCells = [{
  id: 'checkbox',
  align: 'left',
  label: ''
}, {
  id: 'Title',
  align: 'left',
  label: 'Title'
}, {
  id: 'PIC',
  align: 'left',
  label: 'PIC'
}, {
  id: 'Start',
  align: 'left',
  label: 'Start'
}, {
  id: 'End',
  align: 'left',
  label: 'End'
}, {
  id: 'Days',
  align: 'right',
  label: 'Days'
}, {
  id: 'Realisasi Start',
  align: 'left',
  label: 'Realisasi Start'
}, {
  id: 'Realisasi End',
  align: 'left',
  label: 'Realisasi End'
}, {
  id: 'Work days',
  align: 'right',
  label: 'Work days'
}, {
  id: 'Progress',
  align: 'right',
  label: 'Progress'
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.default)(function (theme) {
  return {
    root: {
      width: '100%',
      padding: '1em'
    },
    table: {
      minWidth: 2000
    },
    tableCellTitle: {
      minWidth: 200
    },
    sortSpan: _material_ui_utils__WEBPACK_IMPORTED_MODULE_10__.default
  };
});

function EnhancedTableHead(_ref) {
  var extraCells = _ref.extraCells;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__.default, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: [extraCells, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {}), headCells.map(function (headCell) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
          align: headCell.align,
          children: headCell.label
        }, headCell.id);
      })]
    })
  });
}

var clickedTaskInitialState = (_clickedTaskInitialSt = {
  id: '',
  projectId: '',
  listId: null,
  list: null,
  title: '',
  description: '',
  label: '',
  complete: false,
  progress: 0,
  start: null,
  end: null,
  actualStart: null,
  actualEnd: null,
  startLabel: '',
  endLabel: ''
}, _defineProperty(_clickedTaskInitialSt, "list", null), _defineProperty(_clickedTaskInitialSt, "tags", []), _defineProperty(_clickedTaskInitialSt, "members", []), _defineProperty(_clickedTaskInitialSt, "parentTask", ''), _defineProperty(_clickedTaskInitialSt, "cards", []), _defineProperty(_clickedTaskInitialSt, "logs", []), _defineProperty(_clickedTaskInitialSt, "comments", []), _defineProperty(_clickedTaskInitialSt, "attachments", []), _defineProperty(_clickedTaskInitialSt, "creator", null), _defineProperty(_clickedTaskInitialSt, "isSubtask", false), _clickedTaskInitialSt);
function EnhancedTable(props) {
  var classes = useStyles();
  var projectId = props.projectId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.detailProject),
      _useState2 = _slicedToArray(_useState, 2),
      detailProject = _useState2[0],
      setDetailProject = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openEditList = _useState4[0],
      setOpenEditList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedList = _useState6[0],
      setSelectedList = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(clickedTaskInitialState),
      _useState8 = _slicedToArray(_useState7, 2),
      clickedTask = _useState8[0],
      setClickedTask = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      detailTaskOpen = _useState10[0],
      setDetailTaskOpen = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      rows = _useState12[0],
      setRows = _useState12[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRows(props.data);
  }, [props.detailProject.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDetailProject(props.detailProject);
  }, [props.detailProject.id]);

  var handleDetailTaskOpen = function handleDetailTaskOpen(taskInfo) {
    var task = taskInfo.task,
        open = taskInfo.open;
    setDetailTaskOpen(open);
    setClickedTask(_objectSpread(_objectSpread({}, task), {}, {
      taskId: task.id
    }));
  };

  var onTaskUpdate = function onTaskUpdate(task) {
    console.log('onTaskUpdate : ', task);
    var newRows = rows.map(function (row) {
      row.cards = row.cards.map(function (card) {
        if (card.id == task.id) return task;

        if (card.id == task.parentTask) {
          card.cards = card.cards.map(function (subtask) {
            if (subtask.id == task.id) return task;
            return subtask;
          });
        }

        return card;
      });
      return row;
    });
    setRows(newRows);
  };

  var onTaskDelete = function onTaskDelete(task) {
    console.log('onTaskDelete', task);
    var newRows = rows.map(function (row) {
      if (task.isSubtask) {
        row.cards = row.cards.map(function (card) {
          if (card.id == task.parentTask) {
            card.cards = card.cards.filter(function (subtask) {
              if (subtask.id != task.id) return subtask;
            });
          }

          return card;
        });
      } else {
        row.cards = row.cards.filter(function (card) {
          if (card.id != task.id) return card;
        });
      }

      return row;
    });
    setRows(newRows);
  };

  var showModalDetailTask = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (clickedTask.id && detailTaskOpen == true) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tasks_modalDetailTask_ModalDetailTask__WEBPACK_IMPORTED_MODULE_7__.default, {
        open: detailTaskOpen,
        closeModalDetailTask: function closeModalDetailTask() {
          handleDetailTaskOpen({
            task: clickedTaskInitialState,
            open: false
          });
        },
        projectId: detailProject.id,
        detailProject: {
          id: detailProject.id,
          members: detailProject.members
        },
        initialState: clickedTask,
        onTaskUpdate: onTaskUpdate,
        onTaskDelete: onTaskDelete
      });
    }
  }, [clickedTask]);

  var onTaskNew = function onTaskNew(newTask, laneId) {
    newTask.id = Date.now();
    newTask.listId = laneId;
    newTask.userId = global.state.id;
    newTask.projectId = detailProject.id;
    newTask.creator = global.state.id;

    if (window.navigator.onLine) {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = process.env.REACT_APP_BACK_END_BASE_URL + 'task/';
      (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, newTask, config).then(function (result) {
        newTask.id = result.data.id;
        newTask.projectId = detailProject.id;
        newTask.listId = laneId;
        global.dispatch({
          type: 'create-new-task',
          payload: newTask
        });
        setRows(rows.map(function (row) {
          if (row.id == selectedList.id) row.cards.push(newTask);
          return row;
        }));
        handleSnackbar("A new card successfuly created", 'success');
      })["catch"](function (error) {
        var payload = {
          error: error,
          snackbar: handleSnackbar,
          dispatch: global.dispatch,
          history: null
        };
        global.dispatch({
          type: 'handle-fetch-error',
          payload: payload
        });
      });
    } else {
      handleSnackbar("You're currently offline. Please check your internet connection", 'warning');
      global.dispatch({
        type: 'create-new-task',
        payload: newTask
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__.default, {
      className: classes.table,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__.default, {
        size: 'small',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__.default, {
          children: rows.map(function (row, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Row, {
              classes: classes,
              data: row,
              handleDetailTaskOpen: handleDetailTaskOpen,
              projectId: projectId,
              detailProject: detailProject,
              onClick: function onClick() {
                setSelectedList(row);
                setOpenEditList(true);
              }
            }, row.id);
          })
        })
      })
    }), selectedList.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_board_EditLaneForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      laneId: selectedList.id,
      detailProject: {
        id: detailProject.id,
        members: detailProject.members
      },
      open: openEditList,
      onCancel: function onCancel() {
        return setOpenEditList(false);
      },
      onAdd: function onAdd(newTask) {
        onTaskNew(newTask, selectedList.id);
        setOpenEditList(false);
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {}), showModalDetailTask()]
  });
}

function Row(props) {
  var data = props.data,
      handleDetailTaskOpen = props.handleDetailTaskOpen,
      classes = props.classes,
      onClick = props.onClick;

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      openCollapsible = _useState14[0],
      setOpenCollapsible = _useState14[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar2 = (0,notistack__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar2.enqueueSnackbar;

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var handleCompleteTask = function handleCompleteTask(id, event) {
    var body = {
      id: id,
      complete: event.target.checked
    };
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + "task/".concat(id);
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().patch(url, body, config).then(function (result) {
      var payload = {
        data: result.data
      };
      global.dispatch({
        type: 'store-detail-task',
        payload: payload
      });
      handleSnackbar("Data has been updated", 'success');
    })["catch"](function (error) {
      var payload = {
        error: error,
        snackbar: handleSnackbar,
        dispatch: global.dispatch,
        history: null
      };
      global.dispatch({
        type: 'handle-fetch-error',
        payload: payload
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      hover: true,
      style: {
        color: '#393939',
        backgroundColor: '#e3e3e3'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__.default, {
          size: "small",
          onClick: function onClick() {
            setOpenCollapsible(!openCollapsible);
          },
          children: [" ", openCollapsible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_18__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_19__.default, {}), " "]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        component: "th",
        scope: "row",
        style: {
          cursor: 'pointer'
        },
        onClick: onClick,
        children: data.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: " "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        children: " "
      })]
    }, data.id), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        style: {
          paddingBottom: 0,
          paddingTop: 0
        },
        colSpan: headCells.length + 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_20__.default, {
          "in": openCollapsible,
          timeout: "auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TableTasks, {
            tasks: data.cards,
            classes: classes,
            handleCompleteTask: handleCompleteTask,
            handleDetailTaskOpen: handleDetailTaskOpen
          })
        })
      })
    })]
  });
}

var TableTasks = function TableTasks(_ref2) {
  var tasks = _ref2.tasks,
      classes = _ref2.classes,
      handleCompleteTask = _ref2.handleCompleteTask,
      handleDetailTaskOpen = _ref2.handleDetailTaskOpen;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__.default, {
    className: classes.table,
    size: 'small',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(EnhancedTableHead, {
      classes: classes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__.default, {
      children: tasks ? tasks.map(function (task) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TaskRow, {
            data: task,
            classes: classes,
            handleCompleteTask: handleCompleteTask,
            handleDetailTaskOpen: handleDetailTaskOpen
          })
        });
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {})
    })]
  });
};

var TaskRow = function TaskRow(_ref3) {
  var data = _ref3.data,
      classes = _ref3.classes,
      handleCompleteTask = _ref3.handleCompleteTask,
      handleDetailTaskOpen = _ref3.handleDetailTaskOpen;

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      openCollapsible = _useState16[0],
      setOpenCollapsible = _useState16[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      hover: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__.default, {
          size: "small",
          onClick: function onClick() {
            return setOpenCollapsible(!openCollapsible);
          },
          children: [" ", openCollapsible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_18__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_19__.default, {}), " "]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        pading: "checkbox",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_21__.default, {
          onChange: function onChange(event) {
            handleCompleteTask(data.id, event);
          },
          checked: data.complete
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        component: "th",
        scope: "row",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return handleDetailTaskOpen({
            task: data,
            open: true
          });
        },
        children: data.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        children: data.members ? data.members.map(function (member, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            children: member.role ? member.role.name : ''
          });
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "left",
        children: data.start ? moment__WEBPACK_IMPORTED_MODULE_3___default()(data.start).format('DD MMMM YYYY') : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "left",
        children: data.end ? moment__WEBPACK_IMPORTED_MODULE_3___default()(data.end).format('DD MMMM YYYY') : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: data.start && data.end ? Math.round(moment__WEBPACK_IMPORTED_MODULE_3___default().duration(moment__WEBPACK_IMPORTED_MODULE_3___default()(data.start).diff(moment__WEBPACK_IMPORTED_MODULE_3___default()(data.end))).asDays()) * -1 : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "left",
        children: [data.actualStart ? moment__WEBPACK_IMPORTED_MODULE_3___default()(data.actualStart).format('DD MMMM YYYY') : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), data.startLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_StatusChip__WEBPACK_IMPORTED_MODULE_4__.default, {
          status: data.startLabel
        }) : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "left",
        children: [data.actualEnd ? moment__WEBPACK_IMPORTED_MODULE_3___default()(data.actualEnd).format('DD MMMM YYYY') : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), data.endLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_StatusChip__WEBPACK_IMPORTED_MODULE_4__.default, {
          status: data.endLabel
        }) : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: data.actualStart && data.actualEnd ? Math.round(moment__WEBPACK_IMPORTED_MODULE_3___default().duration(moment__WEBPACK_IMPORTED_MODULE_3___default()(data.actualStart).diff(moment__WEBPACK_IMPORTED_MODULE_3___default()(data.actualEnd))).asDays()) * -1 : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        align: "right",
        children: data.progress
      })]
    }, data.id), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
        style: {
          paddingBottom: 0,
          paddingTop: 0
        },
        colSpan: headCells.length + 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_20__.default, {
          "in": openCollapsible,
          timeout: "auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TableSubtask, {
            tasks: data.cards,
            classes: classes,
            handleCompleteTask: handleCompleteTask,
            handleDetailTaskOpen: handleDetailTaskOpen
          })
        })
      })
    })]
  });
};

var TableSubtask = function TableSubtask(_ref4) {
  var tasks = _ref4.tasks,
      classes = _ref4.classes,
      handleCompleteTask = _ref4.handleCompleteTask,
      handleDetailTaskOpen = _ref4.handleDetailTaskOpen,
      projectId = _ref4.projectId,
      detailProject = _ref4.detailProject;

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      subtasks = _useState18[0],
      setSubtasks = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSubtasks(tasks);
  }, [tasks]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__.default, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(EnhancedTableHead, {
        classes: classes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__.default, {
        children: tasks ? tasks.map(function (subtask) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
              hover: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                children: " "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                padding: "checkbox",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_21__.default, {
                  onChange: function onChange(event) {
                    handleCompleteTask(subtask.id, event);
                  },
                  checked: subtask.complete
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                component: "th",
                scope: "row",
                style: {
                  cursor: 'pointer'
                },
                onClick: function onClick() {
                  handleDetailTaskOpen({
                    task: subtask,
                    open: true
                  });
                },
                children: subtask.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                children: subtask.members ? subtask.members.map(function (member, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    children: member.role ? member.role.name : ''
                  });
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "left",
                children: subtask.start ? moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.start).format('DD MMMM YYYY') : ''
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "left",
                children: subtask.end ? moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.end).format('DD MMMM YYYY') : ''
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "right",
                children: subtask.start && subtask.end ? Math.round(moment__WEBPACK_IMPORTED_MODULE_3___default().duration(moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.start).diff(moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.end))).asDays()) * -1 : ''
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "left",
                children: [subtask.actualStart ? moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.actualStart).format('DD MMMM YYYY') : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), subtask.startLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_StatusChip__WEBPACK_IMPORTED_MODULE_4__.default, {
                  status: subtask.startLabel
                }) : '']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "left",
                children: [subtask.actualEnd ? moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.actualEnd).format('DD MMMM YYYY') : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), subtask.endLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_StatusChip__WEBPACK_IMPORTED_MODULE_4__.default, {
                  status: subtask.endLabel
                }) : '']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "right",
                children: subtask.actualStart && subtask.actualEnd ? Math.round(moment__WEBPACK_IMPORTED_MODULE_3___default().duration(moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.actualStart).diff(moment__WEBPACK_IMPORTED_MODULE_3___default()(subtask.actualEnd))).asDays()) * -1 : ''
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                align: "right",
                children: subtask.progress
              })]
            }, subtask.id)
          });
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {})
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/components/widgets/board/EditLaneForm.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/widgets/board/EditLaneForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/Tab.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/Alert/Alert.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tasks_FormCreateNewTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../tasks/FormCreateNewTask */ "./resources/js/components/tasks/FormCreateNewTask.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children", "value", "index"],
    _excluded2 = ["children", "classes", "onClose"];

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

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
      p: 3,
      children: children
    })
  }));
}

var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      variant: "h6",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__.default, {})
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
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__.default)(function (theme) {
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

var EditLaneForm = function EditLaneForm(props) {
  var classes = useStyles();
  var laneId = props.laneId,
      onAdd = props.onAdd,
      onCancel = props.onCancel,
      detailProject = props.detailProject;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useHistory)();
  var initLaneState = {
    id: null,
    title: '',
    project: null
  };
  var initCardState = {
    id: null,
    title: '',
    description: '',
    label: '',
    progress: 0,
    start: null,
    end: null,
    tags: [],
    listId: laneId,
    creator: null,
    members: []
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initLaneState),
      _useState4 = _slicedToArray(_useState3, 2),
      laneDetail = _useState4[0],
      setLaneDetail = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initCardState),
      _useState6 = _slicedToArray(_useState5, 2),
      newCard = _useState6[0],
      setNewCard = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDeletingLane = _useState8[0],
      setIsDeletingLane = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      tabState = _useState10[0],
      setTabState = _useState10[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleTabChanges = function handleTabChanges(event, newValue) {
    return setTabState(newValue);
  };

  var handleAddCard = function handleAddCard() {
    return onAdd(newCard);
  };

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (laneId) {
      var detailList = getListDetail(laneId);
      if (detailList) setLaneDetail(detailList);
    }
  }, [props.laneId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ('open' in props) setModalOpen(props.open);
  }, [props.open]);

  var getListDetail = function getListDetail() {
    var projects = global.state.projects;
    var list = null;

    if (projects) {
      for (var j = 0; j < projects.length; j++) {
        var columns = projects[j].columns;

        for (var i = 0; i < columns.length; i++) {
          if (columns[i].id == laneId) {
            var column = columns[i];
            list = column;
          }
        }
      }

      list = null;
    }

    if (list) {
      setLaneDetail(list);
    } else {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = 'http://localhost:1337/list/' + laneId;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, {}, config).then(function (result) {
        setLaneDetail(result.data);
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
    }
  };

  var updateLane = function updateLane() {
    var body = {
      id: laneDetail.id,
      title: laneDetail.title,
      project: laneDetail.project
    };

    if (window.navigator.onLine) {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = 'http://localhost:1337/list/' + laneDetail.id;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_3___default().patch(url, body, config).then(function (result) {
        handleSnackbar("Data has been updated", 'success');
        global.dispatch({
          type: 'update-list',
          payload: body
        });
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
    } else {
      handleSnackbar("You are currently offline", 'warning');
    }
  };

  var deleteList = function deleteList() {
    if (window.navigator.onLine) {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = 'http://localhost:1337/list/' + laneDetail.id;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_3___default().delete(url, {
        id: laneDetail.id
      }, config).then(function (result) {
        handleSnackbar("Data has been deleted", 'success');
        setModalOpen(false);
        global.dispatch({
          type: 'remove-list',
          payload: _objectSpread({
            projectId: detailProject.id,
            listId: laneId
          }, laneDetail)
        });
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
    } else {
      handleSnackbar("You are currently offline", 'warning');
    }
  };

  var checkIfDeletingList = function checkIfDeletingList(isDeletingLane) {
    if (isDeletingLane) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
        item: true,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        style: {
          marginTop: '1em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
          variant: "body2",
          children: "Data will be permanently deleted. Are you sure?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          onClick: function onClick() {
            return setIsDeletingLane(false);
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          onClick: function onClick() {
            return deleteList();
          },
          variant: "contained",
          color: "secondary",
          children: "Delete"
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
        item: true,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        style: {
          marginTop: '1em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          onClick: function onClick() {
            return setIsDeletingLane(true);
          },
          variant: "contained",
          color: "secondary",
          style: {
            marginRight: '1.5em'
          },
          children: "Delete"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          variant: "contained",
          color: "primary",
          type: "submit",
          children: "Save"
        })]
      });
    }
  };

  var checkIfAuthenticated = function checkIfAuthenticated() {
    if (global.state.authenticated === true) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DialogContent, {
        dividers: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__.default, {
          value: tabState,
          onChange: handleTabChanges,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__.default, {
            label: "Edit Lane"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__.default, {
            label: "Add new card"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TabPanel, {
          value: tabState,
          index: 0,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
            container: true,
            spacing: 2,
            style: {
              paddingLeft: "1em",
              paddingRight: "1em",
              paddingTop: "1em"
            },
            component: "form",
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              updateLane();
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19__.default, {
                label: "Title : ",
                placeholder: "example : List A",
                value: laneDetail.title,
                onChange: function onChange(e) {
                  return setLaneDetail(_objectSpread(_objectSpread({}, laneDetail), {}, {
                    title: e.target.value
                  }));
                },
                style: {
                  width: '100%'
                },
                variant: "standard"
              })
            }), checkIfDeletingList(isDeletingLane)]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TabPanel, {
          value: tabState,
          index: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tasks_FormCreateNewTask__WEBPACK_IMPORTED_MODULE_4__.default, {
            classes: classes,
            newTask: newCard,
            setNewTask: setNewCard,
            handleAddNewTask: handleAddCard,
            detailProject: detailProject,
            isSubtask: false
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_20__.default, {
          severity: "warning",
          children: "Your action requires authentication. Please sign in."
        })
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_21__.default, {
      "aria-labelledby": "Create a project",
      open: modalOpen,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogTitle, {
        onClose: function onClose() {
          onCancel();
          setModalOpen(false);
        },
        children: "Edit Lane"
      }), checkIfAuthenticated(global, classes)]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditLaneForm);

/***/ })

}]);