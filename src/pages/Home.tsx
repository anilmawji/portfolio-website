import styles from './Home.module.css'
import ParticleCanvas from '../components/canvas/ParticleCanvas'
import HeroSection from '../components/sections/Hero'
import FeaturedSection from '../components/sections/Featured'
import SvgFox from '../components/icons/SvgFox'
import Footer from '../components/sections/Footer'
import SvgCircuit from '../components/icons/SvgCircuit'

const Home = () => {
  return (
    <div className="page">
      <div className={styles.background}>
        <SvgFox className={styles.fox} />
        <ParticleCanvas
          className={styles.canvas}
          particleRadius={2}
          particleRgbColor="rgb(108,250,132)"
          mousePushRadius={50}
          maxOpacity={0.65}
        />
        <div className={styles.curve} />
      </div>
      <div className={styles.container}>
        <HeroSection className={styles.hero} />
        <div className={styles.bottom}>
          <div className={styles.circuit}>
            <SvgCircuit className={styles.circuit_top} color={"var(--main-fg-color)"} />
            <div className={styles.line} />
            <SvgCircuit className={styles.circuit_bottom} color={"var(--main-fg-color)"}/>
          </div>
          <FeaturedSection className={styles.featured} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home