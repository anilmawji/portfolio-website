import styles from './GlitchedText.module.css';
import globalStyles from '../../global.module.scss';
import { joinClassNames, ReactCSSVariables } from '../../utils';

const stackStyle: ReactCSSVariables = {'--stacks': '3'};
const spanStyle0: ReactCSSVariables = {'--index' : '0'};
const spanStyle1: ReactCSSVariables = {'--index' : '1'};
const spanStyle2: ReactCSSVariables = {'--index' : '2'};

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