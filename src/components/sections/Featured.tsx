import styles from './Featured.module.css'
import CardContainer from '../card/CardContainer'

const FeaturedSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer />
    </div>
  )
}

export default FeaturedSection