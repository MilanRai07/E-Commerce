const ServiceCard=(props)=>{
    const {Id,Img,Title,Text}=props;
   return(
    <>
    <div className="service-card">
        <div>
            <img src={Img} alt={Img} className="svg"></img>
        </div>
        <div>
            <h3>{Title}</h3>
        </div>
        <div>
            <p>{Text}</p>
        </div>
    </div>
    </>
   )
}
export default ServiceCard;