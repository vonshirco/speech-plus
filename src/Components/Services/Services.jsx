import React from 'react';
import './Services.css';
import speech_icon from '../../assets/speech.png'
import school_py_icon from '../../assets/school_py.png'
import assistants_icon from '../../assets/assistants.png'
import occupational_icon from '../../assets/occupational.png'
import physical_icon from '../../assets/physical.png'
import teacher_icon from '../../assets/teacher.png'
import sign_lang_icon from '../../assets/sign_lang.png'

const Services = () => {
  return (
    <div className="services" id='services'>
        <div className='title'>
        <h2>Our Services</h2>
        <p>We pride ourselves on our ability to connect schools 
            with highly qualified and passionate professionals in 
            a variety of essential roles, focusing primarily on, 
            but not limited to</p>
    </div>
      <div className="service-card">
        <div className="front">
          <img src={speech_icon} alt="Service Icon" />
          <h3>Speech and Language Pathologists (SLPs)</h3>
        </div>
        <div className="back">
          <p>Our experts are skilled in assessing, diagnosing, 
            and treating speech, voice, communication, and 
            swallowing disorders in students of all ages, 
            supporting them in achieving their full potential. 
            Our tele-therapy services ensure that these indispensable 
            resources are available to students everywhere, 
            without the constraints of physical location.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
    <img src={school_py_icon} alt="Service Icon" />
          <h3>School Psychologists</h3>
        </div>
        <div className="back">
          <p>Specializing in educational and psychological 
            assessment, our psychologists play a crucial 
            role in shaping supportive learning environments 
            for students facing emotional, social, and 
            academic challenges. The flexibility of 
            remote consultations enhances the 
            accessibility and convenience of psychological 
            services for students and their families.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
          <img src={assistants_icon} alt="Service Icon" />
          <h3>Educational Assistants</h3>
        </div>
        <div className="back">
          <p>We provide educational assistants who are instrumental 
            in offering the needed support to enhance the 
            educational experience of students, ensuring that all 
            learners have access to the resources they need to succeed. 
            Tele-therapy options allow for adaptive learning methods 
            that accommodate various learning styles and needs.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
          <img src={occupational_icon} alt="Service Icon" />
          <h3>Occupational Therapists (OTs)</h3>
        </div>
        <div className="back">
          <p>Our OTs are committed to helping students develop or 
            recover the skills needed for daily living and 
            academic success, focusing on sensory and motor skills. 
            The implementation of tele-therapy broadens the impact 
            of OTs by facilitating remote assessments and 
            interventions.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
          <img src={physical_icon} alt="Service Icon" />
          <h3>Physical Therapists (PTs)</h3>
        </div>
        <div className="back">
          <p> Focused on improving mobility, our PTs work with 
            students to enhance physical capabilities, ensuring 
            that every child can participate fully in school activities 
            and beyond. Tele-therapy in physical therapy allows for 
            innovative approaches to exercise, movement, 
            and rehabilitation.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
          <img src={teacher_icon} alt="Service Icon" />
          <h3>School Social Workers</h3>
        </div>
        <div className="back">
          <p>Addressing social, emotional, and life adjustment 
            issues, our social workers are at the forefront of 
            creating positive school climates where all students 
            can thrive. Tele-therapy sessions provide a flexible 
            and approachable means for students to receive the 
            support they need.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="front">
          <img src={sign_lang_icon} alt="Service Icon" />
          <h3>Sign Language Interpreters:</h3>
        </div>
        <div className="back">
          <p>Ensuring that hearing-impaired students receive 
            the support they need, our interpreters facilitate 
            communication and learning, making the educational 
            experience accessible to everyone. Our dedication 
            to incorporating tele-therapy extends to this essential 
            service, ensuring that interpreters can assist students 
            remotely..</p>
        </div>
      </div>
      {/* Add more service cards here */}
    </div>
  );
}

export default Services;
