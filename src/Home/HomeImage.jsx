import { useContext } from "react";

const HomeImage=(props)=>{
    const {Id,Img,Title}=props;
  return(
    <>
     <div className="home-img">
        <img src={Img} alt={Title}></img>
        <div>
        <h3>{Title}</h3>
        <button>Enroll with us</button>
        </div>
     </div>
    </>
  )
}
export default HomeImage;