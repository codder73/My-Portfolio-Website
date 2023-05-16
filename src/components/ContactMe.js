import { React, useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import  Contactbg  from '../assets/contact_bg.mp4';
// import BlurView from '@react-native-community/blur';

// import Box from '@material-ui/core/Box';



const ContactMe = () => {
  const form = useRef();
  const afterSub = () => {
    window.location.reload();
    
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs 
      .sendForm(
        "service_g4jz0xg",
        "template_uc7kspo",
        form.current,
        "V9N_KEJ42iqKR7M8B"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      ); 
    
    };
  return (
    <div className="main-contact-container">
      <div className="mask">
          <video src={Contactbg} autoPlay loop muted />
      </div>

      <div className="contact-container">

        <h1 className="Contact-Heading">Contact With Me...</h1>

        <div className="left-side">
          <form ref={form} onSubmit={sendEmail} className="forms">
            <div className="name">
              <label className="labels">Full Name</label>
              <br />
              <input
                rows={2}
                name="users_name"
                type="text"
                placeholder="Your Name"
                className="inp_area"
              />
              <br />
            </div>

            <div className="email">
              <label>Email</label>
              <br />
              <input
                rows={2}
                name="user_email"
                type="email"
                placeholder="Your email"
                className="inp_area"
                
              />
              <br />
            </div>

            <div className="message">
              <label>Message</label>
              <br />
              <textarea name="message" rows={5} cols={35} />
              <br />
            </div>
            <div className="submits">
              <button className="btn" >Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
