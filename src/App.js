import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <Aside
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened2}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
          <Text>Application sidebar</Text>
        </Aside>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer Application footer Application footer Application footer
          Application footer Application footer
        </Footer>
      }
      header={
        <Header height={70} p='md'>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened2}
                onClick={() => setOpened2((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
