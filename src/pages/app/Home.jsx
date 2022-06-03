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
  TextInput,
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
import FormField from '../../components/FormField';
import { showNotification } from '@mantine/notifications';
const Getter = ({ children }) => {
  console.log(children);
  return children;
};
export default function Home() {
  const { logout, user } = useAuth();

  const [fields, setFields] = useState([{}]);

  const addField = () => {
    const lastEl = fields.at(-1); //`  fields[fields.length - 1];
    if (lastEl && !lastEl.name) {
      return showNotification({
        title: 'Error',
        message: 'Please fill the previous field',
      });
    }

    setFields([...fields, {}]);
  };

  const filedHandler = (e) => {
    const i = parseInt(e.target.getAttribute('i'));
    //` EXTRA MUST BE CHECKED
    if (e.target.id === 'name' && e.target.value === '') {
      // delete fields[e.target.i];
      const temp = [...fields];
      temp.splice(i, 1);
      setFields(temp);
    }
    // ` Real Code
    const obj = {
      ...fields[i],
      [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    fields[i] = obj;
  };

  const attendanceForm = [
    {
      name: 'Name',
      isRequired: true,
      type: 'text', // 'text', 'number', 'email', 'password', 'checkbox', 'radio', 'select', 'textarea'
      options: [],
    },
  ];

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
      {/* {attendanceForm.map((el, index) => {
        return (
          <div>
            <TextInput placeholder={el.name} label={el.name} required={el.isRequired} />
          </div>
        );
      })} */}

      <div
        onChange={filedHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addField();
          }
        }}
      >
        {fields.map((el, index) => {
          return <FormField key={index} i={index}></FormField>;
        })}
      </div>
      <Button onClick={addField}>Add Fields</Button>
    </AppShell>
  );
}
