import React from 'react'
import "./Footer.css"
import {SiTelegram} from "react-icons/si"
import { BsInstagram } from "react-icons/bs"

function Footer() {
  return (
    <div className='footer'>
        
            
        
        <div className="tel">
            <h3>Biz bilan bog'lanish uchun</h3>
            <p>+998 99 999 99 99</p>
            <p><SiTelegram /> <BsInstagram /></p>
        </div>
    </div>
  )
}

export default Footer