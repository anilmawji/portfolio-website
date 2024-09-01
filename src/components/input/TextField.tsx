import styles from './TextField.module.css';
import { joinClassNames, capitalizeFirstChar } from '../../utils';

interface PropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text: string;
  id: string;
}

const InputField = ({ className, text, id, ...restProps }: PropTypes) => {
  return (
    <div className={joinClassNames(className, styles.filled)}>
      <input type="text" name={id} id={id} required {...restProps} />
      <div className={styles.underline} />
      <label htmlFor={id}>
        {capitalizeFirstChar(text)}
      </label>
    </div>
  );
}

export default InputField;