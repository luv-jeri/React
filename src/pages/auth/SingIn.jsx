import React from 'react';
import {
  Container,
  Grid,
  TextInput,
  PasswordInput,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Text,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { At, PhoneCall, MoodSmile } from 'tabler-icons-react';
import { useUser } from '../../context/User.context';

export default function SingIn() {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const { setIsLogged } = useUser();

  const login = () => {
    setIsLogged(true);
  };

  return (
    <Container>
      <Grid
        style={{
          marginTop: '20px',
        }}
        grow
        gutter='xl'
      >
        <Grid.Col span={12}>
          <Text size='xl' weight={700}>
            Hello, Visitor !
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <TextInput
            placeholder='Enter your email. 😀'
            label='Email'
            description='Please Enter a valid Email.'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // error='Please Enter a valid Last name.'
            variant='filled'
            radius='lg'
            size='md'
            required
            icon={<At size={14} />}
            type='email'
          />
        </Grid.Col>

        <Grid.Col md={6}>
          <PasswordInput
            placeholder='Password'
            label='Password'
            description='Password must include at least one letter, number and special character'
            // error='Please entet a password'
            variant='filled'
            radius='lg'
            size='md'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Button
            leftIcon={<MoodSmile size={24} />}
            fullWidth
            variant='subtle'
            color='grape'
            radius='lg'
            size='md'
            onClick={login}
          >
            Sign In
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
