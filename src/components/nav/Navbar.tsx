import styles from './Navbar.module.css'
import CustomNavLink from './CustomNavLink'
import HamburgerButton from './HamburgerButton'
import SearchBar from '../SearchBar'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <HamburgerButton className={styles.hamburger} />
      <ul>
        <CustomNavLink to="/" label="Home" />
        <CustomNavLink to="/portfolio" label="Portfolio" />
        <CustomNavLink to="/blog" label="Blog" />
        <CustomNavLink to="/about#bio" label="About" />
        <CustomNavLink to="/about#contact" label="Contact" />
        {/* <SearchBar /> */}
      </ul>
    </nav>
  )
}

export default Navbar