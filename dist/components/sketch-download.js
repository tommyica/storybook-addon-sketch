'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _urlJoin = _interopRequireDefault(require('url-join'));

var _components = require('@storybook/components');

var _downloadFile = _interopRequireDefault(require('../download-file'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var downloadKind = function downloadKind(api, options) {
  return function() {
    var withoutIndex = window.location.pathname
      .split('/')
      .slice(0, -1)
      .join('/');
    var baseUrl = (0, _urlJoin.default)(window.location.origin, withoutIndex);
    var kind = api
      .getCurrentStoryData()
      .kind.replace(/ /g, '_')
      .replace(/\//g, '+');
    var file = kind + '.asketch.json';
    var url = (0, _urlJoin.default)(baseUrl, 'sketch', file);
    fetch(url)
      .then(function(data) {
        return data.json();
      })
      .then(function(json) {
        return (0, _downloadFile.default)(file, json, options);
      });
  };
};

var downloadCurrent = function downloadCurrent(api, options) {
  return function() {
    var iframe = document.querySelector('iframe');

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.saveCurrent(api.getCurrentStoryData().id, options);
    }
  };
};

var createBackgroundSelectorItem = function createBackgroundSelectorItem(
  id,
  click
) {
  return {
    id: id,
    title: id,
    onClick: click,
    value: id
  };
};

var SketchPlugin = /*#__PURE__*/ (function(_React$Component) {
  _inherits(SketchPlugin, _React$Component);

  var _super = _createSuper(SketchPlugin);

  function SketchPlugin() {
    var _this;

    _classCallCheck(this, SketchPlugin);

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), 'state', {
      selected: null,
      expanded: false
    });

    _defineProperty(_assertThisInitialized(_this), 'change', function(options) {
      return _this.setState({
        selected: options.selected,
        expanded: false
      });
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'onVisibilityChange',
      function(expanded) {
        if (_this.state.expanded !== expanded) {
          _this.setState({
            expanded: expanded
          });
        }
      }
    );

    return _this;
  }

  _createClass(SketchPlugin, [
    {
      key: 'render',
      value: function render() {
        var Button = function Button(props) {
          return /*#__PURE__*/ _react.default.createElement(
            _components.IconButton,
            _extends({}, props, {
              title: 'Download Sketch File'
            }),
            /*#__PURE__*/ _react.default.createElement(_components.Icons, {
              icon: 'download'
            })
          );
        };

        if (!this.props.options.kind) {
          return /*#__PURE__*/ _react.default.createElement(Button, {
            onClick: downloadCurrent(this.props.api, this.props.options)
          });
        }

        var links = [
          createBackgroundSelectorItem(
            'Download Sketch files',
            downloadKind(this.props.api, this.props.options)
          ),
          createBackgroundSelectorItem(
            'Download Sketch Files for current story configuration',
            downloadCurrent(this.props.api, this.props.options)
          )
        ];
        return /*#__PURE__*/ _react.default.createElement(
          _components.WithTooltip,
          {
            placement: 'top',
            trigger: 'click',
            tooltipShown: this.state.expanded,
            onVisibilityChange: this.onVisibilityChange,
            tooltip: /*#__PURE__*/ _react.default.createElement(
              _components.TooltipLinkList,
              {
                links: links
              }
            ),
            closeOnClick: true
          },
          /*#__PURE__*/ _react.default.createElement(Button, null)
        );
      }
    }
  ]);

  return SketchPlugin;
})(_react.default.Component);

exports.default = SketchPlugin;

_defineProperty(SketchPlugin, 'defaultProps', {
  options: {}
});
