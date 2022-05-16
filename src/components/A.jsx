import React, { useContext } from 'react';
import { name } from '../App';
import { job } from '../App';

export default function A() {
  const jobWaleContextKiValue = useContext(job);

  return (
    <div>
      <h1>{jobWaleContextKiValue.name}</h1>
      {jobWaleContextKiValue.job.map((el, i) => {
        return <div key={i}>{el}</div>;
      })}
    </div>
  );
}
