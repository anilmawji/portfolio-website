import styles from './Hamburger.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
  isOpen: boolean;
  onToggle?: React.ChangeEventHandler<HTMLInputElement>;
}

const HamburgerButton = ({ className, isOpen, onToggle }: PropTypes) => {
  return (
    <label className={joinClassNames(styles.hamburger, className, isOpen ? "open" : "")}>
      <input type="checkbox" checked={isOpen} onChange={onToggle} />
      <span className={styles.bar1} />
      <span className={styles.bar2} />
      <span className={styles.bar3} />
    </label>
  );
}

export default HamburgerButton;