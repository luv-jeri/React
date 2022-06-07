import React from 'react';
import { Button, Text } from '@mantine/core';
const Test = ({ value }) => {
  const [state, setState] = React.useState(0);
  console.log('render Test');
  return (
    <div>
      {state}
      <h1>Test : {value}</h1>
      <Button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default React.memo(Test);
