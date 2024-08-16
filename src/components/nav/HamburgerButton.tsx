import styles from './Hamburger.module.css';

interface PropTypes {
  className?: string;
  isOpen: boolean;
  onToggle?: React.ChangeEventHandler<HTMLInputElement>;
}

const HamburgerButton = ({ className, isOpen, onToggle }: PropTypes) => {
  const combinedClassName: string = (`
    ${styles.hamburger}
    ${className ?? ""}
    ${isOpen ? "open" : ""}
  `).trim();

  return (
    <label className={combinedClassName}>
      <input type="checkbox" checked={isOpen} onChange={onToggle} />
      <span className={styles.bar1} />
      <span className={styles.bar2} />
      <span className={styles.bar3} />
    </label>
  );
}

export default HamburgerButton;