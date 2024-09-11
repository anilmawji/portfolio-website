import styles from './Button.module.css';
import LoadingIcon from '../../components/icons/LoadingIcon';
import { joinClassNames } from '../../utils';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const CustomButton = ({ className, text, disabled, isLoading, children, ...restProps }: PropTypes) => {
  return (
    <button
      className={joinClassNames(styles.pushable, className)}
      disabled={disabled || isLoading}
      {...restProps}
    >
      <div className={styles.front}>
        <div className={styles.front}>
          {isLoading
            ? <LoadingIcon />
            : <>{text} {children}</>}
        </div>
      </div>
    </button>
  );
}

export default CustomButton;