import React from 'react'
import './Aboutus.css';
// import Image from './img/logo.png';
import { Button } from '@mui/material';
const Aboutus = () => {
    return (
      <div className="about-us">
        <div className='logo-us'>
        <img src={Image} alt='img' className="logo"></img>
        <div className='text-container'>
        <h1 className="header">About us</h1><br/><br/>
        <h2 className='header2'>Welcome to our website<b> e-shopping</b></h2><br/>
        <p>
            e-shopping, is a professional platform where we provide informative content like e-commerce. We hope you like all the contents provided by us.
            </p>
            <p>If you have additional questions or require more information about our website, do not hesitate to Contact through email at:-
                <b> e-shopping/in@gmail.com.</b>
                </p>
                <h2>About <b>e-shopping</b></h2>
                <p>
                    This website founded in 1979 by Michael Aldrich.
                    We hope you enjoy Our services as much as we enjoy offering them to you. Sincerely, James chadwick.
                    </p>
                    <h2>Aim of <b>e-shopping</b></h2>
                    <p>Like any other website,</p>
                    <p>We are a leading online learning platform, guiding viewers to identify their strengths and fill in their learning gaps.
                    If you have any question or query regarding our website.<br/>
                    <br/>
                    Please don't hesitate to contact us.</p><br/>
                    <h2>Thanks For Visiting Our Site!</h2><br/>
                    <Button variant='text' color="success" style={{fontFamily:'fantasy'}}>Read More...</Button>
                    </div>
                    </div>
      </div>
    );
  };
  
  export default Aboutus;