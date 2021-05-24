'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _addons = _interopRequireDefault(require('@storybook/addons'));

var _sketchDownload = _interopRequireDefault(
  require('./components/sketch-download')
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = function _default(options) {
  return _addons.default.register('sketch', function(api) {
    _addons.default.add('sketch/panel', {
      type: 'tool',
      title: 'Sketch',
      match: function match(_ref) {
        var viewMode = _ref.viewMode;
        return viewMode === 'story';
      },
      render: function render() {
        return /*#__PURE__*/ _react.default.createElement(
          _sketchDownload.default,
          {
            api: api,
            options: options
          }
        );
      }
    });
  });
};

exports.default = _default;
