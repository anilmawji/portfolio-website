import styles from './Home.module.css'
import Hero from '../components/sections/Hero'
import Featured from '../components/sections/Featured'
import SvgFox from '../components/icons/SvgFox'
import ParticleCanvas from '../components/ParticleCanvas'

const Home = () => {
  return (
    <div className="page">
      <div className={styles.background}>
        <SvgFox className={styles.fox} />
        <ParticleCanvas className={styles.canvas}/>
        <div className={styles.curve} />
      </div>
      <div className={styles.container}>
        <Hero />
        <Featured />
      </div>
    </div>
  )
}

export default Home