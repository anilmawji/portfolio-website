import styles from './About.module.css'
import Page from './Page';
import ContactSection from '../components/sections/ContactForm';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page title="About Me">
      <div className={styles.sections}>
        <div id="bio" className={styles.bio}>
          <BioSection className="glowBorder" />
        </div>
        <ContactSection className={`${styles.contact} shadowBottom`} />
      </div>
    </Page>
  );
}

export default About;