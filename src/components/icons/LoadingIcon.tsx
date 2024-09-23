import styles from './LoadingIcon.module.css';
import { ReactCSSVariables } from 'utils';

interface Props extends React.HTMLProps<HTMLDivElement> {
  size: number;
  borderThickness: number;
}

const LoadingIcon = ({ size, borderThickness, ...restProps }: Props) => {
  const iconStyle: ReactCSSVariables = {
    '--icon-size': `${size}px`,
    '--border-thickness': `${borderThickness}px`
  };

  return (
    <div className={styles.icon} style={iconStyle} {...restProps}>
        <div />
        <div />
        <div />
        <div />
    </div>
  );
}
  
export default LoadingIcon;