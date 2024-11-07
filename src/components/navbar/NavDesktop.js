import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import NavIcons from './NavIcons';
import NavMenu from './NavMenu';

const NavDesktop = () => {
    return (
        <nav className="nav-desktop navbar">
            <NavMenu />
            <Link to="/portfolio" className="nav-logo nav-item">Jessica Hvirfvel</Link>
            <NavIcons />
        </nav>
    );
};

export default NavDesktop;
