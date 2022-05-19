import './App.css';
import { useState, useEffect } from 'react';

import { auth } from './firebase';
import // collection,
// doc,
// addDoc,
// getDocs,
// deleteDoc,
// setDoc,
// onSnapshot,
'firebase/firestore';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      setUser(data);
    });
  }, []);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const [user, setUser] = useState(null);
  const google = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user, token);
  };
  return (
    <div className='container'>
      <button onClick={google}>GOOGLE</button>
      {user ? (
        <div
          style={{
            flex: 1,
          }}
        >
          <h1>Hello {user.email}</h1>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <h2>Sign-IN</h2>
          <input
            type='email'
            label='Email'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            label='Password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <h2>Sign-Up</h2>
        <input
          type='email'
          label='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          label='Password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={signUp}>Sign Up</button>
      </div> */}

      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: ' 50px',
          width: '50px',
          borderRadius: '50%',
        }}
        onClick={logout}
      >
        ➕
      </div>
    </div>
  );
}

export default App;
