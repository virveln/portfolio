import '../../styles/Navbar.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavIcons from './NavIcons';
import NavMenu from './NavMenu';

const NavMobile = () => {
    const [click, setClick] = useState(false);

    const Hamburger = <HiOutlineMenu className="hamburgerMenu" size="40px" onClick={() => setClick(!click)} />
    const Close = <IoClose className="hamburgerMenu close-btn" size="40px" onClick={() => setClick(!click)} />

    const toggleMenu = () => {
        setClick(!click);
    };

    return (

        <nav className="navbar nav-mobile " >
            <Link to="/portfolio" className="nav-logo nav-item">Jessica Hvirfvel</Link>
            <div onClick={toggleMenu}>
                {click ? Close : Hamburger}
            </div>
            <div className={`nav-overlay ${click ? 'active' : 'out'}`}>
                {click && <NavMenu closeMenu={toggleMenu}/> }
                {click && <NavIcons closeMenu={toggleMenu}/> }
            </div>
        </nav>
    );
};

export default NavMobile;