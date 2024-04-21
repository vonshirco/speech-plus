import React, { useState } from 'react';
import './Application.css';
import apply_img from '../../assets/hero.jpg';

const Application = () => {
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "039a23b4-af5f-4764-8f9d-e44cb2f1338d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); //To reset the data from the form after submission
      setFileName(""); // Reset the file name display
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='application' id='application'>
      <div className="application-col">
        {/* <h3>Join Our Team at SpeechPlus Related Services</h3> */}
        <img src={apply_img} className='application-img' alt="Your image description" />
        <p><strong>Why SpeechPlus?</strong></p><br/>
        <p>We stand out with our highly competitive salaries, exceeding other agencies, 
          especially for newcomers.</p><br/>
        <p>Enjoy top salaries and grow your career with us, whether 
          you're a new SLP or a professional in fields like occupational 
          therapy, physical therapy, or education.</p> <br/>
        <p>Benefit from our commitment to your development in a diverse, 
          supportive environment.</p>
      </div>
      <div className="application-col">
      <h3>Application Form</h3>
        <form onSubmit={onSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

          <label htmlFor="discipline">Discipline or Professional</label>
          <input type="text" id="discipline" name="discipline" placeholder="Enter your discipline or profession" required />

          <div className="file-upload">
            <label className="custom-file-upload">
              Upload Resume
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
            </label>
            {fileName && <p style={{color: '#FF9900'}}>{fileName}</p>}
          </div>

          <button className='btn' type="submit">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Application;
