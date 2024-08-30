import styles from './CustomButton.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
}

const CustomButton = ({ className, text }: PropTypes) => {
  return (
    <div className={joinClassNames(className, styles.container)}>
      <button className={styles.button}>
        {text}
      </button>
      <div className={styles.border} />
    </div>
  );
}

export default CustomButton;