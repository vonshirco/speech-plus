import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Benefits from './Components/Benefits/Benetifs'
import Application from './Components/Application/Application';
import Virtual from './Components/Virtual/Virtual';
// import Application from './Components/Application/Application'

const App = () => {
  return (
     <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        {/* <Title subTitle='Our Services' title='What We Offer'/> */}
        <Services />
        <Title subTitle='' title='Why Should You Choose Us'/>
        <Benefits />
        <Virtual />
        <Title subTitle='' title='Join Our Team at SpeechPlus Related Services'/>
        <Application />
        <Title subTitle='' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App