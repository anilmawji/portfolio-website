import CustomNavLink from './CustomNavLink';
import styles from './Navbar.module.css';
import HamburgerButton from './HamburgerButton';
import { useNavMenuContext } from '../../contexts/NavMenuContext';

const Navbar = () => {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useNavMenuContext();

  return (
    <nav>
      <HamburgerButton className={styles.hamburger} isOpen={isMenuOpen} onToggle={toggleMenu} />
      <ul>
        <li>
          <CustomNavLink to="/#hero" label="Home" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/#experience" label="Experience" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/#projects" label="Projects" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/about#bio" label="About" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/about#contact" label="Contact" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/blog" label="Blog" onClick={closeMenu} />
        </li>
      </ul>
      <div className={styles.shadow} />
    </nav>
  );
}

export default Navbar;