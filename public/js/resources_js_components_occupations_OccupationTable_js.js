(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_occupations_OccupationTable_js"],{

/***/ "./resources/js/components/occupations/OccupationTable.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/occupations/OccupationTable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnhancedTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableSortLabel/TableSortLabel.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Table/Table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/TablePagination/TablePagination.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/visuallyHidden.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  disablePadding: true,
  label: 'Name'
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    root: {
      width: '100%',
      paddingLeft: '1em',
      paddingTop: '1em'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    sortSpan: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__.default
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: headCells.map(function (headCell) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          align: headCell.align,
          padding: headCell.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === headCell.id ? order : false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
            active: orderBy === headCell.id,
            direction: orderBy === headCell.id ? order : 'asc',
            onClick: createSortHandler(headCell.id),
            children: [headCell.label, orderBy === headCell.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('asc'),
      _useState6 = _slicedToArray(_useState5, 2),
      order = _useState6[0],
      setOrder = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name'),
      _useState8 = _slicedToArray(_useState7, 2),
      orderBy = _useState8[0],
      setOrderBy = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsPerPage = _useState10[0],
      setRowsPerPage = _useState10[1];

  var handleModalOpen = props.modalOpen;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRows(props.data);
  }, [props.data]);

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
        className: classes.table,
        size: 'small',
        padding: "default",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EnhancedTableHead, {
          classes: classes,
          order: order,
          orderBy: orderBy,
          onRequestSort: handleRequestSort,
          rowCount: rows.length
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
          children: [stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
              hover: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                component: "th",
                scope: "row",
                style: {
                  cursor: 'pointer'
                },
                onClick: function onClick() {
                  return handleModalOpen({
                    occupation: _objectSpread({}, row),
                    open: true
                  });
                },
                children: row.name
              })
            }, row.id);
          }), emptyRows > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
            style: {
              height: 53 * emptyRows
            },
            children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              colSpan: 6
            }), " "]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
      page: page,
      component: "div",
      count: rows.length,
      rowsPerPage: rowsPerPage,
      onPageChange: handleChangePage,
      rowsPerPageOptions: [5, 10, 25],
      onRowsPerPageChange: handleChangeRowsPerPage
    })]
  });
}
EnhancedTableHead.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onRequestSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['asc', 'desc']).isRequired,
  orderBy: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};

/***/ })

}]);