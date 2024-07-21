import styles from './Home.module.css'
import ParticleCanvas from '../components/canvas/ParticleCanvas'
import HeroSection from '../components/sections/Hero'
import FeaturedSection from '../components/sections/Featured'
import SvgFox from '../components/icons/SvgFox'

const Home = () => {
  return (
    <div className="page">
      <div className={`${styles.background}`}>
        <SvgFox className={styles.fox} />
        <ParticleCanvas
          className={styles.canvas}
          particleRadius={2}
          particleRgbColor="rgb(108,250,132)"
          mousePushRadius={50}
          maxOpacity={0.65}
        />
        <div className={`${styles.curve}`} />
      </div>
      <div className={styles.container}>
        <HeroSection />
        <FeaturedSection />
        {/* <PortfolioSection /> */}
      </div>
    </div>
  )
}

export default Home