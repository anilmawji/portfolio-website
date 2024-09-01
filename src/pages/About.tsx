import styles from './About.module.css';
import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page title="About Me" headerId="bio">
      <div className={styles.sections}>
        <BioSection />
        <ContactSection />
      </div>
    </Page>
  );
}

export default About;