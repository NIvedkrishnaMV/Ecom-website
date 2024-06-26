import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserTable = () => {
    const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/apiu/users')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    })
    
  },[])

  const handleRemove=async(id)=>{
    await axios.delete(`http://localhost:3001/apiu/del/${id}`)
    .then((res)=>{
        console.log(res.data);
        window.location.href='/admin'
        alert('User Removed')
    })

  }
  return (
    <div>
      <Table>
        <TableBody>
           {data?.map((val,i)=>{
             return(
                <TableRow className='bg-white'>
             <TableCell name='uname' width={'20%'} >{val.uname}</TableCell>
             <TableCell width={'20%'}>{val.email}</TableCell>
             <TableCell width={'20%'}>{val.age}</TableCell>
             <TableCell width={'20%'}>{val.UserType}</TableCell>
             <TableCell width={'20%'}>
                 <Button variant='contained' onClick={()=>handleRemove(val._id)} >Remove</Button>
             </TableCell>
         </TableRow>
             )
           })}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserTable
