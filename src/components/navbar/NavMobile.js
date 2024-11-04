import '../../styles/Navbar.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';

const NavMobile = () => {
    const [click, setClick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu" size="40px" onClick={() => setClick(!click)} />
    const Close = <MdClose className="HamburgerMenu close-btn" size="40px" onClick={() => setClick(!click)} />

    const toggleMenu = () => {
        setClick(!click);
    };

    return (

        <nav className="navbar nav-mobile " >
            <Link to="/portfolio" className="nav-logo nav-item">Jessica Hvirfvel</Link>
            <div onClick={toggleMenu}>
                {click ? Close : Hamburger}
            </div>
            <div className={`nav-overlay ${click ? 'active' : ''}`}>
                {click && <NavLinks closeMenu={toggleMenu}/> }
                {click && <NavIcons /> }
            </div>
        </nav>
    );
};

export default NavMobile;