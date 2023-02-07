import React from 'react'

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
        </div>
    )
}

export default Contact
