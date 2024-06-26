import React from 'react'
import Navbar from './Navbar'
import { Paper, Typography } from '@mui/material'
import Carousal from './Carousal'
import Aboutus from './About'
import Contactus from './Contactus'

const PHome = () => {
  return (
    <div>
              <header>          
            <Navbar text={'e-Shopping'} button1={'Home'} button2={'About'} button3={'Contact us'} button4={'Products'} button1Path={'#home'} button2Path={'#about'} button3Path={'#contactus'} button4Path={'/product'}  fullWidth/><br /><br /><br />
        </header>
        <body>  

            <Paper id='home' elevation={10} >
            <div id='bg'>
            <Typography 
                  variant='h3'
                  sx={{fontFamily:'fantasy'}}
                  >Welcome to <br />e-Shopping 
              </Typography>
              <Carousal/><br /><br /><br /><br />
              <p className='m-auto w-3/4'>E-Shopping is built to connect shoppers to products or services for trading online. On the most basic level, they provide everything we need for online shopping. They work like this: A business builds the website and lists the products or services they sell, along with prices.</p><br /><br /><br /><br /><br />
            </div>
          </Paper> <br /><br />
          <Paper id='about' elevation={10}>
            <Aboutus></Aboutus>
            
          </Paper>
          <Paper id='contactus' elevation={10}>
            <Contactus/>
            
          </Paper>
  

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </body>
    </div>
  )
}

export default PHome
