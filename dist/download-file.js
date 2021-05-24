'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _fileSaver = require('file-saver');

var downloadFile = function downloadFile(file, json, options) {
  if (options.transformAsketch) {
    json = options.transformAsketch(json);
  }

  var blob = new Blob([JSON.stringify(json)], {
    type: 'text/plain;charset=utf-8'
  });
  (0, _fileSaver.saveAs)(blob, file);
};

var _default = downloadFile;
exports.default = _default;
