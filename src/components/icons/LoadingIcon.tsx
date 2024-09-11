import styles from './LoadingIcon.module.css'

const LoadingIcon = ({ ...restProps }: React.HTMLProps<HTMLDivElement>) => {
    return (
      <div className={styles.icon} {...restProps}>
          <div />
          <div />
          <div />
          <div />
      </div>
    );
}
  
export default LoadingIcon;