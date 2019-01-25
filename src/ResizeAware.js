// @flow
import * as React from 'react';
import ResizeListener from './ResizeListener';
import Context from './Context';

const defaultReporter = (target: ?HTMLElement) => ({
  width: target != null ? target.offsetWidth : null,
  height: target != null ? target.offsetHeight : null,
});

type Props = {
  children: ({
    ResizeListener: typeof ResizeListener,
    sizes: Object,
  }) => React.Node,
  reporter: typeof defaultReporter,
};

export default function ResizeAware({
  children,
  reporter = defaultReporter,
}: Props) {
  const [sizes, setSizes] = React.useState({ width: null, height: null });
  const onResize = ref => setSizes(reporter(ref.current));

  return (
    <Context.Provider value={onResize}>
      {children({ ResizeListener, sizes })}
    </Context.Provider>
  );
}
