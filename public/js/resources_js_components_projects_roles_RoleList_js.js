(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_roles_RoleList_js"],{

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

/***/ "./node_modules/@material-ui/core/TablePagination/TablePagination.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/TablePagination/TablePagination.js ***!
  \***************************************************************************/
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
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/InputBase.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MenuItem */ "./node_modules/@material-ui/core/MenuItem/MenuItem.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/Select/Select.js");
/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TableCell */ "./node_modules/@material-ui/core/TableCell/TableCell.js");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Toolbar */ "./node_modules/@material-ui/core/Toolbar/Toolbar.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TablePaginationActions */ "./node_modules/@material-ui/core/TablePagination/TablePaginationActions.js");
/* harmony import */ var _utils_useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useId */ "./node_modules/@material-ui/core/utils/useId.js");















const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    overflow: 'auto',
    // Increase the specificity to override TableCell.
    '&:last-child': {
      padding: 0
    }
  },

  /* Styles applied to the Toolbar component. */
  toolbar: {
    minHeight: 52,
    paddingRight: 2
  },

  /* Styles applied to the spacer element. */
  spacer: {
    flex: '1 1 100%'
  },

  /* Styles applied to the caption Typography components if `variant="caption"`. */
  caption: {
    flexShrink: 0
  },
  // TODO v5: `.selectRoot` should be merged with `.input`

  /* Styles applied to the Select component root element. */
  selectRoot: {
    marginRight: 32,
    marginLeft: 8
  },

  /* Styles applied to the Select component `select` class. */
  select: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: 'right',
    textAlignLast: 'right' // Align <select> on Chrome.

  },
  // TODO v5: remove

  /* Styles applied to the Select component `icon` class. */
  selectIcon: {},

  /* Styles applied to the `InputBase` component. */
  input: {
    color: 'inherit',
    fontSize: 'inherit',
    flexShrink: 0
  },

  /* Styles applied to the MenuItem component. */
  menuItem: {},

  /* Styles applied to the internal `TablePaginationActions` component. */
  actions: {
    flexShrink: 0,
    marginLeft: 20
  }
});

function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */


const TablePagination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TablePagination(props, ref) {
  const {
    ActionsComponent = _TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__.default,
    backIconButtonProps,
    classes,
    className,
    colSpan: colSpanProp,
    component: Component = _TableCell__WEBPACK_IMPORTED_MODULE_6__.default,
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = 'Rows per page:',
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["ActionsComponent", "backIconButtonProps", "classes", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"]);

  let colSpan;

  if (Component === _TableCell__WEBPACK_IMPORTED_MODULE_6__.default || Component === 'td') {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  const selectId = (0,_utils_useId__WEBPACK_IMPORTED_MODULE_7__.default)(SelectProps.id);
  const labelId = (0,_utils_useId__WEBPACK_IMPORTED_MODULE_7__.default)(SelectProps.labelId);
  const MenuItemComponent = SelectProps.native ? 'option' : _MenuItem__WEBPACK_IMPORTED_MODULE_8__.default;

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) return (page + 1) * rowsPerPage;
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    colSpan: colSpan,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.spacer
  }), rowsPerPageOptions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
    color: "inherit",
    variant: "body2",
    className: classes.caption,
    id: labelId
  }, labelRowsPerPage), rowsPerPageOptions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Select__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: {
      select: classes.select,
      icon: classes.selectIcon
    },
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.input, classes.selectRoot)
    }),
    value: rowsPerPage,
    onChange: onRowsPerPageChange,
    id: selectId,
    labelId: labelId
  }, SelectProps), rowsPerPageOptions.map(rowsPerPageOption => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(MenuItemComponent, {
    className: classes.menuItem,
    key: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption,
    value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
  }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
    color: "inherit",
    variant: "body2",
    className: classes.caption
  }, labelDisplayedRows({
    from: count === 0 ? 0 : page * rowsPerPage + 1,
    to: getLabelDisplayedRowsTo(),
    count: count === -1 ? -1 : count,
    page
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ActionsComponent, {
    className: classes.actions,
    backIconButtonProps: backIconButtonProps,
    count: count,
    nextIconButtonProps: nextIconButtonProps,
    onPageChange: onPageChange,
    page: page,
    rowsPerPage: rowsPerPage,
    showFirstButton: showFirstButton,
    showLastButton: showLastButton,
    getItemAriaLabel: getItemAriaLabel
  })));
});
 true ? TablePagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  backIconButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

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
  colSpan: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   *
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback.
   */
  onRowsPerPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The zero-based index of the current page.
   */
  page: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_13__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired), props => {
    const {
      count,
      page,
      rowsPerPage
    } = props;

    if (count === -1) {
      return null;
    }

    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    if (page < 0 || page > newLastPage) {
      return new Error('Material-UI: The page prop of a TablePagination is out of range ' + `(0 to ${newLastPage}, but page is ${page}).`);
    }

    return null;
  }),

  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired)
  })]).isRequired),

  /**
   * Props applied to the rows per page [`Select`](/api/select/) element.
   * @default {}
   */
  SelectProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiTablePagination'
})(TablePagination));

/***/ }),

/***/ "./node_modules/@material-ui/core/TablePagination/TablePaginationActions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/TablePagination/TablePaginationActions.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/styles/useTheme.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/svg-icons/LastPage */ "./node_modules/@material-ui/core/internal/svg-icons/LastPage.js");
/* harmony import */ var _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/FirstPage */ "./node_modules/@material-ui/core/internal/svg-icons/FirstPage.js");










/**
 * @ignore - internal component.
 */

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_4__.default, null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5__.default, null);

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__.default, null);

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__.default, null);

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__.default, null);

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__.default, null);

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5__.default, null);

var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_4__.default, null);

const TablePaginationActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TablePaginationActions(props, ref) {
  const {
    backIconButtonProps,
    count,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"]);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__.default)();

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref
  }, other), showFirstButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": getItemAriaLabel('first', page),
    title: getItemAriaLabel('first', page)
  }, theme.direction === 'rtl' ? _ref : _ref2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    onClick: handleBackButtonClick,
    disabled: page === 0,
    color: "inherit",
    "aria-label": getItemAriaLabel('previous', page),
    title: getItemAriaLabel('previous', page)
  }, backIconButtonProps), theme.direction === 'rtl' ? _ref3 : _ref4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    onClick: handleNextButtonClick,
    disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
    color: "inherit",
    "aria-label": getItemAriaLabel('next', page),
    title: getItemAriaLabel('next', page)
  }, nextIconButtonProps), theme.direction === 'rtl' ? _ref5 : _ref6), showLastButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": getItemAriaLabel('last', page),
    title: getItemAriaLabel('last', page)
  }, theme.direction === 'rtl' ? _ref7 : _ref8));
});
 true ? TablePaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The total number of rows.
   */
  count: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @returns {string}
   */
  getItemAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /**
   * The zero-based index of the current page.
   */
  page: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * The number of rows per page.
   */
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /**
   * If `true`, show the first-page button.
   */
  showFirstButton: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * If `true`, show the last-page button.
   */
  showLastButton: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TablePaginationActions);

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

/***/ "./node_modules/@material-ui/core/TableSortLabel/TableSortLabel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/TableSortLabel/TableSortLabel.js ***!
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
/* harmony import */ var _internal_svg_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDownward */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDownward.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/utils/capitalize.js");









const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    flexDirection: 'inherit',
    alignItems: 'center',
    '&:focus': {
      color: theme.palette.text.secondary
    },
    '&:hover': {
      color: theme.palette.text.secondary,
      '& $icon': {
        opacity: 0.5
      }
    },
    '&$active': {
      color: theme.palette.text.primary,
      // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
      '&& $icon': {
        opacity: 1,
        color: theme.palette.text.secondary
      }
    }
  },

  /* Pseudo-class applied to the root element if `active={true}`. */
  active: {},

  /* Styles applied to the icon component. */
  icon: {
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.shorter
    }),
    userSelect: 'none'
  },

  /* Styles applied to the icon component if `direction="desc"`. */
  iconDirectionDesc: {
    transform: 'rotate(0deg)'
  },

  /* Styles applied to the icon component if `direction="asc"`. */
  iconDirectionAsc: {
    transform: 'rotate(180deg)'
  }
});
/**
 * A button based label for placing inside `TableCell` for column sorting.
 */

const TableSortLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableSortLabel(props, ref) {
  const {
    active = false,
    children,
    classes,
    className,
    direction = 'asc',
    hideSortIcon = false,
    IconComponent = _internal_svg_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__.default
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["active", "children", "classes", "className", "direction", "hideSortIcon", "IconComponent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, active && classes.active),
    component: "span",
    disableRipple: true,
    ref: ref
  }, other), children, hideSortIcon && !active ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.icon, classes[`iconDirection${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(direction)}`])
  }));
});
 true ? TableSortLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   * @default false
   */
  active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Label contents, the arrow will be appended automatically.
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
   * The current sort direction.
   * @default 'asc'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['asc', 'desc']),

  /**
   * Hide sort icon when active is false.
   * @default false
   */
  hideSortIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Sort icon to use.
   * @default ArrowDownwardIcon
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiTableSortLabel'
})(TableSortLabel));

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

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDownward.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/ArrowDownward.js ***!
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
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/FirstPage.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/FirstPage.js ***!
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
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage'));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/LastPage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/LastPage.js ***!
  \***********************************************************************/
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
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage'));

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

/***/ "./resources/js/components/projects/roles/ModalCreateRole.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/projects/roles/ModalCreateRole.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalCreateRole)
/* harmony export */ });
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/Alert/Alert.js");
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
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      style: {
        marginRight: '2em'
      },
      children: children
    }), onClose ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_8__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__.default, {})
    }) : null]
  }));
});
var DialogContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    root: {
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__.default);
var DialogActions = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__.default);
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.default)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    }
  };
});
function ModalCreateRole(props) {
  var classes = useStyles();
  var open = props.open;
  var closeModal = props.closeModal;

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      children = _useState4[0],
      setChildren = _useState4[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var submitData = function submitData() {
    var body = {
      name: name,
      children: children
    };
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    if (!window.navigator.onLine) handleSnackbar("You are currently offline", 'warning');else {
      var url = process.env.REACT_APP_BACK_END_BASE_URL + 'memberrole';
      (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common.Authorization) = global.state.token;
      (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.post["Content-Type"]) = 'application/json';
      axios__WEBPACK_IMPORTED_MODULE_4___default().post(url, body, config).then(function (result) {
        setName('');
        handleSnackbar("A new role successfully created", 'success');
        closeModal();
        props.onCreate(result.data);
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
    }
  };

  var checkIfAuthenticated = function checkIfAuthenticated() {
    if (global.state.authenticated === true) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
          dividers: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__.default, {
            container: true,
            spacing: 2,
            style: {
              paddingLeft: 3,
              paddingRight: 3
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__.default, {
              item: true,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_15__.default, {
                variant: "standard",
                label: "Name : ",
                placeholder: "example : Administration System, CEO",
                className: classes.textfield,
                onChange: function onChange(e) {
                  return setName(e.target.value);
                },
                style: {
                  width: '100%'
                }
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core___WEBPACK_IMPORTED_MODULE_16__.default, {
            onClick: submitData,
            color: "primary",
            children: "Create"
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__.default, {
          severity: "warning",
          children: "Your action requires authentication. Please sign in."
        })
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core___WEBPACK_IMPORTED_MODULE_18__.default, {
    "aria-labelledby": "Create a role",
    open: open,
    className: classes.dialog,
    maxWidth: 'md',
    fullwidth: "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogTitle, {
      onClose: function onClose() {
        return closeModal();
      },
      children: "Create a role"
    }), checkIfAuthenticated(global, classes)]
  });
}

/***/ }),

/***/ "./resources/js/components/projects/roles/ModalDetailRole.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/projects/roles/ModalDetailRole.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalDetailRole)
/* harmony export */ });
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
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
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      variant: "h6",
      children: children
    }), onClose ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__.default, {})
    }) : null]
  }));
});
var DialogContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__.default);
var DialogActions = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__.default);
function ModalDetailRole(props) {
  var open = props.open;
  var closeModal = props.closeModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      deleteConfirmOpen = _useState2[0],
      setDeleteConfirmOpen = _useState2[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__.default);
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: null,
    name: '',
    color: '',
    bgColor: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditing = _useState6[0],
      setIsEditing = _useState6[1];

  var handleEditingMode = function handleEditingMode() {
    var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return setIsEditing(bool);
  };

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setData(props.initialState);
  }, [props.initialState]);

  var saveChanges = function saveChanges() {
    var body = data;

    if (window.navigator.onLine) {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = process.env.REACT_APP_BACK_END_BASE_URL + "memberrole/".concat(props.initialState.id);

      try {
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
        axios__WEBPACK_IMPORTED_MODULE_2___default().patch(url, body, config).then(function (result) {
          handleSnackbar("Data has been updated", 'success');
          props.onUpdate(result.data);
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
        handleSnackbar('Failed to send request', 'error');
      }
    }
  };

  var deleteRole = function deleteRole() {
    if (window.navigator.onLine) {
      var config = {
        mode: 'no-cors',
        crossdomain: true
      };
      var url = process.env.REACT_APP_BACK_END_BASE_URL + "memberrole/".concat(data.id);

      try {
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
        axios__WEBPACK_IMPORTED_MODULE_2___default().delete(url, {}, config).then(function (result) {
          handleSnackbar("Data has been deleted", 'success');
          props.onDelete(data);
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
        handleSnackbar('Failed to send request', 'error');
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__.default, {
    onClose: closeModal,
    open: open,
    maxWidth: 'lg',
    fullwidth: "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogTitle, {
      onClose: closeModal,
      children: "Role"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
      dividers: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(EditForm, {
        isEdit: isEditing,
        data: data,
        setData: setData,
        children: " "
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogActions, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogActionButtons, {
        isEdit: isEditing,
        saveChanges: saveChanges,
        setEditMode: handleEditingMode,
        deleteRole: deleteRole,
        deleteConfirmOpen: deleteConfirmOpen,
        setDeleteConfirmOpen: setDeleteConfirmOpen,
        closeModal: closeModal,
        children: " "
      })
    })]
  });
}

var EditForm = function EditForm(_ref) {
  var isEdit = _ref.isEdit,
      data = _ref.data,
      setData = _ref.setData;

  if (isEdit) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
      container: true,
      spacing: 2,
      style: {
        paddingLeft: 4,
        paddingRight: 4
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.default, {
        defaultValue: data.name,
        onChange: function onChange(e) {
          return setData(_objectSpread(_objectSpread({}, data), {}, {
            name: e.target.value
          }));
        },
        style: {
          width: '100%'
        },
        variant: 'standard'
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
      container: true,
      spacing: 2,
      style: {
        paddingLeft: 4,
        paddingRight: 4
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
        item: true,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        align: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
          variant: "body2",
          children: data.name
        })
      })
    });
  }
};

var ModalDeleteConfirm = function ModalDeleteConfirm(props) {
  var open = props.open;
  var handleClose = props.handleClose;
  var handleDelete = props.handleDelete;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__.default, {
    open: open,
    onClose: handleClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogTitle, {
      children: "Are you sure?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DialogContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17__.default, {
        children: "Data will be deleted permanently."
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DialogActions, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: handleClose,
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: handleDelete,
        variant: "contained",
        color: "primary",
        children: " Confirm "
      })]
    })]
  });
};

var DialogActionButtons = function DialogActionButtons(_ref2) {
  var isEdit = _ref2.isEdit,
      saveChanges = _ref2.saveChanges,
      setEditMode = _ref2.setEditMode,
      deleteRole = _ref2.deleteRole,
      deleteConfirmOpen = _ref2.deleteConfirmOpen,
      setDeleteConfirmOpen = _ref2.setDeleteConfirmOpen,
      closeModal = _ref2.closeModal;

  if (isEdit) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: function onClick() {
          return setEditMode(false);
        },
        color: "primary",
        children: " Cancel "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: function onClick() {
          saveChanges();
          setEditMode(false);
        },
        variant: "contained",
        color: "primary",
        children: " Save"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: function onClick() {
          setDeleteConfirmOpen(true);
        },
        variant: "contained",
        color: "secondary",
        children: "Delete"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalDeleteConfirm, {
        open: deleteConfirmOpen,
        handleDelete: function handleDelete() {
          deleteRole();
          setDeleteConfirmOpen(false);
          closeModal();
        },
        handleClose: function handleClose() {
          setDeleteConfirmOpen(false);
          closeModal();
        }
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
        onClick: function onClick() {
          return setEditMode(true);
        },
        color: "primary",
        children: "Edit"
      })
    });
  }
};

/***/ }),

/***/ "./resources/js/components/projects/roles/RoleList.js":
/*!************************************************************!*\
  !*** ./resources/js/components/projects/roles/RoleList.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnhancedTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/TablePagination/TablePagination.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/TableSortLabel/TableSortLabel.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/visuallyHidden.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModalCreateRole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalCreateRole */ "./resources/js/components/projects/roles/ModalCreateRole.js");
/* harmony import */ var _ModalDetailRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalDetailRole */ "./resources/js/components/projects/roles/ModalDetailRole.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
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

























function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

var headCells = [{
  id: 'name',
  align: 'left',
  label: 'Name'
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.default)(function (theme) {
  return {
    root: {
      width: '100%',
      padding: '1em'
    },
    sortSpan: _material_ui_utils__WEBPACK_IMPORTED_MODULE_10__.default
  };
});

function EnhancedTableHead(props) {
  var classes = props.classes,
      order = props.order,
      orderBy = props.orderBy,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      return onRequestSort(event, property);
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__.default, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
      children: headCells.map(function (headCell) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
          align: headCell.align,
          padding: headCell.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === headCell.id ? order : false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14__.default, {
            active: orderBy === headCell.id,
            direction: orderBy === headCell.id ? order : 'asc',
            onClick: createSortHandler(headCell.id),
            children: [headCell.label, orderBy === headCell.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: classes.sortSpan,
              children: order === 'desc' ? 'sorted descending' : 'sorted ascending'
            }) : null]
          })
        }, headCell.id);
      })
    })
  });
}

function EnhancedTable(props) {
  var classes = useStyles();
  var projectId = props.projectId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      newRoleOpen = _useState2[0],
      setNewRoleOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    open: false,
    data: {
      id: null,
      name: ''
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      modalDetailOpen = _useState4[0],
      setModalDetailOpen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('asc'),
      _useState8 = _slicedToArray(_useState7, 2),
      order = _useState8[0],
      setOrder = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('end'),
      _useState10 = _slicedToArray(_useState9, 2),
      orderBy = _useState10[0],
      setOrderBy = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      page = _useState12[0],
      setPage = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
      _useState14 = _slicedToArray(_useState13, 2),
      rowsPerPage = _useState14[0],
      setRowsPerPage = _useState14[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleSnackbar = function handleSnackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getRoles();
  }, []);

  var getRoles = function getRoles() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'memberrole';
    (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_5___default().get(url, {}, config).then(function (result) {
      setRows(result.data);
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

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    return setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__.default, {
        variant: "h6",
        children: ["Roles  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
          color: "primary",
          component: "span",
          onClick: function onClick() {
            return setNewRoleOpen(true);
          },
          children: "+ Add new role"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_19__.default, {
        className: classes.table,
        size: 'medium',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(EnhancedTableHead, {
          classes: classes,
          order: order,
          orderBy: orderBy,
          onRequestSort: handleRequestSort,
          rowCount: rows.length
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_20__.default, {
          children: [stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
              hover: true,
              onClick: function onClick() {
                setModalDetailOpen({
                  open: true,
                  data: row
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
                scope: "row",
                children: [" ", row.name]
              })
            }, row.id);
          }), emptyRows > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {
            style: {
              height: 53 * emptyRows
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {
              colSpan: 6
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_21__.default, {
      rowsPerPageOptions: [5, 10, 25],
      component: "div",
      count: rows.length,
      rowsPerPage: rowsPerPage,
      page: page,
      onPageChange: handleChangePage,
      onRowsPerPageChange: handleChangeRowsPerPage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalCreateRole__WEBPACK_IMPORTED_MODULE_6__.default, {
      projectId: projectId,
      open: newRoleOpen,
      closeModal: function closeModal() {
        return setNewRoleOpen(false);
      },
      onCreate: function onCreate(newRole) {
        setRows([].concat(_toConsumableArray(rows), [newRole]));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalDetailRole__WEBPACK_IMPORTED_MODULE_7__.default, {
      open: modalDetailOpen.open,
      initialState: modalDetailOpen.data,
      closeModal: function closeModal() {
        setModalDetailOpen({
          open: false,
          data: {
            id: null,
            name: ''
          }
        });
      },
      onUpdate: function onUpdate(value) {
        console.log('onUpdate : ', value);
        setRows(rows.map(function (item) {
          if (item.id == value.id) return value;
          return item;
        }));
      }
    })]
  });
}
EnhancedTableHead.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  onRequestSort: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  order: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['asc', 'desc']).isRequired,
  orderBy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};

/***/ })

}]);