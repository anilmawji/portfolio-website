import styles from './TextArea.module.css';
import { joinClassNames, toTitleCase, ReactCSSVariables } from '../../utils';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isRequired?: boolean;
  borderColor?: string;
}

const TextArea = ({ className, id, placeholder, isRequired, borderColor, ...restProps }: Props) => {
  const textAreaStyle: ReactCSSVariables = {
    '--ta-border-color': borderColor
  };

  return (
    <div className={joinClassNames(styles.filled, className)} style={textAreaStyle}>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder ? `${toTitleCase(placeholder)}${(isRequired ? ' *' : '')}` : ''}
        required={isRequired}
        {...restProps}
      />
      <span className={styles.border} />
    </div>
  );
}

export default TextArea;