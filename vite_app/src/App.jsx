

import Logo from './assets/header-white-logo.png'
import './style.css';
import career from './assets/career.svg'
import india from './assets/Build-for-india.png'
import fast from './assets/fast-paced.png'
import culture from './assets/culture.png'
import growth from './assets/growth.png'
import cutting from './assets/cutting-edge-tech.png'
import experiment from './assets/experiment.png'
import five from './assets/5.jpg'
import amit from './assets/amit.png'
import core from './assets/core-values-all.png'
import saumil from './assets/saumil.png'
import logo2 from './assets/header-logo.png'
import linkedin from './assets/linkedin.svg'
import insta from './assets/insta.png'
import facebook from './assets/facebook.png'
import youtube from './assets/youtube.png'
import twitter from './assets/twitter.png'
function App() {
 

  return (
    <>
        
      <div className="logo">
        <img src={Logo} alt="" />
    </div>
    <div className="logo2">
        <img src={career} alt="" />
    </div>
    <div className="container">
        <h2>Come work with us</h2>
        <p>And together we will revolutionize the Indian healthcare industry.</p>
        <button id="apply-button">Start Applying </button>
    </div>
    <div className="text">
        <h2>Why Join PharmEasy?Why Join PharmEasy?</h2>
        <p>We give you ample reasons to come on board with us which are over and above changing the landscape of<br/>the
            entire healthcare industry in the country and potentially in the world!</p>
        <h2 style={{color: "#10847e"}}>“Take care of our customers, we take care of you”</h2>
    </div>
    <div className="main">
        <div className="c1">
            <img src={india} alt="" />
            <p>Build for India</p>
        </div>
        <div className="c1">
            <img src={fast} alt="" />
            <p>Fast Paced and Agile</p>
        </div>
        <div className="c1">
            <img src={culture} alt="" />
            <p>Open and Fun<br/>Culture</p>
        </div>
    </div>
    <div className="main2">
        <div className="c1">
            <img src={growth} alt=""/>
            <p>Hyper Growth</p>
        </div>
        <div className="c1">
            <img src={cutting} alt="" />
            <p>Cutting Edge Tech</p>
        </div>
        <div className="c1">
            <img src={experiment} alt=""/>
            <p>Experiment and<br/>Learn</p>
        </div>
    </div>
    <div className="txt2">
        <h2>Life at PharmEasy</h2>
        <p>A vibrant work environment which is fulfilling & fun.</p>
    </div>
    <div className="img1"><img src={five} alt=""/></div>
    <div className="info">
        <div className="i1">
            <p>I am a part of the Marketing Team which is working towards making<br/>PharmEasy a verb. The best part
                about my job is that it gives me an<br/>opportunity to display my skills and experiment with different
                ideas.<br/>Support from seniors makes it easier to learn from my mistakes. It has<br/>been a fun learning
                experience for me so far.</p>
            <p>Amit Singh</p>
        </div>

        <img src={amit} alt=""/>

    </div>
    <div className="txt3">
        <h2>Our core values</h2>
    </div>
    <div className="img2">
        <img src={core} alt=""/>
    </div>
    <div className="txt4">
        <h2>What we’ve been doing</h2>
        <p>The PharmEasy family shares how they touch the lives of 2 million+ families daily, through their role</p>
    </div>
    <div className="profile-card">
        <img src={saumil} alt="Saumil Parekh" className="profile-image"/>
        <div className="profile-details">
            <h2 className="profile-name">Saumil Parekh</h2>
            <p className="profile-role">Marketing Team</p>
            <hr/>
            <p className="profile-description">
                Saumil oversees various aspects of marketing at PharmEasy, particularly print (outdoor), digital, radio,
                and social media.
                He believes PharmEasy has made affordable, accessible healthcare a reality with the help of a very
                efficient, tight-knit supply chain.
            </p>
        </div>
    </div>
    <div className="container">
        <h2>Come work with us</h2>
        <p>And together we will revolutionize the Indian healthcare industry.</p>
        <button id="apply-button">Start Applying </button>
    </div>
    <div className="bottom">
        <div className="bottom-logo">
            <img src={logo2} alt=""/>
        </div>
        <div className="section">
            <h3>COMPANY</h3>
            <ul>
                <li>pharmeasy.in</li>
                <li>blogs</li>
            </ul>
        </div>
        <div className="section">
            <h3>FOLLOW US</h3>
            <div className="icons">
                <img src={linkedin} alt=""/>
                <img src={insta} alt=""/>
                <img src={facebook}alt=""/>
                <img src={youtube} alt=""/>
                <img src={twitter} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
