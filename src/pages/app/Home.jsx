import React, { useState } from 'react';
import {
  Menu,
  AppShell,
  Navbar,
  Header,
  Button,
  Footer,
  Avatar,
  Text,
  Divider,
} from '@mantine/core';
import { At, PhoneCall, MoodSmile } from 'tabler-icons-react';
import {
  Settings,
  Search,
  Photo,
  MessageCircle,
  Trash,
  ArrowsLeftRight,
  FilePlus,
} from 'tabler-icons-react';
import useAuth from '../../context/Auth.context';
import greeting from '../../utils/greeting';

export default function Home() {
  const { logout, user } = useAuth();

  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          <Navbar.Section>
            <FilePlus size={24} />
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          height={60}
          p='xs'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar radius='xl' src={user.DP} alt="it's me" />
            <Text
              style={{
                marginLeft: '1rem',
              }}
              weight={700}
            >
              {greeting()} {user.firstName}
            </Text>
          </div>
          <Menu
            trigger='hover'
            transition='slide-up'
            transitionDuration={100}
            transitionTimingFunction='ease'
          >
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>OK</Menu.Item>
            <Menu.Item icon={<Photo size={14} />}>Profile</Menu.Item>
            <Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              color='red'
              icon={<Trash size={14} />}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Header>
      }
    >
      App here
    </AppShell>
  );
}
