import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, Pagination } from '@mui/material';

const Cardlist = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    axios.get('http://localhost:3001/apic/view')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:3001/apic/delete/${_id}`);
      setProducts(products.filter((product) => product._id !==_id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  if (products.length === 0) {
    return (
      <div>
        <h1 className='flex justify-center'>No Products Found</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: 'fantasy' }}>
                CART
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <TableContainer className='ctable-container'>
          <Table className='ctable' sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={'25%'}><b>Title</b></TableCell>
                <TableCell width={'25%'} ><b>Price</b></TableCell>
                <TableCell width={'25%'} ><b>Category</b></TableCell>
                <TableCell width={'25%'} ><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((val, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">{val.pname}</TableCell>
                    <TableCell>{val.price}</TableCell>
                    <TableCell>{val.category}</TableCell>
                    <TableCell>
                      <div className='flex'>
                        <Button sx={{width:100}} variant='contained' onClick={() => handleDelete(val._id)} >remove</Button>&nbsp;
                        <Button variant='contained' href='/buy' > Buy now</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(products.length / rowsPerPage)}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          sx={{ mt: 2 }}
        />
        <Button variant='contained' href='/product' >Continue Shoping</Button>
      </div>
    );
  }
};

export default Cardlist;