import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './navbar.css'
import axios from 'axios'
import './cards.css'


const Productlist = () => {

  // side navbar dropdown code
    const[HomeOpen,setHomeOpen]=useState(false)
    const[categoryOpen,setcategoryOpen]=useState(false)
    const handleDropdown=(index)=>{
        if(index===1){
            setHomeOpen(!HomeOpen)
            setcategoryOpen(false)
        }
        else if(index===2){
            setcategoryOpen(!categoryOpen)
            setHomeOpen(false)

        }
      }

//  search bar filter code
  
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  // side-navbar category filter code
  const [category, setCategory] = useState('');
  const handleCategory = (index) => {
    if(index===1){
      setCategory('');
    }else if(index===2){
      setCategory("men's clothing");
    }
    else if(index===3){
      setCategory("jewelery");
    }
    else if(index===4){
      setCategory("electronics");
    }
    else if(index===5){
      setCategory("women's clothing");
    }
  }
  // logout function
  const handleLogout = async () => {
    try {
      await axios.delete(`http://localhost:3001/apiu/logout`);
      window.location.href='/'
      alert('Logged out')
    } catch (err) {
      console.log(err);
    }
  };
  
  // add-to-cart backend

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

  const handleAddToCart = (val) => {
    const data = {
      pname: val.pname,
      price: val.price,
      category: val.category
    };
  
    axios.post('http://localhost:3001/apic/add', data)
     .then((response) => {
        console.log(response.data);
        alert('Item Added to cart');
      })
     .catch((error) => {
        console.error(error);
      });
  };
  return (
<div>
  <header>


    {/* navbar */}

    <nav id='nav' class="static top-0 left-0 w-screen shadow-lg p-6">          
      <div className="flex justify-between">
        <div>
        <Typography variant='h4' color={'whitesmoke'} id='products' className='justify-center' >Products</Typography>
        </div>
        <div className='flex justify-end'>          
           
            {/* search bar */}
            <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(handleSearch)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />


                  <Button
                    disableRipple
                    disabled
                  >
                    
                  </Button>
            </div>
        </div>
      </div>          
    </nav>     
  </header>




  <body>


    <div className="body flex">

      {/* side-navbar */}
      <div id='sidenav'
     class="static  top-auto m-auto left-1 min-w-60 min-h-screen shadow-lg p-6 rounded-lg ">
        <div class=' mb-3'>
        <Button variant='contained'onClick={()=>handleDropdown(1)} fullWidth>Home</Button>
            {HomeOpen && (
                <ul class="list-none" className='bg-blue-500' >
                    <li className='rounded-md'><Button href='/home' fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Home</Button></li>
                    <li className='mt-2 rounded-md'><Button href='/home' fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >About</Button></li>
                    <li className='mt-2 rounded-md'><Button href='/home' fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Contact us</Button></li>
                </ul>
            )}
        </div>
        <div class='mb-3'>
            <Button variant='contained'onClick={()=>handleDropdown(2)} fullWidth>Category</Button>
            {categoryOpen && (
                <ul class=" list-none" className='bg-blue-500' >
                    <li className='rounded-md'><Button onClick={()=>handleCategory(1)} fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >All</Button></li>
                    <li className='mt-2 rounded-md'><Button onClick={()=>handleCategory(2)} fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Men's Clothing</Button></li>
                    <li className='mt-2 rounded-md'><Button onClick={()=>handleCategory(3)} fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Jewelery</Button></li>
                    <li className='mt-2 rounded-md'><Button onClick={()=>handleCategory(4)} fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Electronics</Button></li>
                    <li className='mt-2 rounded-md'><Button onClick={()=>handleCategory(5)} fullWidth id='sidenavbutton' disableRipple sx={{color:'white'
                    }} >Women's Clothing</Button></li>
                </ul>
            )}
        </div>
        <div className="mb-3">
            <Button variant='contained' href='/cart' fullWidth>Cart</Button>
        </div>
        <div class="mb-3">
            <Button variant='contained' href='/user' fullWidth>User profile</Button>
        </div>
        <div className='mb-3'>
        <Button
        
        variant='contained'
        href='/sell'
      >SELL YOUR PRODUCTS
      </Button>
        </div>
        <div >
            <Button variant='contained' onClick={()=>handleLogout()} fullWidth>Log Out</Button>
        </div>
      </div>


      {/* product display part */}
      <div id='product-container' className="h-screen mt-2 flex-1 p-4">
        <Typography variant='h3' sx={{fontFamily:'fantasy'}}>Products</Typography>
        
        <Grid className='mt-4' container spacing={2}>
          {
            data
            .filter((val)=>{
              if(searchTerm === ''){
                return val;
              }
              else if(val.pname.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .filter((val)=>{
              if(category === ''){
                return val;
              }else if(val.category.toLowerCase()===category.toLowerCase()){
                return val;
              }
            })
            .map((val, i) => {
              return (
                <Grid item key={i}>
                  <Card sx={{ minWidth: 345 }} className='card'>
                   <div className='image-content'>
                   <CardMedia
                      className='card-image'>
                        <img src={val.img} alt="" className="card-img" />
                      </CardMedia>
                   </div>
                    <CardContent className='card-content'>
                      <Typography sx={{ textAlign: 'center' }}  variant="h5" >{val.pname}</Typography><br />
                      <Typography sx={{ textAlign: 'left' }}  variant="h6" color="text.secondary"><b>Price:</b>{val.price}</Typography>
                      <Typography sx={{ textAlign: 'left' }}  variant="h6" color="text.secondary"><b>Category:</b>{val.category}</Typography>
                      <Typography sx={{ textAlign: 'left' }}  variant="h6" color="text.secondary"><b>About:</b>{val.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small"  className='button' variant='contained' href='/buy' color='error'>Buy now</Button>&nbsp;
                      <Button size="small" className='button' variant='contained' onClick={()=>handleAddToCart(val)} color='error'>Add to cart</Button>&nbsp;
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
  </body>
</div>

          
  )
}

export default Productlist
