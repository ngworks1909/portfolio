import React from 'react'
import '../css/Contact.css'
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

export default function contact() {
  return (
    <>
    <div id='contact' className="contact">
            <div className="container contact-1">
                <div className="contact-2">
                    <h3 className="contact-label">Contact</h3>
                    <span className="h-rule-4"></span>
                </div>
                
                <div className="contact-3">
                      <div className="contact-arrow-block">
                         <BsArrowRight className='contact-arrow-button'/>
                      </div>
                      <div className="contact-form-block">
                            <form action="https://getform.io/f/428c0a81-e091-4c0a-959f-5494c92be44d" method="post" className='contact-form' id='contact-form'>
                                <input type="email" name="email" id="email-field" placeholder='e.g. example@gmail.com' className='email-field' required/>
                                <input type="text" name="name-field" placeholder='e.g. Arjun Das' id="name-field" className='name-field' required/>
                                <textarea name="message-box" id="message-box" className='message-box' placeholder='Write your message' cols="30" rows="7" required></textarea>
                                <button className="form-submit" type="submit" >
                                    <span>Send</span>
                                    <RiSendPlaneFill/>
                                    </button>
                            </form>
                      </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
