import styles from './HamburgerButton.module.css';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
  isOpen: boolean;
  onToggle?: React.ChangeEventHandler<HTMLInputElement>;
}

const HamburgerButton = ({ className, isOpen, onToggle }: Props) => {
  return (
    <label className={joinClassNames(
      styles.hamburger,
      className,
      isOpen ? 'open' : ''
    )}>
      <input type="checkbox" checked={isOpen} onChange={onToggle} />
      <span className={styles.bar1} />
      <span className={styles.bar2} />
      <span className={styles.bar3} />
    </label>
  );
}

export default HamburgerButton;