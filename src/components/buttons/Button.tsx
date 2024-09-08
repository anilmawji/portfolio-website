import styles from './Button.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const CustomButton = ({ className, text, children, ...restProps }: PropTypes) => {
  return (
    <button className={joinClassNames(className, styles.pushable)} {...restProps}>
      <div className={styles.front}>
        {text}
        {children}
      </div>
    </button>
  );
}

export default CustomButton;