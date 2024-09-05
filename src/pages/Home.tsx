import styles from './Home.module.css';
import Page from './Page';
import ParticleCanvas from '../components/canvas/ParticleCanvas';
import HeroSection from '../components/sections/Hero';
import CardContainer from '../components/card/CardContainer';
import BlogData from '../data/BlogData';
import CircuitLine from '../components/CircuitLine';
import { getCssValue, hexToRgb } from '../utils';

const NEON_GREEN_COLOR = hexToRgb(getCssValue("neon-green"));

const Home = () => {
  return (
    <Page>
      <div className={styles.background}>
        {/* <SvgFox className={styles.fox} /> */}
        <ParticleCanvas
          className={styles.canvas}
          particleRadius={2}
          particleRgbColor={NEON_GREEN_COLOR}
          mousePushRadius={50}
          maxOpacity={0.65}
        />
        <div className={styles.curve} />
      </div>
      <div className={styles.container}>
        <HeroSection className={styles.hero} />
        <div className={styles.bottom}>
          <CircuitLine className={styles.circuit}/>
          <CardContainer
            className={styles.featured}
            title="Featured Posts"
            cardData={BlogData}
            includeReadingTime
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;