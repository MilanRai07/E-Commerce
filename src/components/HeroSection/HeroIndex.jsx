import EnrollImage from "./HeroImage";
import { Images } from '../../Data/HomeImgData';
import { useState } from "react";
import '../../scss/HeroImage.scss';
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Right } from '../../assets/right.svg';

const HeroIndex = () => {
  const [current, setCurrent] = useState(2);

  const LeftSlide = () => {
    if (current == 0) {
      setCurrent(2);
    } else {
      setCurrent(current - 1);
    }
  }
  const RightSlide = () => {
    if (current == 2) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <>
      <div className="home-container">
        <Left className="left-slide" onClick={LeftSlide} />
          <div className="homeimg-container">
            {Images.map((ele, index) => {
              const { id, img, title } = ele;
              return (
                <div key={index} className={index === current ? 'active-img' : 'passive-img'}>
                  {index === current && (
                    <EnrollImage
                      Id={id}
                      Img={img}
                      Title={title}
                    />
                  )}
                </div>
              )
            })

            }
          </div>
        <Right className="right-slide" onClick={RightSlide} />
      </div>
    </>
  )
}
export default HeroIndex;