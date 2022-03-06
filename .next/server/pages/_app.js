module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "/0p4":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./theme/coreTheme.js

const colors = {
  blue: "#2F80ED",
  red: '#ed4337',
  orange: '#ffb347',
  lightBlack: 'rgba(0, 0, 0, 0.87)'
};
const coreTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1600,
      xl: 1920
    }
  },
  shape: {
    borderRadius: '10px'
  },
  typography: {
    fontFamily: ['Inter', 'Arial', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    h1: {
      fontFamily: ['"Helvetica Neue"', 'Inter'],
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '1px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.167
    },
    h3: {
      fontFamily: ['Inter'],
      fontSize: '20px',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.167
    },
    h5: {
      // card headers
      fontSize: '15px',
      fontWeight: 700,
      lineHeight: 1.167
    },
    h6: {
      // card headers
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '2px',
      ['@media (max-width:576px)']: {
        // eslint-disable-line no-useless-computed-key
        fontSize: '1.2rem'
      }
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1.167,
      ['@media (max-width:576px)']: {
        // eslint-disable-line no-useless-computed-key
        fontSize: '0.7rem'
      }
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.7,
      ['@media (max-width:576px)']: {
        // eslint-disable-line no-useless-computed-key
        fontSize: '0.8rem'
      }
    }
  },
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: '#EFEFEF'
    },
    error: {
      main: '#dc3545'
    }
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        "box-shadow": '0px 7px 7px #0000000A;',
        "-webkit-box-shadow": '0px 7px 7px #0000000A;',
        "-moz-box-shadow": '0px 7px 7px #0000000A;'
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '12.5px 14px'
      }
    },
    MuiTooltip: {
      tooltip: {
        maxWidth: 'none'
      }
    },
    MuiButton: {
      sizeLarge: {
        borderRadius: '50px',
        width: '260px',
        height: '60px'
      },
      root: {
        minWidth: '50px',
        borderRadius: '32px'
      },
      outlinedSizeSmall: {
        fontSize: '0.7rem',
        padding: '6px 9px',
        ['@media (max-width:576px)']: {
          // eslint-disable-line no-useless-computed-key
          padding: '3px 0px'
        }
      },
      textSizeLarge: {
        fontSize: '2.4rem',
        ['@media (max-width:576px)']: {
          // eslint-disable-line no-useless-computed-key
          fontSize: '2rem'
        }
      },
      label: {
        textTransform: 'capitalize'
      },
      outlinedPrimary: {
        border: '1px solid #EAEAEA',
        "&:hover": {
          backgroundColor: colors.blue + ' !important',
          color: '#fff'
        }
      }
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '800px'
      }
    },
    MuiToggleButton: {
      root: {
        flex: 1,
        padding: '9px 6px'
      }
    },
    MuiSnackbar: {
      root: {
        maxWidth: 'calc(100vw - 24px)'
      },
      anchorOriginBottomLeft: {
        bottom: '12px',
        left: '12px',
        '@media (min-width: 960px)': {
          bottom: '50px',
          left: '80px'
        }
      }
    },
    MuiInputBase: {
      input: {
        fontSize: '14px'
      },
      root: {
        margin: '0px',
        '&:before': {
          //underline color when textfield is inactive
          borderBottom: 'none !important',
          height: '0px'
        },
        '&:after': {
          //underline color when textfield is inactive
          borderBottom: 'none !important',
          height: '0px'
        }
      }
    },
    MuiAccordion: {
      root: {
        margin: '0px',
        '&:before': {
          //underline color when textfield is inactive
          backgroundColor: 'none',
          height: '0px'
        },
        '&$expanded': {
          margin: '0px'
        }
      }
    },
    MuiAccordionSummary: {
      root: {
        padding: '0px 24px',
        '@media (max-width:576px)': {
          padding: '0px 6px'
        }
      },
      content: {
        margin: '0px !important'
      }
    },
    MuiAccordionDetails: {
      root: {
        padding: '0'
      }
    },
    MuiFormHelperText: {
      contained: {
        textAlign: 'end'
      }
    }
  }
};
/* harmony default export */ var theme_coreTheme = (coreTheme);
// CONCATENATED MODULE: ./components/snackbar/snackbar.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const iconStyle = {
  fontSize: '22px',
  marginRight: '10px',
  verticalAlign: 'middle'
};

function CloseIcon(props) {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["SvgIcon"], {
    style: {
      fontSize: '22px'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: color,
      d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    })
  });
}

function SuccessIcon(props) {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["SvgIcon"], {
    style: iconStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: color,
      d: "M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10.75,16.518,6.25,12.2l1.4-1.435L10.724,13.7l6.105-6.218L18.25,8.892Z"
    })
  });
}

function ErrorIcon(props) {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["SvgIcon"], {
    style: iconStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: color,
      d: "M16.971,0H7.029L0,7.029V16.97L7.029,24H16.97L24,16.971V7.029L16.971,0Zm-1.4,16.945-3.554-3.521L8.5,16.992,7.079,15.574l3.507-3.566L7,8.536,8.418,7.119,12,10.577l3.539-3.583,1.431,1.431-3.535,3.568L17,15.515Z"
    })
  });
}

function WarningIcon(props) {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["SvgIcon"], {
    style: iconStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: color,
      d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
    })
  });
}

function InfoIcon(props) {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["SvgIcon"], {
    style: iconStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: color,
      d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5"
    })
  });
}

class snackbar_MySnackbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: this.props.open
    });

    _defineProperty(this, "handleClick", () => {
      this.setState({
        open: true
      });
    });

    _defineProperty(this, "handleClose", (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      this.setState({
        open: false
      });
    });
  }

  render() {
    const {
      type,
      message
    } = this.props;

    let icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuccessIcon, {
      color: colors.blue
    });

    let color = colors.blue;
    let messageType = '';
    let actions = [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
      "aria-label": "Close",
      onClick: this.handleClose,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseIcon, {})
    }, "close")];

    switch (type) {
      case 'Error':
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorIcon, {
          color: colors.red
        });
        color = colors.red;
        messageType = "Error";
        break;

      case 'Success':
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuccessIcon, {
          color: colors.blue
        });
        color = colors.blue;
        messageType = "Success";
        break;

      case 'Warning':
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(WarningIcon, {
          color: colors.orange
        });
        color = colors.orange;
        messageType = "Warning";
        break;

      case 'Info':
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoIcon, {
          color: colors.blue
        });
        color = colors.blue;
        messageType = "Info";
        break;

      case 'Hash':
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuccessIcon, {
          color: colors.blue
        });
        color = colors.blue;
        messageType = "Hash";
        let snackbarMessage = 'https://etherscan.io/tx/' + message;
        actions = [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          variant: "text",
          size: "small",
          onClick: () => window.open(snackbarMessage, "_blank"),
          children: "View"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          "aria-label": "Close",
          onClick: this.handleClose,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseIcon, {})
        }, "close")];
        break;

      default:
        icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuccessIcon, {
          color: colors.blue
        });
        color = colors.blue;
        messageType = "Success";
        break;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Snackbar"], {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      open: this.state.open,
      autoHideDuration: 6000,
      onClose: this.handleClose,
      message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          padding: '12px',
          borderLeft: '5px solid ' + color,
          borderRadius: '4px'
        },
        children: [icon, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            display: 'inline-block',
            verticalAlign: 'middle',
            maxWidth: '400px'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "body1",
            style: {
              fontSize: '12px',
              color: color
            },
            children: messageType
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "body1",
            style: {
              fontSize: '10px'
            },
            children: message
          })]
        })]
      }),
      action: actions
    });
  }

}

/* harmony default export */ var snackbar = (snackbar_MySnackbar);
// EXTERNAL MODULE: ./stores/constants/constants.js
var constants = __webpack_require__("hOaT");

// EXTERNAL MODULE: ./stores/index.js + 1 modules
var stores = __webpack_require__("Fu3s");

// CONCATENATED MODULE: ./components/snackbar/snackbarController.jsx


function snackbarController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const emitter = stores["a" /* default */].emitter;

const styles = theme => ({
  root: {}
});

class snackbarController_SnackbarController extends external_react_["Component"] {
  constructor(props) {
    super();

    snackbarController_defineProperty(this, "showError", error => {
      const snackbarObj = {
        snackbarMessage: null,
        snackbarType: null,
        open: false
      };
      this.setState(snackbarObj);
      const that = this;
      setTimeout(() => {
        const snackbarObj = {
          snackbarMessage: error.toString(),
          snackbarType: 'Error',
          open: true
        };
        that.setState(snackbarObj);
      });
    });

    snackbarController_defineProperty(this, "showHash", txHash => {
      const snackbarObj = {
        snackbarMessage: null,
        snackbarType: null,
        open: false
      };
      this.setState(snackbarObj);
      const that = this;
      setTimeout(() => {
        const snackbarObj = {
          snackbarMessage: txHash,
          snackbarType: 'Hash',
          open: true
        };
        that.setState(snackbarObj);
      });
    });

    this.state = {
      open: false,
      snackbarType: null,
      snackbarMessage: null
    };
  }

  componentWillMount() {
    emitter.on(constants["e" /* ERROR */], this.showError);
    emitter.on(constants["h" /* TX_SUBMITTED */], this.showHash);
  }

  componentWillUnmount() {
    emitter.removeListener(constants["e" /* ERROR */], this.showError);
    emitter.removeListener(constants["h" /* TX_SUBMITTED */], this.showHash);
  }

  render() {
    const {
      snackbarType,
      snackbarMessage,
      open
    } = this.state;

    if (open) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(snackbar, {
        type: snackbarType,
        message: snackbarMessage,
        open: true
      });
    } else {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
    }
  }

}

/* harmony default export */ var snackbarController = (Object(styles_["withStyles"])(styles)(snackbarController_SnackbarController));
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// CONCATENATED MODULE: ./theme/light.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { light_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function light_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Create a theme instance.

const theme = Object(styles_["createMuiTheme"])(_objectSpread(_objectSpread({}, theme_coreTheme), {}, {
  palette: _objectSpread(_objectSpread({}, theme_coreTheme.palette), {}, {
    background: {
      default: '#fff',
      paper: '#fff'
    },
    accountButton: {
      default: '#EFEFEF'
    },
    primary: {
      main: '#2F80ED'
    },
    secondary: {
      main: '#DEDEDE'
    },
    type: 'light'
  }),
  overrides: _objectSpread(_objectSpread({}, theme_coreTheme.overrides), {}, {
    MuiButton: _objectSpread(_objectSpread({}, theme_coreTheme.overrides.MuiButton), {}, {
      outlinedPrimary: {
        border: '1px solid #EAEAEA',
        "&:hover": {
          backgroundColor: '#2F80ED !important',
          color: '#fff'
        }
      }
    }),
    MuiInputBase: _objectSpread(_objectSpread({}, theme_coreTheme.overrides.MuiInputBase), {}, {
      root: {
        background: "#fff"
      }
    }),
    MuiOutlinedInput: _objectSpread(_objectSpread({}, theme_coreTheme.overrides.MuiOutlinedInput), {}, {
      notchedOutline: {
        borderColor: "#FFF"
      }
    }),
    MuiSnackbarContent: {
      root: {
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#F8F9FE',
        padding: '0px',
        minWidth: 'auto',
        '@media (min-width: 960px)': {
          minWidth: '500px'
        }
      },
      message: {
        padding: '0px'
      },
      action: {
        marginRight: '0px'
      }
    }
  })
}));
/* harmony default export */ var light = (theme);
// CONCATENATED MODULE: ./theme/dark.js
function dark_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dark_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dark_ownKeys(Object(source), true).forEach(function (key) { dark_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dark_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dark_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Create a theme instance.

const dark_theme = Object(styles_["createMuiTheme"])(dark_objectSpread(dark_objectSpread({}, theme_coreTheme), {}, {
  palette: dark_objectSpread(dark_objectSpread({}, theme_coreTheme.palette), {}, {
    background: {
      default: '#22252E',
      paper: '#2B2E3C'
    },
    primary: {
      main: '#2F80ED'
    },
    type: 'dark'
  }),
  overrides: dark_objectSpread(dark_objectSpread({}, theme_coreTheme.overrides), {}, {
    MuiButton: dark_objectSpread(dark_objectSpread({}, theme_coreTheme.overrides.MuiButton), {}, {
      outlinedPrimary: {
        border: '1px solid #FFFFFF1A',
        "&:hover": {
          backgroundColor: '#2F80ED !important',
          color: '#fff'
        }
      }
    }),
    MuiInputBase: dark_objectSpread(dark_objectSpread({}, theme_coreTheme.overrides.MuiInputBase), {}, {
      root: {
        background: "#fff"
      }
    }),
    MuiOutlinedInput: dark_objectSpread(dark_objectSpread({}, theme_coreTheme.overrides.MuiOutlinedInput), {}, {
      notchedOutline: {
        borderColor: "#FFF"
      }
    }),
    MuiSnackbarContent: {
      root: {
        color: '#fff',
        backgroundColor: '#2B2E3C',
        padding: '0px',
        minWidth: 'auto',
        '@media (min-width: 960px)': {
          minWidth: '500px'
        }
      },
      message: {
        padding: '0px'
      },
      action: {
        marginRight: '0px'
      }
    }
  })
}));
/* harmony default export */ var theme_dark = (dark_theme);
// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  const {
    0: themeConfig,
    1: setThemeConfig
  } = Object(external_react_["useState"])(light);

  const changeTheme = dark => {
    setThemeConfig(dark ? theme_dark : light);
    localStorage.setItem("yearn.finance-dark-mode", dark ? "dark" : "light");
  };

  Object(external_react_["useEffect"])(function () {
    const localStorageDarkMode = window.localStorage.getItem("yearn.finance-dark-mode");
    changeTheme(localStorageDarkMode ? localStorageDarkMode === "dark" : false);
  }, []);
  Object(external_react_["useEffect"])(function () {
    stores["a" /* default */].dispatcher.dispatch({
      type: constants["c" /* CONFIGURE */]
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
    theme: themeConfig,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      changeTheme: changeTheme
    })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(snackbarController, {})]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "94l6":
/***/ (function(module, exports) {

module.exports = require("flux");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Fu3s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./stores/constants/constants.js
var constants = __webpack_require__("hOaT");

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__("MDWq");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// CONCATENATED MODULE: ./stores/accountStore.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class accountStore_Store {
  constructor(dispatcher, emitter) {
    _defineProperty(this, "configure", async () => {// if (window.ethereum) {
      //   window.web3 = new Web3(ethereum);
      //   try {
      //     await ethereum.enable();
      //     var accounts= await web3.eth.getAccounts();
      //     this.setStore({ account: { address: accounts[0] }, web3: window.web3 })
      //     this.emitter.emit(ACCOUNT_CONFIGURED)
      //   } catch (error) {
      //     // User denied account access...
      //   }
      //
      //   this.updateAccount()
      //
      // } else if (window.web3) {
      //   window.web3 = new Web3(web3.currentProvider);
      //   // Acccounts always exposed
      //   web3.eth.sendTransaction({/* ... */});
      // }
      // // Non-dapp browsers...
      // else {
      //   console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      // }
    });

    _defineProperty(this, "updateAccount", () => {
      const that = this;
      const res = window.ethereum.on('accountsChanged', function (accounts) {
        that.setStore({
          account: {
            address: accounts[0]
          }
        });
        that.emitter.emit(constants["a" /* ACCOUNT_CHANGED */]);
        that.emitter.emit(constants["b" /* ACCOUNT_CONFIGURED */]);
      });
    });

    _defineProperty(this, "getWeb3Provider", async () => {
      let web3context = this.getStore('web3context');
      let provider = null;

      if (!web3context) {
        provider = network.providers['1'];
      } else {
        provider = web3context.library.provider;
      }

      if (!provider) {
        return null;
      }

      return new external_web3_default.a(provider);
    });

    _defineProperty(this, "tryConnectWallet", async () => {
      if (window.ethereum) {
        window.web3 = new external_web3_default.a(ethereum);

        try {
          await ethereum.enable();
          var accounts = await web3.eth.getAccounts();
          this.setStore({
            account: {
              address: accounts[0]
            },
            web3: window.web3
          });
          this.emitter.emit(constants["b" /* ACCOUNT_CONFIGURED */]);
        } catch (error) {// User denied account access...
        }
      } // Legacy dapp browsers...
      else if (window.web3) {
          window.web3 = new external_web3_default.a(web3.currentProvider);
          var accounts = await web3.eth.getAccounts();
          this.setStore({
            account: {
              address: accounts[0]
            },
            web3: window.web3
          });
          this.emitter.emit(constants["b" /* ACCOUNT_CONFIGURED */]);
        } // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
          }
    });

    this.dispatcher = dispatcher;
    this.emitter = emitter;
    this.store = {
      account: null,
      web3: null
    };
    dispatcher.register(function (payload) {
      switch (payload.type) {
        case constants["c" /* CONFIGURE */]:
          this.configure(payload);
          break;

        case constants["g" /* TRY_CONNECT_WALLET */]:
          this.tryConnectWallet(payload);
          break;

        default:
          {}
      }
    }.bind(this));
  }

  getStore(index) {
    return this.store[index];
  }

  setStore(obj) {
    this.store = _objectSpread(_objectSpread({}, this.store), obj);
    return this.emitter.emit(constants["f" /* STORE_UPDATED */]);
  }

}

/* harmony default export */ var accountStore = (accountStore_Store);
// CONCATENATED MODULE: ./stores/index.js


const Dispatcher = __webpack_require__("94l6").Dispatcher;

const Emitter = __webpack_require__("/0p4").EventEmitter;

const stores_dispatcher = new Dispatcher();
const stores_emitter = new Emitter();
const stores_accountStore = new accountStore(stores_dispatcher, stores_emitter);
/* harmony default export */ var stores = __webpack_exports__["a"] = ({
  accountStore: stores_accountStore,
  dispatcher: stores_dispatcher,
  emitter: stores_emitter
});

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MDWq":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hOaT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERROR; });
/* unused harmony export CONNECTION_CONNECTED */
/* unused harmony export CONNECTION_DISCONNECTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONNECT_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONFIGURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCOUNT_CONFIGURED; });
/* unused harmony export CONFIGURE_NETWORK_LIST */
/* unused harmony export NETWORK_LIST_CONFIGURED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return STORE_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TRY_CONNECT_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TX_SUBMITTED; });
// GENERAL
const ERROR = 'ERROR';
const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
const CONNECT_WALLET = 'CONNECT_WALLET';
const CONFIGURE = 'CONFIGURE';
const ACCOUNT_CONFIGURED = 'ACCOUNT_CONFIGURED';
const CONFIGURE_NETWORK_LIST = 'CONFIGURE_NETWORK_LIST';
const NETWORK_LIST_CONFIGURED = 'NETWORK_LIST_CONFIGURED';
const STORE_UPDATED = 'STORE_UPDATED';
const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED';
const TRY_CONNECT_WALLET = 'TRY_CONNECT_WALLET';
const TX_SUBMITTED = 'TX_SUBMITTED';

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });