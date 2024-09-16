import styles from './Home.module.css';
import globalStyles from '../global.module.css';
import Page from './Page';
import ParticleCanvas from '../components/canvas/ParticleCanvas';
import HeroSection from '../components/sections/Hero';
import ExperienceSection from '../components/sections/Experience';
import CardContainer from '../components/card/CardContainer';
import ProjectData from '../data/ProjectData';
import { getCssValue, hexToRgb } from '../utils';

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
        <div className={styles.bottom}>
          <ExperienceSection />
          <CardContainer
            id="projects"
            className={globalStyles.cardContainer}
            title="Projects"
            cardData={ProjectData}
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;