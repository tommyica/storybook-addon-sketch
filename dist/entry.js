'use strict';

var _downloadFile = _interopRequireDefault(require('./download-file'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

window.saveCurrent = function(title, options) {
  var page2layers = document.createElement('script');
  page2layers.src =
    'https://unpkg.com/story2sketch@1.5.0/lib/browser/page2layers.bundle.js';
  page2layers.type = 'text/javascript';

  page2layers.onload = function() {
    var page = window.page2layers.getPage({
      title: title,
      width: 1920,
      height: 5000
    });
    page.layers = [
      window.page2layers.getSymbol({
        fixPseudo: true,
        removePreviewMargin: true
      })
    ];
    (0, _downloadFile.default)(
      ''.concat(title, '.asketch.json'),
      page,
      options
    );
  };

  document.head.appendChild(page2layers);
};
