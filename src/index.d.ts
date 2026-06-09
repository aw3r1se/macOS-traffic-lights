/**
 * Each export resolves to whatever your bundler's SVG loader returns for an
 * `import` of a `.svg` file. With the most common setups (Vite, webpack
 * `asset/resource`, etc.) that is a URL `string`, which is what these types
 * assume. If you use a loader that returns something else (e.g. SVGR returns a
 * React component), cast the imports accordingly.
 */
declare const unfocused: string;

declare const closeDefault: string;
declare const closeHover: string;
declare const closeActive: string;

declare const minimizeDefault: string;
declare const minimizeHover: string;
declare const minimizeActive: string;

declare const maximizeDefault: string;
declare const maximizeHover: string;
declare const maximizeActive: string;

export {
    unfocused,
    closeDefault,
    closeHover,
    closeActive,
    minimizeDefault,
    minimizeHover,
    minimizeActive,
    maximizeDefault,
    maximizeHover,
    maximizeActive,
};

export interface ButtonStates {
    default: string;
    hover: string;
    active: string;
}

export interface TrafficLights {
    unfocused: string;
    close: ButtonStates;
    minimize: ButtonStates;
    maximize: ButtonStates;
}

export declare const trafficLights: TrafficLights;

export default trafficLights;
