import React, { useEffect, useState } from 'react';
import '../../scss/SignUp.scss';
import SIgnUpForm from './SIgnUpForm';
import background from '../../assets/particle.mp4';

const SignUpIndex = () => {
  window.scrollTo(0, 0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  })

  return (
    <>
      {isLoading ?
        <div className='loader-container'>
          <div className='loader'>
          </div>
        </div>
        :
        <div className='signup-container'>
          <video src={background} autoPlay loop muted />
          <div className='signup-form'>
            <SIgnUpForm />
          </div>
        </div>
      }
    </>
  )
}

export default SignUpIndex;