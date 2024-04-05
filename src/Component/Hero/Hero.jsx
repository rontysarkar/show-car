/* eslint-disable react/prop-types */
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pose_icon from '../../assets/pause_icon.png'
import './Hero.css'
const Hero = ({ heroData, heroCount, setHeroCount, setPlayStatus, palyStatus, }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the Features</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className="hero-play-dot">
                <ul className="hero-dots">
                    <li onClick={()=> setHeroCount(0)} className={heroCount===0 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={()=> setHeroCount(1)} className={heroCount===1 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={()=> setHeroCount(2)} className={heroCount===2 ? 'hero-dot orange' : 'hero-dot'}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!palyStatus)} src={palyStatus? pose_icon : play_icon } alt=""  />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;