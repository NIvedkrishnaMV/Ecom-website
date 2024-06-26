import { Button, TextField } from '@mui/material'
import React from 'react'
import './Aboutus.css';

const Contactus = () => {
  return (
    <div>
        <h1 className='header'>Contact us</h1><br/><br/>
        <div className='text-container2'>
    <p>Welcome to <b>e-shopping</b>, if you want to contact us, then feel free to say anything about <b>https://www.eshopping.com/in</b>. We'll appreciate your feedback.</p><br/>
    <p><b>You can contact us:</b></p><br/>
    - If you want to tell anything about the site.<br />
    - If you have any doubt or any problems related to our content or anything you want to tell us.<br />
    - If you want to say about our content that is incorrect or not in our post.<br />
    - If you want to tell us about any changes in the site theme, colour etc.<br />
    - If you want to give suggestions to improve e-shopping<br />
    - If you face any error or any issues on our site.<br/><br/>
    -Complete te form given below!<br/>
    
    <form>
        <TextField variant='outlined' label='your name' margin='normal'></TextField>&nbsp;&nbsp;&nbsp;
        <TextField variant='outlined' label='your e-mail' margin='normal'></TextField>&nbsp;&nbsp;&nbsp;
        <TextField variant='outlined' label='your message' margin='normal'></TextField><br/>
        <Button variant='contained' color="success">Send</Button>
      </form>
      <br/><br/>
    <p>Don't hesitate to mail us on: <b>e-shopping/in@gmail.com</b> </p><br/><br/>
    <h2>Thanks For Visiting Our Site!</h2>
    </div>
    </div>
  )
}

export default Contactus