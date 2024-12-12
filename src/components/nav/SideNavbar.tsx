import styles from './SideNavbar.module.scss';
import globalStyles from '../../global.module.scss';
import { joinClassNames } from '../../utils';
import HamburgerButton from './HamburgerButton';
import { useNavMenuContext } from '../../contexts/NavMenuContext';

const NavButton = () => {
  return (
    <button className={styles.button}>

    </button>
  );
}

const SideNavbar = () => {
  const { isOpen: isNavOpen, toggle: toggleMenu, close: closeMenu } = useNavMenuContext();

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <HamburgerButton className={`${styles.hamburger} ${isNavOpen ? styles.open : ''}`} isOpen={isNavOpen} onToggle={toggleMenu} />
      </div>
      <nav className={joinClassNames(
          styles.nav,
          globalStyles.shadowRightLight,
          isNavOpen ? styles.open : ''
        )}>
      </nav>
    </>
  );
}

export default SideNavbar;