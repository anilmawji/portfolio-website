import styles from './Home.module.css'
import ParticleCanvas from '../components/canvas/ParticleCanvas'
import Hero from '../components/sections/Hero'
import Featured from '../components/sections/Featured'
import SvgWolf from '../components/icons/SvgWolf'

const Home = () => {
  //const style = {"--background-height": toPixels(window.innerHeight - 60)} as React.CSSProperties;

  return (
    <div className="page">
      <div className={`${styles.background} dotted-bg`}>
        <SvgWolf className={styles.fox} />
        <ParticleCanvas
          className={styles.canvas}
          particleRadius={2}
          particleRgbColor="rgb(108, 250, 132)"
          mousePushRadius={50}
          maxOpacity={0.65}
        />
        <div className={`${styles.curve} dotted-bg`} />
      </div>
      <div className={styles.container}>
        <Hero />
        <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
        <Featured />
      </div>
    </div>
  )
}

export default Home