# react-resize-aware

It does one thing, it does it well: listens to resize events on any HTML element.

`react-resize-aware` is a zero dependency, **~400 bytes** React library you can use to detect resize events without relying on intervals, loops, DOM manipulation detection or CSS redraws.

**It takes advantage of the `resize` event on the `HTMLObjectElement`, works on any browser I know of, and it's super lightweight.**

## Installation

```
yarn add react-resize-aware
```

or with npm:

```
npm install --save react-resize-aware
```

## Usage

The API is simple yet powerful, the `ResizeAware` component expects a function as `children` ([render-prop](https://reactjs.org/docs/render-props.html)):

```jsx
import React from 'react';
import ResizeAware from 'react-resize-aware';

const App = () => (
  <ResizeAware>
    {({ ResizeListener, sizes }) => (
      <div style={{ position: 'relative' }}>
        <ResizeListener />
        Your content here. (div sizes are {sizes.width} x {sizes.height})
      </div>
    )}
  </ResizeAware>
);
```

> **Heads up!**: Make sure to assign a `position != initial` to the HTMLElement you want to target (`relative`, `absolute`, or `fixed` will work).

## API

The render-prop provides an object containing two properties:

### `ResizeListener`

This is an invisible component that must be placed as direct-child of the HTMLElement you want to listen the resize events of.

The component is not going to interfer with your layouts so don't worry.

### `sizes`

This object contains the `width` and `height` properties, these properties are going to be `null` before the component rendered, and will return a `number` after the component rendered.

## Custom `reporter`

You can customize the properties of the `sizes` object by assigning a custom `reporter` property to the `ResizeAware` component.

```jsx
const customReporter = element => ({
  clientWidth: target != null ? target.clientWidth : null,
})

<ResizeAware reporter={customReporter}>
  {({ ResizeListener, sizes }) => (
      <div style={{ position: 'relative' }}>
          <ResizeListener />
          clientWidth = {sizes.clientWidth}
      </div>
  )}
</ResizeAware>
```

The above example will report the `clientWidth` rather than the default `offsetWidth` and `offsetHeight`.
