import styles from './Button.module.css';
import LoadingIcon from '../../components/icons/LoadingIcon';
import { joinClassNames } from '../../utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const CustomButton = ({ className, text, disabled, isLoading, children, ...restProps }: Props) => {
  return (
    <button
      className={joinClassNames(styles.pushable, className)}
      disabled={disabled || isLoading}
      {...restProps}
    >
      <div className={styles.front}>
      {isLoading ? (
        <LoadingIcon size={20} borderThickness={3} />
      ) : (
        <>{text}{children}</>
      )}
      </div>
    </button>
  );
}

export default CustomButton;