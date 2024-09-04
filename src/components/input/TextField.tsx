import styles from './TextField.module.css';
import { joinClassNames, capitalizeFirstChar } from '../../utils';

interface PropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  text: string;
  isRequired?: boolean;
}

const InputField = ({ className, id, text, isRequired = false, ...restProps }: PropTypes) => {
  // TODO use separate element for the "*" so you can hide it when input is focused and color it red
  return (
    <div className={joinClassNames(className, styles.filled)}>
      <input name={id} id={id} required {...restProps} />
      <div className={styles.underline} />
      <label htmlFor={id}>
        {capitalizeFirstChar(text) + (isRequired ? " *" : "")}
      </label>
    </div>
  );
}

export default InputField;