import styles from '../components/CustomButton.module.css'

interface PropTypes {
  children: string;
}

const CustomButton = ({ children }: PropTypes) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default CustomButton