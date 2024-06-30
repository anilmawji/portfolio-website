import styles from './SearchBar.module.css'
import logo from '../assets/icons/32px-magnifying-glass.png'

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <img src={logo} alt='Logo' />
    </div>
  )
}

export default SearchBar