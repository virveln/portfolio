// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // Lägg till box-shadow
            } else {
                setIsScrolled(false); // Ta bort box-shadow
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Rensa event listener
        };
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'navbar-shadow' : ''}`}>           
            <NavMobile />
            <NavDesktop />
        </div>
    );
};

export default Navbar;
