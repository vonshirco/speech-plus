import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>
        <img src={logo} alt="" className='logo'/>
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About Us</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Our Services</Link></li>
        <li><Link to='benefits' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Why Choose Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Contact Us</Link></li>
        <li><Link to='application' smooth={true} offset={-260} duration={500} onClick={closeMenu}><button className='btn'>Apply</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
