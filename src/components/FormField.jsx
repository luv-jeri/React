import React, { useRef, useEffect } from 'react';
import { Input, Grid, Checkbox } from '@mantine/core';

export default function FormField({ i, children }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Grid
      gutter='xl'
      style={{
        marginBottom: '1rem',
        alignItems: 'center',
      }}
    >
      <Grid.Col span={4}>
        <Input
          id='name'
          i={i}
          ref={inputRef}
          placeholder='Name of the Field'
          label='Field Name'
          description='Enter the name of the field'
          radius='md'
          size='md'
          // onChange={(e) => {
          //   // const obj = {
          //   //   ...fields[i],
          //   //   name: e.target.value,
          //   // };
          //   // const temp = [...fields];
          //   // temp[i] = obj;
          //   // setFields(temp);
          //   const obj = {
          //     ...fields[i],
          //     name: e.target.value,
          //   };
          //   fields[i] = obj;
          // }}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Checkbox
          id='isRequired'
          i={i}
          label='Is field is required'
          color='lime'
          radius='lg'
          size='lg'
        />
      </Grid.Col>
      <Grid.Col span={4}>{children}</Grid.Col>
    </Grid>
  );
}
