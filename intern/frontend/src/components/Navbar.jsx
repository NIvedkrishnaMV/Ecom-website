import { Button, Toolbar, Typography ,AppBar} from '@mui/material'
import React from 'react'

const Navbar = (props) => {
  return (
    <div >
      
      <AppBar position="fixed" 
              
      >
        <Toolbar >

        <Typography variant="h6"  component="div" >
        {props.text}
          </Typography>
          <Button disabled sx={{ flexGrow: 1 }}>

          </Button>
          <Button
        disableRipple

        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            transform: 'translateY(-5px)'
          },
          color:'white'
          
        }}
        href={props.button1Path}
        disabled={props.button1Status}
      >{props.button1}
      </Button>
      <Button
        disableRipple

        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            transform: 'translateY(-5px)'
          },
          color:'white'
        }}
        href={props.button2Path}
        disabled={props.button2Status}
      >{props.button2}
      </Button>
      <Button
        disableRipple

        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            transform: 'translateY(-5px)'
          },
          color:'white'
        }}
        href={props.button3Path}
      >{props.button3}
      </Button>
      <Button
        disableRipple

        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            transform: 'translateY(-5px)'
          },
          color:'white'
        }}
        href={props.button4Path}
      >{props.button4}
      </Button>
        </Toolbar>
        
      </AppBar>
   
    </div>
  )
}

export default Navbar
