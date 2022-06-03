import React from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import LinkedIn from "../../img/LinkedIn.png";
import Github from "../../img/Github.png";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
  return (
    <div className='c'>
        <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                <h1 className="c-title">My Contact Details</h1>
                <div className="c-info">
                   {/* For inked-in account */}
                   <div className="c-info-item">
                     <a href='https://www.linkedin.com/in/rahul-kannaujia-16989919a/' target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="loading" className="c-icon" />
                    LinkedIn</a>
                  </div>
                   {/* for github account */}
                   <div className="c-info-item">
                   <a href='https://github.com/rkannaujia' target="_blank" rel="noreferrer">
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
                  <p className="c-desc">
                    <b>You can Contact Me </b>Get in touch. Always available for
            freelancing if the right project comes along. me.
                  </p>
                  {/* contact form */}
                  <form ref={formRef} onSubmit={handleSubmit} >
                    <input type="text" name="user_name" placeholder='Name' />
                    <input type="text" name="user_subject" placeholder='Subject' />
                    <input type="email" name="user_email" placeholder='Email' />
                    <textarea rows="5"  name='user_message' placeholder='Message' />
                    <button>Submit</button>
                    {done && "Thank You..."}
                  </form>
              </div>
              
        </div>
    </div>
  )
}

export default Contact