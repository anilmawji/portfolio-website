import styles from './About.module.css';
import Page from './Page';
import CertificationsSection from '../components/sections/Certifications';
import ContactSection from '../components/sections/Contact';

const About = () => {
  return (
    <Page title="About" headerId="bio" includeCircuitLine>
      <div className={styles.sections}>
        <section>
          Bio
        </section>
        <CertificationsSection />
        <ContactSection />
      </div>
    </Page>
  );
}

export default About;