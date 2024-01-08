import Banner from "./Banner/Banner";
import EnrollIndex from "./EnrollSection/EnrollIndex";
import ServiceIndex from "./OurService/ServiceIndex";
import TeamIndex from "./Team/TeamIndex";

const HomeIndex=()=>{
  return(
    <>
    <EnrollIndex/>
    <ServiceIndex/>
    <Banner/>
    <TeamIndex/>
    </>
  )
}
export default HomeIndex;