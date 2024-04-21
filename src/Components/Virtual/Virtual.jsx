import React from 'react'
import './Virtual.css'
import about_img from '../../assets/virtual.jpg'

const Virtual = () => {
  return (
    <div className='about' id='virtual'>
        
        <div className="about-right">
            {/* <h3>About Our Founder</h3> */}
            <h2>Leading the Way with Virtual Services</h2>
            <p> In today's fast-changing educational sphere, our mission focuses 
                on enhancing student achievement through quality virtual services, 
                ensuring no student is left behind.</p>
                <p>We bridge the educational gap 
                by connecting schools with skilled service providers, leveraging 
                cutting-edge technology to offer top-notch virtual support. </p>
            <p> Our services integrate smoothly into students' learning, providing 
                necessary assistance without sacrificing quality or access.</p>
            <p>As pioneers in digital education, we are committed to making education 
                inclusive and universally accessible, removing geographical and resource 
                barriers. Join us in advancing the future of education, where every student 
                has the support they need to succeed.</p>
        </div>

        <div className="about-left">
            <img src={about_img} className='about-img' />
            {/* <img src={play_icon} className='play-icon' /> */}
        </div>
    </div>
  )
}

export default Virtual