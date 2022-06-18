import React from 'react';
import { TextInput, Container } from '@mantine/core';
import List from './List';
export default function App() {
  const [search, setSearch] = React.useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <Container>
      <TextInput
        placeholder='Search'
        label='Some Search'
        onChange={handleSearchChange}
        required
      />

      <List toSearch={search}></List>
    </Container>
  );
}
