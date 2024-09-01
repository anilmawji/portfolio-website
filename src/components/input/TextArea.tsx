import styles from './TextArea.module.css';
import { joinClassNames, capitalizeFirstChar } from '../../utils';

interface PropTypes extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  id: string;
}

const TextArea = ({ className, id, ...restProps }: PropTypes) => {
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