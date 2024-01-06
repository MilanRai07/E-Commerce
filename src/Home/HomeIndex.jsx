import HomeImage from "./HomeImage";
import {Images} from '../Data/HomeImgData';
import { createContext } from "react";
import '../scss/HomeImage.scss';
import {ReactComponent as Left} from '../assets/left.svg';
import {ReactComponent as Right} from '../assets/right.svg';
const ParentData=createContext();
const HomeIndex=()=>{
    const contextValue={
      
    }
  return(
    <>
    <div className="home-container">
      <Left className="left-slide"/>
    <ParentData.Provider value={contextValue}>
      <div className="homeimg-container">
      {Images.slice(0,1).map((ele,index)=>{
        const { id, img, title } = ele;
        return(
          <div key={index}>
            <HomeImage
              Id={id}
              Img={img}
              Title={title}
            />
          </div>
        )
      })

      }
      </div>
       </ParentData.Provider>
       <Right className="right-slide"/>
       </div>
    </>
  )
}
export default HomeIndex;
export {ParentData};