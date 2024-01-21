import React from "react";

const ContactUsForm=()=>{
   return(
    <>
    <form>
    
           <div className="form-box">
               <div className="input-container">
                   <input type="text" placeholder="Name"></input>
                   <input type="email" placeholder="Email" />
                   <input type="number" placeholder="Phone" />
               </div>
               <div className="textbox-container">
                  <textarea placeholder="Message"></textarea>
               </div>
           </div>
           <div className="button-div">
            <button className="form-button">Submit</button>
           </div>
    </form>
    </>
   )
}
export default ContactUsForm;