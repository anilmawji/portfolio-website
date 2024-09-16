import styles from './GlitchedText.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';

const stackStyle = {'--stacks': '3'} as React.CSSProperties;
const spanStyle0 = {'--index' : '0'} as React.CSSProperties;
const spanStyle1 = {'--index' : '1'} as React.CSSProperties;
const spanStyle2 = {'--index' : '2'} as React.CSSProperties;

interface Props {
  className?: string;
  children: React.ReactNode;
}

const GlitchedText = ({ className, children }: Props) => {
  return (
    <div className={joinClassNames(styles.stack, className)} style={stackStyle}>
      <span style={spanStyle0} className={globalStyles.noSelect}>
        {children}
      </span>
      <span style={spanStyle1}>
        {children}
      </span>
      <span style={spanStyle2} className={globalStyles.noSelect}>
        {children}
      </span>
    </div>
  );
}

export default GlitchedText;