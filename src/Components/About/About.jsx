import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            {/* <img src={play_icon} className='play-icon' /> */}
        </div>
        <div className="about-right">
            <h3>About Our Founder</h3>
            <h2>Leading the Way in Educational Excellence</h2>
            <p>At the helm of our team is Chennelle Parker,
                 our Director. With a Master's Degree in Speech 
                 Pathology from Teacher's College Columbia University, Chennelle brings 
                 a wealth of knowledge and experience to her leadership 
                 role.</p>
            <p>She has dedicated a decade to the special education community, 
                with the last eight years focused on working as a Speech-Language 
                Pathologist (SLP).</p>
            <p>Her passion for fostering supportive educational environments and 
                her expertise in speech pathology have been the cornerstone of our 
                agency's success.</p>
        </div>
    </div>
  )
}

export default About