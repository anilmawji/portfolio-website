import styles from './Section.module.css'

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: PropTypes) => {
  const combinedClassName = `${styles.container} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  )
}

export default Section