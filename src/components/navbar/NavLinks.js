// src/components/Navbar.js
import '../../styles/General.css';
import '../../styles/Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ closeMenu }) => {
    return (
        <div className="nav-menu nav-item">
            <NavLink to="/portfolio" end
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}> 
                Projects
            </NavLink>
            <NavLink to="/portfolio/about"
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}> 
                About
            </NavLink>
        </div>
    );
};

export default NavLinks;
