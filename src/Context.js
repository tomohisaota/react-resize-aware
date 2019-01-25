// @flow
import * as React from 'react';

type OnResize = (React.ElementRef<any>) => void;

// This is used just to pass the `onResize` function to
// the child `ResizeListener` component
export default React.createContext /*::<?OnResize>*/();
