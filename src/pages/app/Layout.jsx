import React, { useState } from 'react';
import {
  Menu,
  AppShell,
  Navbar,
  Header,
  Footer,
  Avatar,
  Text,
  Divider,
  Paper,
} from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { Settings, Photo, Trash, FilePlus, Star } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../context/Auth.context';
import greeting from '../../utils/greeting';
import CreateForm from './CreateForm.jsx';

const NavCard = ({ title, page }) => {
  const navigate = useNavigate();
  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        cursor: ' pointer',
      }}
      onClick={() => navigate(page)}
    >
      <Avatar size='md'>
        <Star size={24} />
      </Avatar>
      <Text
        style={{
          marginLeft: '1rem',
        }}
      >
        {title}
      </Text>
    </Paper>
  );
};

export default function Layout() {
  const { logout, user } = useAuth();

  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          <Navbar height={600} p='xs' width={{ base: 300 }}>
            <Navbar.Section>Header</Navbar.Section>
            <Navbar.Section grow mt='md'>
              <NavCard title='Create a Form' page='add' />
              <NavCard title='View Form' page='view' />
              <NavCard title='Fill' page='fill' />
            </Navbar.Section>
            <Navbar.Section>Footer</Navbar.Section>
          </Navbar>
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
      <Routes>
        <Route path='/add' element={<CreateForm />}></Route>
        <Route path='/' element={<h1>Welcome to the ""</h1>}></Route>
      </Routes>
    </AppShell>
  );
}
