import styles from './Tag.module.css'

interface PropTypes {
  label: string,
  color?: string
}

const Tag = ({ label, color }: PropTypes) => {
  return (
    <div className={styles.tag}>{label}</div>
  )
}

export default Tag