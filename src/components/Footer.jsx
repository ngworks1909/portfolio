import React from 'react'
import '../css/Footer.css'
import { RiInstagramFill,RiWhatsappFill ,RiTelegramFill} from "react-icons/ri";


export default function Footer() {
  return (
    <>
       <div className="footer">
            <div className="footer-1 ">
                 <div data-aos="zoom-in" data-aos-duration="1000" className="footer-3">
                      <div className="footer-2">
                          <h3 className='footer-text'>Let's Talk</h3>
                      </div>
                      <div className="footer-icons">
                           <div className="footer-4">
                              <a className='last-anchors' href="/">
                                  <RiTelegramFill className='footer-image'/>
                              </a>
                            <p className="footer-imagetext">Telegram</p>
                           </div>
                           <div className="footer-4">
                              <a className='last-anchors' href="/">
                                 <RiInstagramFill className='footer-image'/>
                              </a>
                            <p className="footer-imagetext">Instagram</p>
                           </div>
                           <div className="footer-4">
                              <a className='last-anchors' href="/">
                                  <RiWhatsappFill className='footer-image'/>
                              </a>
                              <p className="footer-imagetext">Whatsapp</p>
                            </div>   
                      </div>
                      <div className="footer-5">
                      | Copyright &copy; <span>2023 ngworks1909. </span> All rights reserved |
                      </div>
                 </div>
                 

            </div>
       </div>
      
    </>
  )
}
