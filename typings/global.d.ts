interface PageSymbol {}

interface Page {
  layers: PageSymbol[];
}

interface Window {
  saveCurrent: (title: string, options: Options) => void;

  page2layers: {
    getPage: (options: {
      width: number;
      height: number;
      title: string;
    }) => Page;
    getSymbol: (options: {
      fixPseudo: boolean;
      removePreviewMargin: boolean;
    }) => PageSymbol;
  };
}
