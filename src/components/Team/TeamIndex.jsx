import '../../scss/Team.scss';
import TeamCard from './TeamCard';
import { TeamData } from '../../Data/TeamData.jsx';
import React from 'react';
import useWindowScroll from '../../CustomHooks/useWindowScroll.jsx';

const TeamIndex = () => {
  useWindowScroll();
  return (
    <>
      <div className="team-container">
        <div className='team-header'>
          <h2>Our Team</h2>
          <p>We have powerful and hardworking Team</p>
        </div>
        <div className='team-card-container'>
          {
            TeamData.map((ele, index) => {
              const { id, img, name, position } = ele;
              return (
                <div key={index}>
                  <TeamCard
                    Id={id}
                    Img={img}
                    Name={name}
                    Post={position}
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
export default TeamIndex;