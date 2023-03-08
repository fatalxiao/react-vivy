"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  _parseModelNameSpace: true,
  useStoreState: true,
  useModelState: true,
  useModelActions: true,
  useModel: true,
  useGlobalReducers: true
};
exports._parseModelNameSpace = _parseModelNameSpace;
exports.useGlobalReducers = useGlobalReducers;
exports.useModel = useModel;
exports.useModelActions = useModelActions;
exports.useModelState = useModelState;
exports.useStoreState = useStoreState;
var _reactRedux = require("react-redux");
Object.keys(_reactRedux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactRedux[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactRedux[key];
    }
  });
});
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Parse model nameSpace
 * @param modelOrNameSpace
 * @returns {{nameSpace}|*}
 */
function _parseModelNameSpace(modelOrNameSpace) {
  if (_typeof(modelOrNameSpace) === 'object' && modelOrNameSpace !== null && modelOrNameSpace !== void 0 && modelOrNameSpace.hasOwnProperty('nameSpace') && typeof (modelOrNameSpace === null || modelOrNameSpace === void 0 ? void 0 : modelOrNameSpace.nameSpace) === 'string') {
    return modelOrNameSpace.nameSpace;
  }
  return modelOrNameSpace;
}

/**
 * A hook to access all vivy store's state.
 * @returns {*}
 */
function useStoreState() {
  return (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
}

/**
 * A hook to access the vivy store's state.
 * @param arg
 * @returns {*}
 */
function useModelState(arg) {
  if (typeof arg === 'function') {
    return (0, _reactRedux.useSelector)(arg);
  }
  var nameSpace = _parseModelNameSpace(arg);
  return (0, _reactRedux.useSelector)(function (state) {
    return state[nameSpace];
  });
}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param arg
 * @returns {{}}
 */
function useModelActions(arg) {
  var _useDispatch;
  if (typeof arg === 'function') {
    return arg((0, _reactRedux.useDispatch)());
  }
  var nameSpace = _parseModelNameSpace(arg);
  return (_useDispatch = (0, _reactRedux.useDispatch)()) === null || _useDispatch === void 0 ? void 0 : _useDispatch[nameSpace];
}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param arg
 * @returns {[]}
 */
function useModel(arg) {
  return [useModelState(arg), useModelActions(arg)];
}

/**
 * A hook to access the vivy store's global reducers.
 * @returns {{}}
 */
function useGlobalReducers() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return Object.fromEntries(Object.entries(dispatch).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return dispatch.hasOwnProperty(key) && typeof value === 'function';
  }));
}