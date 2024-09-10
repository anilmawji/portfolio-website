import styles from './GlitchedText.module.css';
import { joinClassNames } from '../utils';

interface PropTypes {
  className?: string;
  children: React.ReactNode;
}

const GlitchedText = ({ className, children }: PropTypes) => {
  const stackStyle = {'--stacks': '3'} as React.CSSProperties;

  return (
    <div className={joinClassNames(styles.stack, className)} style={stackStyle}>
      <span style={{'--index': '0'} as React.CSSProperties}>{children}</span>
      <span style={{'--index': '1'} as React.CSSProperties}>{children}</span>
      <span style={{'--index': '2'} as React.CSSProperties}>{children}</span>
    </div>
  );
}

export default GlitchedText;