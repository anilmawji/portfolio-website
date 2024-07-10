import styles from './Hamburger.module.css'
import useBoolean from "../../hooks/useBoolean";

interface PropTypes {
  className?: string;
}

const HamburgerButton = (props: PropTypes) => {
  const { value: isChecked, toggle } = useBoolean(false);

  const combinedClassName: string = (`
    ${styles.hamburger}
    ${props.className ?? ''}
    ${isChecked ? "open" : "closed"}
  `).trim();

  return (
    <label className={combinedClassName}>
      <input type="checkbox" onChange={toggle}/>
      <span className={styles.bar1} />
      <span className={styles.bar2} />
      <span className={styles.bar3} />
    </label>
  )
}

export default HamburgerButton