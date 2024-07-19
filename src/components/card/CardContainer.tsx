import styles from './CardContainer.module.css'

interface PropTypes {
  children: React.ReactNode;
}

const CardContainer = ({ children }: PropTypes) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default CardContainer