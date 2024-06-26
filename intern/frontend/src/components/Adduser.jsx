import { Button, Card, TextField, Grid } from '@mui/material';
import React, {  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file for additional styles
import Navbar from './Navbar';
import axios from 'axios';


const Adduser = (props) => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    const navigate= useNavigate()
  
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
  
      try {
        const response = await axios.post('http://localhost:3001/apiu/reg', {
          uname,
          email,
          password,
          age,
          address
        });
  
        if (response.status === 200) {
          console.log('User registered successfully!');
          alert('Registered Successfully')
          navigate('/admin')
        } else {
          setError(response.data);
        }
      } catch (error) {
        setError(error.message);
      }    
    };
  
  
    return (
      <div className='registration-container'>
        <div>
          <Navbar text={'Add User'} button1Status={'disabled'} button2Status={'disabled'}  button3={'Home'} button3Path={'/'} button4={'Log in'} button4Path={'/log'} />
        </div>
        <div className='registration-image'>
          <img className='h-screen' src='https://images.pexels.com/photos/3760081/pexels-photo-3760081.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Registration' />
        </div>
        <div className="registration-form">
        <Card elevation={10} className='registration-card'>
        <form className='registration-card' onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Registration Page</h2>
    
        <Grid container spacing={2}>
        <Grid item xs={6}>
                <TextField type="text" variant='outlined' margin='normal' InputProps={{ style: { borderRadius: 50 } }}  label='Enter Username' value={uname} onChange={(e) => setUname(e.target.value)} ></TextField>
  
        </Grid>
        <br />
      
        <Grid item xs={6}>
                <TextField type="email" variant='outlined' margin='normal' InputProps={{ style: { borderRadius: 50 } }}  label='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} ></TextField>
  
        </Grid>
        <br />
      
        <Grid item xs={6}>
                <TextField type="password" variant='outlined' margin='normal' InputProps={{ style: { borderRadius: 50 } }}  label='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} ></TextField>
  
        </Grid>
        <br />
      
        <Grid item xs={6}>
                <TextField type="number" variant='outlined' margin='normal' InputProps={{ style: { borderRadius: 50 } }}  label='Enter age' value={age} onChange={(e) => setAge(e.target.value)} ></TextField>
  
        </Grid>
        <br />
      
        <Grid item xs={12}>
                <TextField type="text" fullWidth multiline minRows={2} variant='outlined' margin='normal'  label='Enter address' value={address} onChange={(e) => setAddress(e.target.value)} ></TextField>
  
        </Grid>
        <br />
        </Grid>
        <Button type="submit">Submit</Button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
        </Card>
        </div>
      </div>
    );
  };
  
  export default Adduser;