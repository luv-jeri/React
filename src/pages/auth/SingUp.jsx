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
  Progress,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { At, PhoneCall, MoodSmile } from 'tabler-icons-react';
import useAuth from '../../context/Auth.context';
import uploader from '../../utils/uploader';
import { useNavigate } from 'react-router-dom';

export default function SingUp() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [DOB, setDOB] = React.useState(new Date());
  const [DP, setDP] = React.useState(null);
  const [uploaded, setUploader] = React.useState(0);

  React.useEffect(() => {
    if (DP) uploader(DP, setUploader);
  }, [DP]);

  const navigate = useNavigate();

  const { signup } = useAuth();

  return (
    <Container>
      {uploaded && uploaded < 100 ? (
        <Progress color='grape' radius='lg' size='lg' value={uploaded} striped animate />
      ) : null}
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
        <Grid.Col md={6}>
          <TextInput
            placeholder='Enter your first name. 😀'
            label='First Name'
            description='Please Enter a valid First name.'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            // error='Please Enter a valid First name.'
            variant='filled'
            radius='lg'
            size='md'
            required
          />
        </Grid.Col>
        <Grid.Col md={6} span={6}>
          <TextInput
            placeholder='Enter your last name. 😀'
            label='Last Name'
            description='Please Enter a valid Last name.'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            // error='Please Enter a valid Last name.'
            variant='filled'
            radius='lg'
            size='md'
            required
          />
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
        <Grid.Col span={12}>
          <TextInput
            placeholder='Enter your phone. 😀'
            label='Phone Number'
            description='Please Enter a valid Phone number.'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            // error='Please Enter a valid Last name.'
            variant='filled'
            radius='lg'
            size='md'
            required
            icon={<PhoneCall size={14} />}
            type='tel'
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
        <Grid.Col md={6}>
          <PasswordInput
            placeholder='Confirm  Password'
            label='Confirm Password'
            description='Password must include at least one letter, number and special character'
            error=''
            variant='filled'
            radius='lg'
            size='md'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <RadioGroup
            label='Gender ?'
            description='Please choose a gender'
            spacing='lg'
            size='md'
            color='violet'
            required
            value={gender}
            onChange={setGender}
          >
            <Radio value='male' label='male' />
            <Radio value='female' label='female' />
            <Radio value='other' label='other' />
          </RadioGroup>
        </Grid.Col>
        <Grid.Col md={6}>
          <input
            type='file'
            onChange={(e) => {
              setDP(e.target.files[0]);
            }}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <DatePicker
            placeholder='DOB'
            label='Happy Bday ?'
            value={DOB}
            onChange={setDOB}
            required
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Checkbox
            label='I agree to sell my privacy'
            color='grape'
            radius='lg'
            size='md'
            value={terms}
            onChange={() => setTerms(!terms)}
          />
        </Grid.Col>
        <Grid.Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            leftIcon={<MoodSmile size={24} />}
            fullWidth
            variant='subtle'
            color='grape'
            radius='lg'
            size='md'
            onClick={() => {
              signup({
                firstName,
                lastName,
                email,
                phone,
                password,
                confirmPassword,
                DOB,
                gender,
                terms,
              });
            }}
          >
            Sign Up
          </Button>
          <h6>or</h6>
          <Button
            leftIcon={<MoodSmile size={24} />}
            fullWidth
            variant='subtle'
            color='grape'
            radius='lg'
            size='md'
            onClick={() => {
              navigate('/');
            }}
          >
            Sign In
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
