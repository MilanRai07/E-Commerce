import {ReactComponent as FB} from '../assets/fb.svg';
import {ReactComponent as Twit} from '../assets/twitter.svg';
import {ReactComponent as Link} from '../assets/linkedin.svg';
import {ReactComponent as Google} from '../assets/google.svg';
const SocialMedia=()=>{
    
    return(
        <>
          <div className='socialmedia-container'>
              <FB className='social-site' />
              <Twit className='social-site' />
              <Link className='social-site' />
              <Google className='social-site'/>
          </div>
        </>
    )
}
export default SocialMedia;