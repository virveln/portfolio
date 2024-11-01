// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/General.css';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';


const Navbar = () => {
    return (
        <div>           
            <NavMobile />
            <NavDesktop />
        </div>
    );
};

export default Navbar;
