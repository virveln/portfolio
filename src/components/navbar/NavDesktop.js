import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import NavIcons from './NavIcons';
import NavMenu from './NavMenu';
import { ReactComponent as LogoJH } from '../../images/logoJH.svg';

const NavDesktop = () => {
    return (
        <nav className="nav-desktop navbar">
            <NavMenu />
            <Link to="/portfolio" className="nav-logo nav-item"><LogoJH className="logo-jh" /></Link>
            <NavIcons />
        </nav>
    );
};

export default NavDesktop;
