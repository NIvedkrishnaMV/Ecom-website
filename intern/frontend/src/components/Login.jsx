import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Button,  Card,  Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import './Login.css';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate =useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/apiu/log', {
        email,
        password
      });
  
      if (response.status === 200) {
        const user = response.data;
        if (user) {
          const UserType = user.UserType;
          if (UserType === 'admin') {
            navigate('/admin');
            alert('Welcome Admin');
          } else {
            navigate('/product');
            alert("Logged in Successfully");
          }
        } else {
          setError('Invalid user data');
        }
      } else if (response.status === 404) {
        setError(response.data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login-container'>
        <div>
        <Navbar text={'LOGIN'} button1Status={'disabled'} button2Status={'disabled'} button3={'Home'} button3Path={'/'} button4={'Sign up'} button4Path={'/reg'} />
        </div>
          <div className='login-image'>
          <img className=' h-screen' src='https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='Login' />
        </div>
        <div className='login-form'>
        <Card elevation={10} className='login-card'>
          <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <form >
            <TextField
               type="email" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)}
              variant='outlined'
              label='Enter Username or E-mail'
              fullWidth
              margin='normal'
              InputProps={{ style: { borderRadius: 50 } }}
            />
            <TextField
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              variant='outlined'
              label='Enter Password'
              fullWidth
              margin='normal'
              InputProps={{ style: { borderRadius: 50 } }}
            />
          <br />
          <Button onClick={handleSubmit} variant='contained' fullWidth style={{ marginTop: '20px', borderRadius: 50 }}>
              LOGIN
            </Button>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='REMEMBER ME'
                style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}
              />
              <p style={{ textAlign: 'center', marginTop: '10px' }}>FORGOT PASSWORD?</p>
            </FormGroup>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>PRIVACY POLICY</p>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              DON'T HAVE AN ACCOUNT? <Link to='/reg'>REGISTER</Link>
              </p>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          </Card>
        </div>
     </div>
  );
};

export default Login;