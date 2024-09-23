import styles from './TextField.module.css';
import { joinClassNames, toTitleCase, ReactCSSVariables } from '../../utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
  isRequired?: boolean;
  textColor?: string;
}

const TextField = ({ className, id, placeholder, isRequired, textColor, ...restProps }: Props) => {
  const textFieldStyle: ReactCSSVariables = {
    '--tf-text-color': textColor
  };

  return (
    <div className={joinClassNames(styles.filled, className)} style={textFieldStyle}>
      <input
        id={id}
        name={id}
        required={isRequired}
        // Empty placeholder allows for error color to function correctly
        placeholder=''
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