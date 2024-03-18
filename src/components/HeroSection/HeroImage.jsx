import useSignUpRoute from '../../CustomHooks/useSignUpRoute';

const HeroImage = (props) => {
  const { Img, Title } = props;
  const { Route } = useSignUpRoute();
  return (
    <>
      <div className="home-img">
        <img src={Img} alt={Title}></img>
        <div>
          <h3>{Title}</h3>
          <button onClick={Route}>Enroll with us</button>
        </div>
      </div>
    </>
  )
}
export default HeroImage;