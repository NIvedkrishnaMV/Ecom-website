import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './navbar.css';
import './cards.css'


const Userdetails = () => {
  



  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/apiu/profile')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    })
    
  },[])
  const handleLogout = async () => {
    try {
      await axios.delete(`http://localhost:3001/apiu/logout`);
      window.location.href='/'
      alert('Logged out')
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit=()=>{
    window.location.href='/edit'

  }

  return (
    <div>
       {data.map((val,i)=>{
        return (
          <div className='ucard-container'>
            <Card className='ucard' elevation={10} width={'40%'} sx={{marginLeft:'30%',marginRight:'30%'}}><br/><br/>
            <div className='ucard-image-content'>
            <CardMedia className='ucard-image'>
              <img src="data:image/jpeg;base64,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"
                alt="" className="ucard-img" />
            </CardMedia><br/>
            </div>
          <CardContent className='ucard-content'>
            
            <Typography variant='h4' color='Highlight'>{val.uname}</Typography>
            <Typography variant='h5' textAlign={'left'} color='GrayText'>Age:{val.age}</Typography>
            <Typography variant='h5' textAlign={'left'} color='GrayText'>Address:{val.address}</Typography>
            <Typography variant='h5' textAlign={'left'} color='GrayText'>Email_ID:{val.email}</Typography>
          </CardContent>
          <CardActions>
          <Button variant='contained' className='ucard-button' color="success" onClick={()=>handleLogout()} style={{fontFamily:'fantasy'}}>LOG OUT</Button>
          <Button variant='contained' className='ucard-button' color="success" href='/product' style={{fontFamily:'fantasy'}}>OK</Button>
          <Button variant='contained' className='ucard-button' color="success" onClick={()=>handleEdit()} style={{fontFamily:'fantasy'}}>EDIT</Button>

          </CardActions>
        </Card>
          </div>
        )
       })}
    </div>
  )
}

export default Userdetails