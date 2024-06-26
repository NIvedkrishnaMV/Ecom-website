import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ProductTable = () => {
    const[data,setData]=useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/apip/products')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  const handleRemove=async(id)=>{
    await axios.delete(`http://localhost:3001/apip/del/${id}`)
    .then((res)=>{
        console.log(res.data);
        window.location.href='/admin'
        alert('Item Removed')
    })

  }
  const navigate=useNavigate()
  const handleEdit=(id)=>{
    // console.log(id)
    navigate(`/editProduct/${id}`)
  }

  
  return (
    <div>
      <Table>
        <TableBody>
           {data?.map((val,i)=>{
             return(
                <TableRow className='bg-white'>
             <TableCell name='uname' width={'25%'} >{val.pname}</TableCell>
             <TableCell width={'25%'}>{val.price}</TableCell>
             <TableCell width={'25%'}>{val.category}</TableCell>
             <TableCell width={'25%'}>
                 <Button variant='contained' onClick={()=>handleRemove(val._id)} >Remove</Button>&nbsp;
                 <Button variant='contained' onClick={()=>handleEdit(val._id)} >Edit</Button>
             </TableCell>
         </TableRow>
             )
           })}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProductTable
