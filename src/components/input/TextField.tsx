import styles from './TextField.module.css';
import { joinClassNames, toTitleCase } from '../../utils';

interface PropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
  isRequired?: boolean;
}

const InputField = ({ className, id, placeholder, isRequired, ...restProps }: PropTypes) => {
  return (
    <div className={joinClassNames(className, styles.filled)}>
      <input
        id={id}
        name={id}
        required={isRequired}
        {...restProps}
      />
      <div className={styles.underline} />
      <label htmlFor={id}>
        {toTitleCase(placeholder) + (isRequired ? " *" : "")}
      </label>
    </div>
  );
}

export default InputField;