import useBoolean from '../../hooks/useBoolean';
import CustomNavLink from './CustomNavLink';
import styles from './Navbar.module.css';
import HamburgerButton from './HamburgerButton';

interface Props {
  drawerDelay?: number;
}

const Navbar = ({ drawerDelay = 250 }: Props) => {
  const { value: isHamburgerOpen, toggle, setFalse } = useBoolean(false);

  // Adds a short delay before closing the navbar
  async function closeHamburgerDrawer() {
    if (isHamburgerOpen) {
      setTimeout(() => {
        setFalse();
      }, drawerDelay);
    }
  }

  return (
    <nav>
      <HamburgerButton className={styles.hamburger} isOpen={isHamburgerOpen} onToggle={toggle} />
      <ul>
        <li>
          <CustomNavLink to="/" label="Home" onClick={closeHamburgerDrawer} />
        </li>
        <li>
          <CustomNavLink to="/portfolio" label="Portfolio" onClick={closeHamburgerDrawer} />
        </li>
        <li>
          <CustomNavLink to="/about" label="About" onClick={closeHamburgerDrawer} />
        </li>
        <li>
          <CustomNavLink to="/about#contact" label="Contact" onClick={closeHamburgerDrawer} />
        </li>
        <li>
          <CustomNavLink to="/blog" label="Blog" onClick={closeHamburgerDrawer} />
        </li>
      </ul>
      <div className={styles.shadow} />
    </nav>
  );
}

export default Navbar;