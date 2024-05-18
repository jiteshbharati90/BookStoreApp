import React from 'react'
import './Contact.css'
import msg from '../assets/msg.png'
import msg_icon from '../assets/msg_icon.png'
import phone_icon from '../assets/phone_icon.png'
import location_icon from '../assets/location_icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f43db062-84ed-44b3-8cc4-f15962de62da");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <>
    
    <div className='contact mt-16 py-8'>
      <div className="contact-col">
        <h3 className='dark:text-white'>Send us a massege <img src={msg_icon} alt="" /></h3>
        <p className='dark:text-white'>Feel free to reach out through contact from or find our contact information below. Yor feedback, question, and suggestions are important to us as we strive to provide exceptional service to our website.</p>
        <ul>
            <li  className='dark:text-white'><img src={msg} alt="" />Contact@jiteshBharati</li>
            <li  className='dark:text-white'><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li  className='dark:text-white'><img src={location_icon} alt="" />77 Mahabalipuram ChegalPutt<br/> Ma #6054 Chennai India</li>
        </ul>
      </div>
      <div className="contact-col dark:text-white">
        <form onSubmit={onSubmit}>
            <lable>Your name</lable>
            <input type='text' name = 'name' placeholder='Enter your name' required/>
            <lable>Phone Nmber</lable>
            <input type='tel' name = 'phone' placeholder='Enter your phone nmber' required/>
            <lable>Write your massege here</lable>
            <textarea name = 'message'  rows="6" placeholder='Enter your massge' required></textarea>
            <button type='submit' className='btn dark-btn'>Send Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
    
  )
}

export default Contact
