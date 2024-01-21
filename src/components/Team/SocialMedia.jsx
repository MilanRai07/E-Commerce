import { ReactComponent as FB } from '../../assets/fb.svg';
import { ReactComponent as Twit } from '../../assets/twitter.svg';
import { ReactComponent as Link } from '../../assets/linkedin.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import React from 'react';
const SocialMedia = () => {
    return (
        <>
            <div className='socialmedia-container'>
                <FB id="0" className='social-site' />
                <Twit id="1" className='social-site' />
                <Link id="2" className='social-site' />
                <Google id="3" className='social-site' />
            </div>
        </>
    )
}
export default SocialMedia;