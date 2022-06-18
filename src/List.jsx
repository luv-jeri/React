import React, { useMemo, useDeferredValue } from 'react';

export default function List({ toSearch }) {
  // ! value of deferred value is memoized and will not change until toSearch changes (this is a performance optimization)
  const deferredValue = useDeferredValue(toSearch);

  const data = useMemo(() => {
    const data = [];
    const items = 1000;

    for (let i = 0; i < items; i++) {
      data.push(deferredValue);
    }

    return data;
  }, [deferredValue]);

  React.useEffect(() => {
    console.log('toSearch ->', toSearch);
    console.log('deferredValue ->', deferredValue);
  }, [toSearch, deferredValue]);

  return (
    <div>
      {data.map((el) => {
        return <div>{el}</div>;
      })}
    </div>
  );
}
