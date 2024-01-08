import SocialMedia from "./SocialMedia";

const TeamCard = (props) => {
    const { Id, Img, Name, Post } = props;
    return (
        <>
            <div className="team-card">
                <div className="team-img-container">
                    <div>
                        <img src={Img} alt={Id} className="team-img"></img>
                    </div>
                </div>
                <div className="team-name">
                    <h3>{Name}</h3>

                    <p>{Post}</p>
                    <SocialMedia/>
                </div>
            </div>
        </>
    )
}
export default TeamCard;