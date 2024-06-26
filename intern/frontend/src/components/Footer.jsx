import {  Button,  Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div >

        <div className="page-footer"
        >
          <Typography variant='h6'>Log into your account to buy or sell products</Typography>
          <Button id='button' variant='contained'
                  href='/log'
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgb(0,200,0)',
                      boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                      transform: 'translateY(-2px)'
                    }}}
                    
                  >
              Login

          </Button>
          <h5>New user?&nbsp;&nbsp;
             <a href='/reg'  

          >Sign up</a></h5>
        </div>

    </div>
  )
}

export default Footer
