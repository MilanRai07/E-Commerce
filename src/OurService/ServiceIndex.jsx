import '../scss/Service.scss';
import {ServiceData} from '../Data/ServiceData.jsx';
import ServiceCard from './ServiceCard.jsx';
const ServiceIndex=()=>{
  return(
    <>
    <div className="service-container">
        <div className='service-header'>
        <h2>Our Services</h2>
        <p>We provide you the best services</p>
        </div>
        <div className='service-card-container'>
        {
          ServiceData.map((ele,index)=>{
            const {id,img,title,text}=ele;
            return(
              <div key={index}> 
                  <ServiceCard
                    Id={id}
                    Img={img}
                    Title={title}
                    Text={text}
                  />
                </div>
            )
          })
        }
        </div>
    </div>
    </>
  )
}
export default ServiceIndex;