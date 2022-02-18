import React,{ useState } from 'react';
import './Navbar.css';
import { FaFacebookSquare , FaInstagramSquare , FaLinkedin , FaTwitterSquare , FaYoutubeSquare} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
const Navbar = () => {
  const [showMediaIcons,setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        {/* 1st logo part*/}
        <div className='logo'>
          <h2>
            <span>D</span>eepak 
            <span> G</span>upta
          </h2>
        </div>
        {/* 2nd Menu link part */}
        <div className='menu-link mobile-menu-link'>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        {/* 3rd social-media links */}
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href="https://www.facebook.com/gdeepak91" target="_blank">
                <FaFacebookSquare className='facebook'/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/gdeepak91" target="_blank">
                <FaLinkedin className='linkedin'/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gdeepak91" target="_blank">
                <FaInstagramSquare className='instagram'/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/gdeepak91" target="_blank">
                <FaYoutubeSquare className='youtube'/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/gdeepak91" target="_blank">
                <FaTwitterSquare className='twitter'/>
              </a>
            </li>
          </ul>
          {/* 4th humburger Menu Start here */}
          <div className='humburger-menu'>
            <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
              <HiMenu/>
            </a>
          </div> 
        </div>
      </nav>
        {/* Welcome Section here */}
      <section className='wel-section'>
        <p>Welcome To</p>
        <h1>Deepak Gupta</h1>
      </section>
    </>
  );
};

export default Navbar