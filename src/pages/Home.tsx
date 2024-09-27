import styles from './Home.module.css';
import globalStyles from '../global.module.scss';
import Page from './Page';
import ParticleCanvas from '../components/canvas/ParticleCanvas';
import HeroSection from '../components/sections/Hero';
import CardContainer from '../components/card/CardContainer';
import { Projects } from '../data/ProjectData';
import { getCssValue, hexToRgb } from '../utils';
import TechnicalSkills from '../components/sections/TechnicalSkills';

const NEON_GREEN_COLOR = hexToRgb(getCssValue("neon-green"));

const Home = () => {
  return (
    <Page id="hero">
      <div className={styles.background}>
        <ParticleCanvas
          className={styles.canvas}
          particleRadius={2}
          particleRgbColor={NEON_GREEN_COLOR}
          mousePushRadius={50}
          maxOpacity={0.55}
        />
        <div className={styles.curve} />
      </div>
      <div className={styles.container}>
        <HeroSection className={styles.hero} />
        <div className={`${styles.bottom} ${globalStyles.cardContainer}`}>
          <TechnicalSkills />
          <CardContainer
            id="projects"
            title="Projects"
            cardData={Projects}
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;