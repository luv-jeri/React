import React from 'react';
import { TextInput, Container } from '@mantine/core';
import useOffline from './useOffline';
export default function App() {
  const [search, setSearch] = useOffline('search', '');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <Container>
      s
      <TextInput
        placeholder='Search'
        label='Some Search'
        onChange={handleSearchChange}
        required
        value={search}
      />
    </Container>
  );
}
