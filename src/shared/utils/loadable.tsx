import { lazy, Suspense } from 'react';

import { Spin } from 'antd';

export function Loading() {
  return (
    <div className="center2 flex h-screen">
      <Spin />
    </div>
  );
}

export const loadable = (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  importFunc: Promise<{ default: any }>,
  { fallback } = { fallback: <Loading /> },
) => {
  const LazyComponent = lazy(() => importFunc);
  return function (props: any) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};
