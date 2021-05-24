import React from 'react';
export interface Options {
    kind: boolean;
    transformAsketch?: <T extends Object>(aSketch: T) => Object;
}
interface SketchPluginProps {
    api: any;
    options: Options;
}
export default class SketchPlugin extends React.Component<SketchPluginProps> {
    state: {
        selected: null;
        expanded: boolean;
    };
    static defaultProps: {
        options: {};
    };
    change: (options: {
        selected: string;
    }) => void;
    onVisibilityChange: (expanded: boolean) => void;
    render(): JSX.Element;
}
export {};
