import React, { useContext } from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import LinkedIn from "../../img/LinkedIn.png";
import Github from "../../img/Github.png";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

function Contact() {
// for submit the form data
const formRef=useRef();

// to handle for after pressing submit button 
const [done, setDone]=useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
 // uses Emailjs React code
  emailjs.sendForm('service_9teu7ya', 'template_q78gpeq', formRef.current, 'K3W6uGU5NlWOxLuoM')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
}

// for changing the mode
const theme =useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className='c'>
        <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                <h1 className="c-title">My Contact Details</h1>
                <div className="c-info">
                   {/* For inked-in account */}
                   <div className="c-info-item">
                     <a href='https://www.linkedin.com/in/rahul-kannaujia-16989919a/' target="_blank" rel="noreferrer" 
                      style={{color:darkMode && "white"}}>
                    <img src={LinkedIn} alt="loading" className="c-icon" />
                    LinkedIn</a>
                  </div>
                   {/* for github account */}
                   <div className="c-info-item">
                   <a href='https://github.com/rkannaujia' target="_blank" rel="noreferrer"
                   style={{color:darkMode && "white"}}>
                    <img src={Github} alt="loading" className="c-icon" />
                    Github</a>
                  </div>
                  {/* phone image and number */}
                  <div className="c-info-item">
                    <img src={Phone} alt="loading" className="c-icon" />
                    +91 7506024841
                  </div>
                  {/* Email image and email id */}
                  <div className="c-info-item">
                    <img src={Email} alt="loading" className="c-icon" />
                    rkannaujia96@gmail.com
                  </div>
                  {/* Address image and address */}
                  <div className="c-info-item">
                    <img src={Address} alt="loading" className="c-icon" />
                    Diva East Thane 400612, Maharashtra, India
                  </div>
                </div>
              </div>
              <div className="c-right">
                <h2 style={{color:darkMode && "white"}}>You Can Contact Me </h2>
                  <p className="c-desc">
                     Always available for
            freelancing if the right project comes along.
                  </p>
                  {/* contact form */}
                  <form ref={formRef} onSubmit={handleSubmit} >
                    <input style={{backgroundColor: darkMode && "#333" ,color:darkMode && "white"}} type="text" name="user_name" placeholder='Name' />
                    <input style={{backgroundColor: darkMode && "#333",color:darkMode && "white"}} type="text" name="user_subject" placeholder='Subject' />
                    <input style={{backgroundColor: darkMode && "#333",color:darkMode && "white"}} type="email" name="user_email" placeholder='Email' />
                    <textarea style={{backgroundColor: darkMode && "#333",color:darkMode && "white"}} rows="5"  name='user_message' placeholder='Message' />
                    <button>Submit</button>
                    {done && "Thank You..."}
                  </form>
              </div>
              
        </div>
    </div>
  )
}

export default Contact