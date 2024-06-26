import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import './cards.css'
import UserTable from './UserTable'
import ProductTable from './ProductTable'
import Navbar from './Navbar'
import axios from 'axios'


const Admin = () => {
  const handleLogout = async () => {
    try {
      await axios.delete(`http://localhost:3001/apiu/logout`);
      window.location.href='/'
      alert('Logged out')
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <Navbar text={'Admin'} button1Status={'disabled'}  button2={'Products'} button3={'Users'} button4={'View As User'} button2Path={'#product'} button3Path={'#users'} button4Path={'/product'}  fullWidth/><br /><br /><br />
      <div className='flex m-5'>
      <Typography variant='h3'>
        Admin Dashboard
      </Typography>
      <div className='ml-auto'>
        <Button variant='contained' color='warning' onClick={handleLogout} >LogOut</Button>
      </div>
      </div>
      <div id='users' className="usersList">

      <div className='heading'>
        <div>
          <h1>Users</h1>
        </div>
        <div className='addUserButton'>
      <Button variant='contained' href='/adduser'>Add User</Button>
    </div>
      </div>
    <div >
      <Table className='table-container'>
        <TableHead className="th">
          <TableRow className='thd text-white'>
            <TableCell width={'20%'}><b>Username</b></TableCell>
            <TableCell width={'20%'}><b>Email</b></TableCell>
            <TableCell width={'20%'}><b>Age</b></TableCell>
            <TableCell width={'20%'}><b>Status</b></TableCell>
            <TableCell width={'20%'}><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table>
      <TableBody>
          <TableRow>
          <UserTable/>
          </TableRow>
        </TableBody>
      </Table>
    </div>
      </div>


      <div id='products' className="productList">

      <div className='pheading'>
        <div>
          <h1>Products</h1>
        </div>
        <div className='addUserButton'>
      <Button variant='contained' href='/sell'>Add Product</Button>
    </div>
      </div>
    <div >
      <Table className='ptable-container'>
        <TableHead className="th">
          <TableRow className='pthd text-white'>
            <TableCell width={'20%'}><b>Product name</b></TableCell>
            <TableCell width={'20%'}><b>Price</b></TableCell>
            <TableCell width={'20%'}><b>category</b></TableCell>
            <TableCell width={'20%'}><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table>
      <TableBody>
          <TableRow>
          <ProductTable/>
          </TableRow>
        </TableBody>
      </Table>
    </div>
      </div>
    </div>
  )
}

export default Admin
