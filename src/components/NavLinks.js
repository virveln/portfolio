// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/General.css';
import '../styles/Navbar.css';

const NavLinks = () => {
    return (

        <div className="nav-menu nav-item">
            <NavLink to="/portfolio" end
                className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/portfolio/about"
                className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </div>

    );
};

export default NavLinks;
