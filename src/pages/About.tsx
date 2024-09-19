import styles from './About.module.css'
import globalStyles from '../global.module.css';
import Page from './Page';
import ExperienceSection from '../components/sections/Experience';
import ContactSection from '../components/sections/ContactForm';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page id="bio" title="About Me">
      <div className={styles.sections}>
        <div className={styles.bio}>
          <BioSection className={globalStyles.glowBorder} />
        </div>
        <ExperienceSection className={`${styles.experience} ${globalStyles.shadowBottom}`} />
        <ContactSection className={`${styles.contact} ${globalStyles.shadowBottom}`} />
      </div>
    </Page>
  );
}

export default About;