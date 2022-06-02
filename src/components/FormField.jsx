import React, { useEffect, useState } from 'react';
import { Input, Grid, Checkbox } from '@mantine/core';

export default function FormField({ fieldsArr, index, setFields }) {
  const [fieldData, setFieldData] = useState({
    name: '',
    isRequired: false,
  });

  useEffect(() => {
    const temp = [...fieldsArr];
    temp[index] = fieldData;
    setFields(temp);
  }, [fieldData]);

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
          placeholder='Name of the Field'
          label='Field Name'
          description='Enter the name of the field'
          radius='md'
          size='md'
          onChange={(e) => {
            setFieldData({
              ...fieldData,
              name: e.target.value,
            });
          }}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Checkbox
          onChange={(event) => {
            setFieldData({
              ...fieldData,
              isRequired: event.currentTarget.checked,
            });
          }}
          label='Is field is required'
          color='lime'
          radius='lg'
          size='lg'
        />
      </Grid.Col>
    </Grid>
  );
}
