import styles from './TextField.module.css';
import { joinClassNames, toTitleCase } from '../../utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
  isRequired?: boolean;
}

const TextField = ({ className, id, placeholder, isRequired, ...restProps }: Props) => {
  return (
    <div className={joinClassNames(styles.filled, className)}>
      <input
        id={id}
        name={id}
        required={isRequired}
        {...restProps}
      />
      <div className={styles.underline} />
      <label htmlFor={id}>
        {`${toTitleCase(placeholder)}${isRequired ? ' *' : ''}`}
      </label>
    </div>
  );
}

export default TextField;