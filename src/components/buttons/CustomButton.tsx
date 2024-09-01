import styles from './CustomButton.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const CustomButton = ({ className, text, children }: PropTypes) => {
  return (
    <div className={joinClassNames(className, styles.container)}>
      <button className={styles.button}>
        {text}
        {children}
      </button>
      <div className={styles.border} />
    </div>
  );
}

export default CustomButton;