import React from 'react';
import { AppShell, Navbar, Header, Button } from '@mantine/core';
import { At, PhoneCall, MoodSmile } from 'tabler-icons-react';
import useAuth from '../../context/Auth.context';
export default function Home() {
  const { logout, user } = useAuth();

  console.log(user);
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
          <Button
            leftIcon={<MoodSmile size={24} />}
            fullWidth
            variant='subtle'
            color='grape'
            radius='lg'
            size='md'
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
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
