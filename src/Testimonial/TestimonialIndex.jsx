import React, { useState } from "react";
import Testimonial from "./Testimonial";
import '../scss/Testimonial.scss';
import { TeamData } from "../Data/TeamData";
import {ReactComponent as Dot} from '../assets/dot.svg';

const TestimonialIndex = () => {
  const [current,setCurrent]=useState(0);

  const CurrentOne=()=>{
   setCurrent(0);
  }
  const CurrentTwo=()=>{
    setCurrent(1);
   }
   const CurrentThree=()=>{
    setCurrent(2);
   }
  return (
    <>
      <div className="testimonial-container">
        {
          TeamData.map((ele,index)=>{
            const {id,img,name,company,text} = ele;
            return(
              (index===current &&
              <div key={index}>
                 <Testimonial
                 Id={id}
                 Img={img}
                 Name={name}
                 Company={company}
                 Text={text}
                 />
              </div>
              ))
          })
         }
         <div className="testimonial-indicator">
             <Dot className={current===0?'active-indicator':'indicator'} onClick={CurrentOne}/>
             <Dot className={current===1?'active-indicator':'indicator'} onClick={CurrentTwo}/>
             <Dot className={current===2?'active-indicator':'indicator'} onClick={CurrentThree}/>
         </div>
      </div>
    </>
  )
}
export default TestimonialIndex;