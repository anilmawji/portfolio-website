import styles from './Navbar.module.css'
import CustomNavLink from './CustomNavLink'
import SearchBar from '../SearchBar'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <CustomNavLink to="/" label="Home" />
        <CustomNavLink to="/portfolio" label="Portfolio" />
        <CustomNavLink to="/blog" label="Blog" />
        <CustomNavLink to="/about#bio" label="About" />
        <CustomNavLink to="/about#contact" label="Contact" />
        <SearchBar />
      </ul>
    </nav>
  )
}

export default Navbar