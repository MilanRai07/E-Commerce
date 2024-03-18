import React from 'react';
import '../../scss/SignUp.scss';
import SIgnUpForm from './SIgnUpForm';
import background from '../../assets/particle.mp4';

const SignUpIndex = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className='signup-container'>
        <video src={background} autoPlay loop muted />
        <div className='signup-form'>
          <SIgnUpForm />
        </div>
      </div>
    </>
  )
}

export default SignUpIndex;