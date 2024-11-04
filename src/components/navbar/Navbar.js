// src/components/Navbar.js
import React from 'react';
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
