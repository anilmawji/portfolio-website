import styles from './Navbar.module.css';
import globalStyles from '../../global.module.scss';
import CustomNavLink from './CustomNavLink';
import HamburgerButton from './HamburgerButton';
import { Icon, IconType } from '../../components/icons/Icon';
import { useNavMenuContext } from '../../contexts/NavMenuContext';

const Navbar = () => {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useNavMenuContext();

  return (
    <nav className={globalStyles.shadowBottomLight}>
      <HamburgerButton className={styles.hamburger} isOpen={isMenuOpen} onToggle={toggleMenu} />
      <ul>
        <li>
          <CustomNavLink to="/#hero" label="Home" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/#skills" label="Skills" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/#projects" label="Projects" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/about#bio" label="About" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/about#experience" label="Experience" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/about#certs" label="Certifications" onClick={closeMenu} />
        </li>
        <li>
          <CustomNavLink to="/contact" label="Contact" onClick={closeMenu} />
        </li>
        {/* <li>
          <CustomNavLink to="/blog#featured" label="Blog" onClick={closeMenu} />
        </li> */}
      </ul>
      <div className={styles.shadow} />
      <a className={styles.resume} href="https://drive.google.com/file/d/1APe_KQg8gz7xHlVG5HbKEOe0jlU8fhem/view" target="_blank">
        Resume
        <Icon className={styles.arrow} type={IconType.ARROW_UP_RIGHT} />
      </a>
    </nav>
  );
}

export default Navbar;