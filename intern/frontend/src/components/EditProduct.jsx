import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const params= useParams();
    const [pname,setPname]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [img,setImg]=useState('')
    const [description,setDescription]=useState('')
    const [error,setError]=useState(null)
    const navigate=useNavigate()
    // console.log(params.id);
    const [data,setData]=useState([]);
    const id=params.id;
    useEffect(()=>{
        
      axios.get(`http://localhost:3001/apip/product/${id}`)
      .then((res)=>{
        console.log(res.data);
        setData(res.data);
      })
      
    },[])
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    
    //     try {
    //       const response = await axios.put(`http://localhost:3001/apip/edit/${id}`, {
    //         pname,
    //         price,
    //         category,
    //         img,
    //         description
    //       })
    
    //       if (response.status === 200) {
    //         console.log('sold item!');
    //         alert('Your ITEM has been ADDED')
    //         navigate('/admin')
    //       } else {
    //         setError(response.data);
    //       }
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //   };
  return (
    <div>
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
        

        <Button variant='contained'  >SELL</Button>&nbsp;&nbsp;
        <Button variant='contained' href='/admin' >CANCEL</Button><br/><br/>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
        </Card>
    </div>
    </div>
  )
}

export default EditProduct
