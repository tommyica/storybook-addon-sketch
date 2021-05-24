import { saveAs } from 'file-saver';
import { Options } from './components/sketch-download';

const downloadFile = (file: string, json: object, options: Options) => {
  if (options.transformAsketch) {
    json = options.transformAsketch(json);
  }
  const blob = new Blob([JSON.stringify(json)], {
    type: 'text/plain;charset=utf-8'
  });

  saveAs(blob, file);
};

export default downloadFile;
