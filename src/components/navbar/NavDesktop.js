import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';

const NavDesktop = () => {
    return (
        <nav className="nav-desktop navbar">
            <NavLinks />
            <Link to="/portfolio" className="nav-logo nav-item">Jessica Hvirfvel</Link>
            <NavIcons />
        </nav>
    );
};

export default NavDesktop;
