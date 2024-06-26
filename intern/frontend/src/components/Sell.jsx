import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import {  } from '@mui/material/styles/cssUtils'
import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sell = () => {
    const [pname,setPname]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [img,setImg]=useState('')
    const [description,setDescription]=useState('')
    const [error,setError]=useState(null)
    const navigate=useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/apip/sell', {
            pname,
            price,
            category,
            img,
            description
          });
    
          if (response.status === 200) {
            console.log('sold item!');
            alert('Your ITEM has been ADDED')
            navigate('/product')
          } else {
            setError(response.data);
          }
        } catch (error) {
          setError(error.message);
        }
      };
  return (
    <div className='App'>
        <Card elevation={10} 
        className='login-card' sx={{marginLeft:'35%',marginRight:'35%'}}><br/><br/>
        <form>
            <Typography variant='h4'>SELL</Typography><br/>
        <TextField variant='outlined' 
              margin='normal'
              InputProps={{ style: { borderRadius: 50 } }} 
              value={pname} 
              onChange={(e) => setPname(e.target.value)}
              label='Product Name'/>
        <TextField variant='outlined' margin='normal'
              InputProps={{ style: { borderRadius: 50 } }}
              value={price} 
              onChange={(e) => setPrice(e.target.value)}
              label='Price'/><br/>
              <FormControl fullWidth>
              <InputLabel id='select-label'>Category</InputLabel>
        <Select margin='normal' labelId='select-label' InputProps={{ style: { borderRadius: 50 } }} onChange={(e) => setCategory(e.target.value)} >
         <MenuItem value={`men's clothing`} >Men's clothing</MenuItem>
         <MenuItem value={`women's clothing`} >Women's clothing</MenuItem>
         <MenuItem value={`electronics`} >Electronics</MenuItem>
         <MenuItem value={`jewelery`} >Jewelwry</MenuItem>
        </Select>
              </FormControl>
              
              <br/>
        <TextField

            variant='outlined' margin='normal'
               
              fullWidth multiline
              value={img} 
              onChange={(e) => setImg(e.target.value)} 
              label='\image URL'/><br/>
              <TextField
              variant='outlined' margin='normal'
              fullWidth multiline minRows={2}
              label='Description'
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              /><br/>
        

        <Button variant='contained' onClick={handleSubmit} >SELL</Button>&nbsp;&nbsp;
        <Button variant='contained' href='/product' >CANCEL</Button><br/><br/>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
        </Card>
    </div>
  )
}

export default Sell
