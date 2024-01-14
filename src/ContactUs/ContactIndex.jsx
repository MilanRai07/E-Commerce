import React from "react";
import '../scss/Contact.scss';
import {ReactComponent as Map} from '../assets/map.svg';
import ContactUsForm from "./ContactUsForm";
const ContactIndex=()=>{
   return(
    <>
    <div className="contact-container">
    <div className='contact-header'>
          <h2>Contact Us</h2>
          <p>Its easy to contact us. Express your feelings down below.</p>
        </div>
        <div className="contact-content">
              <div className="contact-map">
                 <Map className='svglocate'/>
                 <p>Koteshwor, Kathmandu</p>
                 <p>Bagmati, Province 7</p>
                 <p>Post no 44600</p>
                 <p>Nepal</p>
              </div>
              <div className="contact-form">
                <ContactUsForm/>
              </div>
        </div>
    </div>
    </>
   )
}
export default ContactIndex;