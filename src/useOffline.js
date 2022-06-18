/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export default function useOffline(key, intiValue) {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    return intiValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
