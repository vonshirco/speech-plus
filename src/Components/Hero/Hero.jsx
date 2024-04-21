import React from 'react'
import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>We Empower Education Through Professional Staffing and Remote Therapy Solutions.</h1>
            <p>Emphasizing tele-therapy, we expand access to professionals, keeping pace with technology.</p>
            <Link to='services' spy={true} smooth={true} duration={500} className='btn'>Explore More<img src={white_arrow} alt=''/></Link>
        </div>
    </div>
  )
}

export default Hero