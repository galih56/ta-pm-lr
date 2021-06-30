(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_projects_github_RepositoryList_js"],{

/***/ "./node_modules/@iconify-icons/logos/github-icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@iconify-icons/logos/github-icon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
	"body": "<path d=\"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z\" fill=\"#161614\"/>",
	"width": 256,
	"height": 250
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./resources/js/components/projects/github/GithubLoginButton.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/projects/github/GithubLoginButton.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import LoginGithub from 'react-login-github';
// import { OauthReceiver, OauthSender } from 'react-oauth-flow';
// import GitHubLogin from 'react-github-login';




var GithubLoginButton = function GithubLoginButton() {
  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var getAccessToken = function getAccessToken() {
    var body = {
      client_id: process.env.REACT_APP_GITHUB_API_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_API_SECRET,
      code: global.state.githubAuth.code
    };
    var url = "".concat(process.env.REACT_APP_BACK_END_BASE_URL, "get-github-access-token");
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, body).then(function (result) {
      global.dispatch({
        type: 'store-github-auth',
        payload: _objectSpread({
          code: body.code
        }, result.data)
      });
    })["catch"](function (error) {
      console.log('getAccessToken : ', error);
    });
  };

  var getGithubUserInfo = function getGithubUserInfo() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = 'https://api.github.com/user';
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = 'Bearer ' + global.state.githubAuth.access_token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {}, config).then(function (result) {
      global.dispatch({
        type: 'store-github-auth',
        payload: _objectSpread(_objectSpread({}, result.data), {}, {
          authenticated: true,
          access_token: global.state.githubAuth.access_token,
          code: global.state.githubAuth.code
        })
      });
    })["catch"](function (error) {
      console.log('getGithubUserInfo : ', error);
      if (error.status == 401) global.dispatch({
        type: 'store-github-auth',
        payload: {
          githubAuth: {
            code: '',
            authenticated: false,
            access_token: '',
            scope: null
          }
        }
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (global.state.githubAuth) {
      if (global.state.githubAuth.code) getAccessToken();else console.log('github code not found');
    } else console.log('githubAuth is null');

    if (global.state.githubAuth.access_token && !global.state.githubAuth.login) {
      getGithubUserInfo();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: function () {
      if (global.state.githubAuth.login) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          onClick: function onClick() {
            global.dispatch({
              type: 'remove-github-auth'
            });
          },
          children: "Disconnect from github"
        });
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          href: "https://github.com/login/oauth/authorize?scope=read:user,repo&client_id=".concat(process.env.REACT_APP_GITHUB_API_CLIENT_ID),
          children: "Connect to github"
        })
      });
    }()
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GithubLoginButton);

/***/ }),

/***/ "./resources/js/components/projects/github/ModalRepositoryInformation.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/projects/github/ModalRepositoryInformation.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalRepositoryInformation)
/* harmony export */ });
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GithubLoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GithubLoginButton */ "./resources/js/components/projects/github/GithubLoginButton.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
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
var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
      variant: "h6",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__.default, {})
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
function ModalRepositoryInformation(props) {
  var initialState = props.initialState;
  var closeModal = props.handleClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    full_name: "",
    html_url: '',
    description: '',
    owner: {
      login: ''
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      repositoryInformation = _useState2[0],
      setRepositoryInformation = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      commits = _useState4[0],
      setCommits = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      issues = _useState6[0],
      setIssues = _useState6[1];

  var global = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var classes = useStyles();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getRepositoryInfo();
    console.log(initialState);
  }, [initialState]);

  var getRepositoryInfo = function getRepositoryInfo() {
    setCommits([]);
    setIssues([]);
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = "https://api.github.com/repos/".concat(initialState.owner_name, "/").concat(initialState.repository_name);
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common.Authorization) = 'Bearer ' + global.state.githubAuth.access_token;
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(url, {}, config).then(function (result) {
      setRepositoryInformation(result.data);
      getRepositoryIssues();
      getRepositoryCommits();
    })["catch"](function (error) {
      if (error.status == 401) global.dispatch({
        type: 'store-github-auth',
        payload: {
          githubAuth: {
            code: '',
            authenticated: false,
            access_token: '',
            scope: null
          }
        }
      });
    });
  };

  var getRepositoryIssues = function getRepositoryIssues() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = "https://api.github.com/repos/".concat(initialState.owner_name, "/").concat(initialState.repository_name, "/issues");
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common.Authorization) = 'Bearer ' + global.state.githubAuth.access_token;
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(url, {}, config).then(function (result) {
      setIssues(result.data);
    })["catch"](function (error) {
      return console.log('getRepositoryIssues : ', error);
    });
  };

  var getRepositoryCommits = function getRepositoryCommits() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = "https://api.github.com/repos/".concat(initialState.owner_name, "/").concat(initialState.repository_name, "/commits");
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common.Authorization) = 'Bearer ' + global.state.githubAuth.access_token;
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(url, {}, config).then(function (result) {
      setCommits(result.data);
    })["catch"](function (error) {
      return console.log('getRepositoryCommits : ', error);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__.default, {
    "aria-labelledby": "Detail repository",
    open: initialState.open,
    fullWidth: true,
    maxWidth: 'md',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(DialogTitle, {
      onClose: function onClose() {
        closeModal(false);
      },
      children: [" ", repositoryInformation.full_name ? repositoryInformation.full_name : "Detail repository", " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DialogContent, {
      dividers: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
          item: true,
          xl: 12,
          md: 12,
          sm: 12,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GithubLoginButton__WEBPACK_IMPORTED_MODULE_5__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), repositoryInformation.full_name ? "" : "Authentication is required"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
          item: true,
          xl: 6,
          md: 6,
          sm: 6,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            gutterBottom: true,
            variant: "body2",
            children: "Commits"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_17__.default, {
            className: classes.root,
            children: commits.map(function (commit, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__.default, {
                  alignItems: "flex-start",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_19__.default, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_20__.default, {
                      alt: commit.author.login,
                      src: commit.author.avatar_url
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__.default, {
                    primary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__.default, {
                      href: commit.html_url,
                      target: "_blank",
                      children: commit.commit.message
                    }),
                    secondary: commit.author.login
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23__.default, {
                  variant: "inset",
                  component: "li"
                })]
              });
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
          item: true,
          xl: 6,
          md: 6,
          sm: 6,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            gutterBottom: true,
            variant: "h5",
            children: "Issues"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_17__.default, {
            className: classes.root,
            children: issues.map(function (issue, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__.default, {
                  alignItems: "flex-start",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_19__.default, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_20__.default, {
                      alt: issue.user.login,
                      src: issue.user.avatar_url
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__.default, {
                    primary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__.default, {
                      href: issue.html_url,
                      target: "_blank",
                      children: issue.title
                    }),
                    secondary: issue.user.login
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23__.default, {
                  variant: "inset",
                  component: "li"
                })]
              });
            })
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/projects/github/NewRepositoryForm.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/projects/github/NewRepositoryForm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var NewRepositoryForm = function NewRepositoryForm(_ref) {
  var projectId = _ref.projectId,
      onSave = _ref.onSave;

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      usernameOwner = _useState2[0],
      setUsernameOwner = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      repositoryName = _useState4[0],
      setRepositoryName = _useState4[1];

  var saveRepository = function saveRepository(e) {
    e.preventDefault();
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'github-repository';
    var body = {
      owner_name: usernameOwner,
      repository_name: repositoryName,
      project: projectId
    };
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, body, config).then(function (result) {
      onSave(result.data);
      snackbar("Data was added successfuly", 'success');
      setUsernameOwner('');
      setRepositoryName('');
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
    autoComplete: "off",
    onSubmit: saveRepository,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
      label: "username owner",
      variant: "outlined",
      required: true,
      value: usernameOwner,
      onChange: function onChange(e) {
        return setUsernameOwner(e.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      style: {
        margin: '1em'
      },
      children: "/"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
      label: "repository name",
      required: true,
      variant: "outlined",
      value: repositoryName,
      onChange: function onChange(e) {
        return setRepositoryName(e.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
      type: "submit",
      style: {
        margin: '0.8em'
      },
      variant: "contained",
      color: "primary",
      children: "Save"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewRepositoryForm);

/***/ }),

/***/ "./resources/js/components/projects/github/RepositoryList.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/projects/github/RepositoryList.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../context/UserContext */ "./resources/js/context/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _NewRepositoryForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewRepositoryForm */ "./resources/js/components/projects/github/NewRepositoryForm.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _ModalRepositoryInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalRepositoryInformation */ "./resources/js/components/projects/github/ModalRepositoryInformation.js");
/* harmony import */ var _GithubLoginButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GithubLoginButton */ "./resources/js/components/projects/github/GithubLoginButton.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_icons_logos_github_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify-icons/logos/github-icon */ "./node_modules/@iconify-icons/logos/github-icon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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























var RepositoryList = function RepositoryList(_ref) {
  var projectId = _ref.projectId;

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();
  var global = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.default);

  var snackbar = function snackbar(message, variant) {
    return enqueueSnackbar(message, {
      variant: variant
    });
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      repos = _useState2[0],
      setRepos = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    owner_name: '',
    repository_name: '',
    open: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      clickedRepo = _useState4[0],
      setClickedRepo = _useState4[1];

  var getRepositories = function getRepositories() {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'project/' + projectId + '/github-repository';
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = 'Bearer ' + global.state.githubAuth.access_token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {}, config).then(function (result) {
      setRepos(result.data);
    });
  };

  var deleteRepository = function deleteRepository(id) {
    var config = {
      mode: 'no-cors',
      crossdomain: true
    };
    var url = process.env.REACT_APP_BACK_END_BASE_URL + 'github-repository/' + id;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = global.state.token;
    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.post["Content-Type"]) = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_2___default().delete(url, {}, config).then(function (result) {
      setRepos(repos.filter(function (item) {
        if (item.id != id) return item;
      }));
      snackbar("Data was deleted", 'success');
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getRepositories();
  }, [projectId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
      container: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
        item: true,
        xl: 12,
        md: 12,
        sm: 12,
        xs: 12,
        style: {
          paddingLeft: '1em',
          paddingBottom: '0.5em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
          variant: "h6",
          align: "left",
          children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
            icon: _iconify_icons_logos_github_icon__WEBPACK_IMPORTED_MODULE_8__.default
          }), " Github Repositories"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_GithubLoginButton__WEBPACK_IMPORTED_MODULE_6__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
          variant: "body2",
          children: "Login with github account to get repository informations"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
        item: true,
        xl: 12,
        md: 12,
        sm: 12,
        xs: 12,
        style: {
          paddingLeft: '1em'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_NewRepositoryForm__WEBPACK_IMPORTED_MODULE_4__.default, {
          projectId: projectId,
          onSave: function onSave(newRepo) {
            setRepos([].concat(_toConsumableArray(repos), [newRepo]));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
        item: true,
        xl: 12,
        md: 12,
        sm: 12,
        xs: 12,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__.default, {
          component: "nav",
          "aria-label": "repository list",
          children: repos.map(function (repo) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                setClickedRepo({
                  owner_name: repo.owner_name,
                  repository_name: repo.repository_name,
                  open: true
                });
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__.default, {
                primary: "".concat(repo.owner_name, "/").concat(repo.repository_name)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_16__.default, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__.default, {
                  onClick: function onClick() {
                    deleteRepository(repo.id);
                  },
                  edge: "start",
                  "aria-label": "remove repository ".concat(repo.owner_name, "/").concat(repo.repository_name),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__.default, {})
                })
              })]
            }, repo.id);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ModalRepositoryInformation__WEBPACK_IMPORTED_MODULE_5__.default, {
          initialState: clickedRepo,
          handleClose: function handleClose() {
            setClickedRepo({
              owner_name: '',
              repository_name: '',
              open: false
            });
          }
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepositoryList);

/***/ })

}]);