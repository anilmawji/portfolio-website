import styles from './TextArea.module.css';
import { joinClassNames, toTitleCase } from '../../utils';

interface PropTypes extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isRequired?: boolean;
}

const TextArea = ({ className, id, placeholder, isRequired, ...restProps }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.filled, className)}>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder ? toTitleCase(placeholder) + (isRequired ? " *" : "") : ""}
        required={isRequired}
        {...restProps}
      />
      <span className={styles.border}></span>
    </div>
  );
}

export default TextArea;