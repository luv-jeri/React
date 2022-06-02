import React, { useEffect, useState, useRef } from 'react';
import { Input, Grid, Checkbox } from '@mantine/core';

export default function FormField({ i }) {
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
          placeholder='Name of the Field'
          label='Field Name'
          description='Enter the name of the field'
          radius='md'
          size='md'
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
    </Grid>
  );
}
