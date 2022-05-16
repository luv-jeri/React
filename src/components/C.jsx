import React, { useContext } from 'react';
import { count } from '../App';

export default function C() {
  const countContext = useContext(count);
  return <div> Count - {countContext.count} 😀</div>;
}
