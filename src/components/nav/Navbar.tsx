import CustomNavLink from './CustomNavLink';
import styles from './Navbar.module.css';
import HamburgerButton from './HamburgerButton';
import { Icon, IconType } from '../../components/icons/Icon';
import { useNavMenuContext } from '../../contexts/NavMenuContext';
import ResumePdf from '../../assets/anil-mawji-resume-2024.pdf';

const Navbar = () => {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useNavMenuContext();

  return (
    <>
      <nav>
        <HamburgerButton className={styles.hamburger} isOpen={isMenuOpen} onToggle={toggleMenu} />
        <ul>
          <li>
            <CustomNavLink to="/#hero" label="Home" onClick={closeMenu} />
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
            <CustomNavLink to="/about#contact" label="Contact" onClick={closeMenu} />
          </li>
          <li>
            <CustomNavLink to="/blog#featured" label="Blog" onClick={closeMenu} />
          </li>
        </ul>
        <div className={styles.shadow} />
        <a className={styles.resume} href={ResumePdf} target="_blank">
          Resume
          <Icon className={styles.arrow} type={IconType.ARROW_UP_RIGHT} />
        </a>
      </nav>
    </>
  );
}

export default Navbar;