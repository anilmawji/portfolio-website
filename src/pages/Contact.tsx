import globalStyles from '../global.module.css';
import Page from './Page';
import ContactSection from '../components/sections/ContactForm';

const About = () => {
  return (
    <Page title="Contact Me">
      <div className={globalStyles.sections}>
        <ContactSection className={globalStyles.shadowBottom} />
      </div>
    </Page>
  );
}

export default About;