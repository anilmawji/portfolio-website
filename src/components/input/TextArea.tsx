import styles from './TextArea.module.css';
import { joinClassNames, toTitleCase } from '../../utils';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isRequired?: boolean;
  borderColor?: string;
}

const TextArea = ({ className, id, placeholder, isRequired, borderColor, ...restProps }: Props) => {
  const textAreaStyle = {
    '--ta-border-color': borderColor
  } as React.CSSProperties;

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