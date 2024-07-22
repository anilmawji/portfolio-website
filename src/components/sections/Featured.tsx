import styles from './Featured.module.css'
import CardContainer from '../card/CardContainer'

const FeaturedSection = ({ ...restStyles }) => {
  return (
    <div className={styles.container} {...restStyles}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer />
    </div>
  )
}

export default FeaturedSection