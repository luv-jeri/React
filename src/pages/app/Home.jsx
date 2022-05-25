import React from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';
import { At, PhoneCall, MoodSmile } from 'tabler-icons-react';

export default function Home() {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          <Navbar.Section>{/* Header with logo */}</Navbar.Section>
          <Navbar.Section grow mt='md'></Navbar.Section>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <h1>Its a header</h1>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
