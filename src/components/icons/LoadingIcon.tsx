import styles from './LoadingIcon.module.css'

interface Props extends React.HTMLProps<HTMLDivElement> {
  size: number;
  borderThickness: number;
}

const LoadingIcon = ({ size, borderThickness, ...restProps }: Props) => {
  const iconStyle = {
    '--icon-size': `${size}px`,
    '--border-thickness': `${borderThickness}px`,
  } as React.CSSProperties;

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