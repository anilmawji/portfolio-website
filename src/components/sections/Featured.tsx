import styles from './Featured.module.css'
import Card from '../card/Card'
import arch_desktop from '../../assets/arch_desktop.png'
import CardContainer from '../card/CardContainer'

const FeaturedSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer>
        <Card image={arch_desktop} title="Template Post" description={"ok"} tags={["tag1"]} />
        <Card image={arch_desktop} title="Template Post" description={"ok"} tags={["tag1"]} />
        <Card image={arch_desktop} title="Template Post" description={"ok"} tags={["tag1"]} />
        <Card image={arch_desktop} title="Template Post" description={"ok"} tags={["tag1"]} />
      </CardContainer>
    </div>
  )
}

export default FeaturedSection