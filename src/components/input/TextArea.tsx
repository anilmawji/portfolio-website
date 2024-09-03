import styles from './TextArea.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  id: string;
  isRequired?: boolean;
}

const TextArea = ({ className, id, isRequired = false, ...restProps }: PropTypes) => {
  return (
    <textarea
      className={joinClassNames(className, styles.filled)}
      id={id}
      name={id}
      {...restProps}
    />
  );
}

export default TextArea;