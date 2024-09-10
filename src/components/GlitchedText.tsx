import styles from './GlitchedText.module.css';
import { joinClassNames } from '../utils';

const stackStyle = {'--stacks': '3'} as React.CSSProperties;
const spanStyle0 = {'--index' : '0'} as React.CSSProperties;
const spanStyle1 = {'--index' : '1'} as React.CSSProperties;
const spanStyle2 = {'--index' : '2'} as React.CSSProperties;

interface PropTypes {
  className?: string;
  children: React.ReactNode;
}

const GlitchedText = ({ className, children }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.stack, className)} style={stackStyle}>
      <span style={spanStyle0}>{children}</span>
      <span style={spanStyle1}>{children}</span>
      <span style={spanStyle2}>{children}</span>
    </div>
  );
}

export default GlitchedText;