import React from "react";
const Testimonial=(props)=>{
  const {Id,Img,Name,Company,Text}=props;
 return(
    <>
      <div className="testimonial-card">
          <img src={Img} alt={Id}/>
          <h2>{Name}</h2>
          <p className="p1">{Company}</p>
          <p className="p2">{Text}</p>
      </div>
    </>
 )
}
export default Testimonial;