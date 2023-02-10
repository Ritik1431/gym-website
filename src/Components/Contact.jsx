import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
            <input type='text' placeholder="First Name" required />
            <input type='email' placeholder="Email" required />
            <textarea placeholder='Write Here......' />
            <input type='submit' value='send' />
            </form>    
            <div className="contact-icons">
            <MdEmail/>
            <BsWhatsapp/>
            <BsLinkedin/>
            </div>        
        </div>
    )
}

export default Contact
