import React, { useRef, useEffect } from 'react';
import { Input, Grid, Checkbox, Select, NativeSelect, Textarea } from '@mantine/core';

export default function FormField({ i, children }) {
  const inputRef = useRef();
  const [showOptions, setShowOptions] = React.useState(true);

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
      <Grid.Col span={3}>
        <Input
          id='name'
          i={i}
          ref={inputRef}
          placeholder='Name of the Field'
          label='Field Name'
          description='Enter the name of the field'
          radius='md'
          size='md'
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <NativeSelect
          id='type'
          i={i}
          placeholder='Pick one type'
          data={[
            { value: 'text', label: 'Text' },
            { value: 'number', label: 'Number' },
            { value: 'email', label: 'Email' },
            { value: 'password', label: 'Password' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'radio', label: 'Radio Button' },
            { value: 'dropdown', label: 'Drop Down' },
          ]}
          searchable
          onChange={(e) => {
            setShowOptions(e.target.value === 'dropdown' || e.target.value === 'radio');
          }}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <Checkbox
          id='isRequired'
          i={i}
          label='Is field is required'
          color='lime'
          radius='lg'
          size='lg'
        />
      </Grid.Col>
      {showOptions ? (
        <Grid.Col span={3}>
          <Textarea placeholder='Options' label='Options' required />
        </Grid.Col>
      ) : null}
    </Grid>
  );
}
