import React from 'react';
import ReactDom from 'react-dom';
import ContactPNG from '../assets/contact.png'
function ContactInfo () {
    return (
        <div className="contact-card">

        <div className="card">
            <h1 className="text-center">Contact Me</h1>
            <div className="card-content mx-auto">
            <div><img src={ContactPNG} alt="profile-photo" className="profile float-left"></img></div>
                <div className="links">
                <a href="tel:3035066206" className="ml-3 mt-4 font-weight-bold">Phone</a>

                <a href="mailto:daltonrothrock8@gmail.com" className="ml-3 mt-4 font-weight-bold">Email</a>

                <a href="https://www.linkedin.com/in/dalton-rothrock/a67935162" className="ml-3 mt-4 font-weight-bold">LinkedIn</a>

                <a href="https://github.com/drock4440" className="ml-3 mt-4 font-weight-bold">GitHub</a>
                </div>
                
            </div>
        </div>
    </div >
    )
}

export default ContactInfo;